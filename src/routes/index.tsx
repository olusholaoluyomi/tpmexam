import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, ShieldAlert, Sparkles, Target, Timer } from "lucide-react";
import {
  attemptsLeft,
  bestAttempt,
  getUserState,
  initUserState,
  isCheatLocked,
  isRetakeLocked,
  type UserIdentity,
} from "@/lib/exam-storage";
import { formatDate } from "@/lib/utils-exam";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TPM Masterclass CBT — Certification Exam" },
      {
        name: "description",
        content:
          "Computer-based test for the Technical Product Manager Masterclass. 100 questions, 60 minutes, 80% to pass.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, []);

  const identity = useMemo<UserIdentity | null>(() => {
    if (!email.trim() || !phone.trim() || !name.trim()) return null;
    return { name: name.trim(), email: email.trim(), phone: phone.trim() };
  }, [name, email, phone]);

  const userState = identity ? getUserState(identity) : null;
  const cheatLock = isCheatLocked(userState);
  const retakeLock = isRetakeLocked(userState);
  const remaining = attemptsLeft(userState);
  const best = bestAttempt(userState);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
    const p = phone.replace(/\D/g, "");
    if (p.length < 7) e.phone = "Enter a valid phone number";
    if (!agreed) e.agreed = "You must agree to the exam rules";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const startExam = () => {
    setStatusMsg(null);
    if (!validate() || !identity) return;
    initUserState(identity);
    const state = getUserState(identity);
    const cl = isCheatLocked(state);
    const rl = isRetakeLocked(state);
    if (cl.locked) {
      setStatusMsg(`Locked due to repeated tab switching. Try again after ${formatDate(cl.until!)}.`);
      return;
    }
    if (rl.locked) {
      setStatusMsg(`You've used all 3 attempts. Please revise the material — next attempt unlocks ${formatDate(rl.until!)}.`);
      return;
    }
    if (attemptsLeft(state) <= 0) {
      setStatusMsg("You've used all 3 attempts.");
      return;
    }
    sessionStorage.setItem(
      "tpm-cbt:active-identity",
      JSON.stringify(identity),
    );
    navigate({ to: "/exam" });
  };

  return (
    <div className="min-h-screen px-4 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Technical PM Masterclass
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-glow text-primary">Certification</span> Exam
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            100 questions. 60 minutes. Score 80% or higher to earn your certificate.
            You have up to 3 attempts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-4 md:col-span-2">
            <InfoCard icon={<Target className="h-5 w-5" />} title="Pass mark" value="80%" hint="Below this, no certificate" />
            <InfoCard icon={<Timer className="h-5 w-5" />} title="Time limit" value="60 min" hint="Auto-submits when time runs out" />
            <InfoCard icon={<Clock className="h-5 w-5" />} title="Attempts" value="3 max" hint="Then a 2-week cooldown" />
            <Card className="border-warning/30 bg-warning/5 p-5">
              <div className="flex items-start gap-3">
                <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
                <div className="space-y-1.5 text-sm">
                  <p className="font-semibold text-foreground">Anti-cheat is active</p>
                  <p className="text-muted-foreground">
                    Switching tabs, opening other windows, or losing focus will swap your
                    current question for a new one and trigger a warning. After 5 such
                    events, the session ends and you'll be locked out for 5 hours.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card className="bg-gradient-surface border-primary/10 shadow-elevated p-6 md:col-span-3" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <h2 className="text-xl font-semibold">Register to start</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We use your name, email, and phone to track attempts and send you results.
            </p>

            <div className="mt-6 space-y-4">
              <Field label="Full name" error={errors.name}>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  maxLength={100}
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  maxLength={255}
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 555 123 4567"
                  maxLength={30}
                  autoComplete="tel"
                />
              </Field>

              <label className="flex items-start gap-3 rounded-lg border border-border bg-input/50 p-3 text-sm">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-[oklch(0.86_0.27_145)]"
                />
                <span className="text-muted-foreground">
                  I will stay in this browser tab for the full duration. I understand that
                  switching tabs swaps my question and that 5 swaps lock me out for 5 hours.
                </span>
              </label>
              {errors.agreed && <p className="text-xs text-destructive">{errors.agreed}</p>}

              {/* Status */}
              {identity && userState && (
                <div className="rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Attempts used:</span>{" "}
                    {userState.attempts.length} / 3 · <span className="font-semibold text-foreground">remaining:</span> {remaining}
                  </p>
                  {best && (
                    <p className="mt-1">
                      <span className="font-semibold text-foreground">Best score:</span>{" "}
                      {best.percentage}% {best.passed && <span className="text-primary">✓ Passed</span>}
                    </p>
                  )}
                  {cheatLock.locked && (
                    <p className="mt-1 text-warning">Cheat lock until {formatDate(cheatLock.until!)}</p>
                  )}
                  {retakeLock.locked && (
                    <p className="mt-1 text-warning">Retake unlocks {formatDate(retakeLock.until!)}</p>
                  )}
                </div>
              )}

              {statusMsg && (
                <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                  {statusMsg}
                </div>
              )}

              <Button
                onClick={startExam}
                size="lg"
                className="w-full bg-gradient-primary font-semibold text-primary-foreground hover:opacity-90"
                style={{ boxShadow: "var(--shadow-glow)" }}
                disabled={cheatLock.locked || retakeLock.locked || remaining <= 0}
              >
                {best?.passed ? "Retake exam" : "Start exam"}
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">Last refreshed {new Date(now).toLocaleTimeString()}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-1.5 block text-sm">{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoCard({ icon, title, value, hint }: { icon: React.ReactNode; title: string; value: string; hint: string }) {
  return (
    <Card className="bg-gradient-surface border-border p-4" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/15 p-2 text-primary">{icon}</div>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="text-lg font-bold text-foreground">{value}</p>
        </div>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{hint}</p>
    </Card>
  );
}
