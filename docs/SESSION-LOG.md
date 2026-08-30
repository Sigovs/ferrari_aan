# Session log — 28 August 2026

The record of how the Cauley page came to look the way it does: what was found,
what was decided, what broke, and what was measured. Written so a later session
picks up the reasoning and not just the files.

---

## 0 · Where the project stood

A session opened on the `CAULEY FERRARI` folder with no prior memory. State was
reconstructed from disk:

- `newwebsitepage/` — three Ferrari copy decks dated 24 Aug 2026, one per
  retailer, structure identical: **Hero → Opening Manifesto → Heritage (with the
  compositions) → Retailer CTA**.
- `assets/raw/` — 404 MB of masters: 20 PNG renders (ROAD_ / LANDSCAPE_, `_1`
  exterior and `_4` interior), the American Grand Tour badge, two mp4 conforms.
- `assets/web/` + `assets/preview/` — **the conversion pipeline had already been
  run**: kebab-case webp at four widths plus jpg previews.
- HTML/CSS — **none**, anywhere in `CAULEY FERRARI`. Nothing had been built yet.

Two questions were put to Alex because their answers changed the architecture,
not the taste. He chose: **Cauley only** (Miller and Las Vegas later), and
**a standalone page carrying the Cauley masthead**.

## 1 · The finding that decided the whole design

The four Cauley frames were opened and looked at before any layout was drawn.

They are **configurator renders**, not campaign photography. Every exterior is
the same three-quarter front view from the same high-left camera on the same
empty grey studio floor; every interior is the same cabin angle. Only the colour
changes. The deck itself calls them "Brochure Imagery".

Ferrari's copy, meanwhile, is entirely about landscape — *"windswept coastal
cliffs to alpine summits, sun-bleached deserts, and forest roads that vanish
beneath towering canopies"*. **Not one supplied frame contains a landscape.**

Three consequences followed, and they are why the page is not the obvious page:

1. **No full-bleed hero.** A grey studio render stretched across the first screen
   is the banned archetype — full-bleed stock photo with centred white text
   (anti-patterns D1) — and it fails C22, which asks that a full-screen field be
   a *scene* and not an enlarged object. There is no scene in these frames.
2. **No grid of car cards.** Ten identical camera angles cannot carry rhythm, and
   two equal modules is one module shown twice (Gate 2).
3. **The identity cannot rest on the photography.** That is exactly the
   dependency C17 requires a Read to declare, so it was declared: the page is
   carried by structure — plate-and-record, alternating axis, interval, tone —
   and the renders sit inside that rather than under it.

The idea that came out of it: **the collection is a plate book.** Each
composition is a catalogue plate; the facts are its record.

## 2 · Measuring before designing

Nothing about the plate was decided by eye.

- **The car's bounding box** was measured on `road-mountain-pass-ext-2000.webp`
  by thresholding chroma and dark trim against the neutral ground. Columns and
  rows agreed to within 2 px across three thresholds:
  **x 0.162 → 0.761, y 0.228 → 0.835** of the 16:9 frame. Centre (0.4615, 0.5315).
- **Air is asymmetric in Ferrari's own framing** — 16% left, 24% right — and the
  car's nose points right. Both say the type belongs on the right of the car,
  and the render's gradient is darkest there too. All three agreed, so the
  desktop composition puts the car left and the type right.
- **The accent was derived, not chosen.** The supplied AGT badge was sampled:
  red `#a00909`, blue `#002768`, chrome greys. The lead car's lit body measures
  `#bf2424`. Accent = the badge's own red, used in exactly one interface role.
- **The studio floor was sampled** (`#565658` bottom-centre, `#7d7c81`
  bottom-left, `#49494d` top-right) to pick a page ground that the plate could
  dissolve into.

## 3 · Reconstructing the retailer lockup

There is no Cauley logo in the project. Four sibling retailer SVGs are
(`ferrari of greenwich.svg`, `ferrari of las vegas.svg`, `miller logo 2.svg`,
`ferrariofcentralnj.com-21.svg`), and they share identical leading path data.

Rendered and split by fill, the Las Vegas file resolves into
**23 white paths** (the prancing horse + `OFFICIAL` / `FERRARI DEALER`, two
lines) and **17 paths at `#A6A6A6`** — exactly the letter count of
`FERRARIOFLASVEGAS`, i.e. the retailer name on a third line, cap height 10
units, baseline at y = 43 of a 48-unit lockup.

So the lockup was rebuilt honestly rather than imitated:

- `img/ferrari-official-dealer.svg` — the 23 white paths, verbatim, viewBox trimmed.
- `img/ferrari-shield.svg` — the first two of them, the horse alone, for narrow screens.
- The retailer name is **live text**, not a path, because at logo scale it would
  render at 12 px and typography I7 puts a 14 px floor under anything the visitor
  has to read. It is set in the page's grotesque at `#A6A6A6` — the same colour,
  the same case, the same position the original lockup gives it.

## 4 · What broke, and how it was found

Every one of these was found by **measurement on the render**, not by looking.

**A hard rectangle around the cover plate.** The first build faded the image's
edges to `--bg` with a painted overlay. Pixel sampling across the plate's edge
found `#0d0e11` inside and `(29,30,35)` outside: the overlay was working
perfectly and the *ground beneath it was not `--bg`*. That is anti-patterns U17
exactly — a hard edge hidden only by the ground beneath it — and it appeared on
the other element, where nobody was looking.

