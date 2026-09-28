# Ferrari 296 GT Modificata — dealer landing page · CONCEPT

**Authored 22 Sep 2026. Direction only — no markup, CSS or scene code in this file.**
The builder executes this; `design-critic` reviews the build against it; Gate 5 is Alex's.

Manifest resolved from `/Users/alex/Desktop/WORK/design_dna/TASTE.md` (canonical Mac
copy — no live clone or symlink exists in this project, so the canonical path won).
Build standard `.claude/rules/design-dna.md` (`DNA1`–`DNA89`) read in full.

---

## 1 · Design Read

**Delivery: BUILD.** The direction was given — FNA's deck, a fixed asset set, a named
placement in a dealer's racing sub-nav, and a stated ambition. Three concepts would be
a way of not doing the work.

```
Reading this as an optional model page inside a Ferrari dealer's racing section, for
existing Ferrari clients and Club Competizioni GT prospects, leaning technical-dossier
(nocturne-industrial).

Mandate: REDESIGN — Ferrari's identity is fixed. Carried through untouched, named
  before anything is designed:
    1. the prancing-horse + OFFICIAL / FERRARI DEALER lockup exactly as the sibling
       retailer sites use it, dealer name in #A6A6A6 uppercase in the position that
       lockup gives it;
    2. self-hosted Ferrari Sans Regular + Medium — the two weights already licensed
       and deployed at _deploy/Ferrari_Purosangue_4/fonts/ — as the only family;
    3. Ferrari's near-black ground;
    4. the nine supplied frames, uncropped on desktop, ungraded — no re-grade, no
       colour push, no added vignette, no generated extension;
    5. the deck's wording verbatim — headlines and body copy are not rewritten;
    6. tracked uppercase as the only display treatment;
    7. the dealer's own header and footer, swapped per retailer;
    8. Ferrari Rosso reserved to the marque lockup and to nothing else.

Style mode: HYBRID — anchor technical-luxury / contrast cinematic-industrial /
  signature none. Unifying principle: the light shows the object and the record
  proves it, and neither is allowed to do the other's job.

Dimensionality: SUPPORT — there is no constructed scene. Depth is the photographs'
  own room, sampled and extended across the page's ground; scroll-linked time opens
  it. The static page is complete without a single frame of motion.
```

**Why technical-luxury is the anchor, named rather than assumed.** The deck's own
logic is fact → consequence → value: *730 cv · 130 cv more than the rules-restricted
296 GT3 Evo · delivered seamlessly and progressively · a top speed of over 300 km/h*.
That is this dialect's governing claim, not a resemblance to it. `auction-editorial`
is compatible and was not chosen: the sibling Purosangue page is a collection of two
records, and this is one object with twenty-two facts — a different content shape, and
running the house dialect again would make the two dealer pages one template.

**Why cinematic-industrial is the contrast, and where it is fenced.** The shoot is a
dark hall, hard overhead key light, controlled fall-off, a wet-lit floor. Light *is*
the argument in these frames. It owns four domains and no more. Its own FALSE VERSIONS
section names the exact failure available here — *"black background, blue-cyan neon rim
light, wet surfaces, a wide tracked uppercase headline… removing the effects leaves no
composition behind"* — and the fence is the anchor: every act that has a number shows
it, and the page's densest mass is a specification sheet.

### CONTROL MAP — dialects mixed by responsibility, never by page section

```
composition / grid        → technical-luxury       orthogonal, measurable asymmetry, one 12-col grid
hierarchy / density       → technical-luxury       rank by position and register; evidence outranks adjectives
typography behaviour      → technical-luxury       one family, three bounded roles, tabular figures
spacing / rhythm          → technical-luxury       fine 4px scale used exactly; calm intervals between dense groups
containers / geometry     → technical-luxury       hairlines only, zero radius, a container marks a system boundary
information presentation  → technical-luxury       the spec sheet and the per-act record as designed objects
image behaviour           → cinematic-industrial   directional hard light, deep shadow with detail, crops that commit
colour / contrast logic   → cinematic-industrial   narrow low-chroma on a sampled dark ground, one accent for state
depth / materiality       → cinematic-industrial   real spatial depth from light and occlusion; no elevation shadows
motion / interaction      → cinematic-industrial   heavy and eased, camera-like, slow, few, deliberate

ANCHOR    technical-luxury      — 6 of 10 domains
CONTRAST  cinematic-industrial  — 4 domains
SIGNATURE none

COLLISION RISK
  technical-luxury runs moderate-to-high ordered density; cinematic-industrial runs
  low density with generous headroom. Unmanaged, the page becomes either a datasheet
  or a mood reel. Managed, it is the page's rhythm: nine lit fields carrying one fact
  each, and one dense evidence sheet near the end. The collision IS the pacing.

REJECTED ALTERNATIVES
  PURE cinematic-industrial — atmosphere without evidence; its own file calls this
    failure by name and C17 is already failing when it happens.
  auction-editorial as anchor — correct for a collection of records; this is one
    object. Reusing it would ship the sibling page's grammar with new pictures.
  immersive-authored-world — MAIN dimensionality with nothing to stage that the
    photographs do not already stage better.
```

---

## 2 · The concept, in one sentence

> **A GT3 race car with the rulebook taken out of it, presented as the technical
> dossier it will never need: one dark hall, one object, opened part by part, every
> claim produced as evidence rather than asserted.**

It can be wrong. It is wrong if the page reads as a brochure, if any act asserts
without producing, or if the room stops being one room.

The sentence comes from the deck, not from taste. Every module is a constraint being
lifted — *"freed from the regulatory constraints that govern its competition
counterpart" · "developed unfettered by the constraints imposed by motorsports or
technical regulations" · "changes to the roll cage made it possible to install a
second seat" · "non-competitive"*. The car is defined by an absence, and the page is
the document that absence makes impossible.

---

## 3 · Hero declaration

### The frame, and the deviation from the deck

FNA assigns `F296GTM_hero_shots_3_4` to the HEADER MODULE. **Deviated, deliberately,
as a three-way rotation in which every frame lands on the module it actually depicts**
(`DNA3` — named with its reason):

