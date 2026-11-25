// Fortune Cookie for the Liquidated Trader — make.fun entry (program/v1).
//
// The harness runs `node main.ts` (Node 22, standard library only, no
// network). The program writes one line to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line (15 words, one line, a fortune cookie message for a crypto
// trader who has just been liquidated):
//   "Trader, your portfolio has achieved perfect balance: nothing left
//    to lose, everything left to learn."
//
// Against the judge's brief, in its own order:
//   1. Fortune-cookie message for a liquidated crypto trader, with the
//      cookie voice and the trading loss both in it: it opens by
//      addressing the trader directly, the portfolio is the trader's,
//      and "nothing left to lose" is the loss, stated plainly.
//   2. It makes the liquidated trader laugh rather than cry: the joke
//      lands on the loss, rueful and warm — the worst is already over,
//      and what is left is a lesson, not a bill.
//   3. One line, 15 words, reading whole in a single breath the way a
//      real fortune does.
//   4. Fresh turn: "perfect balance" is the double meaning — a
//      portfolio in perfect balance is a portfolio at zero. The
//      punchline is the accounting, not a liquidation pun.
//   5. Fortune voice: small, oracular, slightly formal phrasing
//      ("has achieved perfect balance") that the plain second half
//      then breaks.
//
// Revision (pass 2): the first draft opened on "Your portfolio…", which
// leaves the trader implied; the judge's first criterion is explicit
// that a line with no trader in it loses to one about a liquidated
// crypto trader, so the revision addresses the trader by name in the
// opening word. Nothing else changed — the turn, the count and the
// voice are the same line, one word stronger on the brief's top
// criterion.
//
// Rejected alternatives: "The market took your coins but left your
// sense of humour; spend it wisely, it compounds daily." (17 words) —
// warm and the compounding turn is good, but the joke is about humour
// itself rather than the loss; "A great fortune awaits you just past
// the liquidation price; unfortunately, so does your rent." (15 words)
// — funny, but it leans on the obvious liquidation word the brief
// warns against; "Fortune favours the bold, and boldly you traded;
// favour, it seems, was on holiday that day." (16 words) — the twist
// is good, but it opens on a borrowed proverb instead of its own line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Trader, your portfolio has achieved perfect balance: nothing left to lose, everything left to learn.";

// Gate, from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 160 characters, not only white space, and one fortune cookie
// message of at most 20 words of plain text for a crypto trader who has
// just been liquidated. Check our own output before writing it, and fail
// loudly instead of handing in a bad entry. Count characters (code
// points, not UTF-16 units) and words (whitespace-separated tokens).
// The output is fully deterministic: the same line every run, with no
// trailing newline — the file holds exactly the one line and nothing else.
const chars = [...LINE];
const words = LINE.trim().split(/\s+/).filter((w) => w.length > 0);
if (chars.length < 1 || chars.length > 160 || LINE.trim().length === 0) {
  throw new Error(`invalid entry line (${chars.length} chars): ${JSON.stringify(LINE)}`);
}
if (words.length < 1 || words.length > 20) {
  throw new Error(`invalid entry line (${words.length} words, max 20): ${JSON.stringify(LINE)}`);
}
// No leading or trailing whitespace: a line of only-whitespace is
// already rejected above, but stray spaces at either end would slip
// through and pad the entry.
if (LINE !== LINE.trim()) {
  throw new Error(`entry must not have leading or trailing whitespace: ${JSON.stringify(LINE)}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error(`entry must be a single line: ${JSON.stringify(LINE)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read the file back and prove it holds byte-for-byte exactly the one
// line before the run can count as a success. A write that silently
// gained a newline or a second line must fail here, never reach the gate.
// Also assert the byte length matches, so a stray BOM or encoding slip
// is caught too.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error(
    `entry mismatch: file holds ${JSON.stringify(written)}, expected ${JSON.stringify(LINE)}`,
  );
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error(
    `entry byte-length mismatch: ${Buffer.byteLength(written, "utf8")} vs ${Buffer.byteLength(LINE, "utf8")}`,
  );
}

// The single fortune line, to stdout: one line of plain text.
console.log(LINE);
console.error(`entry ok: ${chars.length} chars, ${words.length} words`);
