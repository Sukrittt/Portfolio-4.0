# Graph Report - .  (2026-08-20)

## Corpus Check
- 41 files · ~73,736 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 92 nodes · 137 edges · 13 communities detected
- Extraction: 86% EXTRACTED · 13% INFERRED · 1% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output
- Edge kinds: contains: 36 · imports: 19 · imports_from: 19 · references: 17 · implements: 14 · uses: 11 · created_by: 10 · showcases: 7 · semantically_similar_to: 3 · calls: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: cli)
- Included files: 41 · Candidates: 89
- Excluded: 0 untracked · 2279 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.
## God Nodes (most connected - your core abstractions)
1. `Sukrit Saha Portfolio` - 21 edges
2. `App Composition` - 14 edges
3. `Sukrit Saha` - 11 edges
4. `Magnetic Links` - 8 edges
5. `Custom Cursor System` - 6 edges
6. `Inertia Scrolling` - 6 edges
7. `Scroll-triggered Reveals` - 5 edges
8. `Work Section` - 5 edges
9. `Hero Word Cycle` - 4 edges
10. `Hero()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Limetta` --showcases--> `YNAB-Style Expense Screenshot`  [AMBIGUOUS]
  design_handoff_portfolio/README.md → public/projects/ynab-expense.png
- `Agent-Native Workflows` --showcases--> `Agent-Native Workflows Screenshot`  [INFERRED]
  design_handoff_portfolio/README.md → public/projects/agentic_workflows.png
- `Grain Texture` --semantically_similar_to--> `Design Spec Grain Texture`  [INFERRED] [semantically similar]
  public/grain.png → design_handoff_portfolio/assets/grain.png
- `Limetta` --showcases--> `Limetta Screenshot`  [INFERRED]
  design_handoff_portfolio/README.md → public/projects/limetta.png
- `Otaku-Sphere` --showcases--> `Otaku-Sphere Screenshot`  [INFERRED]
  design_handoff_portfolio/README.md → public/projects/otaku_sphere.webp

## Hyperedges (group relationships)
- **Interaction System** — custom_cursor_system, inertia_scrolling, magnetic_links, scroll_reveal, hero_word_cycle [INFERRED 0.90]
- **Page Layout Composition** — preloader, navigation_component, hero_section, work_section, about_section, contact_section, footer_component, grain_overlay [EXTRACTED 1.00]
- **Touch Device Fallbacks** — custom_cursor_system, inertia_scrolling, magnetic_links, use_is_touch [EXTRACTED 1.00]

## Communities

### Community 0 - "Portfolio Projects"
Cohesion: 0.11
Nodes (18): Agent-Native Workflows, Agent-Native Workflows Screenshot, Claspr, Limetta, Limetta Screenshot, Mini-Portfolio, Otaku-Sphere, Otaku-Sphere Screenshot (+10 more)

### Community 1 - "Design System & Docs"
Cohesion: 0.13
Nodes (18): Awwwards Minimal Design, Design Spec Grain Texture, Design Spec README, Extraction Instructions, Grain Overlay, Grain Texture, Graph Report, Graph Viewer HTML (+10 more)

### Community 2 - "Core Interaction System"
Cohesion: 0.32
Nodes (14): About Section, App Composition, Contact Section, Custom Cursor System, Footer Component, Hero Section, Hero Word Cycle, Inertia Scrolling (+6 more)

### Community 3 - "Work Section Components"
Cohesion: 0.23
Nodes (7): About(), ProjectRow(), Work(), PROJECTS, TAGLINE_WORDS, TOOLKIT, useHeroWord()

### Community 4 - "Page Sections & Reveal"
Cohesion: 0.29
Nodes (4): Contact(), Cursor(), Footer(), useScrollReveal()

### Community 5 - "Hero Section"
Cohesion: 0.67
Nodes (3): Hero(), HERO_LINES, metaStyle()

### Community 6 - "Grain Overlay"
Cohesion: 1.00
Nodes (1): Grain()

### Community 7 - "Navigation"
Cohesion: 1.00
Nodes (1): Nav()

### Community 8 - "Preloader"
Cohesion: 1.00
Nodes (1): Preloader()

### Community 9 - "Custom Cursor Hook"
Cohesion: 1.00
Nodes (1): useCustomCursor()

### Community 10 - "Inertia Scroll Hook"
Cohesion: 1.00
Nodes (1): useInertiaScroll()

### Community 11 - "Touch Detection Hook"
Cohesion: 1.00
Nodes (1): useIsTouch()

### Community 12 - "Magnetic Links Hook"
Cohesion: 1.00
Nodes (1): useMagnetic()

## Ambiguous Edges - Review These
- `Limetta` → `YNAB-Style Expense Screenshot`  [AMBIGUOUS]
  public/projects/ynab-expense.png · relation: showcases

## Knowledge Gaps
- **19 isolated node(s):** `HERO_LINES`, `Vite 5 Build System`, `OKLCH Design Tokens`, `Awwwards Minimal Design`, `Interaction Design Philosophy` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Grain Overlay`** (1 nodes): `Grain()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Navigation`** (1 nodes): `Nav()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Preloader`** (1 nodes): `Preloader()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Custom Cursor Hook`** (1 nodes): `useCustomCursor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Inertia Scroll Hook`** (1 nodes): `useInertiaScroll()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Touch Detection Hook`** (1 nodes): `useIsTouch()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Magnetic Links Hook`** (1 nodes): `useMagnetic()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Limetta` and `YNAB-Style Expense Screenshot`?**
  _Edge tagged AMBIGUOUS (relation: showcases) - confidence is low._
- **Why does `Sukrit Saha Portfolio` connect `Design System & Docs` to `Core Interaction System`, `Portfolio Projects`?**
  _High betweenness centrality (0.219) - this node is a cross-community bridge._
- **Why does `Sukrit Saha` connect `Portfolio Projects` to `Design System & Docs`?**
  _High betweenness centrality (0.164) - this node is a cross-community bridge._
- **Why does `App Composition` connect `Core Interaction System` to `Design System & Docs`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Are the 9 inferred relationships involving `Sukrit Saha` (e.g. with `Agent-Native Workflows` and `Claspr`) actually correct?**
  _`Sukrit Saha` has 9 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Custom Cursor System` (e.g. with `Inertia Scrolling` and `Magnetic Links`) actually correct?**
  _`Custom Cursor System` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `HERO_LINES`, `Vite 5 Build System`, `OKLCH Design Tokens` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._