| module | deck's frame | this page's frame | why |
|---|---|---|---|
| HEADER | `hero_shots_3_4` | **`F296GTM_hero_shots_front_v11_16_9`** | see below |
| MODULE 1 — the thesis | `details_v06_005` | **`F296GTM_hero_shots_3_4_16_9_v11`** | the thesis is about the whole car; this is the whole car |
| MODULE 4 — aerodynamics | `hero_shots_front` | **`F296GTM_details_v06_005_16_9`** | M4's copy is hood, vents, splitter — this frame is hood, vents, splitter |

**Why the front elevation is the hero, measured not felt.**

1. It is the only frame in the set with a **full-height dark column**: its right 24px
   edge strip means `#010407` (relative luminance **0.0010**, σ(L) **0.008**), and the
   whole right quarter measures max L ≤ 0.10. That is a real text-safe zone inside the
   photograph, and it is where the type goes.
2. It is the only frame whose subject survives a **portrait-ward mobile crop whole**:
   the car spans x 0.270–0.728, so a 5:4 window keeps it centred with symmetric
   margins. Every other exterior loses a wheel or a wing.
3. It is an **elevation** — the first drawing in any technical dossier. It states the
   concept on the first screen.
4. Nobody opens a car page on a front elevation because it is "the boring view". That
   is exactly why it reads as a document rather than an advert, and why it is not the
   Ferrari corporate hero (a macro of the wing lettering) and not the sibling
   Purosangue hero (a three-quarter render dissolved into an ellipse).

### The nine fields

| | |
|---|---|
| **viewport ownership** | owns the full first screen, `100svh` minus the dealer header (excluded chrome). The **scene** is full-screen; the object is not enlarged to reach the edges |
| **scene treatment** | environment — a real lit hall. The page's ground is sampled from the frame's own edge, so the first screen is one room rather than a picture on a page |
| **object scale** | the car occupies **x 0.270–0.728, y 0.208–0.764** of its own frame (45.8% of width, 55.6% of height), taken from the source composition and not changed. At 1440 it renders ~486 × 331 CSS px — about 40% of the hero's height. It is small, and that is the subject: a documented object sitting inside its own air |
| **focal point** | the lit splitter / lower grille cluster, frame **x 0.50, y 0.62** → screen **594, 528** at 1440×900. Brightest, most detailed cluster in the frame, and the feature M4 names |
| **negative-space region** | one continuous reserved region: the frame's right quarter (measured max L ≤ 0.10, no part of the subject inside it) **plus** the page ground continuing to the right gutter. Function: it holds the proposition and the admission record. Bounded left by the subject, below by the CTA route |
| **text safe zone** | reserved before the crop was chosen: screen **x 875 → 1376, y 200 → 749** at 1440×900. Worst composited pixel in it measures L ≤ 0.010 → `#E8EAEC` at **14.1 : 1** |
| **desktop crop** | **none.** The frame is placed uncropped at true 16:9, **1060 × 596 at x 64, y 158** (height 0.72 of the hero). Mass above the optical centre, exhale below: 86 px of hall above the frame, 146 px below |
| **mobile crop** | decided separately, not inherited. **5:4, window x 0.1485–0.8515, y 0.000–1.000**, rendered full-bleed **390 × 312** at 390. Car lands at x 67–321, y 65–238 — margins 67 left / 69 right, symmetric, no tangency. Type does **not** sit in the frame on mobile (the dark column is cropped away); the title block moves onto the page ground below it. A recomposition, not a stack |
| **asset suitability** | yes, and it is the only frame that is suitable on both counts — a measured full-height dark column *and* a subject that survives a portrait-ward crop |

### The governing event, as a system

> **Event statement.** A track-only Ferrari race car stands facing the visitor across a
> dark hall, small in its own air, while the page names it, states in three facts what
> it is and is not, and offers the single route to register interest.

Rectangles at **1440 × 900**, dealer header 72 px excluded. Every one is a rectangle a
builder can draw.

| role | name | x | y | w | h | function |
|---|---|---|---|---|---|---|
| `field` | `.hall` | 0 | 72 | 1440 | 828 | the authored ground: the frame's own hall value, sampled and extended, with a measurable vertical fall-off. **Not a page background** |
| `subject` | `.plate--hero` | 64 | 158 | 1060 | 596 | the object, uncropped, at its source scale |
| `identity` | `.hero__title` | 875 | 200 | 501 | 301 | H1 (3 lines, 60 px) + the deck's subhead |
| `support` | `.hero__record` | 875 | 545 | 501 | 120 | the admission record — 3 rows on hairlines |
| `cta` | `.hero__route` | 875 | 705 | 260 | 44 | the route to register, as a ruled text link |
| `negative-space` | pause, identity → record | 875 | 501 | 501 | 44 | *visual pause inside the event* — bounded above and below by event masses |
| `negative-space` | pause, record → route | 875 | 665 | 501 | 40 | *visual pause inside the event* — bounded above and below by event masses |
| `excluded` | `.dealer-header` | 0 | 0 | 1440 | 72 | persistent chrome — the dealer's own bar is the frame, not the event |

**The type column crosses the frame's right edge at x 1124.** 249 px of it sits over
the photograph, 252 px on the page ground. It is legible on both because the two
grounds measure the same: frame right strip L **0.0010**, hall L **0.0021**, Δ 0.0011 —
imperceptible. **That seam is the page's signature, and it is measured, not hoped.**

**Metrics, computed against `gates/event.mjs`:**

| | desktop 1440×900 | mobile 390×844 |
|---|---|---|
| `eventCoverage` | **1.000** (floor 0.90) | **1.000** |
| `eventCoverage` *excluding the field*, stated so the declaration cannot be accused of being carried by a wrapper | 0.655 | 0.836 |
| `competition` | **0.00** (limit 0.60) — no undeclared mass ≥ 4% of the viewport outside the excluded header | 0.00 |
| rank masses | 4 (min 2) | 4 |
| subject share of event | 53.0% (min 2%) | 39.6% |
| non-media rank / viewport | 17.2% (min 2%) | 35.5% |
| reserved share of event | 3.5% (max 40%) | 5.9% |

**Mobile event, 390 × 844, header 56 px excluded:** field `0,56,390,788` · subject
`0,56,390,312` · identity `20,400,350,196` · support `20,624,350,108` · cta
`20,756,220,48` · reserved `20,596,350,28` and `20,732,350,24`.

