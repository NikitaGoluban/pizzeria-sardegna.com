/*
Po co istnieje ten plik:

Cel:
App jest pierwszym głównym komponentem React renderowanym przez main.tsx.

Jak działa:
1. BrowserRouter włącza obsługę adresów dla całej aplikacji.
2. SiteLayout tworzy wspólny szkielet z nagłówkiem, podstroną i stopką.
3. Wszystkie Link, NavLink, Routes i Route działają, ponieważ znajdują się
   wewnątrz BrowserRouter.

Przepływ:
main.tsx renderuje App -> App uruchamia BrowserRouter -> SiteLayout wyświetla witrynę.

Dlaczego ten plik jest mały:
App odpowiada tylko za uruchomienie głównej konfiguracji. Szczegóły układu i stron
pozostają w osobnych plikach, dzięki czemu łatwiej je znaleźć i zrozumieć.

Przykład:
Gdy użytkownik otwiera /menu.html, BrowserRouter pozwala AppRouter rozpoznać ten
adres. SiteLayout zachowuje nagłówek i stopkę, a w środku pojawia się MenuPage.
*/

// BrowserRouter włącza obsługę adresów w aplikacji React.
import { BrowserRouter } from 'react-router-dom'

// SiteLayout zawiera nagłówek, aktualną podstronę i stopkę.
import { SiteLayout } from '../components/layout/SiteLayout'

// export udostępnia komponent App innym plikom, na przykład main.tsx.
// Nazwa App zaczyna się wielką literą, ponieważ jest to komponent React.
export function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  )
}

/*
Pełne wyjaśnienie pliku:

1. BrowserRouter:
   Jest komponentem biblioteki react-router-dom. Włącza obsługę adresów
   dla wszystkich komponentów znajdujących się w środku.

2. Import SiteLayout:
   SiteLayout zawiera wspólny układ witryny oraz komponent AppRouter.

3. Komponent App:
   Jest pierwszym komponentem renderowanym przez main.tsx. Uruchamia BrowserRouter
   i wyświetla wewnątrz niego SiteLayout.

4. Przepływ:
   BrowserRouter obsługuje adres. SiteLayout pokazuje stały nagłówek i stopkę,
   a AppRouter znajdujący się w SiteLayout wybiera aktualną podstronę.

Ten plik jest celowo mały: odpowiada tylko za uruchomienie routera.

Zastosowanie praktyczne:
App łączy punkt startowy main.tsx z BrowserRouter i układem całej witryny.
*/
