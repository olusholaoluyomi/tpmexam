import type { IncomingMessage, ServerResponse } from "http";

const TOKEN = process.env.BLOB_READ_WRITE_TOKEN!;
const BLOB_BASE = "https://blob.vercel-storage.com";
const PATHNAME = "tpmexam/attempts.json";

async function readAttempts(): Promise<unknown[]> {
  const res = await fetch(`${BLOB_BASE}?prefix=${encodeURIComponent(PATHNAME)}&limit=10`, {
    headers: { authorization: `Bearer ${TOKEN}` },
  });
  const { blobs } = (await res.json()) as { blobs: { pathname: string; url: string }[] };
  const existing = blobs?.find((b) => b.pathname === PATHNAME);
  if (!existing) return [];
  const data = await fetch(existing.url + "?t=" + Date.now());
  return data.json();
}

async function writeAttempts(attempts: unknown[]): Promise<void> {
  await fetch(`${BLOB_BASE}/${PATHNAME}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${TOKEN}`,
      "x-content-type": "application/json",
      "x-add-random-suffix": "0",
      "x-allow-overwrite": "1",
    },
    body: JSON.stringify(attempts),
  });
}

function readBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => { raw += chunk; });
    req.on("end", () => { try { resolve(JSON.parse(raw)); } catch (e) { reject(e); } });
    req.on("error", reject);
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") { res.writeHead(200); res.end(); return; }
  if (req.method !== "POST") { res.writeHead(405); res.end(JSON.stringify({ error: "Method not allowed" })); return; }

  try {
    const body = await readBody(req);
    const newAttempt = { ...(body as object), savedAt: new Date().toISOString() };
    const attempts = await readAttempts();
    attempts.push(newAttempt);
    await writeAttempts(attempts);
    res.writeHead(200); res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    console.error("save-attempt error:", err);
    res.writeHead(500); res.end(JSON.stringify({ error: "Failed to save" }));
  }
}