**Constraint on the swappable header.** ≤ 96 px at desktop, ≤ 64 px at mobile. A
dealer header taller than that, or carrying a promotional strip, means the hero's
internal geometry is **re-derived, not shrunk**, and a promotional strip becomes a
declared competitor.

---

## 4 · Feeling curve and shot list

Feeling first, what causes it second, shot named (`DNA29`, `DNA27`, `DNA50`). No two
adjacent acts produce the same feeling.

| # | act | feeling | what is on screen | shot |
|---|---|---|---|---|
| 1 | **THE HALL** (header) | stilled, addressed | a car facing you across a dark room with its lights on, small in its own air; the title half inside the picture | **reveal** — position holds, the subject is discovered |
| 2 | **THE MOST EXTREME EVOLUTION OF THE 296 GT3 EVO** (M1) | a claim that sharpens | the whole car in three-quarter, left of the measure; the sentence that says the rules were taken off it, right | **dolly** — the page's one true lateral traverse |
| 3 | **SILENCE** | held breath | the room, and four words at the top of the type scale: `730 HP V6`. Nothing else | **interruption** — the seam is the event |
| 4 | **730 HP V6** (M3) · **THE PEAK** | awe at a thing taken out | the engine alone on the floor, edge to edge, its hairline the width of the screen | **push-in** resolving to **release** |
| 5 | **ENGINEERED FOR EXTREME PERFORMANCE** (M4) | close attention | the splitter and the halftone hood at a distance the eye cannot get in person | **macro** |
| 6 | **BORN FOR TWO** (M5) | unexpected warmth | two seats with red-and-yellow harnesses; then the driver's station. The page's only paired act | **orbit** — two positions around one target |
| 7 | **PERFORMANCE WITH COMPLETE CONFIDENCE** (M6) + **LIMITLESS POSSIBILITIES** (M7) | plain competence | the side elevation, small and flat, with the disc dimensions under it; beside it, the one module with nothing to show | **release** — the camera settles mid-page |
| 8 | **CREATED FOR THE RACETRACK** (M8) | admitted — the sense of being let in | the car from above and behind, MODIFICATA running down the wing; two years, twelve rounds | **reveal** — the subject changes from the object to what it grants access to. Bookends act 1 |
| 9 | **TECHNICAL SPECIFICATIONS** | satisfied scepticism | twenty-two facts, ruled, no prose, no picture | **no camera** — the page's one document |
| 10 | **CLOSE** | settled resolve | the rear three-quarter, the room at its lightest; one thing to do | **release** — the page arrives somewhere and stops |

Two `release` shots, far apart and different in job: act 7 is a rest, act 10 is the
end, and the second is quieter than the first (`C7` — rhythm with variation).

---

## 5 · The peak, and the one signature move

### THE PEAK — act 4, the engine

`F296GTM_motore_ambientato_169_v04` — a bare twin-turbo V6 with its intercoolers and
red cam covers, standing alone on the lit floor of the same hall.

It is the peak because it is the only frame in the set **that is not the car**: the
object has been opened. It carries the deck's hardest facts (730 cv · 244 cv/l · +130
cv over the rules-restricted 296 GT3 Evo), it is the concept's literal image — the
released part, out of the car, under the lights — and it is the moment Ferrari's own
corporate page also chose to make biggest, so it is where beating them counts.

**What it takes, and what is demoted so it can have it:**

- **the asset budget** — the only frame delivered at 2560 px wide; every other frame
  tops out at 1600;
- **the silence in front of it** — act 3, 0.55 vh of hall carrying nothing but four
  words at 60 px. The only screen on the page with no photograph and no paragraph;
- **the scroll room** — 2.2 vh of a 13.6 vh page (16%), against 1.0–1.6 for every
  other act;
- **the page's one disruption** — the only full-bleed frame, and the only frame with
  two hard drawn horizontal edges. Every other frame is inset on the grid;
- **demoted so it stands alone:** act 6 (BORN FOR TWO) is the page's emotional turn and
  is deliberately the *quietest and closest* act rather than a second peak — intimacy,
  not scale, so the two never compete for rank. Act 8 gets the most graphic frame in
  the set and a shorter span.

### THE SIGNATURE MOVE — **"the room is continuous"**

*One move, bespoke to this site, with a static expression and a temporal one.*

**Static.** The page's ground is not a brand colour — it is sampled from the
photographs' own edges, so the page's dark and the pictures' dark are the same dark.
Type is then set **across** the frames' edges: the hero's title column runs half inside
the photograph and half on the page ground, and the seam disappears exactly where the
words are. A ground ladder in three steps, each measured off a frame, carries the page
from its deepest room to its lightest:

| room | value | rel. L | sampled from | acts |
|---|---|---|---|---|
| **A** | `#03080C` | 0.0021 | front elevation, top 24 px strip (σ(L) 0.027) | 1–5 |
| **B** | `#07161B` | 0.0070 | between the engine's and the side elevation's floor values | 6–9 |
| **C** | `#0A2028` | 0.0125 | side elevation, top strip `#08232A` | 10 |

The travel between steps is continuous across the interval between acts — never a cut
(`DNA65`). The fall-off is the design (`cinematic-industrial`), and it means the page
is never evenly dark.

**Temporal.** Each photograph **opens out of that ground**. A 1 px hairline, exactly
the frame's final width, sits on the hall in that frame's own floor-glow colour — the
light leaking out of a closed aperture. On scroll it opens symmetrically about its
centre line to the frame's full height, while the image inside travels
`translateY(+4.5% → 0)` on a **lagged** scrub, so the picture settles *after* the
opening finishes. The frame arrives; the object catches up.

**Why it is not a parameter change to a known device.** The opening is a clip from a
single line whose colour is sampled per frame, so every act opens with a different
light. The two rates make the subject settle last, which is a camera behaviour and not
a transition. And the hairline is the page's own furniture — the same weight as the
running-head rule — so the pictures are born out of the document's grammar.

**Told apart from the other builds, in one line:** the Purosangue page dissolved its
rectangles into an empty page and never moved; this one has hard edges that are *made
in front of you*, on a ground taken from the pictures themselves.

---

## 6 · Page grammar and scroll budget

