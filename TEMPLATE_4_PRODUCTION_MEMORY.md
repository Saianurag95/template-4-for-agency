# Template 4 Production Memory

This repo is Template 4: `AG-SEO-04`.

Use the central production memory files here:

```text
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-seo-performance-01\site-production-memory.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-seo-performance-01\client-change-request-format.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-seo-performance-01\one-to-two-hour-customization-sop.md
C:\Users\reddy\Documents\New project\website-production-os\templates\agency\agency-seo-performance-01\template-4-complete-code-snapshot.md
```

Quick facts:

- `/` is the main SEO/performance agency website.
- `/intake` is the client information retrieval page.
- Main data file is `src/data/siteData.ts`.
- Home route is `src/pages/HomePage.tsx`.
- Intake page is `src/pages/IntakePage.tsx`.
- This template uses `react-router-dom`.
- Keep serious CTAs linked to `/intake`.
- Keep Vercel rewrite in `vercel.json`.

Verify after changes:

```text
npm.cmd run typecheck
npm.cmd run build
```

