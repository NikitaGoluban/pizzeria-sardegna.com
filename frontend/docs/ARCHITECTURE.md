# Pizzeria Sardegna website architecture

## Public pages

| Address | Component | Purpose |
| --- | --- | --- |
| `/` | `RestaurantHomePage` | Restaurant introduction, opening hours, address, and calls to action |
| `/menu.html` | `MenuPage` | Pizza, pasta, salad, price, and allergen information |
| `/about.html` | `RestaurantAboutPage` | Restaurant story and atmosphere |
| `/gallery.html` | `GalleryPage` | Restaurant and food photography |
| `/contact.html` | `ContactPage` | Phone, address, opening hours, reservations, and map |
| `/privacy-policy.html` | `PrivacyPage` | Privacy information |
| all other addresses | `NotFoundPage` | 404 page |

## Source structure

```text
src/
├── app/
│   ├── App.tsx
│   └── router.tsx
├── components/
│   ├── layout/
│   └── ui/
├── hooks/
│   └── usePageMeta.ts
├── pages/
│   ├── ContactPage.tsx
│   ├── GalleryPage.tsx
│   ├── MenuPage.tsx
│   ├── RestaurantAboutPage.tsx
│   ├── RestaurantHomePage.tsx
│   ├── NotFoundPage.tsx
│   └── PrivacyPage.tsx
├── styles/
└── main.tsx
```

## How a page is displayed

`index.html` starts `main.tsx`. `main.tsx` renders `App.tsx`. `App.tsx` loads the
router, and `router.tsx` selects a page based on the browser address. Every page is
displayed inside `SiteLayout`, so the header and footer remain consistent.

## Generated files

- `dist/` is created by `npm run build` and may be deleted and rebuilt.
- `../httpdocs/` is the published website served by Plesk.
- Source changes are not live until a verified build is explicitly published.
