# Design & Implementation Notes

This document explains the reasoning behind the build, and answers the questions the
assignment brief says you should be ready to discuss in review. Read it over so you can
speak to it confidently and in your own words.

## 1. Design decisions

**Brand direction.** Instead of the generic SaaS look (cream background + terracotta accent,
or near-black + neon accent, rounded cards with soft grey shadows everywhere), NOVA uses a
"focused workspace" identity:

- **Color** — a cool paper-white background (`#F6F7F4`), near-black ink text with a blue
  undertone (`#14171C`), a deep indigo primary (`#2B3A67`) for structure (nav CTA, product
  section, stats band), a warm gold accent (`#E8A33D`) reserved for primary actions and
  small highlight moments, and a muted sage green for secondary/success signals. Indigo and
  gold read as "focused, considered work" rather than a generic tech gradient.
- **Type** — Fraunces (a characterful serif) for headlines paired with Inter (a clean
  humanist sans) for body text and UI. The serif gives NOVA warmth and a point of view;
  most productivity SaaS sites default to a single grotesk sans everywhere, so the pairing
  is a deliberate differentiator.
- **Layout** — left-aligned, asymmetric hero (not centered/symmetric, which is the default),
  a dot-grid texture instead of a gradient blob, a numbered sequence *only* in "How It
  Works" because that content genuinely is a 3-step sequence — the Features and Solutions
  grids intentionally avoid numbering since that content isn't ordered.
- **Motion** — restrained on purpose: one scroll-triggered reveal on the feature grid, one
  count-up animation on the stats band, and hover/focus transitions on interactive
  elements. Not every section fades in on scroll, because that scattershot pattern is a
  common tell of generated pages and gets old fast for real visitors.

## 2. Technology choices

