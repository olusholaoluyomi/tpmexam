import { createFileRoute } from "@tanstack/react-router";

const ADMIN_EMAIL = "olusholaoluyomi@gmail.com";
const FROM = "TPM Masterclass CBT <onboarding@resend.dev>";

interface Payload {
  name: string;
  email: string;
  phone: string;
  attemptNumber: number;
  isFinal: boolean;
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  durationSec: number;
  cheatSwaps: number;
  attemptsHistory: Array<{ attemptNumber: number; percentage: number; passed: boolean }>;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildAdminHtml(p: Payload): string {
  const rows = p.attemptsHistory
    .map(
      (a) =>
        `<tr><td style="padding:6px 12px;border:1px solid #1f2937">Attempt ${a.attemptNumber}</td><td style="padding:6px 12px;border:1px solid #1f2937">${a.percentage}%</td><td style="padding:6px 12px;border:1px solid #1f2937">${a.passed ? "PASS" : "FAIL"}</td></tr>`,
    )
    .join("");
  return `
  <div style="font-family:system-ui,sans-serif;background:#0b1220;color:#e5f7e5;padding:24px;max-width:640px;margin:0 auto;border-radius:14px;border:1px solid #1f2937">
    <h2 style="color:#86ff9a;margin:0 0 8px">TPM CBT — ${p.isFinal ? "FINAL REPORT" : "Attempt result"}</h2>
    <p style="margin:0 0 16px;color:#9ca3af">Submitted ${new Date().toLocaleString()}</p>
    <table style="border-collapse:collapse;width:100%;margin-bottom:16px">
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Name</b></td><td style="padding:6px 12px;border:1px solid #1f2937">${escapeHtml(p.name)}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Email</b></td><td style="padding:6px 12px;border:1px solid #1f2937">${escapeHtml(p.email)}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Phone</b></td><td style="padding:6px 12px;border:1px solid #1f2937">${escapeHtml(p.phone)}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Attempt</b></td><td style="padding:6px 12px;border:1px solid #1f2937">${p.attemptNumber} of 3${p.isFinal ? " (FINAL)" : ""}</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Score</b></td><td style="padding:6px 12px;border:1px solid #1f2937">${p.score} / ${p.total} (${p.percentage}%)</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Result</b></td><td style="padding:6px 12px;border:1px solid #1f2937;color:${p.passed ? "#86ff9a" : "#fca5a5"}"><b>${p.passed ? "PASSED ≥80%" : "DID NOT PASS"}</b></td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Duration</b></td><td style="padding:6px 12px;border:1px solid #1f2937">${Math.floor(p.durationSec / 60)}m ${p.durationSec % 60}s</td></tr>
      <tr><td style="padding:6px 12px;border:1px solid #1f2937"><b>Tab/blur swaps</b></td><td style="padding:6px 12px;border:1px solid #1f2937">${p.cheatSwaps}</td></tr>
    </table>
    <h3 style="color:#86ff9a;margin:16px 0 8px">Attempt history</h3>
    <table style="border-collapse:collapse;width:100%">${rows}</table>
  </div>`;
}

function buildCandidateHtml(p: Payload): string {
  const headline = p.passed
    ? `Congratulations, ${escapeHtml(p.name)}! 🎉`
    : `Thanks for completing the exam, ${escapeHtml(p.name)}`;
  const message = p.passed
    ? `You scored <b>${p.percentage}%</b> and passed the TPM Masterclass CBT. Your certificate has been issued — you can download it from the results page in the app.`
    : p.isFinal
      ? `You scored <b>${p.percentage}%</b>. You've used all 3 attempts. Please revisit the masterclass material — you can retake the exam in 2 weeks.`
      : `You scored <b>${p.percentage}%</b>. The passing threshold is 80%. You have ${3 - p.attemptNumber} attempt(s) remaining.`;

  return `
  <div style="font-family:system-ui,sans-serif;background:#0b1220;color:#e5f7e5;padding:32px 24px;max-width:560px;margin:0 auto;border-radius:14px;border:1px solid #1f2937">
    <div style="text-align:center;margin-bottom:20px">
      <div style="display:inline-block;padding:8px 16px;background:#86ff9a;color:#0b1220;border-radius:999px;font-weight:700;letter-spacing:0.5px;font-size:12px">TPM MASTERCLASS</div>
    </div>
    <h2 style="color:#86ff9a;margin:0 0 12px;text-align:center">${headline}</h2>
    <p style="font-size:15px;line-height:1.6;color:#d1d5db">${message}</p>
    <div style="margin:24px 0;padding:20px;background:#111827;border-radius:10px;border:1px solid #1f2937;text-align:center">
      <div style="font-size:48px;font-weight:800;color:${p.passed ? "#86ff9a" : "#fca5a5"};line-height:1">${p.percentage}%</div>
      <div style="margin-top:6px;color:#9ca3af;font-size:13px">${p.score} of ${p.total} correct · Attempt ${p.attemptNumber} of 3</div>
    </div>
    <p style="font-size:13px;color:#9ca3af;margin-top:24px;text-align:center">A copy of this result has been sent to the program administrator.</p>
  </div>`;
}

async function sendEmail(apiKey: string, to: string[], subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to, subject, html }),
  });
  const body = await res.text();
  if (!res.ok) {
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
  return body;
}

export const Route = createFileRoute("/api/send-result")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "Email service not configured" }, { status: 500 });
        }

        let payload: Payload;
        try {
          payload = (await request.json()) as Payload;
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        // Basic validation
        const name = String(payload.name || "").trim().slice(0, 100);
        const email = String(payload.email || "").trim().slice(0, 255);
        const phone = String(payload.phone || "").trim().slice(0, 30);
        if (!name || !email || !phone) {
          return Response.json({ error: "Missing required fields" }, { status: 400 });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json({ error: "Invalid email" }, { status: 400 });
        }

        const safe: Payload = { ...payload, name, email, phone };
        const tag = safe.passed ? "PASS" : "FAIL";
        const finalTag = safe.isFinal ? " (FINAL)" : "";
        const adminSubject = `[TPM CBT] ${name} — ${safe.percentage}% ${tag}${finalTag}`;
        const candidateSubject = `Your TPM Masterclass CBT result — ${safe.percentage}% ${tag}`;

        try {
          // Always send to admin
          await sendEmail(apiKey, [ADMIN_EMAIL], adminSubject, buildAdminHtml(safe));
          // Send copy to candidate (best-effort — don't fail the whole request if this errors)
          try {
            await sendEmail(apiKey, [email], candidateSubject, buildCandidateHtml(safe));
          } catch (e) {
            console.error("Candidate email failed:", e);
          }
          return Response.json({ ok: true });
        } catch (e: any) {
          console.error("Email send failed:", e);
          return Response.json({ error: e?.message ?? "Send failed" }, { status: 502 });
        }
      },
    },
  },
});
