# Open items

Everything here is blocked on information nobody in this repo has. None of it may
be guessed, and none of it was.

---

## 1 · One landscape frame per composition — the one that matters

**Owner: Alex → Ferrari / Cauley.**

Ferrari's copy promises *"windswept coastal cliffs to alpine summits,
sun-bleached deserts, and forest roads that vanish beneath towering canopies"*.
All ten supplied frames are configurator renders on an empty grey studio floor.
The page is built to survive that — its identity is carried by structure, and the
dependency is declared (C17) — but the gap between what the copy claims and what
the visitor is shown is the page's one real weakness, and no amount of layout
closes it.

**One environment frame per composition** would. It drops into the heritage
chapter as a full-bleed plate without changing anything else.

The rejected alternative, recorded so it is not re-proposed: naming the
campaign's ten American landscapes as a typographic index. That is content
invented to fill a composition (content-provenance CP7) and it would need
Ferrari's own words first.

## 2 · The hero asset

**Owner: Alex → Ferrari.**

The deck's Hero Module points at `https://app.box.com/s/ylfjl4u6jtmfaoz0s4bxivthfjv5uj4i`,
which is not reachable from here.

The cover currently uses `road-mountain-pass-ext` — Cauley's own lead Atelier
composition, so it is a defensible hero rather than a placeholder. The real asset
drops into `.plate--cover` and the composition takes it unchanged, **provided it
is a 16:9 frame whose subject sits inside roughly the same bounding box**. If it
is a different crop or a video, the mask ellipse and the mobile offset both have
to be re-derived from the new frame — see `CLAUDE.md`.

## 3 · The enquiry endpoint

**Owner: Cauley Ferrari / their CRM.**

`#enquiry-form` posts nowhere. `js/page.js` intercepts submit and says so, and
the page carries a visible `SAMPLE FORM — ENDPOINT NOT CONNECTED` line, because a
realistic placeholder is a fabrication with an excuse (CP4).

Wire it before launch and remove the placeholder line — both, together.

## 4 · Retailer details

**Owner: Cauley Ferrari.**

No address, telephone, opening hours or specialist name appears anywhere on the
page, because none was supplied. Nothing was invented to fill the colophon. The
enquiry form is the means of contact and it satisfies the task on its own.

If Cauley wants contact details on the page, they have to come from Cauley.

## 5 · "Explore Purosangue"

**Owner: Cauley Ferrari.**

The deck specifies this secondary CTA and gives no destination. It currently
returns to the collection on this page. Point it at the retailer's real
Purosangue model page when the URL is known.

## 6 · Two human gate checks

**Owner: Alex.**

The delivery chain is complete except for two answers that are a person's to
give, and it correctly refuses Gate 5 until they exist:

- **`hero.json` → `humanConfirmed`.** Open
  `site/.gates/evidence/hero-desktop.png` and `hero-mobile.png` and confirm the
  red box actually contains the car. A declared-but-wrong subject box must not be
  able to produce a pass, which is the whole reason this is not automated.
- **`product.json` → nine answers.** Gate 3 asks whether a person can do the thing
  they came to do. Generic usability is necessary and never sufficient.

Once both are filled, re-run the chain and Gate 5 can be requested — and Gate 5's
handoff is clean screenshots and nothing else: no design read, no rationale, no
list of satisfied requirements. Those arrive only if asked for, and only after
looking.

## 7 · Miller Motorcars and Ferrari Las Vegas

**Owner: Alex, whenever he wants them.**

Not blocked — just not built. The assets for both are already in `assets/web/`,
the markup and stylesheet carry over unchanged, and only the copy and the number
of chapters differ. **Miller has three compositions, not two**, so its entry
sequence needs a third formula rather than a repeat of one of the first two —
two chapters told in opposite orders is authorship; three where the third repeats
the first is a template.