### Grammar (`DNA36`) — **`technical-dossier`**, a named new one

One continuous room · acts separated by a running head on a hairline, not by banding ·
every photograph an aperture opened into the ground rather than a band laid over it ·
a view caption under each frame in the technical register · a per-act record only
where the deck supplies a number · one dense evidence sheet near the end · no
numbered index rail.

**What it is deliberately not:**

- not the sibling Purosangue page's **chaptered editorial** — banded chapters on a flat
  ground, plate-and-record pairs, elliptical dissolve, zero motion;
- not Ferrari corporate's **alternating full-bleed bands with an overlaid left-set text
  block and a dotted section rail**;
- not a pinned split stage, not a scrollytelling sequence, not a one-shot film.

### Scroll budget (`DNA38`, `DM3`)

**Desktop, 1440 × 900 (1 vh = 900 px):**

| act | vh | px |
|---|---|---|
| 1 · the hall | 1.00 | 900 |
| 2 · the thesis | 1.35 | 1215 |
| 3 · silence | 0.55 | 495 |
| 4 · **the peak** | 2.20 | 1980 |
| 5 · aerodynamics | 1.30 | 1170 |
| 6 · born for two | 1.60 | 1440 |
| 7 · brakes + options | 1.00 | 900 |
| 8 · the programme | 1.40 | 1260 |
| 9 · specification | 1.50 | 1350 |
| 10 · close | 1.10 | 990 |
| **page** | **13.60** | **≈ 12 240** |

Ferrari's corporate page is 15 063 px at 1440. **Ours is ~19% shorter and gives 16% of
itself to one act.**

**Mobile, 390 × 844 (1 vh = 844 px):** 1.00 · 1.55 · 0.45 · 1.70 · 1.40 · 2.00 · 1.15 ·
1.50 · 2.60 · 1.20 = **15.15 vh ≈ 12 790 px**. Fewer devices, not smaller ones.

### Payload and performance budget (`DNA72`, `DNA73`)

- total first-load ≤ **2.6 MB** desktop, ≤ **1.8 MB** at 390;
- **largest single asset ≤ 420 KB** — the peak, at 2560 px;
- responsive `webp` (+ `avif` where it wins) at 1000 / 1600 / 2560 for acts 1, 2, 4, 8,
  10; 800 / 1400 for acts 5, 6, 7. **The 8000 × 4500 PNGs are masters and never ship;**
- **LCP ≤ 1.8 s** on a 4G profile. The LCP element is the hero `<h1>` — HTML text,
  present in the document, at its final size, behind nothing (`DNA74`);
- hero frame `fetchpriority="high"`; every frame below it `loading="lazy"`;
- 60 fps desktop, ≥ 50 fps at 390. Compositor-only properties; the builder verifies the
  aperture runs off the main thread and falls back to a transform pair if it does not.

---

## 7 · Motion plan

**Declared role (`MJ1`):** motion exists to make the room open. That is the one
temporal idea on the page (`MJ2` — one per viewport), and nothing else moves.

**What opens.** Every photographic frame, once, on first entry. Scroll-linked, starting
when the hairline's centre line reaches 82% of viewport height and completing at 52% —
a range of **0.35 vh**.

**What floats.** The image inside the aperture travels `translateY(+4.5% → 0)` across
the same range on a **lagged** scrub (≈ 0.6), so it settles after the opening
completes. Amplitude: 27 px at the hero's 596 px frame, 10 px at mobile's 219 px. Small
and physical — never a slide-in.

**What stays still.** **Everything typographic. No text on this page animates, ever.**
No fade-ups on headlines, no stagger on the record, no reveal on the spec sheet, no
counter climbing to 730. That single rule is what keeps it a document instead of a
showreel, and it is why comprehension never waits on choreography (`MJ7`).

**The peak's variant (`MJ10`, `DNA35` — the device earns its advance).** The engine's
hairline is the **full viewport width**, not the frame width; its range is **0.7 vh**,
twice every other act's; its float amplitude is 6%. Same device, more of it, at the one
place that earns it.

**Reading-zone rule (`DM9`, `DNA81`).** No motion of any kind may run while body copy
is in the reading zone. Operationally: an act's aperture completes before that act's
first paragraph crosses 70% of viewport height. Verified by stopping the scroll at
eight positions (`DNA87`), not by reading the code.

**Reduced motion (`DNA43`, `DNA79`, `DM4`).** `prefers-reduced-motion: reduce` → every
aperture already open, every image at `translateY(0)`, and **the hairline is drawn as a
static 1 px rule along each frame's bottom edge**, so the device leaves a trace instead
of vanishing. The page loses nothing and gains a piece of furniture. An authored still,
not a blank frame.

**Scripts removed (`DNA39`, `MJ5`, `G7`).** The CSS default state is *open*; the
aperture closes only when JS adds `.js-motion`. With JS off the page is the
reduced-motion composition. Nothing exists only after an animation runs.

**Mobile choreography, authored separately (`DNA44`, `DNA70`, `MJ8`, `G5`).** At
≤ 768 px: range shortens to **0.22 vh** (a phone scroll is fast and a long scrub reads
as lag), float amplitude drops to **3%**, and **the lag is removed** — at 219 px tall
the two-rate settle is invisible and only costs frames. The peak keeps its full-width
hairline at **0.4 vh**. Branched with `matchMedia`, replaced rather than scaled.

**Method (`DNA45`).** Lowest sufficient level is a scroll-driven CSS animation for the
opening alone. **GSAP + ScrollTrigger is justified by one thing only:** two scrubs on
one range with independent lag. That must be stated in the build report; if the lag is
ever dropped, the GSAP dependency goes with it.

**Interaction (`DNA41`).** One: the CTA and the two links — 120 ms, opacity plus the
underline's transform. No hover on any image. No parallax. No snap. No pinning. No
scroll-jacking; the user keeps the transport (`MJ6`, `DNA48`).

---

## 8 · Composition Read and Plan

