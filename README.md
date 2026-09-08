# NOVA — AI Productivity Platform Landing Page

A fully responsive, production-quality marketing landing page for **NOVA**, a fictional
AI productivity platform, built for the Front-End Development Intern assignment.

**Tagline:** Build Better. Work Smarter.

---

## Live Demo

> Replace this line with your deployed URL once published (see *Deployment* below).
>
> `https://nova-landing.vercel.app`

## Technologies Used

- **React 18** (function components + hooks)
- **Vite 5** — dev server and production bundler
- **Tailwind CSS 3** — utility-first styling with a custom design token theme (`tailwind.config.js`)
- Zero UI/animation dependencies — icons are hand-authored inline SVG, and all motion is
  done with Tailwind transitions, CSS keyframes and the native `IntersectionObserver` API

No component libraries, icon packs, or animation libraries were used, to keep the bundle
small and to demonstrate the underlying HTML/CSS/JS concepts directly.

## Features

**Required sections** — Navigation, Hero, Trusted-By strip, Features (6), Product/About,
How It Works, Statistics, Solutions, Testimonials (4), Pricing (3 plans), FAQ (6 questions),
Final CTA, Footer.

**Required interactions** — responsive nav, mobile hamburger menu, smooth scrolling, FAQ
accordion, button/card hover effects, working in-page navigation links.

**Bonus features implemented:**
- Dark / light mode with `localStorage` persistence and OS preference detection
- Animated statistics that count up on scroll into view
- Scroll-triggered reveal animation on the feature grid
- Testimonial carousel with dot indicators and prev/next controls
- Monthly / annual pricing toggle
- Demo modal (video/booking placeholder) opened from two CTAs
- Newsletter email validation with inline error/success states
- Back-to-top button that appears after scrolling

## Project Structure

```
nova-landing/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Composes all sections, owns theme + modal state
    ├── index.css               # Tailwind directives + base/accessibility styles
    ├── data/
    │   └── content.js          # All copy & structured content (single source of truth)
    ├── hooks/
    │   └── useInView.js         # IntersectionObserver hook (stats + scroll reveal)
    └── components/
        ├── Icon.jsx             # Inline SVG icon set
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── TrustedBy.jsx
        ├── Features.jsx
        ├── Product.jsx
        ├── HowItWorks.jsx
        ├── Stats.jsx
        ├── Solutions.jsx
        ├── Testimonials.jsx
        ├── Pricing.jsx
        ├── FAQ.jsx
        ├── FinalCTA.jsx
        ├── Footer.jsx
        ├── BackToTop.jsx
        └── DemoModal.jsx
```

## Installation & Local Development

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → open the printed local URL (typically http://localhost:5173)

# 3. Build for production
npm run build
# → output goes to /dist

# 4. Preview the production build locally
npm run preview
```

## Deployment

The app is a static Vite build, so it deploys to any static host. **Vercel** (recommended):

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — keep the defaults (`npm run build`, output directory `dist`).
4. Deploy, then copy the live URL into the *Live Demo* section above and into your submission.

**Netlify** is equally simple: `npm run build`, publish directory `dist`, drag-and-drop the
`dist` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for a one-off deploy,
or connect the GitHub repo for continuous deployment.

## AI Tools Used

This project was built with assistance from **Claude** (Anthropic), used to:
- Scaffold the Vite + React + Tailwind project structure
- Draft component code for each section based on a hand-written design plan (palette,
  type pairing, layout) so the result wouldn't default to a generic AI-template look
- Draft placeholder marketing copy for a fictional product
- Verify the production build compiles cleanly (`npm run build`)

All generated code was reviewed, and adjusted; see `EXPLANATION.md` for the reasoning
behind the structure, styling and technology decisions, which I can walk through and modify
live during review.

## Screenshots

> Add screenshots here before submitting, e.g.:
>
> `![Desktop hero](./screenshots/desktop-hero.png)`
> `![Mobile menu](./screenshots/mobile-menu.png)`
> `![Pricing section](./screenshots/pricing.png)`
