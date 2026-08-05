# Interactive Wedding Invite

A single-page, mobile-first, scroll-based wedding invitation site — built with
React, Tailwind CSS, and Framer Motion.

Includes: an envelope intro (drag/tap to open), scroll fade-up animations, a
scratch-to-reveal countdown card, alternating light/dark event sections, a
WhatsApp RSVP deep link, and an FAQ accordion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL on your phone (or resize your browser to a mobile
viewport) — this site is designed mobile-first for sharing via a WhatsApp link.

## Making it yours

This is filled in with placeholder content (couple: "Ananya & Pranav") so
you can see the whole site working end to end. To personalize it:

1. **Text content** — edit `src/data/content.ts`. Every name, date, venue,
   story paragraph, FAQ answer, and the RSVP WhatsApp number/message lives
   there in one place.
2. **Photos** — the site currently renders illustrated placeholder "photos"
   (see `src/components/PhotoPlaceholder.tsx`) instead of real images, since
   none were provided. Drop your real photos into `src/assets/photos/` (see
   the README there) and swap the `PhotoPlaceholder` usages for real
   `<img>` tags/`background-image`s.
3. **RSVP number** — `rsvp.whatsappPhone` in `content.ts` is a placeholder;
   set it to your real WhatsApp number (country code, digits only, no `+`).

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (scroll animations, envelope drag interaction)
- Canvas API (`destination-out` compositing) for the scratch-to-reveal card