```
COMPOSITION READ
1.  Context        one track-only race car, one coherent nine-frame studio set, a Tier-3
                   deck with module 2 genuinely absent, no price, no landscape, no scene
                   to invent — and photography strong enough to carry the page.
2.  Artistic image a technical dossier, read in the room the photographs were taken in.
3.  Format forces  16:9 frames against a 100svh first screen and a 390-wide phone; a
                   swappable dealer header of unknown height; scroll as sequence.
4.  Major masses   one sampled dark field that runs the whole page · one uncropped
                   elevation · one title mass crossing the elevation's edge · one
                   three-row admission record · one route. Then below: eight lit frames,
                   each with a view caption and, where a number exists, a record; one
                   silent screen; one full-bleed engine; one ruled evidence sheet; one
                   closing frame with a single control.
5.  Centres        SEMANTIC governs — the car in the hall. Made by luminance and
                   isolation: it is the only lit thing in a measured-dark room. The
                   title is a strengthening secondary centre; its rank mass is a quarter
                   of the subject's and it sits inside the subject's own dark quarter.
6.  Dominance      dominant the elevation; subordinate the title; support the record,
                   the route and the view caption; the field is what connects them.
7.  Balance        off-centre and stable: the frame low-left of the measure,
                   counterweighted by a tall narrow type column high-right, closed by
                   the route at the column's foot.
8.  Direction      the car faces the viewer, so the frame has no lateral vector of its
                   own — the eye is handed to the type column by luminance alone, runs
                   title → subhead → record → route, and exits downward. Deliberate:
                   this is the only act on the page with no direction in the picture,
                   and it is why the page's first movement is the visitor's, not the
                   car's.
9.  Rhythm         nothing · read · nothing · nothing · read · browse · read · read ·
                   browse · act. One pause doubled before the peak, by argument.
10. Negative space the hero's held interval between record and route; act 3 entire, which
                   is the page's only empty screen and exists to give the peak its
                   silence; and the bottom-heavy exhale under every act.
11. Tension        a symmetric, frontal, confrontational subject set against a
                   deliberately asymmetric type mass. Resolved by the seam: the type
                   crosses into the picture, so the two masses are one.
12. Spatial depth  none constructed. Depth is the photographs' own room, extended by a
                   sampled ground ladder. One depth idea (DM6).
13. Edges          frames are committed rectangles with drawn edges — except the peak,
                   which is full-bleed, and except where the ground value matches the
                   frame's edge strip within ΔL ≤ 0.004, where the edge simply stops
                   existing. Measured per frame on a 24 px strip, never eyeballed.
14. Unity          every act is the same four ingredients — a frame, a view caption, a
                   headline, a body — at different scales, widths and orders, in one
                   room whose value moves in three measured steps.
15. Typography     one family, three bounded roles plus one register voice. Display as
                   mass, register as texture, figures as a ruled grid.
16. Imagery        the set's internal force is a single session, one light rig, one
                   grade, and a subject always whole inside its frame. The page answers
                   by never cropping on desktop and by changing scale and width instead.
17. Responsive     the hero's two-mass overlap recomposes into a stacked sequence whose
                   frame is re-cropped to 5:4 around the car's own centre; the type
                   leaves the photograph because the dark column is gone.
18. Functional     the visitor is being shown a car they cannot buy, to decide whether
                   to ask about a programme. Means listed in §11.
19. Diagnosis      the opportunity: for once the photography can carry it. The risk: a
                   page that is only lit. The answer is that every act that has a number
                   shows it, and the densest mass on the page is a table.
```

```
COMPOSITION PLAN
Mass scheme            5 on the first screen; 3–4 per act below; 1 at act 3 and act 9.
Primary centre         semantic (the car); secondary centres strengthen, never rival.
Hierarchy mechanism    luminance and isolation first, scale second, ornament never.
Centre of gravity      above the optical middle on the first screen, exhale beneath;
                       above centre in every act.
Static or dynamic      static. The composition must survive a screenshot at any point.
Eye path               subject → title → subhead → record → route → down.
Density distribution   act 9 is the only dense region. Everything else is one fact in air.
Rhythm and intervals   4px scale. Every act: top clamp(4rem,7vw,6.5rem), bottom
                       clamp(6rem,12vw,11rem) — 1:1.55 → 1:1.7, bottom-heavy.
Negative-space         one held interval in the hero; act 3 entire; the exhale under each act.
Tension/counterweight  frontal subject vs. asymmetric type mass, closed by the seam.
Image ↔ typography     type enters a photograph ONLY in a region measured at L ≤ 0.12 and
                       NEVER over the subject. Everywhere else they are neighbours.
Sectional development  hall → thesis → silence → PEAK → macro → pair → spread → programme
                       → evidence → close.
Edge and cropping      nothing cropped on desktop. One full-bleed, at the peak. Mobile
                       crops are authored per frame, listed in §9.
Responsive             stated per format, never inherited.
Functional realisation the means list in §11, verified present in the render.
Measurable commitments no horizontal overflow at 1920/1440/900/390/320 · smallest type
                       ≥ 14 px at both viewports · type-scale ratio ≥ 3.0 desktop ·
                       page ≤ 14 screens · eventCoverage ≥ 0.90 · competition ≤ 0.60 ·
                       every text run ≥ AA on the composited render at every room value.
```

**Asset dependency, declared (`C17`).** The composition depends on the photographs being
**one coherent, dark, single-session studio set with uniform edge strips**. Swap in a
daylight or white-ground frame and the ground ladder and the seam behaviour both break.
Two mitigations, both in the build: the ground for each act is *re-derived* from that
act's own frame, so a replacement frame brings its own room; and the page's identity —
running head, view caption, record, evidence sheet, interval, the ban on animated type —
survives every photograph being ordinary. **This is an authored constraint, not an
operational risk**, and it goes in `declare.json`.

---

## 9 · Section-language ledger

Read **down** the columns. Every change is either carried by the concept or it is drift.

