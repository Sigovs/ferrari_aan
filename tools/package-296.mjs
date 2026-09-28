// Package the 296 GT Modificata page into one self-contained folder.
//   node tools/package-296.mjs "296 GT Modificata /build" _deploy/Ferrari_296_GT_Modificata
// Follows every src/href/srcset, one level of url() in the stylesheets, and the
// chapter-7 frames the script loads by number; refuses on anything unresolved.
// Then copy the source parts (_*.html minus .bak, build.mjs) beside it.
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';
const SRC = process.argv[2], OUT = process.argv[3];
const html = readFileSync(join(SRC, 'index.html'), 'utf8');
const refs = new Set(), missing = [];
const local = u => u && !/^(https?:|data:|mailto:|tel:|#|\/\/|javascript:)/.test(u);
const clean = u => u.split('#')[0].split('?')[0];
for (const m of html.matchAll(/\b(?:src|href|poster)="([^"]+)"/g)) if (local(m[1])) refs.add(clean(m[1]));
for (const m of html.matchAll(/\bsrcset="([^"]+)"/g)) for (const c of m[1].split(',')) { const u = c.trim().split(/\s+/)[0]; if (local(u)) refs.add(clean(u)); }
for (const m of html.matchAll(/data-frames="([^"]+)"\s+data-count="(\d+)"/g)) for (let i = 0; i < +m[2]; i++) refs.add(m[1] + String(i).padStart(3, '0') + '.webp');
for (const r of [...refs].filter(r => r.endsWith('.css'))) {
  const css = readFileSync(join(SRC, r), 'utf8');
  for (const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) if (local(m[1])) refs.add(normalize(join(dirname(r), clean(m[1]))));
}
for (const r of refs) if (!existsSync(join(SRC, r))) missing.push(r);
if (missing.length) { console.error('UNRESOLVED:\n  ' + missing.join('\n  ')); process.exit(1); }
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
for (const r of refs) { mkdirSync(dirname(join(OUT, r)), { recursive: true }); copyFileSync(join(SRC, r), join(OUT, r)); }
writeFileSync(join(OUT, 'index.html'), html);
writeFileSync(join(OUT, '.nojekyll'), '');
console.log(`packaged ${refs.size + 1} files into ${OUT}`);
