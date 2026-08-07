# Handoff: Sukrit Saha Portfolio (Awwwards-minimal redesign)

## Overview
A single-page developer portfolio redesign in the "Awwwards minimal" style: light theme, big grotesk typography, custom cursor, magnetic links, scroll-triggered reveals, inertia scrolling, film-grain overlay, and an animated intro. Sections: Hero, Selected Work (9 projects with expandable case-study detail), About, Contact, Footer.

## About the Design Files
The bundled file (`Portfolio.dc.html`) is a **design reference built in HTML** — a working prototype showing the intended look, motion, and interaction behavior. It is not production code to paste into the target app. The task is to **recreate this design in the target codebase's existing framework** (React, Vue, Next.js, plain HTML/CSS/JS, etc.) using its established patterns and libraries — or, if this is a fresh build, Next.js + plain CSS/vanilla JS (or Framer Motion for the motion pieces) is a natural fit given the interactions involved.

You can open `Portfolio.dc.html` directly in a browser to see/interact with the live prototype (all effects run client-side, no build step needed).

## Fidelity
**High-fidelity.** Colors, type, spacing, and interaction timings below are final — recreate pixel-for-pixel and match the motion curves/durations as closely as the target stack allows.

## Design Tokens

**Colors** (all defined in OKLCH; convert to hex if the target stack needs it):
- `--bg`: `oklch(98% 0.004 90)` — warm off-white background
- `--text`: `oklch(20% 0.006 90)` — near-black warm text
- `--muted`: `oklch(52% 0.006 90)` — secondary text
- `--line`: `oklch(90% 0.004 90)` — hairline borders/dividers
- `--wash`: `oklch(96% 0.004 90)` — hover-state background wash
- `--accent`: `oklch(56% 0.1 145)` — single moss-green accent (links on hover, tags, availability dot, dynamic hero word)

**Typography:**
- Display font: **Bricolage Grotesque** (Google Fonts, variable, weights 400–800) — used for the hero headline, project titles, section-level statement text
- Body font: **Instrument Sans** (Google Fonts, weights 400/500/600) — used for everything else (nav, body copy, tags, meta labels)
- Hero headline: `clamp(2.6rem, 8.4vw, 6.4rem)`, weight 600, line-height 0.98, letter-spacing -0.02em
- Project row titles: `clamp(1.7rem, 4vw, 2.9rem)`, weight 500
- About statement: `clamp(1.5rem, 3.4vw, 2.4rem)`, weight 500, line-height 1.35
- Body copy: `clamp(15px, 1.6vw, 17px)`, line-height 1.55
- Overline labels (section markers like "(09) SELECTED WORK"): 12–14px, weight 600, letter-spacing 0.1em, uppercase-style tracking (text itself is typed uppercase)
- Nav/meta labels: 13px, weight 500

**Spacing:** fluid throughout via `clamp()` — section vertical padding `clamp(80px, 10vw, 140px)`, section horizontal padding `clamp(20px, 5vw, 56px)`. No fixed breakpoints; layout is fluid/responsive by design (flex-wrap + clamp, not media queries).

**Borders/dividers:** 1px solid `--line` hairlines between rows and above/below sections. No shadows, no border-radius on cards (the design avoids "rounded card + shadow" treatments) — only small circular elements (cursor ring, expand toggle, availability dot) use `border-radius: 50%`.

## Screens / Sections
This is a single scrolling page, not multiple screens. Sections in order:

### 1. Preloader (page-load intro)
- Full-screen fixed overlay, `--bg` background, centered "SS" in Bricolage Grotesque 700, `clamp(2rem,7vw,3.5rem)`.
- On mount: after 650ms, overlay slides up (`translateY(-100%)`) over 800ms with easing `cubic-bezier(.76,0,.24,1)`, and the "SS" text opacity fades to 0 over 500ms simultaneously.
- Once the transform finishes, `pointer-events: none` on the overlay so it never blocks input again.

### 2. Nav (fixed header)
- Fixed top, full width, `background: oklch(98% 0.004 90 / 0.72)`, `backdrop-filter: blur(10px)`, 1px bottom hairline at 60% opacity — sits above scrolling content without being fully opaque.
- Left: wordmark "SUKRIT SAHA", 13px, weight 600, letter-spacing 0.06em.
- Right: three nav links — Work / About / Contact — 13px weight 500, each with the magnetic-hover behavior (see Interactions) and smooth-scroll-to-section on click (never native `scrollIntoView` — see below).

### 3. Hero
- Full `min-height: 100vh`, centered vertically, left-aligned content.
- Eyebrow line: "SOFTWARE ENGINEER — BENGALURU, INDIA", 11–13px, letter-spacing 0.14em, `--muted`.
- Headline, 3 lines forming one sentence, each line individually revealed on load (staggered — see Interactions):
  1. "Sukrit Saha"
  2. "builds interactive"
  3. "products with **{word}**." — the bolded word is a live, ever-changing span (see "Dynamic hero word" below), accent-colored, with a 3px dashed accent underline.