| act | ask | ground | type voice | containers | image treatment | depth | motion | signature device |
|---|---|---|---|---|---|---|---|---|
| 1 · the hall | nothing | room A `#03080C` | display + reading + register | hairlines only | uncropped 16:9, edges merged where measured | photographic | aperture | seam + aperture |
| 2 · thesis | read | room A | same | hairlines only | uncropped 16:9, inset | photographic | aperture | aperture |
| 3 · silence | nothing | room A→B travel | display only | one hairline | — | photographic (empty) | none | — |
| 4 · **peak** | nothing | room A | display + reading + register | two drawn horizontal edges | **full-bleed**, uncropped | photographic | aperture, full-width hairline, 2× range | aperture |
| 5 · aerodynamics | read | room A | same | hairlines only | uncropped 16:9, inset | photographic | aperture | aperture |
| 6 · born for two | browse | room B | same | hairlines only | two frames, all four edges drawn | photographic | aperture ×2 | aperture |
| 7 · brakes + options | read | room B | same, M7 headline one rank down | hairlines only | uncropped 16:9 at 0.62 measure | photographic | aperture | aperture |
| 8 · the programme | read | room B | same | hairlines only | uncropped 16:9, inset | photographic | aperture | aperture |
| 9 · specification | browse | room B | register + figures only | ruled rows, no boxes | **none** | flat | none | the sheet |
| 10 · close | act | room C | same + one filled control | hairlines + one control | uncropped 16:9, inset | photographic | aperture | aperture |

**Reading down.** Type voice never changes — one family, differentiated by case,
tracking, size and ink. Containers are hairlines everywhere and boxes nowhere; zero
radius throughout; one filled control on the whole page, once. Image treatment has
exactly two values by a measured rule (inset-and-uncropped, or full-bleed at the peak),
plus the edge-merge which is a measurement, not a style. Depth is constant. Motion is
constant in kind and varies in amount exactly once, at the peak. Ground moves in three
declared steps and travels continuously between them.

**Reading the `ask` column.** No three identical asks in a row. Acts 3 and 4 are both
`nothing` and that is the page's argument, stated: the silence is part of the peak. Acts
7 and 8 are both `read` and are separated by *kind* rather than by interval — 7 is a
two-sheet spread of unequal rank, 8 is a single wide frame with a record.

---

## 10 · The technical specifications

**What it becomes: THE SHEET — act 9.** The page's one dense mass. Full measure
(1280 px), no photograph, no card, no accordion, no tabs, ground at room B.

**Structure.** The deck's own six groups in the deck's own order — ENGINE ·
TRANSMISSION AND GEARBOX · ELECTRONIC CONTROL SYSTEMS · WEIGHTS AND DIMENSIONS · TIRES ·
BRAKES. Each group is a ruled block:

- **group label** — register voice, 14 px, tracked +0.12em, 62% ink, sitting on a 1 px
  rule at 16% ink running the full column;
- **rows** — label left (register voice, 14 px, 62% ink) · value right (Ferrari Sans
  Medium 18 px, **tabular figures**, 100% ink), right-aligned on a single unit axis
  shared by every row in the column;
- **row hairlines** at 8% ink — lighter than the group rule, so group boundaries read
  before rows do.

**Layout.** Two columns of groups on desktop — ENGINE (6) + TRANSMISSION (2) +
ELECTRONICS (2) = 10 rows left; WEIGHTS (9) + TIRES (2) + BRAKES (2) = 13 rows right.
`DNA9` is satisfied because this genuinely *is* a table and the content is parallel.
Single column on mobile, group order preserved.

**No prose. None.** After nine acts of argument the evidence is produced without
comment; that absence is the statement, and it is `technical-luxury`'s restraint-by-
confidence rather than a gap.

**How `DNA32` — fact → consequence → value — is actually satisfied.** Not by the sheet:
by the acts above it, using the deck's own words, so the sheet is the evidence appendix
to arguments already made. The chain, per act, all verbatim from the deck:

| act | fact (the record) | consequence (deck body) | value (deck body) |
|---|---|---|---|
| 4 · engine | `730 cv (537 kW) @ 7,500 rpm` · `244 cv/l` · `+130 cv vs. the rules-restricted 296 GT3 Evo` | *"power is delivered seamlessly and progressively through a six-speed sequential gearbox with dedicated ratios"* | *"contributing to a top speed of over 300 km/h"* |
| 5 · aerodynamics | **no record — the deck supplies no aero figure** | *"a new front hood maximizes heat dissipation… an all-new slotted front splitter improves underfloor efficiency"* | *"generating additional downforce and enhancing high-speed stability"* |
| 6 · born for two | **no record** | *"changes to the roll cage made it possible to install a second seat, complemented by a dedicated footrest and integrated intercom system"* | *"a shared and more rewarding track experience"* |
| 7 · brakes | `FRONT 400 × 26 mm` · `REAR 332 × 32 mm` | *"improve the braking system's thermal management"* | *"making the car's performance more accessible to drivers with varying levels of track experience"* |
| 8 · the programme | `INCLUDED — 2 YEARS / 12 ROUNDS` | *"access to some of the world's most prestigious circuits"* | *"experience the car across top global circuits with distinct layouts and technical characteristics"* |

**The record appears only where the deck supplies a number.** That rule is what makes
the page honest, and it gives the page its rhythm for free — some acts carry evidence,
some carry only an argument, and the difference is visible.

**Refused, explicitly:** no power-to-weight figure · no mph, lb or inch conversions ·
no 0–100 · no lap time · no price · no production count (the deck says *"produced in
exceptionally limited numbers"* and gives no number, so the page says exactly that and
no more). Units ship as supplied — cv, kW, Nm, rpm, mm, kg, l, km/h.

Note for the record: Ferrari's own deck is internally inconsistent — the headline says
**730 HP**, the body says **730 cv**. Both ship verbatim; neither is harmonised.

---

## 11 · Craft decisions the builder executes

**Typography.** One family (Ferrari Sans Regular + Medium). Four sizes, never more than
three visible at once (`DNA13`):

| role | setting | ratio |
|---|---|---|
| display — module headlines | Medium, uppercase, +0.04em, `clamp(2.25rem, 4.4vw, 3.75rem)` = 36–60 px | — |
| value — record figures | Medium, tabular, 30 px | 60 / 30 = **2.0** |
| reading — body | Regular, sentence case, 18 px / 1.65, measure 62–70ch | 30 / 18 = **1.67** |
| register — running heads, view captions, record keys, spec labels | Regular, uppercase, +0.12em, **14 px** (the floor), 62% ink | one voice, many roles (`I8`) |

