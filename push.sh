#!/bin/bash
# One-shot: commit everything in this folder and push it to Sigovs/ferrari_aan.
# Everything is already written and the repo is already initialised — this only
# stages, commits and pushes. Run it from anywhere:
#
#   bash "/Users/alex/Desktop/WORK/CAULEY FERRARI/____AUGUST NEW PAGE POURSANG/push.sh"
#
# You need to be logged in to GitHub first:  gh auth login
# (or have an HTTPS token in the keychain / a working SSH key for your account)

set -e
cd "$(dirname "$0")"

echo "→ staging everything, including assets/raw (404 MB of masters)"
git add -A

echo "→ files staged:"
git diff --cached --name-only | awk -F/ '{print $1}' | sort | uniq -c | sort -rn

git symbolic-ref HEAD refs/heads/main 2>/dev/null || true

echo "→ committing"
git commit -F - <<'MSG'
Purosangue American Grand Tour — Cauley Ferrari page, and the record behind it

The built page (site/), Ferrari's three retailer copy decks, the full asset set
including the masters, and the written record of how the design was arrived at.

The finding that decided the design: all ten supplied frames are configurator
renders on an empty grey studio floor, while the copy is entirely about
landscape. So the page is not a full-bleed hero — it is a plate book. Each
Atelier composition is a catalogue plate whose rectangle is dissolved by an
elliptical mask derived from the car's measured bounding box (x 0.162-0.761,
y 0.228-0.835 of the 16:9 frame), with the colour facts set beside it as a
record on hairlines. The identity is carried by structure, and that dependency
is declared rather than hidden.

Verified on the rendered page, not on the tokens: 43/44 text runs at 1440 and
42/43 at 390 clear WCAG AA, minimum 5.77:1; no horizontal overflow at 1920,
1440, 900, 390 or 320; no functional text below 14px; identical and entirely
still under prefers-reduced-motion. Design-DNA delivery gates 1, 2, authorship
and 4 pass; the hero's machine checks pass at both viewports. Two human
confirmations remain open by design, so the chain correctly refuses Gate 5.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
MSG

git remote add origin https://github.com/Sigovs/ferrari_aan.git 2>/dev/null \
  || git remote set-url origin https://github.com/Sigovs/ferrari_aan.git

echo "→ pushing (~420 MB on the first push, give it a few minutes)"
git push -u origin main

echo
echo "done — https://github.com/Sigovs/ferrari_aan"
