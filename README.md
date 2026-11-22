# Pizzeria Sardegna

Kod źródłowy strony restauracji Pizzeria Sardegna w Stadtallendorf.

Strona produkcyjna: <https://pizzeria-sardegna.com>

## Struktura

```text
frontend/  React, TypeScript i Vite
backend/   miejsce na przyszły kod backendu
```

Zdjęcia robocze, materiały do analizy, kopie wdrożeń, logi Pleska oraz zawartość
`httpdocs` nie należą do repozytorium i nie są przesyłane do GitHub.

## Uruchomienie frontendu

```bash
cd frontend
npm install
npm run dev
```

## Kontrola jakości

```bash
cd frontend
npm run lint
npm run build
```

Wynik produkcyjnego buildu powstaje w `frontend/dist/`. Ten katalog jest
generowany automatycznie i nie jest zapisywany w Git.

