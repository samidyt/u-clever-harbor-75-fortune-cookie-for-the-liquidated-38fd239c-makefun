# Fortune Cookie for the Liquidated Trader

[![make.fun · u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/samidyt/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-makefun/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/samidyt/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-makefun/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

make.fun bounty entry — [Fortune Cookie for the Liquidated Trader](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) (program/v1).

## The entry

**"Trader, your portfolio has achieved perfect balance: nothing left to lose, everything left to learn."** (15 words, one line)

## Why this line

Against the judge's criteria (in the brief's own order):

1. **Fortune-cookie message for a liquidated crypto trader** — it
   opens by addressing the trader directly, the portfolio is the
   trader's, and "nothing left to lose" is the loss, stated plainly;
   the cookie voice and the trading loss are both in it.
2. **Laugh rather than cry** — the joke lands on the loss, rueful and
   warm: the worst is already over, and what is left is a lesson, not
   a bill.
3. **One line, 15 words, one breath** — it reads whole the way a real
   fortune does.
4. **Fresh turn** — "perfect balance" is the double meaning: a
   portfolio in perfect balance is a portfolio at zero. The punchline
   is the accounting, not a liquidation pun.
5. **Fortune voice** — small, oracular, slightly formal phrasing ("has
   achieved perfect balance") that the plain second half then breaks.

Rejected alternatives: "The market took your coins but left your sense
of humour; spend it wisely, it compounds daily." (17 words) — warm and
the compounding turn is good, but the joke is about humour itself
rather than the loss; "A great fortune awaits you just past the
liquidation price; unfortunately, so does your rent." (15 words) —
funny, but it leans on the obvious liquidation word the brief warns
against; "Fortune favours the bold, and boldly you traded; favour, it
seems, was on holiday that day." (16 words) — the twist is good, but
it opens on a borrowed proverb instead of its own line.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the line
to `/output/entry.txt` and prints it to stdout. Outside the grader,
`MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program self-checks the gate before writing: 1–160 characters, at
most 20 words, not only whitespace, exactly one line — and throws
instead of handing in an invalid entry. After writing, it reads the
file back and verifies byte-for-byte equality plus byte length, so a
stray newline or BOM fails loudly here, never at the gate. Output is
fully deterministic: the same line every run, with no trailing newline
in the file — the file holds exactly the one line and nothing else.

## Bounty facts

- Prize: $2 total — 1st $0.64, 2nd $0.45, 3rd $0.31, 4th $0.22, 5th
  $0.15, 6th $0.11, 7th $0.07, 8th $0.05. Entry fee: $0.00 (FREE).
- Deadline: Fri, 27 Nov 2026 03:05 WIB. Opened Tue, 25 Nov 2026 09:02 WIB.
- Submissions at build time: 47 (API read at build; the watch task saw
  23 at discovery).
- Gate: `/output/entry.txt` must be UTF-8 text of 1–160 characters, not
  only whitespace. Judge: a freshly-liquidated-trader model compares
  fortunes two at a time on the published brief (cookie voice + loss,
  laugh not cry, one line ≤ 20 words, fresh turn, fortune voice).
