import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect, useMemo } from "react";
import { formatDuration } from "@/lib/utils-exam";
import type { UserState } from "@/lib/exam-storage";

// Read all attempts stored locally in this browser
function readLocalAttempts(): AttemptDoc[] {
  const PREFIX = "tpm-cbt:user:";
  const out: AttemptDoc[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(PREFIX)) continue;
    try {
      const state = JSON.parse(localStorage.getItem(key)!) as UserState;
      if (!state?.identity || !Array.isArray(state.attempts)) continue;
      for (const a of state.attempts) {
        out.push({
          name: state.identity.name,
          email: state.identity.email,
          attemptNumber: a.attemptNumber,
          score: a.score,
          total: a.total,
          percentage: a.percentage,
          passed: a.passed,
          completedAt: a.completedAt,
          durationSec: a.durationSec,
          cheatSwaps: a.cheatSwaps,
          cheatLock: false,
          savedAt: a.completedAt,
          source: "local",
        });
      }
    } catch { /* skip */ }
  }
  return out;
}

function mergeAttempts(local: AttemptDoc[], remote: AttemptDoc[]): AttemptDoc[] {
  // Deduplicate: prefer remote (has savedAt), skip local if same email+attempt exists remotely
  const remoteKeys = new Set(remote.map((a) => `${a.email.toLowerCase()}::${a.attemptNumber}`));
  const uniqueLocal = local.filter((a) => !remoteKeys.has(`${a.email.toLowerCase()}::${a.attemptNumber}`));
  return [...remote, ...uniqueLocal].sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime());
}

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const border = "1.5px solid var(--border)";

