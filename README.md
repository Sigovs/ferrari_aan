# Ferrari AAN — Purosangue American Grand Tour

Retailer pages for Ferrari's **Purosangue American Grand Tour Atelier
Collection**, built from the manufacturer's copy decks of 24 August 2026.

**Cauley Ferrari's page is built.** Open [`site/index.html`](site/index.html) —
there is nothing to install, build or serve. Miller Motorcars and Ferrari Las
Vegas are not built; their assets are already in this repo.

| | |
| --- | --- |
| **Start here** | [`CLAUDE.md`](CLAUDE.md) — the project context, and what auto-loads for a Claude Code session |
| **How it got this way** | [`docs/SESSION-LOG.md`](docs/SESSION-LOG.md) — the decisions, the defects, the measurements |
| **The formal record** | [`docs/DESIGN-READ.md`](docs/DESIGN-READ.md) — Design Read, composition plan, ledger, critique panel, dispositions |
| **What's blocked, and on whom** | [`docs/OPEN-ITEMS.md`](docs/OPEN-ITEMS.md) |
| **The copy, as text** | [`docs/COPY-DECK.md`](docs/COPY-DECK.md) — all three decks extracted from the `.docx` |
| **The build's own record** | [`site/README.md`](site/README.md) |

## Layout

```
site/                 the built Cauley page
  index.html          no build step; open it
  css/page.css        one stylesheet
  js/page.js          two behaviours only
  img/                the four renders at two widths, the AGT badge, the Ferrari marks
  .gates/             delivery-gate declaration, artefacts and annotated evidence
newwebsitepage/       Ferrari's three retailer copy decks (.docx) — source of truth
assets/web/           all ten compositions as responsive webp
assets/preview/       jpg contact sheet of the same
assets/raw/           NOT IN GIT — 404 MB of masters, local only
docs/                 the written record
```

`assets/raw/` is deliberately excluded: 404 MB of original PNG renders and two
mp4 conforms. Everything the page uses is derived from it and committed here.

## Which retailer gets which cars

The three decks are near-identical and the difference is buried in the Heritage
module. Take the set from that retailer's own `.docx`, never from Cauley's:

| retailer | compositions |
| --- | --- |
| **Cauley Ferrari** | 01 Mountain Pass · 02 The Mountains |
| **Ferrari Las Vegas** | Overlook · The Sands |
| **Miller Motorcars** | Byway · The Sands · The Great Plains — **three** |

## Verification

Contrast is measured on the composited render rather than on the tokens: 43 of 44
text runs at 1440 and 42 of 43 at 390, **none below the WCAG AA floor, minimum
5.77:1**. No horizontal overflow at 1920, 1440, 900, 390 or 320. No functional
text below 14 px at any width. Under `prefers-reduced-motion: reduce` the page is
identical and entirely still.

The design-DNA delivery gates were run against this build. Gates 1, 2, authorship
and 4 pass; the hero's machine checks pass at both viewports. Two human
confirmations remain open by design — see [`docs/OPEN-ITEMS.md`](docs/OPEN-ITEMS.md#6--two-human-gate-checks).

## Design authority

Visual work here obeys the design DNA at
`/Users/alex/Desktop/WORK/design_dna/TASTE.md`. This project does not override
it. The Design Read that governs the built page is in
[`docs/DESIGN-READ.md`](docs/DESIGN-READ.md), and the artefact is expected to
keep matching it — if it stops, the artefact is wrong, not the read.
