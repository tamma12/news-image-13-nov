// One front page for Friday 13 November 2026 — news-image-01.
// Six stories, one page: Ukraine's drone attack, Nvidia's chief resigning,
// the Bahrain drone clash, the FAA ground stop, the Microsoft outage, and
// China's Pacific drills. entry.png beside this file is the picture; this
// program writes it out as /output/entry.png (or into $MAKEFUN_OUTPUT_DIR
// when testing locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts).

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(folder, { recursive: true });
writeFileSync(join(folder, 'entry.png'),
  readFileSync(new URL('./entry.png', import.meta.url)));
