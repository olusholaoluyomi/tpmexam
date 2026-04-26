/**
 * Generates a short explanation for each question's correct answer and writes
 * it back into src/data/questions.ts.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-explanations.mjs
 *
 * Requires Node 18+ (uses built-in fetch). No extra packages needed.
 * Processes questions in batches of 20 with a short delay between batches
 * to stay well within API rate limits.
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const QUESTIONS_FILE = join(__dirname, "../src/data/questions.ts");
const API_KEY = process.env.ANTHROPIC_API_KEY;
const BATCH_SIZE = 20;
const DELAY_MS = 1500;

if (!API_KEY) {
  console.error("Error: ANTHROPIC_API_KEY environment variable not set.");
  console.error("Usage: ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-explanations.mjs");
  process.exit(1);
}

// ── Parse questions from the TS file ──────────────────────────────────────────
const src = readFileSync(QUESTIONS_FILE, "utf8");
const header = src.slice(0, src.indexOf("export const questions"));
const jsonBody = src
  .replace(/^.*export const questions:\s*Question\[\]\s*=\s*/s, "")
  .replace(/;\s*$/, "")
  .trim();

let questions;
try {
  questions = JSON.parse(jsonBody);
} catch (e) {
  console.error("Failed to parse questions.ts as JSON:", e.message);
  process.exit(1);
}

console.log(`Loaded ${questions.length} questions.`);
const needExplanation = questions.filter((q) => !q.explanation || q.explanation.trim() === "");
console.log(`${needExplanation.length} questions need explanations.`);

// ── Call Anthropic API ────────────────────────────────────────────────────────
async function generateExplanations(batch) {
  const prompt = batch
    .map((q, i) => {
      const correctOption = q.options.find((o) => o.key === q.correct);
      const correctText = correctOption ? correctOption.label : q.correct;
      return `${i + 1}. Q: ${q.question}\n   Correct answer: ${q.correct}. ${correctText}`;
    })
    .join("\n\n");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `You are a Technical Product Manager (TPM) certification coach. For each question below, write a SHORT explanation (1-2 sentences, max 40 words) of WHY the given correct answer is right. Focus on the key concept or principle that makes it correct. Be educational and concise.

Return ONLY a JSON array of strings — one explanation per question, in the same order, no other text.

Questions:
${prompt}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`API error ${response.status}: ${body}`);
  }

  const data = await response.json();
  const text = data.content[0].text.trim();
  // Strip optional markdown code fence
  const cleaned = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  return JSON.parse(cleaned);
}

// ── Main loop ────────────────────────────────────────────────────────────────
const explanationMap = new Map(questions.map((q) => [q.id, q.explanation || ""]));
let processed = 0;

for (let i = 0; i < needExplanation.length; i += BATCH_SIZE) {
  const batch = needExplanation.slice(i, i + BATCH_SIZE);
  console.log(`Processing questions ${i + 1}–${Math.min(i + BATCH_SIZE, needExplanation.length)} / ${needExplanation.length}…`);

  let explanations;
  try {
    explanations = await generateExplanations(batch);
  } catch (err) {
    console.error(`Batch failed: ${err.message}. Retrying once…`);
    await new Promise((r) => setTimeout(r, 3000));
    explanations = await generateExplanations(batch);
  }

  if (explanations.length !== batch.length) {
    console.warn(`Warning: expected ${batch.length} explanations, got ${explanations.length}. Padding with empty strings.`);
    while (explanations.length < batch.length) explanations.push("");
  }

  batch.forEach((q, j) => {
    explanationMap.set(q.id, explanations[j] || "");
  });

  processed += batch.length;
  console.log(`  Done. Total processed: ${processed}`);

  if (i + BATCH_SIZE < needExplanation.length) {
    await new Promise((r) => setTimeout(r, DELAY_MS));
  }
}

// ── Write back ───────────────────────────────────────────────────────────────
const updated = questions.map((q) => ({
  ...q,
  explanation: explanationMap.get(q.id) || q.explanation || "",
}));

const newSrc =
  header +
  "export const questions: Question[] = " +
  JSON.stringify(updated, null, 2) +
  ";\n";

writeFileSync(QUESTIONS_FILE, newSrc, "utf8");
console.log(`\nDone! Wrote ${updated.length} questions with explanations to questions.ts`);
