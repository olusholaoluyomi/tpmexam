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

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") { res.writeHead(200); res.end(); return; }
  if (req.method !== "GET") { res.writeHead(405); res.end(JSON.stringify({ error: "Method not allowed" })); return; }

  const auth = (req.headers.authorization ?? "").replace(/^Bearer\s+/i, "").trim();
  if (!process.env.ADMIN_SECRET || auth !== process.env.ADMIN_SECRET) {
    res.writeHead(401); res.end(JSON.stringify({ error: "Unauthorized" })); return;
  }

  try {
    const attempts = await readAttempts();
    res.writeHead(200); res.end(JSON.stringify(attempts));
  } catch (err) {
    console.error("admin-data error:", err);
    res.writeHead(500); res.end(JSON.stringify({ error: "Failed to load data" }));
  }
}
