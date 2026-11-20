// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. That is all the program
// has to do. The entry is the post itself: the meme (meme.png) is posted on X from a
// public account with make.fun and the play code in its text, POST.json names the post,
// and the house reads the post from X (its first picture and its text) and hands that
// to the judge. Nothing this program writes about the post is judged.
//
// The POST.json this entry ships holds a placeholder address until the post is made;
// replace it with the post's address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'POST.json');
// Fail loudly on a malformed POST.json instead of copying garbage to /output:
// it must be a JSON object with a string url (the gate reads exactly that).
const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null ||
    typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object with a string url');
  process.exit(1);
}
copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
