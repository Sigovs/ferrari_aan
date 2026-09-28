# 296 GT Modificata — Figma transfer pack

Everything needed to rebuild the page in `AAN-FERRARI-PROJECT-LIB`, node `12-58`.

## Two routes

**1 · Fastest, no credentials.** Figma plugin **html.to.design** → paste
`https://aan-git.github.io/FERRARI_PROJECTS/296_GT_Modificata/` → import at 1440
and again at 390. It lands as editable layers: text stays text, images come in
as fills. The scroll motion does not travel; the frames arrive in their finished
state, which is what a mockup wants.

**2 · Native, once the Figma connector is authorised for Claude.** The page is
then rebuilt frame by frame with real variables and components rather than an
import: colours and type from `tokens.json`, the nine frames from `assets/`, the
dealer masthead and footer as components.

## What is in here

- `assets/` — the nine supplied frames at 2400px wide, JPEG q88, named by what
  they show. These are FNA's own files, resized only.
- `tokens.json` — colours, type, spacing and layout. Every value is measured
  (ferrari.com or the Brand Book), and each carries the reason in its
  description. Two reds by role: `rosso-fill` for controls, `rosso-type` for red
  text — white on the fill reads 4.87:1, the Brand Book red as 14px type reads
  4.79:1 on black, and swapping them fails AA in both directions.

## The page, screen by screen (desktop 1440)

| # | screen | height | picture | type |
|---|---|---|---|---|
| 1 | Hall | 100svh | `01-front-elevation`, crop right | title low-right, subhead, one-line record, ruled link |
| 2 | The evolution | 92svh | `02-three-quarter-front`, crop 25% | headline top-left |
| — | band | auto | — | marker `1`, argument, 62ch |
| 3 | Silence | 62svh | none | `730 HP V6` alone |
| 4 | The power unit — **peak** | 118svh | `03-power-unit`, crop right | headline top-right, largest on the page |
| — | band | auto | — | marker `2`, record plate + argument |
| 5 | Aerodynamics | 92svh | `04-splitter-and-hood` | headline top-left |
| — | band | auto | — | marker `3`, argument |
| 6 | The cabin | 92svh | `05-second-seat` | headline top-left |
| 7 | Driving position | 84svh | `06-driving-position`, crop right | one line, top-right |
| — | band | auto | — | marker `4`, argument |
| 8 | Braking | 92svh | `07-side-elevation` | headline top-left |
| — | band | auto | — | marker `5`, record plate + argument + options |
| 9 | The programme | 92svh | `08-rear-three-quarter-elevated`, crop right | headline top-right |
| — | band | auto | — | marker `6`, record plate + argument |
| — | Specification | auto | none | marker `7`, two columns, 22 rows |
| 10 | Close | picture 62svh, then black | `09-rear-three-quarter` | dealer name, model name, paragraph, red control |

**The rule behind the left/right alternation:** it is not decorative. For each
frame the 99.5th-percentile luminance of the region the words occupy was
measured, and the type stands on whichever side is dark. Under the words sits a
pool of shadow the width of the column, gone by mid-frame — there is no wash
across the picture.

**Verified on the render:** 14 text runs, none below AA, minimum 4.87:1.
