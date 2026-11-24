// One Word From Your Ex — make.fun bounty
// u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
//
// The entry is exactly one word: the word an ex would use to describe you.
// Chosen word: "Unmatched".
//
// Why this word, after testing variants against the judge's brief
// (funniest + most painfully honest, weighed in order):
//   - The field is full of the obvious verdicts: clingy, avoidant, ghost,
//     forgettable, unavailable, exhausting, rebound, almost, potential.
//     A competent-but-ordinary word loses to 340 of them, so the angle
//     had to be one nobody else would pick.
//   - "Unmatched" is a dating-app verb used as a person-descriptor:
//     the ex did not just leave, they revoked the match itself with one
//     tap. That sharp turn is the laugh.
//   - It stings because it is true and the entrant plainly knows it:
//     you were not dumped in a conversation, you were un-made.
//   - It lands instantly and cannot be swapped for a near synonym:
//     "blocked" is angry, "ghosted" is cowardly, "unmatched" is the
//     whole relationship deleted like it never happened.
//   - It is relatable to anyone who has ever been swiped away.
// Alternatives weighed and dropped: Muted (too passive), Archived
// (filed away, less sting), Buffering (a state, not a verdict),
// Benched (kept around, never chosen — close second), Layover
// (a stop on the way to somewhere better — close third).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Unmatched";

// Self-check against the competition gate before writing: the sealed
// scorer requires UTF-8 text of 1 to 24 characters, not only white
// space, and the judge requires exactly one word. Fail loudly here
// rather than shipping an entry the gate would refuse.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`Entry word fails the gate: ${JSON.stringify(WORD)}`);
}

// The grader runs the program in a sandbox where /output exists;
// an optional first argument overrides the output directory for
// local testing only. Default is the competition's /output.
const outDir = process.argv[2] ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });

// Exactly the word, no trailing newline, no extra text:
// the gate allows 1-24 UTF-8 characters, and the entry must be
// exactly one word and nothing else.
writeFileSync(outFile, WORD, "utf8");

console.log(`Wrote ${WORD.length}-character entry to ${outFile}: ${WORD}`);
