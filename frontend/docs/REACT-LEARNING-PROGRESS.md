# Postęp nauki Reacta

Ostatnia aktualizacja: 12 listopada 2026

## Sposób nauki

- Wyjaśnienia po polsku.
- Jeden mały temat na raz.
- Zwykłe funkcje `function`.
- Bez destrukturyzacji.
- Proste instrukcje `if`.
- Po każdym temacie jedno krótkie pytanie kontrolne.
- Uczeń pisze menu ręcznie, a asystent podpowiada i sprawdza kod.

## Omówione pliki

- `frontend/index.html`
- `frontend/src/main.tsx`
- `frontend/src/app/App.tsx`
- `frontend/src/app/router.tsx`
- `frontend/src/components/layout/SiteLayout.tsx`
- `frontend/src/components/layout/SiteHeader.tsx`
- `frontend/src/components/layout/SiteNavigation.tsx`
- `frontend/src/components/layout/SiteFooter.tsx`
- `frontend/src/components/ui/PageShell.tsx`
- `frontend/src/components/ui/PageIntro.tsx`
- `frontend/src/components/ui/Section.tsx`
- `frontend/src/pages/RestaurantHomePage.tsx`
- rozpoczęto `frontend/src/features/menu/types.ts`

## Poznane tematy

- element `root` i uruchomienie Reacta;
- `import`, `export`, `function` i `return`;
- komponenty i JSX;
- `StrictMode`, `createRoot` i `render`;
- `BrowserRouter`, `Routes`, `Route`, `Link` i `NavLink`;
- `path`, `element`, trasa `*` i strona 404;
- `SiteLayout`, nagłówek, zmienna podstrona i stopka;
- `className`, `<nav>`, `<ul>` i `<li>`;
- `state.isActive`, klasa `is-active` oraz właściwość `end`;
- klamry `{}` oznaczające kod JavaScript lub TypeScript wewnątrz JSX;
- `aria-label` i podstawy dostępności.
- element `footer`, link telefoniczny `tel:` oraz wewnętrzny `Link`;
- kilka klas CSS w jednym `className`;
- cel komponentu `PageShell` i ograniczanie powtarzania kodu;
- `props.children`, interfejs `PageShellProps` i typ `ReactNode`.
- przypisywanie typu w zapisie `props: PageShellProps`;
- różnica między wymaganym i opcjonalnym propsem.
- cel komponentu `PageIntro`;
- interfejs `PageIntroProps` oraz propsy `eyebrow`, `title` i `children`;
- różnica między typem `string` i `ReactNode`;
- funkcja `showEyebrow`, wartość `undefined` i `return null`;
- wywołanie funkcji wewnątrz JSX;
- wyświetlanie wartości przez `{props.title}`.
- `props.children` w komponencie `PageIntro`;
- komponent `Section`, nagłówki h1/h2/h3 i element `section`;
- budowa kompletnej strony `RestaurantHomePage`;
- własny hook `usePageMeta` i podstawowe metadane strony;
- używanie hooka przed `return`;
- `PageIntro`, `Section`, link telefoniczny i `Link` na prawdziwej stronie;
- interfejs `MenuItem` oraz pola wymagane i opcjonalne;
- rozpoczęto interfejs `MenuCategoryData`.

## Aktualne miejsce

Rozpoczęta lekcja 86: props `category` w komponencie `MenuCategory`.

Ostatnie pytanie kontrolne:

> Jaki jeden props otrzymuje komponent `MenuCategory`?

## Przerwa w nauce

12 listopada 2026 rozpoczęła się dłuższa przerwa na ukończenie kursów GoIT
i wykonanie zadań domowych. Po zakończeniu kursów nauka Reacta ma być wznowiona
od lekcji 86, bez rozpoczynania materiału od początku.

## Następny krok

Kontynuować od odpowiedzi: komponent `MenuCategory` otrzymuje props `category`
zgodny z typem `MenuCategoryData`. Następnie omówić funkcje
`showCategoryIntroduction`, `showMenuItem` oraz metodę `map`.

Po ukończeniu podstaw Reacta uczeń chce samodzielnie dokończyć witrynę restauracji
z pomocą asystenta, dopracować ją i przedstawić jako propozycję potencjalnemu klientowi.

Po ukończeniu podstaw uczeń chce samodzielnie zbudować menu restauracji. Asystent ma
podawać małe wskazówki i sprawdzać kod, a gotowe rozwiązanie dawać tylko na wyraźną prośbę.
