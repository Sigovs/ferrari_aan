# Ferrari AAN — Purosangue American Grand Tour, retailer pages

Context for any session opened in this repo. Read this first; the long-form
record is in [`docs/`](docs/).

## What this is

Ferrari's **Purosangue American Grand Tour Atelier Collection** presented on
individual US retailer sites. Ferrari supplied one copy deck per retailer
(24 Aug 2026) and one set of brochure renders. **Cauley Ferrari's page is
built** and lives in [`site/`](site/). Miller Motorcars and Ferrari Las Vegas
are not built; their assets are already here.

Each retailer gets a **different set of Atelier compositions** — this is the
single easiest thing to get wrong, because the three decks are otherwise almost
identical and the difference is buried in the Heritage module:

| retailer | compositions |
| --- | --- |
| **Cauley Ferrari** | 01 Mountain Pass · 02 The Mountains |
| **Ferrari Las Vegas** | Overlook · The Sands |
| **Miller Motorcars** | Byway · The Sands · The Great Plains — **three, not two** |

Always take the car set from that retailer's own `.docx`, never from Cauley's.

## Design authority

All visual work here obeys Alex's design DNA at
`/Users/alex/Desktop/WORK/design_dna/TASTE.md` — invoke the `design-dna` skill
before touching layout, type, colour, spacing, imagery or motion. This project
does not override it; the Design Read that governs the built page is recorded
verbatim in [`docs/DESIGN-READ.md`](docs/DESIGN-READ.md) and the page must keep
matching it.

## The one thing to understand before changing anything

**The supplied imagery cannot carry this campaign, and the page is built around
that fact.** All ten frames are configurator renders: one camera angle for every
exterior, one for every interior, on an empty grey studio floor. Ferrari's copy
is about coastal cliffs, alpine summits, deserts and forest roads. Not one frame
contains a landscape.

So the page's identity is carried by **structure**, not by photography — the
plate-and-record pair, the alternating axis, the interval between chapters, and
the tonal system. This is declared as the composition's asset dependency
(academic-composition C17) in `site/.gates/declare.json`. Swap in an ordinary
frame and the page still reads. That is deliberate, and it is why the page is
not a full-bleed hero with type on top.

**The governing idea: the collection is a plate book.** Each composition is a
catalogue plate — the supplied render, uncropped, its rectangle dissolved by an
elliptical mask so the car stands in a pool of light on the page's own ground —
with the colour facts set beside it as a record on hairlines.

The mask geometry is measured, not eyeballed: the car's bounding box on
`road-mountain-pass-ext-2000.webp` is **x 0.162–0.761, y 0.228–0.835** of the
16:9 frame. The ellipse (`46% 50% at 46% 50%`, opaque to 72% of its radius)
reaches zero at all four frame edges and stays fully opaque past every extreme
point of the silhouette. **The same numbers drive the mobile plate's width and
offset** — do not change one without re-deriving the other.

## Layout

```
site/                 the built Cauley page — open site/index.html, nothing to build
  .gates/             delivery-gate declaration, artefacts, annotated evidence
newwebsitepage/       Ferrari's three retailer copy decks (.docx)
assets/web/           all ten compositions as responsive webp (exterior 1000/2000, interior 700/1400)
assets/preview/       jpg contact sheet of the same
assets/raw/           NOT IN GIT — 404 MB of masters, local only
docs/                 session log, design read, open items, decks as text
```

## Verification state

Gates 1, 2, authorship and 4 **pass**. `hero.json`'s machine checks pass at 1440
and 390; its `humanConfirmed` and Gate 3's nine answers are Alex's and are still
open, so the chain correctly refuses Gate 5. Contrast is measured on the
composited render — 43/44 text runs at 1440, 42/43 at 390, none below AA,
minimum 5.77:1. Details and how to re-run: [`site/README.md`](site/README.md).

Playwright's bundled Chromium does not build for mac13-arm64, so on Alex's Mac
the gate chain has to run against the system Chrome
(`chromium.launch({ channel: 'chrome' })`). Do not patch the design-DNA repo for
this; copy the runner.

## Open items — none of these may be guessed

See [`docs/OPEN-ITEMS.md`](docs/OPEN-ITEMS.md). The short version: the hero asset
sits behind a Box link nobody here can open; the enquiry form has no endpoint;
no retailer contact details were supplied and none were invented; and the
campaign has no landscape photography, which is the page's one real weakness.
