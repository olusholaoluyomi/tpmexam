import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Send,
  ShieldAlert,
} from "lucide-react";
import { questions as ALL_QUESTIONS, type Question } from "@/data/questions";
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
import { cn } from "@/lib/utils";

const TIME_LIMIT_SEC = 60 * 60; // 60 minutes
const PASS_THRESHOLD = 80;
const MAX_CHEAT_SWAPS = 5;

export const Route = createFileRoute("/exam")({
  head: () => ({
    meta: [
      { title: "Exam in progress — TPM Masterclass CBT" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: ExamPage,
});

interface ActiveQ extends Question {
  position: number; // current visible position
}

function ExamPage() {
  const navigate = useNavigate();
  const [identity, setIdentity] = useState<UserIdentity | null>(null);
  const [order, setOrder] = useState<ActiveQ[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SEC);
  const [cheatSwaps, setCheatSwaps] = useState(0);
  const [showWarning, setShowWarning] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const startedAtRef = useRef<number>(Date.now());
  const submittedRef = useRef(false);
  const swapsRef = useRef(0);
  const usedIdsRef = useRef<Set<number>>(new Set());

  // Bootstrap
  useEffect(() => {
    const raw = sessionStorage.getItem("tpm-cbt:active-identity");
    if (!raw) {
      navigate({ to: "/" });
      return;
    }
    let id: UserIdentity;
    try {
      id = JSON.parse(raw);
    } catch {
      navigate({ to: "/" });
      return;
    }
    const state = getUserState(id) ?? initUserState(id);
    if (isCheatLocked(state).locked || isRetakeLocked(state).locked || attemptsLeft(state) <= 0) {
      navigate({ to: "/" });
      return;
    }
    setIdentity(id);

    const shuffled = shuffle(ALL_QUESTIONS).map((q, i) => ({ ...q, position: i }));
    shuffled.forEach((q) => usedIdsRef.current.add(q.id));
    setOrder(shuffled);
    startedAtRef.current = Date.now();
  }, [navigate]);

  // Timer
  useEffect(() => {
    if (!identity) return;
    const t = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(t);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [identity]);

  // Submission helper (declared early so anti-cheat can reference it)
  const submit = useCallback(
    async (auto: boolean, opts?: { cheatLock?: boolean }) => {
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
        return { id: q.id, question: q.question, options: q.options, given: given ?? null, correct: q.correct };
      });
      const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
      const passed = percentage >= PASS_THRESHOLD;

      const state = getUserState(identity);
      const attemptNumber = (state?.attempts.length ?? 0) + 1;
      const attempt: AttemptRecord = {
        attemptNumber,
        score,
        total,
        percentage,
        passed,
        completedAt: new Date().toISOString(),
        durationSec,
        cheatSwaps: swapsRef.current,
      };
      let updated = recordAttempt(identity, attempt);
      const isFinal = attemptNumber >= 3 || passed;
      if (!passed && attemptNumber >= 3) {
        updated = setRetakeCooldown(identity, 2);
      }
      if (opts?.cheatLock) {
        updated = setCheatLock(identity, 5);
      }

      // Persist review for results page
      sessionStorage.setItem(
        "tpm-cbt:last-review",
        JSON.stringify({
          identity,
          attempt,
          isFinal,
          autoSubmitted: auto,
          cheatLock: opts?.cheatLock ?? false,
          review: reviewItems,
          attemptsHistory: updated.attempts.map((a) => ({
            attemptNumber: a.attemptNumber,
            percentage: a.percentage,
            passed: a.passed,
          })),
        }),
      );

      // Fire-and-forget email; errors surface on results page if any.
      try {
        await fetch("/api/send-result", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: identity.name,
            email: identity.email,
            phone: identity.phone,
            attemptNumber,
            isFinal,
            score,
            total,
            percentage,
            passed,
            durationSec,
            cheatSwaps: swapsRef.current,
            attemptsHistory: updated.attempts.map((a) => ({
              attemptNumber: a.attemptNumber,
              percentage: a.percentage,
              passed: a.passed,
            })),
          }),
        });
      } catch (e) {
        console.error("Email request failed", e);
      }

      sessionStorage.removeItem("tpm-cbt:active-identity");
      navigate({ to: "/result" });
    },
    [identity, order, answers, navigate],
  );

  // Auto-submit on timer hitting zero
  useEffect(() => {
    if (timeLeft === 0 && identity && !submittedRef.current) {
      void submit(true);
    }
  }, [timeLeft, identity, submit]);

  // Anti-cheat: visibility/blur swap current question
  const handleCheatEvent = useCallback(() => {
    if (submittedRef.current || order.length === 0) return;
    const newCount = swapsRef.current + 1;
    swapsRef.current = newCount;
    setCheatSwaps(newCount);

    if (newCount >= MAX_CHEAT_SWAPS) {
      setShowWarning(
        `You've left the exam window ${newCount} times. Your session is being ended and you're locked out for 5 hours.`,
      );
      // small delay so the warning is visible
      setTimeout(() => void submit(true, { cheatLock: true }), 1200);
      return;
    }

    // Swap the current question for an unused one
    setOrder((prev) => {
      const idx = currentIdxRef.current;
      const cur = prev[idx];
      if (!cur) return prev;
      const replacement = pickReplacement(ALL_QUESTIONS, usedIdsRef.current, cur.id);
      if (!replacement) return prev;
      usedIdsRef.current.add(replacement.id);
      const next = prev.slice();
      next[idx] = { ...replacement, position: idx };
      return next;
    });
    // Clear answer for the swapped slot
    setAnswers((prev) => {
      const idx = currentIdxRef.current;
      const cur = order[idx];
      if (!cur) return prev;
      const { [cur.id]: _drop, ...rest } = prev;
      return rest;
    });
    setShowWarning(
      `Tab/window switch detected (${newCount}/${MAX_CHEAT_SWAPS}). Your current question has been replaced.`,
    );
  }, [order, submit]);

  // Keep ref in sync for use in event handlers
  const currentIdxRef = useRef(0);
  useEffect(() => {
    currentIdxRef.current = currentIdx;
  }, [currentIdx]);

  useEffect(() => {
    if (!identity) return;
    const onVisibility = () => {
      if (document.visibilityState === "hidden") handleCheatEvent();
    };
    const onBlur = () => handleCheatEvent();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
    };
  }, [identity, handleCheatEvent]);

  // Warn before navigating away
  useEffect(() => {
    if (!identity) return;
    const handler = (e: BeforeUnloadEvent) => {
      if (!submittedRef.current) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [identity]);

  // Auto-dismiss warning
  useEffect(() => {
    if (!showWarning) return;
    const t = setTimeout(() => setShowWarning(null), 5000);
    return () => clearTimeout(t);
  }, [showWarning]);

  const currentQ = order[currentIdx];
  const answered = useMemo(() => Object.keys(answers).length, [answers]);
  const progressPct = order.length ? Math.round(((currentIdx + 1) / order.length) * 100) : 0;
  const timeWarn = timeLeft <= 300;
  const timeCrit = timeLeft <= 60;

  if (!identity || !currentQ) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-6 md:py-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Candidate</p>
            <p className="text-sm font-semibold">{identity.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge tone="muted">
              Q {currentIdx + 1} / {order.length}
            </Badge>
            <Badge tone="muted">Answered {answered}</Badge>
            <Badge tone={timeCrit ? "danger" : timeWarn ? "warn" : "primary"}>
              ⏱ {formatDuration(timeLeft)}
            </Badge>
          </div>
        </header>

        <Progress value={progressPct} className="h-1.5" />

        {/* Anti-cheat strip */}
        {cheatSwaps > 0 && (
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-warning/30 bg-warning/5 px-3 py-2 text-xs text-warning">
            <ShieldAlert className="h-3.5 w-3.5" />
            Tab-switch warnings: {cheatSwaps} / {MAX_CHEAT_SWAPS}
          </div>
        )}

        {showWarning && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{showWarning}</span>
          </div>
        )}

        {/* Question card */}
        <Card className="bg-gradient-surface mt-5 border-primary/10 p-6 md:p-8" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <div className="mb-5 flex items-baseline justify-between">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Question {currentIdx + 1}
            </p>
            <p className="text-xs text-muted-foreground">{currentQ.points} pt</p>
          </div>
          <h2 className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
            {currentQ.question}
          </h2>

          <div className="mt-6 space-y-3">
            {currentQ.options.map((opt) => {
              const selected = answers[currentQ.id] === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setAnswers((p) => ({ ...p, [currentQ.id]: opt.key }))}
                  className={cn(
                    "group flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all",
                    selected
                      ? "border-primary bg-primary/10 ring-2 ring-primary/40"
                      : "border-border bg-input/40 hover:border-primary/40 hover:bg-input/60",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors",
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground group-hover:border-primary/60",
                    )}
                  >
                    {opt.key.length === 1 ? opt.key : opt.key[0]}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground md:text-base">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Nav */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <Button
            variant="outline"
            onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
            disabled={currentIdx === 0}
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
          </Button>

          <div className="hidden items-center gap-1.5 text-xs text-muted-foreground md:flex">
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Auto-saved as you go
          </div>

          {currentIdx < order.length - 1 ? (
            <Button
              onClick={() => setCurrentIdx((i) => Math.min(order.length - 1, i + 1))}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={() => setConfirmSubmit(true)}
              disabled={submitting}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              {submitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Submit exam
            </Button>
          )}
        </div>

        {/* Question palette */}
        <Card className="mt-6 border-border bg-card/60 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Question palette
          </p>
          <div className="grid grid-cols-10 gap-1.5 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-20">
            {order.map((q, i) => {
              const isAnswered = answers[q.id] !== undefined;
              const isCurrent = i === currentIdx;
              return (
                <button
                  key={`${q.id}-${i}`}
                  onClick={() => setCurrentIdx(i)}
                  className={cn(
                    "h-8 w-8 rounded text-[11px] font-semibold transition",
                    isCurrent
                      ? "bg-primary text-primary-foreground ring-2 ring-primary/50"
                      : isAnswered
                        ? "bg-primary/20 text-primary hover:bg-primary/30"
                        : "bg-muted text-muted-foreground hover:bg-muted/70",
                  )}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Submit confirmation */}
      {confirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 backdrop-blur-sm">
          <Card className="bg-gradient-surface w-full max-w-md border-primary/20 p-6" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <h3 className="text-lg font-semibold">Submit exam?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You answered <span className="font-semibold text-foreground">{answered}</span> of{" "}
              <span className="font-semibold text-foreground">{order.length}</span> questions.
              Unanswered questions are graded as incorrect.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setConfirmSubmit(false)} disabled={submitting}>
                Keep going
              </Button>
              <Button
                onClick={() => void submit(false)}
                disabled={submitting}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

function Badge({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "primary" | "muted" | "warn" | "danger";
}) {
  const cls =
    tone === "primary"
      ? "border-primary/40 bg-primary/15 text-primary"
      : tone === "warn"
        ? "border-warning/40 bg-warning/15 text-warning"
        : tone === "danger"
          ? "border-destructive/40 bg-destructive/15 text-destructive animate-pulse"
          : "border-border bg-muted/40 text-muted-foreground";
  return (
    <span className={cn("rounded-full border px-2.5 py-1 text-xs font-semibold tabular-nums", cls)}>
      {children}
    </span>
  );
}