- Subtext paragraph, max-width 460px, `--muted`: "Currently building at Sumeru Inc. Selected work below."
- Availability row: small accent dot + "Available for select freelance work" in `--muted`, 13px.
- Bottom-left scroll cue: "SCROLL" (11px, letter-spacing 0.16em, `--muted`) + a small "↓" glyph bouncing via a `translateY(0/8px)` keyframe loop, 1.8s ease-in-out infinite.

**Dynamic hero word:** cycles automatically through `["Claude Code", "agentic workflows", "structured guesswork", "trial & error", "good vibes"]` every 2.6s. Each change: fade+slide out (opacity 0, translateY 10px, 220ms), swap text, fade+slide in. Hovering the word **pauses** the auto-cycle (resumes on mouse-leave) — hover does not itself trigger the next word; it just lets the visitor read the current one.

### 4. Selected Work
- Section header row: overline "(09) SELECTED WORK" left, "2023 — 2026" right, `--muted`, 1px hairline below, revealed on scroll into view.
- 9 project rows, each a horizontal flex row: `index (2-digit, e.g. "01")` — `title (Bricolage, clamp(1.7rem,4vw,2.9rem), weight 500)` — spacer — a small circular "+" toggle (28px circle, 1px border) that rotates 45° into an "×" when the row is expanded.
- Row hover: background tints to `--wash`, left padding grows from 0 to 14px, title color shifts to `--accent` — all over ~350ms ease.
- Click anywhere on the row: toggles an expand panel below it (`max-height` 0→480px + opacity 0→1, `cubic-bezier(.65,0,.35,1)` 500ms) containing: a short meta line (accent color, e.g. "Next.js · TypeScript · tRPC · Full-stack"), a 1–2 sentence blurb, a row of pill-shaped tag chips (1px border, 100px radius, 12px text), and — when the project has a link — a "Code ↗" (or custom label) link.
- Rows fade/slide up into view on scroll (IntersectionObserver, threshold 0.15), staggered ~40ms apart, each observed once then unobserved.
- **Cursor-following preview swatch**: while hovering any row, a small floating box (220×150px, 1px border, diagonal-stripe placeholder pattern, monospace caption "PROJECT SHOT — {TITLE}") follows the cursor with a fixed +26px/+26px offset, fading/scaling in (opacity 0→1, scale 0.85→1). This is a **placeholder** — swap the striped pattern for real project screenshots/video in production.

Project list (title — one-line meta — short blurb — tags):
1. **Agent-Native Workflows** — Claude Code · Agent orchestration · Ongoing — "Prototyping full-stack products end to end with Claude Code — spec to shipped feature, with fallbacks and validation layered in before it ships." — tags: Claude Code, Agent orchestration, LLM integration — link labelled "Explore ↗" → github.com/Sukrittt
2. **Claspr** — Next.js · TypeScript · tRPC · Full-stack — "An all-in-one classroom platform — assignments, notes, and discussions in one place. Built solo, end to end." — tags: Next.js, TypeScript, tRPC, PostgreSQL — Code ↗ → github.com/Sukrittt/claspr
3. **Limetta** — Next.js · Personal finance · 57 GitHub stars — "Expense tracking with multiple accounts, transfers, and dues — built to replace three finance apps with one." — tags: Next.js, TypeScript, Tailwind — Code ↗ → github.com/Sukrittt/Limetta
4. **Otaku-Sphere** — Next.js 13 · Community platform — "An open-source hub for anime fans — watchlists, leaderboards, and polls, wrapped in a community layer." — tags: Next.js, TypeScript, Community — Code ↗ → github.com/Sukrittt/Otaku-Sphere
5. **Polymer Bazaar** — Dashboard · B2B · Client work — "A price-index dashboard for the polymer trade — market data made legible for procurement teams." — tags: Dashboard, Data viz, Client work — no public link
6. **Typournament** — TypeScript · Competitive typing — "Head-to-head typing tournaments for speed typists — brackets, live WPM, and leaderboards." — tags: TypeScript, Real-time — Code ↗ → github.com/Sukrittt/typournament
7. **Mini-Portfolio** — Bento grid · Built in 3 hours — "A playful bento-grid portfolio, animated top to bottom — a speed-run in interaction design." — tags: React, Motion — Code ↗ → github.com/Sukrittt/Mini-Portfolio
8. **Spotify Clone** — UI clone · Micro-interactions — "A pixel-close rebuild of Spotify's player — an exercise in motion, state, and audio UI." — tags: React, Web Audio — Code ↗ → github.com/Sukrittt
9. **Twitter Clone** — UI clone · Feed & timeline — "A timeline-and-thread rebuild — infinite scroll, optimistic updates, the works." — tags: React, Realtime — Code ↗ → github.com/Sukrittt

