import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
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
      { title: "Practice Test for Technical Product Managers" },
      { name: "description", content: "100 questions, 60 minutes, 80% to pass." },
    ],
  }),
  component: LandingPage,
});

const TICKER = [
  "100 QUESTIONS","60 MINUTES","80% TO PASS","3 ATTEMPTS MAX",
  "ANTI-CHEAT ACTIVE","RESULTS INSTANT","CERTIFICATE INCLUDED",
  "100 QUESTIONS","60 MINUTES","80% TO PASS","3 ATTEMPTS MAX",
  "ANTI-CHEAT ACTIVE","RESULTS INSTANT","CERTIFICATE INCLUDED",
];

const mono: React.CSSProperties = { fontFamily: "var(--font-mono)" };
const border = "1.5px solid var(--border)";

function LandingPage() {
  const navigate = useNavigate();
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [mag, setMag] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const identity = useMemo<UserIdentity | null>(() => {
    if (!email.trim() || !phone.trim() || !name.trim()) return null;
    return { name: name.trim(), email: email.trim(), phone: phone.trim() };
  }, [name, email, phone]);

  const userState = identity ? getUserState(identity) : null;
  const cheatLock = isCheatLocked(userState);
  const retakeLock = isRetakeLocked(userState);
  const remaining = attemptsLeft(userState);
  const best = bestAttempt(userState);
  const isLocked = cheatLock.locked || retakeLock.locked || remaining <= 0;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
    if (phone.replace(/\D/g, "").length < 7) e.phone = "Enter a valid phone number";
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
    if (cl.locked) { setStatusMsg(`Locked: tab-switching. Unlocks ${formatDate(cl.until!)}.`); return; }
    if (rl.locked) { setStatusMsg(`All attempts used. Unlocks ${formatDate(rl.until!)}.`); return; }
    if (attemptsLeft(state) <= 0) { setStatusMsg("You've used all 3 attempts."); return; }
    sessionStorage.setItem("tpm-cbt:active-identity", JSON.stringify(identity));
    navigate({ to: "/exam" });
  };

  const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    btnRef.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px,${(e.clientY - r.top - r.height / 2) * 0.12}px)`;
  };
  const onMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0,0)";
    setMag(false);
  };

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--background)", minHeight: "100vh", color: "var(--foreground)" }}>

      {/* NAV */}
      <nav style={{ borderBottom: border, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 52, background: "var(--background)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ ...mono, color: "#fff", fontSize: 9, fontWeight: 700 }}>TPM</span>
          </div>
          <span style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>PRACTICE TEST_</span>
        </div>
        <a href="#register" style={{ background: "var(--primary)", color: "#fff", ...mono, fontSize: 10, letterSpacing: "0.1em", padding: "8px 16px", fontWeight: 700, textDecoration: "none" }}>
          START EXAM →
        </a>
      </nav>

      {/* TICKER */}
      <div style={{ borderBottom: border, background: "var(--primary)", overflow: "hidden", height: 34, display: "flex", alignItems: "center" }}>
        <div className="ticker-track">
          {TICKER.map((t, i) => (
            <span key={i} style={{ ...mono, fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: "0.14em", padding: "0 28px", borderRight: "1.5px solid rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* HERO 2-col */}
      <section style={{ borderBottom: border, display: "grid", gridTemplateColumns: "1fr 1fr" }}>

        {/* LEFT */}
        <div style={{ borderRight: border, padding: "56px 40px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 440 }}>
          <div>
            <p style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", color: "var(--muted-foreground)", marginBottom: 28 }}>
              <span style={{ color: "var(--primary)", fontWeight: 700 }}>—— 01</span>{" "}CERTIFICATION EXAM · 2025
            </p>
            <h1 style={{ fontSize: "clamp(46px, 6.5vw, 84px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 0.9, margin: "0 0 24px" }}>
              TECHNICAL<br />PRODUCT<br /><span style={{ color: "var(--primary)" }}>MANAGER</span>
            </h1>
            <p style={{ ...mono, fontSize: 11, color: "var(--muted-foreground)", letterSpacing: "0.04em", lineHeight: 1.8, maxWidth: 340 }}>
              Prove your mastery. 100 questions across product discovery, requirements, prioritisation, and execution.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: border, paddingTop: 24 }}>
            {[["100","Questions"],["60","Minutes"],["80%","To Pass"]].map(([n,l],i) => (
              <div key={i} style={{ paddingRight: 20, paddingLeft: i > 0 ? 20 : 0, borderRight: i < 2 ? border : "none" }}>
                <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>{n}</div>
                <div style={{ ...mono, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-foreground)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div id="register" style={{ padding: "56px 40px 48px", background: "var(--surface-elevated)" }}>
          <p style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", color: "var(--muted-foreground)", marginBottom: 8 }}>
            <span style={{ color: "var(--primary)", fontWeight: 700 }}>—— 02</span>{" "}REGISTER TO START
          </p>
          <p style={{ ...mono, fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.04em", lineHeight: 1.7, marginBottom: 24 }}>
            Name + email + phone track attempts. All three must match on retakes.
          </p>

          {[
            { key:"name",  label:"Full Name", type:"text",  val:name,  set:setName,  ph:"Jane Doe",            max:100, ac:"name"  },
            { key:"email", label:"Email",     type:"email", val:email, set:setEmail, ph:"you@example.com",      max:255, ac:"email" },
            { key:"phone", label:"Phone",     type:"tel",   val:phone, set:setPhone, ph:"+234 800 000 0000",    max:30,  ac:"tel"   },
          ].map((f) => (
            <div key={f.key} style={{ borderTop: border, paddingTop: 12, paddingBottom: 4 }}>
              <label style={{ ...mono, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted-foreground)", display: "block", marginBottom: 5 }}>{f.label}</label>
              <Input type={f.type} value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.ph} maxLength={f.max} autoComplete={f.ac}
                style={{ background: "transparent", border: "none", borderBottom: border, padding: "6px 0", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--foreground)", outline: "none", borderRadius: 0, boxShadow: "none", width: "100%" }} />
              {errors[f.key] && <p style={{ ...mono, fontSize: 10, color: "var(--destructive)", paddingTop: 3, letterSpacing: "0.06em" }}>{errors[f.key]}</p>}
            </div>
          ))}

          <div style={{ borderTop: border, padding: "14px 0" }}>
            <label style={{ display: "flex", gap: 10, cursor: "pointer", alignItems: "flex-start" }}>
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ marginTop: 2, accentColor: "var(--primary)", flexShrink: 0 }} />
              <span style={{ ...mono, fontSize: 10, letterSpacing: "0.04em", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                I will stay in this tab. 5 tab-switches = 5-hour lockout. My identity is locked across all attempts.
              </span>
            </label>
            {errors.agreed && <p style={{ ...mono, fontSize: 10, color: "var(--destructive)", paddingTop: 3 }}>{errors.agreed}</p>}
          </div>

          {identity && userState && (
            <div style={{ borderTop: border, borderBottom: border, padding: "10px 0", display: "flex", gap: 20, flexWrap: "wrap" }}>
              <span style={{ ...mono, fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.06em" }}>
                ATTEMPTS: <strong style={{ color: "var(--foreground)" }}>{userState.attempts.length}/3</strong>
              </span>
              {best && <span style={{ ...mono, fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.06em" }}>
                BEST: <strong style={{ color: best.passed ? "var(--primary)" : "var(--foreground)" }}>{best.percentage}%</strong>
                {best.passed && <span style={{ color: "var(--primary)", marginLeft: 4 }}>✓ PASSED</span>}
              </span>}
              {cheatLock.locked && <span style={{ ...mono, fontSize: 10, color: "var(--destructive)", letterSpacing: "0.06em" }}>LOCKED UNTIL {formatDate(cheatLock.until!).toUpperCase()}</span>}
              {retakeLock.locked && <span style={{ ...mono, fontSize: 10, color: "var(--warning)", letterSpacing: "0.06em" }}>COOLDOWN UNTIL {formatDate(retakeLock.until!).toUpperCase()}</span>}
            </div>
          )}

          {statusMsg && (
            <div style={{ border: "1.5px solid var(--destructive)", padding: "10px 14px", marginTop: 10, ...mono, fontSize: 11, color: "var(--destructive)", letterSpacing: "0.04em", lineHeight: 1.5 }}>
              ⚠ {statusMsg}
            </div>
          )}

          <div style={{ paddingTop: 20, display: "flex", alignItems: "center", gap: 16 }}>
            <button ref={btnRef} id="start-exam-btn" onClick={startExam} disabled={isLocked}
              onMouseMove={onMouseMove} onMouseEnter={() => setMag(true)} onMouseLeave={onMouseLeave}
              style={{
                background: isLocked ? "var(--muted)" : "var(--primary)",
                color: isLocked ? "var(--muted-foreground)" : "#fff",
                border: `1.5px solid ${isLocked ? "var(--muted)" : "var(--primary)"}`,
                padding: "13px 26px", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", cursor: isLocked ? "not-allowed" : "pointer",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                display: "inline-flex", alignItems: "center", gap: 8,
                boxShadow: mag && !isLocked ? "none" : `3px 3px 0 ${isLocked ? "var(--muted-foreground)" : "var(--foreground)"}`,
              }}>
              {best?.passed ? "RETAKE EXAM" : "START EXAM"} →
            </button>
            <span style={{ ...mono, fontSize: 9, color: "var(--muted-foreground)", letterSpacing: "0.08em" }}>
              {remaining > 0 ? `${remaining} attempt${remaining === 1 ? "" : "s"} left` : "No attempts left"}
            </span>
          </div>
        </div>
      </section>

      {/* RULES 4-col */}
      <section style={{ borderBottom: border }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          {[
            ["[01]","PASS MARK","Score 80%+ to earn your certificate. Below 80% is a fail."],
            ["[02]","TIME LIMIT","60 minutes. Auto-submits when the clock hits zero. No extensions."],
            ["[03]","ANTI-CHEAT","Tab-switch = question swap. 5 swaps = 5-hour lockout. Identity fixed across attempts."],
            ["[04]","ATTEMPTS","Up to 3 attempts. After 3 fails, a 2-week cooling period is enforced."],
          ].map(([num,title,body],i) => (
            <div key={i} style={{ borderRight: i < 3 ? border : "none", padding: "28px" }}>
              <div style={{ ...mono, fontSize: 10, color: "var(--primary)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 10 }}>{num}</div>
              <div style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>{title}</div>
              <p style={{ ...mono, fontSize: 10, color: "var(--muted-foreground)", letterSpacing: "0.04em", lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANTI-CHEAT BANNER */}
      <section style={{ background: "var(--foreground)", color: "var(--background)", padding: "22px 40px", borderBottom: border, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ background: "var(--primary)", color: "#fff", ...mono, fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", padding: "4px 10px" }}>ANTI-CHEAT</span>
          <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em", textTransform: "uppercase" }}>YOUR IDENTITY IS LOCKED ACROSS ALL ATTEMPTS.</span>
        </div>
        <p style={{ ...mono, fontSize: 10, color: "rgba(230,228,217,0.55)", letterSpacing: "0.04em", lineHeight: 1.6, maxWidth: 480 }}>
          The system matches name, email, and phone across all stored attempts. Changing any field still links you to your existing record.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: border }}>
        <span style={{ ...mono, fontSize: 9, letterSpacing: "0.1em", color: "var(--muted-foreground)" }}>© 2025 OLUSHOLA OLUYOMI · TPM PRACTICE TEST</span>
        <span style={{ ...mono, fontSize: 9, letterSpacing: "0.1em", color: "var(--primary)", fontWeight: 700 }}>EXAM-ACE-PRO_</span>
      </footer>
    </div>
  );
}
