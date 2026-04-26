import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { AttemptRecord, UserIdentity } from "@/lib/exam-storage";
import { formatDuration } from "@/lib/utils-exam";

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const border = "1.5px solid var(--border)";

interface ReviewItem { id: number; question: string; options: { key: string; label: string }[]; given: string | null; correct: string; }
interface ResultPayload {
  identity: UserIdentity; attempt: AttemptRecord; isFinal: boolean;
  autoSubmitted: boolean; cheatLock: boolean; review: ReviewItem[];
  attemptsHistory: { attemptNumber: number; percentage: number; passed: boolean }[];
}

export const Route = createFileRoute("/result")({
  head: () => ({ meta: [{ title: "Your result — Practice Test for Technical Product Managers" }] }),
  component: ResultPage,
});

function ResultPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<ResultPayload | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [showWrong, setShowWrong] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem("tpm-cbt:last-review");
    if (!raw) { navigate({ to: "/" }); return; }
    try { setData(JSON.parse(raw) as ResultPayload); } catch { navigate({ to: "/" }); }
  }, [navigate]);

  const passed = data?.attempt.passed ?? false;
  const attemptsRemaining = data ? Math.max(0, 3 - data.attempt.attemptNumber) : 0;

  const summary = useMemo(() => {
    if (!data) return null;
    return {
      correct:   data.review.filter((r) => r.given === r.correct).length,
      incorrect: data.review.filter((r) => r.given && r.given !== r.correct).length,
      skipped:   data.review.filter((r) => !r.given).length,
    };
  }, [data]);

  const wrongAnswers = useMemo(
    () => data?.review.filter((r) => r.given !== r.correct) ?? [],
    [data],
  );

  const downloadCertificate = () => {
    if (!data) return;
    const html = certificateHtml(data.identity, data.attempt);
    const blob = new Blob([html], { type: "text/html" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    const safeName = data.identity.name.replace(/[^a-zA-Z0-9 _-]/g, "").trim().replace(/\s+/g, "_") || "certificate";
    a.href = url; a.download = `TPM-Certificate-${safeName}.html`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  if (!data || !summary) return null;

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>

      {/* NAV */}
      <nav style={{ borderBottom: border, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 52, background: "var(--background)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ ...mono, color: "#fff", fontSize: 14, fontWeight: 700 }}>TPM</span>
          </div>
          <span style={{ ...mono, fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase" as const, fontWeight: 700 }}>PRACTICE TEST_</span>
        </div>
        <Link to="/" style={{ ...mono, fontSize: 14, letterSpacing: "0.1em", color: "var(--muted-foreground)", textDecoration: "none" }}>← BACK TO HOME</Link>
      </nav>

      {/* RESULT TICKER */}
      <div style={{ background: passed ? "var(--primary)" : "var(--destructive)", borderBottom: border, height: 34, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div className="ticker-track">
          {Array(14).fill(passed ? `${data.attempt.percentage}% — PASSED ✓` : `${data.attempt.percentage}% — NOT PASSED`).map((t, i) => (
            <span key={i} style={{ ...mono, fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "0.14em", padding: "0 28px", borderRight: "1.5px solid rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "44px 32px" }}>

        {/* HERO RESULT */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border, marginBottom: 24 }}>
          <div style={{ padding: "40px 36px", borderRight: border, background: "var(--surface-elevated)" }}>
            <p style={{ ...mono, fontSize: 14, letterSpacing: "0.12em", color: passed ? "var(--primary)" : "var(--destructive)", fontWeight: 700, marginBottom: 16 }}>
              {passed ? "—— ✓ PASSED" : "—— ✗ NOT PASSED"}
            </p>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.9, marginBottom: 20 }}>
              {passed ? (
                <>CONGRATS,<br /><span style={{ color: "var(--primary)" }}>{data.identity.name.split(" ")[0].toUpperCase()}!</span></>
              ) : (
                <>ALMOST,<br />{data.identity.name.split(" ")[0].toUpperCase()}</>
              )}
            </h1>
            <p style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", letterSpacing: "0.04em", lineHeight: 1.8 }}>
              {passed
                ? "You've passed the Practice Test for Technical Product Managers."
                : data.isFinal
                  ? "You've used all 3 attempts. Revisit the material — the exam reopens in 2 weeks."
                  : `You need 80% to pass. You have ${attemptsRemaining} attempt${attemptsRemaining === 1 ? "" : "s"} left.`}
            </p>
            {data.cheatLock && (
              <div style={{ marginTop: 16, border: "1.5px solid var(--warning)", padding: "10px 14px", ...mono, fontSize: 14, color: "var(--warning)", letterSpacing: "0.04em", lineHeight: 1.6 }}>
                ⚠ Session ended due to tab-switching. Locked out for 5 hours.
              </div>
            )}
          </div>

          {/* Score panel */}
          <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 6 }}>
            <div style={{ fontSize: "clamp(72px, 10vw, 108px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, color: passed ? "var(--primary)" : "var(--destructive)" }}>
              {data.attempt.percentage}%
            </div>
            <div style={{ ...mono, fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--muted-foreground)" }}>
              {data.attempt.score} / {data.attempt.total} CORRECT
            </div>
            <div style={{ ...mono, fontSize: 14, letterSpacing: "0.1em", color: "var(--muted-foreground)", marginTop: 4 }}>
              ATTEMPT {data.attempt.attemptNumber} OF 3 · {formatDuration(data.attempt.durationSec)}
            </div>
          </div>
        </div>

        {/* STATS ROW */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", border, marginBottom: 24 }}>
          {[
            [String(summary.correct), "Correct"],
            [String(summary.incorrect), "Incorrect"],
            [String(summary.skipped), "Skipped"],
            [formatDuration(data.attempt.durationSec), "Duration"],
          ].map(([val, lbl], i) => (
            <div key={i} style={{ padding: "20px 24px", borderRight: i < 3 ? border : "none", background: "var(--surface-elevated)" }}>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em" }}>{val}</div>
              <div style={{ ...mono, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--muted-foreground)", marginTop: 4 }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          {passed && (
            <button onClick={downloadCertificate}
              style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", padding: "12px 22px", background: "var(--primary)", color: "#fff", border: "1.5px solid var(--primary)", cursor: "pointer" }}>
              DOWNLOAD CERTIFICATE →
            </button>
          )}
          {!passed && !data.isFinal && (
            <Link to="/" style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", padding: "12px 22px", background: "var(--primary)", color: "#fff", border: "1.5px solid var(--primary)", textDecoration: "none", display: "inline-block" }}>
              RETAKE EXAM →
            </Link>
          )}
          <Link to="/" style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", padding: "12px 22px", background: "transparent", color: "var(--foreground)", border, textDecoration: "none", display: "inline-block" }}>
            ← HOME
          </Link>
        </div>

        {/* ATTEMPT HISTORY */}
        <div style={{ border, marginBottom: 24 }}>
          <div style={{ padding: "16px 24px", borderBottom: border, background: "var(--surface-elevated)" }}>
            <span style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>ATTEMPT HISTORY</span>
          </div>
          {data.attemptsHistory.map((a) => (
            <div key={a.attemptNumber} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderBottom: "1px solid var(--muted)" }}>
              <span style={{ ...mono, fontSize: 14, letterSpacing: "0.06em" }}>ATTEMPT {a.attemptNumber}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em" }}>{a.percentage}%</span>
                <span style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", padding: "3px 10px", background: a.passed ? "rgba(92,148,13,0.12)" : "rgba(204,34,0,0.08)", color: a.passed ? "var(--primary)" : "var(--destructive)", border: `1px solid ${a.passed ? "var(--primary)" : "var(--destructive)"}` }}>
                  {a.passed ? "PASS" : "FAIL"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WRONG ANSWERS REVIEW */}
        {wrongAnswers.length > 0 && (
          <div style={{ border, marginBottom: 24 }}>
            <button onClick={() => setShowWrong((s) => !s)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", background: "var(--surface-elevated)", border: "none", borderBottom: showWrong ? border : "none", cursor: "pointer" }}>
              <div>
                <span style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em" }}>
                  WRONG ANSWERS — {wrongAnswers.length} QUESTION{wrongAnswers.length !== 1 ? "S" : ""}
                </span>
                <p style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", letterSpacing: "0.04em", marginTop: 2 }}>
                  Questions you answered incorrectly or skipped — correct answers shown.
                </p>
              </div>
              <span style={{ ...mono, fontSize: 15, color: "var(--destructive)" }}>{showWrong ? "▲" : "▼"}</span>
            </button>
            {showWrong && (
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                {wrongAnswers.map((item) => (
                  <div key={item.id} style={{ border: "1.5px solid var(--destructive)", padding: "16px 18px", background: "rgba(204,34,0,0.04)" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                      <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.5 }}>{item.question}</p>
                      <span style={{ ...mono, fontSize: 14, fontWeight: 700, color: "var(--destructive)", flexShrink: 0 }}>✗</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {item.options.map((opt) => {
                        const isCorrect = opt.key === item.correct;
                        const isGiven   = opt.key === item.given;
                        return (
                          <div key={opt.key} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 10px", background: isCorrect ? "rgba(92,148,13,0.1)" : isGiven && !isCorrect ? "rgba(204,34,0,0.08)" : "transparent" }}>
                            <span style={{ ...mono, fontSize: 14, fontWeight: 700, color: isCorrect ? "var(--primary)" : isGiven && !isCorrect ? "var(--destructive)" : "var(--muted-foreground)" }}>{opt.key[0]}.</span>
                            <span style={{ fontSize: 15, color: "var(--foreground)" }}>{opt.label}</span>
                            {isCorrect && <span style={{ ...mono, fontSize: 11, color: "var(--primary)", fontWeight: 700, marginLeft: "auto" }}>CORRECT</span>}
                            {isGiven && !isCorrect && <span style={{ ...mono, fontSize: 11, color: "var(--destructive)", fontWeight: 700, marginLeft: "auto" }}>YOUR ANSWER</span>}
                          </div>
                        );
                      })}
                      {!item.given && <p style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", fontStyle: "italic" }}>Not answered.</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ANSWER REVIEW (final only) */}
        {data.isFinal && (
          <div style={{ border }}>
            <button onClick={() => setShowReview((s) => !s)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", background: "var(--surface-elevated)", border: "none", borderBottom: showReview ? border : "none", cursor: "pointer" }}>
              <div>
                <span style={{ ...mono, fontSize: 14, fontWeight: 700, letterSpacing: "0.1em" }}>ANSWER REVIEW</span>
                <p style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", letterSpacing: "0.04em", marginTop: 2 }}>Correct answers revealed — exam completed.</p>
              </div>
              <span style={{ ...mono, fontSize: 15, color: "var(--primary)" }}>{showReview ? "▲" : "▼"}</span>
            </button>
            {showReview && (
              <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                {data.review.map((item, i) => {
                  const correct = item.given === item.correct;
                  return (
                    <div key={`${item.id}-${i}`} style={{ border: `1.5px solid ${correct ? "var(--primary)" : "var(--destructive)"}`, padding: "16px 18px", background: correct ? "rgba(92,148,13,0.04)" : "rgba(204,34,0,0.04)" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                        <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.5 }}>Q{i + 1}. {item.question}</p>
                        <span style={{ ...mono, fontSize: 14, fontWeight: 700, color: correct ? "var(--primary)" : "var(--destructive)", flexShrink: 0 }}>{correct ? "✓" : "✗"}</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {item.options.map((opt) => {
                          const isCorrect = opt.key === item.correct;
                          const isGiven   = opt.key === item.given;
                          return (
                            <div key={opt.key} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 10px", background: isCorrect ? "rgba(92,148,13,0.1)" : isGiven && !isCorrect ? "rgba(204,34,0,0.08)" : "transparent" }}>
                              <span style={{ ...mono, fontSize: 14, fontWeight: 700, color: isCorrect ? "var(--primary)" : isGiven && !isCorrect ? "var(--destructive)" : "var(--muted-foreground)" }}>{opt.key[0]}.</span>
                              <span style={{ fontSize: 15, color: "var(--foreground)" }}>{opt.label}</span>
                              {isCorrect && <span style={{ ...mono, fontSize: 11, color: "var(--primary)", fontWeight: 700, marginLeft: "auto" }}>CORRECT</span>}
                              {isGiven && !isCorrect && <span style={{ ...mono, fontSize: 11, color: "var(--destructive)", fontWeight: 700, marginLeft: "auto" }}>YOUR ANSWER</span>}
                            </div>
                          );
                        })}
                        {!item.given && <p style={{ ...mono, fontSize: 14, color: "var(--muted-foreground)", fontStyle: "italic" }}>Not answered.</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{ padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: border, marginTop: 24 }}>
        <span style={{ ...mono, fontSize: 14, letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>© 2025 OLUSHOLA OLUYOMI · TPM PRACTICE TEST</span>
        <span style={{ ...mono, fontSize: 14, letterSpacing: "0.1em", color: "var(--primary)", fontWeight: 700 }}>EXAM-ACE-PRO_</span>
      </footer>
    </div>
  );
}

function certificateHtml(identity: UserIdentity, attempt: AttemptRecord): string {
  const date = new Date(attempt.completedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const safeName = identity.name.replace(/[<>]/g, "");
  return `<!doctype html>
<html><head><meta charset="utf-8"/><title>Practice Test Certificate — ${safeName}</title>
<style>
  @page { size: A4 landscape; margin: 0; }
  body { margin: 0; font-family: "Space Grotesk", system-ui, sans-serif; background: #e6e4d9; color: #1a1a1a; }
  .cert { box-sizing: border-box; width: 297mm; height: 210mm; padding: 32mm 28mm; background: #e6e4d9; border: 3px solid #1a1a1a; position: relative; }
  .badge { position: absolute; top: 18mm; left: 50%; transform: translateX(-50%); padding: 5px 14px; background: #5c940d; color: #fff; font-family: monospace; font-weight: 800; letter-spacing: 3px; font-size: 10px; }
  h1 { font-size: 60px; margin: 0; text-align: center; color: #1a1a1a; letter-spacing: -2px; text-transform: uppercase; font-weight: 700; }
  .sub { text-align: center; color: #5c5a50; font-family: monospace; margin-top: 4px; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; }
  .line { height: 1.5px; background: #1a1a1a; margin: 22px auto; width: 55%; }
  .name { font-size: 58px; text-align: center; margin: 14px 0 4px; color: #5c940d; font-weight: 700; letter-spacing: -1px; text-transform: uppercase; }
  .desc { text-align: center; color: #5c5a50; font-size: 13px; max-width: 65%; margin: 0 auto; line-height: 1.6; font-family: monospace; }
  .score { text-align: center; margin-top: 20px; } .score b { font-size: 32px; color: #5c940d; }
  .footer { position: absolute; bottom: 22mm; left: 28mm; right: 28mm; display: flex; justify-content: space-between; align-items: end; font-family: monospace; color: #5c5a50; font-size: 10px; }
  .sig { width: 38%; text-align: center; } .sig .ln { border-top: 1.5px solid #1a1a1a; margin-bottom: 4px; padding-top: 6px; color: #1a1a1a; }
</style></head>
<body><div class="cert">
  <div class="badge">TPM PRACTICE TEST</div>
  <h1>CERTIFICATE</h1><div class="sub">of Completion</div><div class="line"></div>
  <div class="desc">This certifies that</div>
  <div class="name">${safeName}</div>
  <div class="desc">has successfully completed the Practice Test for Technical Product Managers, demonstrating mastery of product discovery, requirements, prioritisation, and execution.</div>
  <div class="score">Final score: <b>${attempt.percentage}%</b></div>
  <div class="footer">
    <div class="sig"><div class="ln">${date}</div>Date</div>
    <div class="sig"><div class="ln">Olushola Oluyomi</div>Program Lead</div>
  </div>
</div><script>setTimeout(function(){window.print();},400);</script>
</body></html>`;
}
