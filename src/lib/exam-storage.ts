// Local persistence for attempts and lockouts. Keyed by user identity (email + phone).

export interface UserIdentity {
  name: string;
  email: string;
  phone: string;
}

export interface AttemptRecord {
  attemptNumber: number; // 1..3
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
  cheatLockUntil?: string; // ISO — temporary lock from anti-cheat (5hr)
  retakeCooldownUntil?: string; // ISO — 2-week lock after 3 failed attempts
  finalReportSent?: boolean;
}

const KEY_PREFIX = "tpm-cbt:user:";

export function userKey(identity: Pick<UserIdentity, "email" | "phone">) {
  const email = identity.email.trim().toLowerCase();
  const phone = identity.phone.replace(/\D/g, "");
  return `${KEY_PREFIX}${email}|${phone}`;
}

export function getUserState(identity: Pick<UserIdentity, "email" | "phone">): UserState | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(userKey(identity));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as UserState;
  } catch {
    return null;
  }
}

export function saveUserState(state: UserState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(userKey(state.identity), JSON.stringify(state));
}

export function initUserState(identity: UserIdentity): UserState {
  const existing = getUserState(identity);
  if (existing) {
    // Update identity name in case casing changed
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
  const until = new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
  state.cheatLockUntil = until;
  saveUserState(state);
  return state;
}

export function setRetakeCooldown(identity: UserIdentity, weeks: number): UserState {
  const state = getUserState(identity) ?? initUserState(identity);
  const until = new Date(Date.now() + weeks * 7 * 24 * 60 * 60 * 1000).toISOString();
  state.retakeCooldownUntil = until;
  saveUserState(state);
  return state;
}

export function markFinalReportSent(identity: UserIdentity): UserState {
  const state = getUserState(identity) ?? initUserState(identity);
  state.finalReportSent = true;
  saveUserState(state);
  return state;
}

export function isCheatLocked(state: UserState | null): { locked: boolean; until?: Date } {
  if (!state?.cheatLockUntil) return { locked: false };
  const until = new Date(state.cheatLockUntil);
  if (until.getTime() > Date.now()) return { locked: true, until };
  return { locked: false };
}

export function isRetakeLocked(state: UserState | null): { locked: boolean; until?: Date } {
  if (!state?.retakeCooldownUntil) return { locked: false };
  const until = new Date(state.retakeCooldownUntil);
  if (until.getTime() > Date.now()) return { locked: true, until };
  return { locked: false };
}

export function attemptsLeft(state: UserState | null): number {
  if (!state) return 3;
  return Math.max(0, 3 - state.attempts.length);
}

export function bestAttempt(state: UserState | null): AttemptRecord | null {
  if (!state || state.attempts.length === 0) return null;
  return state.attempts.reduce((best, a) => (a.percentage > best.percentage ? a : best), state.attempts[0]);
}
