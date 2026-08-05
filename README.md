# Interactive Wedding Invite 💌

A single-page, mobile-first, scroll-based wedding invitation website. Built to
feel like opening a physical wedding card — elegant, cinematic, personal —
rather than a generic template. Designed primarily to be opened from a
WhatsApp share link on a phone.

**🔗 Live demo:** [kyratna.github.io/InteractiveWeddingInvite](https://kyratna.github.io/InteractiveWeddingInvite/)

Filled in with placeholder details for "Ananya & Pranav" so the whole
experience works end to end out of the box. See
[Making it yours](#making-it-yours) to swap in a real couple's details.
Auto-deploys to GitHub Pages on every push to `main` via
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

---

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Page sections](#page-sections)
- [Design system](#design-system)
- [Making it yours](#making-it-yours)
- [About the photo placeholders](#about-the-photo-placeholders)
- [Building & deploying](#building--deploying)
- [Known limitations](#known-limitations)

---

## Features

- 📩 **Envelope intro** — a closed envelope with a card peeking out; drag or
  tap the card upward to "open" it, which transitions into the site. Shows a
  "tap or drag up to open" hint after a few seconds for anyone who doesn't
  notice the interaction immediately.
- 🧭 **Fixed nav bar** — couple's initials on the left, a `RSVP` link on the
  right that smooth-scrolls to the RSVP section. Fades in once the envelope
  opens and stays visible (with a blurred glass background) over every
  section, light or dark.
- 💫 **Scroll-triggered animations** — every section fades/slides up into
  view via Framer Motion as you scroll, once, the first time it's seen.
- 💌 **Two-part love story** — "how we met" and "the proposal," each with a
  large photo, an overlapping polaroid-style thumbnail, and short copy.
- 🎟️ **Scratch-to-reveal countdown** — a full-bleed dark section with a
  `<canvas>`-based scratch card. Drag/swipe across it to erase the gold
  foil (`globalCompositeOperation = 'destination-out'`) and reveal the
  wedding date; once ~45% is scratched off, it auto-clears the rest so
  guests don't have to scratch every last pixel.
- 🎉 **Five event sections** — Haldi, Mehendi, Sangeet, Wedding, and
  Reception, alternating light/dark themes, each with its own accent color,
  mood line, and a day/time/venue/dress-code details list.
- ✅ **WhatsApp RSVP** — a single button that deep-links to
  `wa.me/<number>?text=<prefilled message>`, plus an RSVP-by date.
- ❓ **FAQ accordion** — one question open at a time, animated
  expand/collapse.
- 📱 **Mobile-first & responsive** — designed for phone viewports first
  (the primary use case), and scales up cleanly to tablet/desktop.

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, using `@theme` tokens for the
  design system — see `src/index.css`)
- **Framer Motion** for scroll-reveal animations and the envelope drag
  interaction
- **Canvas API** (no extra library) for the scratch-to-reveal card
- Google Fonts: **Playfair Display** / **Cormorant Garamond** (serif
  display) + **Jost** (sans body)

No backend, no database, no build-time image processing — it's a static
site you can host anywhere (Vercel, Netlify, GitHub Pages, S3, etc.).

## Getting started

Requires Node 18+.

```bash
npm install
npm run dev
```

Then open the printed local URL. Resize your browser to a phone-sized
viewport (or open it on an actual phone on the same network) to see it as
guests will.

Other scripts:

```bash
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
npm run lint     # oxlint
```

## Project structure

```
src/
  App.tsx                    # assembles the whole page in scroll order
  index.css                  # Tailwind import + design tokens (@theme) + base styles
  data/
    content.ts                # ALL couple/event/copy content — edit this first
  components/
    Envelope.tsx               # intro: drag/tap-to-open envelope
    Nav.tsx                     # fixed nav bar (initials + RSVP link)
    Hero.tsx                    # names, date, location
    StoryPart1.tsx               # "how we met"
    StoryPart2.tsx               # "the proposal" (pull quote)
    PhotoWithPolaroid.tsx        # shared large-photo + overlapping polaroid layout
    Countdown.tsx                # scratch-to-reveal section wrapper
    ScratchCard.tsx               # the actual <canvas> scratch interaction
    EventSection.tsx             # one repeatable event section (Haldi, Mehendi, ...)
    Rsvp.tsx                     # WhatsApp deep-link RSVP
    Faq.tsx                      # accordion
    PhotoPlaceholder.tsx         # illustrated placeholder "photo" component (see below)
  lib/
    motion.ts                   # shared Framer Motion variants (fadeUp, fadeIn)
  assets/photos/
    README.md                   # where to drop real photos in
```

## Page sections

In scroll order, matching the original design brief:

1. **Envelope Intro** — full-screen, drag/tap to open
2. **Hero** — arch-cropped photo, couple names, date + location
3. **Love Story Part 1** — "Where it began"
4. **Love Story Part 2** — "And now, forever" (proposal pull quote)
5. **Countdown** — scratch-to-reveal wedding date
6. **The Haldi** (light, marigold accent)
7. **The Mehendi** (light, green/gold accent)
8. **The Sangeet** (dark, jewel tones)
9. **The Wedding** (light, floral/blush accent)
10. **The Reception** (dark, gold/chandelier accent)
11. **RSVP** — WhatsApp confirmation button
12. **FAQ** — accordion

Events are data-driven: adding, removing, or reordering a function (e.g. an
extra Sagai or Baraat section) is a matter of editing the `events` array in
`src/data/content.ts` — no new component code required.

## Design system

Defined as Tailwind `@theme` tokens in `src/index.css`:

| Token | Use |
|---|---|
| `--color-ivory`, `--color-cream` | light section backgrounds |
| `--color-charcoal`, `--color-charcoal-2` | dark section backgrounds |
| `--color-blush`, `--color-rose`, `--color-rose-deep` | hero/story accents |
| `--color-haldi`, `--color-mehendi`, `--color-sangeet`, `--color-wedding`, `--color-reception` | per-event accent colors |
| `--font-serif` (Playfair Display) | headings, names |
| `--font-display` (Cormorant Garamond, italic) | pull quotes, polaroid captions |
| `--font-sans` (Jost) | body copy, labels |

Small-caps labels (e.g. "THE COUNTDOWN") use the `.tracking-label` utility
(0.28em letter-spacing) defined alongside the theme.

## Making it yours

This ships with placeholder content (couple: **Ananya & Pranav**, Dec 12,
2026, Udaipur) so the whole flow — envelope, story, countdown, events,
RSVP, FAQ — is visible and testable immediately. To personalize:

1. **All text & data** lives in one file: `src/data/content.ts`.
   - `couple` — names, initials, date, city
   - `envelope` / `hero` — intro card + hero copy (derived from `couple` by default)
   - `story` — both love-story sections' copy, pull quote, proposal location/year
   - `countdown` — label/intro copy + the revealed date
   - `events` — an array of `{ name, mood, day, date, time, venue, venueArea, dress, theme, accent }` — edit, add, or remove entries here
   - `rsvp` — headline, body copy, **WhatsApp number**, prefilled message, RSVP deadline
   - `faq` — question/answer pairs
2. **RSVP WhatsApp number** — `rsvp.whatsappPhone` in `content.ts` is a
   placeholder (`910000000000`). Replace it with the real number, country
   code + digits only, no `+` or spaces (e.g. `919876543210`).
3. **Photos** — see below.

## About the photo placeholders

No real couple photos were supplied, and this build environment's network
policy doesn't allow fetching images from stock-photo hosts. Rather than
substitute stranger stock photos as if they were "the couple," every photo
slot renders an intentional, on-brand illustrated placeholder
(`src/components/PhotoPlaceholder.tsx`): a gradient tone matching that
section's palette, a subtle repeating pattern (petals, marigold dots, henna
leaves, sparkles, string lights — themed per section), a simple line icon,
and a small `📷 replace: filename.jpg` tag so it's obvious what to swap and
where.

To use real photos:

1. Drop images into `src/assets/photos/` using the filenames referenced in
   `content.ts` / each component (e.g. `hero-couple.jpg`,
   `story-1-main.jpg`, `haldi-bg.jpg` — the `photoKey` field on each event in
   `content.ts` maps to `<photoKey>-bg.jpg`).
2. Import the image and swap the corresponding `<PhotoPlaceholder ... />` for
   a real `<img>` (or a `background-image` div, matching the existing
   `shape`/`fill` layout classes so sizing stays consistent).
3. Suggested sizes: hero/event backgrounds ~1600×2000px portrait, polaroid
   thumbnails ~600×600px square.

## Building & deploying

```bash
npm run build
```

Outputs a static site to `dist/` — deploy it to any static host (Vercel,
Netlify, GitHub Pages, Cloudflare Pages, S3 + CloudFront, etc.). No server
or environment variables are required.

## Known limitations

- Photo slots are illustrated placeholders, not real photos (see above) —
  intentional given no photos were provided and this environment couldn't
  reach external image hosts.
- The RSVP WhatsApp number is a placeholder and must be updated before
  sharing the site with real guests.
- Couple names, date, venues, and FAQ answers are placeholder content
  matching the original design brief's own example ("A & P") — update
  `src/data/content.ts` with the real details before sending invites.
