import type { VercelRequest, VercelResponse } from "@vercel/node";
import { list } from "@vercel/blob";

const BLOB_PATH = "tpmexam/attempts.json";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const authHeader = req.headers.authorization ?? "";
  const secret = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { blobs } = await list({ prefix: BLOB_PATH });
    const existing = blobs.find((b) => b.pathname === BLOB_PATH);
    if (!existing) return res.status(200).json([]);

    const resp = await fetch(existing.url + "?t=" + Date.now());
    const attempts = await resp.json();
    return res.status(200).json(attempts);
  } catch (err) {
    console.error("admin-data error:", err);
    return res.status(500).json({ error: "Failed to load data" });
  }
}
