# Photos go here

The site currently renders illustrated placeholders instead of real photos (see
`src/components/PhotoPlaceholder.tsx`). To use real photos:

1. Drop your images into this folder using the filenames already referenced in
   `src/data/content.ts` and the `photoKey` field on each event (e.g.
   `hero-couple.jpg`, `story-1-main.jpg`, `haldi-bg.jpg`, ...).
2. Import each image at the top of the relevant component and pass it as an
   `<img>` (or swap `PhotoPlaceholder` for a plain `<img>`/`background-image`)
   instead of the placeholder component.
3. Recommended sizes: hero/event backgrounds ~1600x2000px portrait, polaroid
   thumbnails ~600x600px square.
