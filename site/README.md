# Purosangue American Grand Tour Atelier Collection — Cauley Ferrari

A standalone campaign page. Open `index.html`; nothing needs building or serving
(a webfont is fetched from Google Fonts, and the page falls back to Helvetica
Neue / Arial without it).

```
index.html
css/page.css
js/page.js          two behaviours only: the masthead ground state, and the form's honest refusal
img/                the four supplied renders at two widths each, the AGT badge, the Ferrari marks
.gates/             the delivery-gate declaration, artefacts and annotated evidence
```

## What it is

The Cauley Ferrari edition of Ferrari's *Purosangue American Grand Tour Atelier
Collection* copy deck (`../newwebsitepage/2026_0824_Retailer Site Base_Cauley
Ferrari.docx`, 24 Aug 2026), built to the four modules the deck specifies — hero,
opening manifesto, heritage with two compositions, retailer CTA — plus an
enquiry form, because a page that offers *Enquire* and provides no way to enquire
is not restrained, it is broken.

Copy is verbatim from the deck. Cauley's two compositions are **01 Mountain Pass**
(Rosso Racing 2025 / Bianco King / Blu Sterling) and **02 The Mountains**
(Verde Menthe / Beige Honolulu). The deck names no livery for The Mountains, so
that record carries two rows and not three — nothing was invented to square the
two entries.

## The governing idea

**The collection is a plate book.** Each composition is a catalogue plate: the
supplied studio render, uncropped, with its rectangle dissolved by an elliptical
mask so the car stands in a pool of light on the page's own ground. The colour
facts are its record — mono-register keys on hairlines, no box. The page is read
as a set of two entries, not as two campaign frames.

The mask is not a taste decision. The car's bounding box was measured on
`road-mountain-pass-ext-2000.webp` at **x 0.162–0.761, y 0.228–0.835** of the
16:9 frame; the ellipse (46% × 50% at 46% 50%, opaque to 72% of its radius)
reaches zero at all four frame edges and stays fully opaque past every extreme
point of the silhouette. The same numbers drive the mobile plate's width and
offset, which put the car's own centre on the viewport centre rather than
inheriting the desktop crop.

## Task and means — the list that composition may not delete

The visitor came to enquire about a car they cannot configure themselves. The
means, all verified present in the render by `.gates/product.json`:

- the primary enquiry action, above the fold at every width;
- the enquiry form and its submit;
- a route to each of the two compositions (the cover index);
- the retailer's identity, in the masthead and again in the colophon;
- a secondary route out;
- the record — the colour facts — for each composition.

## Declared dependency

**The identity of this page does not rest on the photography, and could not.**
The ten supplied frames are configurator renders: one camera angle for every
exterior, one for every interior, on an empty grey studio floor. The copy is
about coastal cliffs, alpine summits and deserts; not one frame contains a
landscape. So the page is carried by structure — the plate-and-record pair, the
alternating axis, the interval between chapters, and the tonal system — and the
renders sit inside that rather than under it. Swap in an ordinary frame and the
page still reads; that is the point of building it this way.

If Ferrari later supplies campaign photography (the hero media in the deck is a
Box link nobody here can open), it drops into `.plate--cover` and the composition
takes it without changing.

## Open items — none of these may be guessed

1. **The hero asset.** The deck points at `app.box.com/s/ylfjl4u6…`. Until that
   arrives the cover uses the Mountain Pass exterior, which is Cauley's own lead
   composition and therefore a defensible stand-in rather than a placeholder.
2. **The enquiry endpoint.** The form posts nowhere and says so on the page.
   Wire `#enquiry-form` to the retailer's CRM before launch.
3. **Retailer details.** No address, telephone, hours or specialist name appears,
   because none was supplied. See `.gates/content-ledger.json`.
4. **"Explore Purosangue"** currently returns to the collection. Point it at the
   retailer's Purosangue model page when that URL is known.

## Verification

Contrast is measured on the composited render, not on the tokens: 43 of 44 text
runs at 1440 and 42 of 43 at 390 (the skip link is off-screen by design), **none
below the WCAG AA floor, minimum 5.77:1**. No horizontal overflow at 1920, 1440,
900, 390 or 320. No functional text below 14px at any width.

The delivery gates run from the design-DNA repo:

```sh
node gates/run.mjs "…/____AUGUST NEW PAGE POURSANG/site"
```

Note: Playwright 1.62's bundled Chromium does not build for mac13-arm64, so on
this machine the chain has to be run with `chromium.launch({ channel: 'chrome' })`.
Every gate module is the repo's own and unmodified; only the browser binary
differs.

Current state — `.gates/`:

| artefact | verdict |
| --- | --- |
| `gate1.json` | **pass** — A1 eventCoverage 100% (floor 90%), competition 0% (limit 60%), mediaCoverage 28%, 4 declared masses; all six commitments met |
| `gate2.json` | **pass** — one detector finding (three equal form fields), disposed; hand-written formula inventory reconciled against it |
| `authorship.json` | **pass** — all nine declared operations located in the render |
| `hero.json` | machine checks **pass** at 1440 and 390 — nothing clipped, no nav or copy overlap. `humanConfirmed` still false: someone has to look at `.gates/evidence/hero-desktop.png` and `hero-mobile.png` and confirm the red box contains the car |
| `product.json` | **awaiting nine answers** — Gate 3 is a person's judgement, not the build's |
| `content-ledger.json` | **pass** — 4 claim-shaped strings harvested, 4 covered, 0 uncovered |

Gate 5 is Alex's verdict and the chain correctly refuses to hand over until the
two human halves above are filled in.
