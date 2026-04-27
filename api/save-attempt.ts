const TOKEN = process.env.BLOB_READ_WRITE_TOKEN!;
const BLOB_BASE = "https://blob.vercel-storage.com";
const PATHNAME = "tpmexam/attempts.json";

async function readAttempts(): Promise<unknown[]> {
  const res = await fetch(`${BLOB_BASE}?prefix=tpmexam/attempts.json&limit=10`, {
    headers: { authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) return [];
  const json = await res.json() as { blobs?: { pathname: string; url: string }[] };
  const existing = json.blobs?.find((b) => b.pathname === PATHNAME);
  if (!existing) return [];
  const data = await fetch(existing.url + "?t=" + Date.now());
  if (!data.ok) return [];
  return data.json();
}

async function writeAttempts(attempts: unknown[]): Promise<void> {
  const content = JSON.stringify(attempts);
  const res = await fetch(`${BLOB_BASE}/${PATHNAME}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${TOKEN}`,
      "x-content-type": "application/json",
      "x-add-random-suffix": "0",
      "x-allow-overwrite": "1",
      "content-length": String(Buffer.byteLength(content)),
    },
    body: content,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Blob PUT failed ${res.status}: ${err}`);
  }
}

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") { res.status(200).end(); return; }
  if (req.method !== "POST") { res.status(405).json({ error: "Method not allowed" }); return; }

  try {
    // Vercel pre-parses JSON bodies; fall back to raw body string
    const body = req.body ?? JSON.parse(req.rawBody ?? "{}");
    const newAttempt = { ...body, savedAt: new Date().toISOString() };

    const attempts = await readAttempts();
    attempts.push(newAttempt);
    await writeAttempts(attempts);

    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("save-attempt error:", err?.message ?? err);
    res.status(500).json({ error: String(err?.message ?? err) });
  }
}
