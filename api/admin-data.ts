const TOKEN = process.env.BLOB_READ_WRITE_TOKEN!;
const BLOB_BASE = "https://blob.vercel-storage.com";
const PATHNAME = "tpmexam/attempts.json";

async function readAttempts(): Promise<unknown[]> {
  const res = await fetch(`${BLOB_BASE}?prefix=tpmexam/attempts.json&limit=10`, {
    headers: { authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Blob LIST failed ${res.status}: ${err}`);
  }
  const json = await res.json() as { blobs?: { pathname: string; url: string }[] };
  const existing = json.blobs?.find((b) => b.pathname === PATHNAME);
  if (!existing) return [];
  const data = await fetch(existing.url + "?t=" + Date.now());
  if (!data.ok) return [];
  return data.json();
}

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  if (req.method !== "GET") { res.status(405).json({ error: "Method not allowed" }); return; }

  const auth = (req.headers?.authorization ?? "").replace(/^Bearer\s+/i, "").trim();
  if (!process.env.ADMIN_SECRET || auth !== process.env.ADMIN_SECRET) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const attempts = await readAttempts();
    res.status(200).json(attempts);
  } catch (err: any) {
    console.error("admin-data error:", err?.message ?? err);
    res.status(500).json({ error: String(err?.message ?? err) });
  }
}
