// Local persistence for attempts and lockouts.
// Keys are stored per-user. Identity matching uses fuzzy logic across
// name + email + phone so users cannot bypass locks by changing one field.

export interface UserIdentity {
  name: string;
  email: string;
  phone: string;
}

export interface AttemptRecord {
  attemptNumber: number;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  completedAt: string; // ISO
  durationSec: number;
  cheatSwaps: number;
}

export interface UserState {
  identity: UserIdentity;
  attempts: AttemptRecord[];
  cheatLockUntil?: string;
  retakeCooldownUntil?: string;
}

const KEY_PREFIX = "tpm-cbt:user:";

// ─── Normalisation helpers ───────────────────────────────────────────────────

function normEmail(e: string) {
  return e.trim().toLowerCase();
}

function normPhone(p: string) {
  // strip everything except digits, drop leading country-code zeros loosely
  return p.replace(/\D/g, "").replace(/^0+/, "");
}

function normName(n: string) {
  // lowercase, remove spaces/punctuation — "Jane  Doe" ≈ "janedoe"
  return n.trim().toLowerCase().replace(/[\s\-'.]/g, "");
}

/**
 * Returns true if the two identities belong to the same person.
 * A "match" requires at least TWO of the three fields to agree,
 * OR email alone (since email is the strongest unique identifier).
 */
function isSamePerson(a: UserIdentity, b: UserIdentity): boolean {
  const emailMatch = normEmail(a.email) === normEmail(b.email);
  const phoneMatch = normPhone(a.phone) === normPhone(b.phone) && normPhone(a.phone).length >= 6;
  const nameMatch  = normName(a.name)  === normName(b.name)  && normName(a.name).length >= 3;

  // Email alone is sufficient — it's the primary unique key
  if (emailMatch) return true;
  // Phone + name together also count (covers email-change attempts)
  if (phoneMatch && nameMatch) return true;

  return false;
}

// ─── Storage helpers ─────────────────────────────────────────────────────────

function allStoredStates(): UserState[] {
  if (typeof window === "undefined") return [];
  const results: UserState[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k?.startsWith(KEY_PREFIX)) continue;
    try {
      const parsed = JSON.parse(localStorage.getItem(k)!) as UserState;
      if (parsed?.identity) results.push(parsed);
    } catch { /* skip corrupt entries */ }
  }
  return results;
}

function storageKey(identity: UserIdentity): string {
  // Canonical key derived from normalised email (most stable field)
  return `${KEY_PREFIX}${normEmail(identity.email)}`;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Find the stored UserState that matches this identity (fuzzy across all fields).
 * Returns null if no match found.
 */
export function getUserState(identity: UserIdentity): UserState | null {
  if (typeof window === "undefined") return null;

  // 1. Fast path: exact key lookup by normalised email
  const direct = localStorage.getItem(storageKey(identity));
  if (direct) {
    try { return JSON.parse(direct) as UserState; } catch { /* fall through */ }
  }

  // 2. Slow path: scan all stored states for a fuzzy match
  //    (handles case where user registered with a different email originally)
  const all = allStoredStates();
  return all.find((s) => isSamePerson(s.identity, identity)) ?? null;
}

export function saveUserState(state: UserState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(storageKey(state.identity), JSON.stringify(state));
}

export function initUserState(identity: UserIdentity): UserState {
  const existing = getUserState(identity);
  if (existing) {
    // Keep the canonical stored identity; only update display name casing
    existing.identity = { ...existing.identity, name: identity.name };
    saveUserState(existing);
    return existing;
  }
  const fresh: UserState = { identity, attempts: [] };
  saveUserState(fresh);
  return fresh;
}

export function recordAttempt(identity: UserIdentity, attempt: AttemptRecord): UserState {
  const state = getUserState(identity) ?? initUserState(identity);
  state.attempts.push(attempt);
  saveUserState(state);
  return state;
}

export function setCheatLock(identity: UserIdentity, hours: number): UserState {
  const state = getUserState(identity) ?? initUserState(identity);
  state.cheatLockUntil = new Date(Date.now() + hours * 3_600_000).toISOString();
  saveUserState(state);
  return state;
}

export function setRetakeCooldown(identity: UserIdentity, weeks: number): UserState {
  const state = getUserState(identity) ?? initUserState(identity);
  state.retakeCooldownUntil = new Date(Date.now() + weeks * 7 * 86_400_000).toISOString();
  saveUserState(state);
  return state;
}

export function isCheatLocked(state: UserState | null): { locked: boolean; until?: Date } {
  if (!state?.cheatLockUntil) return { locked: false };
  const until = new Date(state.cheatLockUntil);
  return until.getTime() > Date.now() ? { locked: true, until } : { locked: false };
}

export function isRetakeLocked(state: UserState | null): { locked: boolean; until?: Date } {
  if (!state?.retakeCooldownUntil) return { locked: false };
  const until = new Date(state.retakeCooldownUntil);
  return until.getTime() > Date.now() ? { locked: true, until } : { locked: false };
}

export function attemptsLeft(state: UserState | null): number {
  if (!state) return 3;
  return Math.max(0, 3 - state.attempts.length);
}

export function bestAttempt(state: UserState | null): AttemptRecord | null {
  if (!state || state.attempts.length === 0) return null;
  return state.attempts.reduce((b, a) => (a.percentage > b.percentage ? a : b), state.attempts[0]);
}