Fixed properly: the image itself is masked to transparency, so the section's
authored ground shows through, and the pool of light moved *inside* the plate so
it travels with it. The geometry had to be solved rather than tuned — a single
ellipse must be opaque over the car and zero at all four frame edges, which
constrains its radii to ≤ 0.46 and ≤ 0.50 and its opaque stop to ≥ 0.67. Hence
`46% 50% at 46% 50%, #000 0 72%`.

**Text clipped into invisibility (U19).** At 320 px the masthead lockup
overflowed its flex row; at 1440 the "Verde Menthe" caption inherited a
bleeding figure's width and ran 58 px past the viewport. Neither produced a
scrollbar, because `overflow-x: clip` ate both. An audit comparing every
element's `scrollWidth` to its `clientWidth` found them. Fixed by restructuring
every image block as `figure > div.plate > img` — the bleed lives on the inner
div, so captions and grid items stay on the shell — and by dropping the
`OFFICIAL FERRARI DEALER` sub-line below 768 px (it is carried in full in the
colophon, so it is re-composed, not lost).

**The contrast instrument was wrong before the page was.** The first sweep
reported every text run failing at ~1.5:1. Three separate faults in the
measurement, each worth remembering:
1. it sampled the *faintest* antialiased pixel rather than the glyph core;
2. `page.addStyleTag({ id })` silently ignores `id`, so the "hide the text" layer
   was never removed and every frame after the first compared a blank page to a
   blank page;
3. runs sitting under the fixed masthead were being measured against the
   masthead's ground.

Corrected, the sweep measures **43 of 44 text runs at 1440 and 42 of 43 at 390**
(the skip link is off-screen by design) with **none below the WCAG AA floor and
a minimum of 5.77:1**.

**The beige interior was beating the cover.** On the reduced full-page read,
entry 02's Beige Honolulu cabin — then 82% of the shell — was the largest and
brightest mass on the page and won the thumbnail. Tonal structure survives
grayscale (C3) only if the page's dominant is the cover. Cut to 50%.

## 5 · Subtractions

- **All four captions removed.** Each repeated a colour name the spec plate
  already carried; two devices doing one job, and the fix is to strengthen one
  and delete the other.
- **All scroll animation dropped.** The page has no entrance reveals, no
  parallax, nothing. Motion here would season a page whose character has to
  survive a screenshot. Only control states move — a 2 px hover lift, colour
  transitions — and under `prefers-reduced-motion: reduce` even those stop.
  Verified: 103 visible elements in both states, zero elements with motion under
  reduce. The static build *is* the build.

## 6 · Additions that were not in the deck

**The enquiry form.** The deck specifies `Primary CTA: ENQUIRE` and gives no
destination. A page that presents an offer and withholds the means of accepting
it is not restrained, it is broken (C14). So the enquiry section carries a real
four-field form — and, because there is no endpoint, it says so on the page and
refuses to pretend it sent anything. A realistic placeholder is a fabrication
with an excuse (CP4); this one is unmistakable in the render.

Nothing else was added. No address, no telephone, no hours, no specialist name,
no stock count, no price — none was supplied and none may be inferred.

## 7 · Verification

The design-DNA delivery gates were run for real, against this build:

```
✓ Gate 1 · Measurable Conformance          A1 eventCoverage 100% (floor 90),
                                           competition 0% (limit 60), media 28%,
                                           4 declared masses, 6/6 commitments
✓ Gate 2 · Structural and Authorship       one detector finding, disposed;
                                           hand-written formula inventory reconciled
✓ Gate 2 · delegated — authorship          all 9 declared operations located in the render
✗ Gate 1/2 · delegated — hero              machine checks PASS at 1440 and 390;
                                           humanConfirmed still false — Alex's to give
✗ Gate 3 · Product Usefulness              nine questions, unanswered — Alex's to give
✓ Gate 4 · Content Provenance              4 claim strings harvested, 4 covered, 0 uncovered
```

The chain therefore refuses Gate 5, which is correct: Gate 5 is Alex's verdict
and it may not be self-declared.

One workaround is recorded because it will recur: Playwright 1.62 has no
Chromium build for mac13-arm64, so `npx playwright install chromium` exits 0 and
installs nothing. The chain was run against the system Chrome by copying
`gates/run.mjs`, repointing its imports at the repo and changing
`chromium.launch()` to `chromium.launch({ channel: 'chrome' })`. Every gate
module stayed the repo's own and unmodified; only the browser binary differs.
The design-DNA repo was not patched — a machine-specific workaround does not
belong in the system that governs every project.

## 8 · The objection that stands

Recorded here because it is the thing most worth acting on, and because burying
it in a disposition table is how objections get lost:

> The page is a well-built argument for assets that do not support it. Ferrari's
> copy promises coastal cliffs, alpine summits and deserts. The visitor is shown
> a grey studio floor twice. Every craft number passes and the emotional claim of
> the copy is never delivered by a single frame. A buyer who has just read the
> manifesto arrives at "Mountain Pass" and sees no mountain pass.

**One landscape frame per composition would close it.** That is the ask that went
to Alex. The alternative — naming the campaign's ten American landscapes as a
typographic index — was rejected: it would be content invented to fill a
composition (CP7), and it needs Ferrari's words first.
