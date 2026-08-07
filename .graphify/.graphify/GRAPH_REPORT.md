# Graph Report - .  (2026-08-07)

## Corpus Check
- 37 files · ~51,279 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 75 nodes · 94 edges · 25 communities detected
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 9 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output
- Edge kinds: contains: 27 · imports: 19 · imports_from: 19 · implements: 11 · uses: 6 · depends_on: 3 · created_by: 2 · follows: 2 · references: 2 · calls: 1 · describes: 1 · showcases: 1


## Input Scope
- Requested: all
- Resolved: all (source: configured-default)
- Included files: 37 · Candidates: recursive
- Excluded: 0 untracked · 0 ignored · 0 sensitive · 0 missing committed

## Graph Freshness
- Built from Git commit: `35a4fe5`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `Sukrit Saha Portfolio` - 16 edges
2. `Magnetic links` - 5 edges
3. `Work section` - 4 edges
4. `Sukrit Saha` - 4 edges
5. `Hero()` - 3 edges
6. `Custom cursor system` - 3 edges
7. `React 18 SPA` - 3 edges
8. `ProjectRow component` - 3 edges
9. `useIsTouch hook` - 3 edges
10. `About()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Sukrit Saha Portfolio` --implements--> `Inertia scrolling`  [EXTRACTED]
  CLAUDE.md → src/hooks/useInertiaScroll.js
- `Sukrit Saha Portfolio` --references--> `Projects data`  [EXTRACTED]
  CLAUDE.md → src/data/projects.js
- `Sukrit Saha Portfolio` --implements--> `Scroll-triggered reveals`  [EXTRACTED]
  CLAUDE.md → src/hooks/useScrollReveal.js
- `Agent-Native Workflows` --created_by--> `Sukrit Saha`  [INFERRED]
  src/data/projects.js → CLAUDE.md
- `Claspr` --created_by--> `Sukrit Saha`  [INFERRED]
  src/data/projects.js → CLAUDE.md

## Hyperedges (group relationships)
- **Interaction system** — custom_cursor, inertia_scroll, magnetic_links, scroll_reveal, hero_word_cycle [INFERRED 0.90]
- **Page layout** — preloader, nav_component, hero_section, work_section, about_section, contact_section, footer_component, grain_overlay [EXTRACTED 1.00]
- **Touch device fallback** — custom_cursor, inertia_scroll, magnetic_links [EXTRACTED 1.00]

## Communities

### Community 0 - "Community 0"
Cohesion: 0.23
Nodes (7): About(), ProjectRow(), Work(), PROJECTS, TAGLINE_WORDS, TOOLKIT, useHeroWord()

### Community 1 - "Community 1"
Cohesion: 0.36
Nodes (3): Contact(), Cursor(), Footer()

### Community 2 - "Community 2"
Cohesion: 0.40
Nodes (6): Awwwards minimal design, Hero section, Dynamic hero word, Sukrit Saha Portfolio, Typography system, Vite 5 build system

### Community 3 - "Community 3"
Cohesion: 0.40
Nodes (5): Contact section, Magnetic links, Navigation component, ProjectRow component, Scroll-triggered reveals

### Community 4 - "Community 4"
Cohesion: 0.40
Nodes (5): Custom cursor system, Inertia scrolling, Projects data, useIsTouch hook, Work section

### Community 5 - "Community 5"
Cohesion: 0.50
Nodes (4): About section, Agent-Native Workflows, Claspr, Sukrit Saha

### Community 6 - "Community 6"
Cohesion: 0.67
Nodes (3): Hero(), HERO_LINES, metaStyle()

### Community 7 - "Community 7"
Cohesion: 0.67
Nodes (3): Interaction design philosophy, React 18 SPA, Stack philosophy

### Community 8 - "Community 8"
Cohesion: 1.00
Nodes (1): Grain()

### Community 9 - "Community 9"
Cohesion: 1.00
Nodes (1): Nav()

### Community 10 - "Community 10"
Cohesion: 1.00
Nodes (1): Preloader()

### Community 11 - "Community 11"
Cohesion: 1.00
Nodes (2): OKLCH design tokens, Preloader component

### Community 12 - "Community 12"
Cohesion: 1.00
Nodes (1): useCustomCursor()

### Community 13 - "Community 13"
Cohesion: 1.00
Nodes (1): useInertiaScroll()

### Community 14 - "Community 14"
Cohesion: 1.00
Nodes (1): useIsTouch()

### Community 15 - "Community 15"
Cohesion: 1.00
Nodes (1): useMagnetic()

### Community 16 - "Community 16"
Cohesion: 1.00
Nodes (1): useScrollReveal()

### Community 17 - "Community 17"
Cohesion: 1.00
Nodes (1): Footer component

### Community 18 - "Community 18"
Cohesion: 1.00
Nodes (1): Grain overlay

### Community 19 - "Community 19"
Cohesion: 1.00
Nodes (1): Limetta

### Community 20 - "Community 20"
Cohesion: 1.00
Nodes (1): Otaku-Sphere

### Community 21 - "Community 21"
Cohesion: 1.00
Nodes (1): Polymer Bazaar

### Community 22 - "Community 22"
Cohesion: 1.00
Nodes (1): Spitha Diamonds

### Community 24 - "Community 24"
Cohesion: 1.00
Nodes (1): Typournament

### Community 26 - "Community 26"
Cohesion: 1.00
Nodes (1): YNAB-Style Expense

## Knowledge Gaps
- **18 isolated node(s):** `HERO_LINES`, `Awwwards minimal design`, `Vite 5 build system`, `Typography system`, `Preloader component` (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 8`** (1 nodes): `Grain()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 9`** (1 nodes): `Nav()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (1 nodes): `Preloader()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 11`** (2 nodes): `OKLCH design tokens`, `Preloader component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (1 nodes): `useCustomCursor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 13`** (1 nodes): `useInertiaScroll()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 14`** (1 nodes): `useIsTouch()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 15`** (1 nodes): `useMagnetic()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 16`** (1 nodes): `useScrollReveal()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 17`** (1 nodes): `Footer component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 18`** (1 nodes): `Grain overlay`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 19`** (1 nodes): `Limetta`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 20`** (1 nodes): `Otaku-Sphere`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 21`** (1 nodes): `Polymer Bazaar`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 22`** (1 nodes): `Spitha Diamonds`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 24`** (1 nodes): `Typournament`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 26`** (1 nodes): `YNAB-Style Expense`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Sukrit Saha Portfolio` connect `Community 2` to `Community 5`, `Community 3`, `Community 11`, `Community 4`, `Community 7`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Why does `React 18 SPA` connect `Community 7` to `Community 2`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `Sukrit Saha` connect `Community 5` to `Community 2`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Magnetic links` (e.g. with `Contact section` and `Navigation component`) actually correct?**
  _`Magnetic links` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Sukrit Saha` (e.g. with `Agent-Native Workflows` and `Claspr`) actually correct?**
  _`Sukrit Saha` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `HERO_LINES`, `Awwwards minimal design`, `Vite 5 build system` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._