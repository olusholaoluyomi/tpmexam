import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put, list, del } from "@vercel/blob";

const BLOB_PATH = "tpmexam/attempts.json";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const newAttempt = { ...req.body, savedAt: new Date().toISOString() };

    // Read existing attempts
    let attempts: unknown[] = [];
    const { blobs } = await list({ prefix: BLOB_PATH });
    if (blobs.length > 0) {
      const existing = blobs.find((b) => b.pathname === BLOB_PATH);
      if (existing) {
        const resp = await fetch(existing.url + "?t=" + Date.now());
        attempts = await resp.json();
        await del(existing.url);
      }
    }

    attempts.push(newAttempt);

    await put(BLOB_PATH, JSON.stringify(attempts), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("save-attempt error:", err);
    return res.status(500).json({ error: "Failed to save attempt" });
  }
}
