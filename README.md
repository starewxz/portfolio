# Portfolio — Stanislav Revasevych

Personal portfolio of a full-stack developer from Ukraine: projects, skills and a bit about me.
Built to be small, fast and accessible.

**Live:** https://portfolio-alpha-snowy-55.vercel.app · **GitHub:** [@starewxz](https://github.com/starewxz)

## Highlights

- **Editorial "dev terminal" design** — hard borders, offset shadows, mono labels and oversized type, on a cyan / blue palette with a dark and a light theme.
- **Fast by default** — lazy-loaded routes, self-hosted fonts, local SVG icons and optimised WebP images (see [Performance](#performance)).
- **Theme without flash** — the saved (or system) theme is applied by an inline script before first paint; switching uses the View Transitions API where available.
- **Accessible** — semantic landmarks, keyboard-friendly gallery, visible focus states, and animations that respect `prefers-reduced-motion`.
- **Data-driven** — every project page is generated from one file ([`data-projects.js`](data-projects.js)).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero, profile card, tech ticker, selected work, contact |
| `/about` | Story, quick facts, CV download |
| `/projects` | All projects, alternating image/text layout |
| `/projects/projectDetails/:id` | Screenshot gallery, write-up, tech stack, live/source links, next project |
| `/skills` | Tools grouped by area, each linking to its docs |

## Tech stack

React 18 · React Router 7 · Vite 6 · Tailwind CSS 3 · plain CSS design tokens ·
`@fontsource-variable` (Inter, Space Grotesk, JetBrains Mono) · `sharp` for image conversion · ESLint 9 · deployed on Vercel.

No UI framework, icon font or animation library — scroll reveals, the marquee and the gallery are small hand-written components using CSS, `IntersectionObserver` and native scroll-snap.

## Performance

Measured on `vite build` before and after the rework:

| | Before | After |
| --- | --- | --- |
| Entry JavaScript | 647 KB | ~40 KB (+ ~175 KB shared React chunk) |
| CSS | 173 KB | ~48 KB |
| Icon font | 1.5 MB | none (only used SVGs, lazy-loaded) |
| Project images | 14 MB PNG / JPEG | ~1 MB WebP with small thumbnails |

How it is done:

- Route-level code splitting (`React.lazy`) with a skeleton fallback; React is a separate long-cached chunk.
- Images are WebP, sized for their use, with `width`/`height`, `loading="lazy"` and `fetchpriority` on the hero image.
- Fonts are self-hosted with `font-display: swap` — no third-party requests.
- Cache headers in [`vercel.json`](vercel.json): hashed assets are `immutable` for a year, images are cached for 30 days.
- Animations use only `transform` / `opacity`; the ticker is pure CSS.

## Getting started

Requires Node 20+.

```bash
git clone git@github.com:starewxz/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:5173
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
├── data-projects.js        # all project content (single source of truth)
├── public/
│   ├── projects/           # screenshots: <prefix><n>.webp + <prefix><n>-sm.webp
│   ├── tech/               # local technology SVG logos
│   └── img/                # photos
└── src/
    ├── components/         # layout, gallery, project showcase/list, reveal, theme toggle…
    ├── pages/              # one file per route
    ├── services/           # techData.js (logos + docs links), links.js (socials, nav)
    └── styles/index.css    # design tokens + component styles
```

## Adding a project

1. Put screenshots in `public/projects/` as `<prefix>1.webp`, `<prefix>2.webp`… plus a 640 px-wide `<prefix>1-sm.webp` thumbnail for each.
2. Add an entry to [`data-projects.js`](data-projects.js):

```js
{
    id: "my-project",              // used in the URL
    name: "My Project",
    emoji: "🚀",
    kind: "Commercial · E-commerce",  // short category label
    img: shots("prefix", 3),       // prefix + number of screenshots
    text: "One or two sentences for the project card.",
    textAbout: "Case-study overview.\nEach line becomes a paragraph.",
    highlights: ["Key feature one", "Key feature two"],  // bullet cards on the detail page
    link: "https://example.com",   // optional live site
    repos: [{ label: "Source code", url: "https://github.com/starewxz/my-project" }], // optional
    tech: ["React", "TypeScript"], // names from src/services/techData.js
    pin: 1,                        // optional: pins it to the top as a "Commercial" project (lower = earlier)
}
```

3. A new technology? Drop its SVG into `public/tech/` and register it in `src/services/techData.js` (set `dark: true` for black logos that must invert in dark mode). Unknown names still render as plain text chips.

Convert raw screenshots to WebP with [`sharp`](https://sharp.pixelplumbing.com/), e.g. max 1400 px wide at quality ~80.

## Age and experience stay current

Age and years of experience are never hard-coded in the UI. They are computed at runtime from two dates in
[`src/services/profile.js`](src/services/profile.js) (born 4 July 2009, programming since October 2023) and used on the
home and About pages. Check the logic with `node scripts/profile.test.mjs`.

## Deployment

Deployed on [Vercel](https://vercel.com). `vercel.json` rewrites unknown routes to `index.html` for client-side routing (Vercel serves real files first, so images and assets are unaffected) and sets cache and security headers. Only image files and hashed assets get long cache lifetimes — never the HTML pages.

## Contact

[Telegram](https://t.me/Sta_Rew) · [LinkedIn](https://www.linkedin.com/in/stanislav-revasevych-65201230b/) · [Instagram](https://www.instagram.com/starewych/)

© 2024 Revasevych Stanislav
