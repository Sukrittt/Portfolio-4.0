# Portfolio 4.0

Single-page developer portfolio for Sukrit Saha — an "Awwwards minimal" redesign: light warm-off-white theme, big grotesk typography, custom cursor, magnetic links, scroll-triggered reveals, inertia scrolling, film-grain overlay, and an animated intro preloader.

## Stack

- **Vite 5 + React 18** SPA
- No CSS framework, no animation library, no router, no state library
- All styling is plain CSS (`src/index.css` tokens + `src/App.css`)
- Every interaction is a hand-rolled vanilla-JS hook driven by `requestAnimationFrame` and inline style transitions

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start Vite dev server
npm run build   # production build → dist/
npm run preview # preview the production build
```

There is no test runner, linter, or type checker configured — verification is manual (run `npm run dev`, exercise the page).

## Project structure

```
src/
  data/projects.js    # single source of truth for all site content
  hooks/              # global interaction hooks (custom cursor, inertia scroll, magnetic, reveals, hero word cycle)
  components/         # Preloader, Nav, Hero, Work (+ ProjectRow), About, Contact, Footer, Cursor, Grain
  App.jsx             # flat composition of all sections; owns global interaction state
  index.css           # design tokens (OKLCH palette, type)
  App.css             # all component styling
public/
  projects/           # project screenshots + case-study videos
  grain.png           # film-grain noise tile
  resume.pdf          # linked from Contact
design_handoff_portfolio/   # design spec + self-contained HTML prototype (not shipped)
```

## Key conventions

- **Content lives in `src/data/projects.js`** — project rows, tagline words, and toolkit lists. Editing that file is enough; counts (e.g. `(NN) SELECTED WORK`) derive from the data, never hardcoded.
- **Interactions are DOM-scanning hooks.** At mount they `querySelectorAll` elements carrying specific data attributes (`data-magnetic`, `data-cursor`, `data-reveal-id`), so any new interactive element must include the matching attribute to get the behavior for free.
- **Inertia scroll is the only sanctioned scroll.** Use `scrollToId(id)` from `useInertiaScroll` to jump to a section — never `scrollIntoView`. The wheel hijack uses `{ passive: false }`, so new scroll containers will fight it unless accounted for.
- **Motion is inline styles + CSS transitions.** Recurring easings: `cubic-bezier(.16,1,.3,1)` (reveals/entrances), `cubic-bezier(.76,0,.24,1)` (preloader slide-up), `cubic-bezier(.65,0,.35,1)` (panel expand, link underline).
- **Touch devices get fallbacks.** `useIsTouch` (`matchMedia('(pointer: coarse)')`) disables the custom cursor, inertia scroll, and other gimmicks on touch — keep those fallbacks intact.

## Design tokens

Defined in OKLCH in `src/index.css`:

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `oklch(98% 0.004 90)` | warm off-white background |
| `--text` | `oklch(20% 0.006 90)` | near-black warm text |
| `--muted` | `oklch(52% 0.006 90)` | secondary text |
| `--line` | `oklch(90% 0.004 90)` | hairlines |
| `--wash` | — | hover tint |
| `--accent` | — | moss green |

Typography: **Bricolage Grotesque** (display/headings, 400–800) + **Instrument Sans** (body/labels), loaded from Google Fonts in `index.html`. Layout is fluid — `clamp()` everywhere, flex-wrap, no fixed breakpoints.

## License

© Sukrit Saha. All rights reserved.
