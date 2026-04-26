import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  attemptsLeft,
  getUserState,
  initUserState,
  isCheatLocked,
  isRetakeLocked,
  recordAttempt,
  setCheatLock,
  setRetakeCooldown,
  type AttemptRecord,
  type UserIdentity,
} from "@/lib/exam-storage";
import { formatDuration, pickReplacement, shuffle } from "@/lib/utils-exam";
import { questions as ALL_QUESTIONS, type Question } from "@/data/questions";
import { cn } from "@/lib/utils";

const TIME_LIMIT_SEC = 60 * 60;
const PASS_THRESHOLD = 80;
const MAX_CHEAT_SWAPS = 5;

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const border = "1.5px solid var(--border)";

export const Route = createFileRoute("/exam")({
  head: () => ({
    meta: [
      { title: "Exam in progress — Practice Test for Technical Product Managers" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: ExamPage,
});

interface ActiveQ extends Question { position: number; }

function ExamPage() {
  const navigate = useNavigate();
  const [identity, setIdentity]   = useState<UserIdentity | null>(null);
  const [order, setOrder]         = useState<ActiveQ[]>([]);
  const [answers, setAnswers]     = useState<Record<number, string>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft]   = useState(TIME_LIMIT_SEC);
  const [cheatSwaps, setCheatSwaps] = useState(0);
  const [showWarning, setShowWarning] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const startedAtRef   = useRef<number>(Date.now());
  const submittedRef   = useRef(false);
  const swapsRef       = useRef(0);
  const usedIdsRef     = useRef<Set<number>>(new Set());
  const currentIdxRef  = useRef(0);
  const cheatCooldownRef = useRef(false);

  useEffect(() => { currentIdxRef.current = currentIdx; }, [currentIdx]);

  // Bootstrap
  useEffect(() => {
    const raw = sessionStorage.getItem("tpm-cbt:active-identity");
    if (!raw) { navigate({ to: "/" }); return; }
    let id: UserIdentity;
    try { id = JSON.parse(raw); } catch { navigate({ to: "/" }); return; }
    const state = getUserState(id) ?? initUserState(id);
    if (isCheatLocked(state).locked || isRetakeLocked(state).locked || attemptsLeft(state) <= 0) {
      navigate({ to: "/" }); return;
    }
    setIdentity(id);
    const shuffled = shuffle(ALL_QUESTIONS).slice(0, 100).map((q, i) => ({ ...q, position: i }));
    shuffled.forEach((q) => usedIdsRef.current.add(q.id));
    setOrder(shuffled);
    startedAtRef.current = Date.now();
  }, [navigate]);

  // Timer
  useEffect(() => {
    if (!identity) return;
    const t = setInterval(() => setTimeLeft((p) => { if (p <= 1) { clearInterval(t); return 0; } return p - 1; }), 1000);
    return () => clearInterval(t);
  }, [identity]);

  // Submit
  const submit = useCallback((auto: boolean, opts?: { cheatLock?: boolean }) => {
    if (submittedRef.current || !identity) return;
    submittedRef.current = true;
    setSubmitting(true);

    const durationSec = Math.min(TIME_LIMIT_SEC, Math.floor((Date.now() - startedAtRef.current) / 1000));
    let score = 0;
    const total = order.length;
    const reviewItems = order.map((q) => {
      const given = answers[q.id];
      const correct = given === q.correct;
      if (correct) score += q.points;
      return { id: q.id, question: q.question, options: q.options, given: given ?? null, correct: q.correct, explanation: q.explanation };
    });
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    const passed = percentage >= PASS_THRESHOLD;

    const state = getUserState(identity);
    const attemptNumber = (state?.attempts.length ?? 0) + 1;
    const attempt: AttemptRecord = { attemptNumber, score, total, percentage, passed, completedAt: new Date().toISOString(), durationSec, cheatSwaps: swapsRef.current };
    let updated = recordAttempt(identity, attempt);
    const isFinal = attemptNumber >= 3 || passed;
    if (!passed && attemptNumber >= 3) updated = setRetakeCooldown(identity, 2);
    if (opts?.cheatLock) updated = setCheatLock(identity, 5);

    sessionStorage.setItem("tpm-cbt:last-review", JSON.stringify({
      identity, attempt, isFinal, autoSubmitted: auto,
      cheatLock: opts?.cheatLock ?? false, review: reviewItems,
      attemptsHistory: updated.attempts.map((a) => ({ attemptNumber: a.attemptNumber, percentage: a.percentage, passed: a.passed })),
    }));
    sessionStorage.removeItem("tpm-cbt:active-identity");

    // Fire-and-forget: send attempt to server for admin analytics
    fetch("/api/save-attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: identity.name,
        email: identity.email,
        attemptNumber: attempt.attemptNumber,
        score: attempt.score,
        total: attempt.total,
        percentage: attempt.percentage,
        passed: attempt.passed,
        completedAt: attempt.completedAt,
        durationSec: attempt.durationSec,
        cheatSwaps: swapsRef.current,
        cheatLock: opts?.cheatLock ?? false,
      }),
    }).catch(() => { /* analytics failure should never block the user */ });

    navigate({ to: "/result" });
  }, [identity, order, answers, navigate]);

  // Auto-submit on zero
  useEffect(() => { if (timeLeft === 0 && identity && !submittedRef.current) submit(true); }, [timeLeft, identity, submit]);

  // Anti-cheat
  const handleCheatEvent = useCallback(() => {
    if (submittedRef.current || order.length === 0) return;
    // Debounce: visibilitychange and blur both fire on a single tab switch;
    // ignore the second event within 500ms so one switch = one penalty.
    if (cheatCooldownRef.current) return;
    cheatCooldownRef.current = true;
    setTimeout(() => { cheatCooldownRef.current = false; }, 500);

    const newCount = swapsRef.current + 1;
    swapsRef.current = newCount;
    setCheatSwaps(newCount);
    if (newCount >= MAX_CHEAT_SWAPS) {
      setShowWarning(`You've left the exam window ${newCount} times. Session ended — locked out for 5 hours.`);
      setTimeout(() => submit(true, { cheatLock: true }), 1200);
      return;
    }
    const idx = currentIdxRef.current;
    const replacedId = order[idx]?.id;
    setOrder((prev) => {
      const cur = prev[idx];
      if (!cur) return prev;
      const replacement = pickReplacement(ALL_QUESTIONS, usedIdsRef.current, cur.id);
      if (!replacement) return prev;
      usedIdsRef.current.add(replacement.id);
      const next = prev.slice();
      next[idx] = { ...replacement, position: idx };
      return next;
    });
    if (replacedId !== undefined) {
      setAnswers((prev) => {
        const { [replacedId]: _drop, ...rest } = prev;
        return rest;
      });
    }
    setShowWarning(`Tab/window switch detected (${newCount}/${MAX_CHEAT_SWAPS}). Current question replaced.`);
  }, [order, submit]);

  useEffect(() => {
    if (!identity) return;
    const onVis  = () => { if (document.visibilityState === "hidden") handleCheatEvent(); };
    const onBlur = () => handleCheatEvent();
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("blur", onBlur);
    return () => { document.removeEventListener("visibilitychange", onVis); window.removeEventListener("blur", onBlur); };
  }, [identity, handleCheatEvent]);

  useEffect(() => {
    if (!identity) return;
    const handler = (e: BeforeUnloadEvent) => { if (!submittedRef.current) { e.preventDefault(); e.returnValue = ""; } };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [identity]);

  useEffect(() => { if (!showWarning) return; const t = setTimeout(() => setShowWarning(null), 5000); return () => clearTimeout(t); }, [showWarning]);

  const currentQ  = order[currentIdx];
  const answered  = useMemo(() => Object.keys(answers).length, [answers]);
  const progressPct = order.length ? Math.round(((currentIdx + 1) / order.length) * 100) : 0;
  const timeWarn  = timeLeft <= 300;
  const timeCrit  = timeLeft <= 60;

  if (!identity || !currentQ) {
    return (
      <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "var(--background)" }}>
        <div style={{ ...mono, fontSize: 14, letterSpacing: "0.12em", color: "var(--muted-foreground)" }}>LOADING EXAM…</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>

      {/* ── EXAM NAV ── */}
      <header style={{ borderBottom: border, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 52, background: "var(--background)", position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ ...mono, color: "#fff", fontSize: 14, fontWeight: 700 }}>TPM</span>
          </div>
          <span style={{ ...mono, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" as const, fontWeight: 700 }}>EXAM IN PROGRESS_</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ ...mono, fontSize: 13, letterSpacing: "0.06em", color: "var(--muted-foreground)" }}>
            {identity.name.toUpperCase()}
          </span>
          <span style={{ ...mono, fontSize: 13, letterSpacing: "0.06em", color: "var(--muted-foreground)" }}>
            Q {currentIdx + 1}/{order.length}
          </span>
          <span style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", padding: "5px 12px", border: `1.5px solid ${timeCrit ? "var(--destructive)" : timeWarn ? "var(--warning)" : "var(--border)"}`, color: timeCrit ? "var(--destructive)" : timeWarn ? "var(--warning)" : "var(--foreground)", background: timeCrit ? "rgba(204,34,0,0.08)" : "transparent" }}>
            ⏱ {formatDuration(timeLeft)}
          </span>
        </div>
      </header>

      {/* ── PROGRESS BAR ── */}
      <div style={{ height: 3, background: "var(--muted)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${progressPct}%`, background: "var(--primary)", transition: "width 0.3s ease" }} />
      </div>

      {/* ── CHEAT WARNING ── */}
      {cheatSwaps > 0 && (
        <div style={{ background: "rgba(184,92,0,0.08)", borderBottom: "1.5px solid var(--warning)", padding: "8px 32px", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ ...mono, fontSize: 13, color: "var(--warning)", letterSpacing: "0.06em", fontWeight: 700 }}>
            ⚠ TAB-SWITCH WARNINGS: {cheatSwaps}/{MAX_CHEAT_SWAPS}
          </span>
        </div>
      )}
      {showWarning && (
        <div style={{ background: "rgba(204,34,0,0.07)", borderBottom: "1.5px solid var(--destructive)", padding: "10px 32px" }}>
          <span style={{ ...mono, fontSize: 14, color: "var(--destructive)", letterSpacing: "0.04em" }}>⛔ {showWarning}</span>
        </div>
      )}

      {/* ── MAIN ── */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "40px 32px" }}>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 0, borderBottom: border, paddingBottom: 20, marginBottom: 28 }}>
          {[
            [`Q ${currentIdx + 1} / ${order.length}`, "Progress"],
            [`${answered}`, "Answered"],
            [`${order.length - answered}`, "Remaining"],
          ].map(([val, lbl], i) => (
            <div key={i} style={{ paddingRight: 24, paddingLeft: i > 0 ? 24 : 0, borderRight: i < 2 ? border : "none" }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{val}</div>
              <div style={{ ...mono, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--muted-foreground)", marginTop: 2 }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Question card */}
        <div style={{ border, padding: "32px 32px 28px", background: "var(--surface-elevated)", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20 }}>
            <span style={{ ...mono, fontSize: 13, color: "var(--primary)", fontWeight: 700, letterSpacing: "0.1em" }}>QUESTION {currentIdx + 1}</span>
            <span style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", letterSpacing: "0.06em" }}>{currentQ.points} PT</span>
          </div>
          <h2 style={{ fontSize: "clamp(16px, 2.2vw, 19px)", fontWeight: 600, lineHeight: 1.5, margin: "0 0 28px", letterSpacing: "-0.01em" }}>
            {currentQ.question}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {currentQ.options.map((opt) => {
              const selected = answers[currentQ.id] === opt.key;
              return (
                <button key={opt.key} type="button"
                  onClick={() => setAnswers((p) => ({ ...p, [currentQ.id]: opt.key }))}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 14, width: "100%",
                    padding: "14px 16px", textAlign: "left", cursor: "pointer",
                    border: selected ? "1.5px solid var(--primary)" : border,
                    background: selected ? "rgba(92,148,13,0.07)" : "var(--background)",
                    transition: "border-color 0.12s, background 0.12s",
                  }}>
                  <span style={{
                    width: 24, height: 24, flexShrink: 0, border: selected ? "2px solid var(--primary)" : border,
                    background: selected ? "var(--primary)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    ...mono, fontSize: 13, fontWeight: 700, color: selected ? "#fff" : "var(--muted-foreground)",
                    marginTop: 1,
                  }}>
                    {opt.key.length === 1 ? opt.key : opt.key[0]}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.6, color: selected ? "var(--foreground)" : "var(--foreground)", fontWeight: selected ? 600 : 400 }}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))} disabled={currentIdx === 0}
            style={{ ...mono, fontSize: 13, letterSpacing: "0.08em", fontWeight: 700, padding: "10px 18px", border, background: "transparent", cursor: currentIdx === 0 ? "not-allowed" : "pointer", color: currentIdx === 0 ? "var(--muted-foreground)" : "var(--foreground)" }}>
            ← PREV
          </button>

          <span style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>AUTO-SAVED</span>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {currentIdx < order.length - 1 && (
              <button onClick={() => setConfirmSubmit(true)} disabled={submitting}
                style={{ ...mono, fontSize: 13, letterSpacing: "0.08em", fontWeight: 700, padding: "10px 16px", border, background: "transparent", cursor: submitting ? "not-allowed" : "pointer", color: "var(--foreground)" }}>
                SUBMIT →
              </button>
            )}
            {currentIdx < order.length - 1 ? (
              <button onClick={() => setCurrentIdx((i) => Math.min(order.length - 1, i + 1))}
                style={{ ...mono, fontSize: 13, letterSpacing: "0.08em", fontWeight: 700, padding: "10px 18px", border: "1.5px solid var(--primary)", background: "var(--primary)", color: "#fff", cursor: "pointer" }}>
                NEXT →
              </button>
            ) : (
              <button onClick={() => setConfirmSubmit(true)} disabled={submitting}
                style={{ ...mono, fontSize: 13, letterSpacing: "0.08em", fontWeight: 700, padding: "10px 20px", border: "1.5px solid var(--primary)", background: "var(--primary)", color: "#fff", cursor: submitting ? "wait" : "pointer" }}>
                {submitting ? "SUBMITTING…" : "SUBMIT EXAM →"}
              </button>
            )}
          </div>
        </div>

        {/* Question palette */}
        <div style={{ border, padding: "20px 24px", marginTop: 24, background: "var(--surface-elevated)" }}>
          <p style={{ ...mono, fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--muted-foreground)", marginBottom: 14 }}>QUESTION PALETTE</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {order.map((q, i) => {
              const isAnswered = answers[q.id] !== undefined;
              const isCurrent  = i === currentIdx;
              return (
                <button key={`${q.id}-${i}`} onClick={() => setCurrentIdx(i)}
                  style={{
                    width: 30, height: 30, ...mono, fontSize: 14, fontWeight: 700, cursor: "pointer",
                    border: isCurrent ? "2px solid var(--primary)" : border,
                    background: isCurrent ? "var(--primary)" : isAnswered ? "rgba(92,148,13,0.12)" : "transparent",
                    color: isCurrent ? "#fff" : isAnswered ? "var(--primary)" : "var(--muted-foreground)",
                  }}>
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CONFIRM DIALOG ── */}
      {confirmSubmit && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(230,228,217,0.85)", backdropFilter: "blur(2px)", padding: "0 24px" }}>
          <div style={{ border, background: "var(--card)", padding: "36px 32px", maxWidth: 440, width: "100%" }}>
            <p style={{ ...mono, fontSize: 13, color: "var(--primary)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>CONFIRM SUBMISSION</p>
            <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10 }}>Submit exam?</h3>
            <p style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", letterSpacing: "0.04em", lineHeight: 1.7 }}>
              You answered <strong style={{ color: "var(--foreground)" }}>{answered}</strong> of <strong style={{ color: "var(--foreground)" }}>{order.length}</strong> questions.
              Unanswered questions score zero.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 24 }}>
              <button onClick={() => setConfirmSubmit(false)} disabled={submitting}
                style={{ ...mono, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", padding: "10px 18px", border, background: "transparent", cursor: "pointer" }}>
                KEEP GOING
              </button>
              <button onClick={() => submit(false)} disabled={submitting}
                style={{ ...mono, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", padding: "10px 20px", border: "1.5px solid var(--primary)", background: "var(--primary)", color: "#fff", cursor: submitting ? "wait" : "pointer" }}>
                {submitting ? "SUBMITTING…" : "SUBMIT →"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
