#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════════
   Build a preview package: one self-contained folder that can be dropped into
   any directory on any server and works, plus a zip of it.

   The rule this exists to enforce: a preview package never depends on files
   that happen to be sitting next to it already. It is resolved from the pages
   themselves — every src, href, srcset candidate and CSS url() is followed and
   copied — and it refuses to finish if a single reference is unresolved. A
   package that is 39 files short does not look broken until the client opens
   it, which is exactly when it must not.

   Run:  node tools/package-preview.mjs [v2]
   Out:  _deploy/Ferrari_Purosangue_2/        the folder to upload
         _deploy/Ferrari_Purosangue_2.zip     the same thing zipped
   ═══════════════════════════════════════════════════════════════════════════ */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, posix } from 'node:path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const BUILD = join(ROOT, '_deploy', 'Ferrari_Purosangue');
const VARIANT = (process.argv[2] || 'v2').replace(/^-+/, '');
const SUFFIX = VARIANT === 'v1' ? '' : `_${VARIANT}`;
const NAME = VARIANT === 'v1' ? 'Ferrari_Purosangue' : `Ferrari_Purosangue_2`;
const OUT = join(ROOT, '_deploy', NAME);

const RETAILERS = ['cauley', 'lasvegas', 'greenwich'];
const PAGES = RETAILERS.map((k) => `index_${k}${SUFFIX}.html`);
const INDEX = `index${SUFFIX}.html`;

/* Every reference a browser would fetch, from the pages and from any stylesheet
   they pull in. Stylesheets are followed one level, which is all this page has
   and all it is allowed to grow without this being revisited. */
const refsOf = (html) => {
  const out = new Set();
  for (const m of html.matchAll(/(?:src|href)="((?!https?:|\/\/|#|tel:|mailto:|data:)[^"]+)"/g)) out.add(m[1]);
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) out.add(part.trim().split(/\s+/)[0]);
  }
  return out;
};

const refs = new Set();
for (const page of [...PAGES, INDEX]) {
  const p = join(BUILD, page);
  if (!existsSync(p)) throw new Error(`missing page in the build: ${page} — run tools/build-pages.mjs first`);
  for (const r of refsOf(readFileSync(p, 'utf8'))) refs.add(r);
}
for (const r of [...refs]) {
  if (!r.endsWith('.css')) continue;
  const css = readFileSync(join(BUILD, r), 'utf8');
  for (const m of css.matchAll(/url\(["']?\.\.\/([^"')]+)["']?\)/g)) refs.add(m[1]);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const copy = (rel, as = rel) => {
  const dst = join(OUT, as);
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(join(BUILD, rel), dst);
};

const missing = [];
for (const r of [...refs].sort()) {
  if (!existsSync(join(BUILD, r))) { missing.push(r); continue; }
  copy(r);
}
for (const page of PAGES) copy(page);
/* the variant's index becomes the folder's own index, so the client gets one
   link rather than three */
copy(INDEX, 'index.html');
writeFileSync(join(OUT, '.nojekyll'), '');

if (missing.length) {
  console.error(`\nREFUSING TO PACKAGE — ${missing.length} unresolved reference(s):`);
  for (const m of missing) console.error('   !', m);
  process.exit(1);
}

/* the index that ships is the folder's own, so its three links must be local */
const shipped = readFileSync(join(OUT, 'index.html'), 'utf8');
for (const page of PAGES) {
  if (!shipped.includes(`href="${page}"`)) {
    console.error(`\nREFUSING TO PACKAGE — index.html does not link ${page}`);
    process.exit(1);
  }
}

execFileSync('zip', ['-q', '-r', `${NAME}.zip`, NAME], { cwd: join(ROOT, '_deploy') });

const count = execFileSync('bash', ['-c', `find ${JSON.stringify(OUT)} -type f | wc -l`]).toString().trim();
const size = execFileSync('bash', ['-c', `du -sh ${JSON.stringify(OUT)} | cut -f1`]).toString().trim();
console.log(`\n  ${NAME}/      ${count} files, ${size} — self-contained, ${refs.size} references, 0 unresolved`);
console.log(`  ${NAME}.zip   the same, zipped`);
console.log(`\n  upload the folder anywhere and open its index.html`);