Type-scale ratio **3.33** (min 2.5). Adjacent ranks ≥ 1.6× (`DNA7`) ✓.
**One conditional, on a fact the builder measures, not a taste question:** if the
shipped Ferrari Sans `woff2` does not expose `tnum` and its lining figures are not
already monospaced, the spec sheet's unit axis breaks — in that case, and only that
case, **IBM Plex Mono is added for figures only**, never for labels or prose.

**Grid.** One grid: 12 columns, 24 px gutter, max measure 1280 px, page gutters
`clamp(20px, 4vw, 64px)`. Hero frame spans cols 1–9; hero type column spans 8–12 — the
overlap at 8–9 *is* the seam. Body copy never exceeds 6 columns. **Only the peak
bleeds.**

**Colour, derived and measured (`DNA20`, `color I5`).**

| token | value | derivation | contrast |
|---|---|---|---|
| room A / B / C | `#03080C` · `#07161B` · `#0A2028` | sampled from frame edge strips, §5 | — |
| ink | `#E8EAEC` | — | 16.3 : 1 on A, 13.6 : 1 on C |
| register ink | ink at 62% | — | ≥ 5.5 : 1 at every room value |
| **accent** | **`#DFAF00`** | **measured from the livery on `F296GTM_details_v06_005` — 75th percentile of 32 896 livery pixels (mean `#CB9802`)** | 9.5 : 1 on room A; label `#05080A` on it **9.8 : 1** |
| aperture hairline | per act | the brightest 5% of that frame's lower third, luminance lifted to L ≈ 0.085 | ≥ 2.5 : 1, `aria-hidden` |

**The accent is Modena yellow, not Rosso.** Ferrari Rosso is reserved to the marque
lockup. Reason: this page lives in the racing section, where yellow is Ferrari's own
register; the car is yellow-over-silver; and a red control would be the only red on the
page and would fight its subject. **This is a judgment call and it means the two dealer
pages will not match — flagged for Alex to overrule.**

**Focus (`DNA78`).** The yellow control takes a two-part ring: 2 px `#05080A` inside
(9.8 : 1 on the fill) plus 2 px `#E8EAEC` outside (15.7 : 1 on the hall). A single
light ring on yellow measures 1.65 : 1 and fails — do not ship it.

**Spacing.** 4 px scale, no magic numbers. Internal gaps always smaller than external:
frame → view caption 20 px, caption → headline 40 px, headline → body 24 px, act → act
via the declared top/bottom pads. Mobile gutters never below 20 px (`DNA69`).

**Mobile image treatment, authored per frame (`DM10`, `DNA67`).** The hero takes a 5:4
crop (§3). **The peak takes a 4:3 crop, window x 0.089–0.839** — the one measured
disruption spent in the same place as on desktop, so the engine reads as a mass at phone
width. **Every other frame is full-bleed at its native 16:9, uncropped** — these are
documents of an object, and cropping them at 390 would contradict the page's own idea.
Presence on mobile comes from interval and from the continuous room, not from zoom.

**View captions.** One hairline-set line under each frame, register voice: `FRONT
ELEVATION` · `THREE-QUARTER FRONT` · `POWER UNIT` · `FRONT SPLITTER AND HOOD` · `SECOND
SEAT AND HARNESS` · `DRIVING POSITION` · `SIDE ELEVATION` · `REAR THREE-QUARTER,
ELEVATED` · `REAR THREE-QUARTER`. These describe what is visible in the supplied frame
and are recorded in the content ledger with source `describes the supplied frame` —
they are not claims about the product.

