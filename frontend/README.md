# Pizzeria Sardegna frontend

This folder contains the editable React and TypeScript source for the pizza website.

## Start the development website

```sh
npm install
npm run dev
```

## Important source folders

- `src/pages/` — Home, Menu, About, Gallery, Contact, Privacy, and 404 pages.
- `src/components/layout/` — header, navigation, shared layout, and footer.
- `src/components/ui/` — reusable page sections.
- `src/app/router.tsx` — URL-to-page map.
- `src/styles/` — all website styles.
- `public/` — favicon, sitemap, robots.txt, and `.htaccess`.

## Checks

```sh
npm run lint
npm run build
```

The build is created in `dist/`. Publishing it to `../httpdocs/` is a separate step.
See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full project map.