- **React + Vite**: the brief prefers React; Vite gives fast HMR during development and a
  small, optimized production bundle (no framework overhead from Next.js's server features,
  which this static marketing page doesn't need).
- **Tailwind CSS**: utility classes keep styling colocated with markup, which makes each
  component easy to review in isolation, and Tailwind's config file is where all design
  tokens (colors, fonts, radii) are centralized — so the whole palette can be changed from
  one file.
- **No icon/animation libraries**: the icon set is ~15 glyphs, hand-written as inline SVG
  paths in `Icon.jsx`. This avoids importing a large icon package for a handful of shapes
  and keeps the total JS bundle around 180KB uncompressed / ~57KB gzipped.

## 3. Component structure

`App.jsx` is a thin composition root: it owns only the two pieces of state that are shared
across sections — the color theme and whether the demo modal is open — and passes them down
as props. Every section (`Hero`, `Features`, `Pricing`, etc.) is a self-contained component
that imports its own copy from `src/data/content.js` and manages any state local to itself
(e.g. `Pricing` owns its monthly/annual toggle, `FAQ` owns which item is expanded,
`Testimonials` owns the current slide index). This keeps state close to where it's used and
means any single section can be tested, reused, or handed to another dev without pulling in
the rest of the page.

Content is separated from markup in `content.js` so that copy edits never require touching
JSX, and so the component files stay focused on structure and behavior.

## 4. Challenges faced

- **Avoiding the "generated SaaS page" look** required consciously picking a palette and
  type pairing that isn't the default first choice, and justifying every structural device
  (e.g. only numbering the one section that's actually a sequence).
- **Animated counters** needed a hook that fires once (not repeatedly) when a section
  scrolls into view, without a third-party library — solved with a small
  `useInView` wrapper around `IntersectionObserver` plus a `requestAnimationFrame` easing
  loop in `Stats.jsx`.
- **Accordion height animation** without a fixed pixel height (since answer text length
  varies) was solved with a CSS grid-template-rows trick (`grid-rows-[0fr]` →
  `grid-rows-[1fr]`) rather than JS-measured heights.
- **Dark mode without flash-of-wrong-theme** was handled by reading `localStorage` /
  `prefers-color-scheme` synchronously in `App.jsx`'s initial state, rather than defaulting
  to light and switching after mount.

## 5. How AI tools were used

Claude was used as a pair-programmer: I described the brief, and Claude proposed a design
token plan (palette/type/layout) before writing any code, which I reviewed and adjusted
before implementation began. Claude then scaffolded the Vite/Tailwind config and wrote each
component. I ran `npm run build` myself to confirm the project compiles cleanly, and I can
walk through and modify any part of it live — see the Q&A below for the explanations I'd
give in review.

---

## Answers to likely review questions

**How do your components work?**
Each section is a standalone function component under `src/components/`. Sections that need
their own interactive state (accordion open index, carousel index, pricing toggle, theme)
declare that state locally with `useState`; shared state (theme, modal visibility) lives in
`App.jsx` and is passed down as props. Content is imported from `src/data/content.js` so
markup and copy stay separate.

**How does the mobile navigation work?**
`Navbar.jsx` tracks an `open` boolean. Below the `md` breakpoint, a hamburger button toggles
it; the panel's height animates via a `max-h-0` → `max-h-96` Tailwind transition rather than
`display: none`, so the collapse/expand is animated. While open, `document.body.style.overflow`
is set to `hidden` in a `useEffect` to prevent background scroll, and it's restored on close.

**How does the FAQ accordion work?**
`FAQ.jsx` keeps a single `openIndex` in state (only one item open at a time). Each panel is
rendered with `aria-expanded`/`aria-controls` for accessibility, and the expand/collapse
animation uses a CSS grid-rows trick so it works with variable-length answers without
JavaScript measuring the DOM.

**How is data rendered?**
All page copy — nav links, feature list, pricing plans, testimonials, FAQ items — lives in
`src/data/content.js` as plain arrays/objects, and each component `.map()`s over the
relevant array to render its markup. This means adding a 4th pricing plan or a 7th FAQ item
is a data change, not a markup change.

**Why did you select this technology stack?**
React for component reuse and the assignment's stated preference; Vite for a fast, minimal
build tool suited to a static marketing page; Tailwind so design tokens (color, type,
spacing) are centralized and consistent across every component instead of hand-written CSS
per section.

**How did you handle responsive design?**
Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`) throughout: single-column stacks by
default, expanding to grids at `sm`/`md`/`lg`. The nav collapses to a hamburger below `md`;
grids (features, solutions, pricing, stats) go from 1 → 2/3/4 columns as width increases.
Tested by resizing the browser and via the browser's device toolbar at common breakpoints
(375px, 768px, 1024px, 1440px) to confirm no horizontal scroll or overlap.

**How would you improve accessibility further?**
Add a live region announcement when the testimonial carousel or accordion changes for
screen-reader users; run an automated audit (axe or Lighthouse) to catch contrast edge
cases in dark mode; add explicit `lang` alternatives if the page is localized; verify tab
order end-to-end with a keyboard-only pass and add visible skip-links for every major
landmark, not just "skip to content."

**How would you optimize performance?**
Convert the CSS-drawn product mock and any future real screenshots to `<img loading="lazy">`
with modern formats (WebP/AVIF); code-split rarely-used UI (e.g. the demo modal) with
`React.lazy`; self-host the two Google Fonts instead of a render-blocking Google Fonts
request, and preload the display font; run `vite build --report` / Lighthouse to check
bundle size and Largest Contentful Paint on the built `dist` output.

**How would you convert this static site into a production application?**
Replace the placeholder newsletter/demo-modal handlers with real API calls (e.g. to an
email service and a scheduling tool); add environment-based config for analytics; introduce
routing (React Router) if additional pages are needed beyond the single landing page; add
a CMS or headless content source if marketing needs to edit copy without a code deploy; add
CI (lint + build) on every pull request before deploying via Vercel/Netlify's Git integration.
