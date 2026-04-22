import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle2, ChevronDown, ChevronUp, Download, Home, RotateCcw, ShieldAlert, XCircle } from "lucide-react";
import type { AttemptRecord, UserIdentity } from "@/lib/exam-storage";
import { cn } from "@/lib/utils";
import { formatDuration } from "@/lib/utils-exam";

interface ReviewItem {
  id: number;
  question: string;
  options: { key: string; label: string }[];
  given: string | null;
  correct: string;
}

interface ResultPayload {
  identity: UserIdentity;
  attempt: AttemptRecord;
  isFinal: boolean;
  autoSubmitted: boolean;
  cheatLock: boolean;
  review: ReviewItem[];
  attemptsHistory: { attemptNumber: number; percentage: number; passed: boolean }[];
}

export const Route = createFileRoute("/result")({
  head: () => ({
    meta: [{ title: "Your result — TPM Masterclass CBT" }],
  }),
  component: ResultPage,
});

function ResultPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<ResultPayload | null>(null);
  const [showReview, setShowReview] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("tpm-cbt:last-review");
    if (!raw) {
      navigate({ to: "/" });
      return;
    }
    try {
      setData(JSON.parse(raw) as ResultPayload);
    } catch {
      navigate({ to: "/" });
    }
  }, [navigate]);

  const passed = data?.attempt.passed ?? false;
  const attemptsRemaining = data ? Math.max(0, 3 - data.attempt.attemptNumber) : 0;

  const summary = useMemo(() => {
    if (!data) return null;
    const correct = data.review.filter((r) => r.given === r.correct).length;
    const incorrect = data.review.filter((r) => r.given && r.given !== r.correct).length;
    const skipped = data.review.filter((r) => !r.given).length;
    return { correct, incorrect, skipped };
  }, [data]);

  const downloadCertificate = () => {
    if (!data) return;
    const html = certificateHtml(data.identity, data.attempt);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `TPM-Certificate-${data.identity.name.replace(/\s+/g, "_")}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!data || !summary) return null;

  return (
    <div className="min-h-screen px-4 py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <Card
          className={cn(
            "bg-gradient-surface relative overflow-hidden border p-8 text-center md:p-12",
            passed ? "border-primary/30" : "border-destructive/30",
          )}
          style={{ boxShadow: "var(--shadow-elevated)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background: passed
                ? "radial-gradient(circle at 50% 0%, oklch(0.86 0.27 145 / 0.4), transparent 60%)"
                : "radial-gradient(circle at 50% 0%, oklch(0.65 0.24 25 / 0.3), transparent 60%)",
            }}
          />
          <div className="relative">
            <div
              className={cn(
                "mx-auto flex h-20 w-20 items-center justify-center rounded-full",
                passed ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive",
              )}
            >
              {passed ? <Award className="h-10 w-10" /> : <XCircle className="h-10 w-10" />}
            </div>
            <h1 className="mt-5 text-3xl font-bold md:text-4xl">
              {passed ? (
                <>
                  Congratulations, <span className="text-primary text-glow">{data.identity.name.split(" ")[0]}</span>!
                </>
              ) : (
                <>Almost there, {data.identity.name.split(" ")[0]}</>
              )}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {passed
                ? "You've passed the TPM Masterclass certification exam."
                : data.isFinal
                  ? "You've used all 3 attempts. Please revise the masterclass material — the exam reopens for you in 2 weeks."
                  : `You need 80% to pass. You have ${attemptsRemaining} attempt${attemptsRemaining === 1 ? "" : "s"} left.`}
            </p>

            {data.cheatLock && (
              <div className="mx-auto mt-5 flex max-w-md items-start gap-2 rounded-lg border border-warning/40 bg-warning/10 p-3 text-left text-sm text-warning">
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Your session ended due to repeated tab switching. You're locked out for 5 hours.
                </span>
              </div>
            )}

            <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3">
              <Stat label="Score" value={`${data.attempt.percentage}%`} highlight={passed} />
              <Stat label="Correct" value={`${summary.correct} / ${data.attempt.total}`} />
              <Stat label="Time" value={formatDuration(data.attempt.durationSec)} />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" /> Home
                </Link>
              </Button>
              {passed && (
                <Button
                  onClick={downloadCertificate}
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  <Download className="mr-2 h-4 w-4" /> Download certificate
                </Button>
              )}
              {!passed && !data.isFinal && (
                <Button
                  asChild
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  <Link to="/">
                    <RotateCcw className="mr-2 h-4 w-4" /> Retake exam
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Attempt history */}
        <Card className="bg-gradient-surface mt-6 border-border p-6">
          <h2 className="text-lg font-semibold">Attempt history</h2>
          <div className="mt-4 space-y-2">
            {data.attemptsHistory.map((a) => (
              <div
                key={a.attemptNumber}
                className="flex items-center justify-between rounded-lg border border-border bg-card/60 px-4 py-3 text-sm"
              >
                <span className="font-medium">Attempt {a.attemptNumber}</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold tabular-nums">{a.percentage}%</span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      a.passed
                        ? "bg-primary/15 text-primary"
                        : "bg-destructive/15 text-destructive",
                    )}
                  >
                    {a.passed ? "PASS" : "FAIL"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Review (only when isFinal — i.e. passed or used all 3) */}
        {data.isFinal && (
          <Card className="bg-gradient-surface mt-6 border-border p-6">
            <button
              onClick={() => setShowReview((s) => !s)}
              className="flex w-full items-center justify-between text-left"
            >
              <div>
                <h2 className="text-lg font-semibold">Answer review</h2>
                <p className="text-xs text-muted-foreground">
                  Now that you've finished, here are the correct answers for every question.
                </p>
              </div>
              {showReview ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            {showReview && (
              <div className="mt-5 space-y-4">
                {data.review.map((item, i) => {
                  const correct = item.given === item.correct;
                  const skipped = !item.given;
                  return (
                    <div
                      key={`${item.id}-${i}`}
                      className={cn(
                        "rounded-xl border p-4",
                        correct
                          ? "border-primary/30 bg-primary/5"
                          : "border-destructive/30 bg-destructive/5",
                      )}
                    >
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold text-foreground">
                          Q{i + 1}. {item.question}
                        </p>
                        {correct ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        ) : (
                          <XCircle className="h-5 w-5 shrink-0 text-destructive" />
                        )}
                      </div>
                      <div className="space-y-1.5 text-sm">
                        {item.options.map((opt) => {
                          const isCorrect = opt.key === item.correct;
                          const isGiven = opt.key === item.given;
                          return (
                            <div
                              key={opt.key}
                              className={cn(
                                "flex items-start gap-2 rounded-md px-3 py-1.5",
                                isCorrect && "bg-primary/15 text-primary",
                                isGiven && !isCorrect && "bg-destructive/15 text-destructive",
                              )}
                            >
                              <span className="font-bold">{opt.key[0]}.</span>
                              <span>{opt.label}</span>
                              {isCorrect && <span className="ml-auto text-xs font-semibold">✓ correct</span>}
                              {isGiven && !isCorrect && (
                                <span className="ml-auto text-xs font-semibold">your answer</span>
                              )}
                            </div>
                          );
                        })}
                        {skipped && (
                          <p className="text-xs italic text-muted-foreground">You did not answer this question.</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        )}

        {/* Hidden cert template (kept for visual reference) */}
        <div ref={certRef} className="sr-only" aria-hidden />
      </div>
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4">
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={cn("mt-1 text-2xl font-bold tabular-nums", highlight && "text-primary text-glow")}>{value}</p>
    </div>
  );
}

function certificateHtml(identity: UserIdentity, attempt: AttemptRecord): string {
  const date = new Date(attempt.completedAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const safeName = identity.name.replace(/[<>]/g, "");
  return `<!doctype html>
<html><head><meta charset="utf-8"/><title>TPM Masterclass Certificate — ${safeName}</title>
<style>
  @page { size: A4 landscape; margin: 0; }
  body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: #0b1220; color: #e5f7e5; }
  .cert { box-sizing: border-box; width: 297mm; height: 210mm; padding: 40mm 30mm; background:
    radial-gradient(circle at 20% 0%, rgba(134,255,154,0.18), transparent 50%),
    radial-gradient(circle at 80% 100%, rgba(110,200,255,0.12), transparent 50%),
    #0b1220;
    border: 2px solid #86ff9a; position: relative; }
  .badge { position: absolute; top: 24mm; left: 50%; transform: translateX(-50%); padding: 6px 14px; background:#86ff9a; color:#0b1220; font-family: system-ui; font-weight:800; letter-spacing:2px; font-size: 11px; border-radius: 999px; }
  h1 { font-size: 56px; margin: 0; text-align: center; color: #86ff9a; letter-spacing: 4px; }
  .sub { text-align:center; color:#9ca3af; font-family: system-ui; margin-top: 6px; font-size: 13px; letter-spacing: 3px; text-transform: uppercase;}
  .line { height: 1px; background: rgba(134,255,154,0.4); margin: 28px auto; width: 60%; }
  .name { font-size: 64px; text-align: center; margin: 18px 0 6px; color: #fff; }
  .desc { text-align: center; color: #d1d5db; font-size: 16px; max-width: 70%; margin: 0 auto; line-height: 1.6; font-family: system-ui;}
  .score { text-align:center; margin-top: 26px; }
  .score b { font-size: 36px; color: #86ff9a; }
  .footer { position: absolute; bottom: 28mm; left: 30mm; right: 30mm; display:flex; justify-content: space-between; align-items: end; font-family: system-ui; color: #9ca3af; font-size: 12px;}
  .sig { width: 40%; text-align: center; }
  .sig .ln { border-top: 1px solid #4b5563; margin-bottom: 4px; padding-top: 6px; color: #fff;}
  @media print { body { background: #0b1220; } }
</style></head>
<body>
  <div class="cert">
    <div class="badge">TPM MASTERCLASS</div>
    <h1>CERTIFICATE</h1>
    <div class="sub">of Completion</div>
    <div class="line"></div>
    <div class="desc">This certifies that</div>
    <div class="name">${safeName}</div>
    <div class="desc">has successfully completed the Technical Product Manager Masterclass certification exam, demonstrating mastery of product discovery, requirements, prioritization, and execution.</div>
    <div class="score">Final score: <b>${attempt.percentage}%</b></div>
    <div class="footer">
      <div class="sig"><div class="ln">${date}</div>Date</div>
      <div class="sig"><div class="ln">Olushola Oluyomi</div>Program Lead</div>
    </div>
  </div>
  <script>setTimeout(function(){window.print();}, 400);</script>
</body></html>`;
}