**The CTA.** One primary control, once, at the close: **`REGISTER YOUR INTEREST`** (the
deck's own words), fill `#DFAF00`, label `#05080A`, 56 px tall, ≥ 44 px touch. The
**first screen carries the route, not the button** — a ruled text link in the register
voice, anchored to the close — so the means exists above the fold at every width
(`C14`) without a button making a track-only car look like an offer.
**Target: each dealer's existing general Inquire lead-form URL, supplied per build
alongside the header/footer. Not invented. Open item.**

**Positioning guard — nothing may read as an offer of a road car.** No price, no
"configure", no "build yours", no "available now", no finance, no stock language, no
test drive. The first screen's record states what this is **before** it states anything
else: `TRACK USE ONLY` · `CLUB COMPETIZIONI GT` · `PRODUCED IN EXCEPTIONALLY LIMITED
NUMBERS` — each sourced line-by-line to the deck in the content ledger.

**Placement and delivery.** The link lives inside the dealer's racing / Corse Clienti
sub-nav, never the model range; the page's `<title>` and breadcrumb say so. Static
HTML/CSS/JS, no framework, no build step. One stylesheet, three header/footer partials
(Cauley Ferrari · Ferrari of Las Vegas · Ferrari of Greenwich), matching the sibling
build's delivery shape. The dealer header/footer are the **only** per-retailer
difference — no per-retailer imagery, no per-retailer copy (`DNA4`).

**Means the composition may not delete (`C14`), verified present in the render:**
1. the route to register, above the fold at every width;
2. the primary control at the close;
3. the dealer's identity, in the header and again in the footer;
4. the route back to the dealer's racing section;
5. the full specification, readable with no interaction — no accordion, no tabs;
6. every photograph present with no interaction and with JS off.

---

## 12 · Judgment calls

1. **Hero frame swapped from the deck's `3_4` to `hero_shots_front`**, as part of a
   three-way rotation that lands every frame on the module it depicts. Measured reasons
   in §3. **Cost:** FNA's own header choice is overridden and they may push back; the
   3/4 frame is not lost, it becomes the thesis act's image.
2. **`details_v06_005` moved from M1 to M4**, because M4's copy is hood, vents and
   splitter and that frame is hood, vents and splitter.
3. **The accent is the livery yellow, not Ferrari Rosso.** §11. **Cost:** this dealer
   page will not match the Purosangue dealer page's accent. Deliberate, flagged.
4. **One button, at the close; the first screen carries only the route.** **Cost:** a
   conversion-minded reviewer will want the button above the fold. On a car that cannot
   be bought, a button above the fold makes the page read as an offer — which is the
   one thing the client said it must not do.
5. **M7 (Equipment and Options) is ranked one step below every other module**, because
   it is the only module with no evidence in it, and this page ranks by evidence.
   **Cost:** FNA may read it as a demotion of their copy. It is one.
6. **The page uses act names, not the deck's module numbers.** Module 2 is genuinely
   absent from the deck; a visible `01 · 03 · 04` gap would read as a bug. The absence
   is recorded in the build's content ledger and no copy is invented to fill it.
7. **Units ship as supplied (cv / km/h / mm / kg).** A US dealer audience will expect
   mph and lb; converting "over 300 km/h" to "over 186 mph" turns a rounded threshold
   into false precision, and a conversion is a new claim. **Question for FNA, not a
   decision I will make for them.**
8. **An inverted, near-white "printed" specification sheet was designed and killed.** It
   would have been the page's second disruption and the full-bleed peak already spends
   that budget; two disruptions is two art directions. **Cost:** a genuinely striking
   moment, traded for one room. The sheet earns its distinction by density instead.
9. **One family unless the tabular-figure measurement fails**, in which case IBM Plex
   Mono for figures only. §11.
10. **The cockpit frame `296GTM_interni_03`, which the deck assigns to nothing**, is
    used as the second frame of BORN FOR TWO — the page's only paired act. It carries a
    view caption and no invented copy.

---

## 13 · Refused, deliberately

1. **No left-edge dotted section-index rail.** That is Ferrari corporate's device and
   copying it makes this a reskin.
2. **No repeated full-bleed band with a left-set text block dropped on top.** Same page,
   same reason.
3. **No macro-of-the-wing-lettering hero.** Corporate owns it.
4. **No elliptical dissolve plate.** That is the sibling Purosangue page's device
   (`DNA36`, `DNA37`).
5. **No "regulation vs. Modificata" comparison table.** The idea is right and the data
   does not exist. The deck supplies exactly one comparative fact — `+130 cv` — and it
   appears exactly once, at the peak. Inventing a rulebook column would be `CP7`.
6. **No derived figures at all.** No power-to-weight, no unit conversions, no 0–100, no
   lap times, no price, no production count.
7. **No 3D, no WebGL, no configurator, no 360 spin.** The photography is better than
   anything a dealer-side scene would produce, and `DNA49`'s turntable is precisely the
   failure available here.
8. **No scroll-jacking, no snap, no pinned sections.**
9. **No animated type anywhere.**
10. **No counters climbing to 730.**
11. **No ambient motion, no particles, no video loop, no engine audio.**
12. **No stock landscape, no circuit photography, no driver portraits** — nothing
    outside the supplied nine.
13. **No re-grading of the supplied frames.**
14. **No invented dealer contact details and no invented Inquire URL.**
15. **No second CTA, no sticky enquiry bar, no exit-intent anything.**

---

## 14 · Open items — none may be guessed

1. **The Inquire lead-form URL for each of the three dealers.** Blocks delivery.
2. **FNA's acceptance of the hero-frame swap** (§12.1). The page works either way; the
   measured case is in §3.
3. **Units** — metric as supplied, or US conversions signed off by FNA (§12.7).
4. **The dealer racing sub-nav label** — "Corse Clienti", "Racing", or dealer-specific.
5. **Ferrari Sans licence coverage** for this page — the sibling build self-hosts it;
   confirm it extends.
6. **Whether FNA holds any further frames**, particularly anything shot at a circuit.
   The page does not need one; the close would gain from it.

---

## 15 · The first screen, set against the Figma frame (22 Sep 2026)

`hero screen.jpg` — the frame from `AAN-FERRARI-PROJECT-LIB`, node 2765-32798 —
is now the authority for the first screen. Measured off it at 1920×1080 and
reproduced in `css/gtm.css`:

| | frame | built |
| --- | --- | --- |
| picture | full width, pulled up 108px, header over its top | same |
| ceiling spotlights | above the screen, cut | same |
| car, yellow bbox | x 620–1234, y 197–588 | x 620–1233, y 197–567 |
| title | upper case, cap 22px (≈30px), y 730 | cap 23px, y 730 |
| subhead | cap 13px (≈18px) | cap 13px |
| facts | cap 11px (≈15px), #707070 | cap 11px, white at 78% |
| route | cap 12px (≈16px), plain type | **the page's primary control** — ferrari.com's red button, 57px, white label at 16px, on Alex's call |
| block foot | 199px above the fold | 160px — dropped 39px on Alex's call |

**HERO1 re-measured.** The earlier reading of the car as y 0.033–0.527 was
wrong: 0.033 is the ceiling spotlights, not the car. The frame is 1921×1329 and

    car          x 0.306–0.671,  y 0.225–0.572
    spotlights   y 0.038–0.095

Everything in the hero derives from those two lines plus the header's fixed
131px. The rise is 8.1% of the picture's height, cut back on a narrower screen
so the wing keeps 40px of air under the nav band; the 199px of floor under the
words is given up before the picture ever stops filling the width; and the
picture only stops growing on a window wide and short enough that neither would
save the car. Verified at thirteen window sizes, 2560×1440 down to 980×700: no
pillars, the wing clear of the header by 27–124px, the splitter clear of the
title by 39–212px, nothing below the fold.

The block foot is 160px rather than the frame's 199, and the type block is
195px tall rather than 159, because the route is now the button: the two
constants the geometry depends on were re-derived from the rendered block, not
guessed. Re-verified at twelve window sizes — nothing below the fold, 24–160px
of floor under the button, the splitter clear of the title by 40–216px.

**On load**, the first screen opens once: the picture fades up out of a 6%
zoom over 0.9s while it settles over 1.8s, and the four lines follow from 16px
below, a beat apart, from 0.34s. It is held back only while `.js` is set and
is released the moment the picture decodes — and in any case within 1.2s — so
with the script blocked, or with prefers-reduced-motion, the first screen is
simply there.

**Three deliberate departures from the frame**, all named rather than silent:

1. The facts line is white at 78%, not #707070. On the lit floor the frame's
   grey measures 2.4:1 — under AA. Ours measures 4.82:1 at 1920×1080, the worst
   of the twenty runs checked on the composited render.
2. The pinned nav band keeps cauleyferrari.com's 60% black but blurs what
   passes under it. Without that the hero's own words read straight through
   the nav on the way past.
3. The route is a button, not a line of type. The frame sets it as plain
   upper-case text; on Alex's call it is the same red control that closes the
   page — white on #DA291C, 4.8:1, AA at 16px.