interface AttemptDoc {
  name: string;
  email: string;
  attemptNumber: number;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  completedAt: string;
  durationSec: number;
  cheatSwaps: number;
  cheatLock: boolean;
  savedAt: string;
  source?: "local" | "remote";
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function AdminPage() {
  const [secret, setSecret] = useState(() => sessionStorage.getItem("tpm-admin-secret") ?? "");
  const [input, setInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [attempts, setAttempts] = useState<AttemptDoc[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  const isLoggedIn = !!secret;

  async function login() {
    setLoginError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin-data", {
        headers: { Authorization: `Bearer ${input.trim()}` },
      });
      if (res.status === 401) { setLoginError("Incorrect password."); return; }
      if (!res.ok) { setLoginError("Server error — try again."); return; }
      const data = await res.json();
      sessionStorage.setItem("tpm-admin-secret", input.trim());
      setSecret(input.trim());
      setAttempts(data);
    } catch {
      setLoginError("Could not reach server.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isLoggedIn) return;
    setLoading(true);

    // Always read localStorage immediately
    const local = readLocalAttempts();

    fetch("/api/admin-data", { headers: { Authorization: `Bearer ${secret}` } })
      .then((r) => r.ok ? r.json() : Promise.resolve([]))
      .then((remote: AttemptDoc[]) => {
        setAttempts(mergeAttempts(local, remote.map((a) => ({ ...a, source: "remote" as const }))));
      })
      .catch(() => {
        // API failed — show local data only
        setAttempts(local);
      })
      .finally(() => setLoading(false));
  }, [isLoggedIn, secret]);

  function logout() {
    sessionStorage.removeItem("tpm-admin-secret");
    setSecret(""); setAttempts([]); setSelectedEmail(null);
  }

  const userMap = useMemo(() => {
    const m = new Map<string, AttemptDoc[]>();
    for (const a of attempts) {
      const key = a.email.toLowerCase();
      if (!m.has(key)) m.set(key, []);
      m.get(key)!.push(a);
    }
    m.forEach((v) => v.sort((a, b) => a.attemptNumber - b.attemptNumber));
    return m;
  }, [attempts]);

  const users = useMemo(() =>
    Array.from(userMap.entries()).map(([email, atts]) => {
      const best = Math.max(...atts.map((a) => a.percentage));
      const last = atts.reduce((a, b) => new Date(a.savedAt) > new Date(b.savedAt) ? a : b);
      return { email, name: last.name, attempts: atts.length, best, passed: atts.some((a) => a.passed), last };
    }).sort((a, b) => new Date(b.last.savedAt).getTime() - new Date(a.last.savedAt).getTime()),
  [userMap]);

  const stats = useMemo(() => {
    if (!attempts.length) return null;
    const passCount = attempts.filter((a) => a.passed).length;
    return {
      users: userMap.size,
      total: attempts.length,
      passRate: Math.round((passCount / attempts.length) * 100),
      avgScore: Math.round(attempts.reduce((s, a) => s + a.percentage, 0) / attempts.length),
      avgTime: Math.round(attempts.reduce((s, a) => s + a.durationSec, 0) / attempts.length),
    };
  }, [attempts, userMap]);

  const selectedAttempts = selectedEmail ? (userMap.get(selectedEmail.toLowerCase()) ?? []) : [];

  // ── Login ─────────────────────────────────────────────────────────────────
  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--background)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 380, border, background: "var(--card)" }}>
          <div style={{ padding: "20px 28px", borderBottom: border, background: "var(--surface-elevated)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ ...mono, color: "#fff", fontSize: 13, fontWeight: 700 }}>TPM</span>
            </div>
            <span style={{ ...mono, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" as const, fontWeight: 700 }}>ADMIN ACCESS</span>
          </div>
          <div style={{ padding: "28px" }}>
            <label style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", color: "var(--muted-foreground)", display: "block", marginBottom: 6 }}>ADMIN PASSWORD</label>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              placeholder="Enter password"
              autoFocus
              style={{ width: "100%", padding: "10px 12px", border, background: "var(--input)", fontFamily: "var(--font-mono)", fontSize: 13, outline: "none", marginBottom: loginError ? 8 : 16, boxSizing: "border-box" as const }}
            />
            {loginError && <p style={{ ...mono, fontSize: 12, color: "var(--destructive)", marginBottom: 12 }}>{loginError}</p>}
            <button
              onClick={login}
              disabled={loading || !input.trim()}
              style={{ ...mono, width: "100%", padding: "11px", background: "var(--primary)", color: "#fff", border: "1.5px solid var(--primary)", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", cursor: loading ? "wait" : "pointer", opacity: !input.trim() ? 0.5 : 1 }}
            >
              {loading ? "CHECKING..." : "ENTER →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>

      <nav style={{ borderBottom: border, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 52, background: "var(--background)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ ...mono, color: "#fff", fontSize: 13, fontWeight: 700 }}>TPM</span>
          </div>
          <span style={{ ...mono, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" as const, fontWeight: 700 }}>ADMIN PANEL_</span>
        </div>
        <button onClick={logout} style={{ ...mono, fontSize: 12, letterSpacing: "0.1em", color: "var(--muted-foreground)", background: "none", border: "none", cursor: "pointer" }}>LOGOUT ×</button>
      </nav>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 32px" }}>

        {loading && <p style={{ ...mono, fontSize: 13, color: "var(--muted-foreground)", marginBottom: 24 }}>LOADING DATA...</p>}
        {!loading && attempts.length > 0 && attempts.some((a) => a.source === "local") && attempts.every((a) => a.source === "local") && (
          <div style={{ ...mono, fontSize: 12, color: "var(--warning)", border: "1px solid var(--warning)", padding: "8px 14px", marginBottom: 20, letterSpacing: "0.04em" }}>
            ⚠ Showing data from this browser only. Remote sync is pending — data from other users will appear once the API is connected.
          </div>
        )}

        {/* Stats */}
        {stats && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", border, marginBottom: 28 }}>
            {[
              [String(stats.users), "Unique Users"],
              [String(stats.total), "Total Attempts"],
              [`${stats.passRate}%`, "Pass Rate"],
              [`${stats.avgScore}%`, "Avg Score"],
              [formatDuration(stats.avgTime), "Avg Time"],
            ].map(([val, lbl], i) => (
              <div key={i} style={{ padding: "20px 22px", borderRight: i < 4 ? border : "none", background: "var(--surface-elevated)" }}>
                <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em" }}>{val}</div>
                <div style={{ ...mono, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--muted-foreground)", marginTop: 4 }}>{lbl}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: selectedEmail ? "1fr 1fr" : "1fr", gap: 20, alignItems: "start" }}>

          {/* User list */}
          <div style={{ border }}>
            <div style={{ padding: "14px 20px", borderBottom: border, background: "var(--surface-elevated)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ ...mono, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}>ALL USERS — {users.length}</span>
              {selectedEmail && <button onClick={() => setSelectedEmail(null)} style={{ ...mono, fontSize: 11, color: "var(--muted-foreground)", background: "none", border: "none", cursor: "pointer" }}>CLEAR ×</button>}
            </div>

            {!users.length && !loading && (
              <div style={{ padding: "24px 20px", ...mono, fontSize: 13, color: "var(--muted-foreground)" }}>No exam attempts recorded yet.</div>
            )}

            {users.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto auto auto", padding: "8px 20px", borderBottom: border, background: "var(--surface)", gap: 12 }}>
                {["USER", "TRIES", "BEST", "LAST", ""].map((h, i) => (
                  <span key={i} style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", color: "var(--muted-foreground)", textAlign: i > 0 ? "right" as const : "left" as const }}>{h}</span>
                ))}
              </div>
            )}

            {users.map((u) => {
              const sel = selectedEmail?.toLowerCase() === u.email.toLowerCase();
              return (
                <button key={u.email} onClick={() => setSelectedEmail(sel ? null : u.email)}
                  style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr auto auto auto auto", gap: 12, padding: "13px 20px", borderBottom: "1px solid var(--muted)", background: sel ? "rgba(92,148,13,0.07)" : "transparent", cursor: "pointer", textAlign: "left", alignItems: "center", borderLeft: sel ? "3px solid var(--primary)" : "3px solid transparent" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{u.name}</div>
                    <div style={{ ...mono, fontSize: 11, color: "var(--muted-foreground)" }}>{u.email}</div>
                  </div>
                  <span style={{ ...mono, fontSize: 12, color: "var(--muted-foreground)" }}>{u.attempts}</span>
                  <span style={{ ...mono, fontSize: 13, fontWeight: 700, color: u.best >= 80 ? "var(--primary)" : u.best >= 60 ? "var(--warning)" : "var(--destructive)" }}>{u.best}%</span>
                  <span style={{ ...mono, fontSize: 11, color: "var(--muted-foreground)", whiteSpace: "nowrap" as const }}>{timeAgo(u.last.savedAt)}</span>
                  <span style={{ ...mono, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "2px 7px", background: u.passed ? "rgba(92,148,13,0.12)" : "rgba(204,34,0,0.08)", color: u.passed ? "var(--primary)" : "var(--destructive)", border: `1px solid ${u.passed ? "var(--primary)" : "var(--destructive)"}` }}>
                    {u.passed ? "PASS" : "FAIL"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* User detail */}
          {selectedEmail && (
            <div style={{ border }}>
              <div style={{ padding: "14px 20px", borderBottom: border, background: "var(--surface-elevated)" }}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{selectedAttempts[0]?.name}</div>
                <div style={{ ...mono, fontSize: 11, color: "var(--muted-foreground)", marginTop: 2 }}>{selectedEmail}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: border }}>
                {[
                  [String(selectedAttempts.length), "Attempts"],
                  [`${Math.max(...selectedAttempts.map((a) => a.percentage))}%`, "Best Score"],
                  [formatDuration(Math.round(selectedAttempts.reduce((s, a) => s + a.durationSec, 0) / selectedAttempts.length)), "Avg Time"],
                ].map(([val, lbl], i) => (
                  <div key={i} style={{ padding: "14px 16px", borderRight: i < 2 ? border : "none", background: "var(--surface-elevated)" }}>
                    <div style={{ fontSize: 20, fontWeight: 700 }}>{val}</div>
                    <div style={{ ...mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--muted-foreground)", marginTop: 3 }}>{lbl}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", color: "var(--muted-foreground)" }}>ATTEMPT HISTORY</div>
                  <button onClick={() => {
                    const key = `tpm-cbt:user:${selectedEmail!.toLowerCase()}`;
                    localStorage.removeItem(key);
                    setAttempts((prev) => prev.filter((a) => a.email.toLowerCase() !== selectedEmail!.toLowerCase()));
                    setSelectedEmail(null);
                  }}
                    style={{ ...mono, fontSize: 10, letterSpacing: "0.1em", color: "var(--destructive)", background: "none", border: "1px solid var(--destructive)", padding: "3px 8px", cursor: "pointer" }}>
                    RESET ATTEMPTS
                  </button>
                </div>
                {selectedAttempts.map((a) => (
                  <div key={`${a.email}-${a.attemptNumber}`} style={{ border: `1.5px solid ${a.passed ? "var(--primary)" : "var(--destructive)"}`, padding: "14px 16px", marginBottom: 10, background: a.passed ? "rgba(92,148,13,0.04)" : "rgba(204,34,0,0.03)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <span style={{ ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em" }}>ATTEMPT {a.attemptNumber}</span>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 18, fontWeight: 700, color: a.passed ? "var(--primary)" : "var(--destructive)" }}>{a.percentage}%</span>
                        <span style={{ ...mono, fontSize: 10, fontWeight: 700, padding: "2px 8px", background: a.passed ? "rgba(92,148,13,0.12)" : "rgba(204,34,0,0.08)", color: a.passed ? "var(--primary)" : "var(--destructive)", border: `1px solid ${a.passed ? "var(--primary)" : "var(--destructive)"}` }}>
                          {a.passed ? "PASS" : "FAIL"}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 0" }}>
                      {([
                        ["Score", `${a.score} / ${a.total} correct`],
                        ["Duration", formatDuration(a.durationSec)],
                        ["Submitted", new Date(a.completedAt).toLocaleString()],
                        ["Tab switches", String(a.cheatSwaps)],
                        ...(a.cheatLock ? [["⚠ Cheat lock", "YES"] as [string, string]] : []),
                      ] as [string, string][]).map(([label, value]) => (
                        <div key={label}>
                          <span style={{ ...mono, fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.08em", display: "block" }}>{label}</span>
                          <span style={{ fontSize: 13, fontWeight: 600 }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
