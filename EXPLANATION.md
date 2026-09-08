# Notes on how and why I built this

Writing this mostly so I have my thoughts straight before the review — the brief
mentions I might get asked to explain the implementation live, so this is basically me
prepping answers in advance rather than trying to remember everything on the spot.

## Why NOVA looks the way it does

I didn't want this to look like a generic Tailwind template — you know the type,
cream background, orange/terracotta button, everything in a rounded card with the same
soft grey shadow. So before writing any code I picked a direction first:

- **Colors**: cool paper-white background instead of cream, near-black text with a
  slight blue tint, deep indigo as the "structural" color (nav CTA button, the product
  section, the stats band), and gold as the one accent color reserved for primary
  actions — I tried to only use gold where I actually wanted the eye to land, not
  sprinkle it everywhere. There's also a muted sage green used for the "save 20%"
  badge and checkmarks.
- **Fonts**: paired a serif (Fraunces) for headlines with a plain sans (Inter) for
  everything else. Most SaaS landing pages use one sans font for literally everything,
  so pairing a serif headline font in was a deliberate way to make it feel less
  templated.
- **Layout**: the hero is left-aligned, not centered — centered hero sections are the
  default in like 90% of these templates so I wanted to break from that. I also only
  numbered one section ("How It Works") because that's the one section where the
  content is actually a sequence (step 1, 2, 3). The Features grid and Solutions grid
  aren't numbered on purpose, since that content isn't ordered and numbering it would
  just be decoration.
- **Animation**: kept this pretty restrained. There's one scroll-reveal on the features
  grid and one count-up animation on the stats — I didn't want every single section to
  fade in as you scroll, because that gets old fast and honestly is a bit of a
  giveaway that a page was AI-generated without much thought.

## Why this stack

React because the brief says it's preferred. Vite instead of Create React App or
Next.js because this is a static marketing page — it doesn't need server rendering or
routing, so Next would've been overkill, and Vite's dev server is just noticeably
faster to work with. Tailwind because it let me keep every design decision (colors,
fonts, spacing) in one config file instead of writing a separate CSS file per
component and trying to keep them consistent by hand.

I skipped icon libraries and animation libraries on purpose — the icon set here is
maybe 15 shapes, so I just wrote them as inline SVGs in one file (`Icon.jsx`) instead
of installing a whole package for it.

## How the components are organized

`App.jsx` doesn't do much on its own — it just holds the two bits of state that
multiple sections need (which theme is active, and whether the demo modal is open) and
passes them down. Every actual section — Hero, Features, Pricing, whatever — is its
own file under `src/components/`, and each one manages its own local state if it needs
any. So `Pricing.jsx` owns the monthly/annual toggle itself, `FAQ.jsx` owns which
question is currently open, `Testimonials.jsx` owns which slide you're on. None of that
state needed to live higher up in `App.jsx`, so I kept it where it's actually used.

All the actual text content — nav links, feature descriptions, pricing plan details,
testimonial quotes, FAQ questions — lives in `src/data/content.js` as plain JS
objects/arrays. That way if I (or someone else) needs to change copy, it's a data
change, not a JSX change, and the components themselves stay focused on layout and
behavior instead of being cluttered with paragraphs of text.

## Stuff that was actually tricky

- **The count-up stat numbers** — I wanted them to animate once, right when you scroll
  to that section, not replay every time or animate immediately on page load. Ended up
  writing a small `useInView` hook around `IntersectionObserver` and then using
  `requestAnimationFrame` with an ease-out curve inside `Stats.jsx` to animate the
  number itself.
- **The FAQ accordion's open/close animation** — answers are different lengths, so I
  couldn't just animate a fixed pixel height. Used a CSS trick with
  `grid-template-rows` going from `0fr` to `1fr` instead, which animates smoothly
  without needing to measure anything in JS.
- **Dark mode without a flash of the wrong theme on load** — I read the saved theme
  (or the OS preference if nothing's saved) synchronously when `App.jsx` first
  initializes its state, instead of defaulting to light mode and then switching after
  the page has already rendered.
- **The pricing toggle switch, honestly** — I actually had a bug here after my first
  push where the little circle in the toggle would drift and overlap the "Annual"
  label text. Turned out I'd positioned it as `absolute` without setting a `left`
  value, so the browser was falling back to some default position instead of where I
  actually wanted it. Fixed it by switching to a flex-based layout for the toggle and
  just letting the circle translate from its natural position instead of being
  absolutely positioned with a missing coordinate. Small bug, but a good reminder to
  actually click through everything after deploying instead of assuming the local
  build looked the same as production.

## Where AI fit into this

I used Claude for a good chunk of the actual typing — scaffolding the Vite/Tailwind
config, writing the first pass of each component. But the design direction (palette,
type pairing, why things are laid out the way they are) was something I worked through
first before any code got written, and I went back through the components afterward,
including finding and fixing the toggle bug mentioned above. I ran the build myself
(`npm run build`) to make sure it actually compiles, and I understand what each piece
of this does well enough to change any of it live if asked.

---

## Questions I should be ready to answer

**How do your components work?**
Every section under `src/components/` is its own function component. If a section
needs interactive state — which FAQ item is open, which pricing period is selected,
which testimonial is showing — that state lives inside that component with `useState`.
The only state that lives higher up, in `App.jsx`, is stuff multiple components
actually need to share: the current theme and whether the demo modal is open.

**How does the mobile nav work?**
`Navbar.jsx` has an `open` boolean. Below the tablet breakpoint, a hamburger button
toggles it, and the dropdown panel animates open/closed using a max-height transition
instead of just toggling `display: none`, so it actually slides rather than snapping.
While it's open I lock the page's scroll so you're not scrolling the page behind the
menu.

**How does the FAQ accordion work?**
One `openIndex` value in state — only one answer is open at a time. Clicking a
question either opens it or closes it if it's already open. The height animation uses
a CSS grid-rows trick rather than measuring pixel heights in JavaScript.

**How is the data rendered?**
Everything — nav links, features, pricing plans, testimonials, FAQ — comes from
`src/data/content.js` as arrays of objects, and each component just `.map()`s over the
relevant array. Adding a new pricing plan or FAQ question is editing that one file, not
touching any component markup.

**Why this tech stack?**
React because it's the preferred option in the brief and makes the section-based
structure easy. Vite because it's fast and this page doesn't need Next's server-side
features. Tailwind so all the design tokens live in one config file instead of
scattered CSS.

**How did you handle responsive design?**
Mobile-first Tailwind breakpoints — everything's a single column by default and
expands into grids at larger widths. Checked it at roughly 375px, 768px, and 1440px
using the browser dev tools' device toolbar to make sure nothing overlapped or caused
horizontal scrolling.

**How would you improve accessibility further?**
Run it through an automated audit like Lighthouse or axe to catch anything I missed,
especially contrast in dark mode. I'd also add a live region so screen readers get
notified when the testimonial carousel changes slides, since right now that update is
silent to anyone not looking at the screen.

**How would you optimize performance?**
Self-host the Google Fonts instead of loading them from Google's CDN (avoids an extra
render-blocking request), lazy-load the demo modal since it's not needed until someone
clicks a button for it, and run a Lighthouse pass on the actual deployed build to see
where the biggest wins are instead of guessing.

**How would you turn this into a real production app?**
Hook the newsletter form and demo modal up to actual backend services instead of just
local state, add routing if it ever needs more than one page, probably move the copy
out of a static JS file and into a CMS if non-developers need to edit it, and set up
CI so the build runs automatically on every pull request before it deploys.
