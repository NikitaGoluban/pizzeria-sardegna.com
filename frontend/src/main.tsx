/*
Po co istnieje ten plik:

Cel:
main.tsx jest punktem startowym całego frontendu. Przeglądarka uruchamia ten plik
po wczytaniu index.html.

Jak działa:
1. Pobiera narzędzia StrictMode i createRoot z bibliotek Reacta.
2. Importuje i18n.ts, który przygotowuje trzy języki witryny.
3. Pobiera główny komponent App z naszego projektu.
4. Wczytuje główny plik CSS.
5. Odnajduje pusty element <div id="root"> w index.html.
6. Tworzy w tym elemencie korzeń Reacta i renderuje komponent App.

Przepływ:
index.html -> main.tsx -> App.tsx -> SiteLayout -> aktualna podstrona.

Dlaczego osobny plik pomaga:
Kod uruchamiający aplikację pozostaje oddzielony od kodu stron i komponentów.
Zwykle zmieniamy go bardzo rzadko.

Przykład:
index.html daje pusty <div id="root">. main.tsx odnajduje ten element i wstawia
do niego <App />, dzięki czemu w przeglądarce pojawia się cała witryna pizzerii.
*/

// Import pobiera StrictMode z biblioteki React.
// StrictMode pomaga wykrywać problemy podczas tworzenia aplikacji.
import { StrictMode } from 'react'

// Import pobiera funkcję createRoot.
// createRoot pozwala połączyć React z wybranym elementem HTML.
import { createRoot } from 'react-dom/client'

// Ten import uruchamia tłumaczenia i18n przed wyświetleniem aplikacji.
import './i18n'

// Import pobiera nasz główny komponent App z pliku app/App.tsx.
import { App } from './app/App'

// Ten import wczytuje główny plik ze stylami CSS.
import './styles/index.css'

// document.getElementById wyszukuje w index.html element z id="root".
// Znak ! informuje TypeScript, że ten element na pewno istnieje.
const rootElement = document.getElementById('root')!

// createRoot przygotowuje znaleziony element HTML dla aplikacji React.
const reactRoot = createRoot(rootElement)

// render umieszcza komponent App w przygotowanym elemencie HTML.
// StrictMode otacza App i sprawdza kod podczas programowania.
reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
Pełne wyjaśnienie pliku:

1. Import StrictMode:
   StrictMode jest narzędziem React używanym podczas programowania. Pomaga wykrywać
   niebezpieczne operacje i problemy w komponentach. Nie tworzy widocznego elementu HTML.

2. Import createRoot:
   createRoot pochodzi z react-dom/client i łączy aplikację React z dokumentem HTML.

3. Import App:
   App jest pierwszym komponentem aplikacji. Uruchamia konfigurację routera.

4. Import CSS:
   styles/index.css jest głównym punktem wejścia dla wszystkich stylów strony.

5. rootElement:
   document.getElementById('root') wyszukuje element <div id="root"> znajdujący się
   w index.html. Znak ! informuje TypeScript, że ten element na pewno istnieje.

6. reactRoot:
   createRoot(rootElement) przygotowuje znaleziony element dla Reacta.

7. reactRoot.render(...):
   React umieszcza komponent App w przygotowanym elemencie. StrictMode otacza App
   wyłącznie w celu dodatkowego sprawdzania kodu.

Przepływ: index.html -> main.tsx -> App.tsx -> router.tsx -> wybrana strona.

Zastosowanie praktyczne:
To jest punkt uruchamiający cały frontend. Po otwarciu witryny przeglądarka wykonuje
ten plik, a on umieszcza aplikację React w pustym elemencie root z index.html.
*/
