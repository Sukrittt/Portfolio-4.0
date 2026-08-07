# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page developer portfolio for Sukrit Saha (sukritsaha27@gmail.com), built as an "Awwwards minimal" design: light warm-off-white theme, big grotesk typography, custom cursor, magnetic links, scroll-triggered reveals, inertia scrolling, film-grain overlay, and an animated intro preloader.

Stack: **Vite 5 + React 18 SPA**. No CSS framework, no animation library, no router, no state library — all styling is plain CSS (`index.css` tokens + `App.css`), and every interaction is a hand-rolled vanilla-JS hook driven by `requestAnimationFrame` and inline style transitions.

The full design spec lives in `design_handoff_portfolio/README.md` (plus a self-contained reference prototype at `design_handoff_portfolio/Portfolio.dc.html` you can open in a browser). That README is the authority on intended look/motion; the code is a high-fidelity implementation of it. Note the README's project list is slightly stale — the live source of truth for content is `src/data/projects.js`.

## Commands

```bash
npm install        # install deps
npm run dev        # start Vite dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

There is no test runner, no linter, and no type checking configured. Verification is manual (run `npm run dev`, exercise the page). The repo has Playwright MCP available for browser-based checks — the project's `.claude/settings.local.json` already allows its navigate/wait_for/find tools.

## Architecture

### Data layer (`src/data/projects.js`)
Single source of truth for all site content:
- `PROJECTS` — array of project objects rendered as expandable rows. Each entry: `title`, `meta` (one-line summary), `blurb`, `tags` (pill chips), `code`/`codeLabel` (link, `null` if none), and `media` (`{ type: 'image'|'video'|'placeholder', src, fit? }`). The Work section header count and the preview swatch both derive from this array.
- `TAGLINE_WORDS` — words cycled in the hero headline.
- `TOOLKIT` — categorized skill lists shown in About.

### Component tree (`src/App.jsx`)
App is a single flat composition of section components: `Preloader`, `Nav`, `Hero`, `Work` (+ `ProjectRow`), `About`, `Contact`, `Footer`. There is no routing — it's one scrollable page. Components are props-in/style-out: App owns all global interaction state and passes it down.

### Global interaction hooks (`src/hooks/`) — mounted once in App
These are the heart of the "feels alive" design and are **DOM-scanning**: at effect time they `querySelectorAll` elements carrying specific data attributes, so any new interactive element must include the matching attribute to get behavior for free:

- `useIsTouch` — memoized `matchMedia('(pointer: coarse)')`. Every gimmick hook takes `isTouch` and fully disables itself on touch devices (native cursor, native scroll restored).
- `useCustomCursor` — dot tracks mouse 1:1; ring trails with lerp (0.18/frame). Returns `dotRef`/`ringRef` (attached to `Cursor`), `previewRef` (attached to the floating project preview swatch in `Work`), and `cursorLabel` state. Reads labels via delegated `mouseover` on `closest('[data-cursor]')`. Elements can set `data-cursor="VIEW"` (ring scales 2.4× + shows label) or `data-cursor=""` (ring scales 1.6×, no label).
- `useInertiaScroll` — hijacks wheel (`preventDefault`) and lerps `window.scrollTo` toward an accumulated target (0.14/frame); a `scroll` listener re-anchors whenever the scroll wasn't driven by the loop so native scroll/touch never fights it. Returns `scrollToId(id)` — this is the ONLY sanctioned way to scroll to a section (nav/footer/back-to-top); never `scrollIntoView`.
- `useMagnetic` — any element with `data-magnetic="true"` translates 35% toward the cursor on hover.
- `useScrollReveal` — IntersectionObserver (threshold 0.15, fires once, then unobserves) over all `[data-reveal-id]` elements; stores revealed ids in a `Set`. Returns `reveal(id, delay)` helper producing inline styles (opacity + translateY) and `revealedIds`.
- `useHeroWord` — cycles `TAGLINE_WORDS` every 2.6s with fade/slide in-out; hover pauses (`pauseWord`/`resumeWord`). Returned `word`/`wordPhase` drive the hero's animated span.

### Interaction conventions (contracts to respect)
- Motion is **inline styles + CSS transitions**, never an animation library. Recurring easings: `cubic-bezier(.16,1,.3,1)` (reveals/entrances, ~0.7–0.9s), `cubic-bezier(.76,0,.24,1)` (preloader slide-up), `cubic-bezier(.65,0,.35,1)` (panel expand, link underline).
- Rows in `Work` manage their own `expandedIndex`/`hoverIndex` state; expansion is an accordion (one panel at a time) using `max-height` 0→480px.
- Reveal timing is duplicated in transition-delay strings (e.g. hero lines stagger `0.15 + i * 0.09`); ProjectRow staggers by `index * 0.04`. Changing a curve/timing means editing the inline style in the component.

### Design tokens (`src/index.css`)
`:root` defines the full palette in OKLCH: `--bg` (warm off-white), `--text`, `--muted`, `--line` (hairlines), `--wash` (hover tint), `--accent` (moss green). All other styling lives in `App.css`. Typography: Bricolage Grotesque (display/headings, weights 400–800) + Instrument Sans (body/labels), loaded from Google Fonts in `index.html`. Layout is fluid — `clamp()` everywhere, flex-wrap, no fixed breakpoints/media queries.

## Assets

- `public/projects/` — project screenshots (PNG/WebP) and case-study videos (MP4), referenced via `/projects/...` by `PROJECTS[].media.src`.
- `public/grain.png` — 200×200 noise tile for the fixed grain overlay.
- `public/resume.pdf` — linked from Contact; must exist for the Résumé link to work.
- `dist/` — build output, gitignored.
- `design_handoff_portfolio/` — the design spec + reference prototype (see above); not shipped.

## Gotchas

- `useMagnetic` binds at effect time (mount). Elements added to the DOM after App mounts will not be magnetic; static content is fine today.
- The hero's animated word span is inside the third headline line; `wordPhase === 'out'` drives both the fade and the 220ms swap in `useHeroWord` — if you add words to `TAGLINE_WORDS`, no other code changes.
- Project row count, the `(NN) SELECTED WORK` overline, and the preview swatch all derive from `PROJECTS.length`/data — editing the array is enough; don't hardcode counts.
- The custom cursor is `display:none`-style skipped on touch via `{cursor: isTouch ? 'auto' : 'none'}` on the app root — keep touch fallbacks intact when touching cursor code.
- Inertia scroll intercepts `wheel` with `{ passive: false }` — if you add new scroll containers, they'll fight the hijack unless accounted for.