### 5. About
- Overline "(02) ABOUT", revealed on scroll (fade+slide up, single block).
- Statement paragraph (Bricolage 500, `clamp(1.5rem,3.4vw,2.4rem)`, max-width 840px): "I'm a frontend engineer from India, currently building at Sumeru Inc. I care about interfaces that feel instant — considered motion, no wasted clicks, code that ships. Lately most of that shipping happens with Claude Code — prototyping fast with agentic tooling, then layering in the fallbacks and validation that make it production-ready."
- Below a hairline: a 3-column responsive grid (`auto-fit, minmax(200px,1fr)`) of toolkit categories:
  - **INTERFACE**: React, Next.js, TypeScript, Tailwind
  - **BACKEND**: Node.js, APIs, Workflow logic
  - **AI LAYER**: Claude Code, LLM integration, Agent orchestration

### 6. Contact
- Overline "(03) CONTACT", revealed on scroll.
- Giant mailto link: "sukritsaha27@gmail.com" (Bricolage 600, `clamp(2rem,6.5vw,4.6rem)`) with an animated underline — a 2px accent-colored bottom bar that grows from 0% to 100% width on hover (`background-size` trick, 400ms `cubic-bezier(.65,0,.35,1)`), magnetic on hover, `mailto:...?subject=Hey%20Sukrit`.
- Secondary link row (14px, weight 500, all magnetic): "Résumé ↓" (→ `resume.pdf`, placeholder path — needs a real file), "GitHub ↗", "LinkedIn ↗", "X / Twitter ↗".

### 7. Footer
- Hairline top border, flex row: "© 2026 Sukrit Saha" (muted, 12px) left, "Back to top ↑" (magnetic, smooth-scrolls to hero) right.

## Interactions & Behavior

**Custom cursor** (desktop/mouse only — disabled entirely on touch/coarse-pointer devices via `matchMedia('(pointer: coarse)')`, native cursor shows instead):
- A small 6px solid dot follows the raw mouse position 1:1 (no easing) via direct transform updates.
- A 44px circular outline ring trails the mouse with easing (lerp factor 0.18 per frame, via `requestAnimationFrame`).
- Hovering any element with a cursor-label data attribute scales the ring up (1.6× for plain interactive elements, 2.4× when it carries hover copy) and shows short label text centered in the ring (e.g. "VIEW" on project rows, "SAY HI" on the contact mailto link). Plain magnetic links (nav, footer, socials) scale the ring without label text.

**Magnetic links/buttons:** on mousemove within their bounding box, the element translates toward the cursor at 35% of the offset; resets to `translate(0,0)` on mouse-leave. Applied to: nav links, all contact/footer links, code/explore links inside expanded project panels, back-to-top.

**Inertia/smooth scroll:** wheel events are intercepted (`preventDefault`) and accumulated into a scroll target; a continuous rAF loop lerps the real scroll position toward that target (factor 0.14/frame) for a smooth, slightly-trailing scroll feel. Native scroll (keyboard, scrollbar drag, touch) is respected — a `scroll` listener re-anchors the target to the live position whenever the scroll wasn't driven by the lerp loop itself, so nothing fights the user. On touch devices the wheel hijack is skipped entirely; native scrolling is untouched. Nav/footer anchor clicks scroll smoothly via the same lerp target (never `element.scrollIntoView`).

**Scroll-triggered reveals:** section headers, the About block, and the Contact block fade up (`opacity 0→1`, `translateY(28px→0)`, 800ms `cubic-bezier(.16,1,.3,1)`) via `IntersectionObserver` (threshold 0.15, fires once). Project rows use the same mechanic individually, staggered by index (~40ms apart).

**Grain overlay:** a fixed, full-viewport, `pointer-events:none` layer at 40% opacity, tiling a 200×200px generated noise PNG, drifting continuously in one direction only (`background-position: 0 → -200px` horizontally, linear, 55s loop, seamless because the shift equals the tile size).

## State Management
Minimal local component state (no global store needed):
- `loaded: boolean` — flips true 650ms after mount, drives the preloader exit + hero stagger-in
- `expandedIndex: number | null` — which project row's case-study panel is open (accordion — one at a time)
- `hoverIndex: number | null` — which project row is hovered (drives row tint + the floating preview swatch content)
- `cursorLabel: string | null` — current custom-cursor label text, set via a delegated `mouseover` listener checking `closest('[data-cursor]')`
- `revealedIds: Set<string>` — ids of scroll-revealed elements already animated in
- `wordIndex: number`, `wordPhase: 'in' | 'out'` — drives the auto-cycling hero word

## Assets
- `assets/grain.png` — a 200×200px generated black/white noise texture with randomized per-pixel alpha (0–60), used for the film-grain overlay. Regenerate at higher res if a crisper grain is wanted.
- No other imagery — project "screenshots" are intentionally left as striped placeholders (diagonal 1px line pattern + monospace caption) pending real screenshots/video from the developer/user.
- `resume.pdf` is referenced but not included — add the real file at that path (or point the link elsewhere).

## Files
- `Portfolio.dc.html` — the full design reference (structure, styles, and all interaction logic in one file; open directly in a browser to try it live).
- `assets/grain.png` — grain texture asset referenced by the file above.
