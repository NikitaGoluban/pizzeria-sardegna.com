/*
Po co istnieje ten plik:

Cel:
router.tsx jest mapą adresów całej witryny. Określa, który komponent strony
React ma wyświetlić dla konkretnego adresu w przeglądarce.

Jak działa:
1. Importuje wszystkie kompletne komponenty podstron.
2. Komponent Routes otacza całą listę dostępnych tras.
3. Każdy Route łączy path, czyli adres, z element, czyli komponentem strony.
4. Trasa path="*" przechwytuje wszystkie nieznane adresy i pokazuje stronę 404.

Przykład:
/menu.html -> MenuPage
/contact.html -> ContactPage

Przykład zapisu trasy:
<Route path="/menu.html" element={<MenuPage />} /> oznacza: po otwarciu adresu
/menu.html wyświetl komponent MenuPage.

Gdzie jest używany:
Komponent AppRouter znajduje się w SiteLayout pomiędzy nagłówkiem i stopką.

Jak dodać nową podstronę:
Najpierw importujemy jej komponent, a następnie dodajemy nowy element Route.
*/

// Route łączy jeden adres z jednym komponentem podstrony.
import { Route } from 'react-router-dom'

// Routes otacza wszystkie dostępne trasy aplikacji.
import { Routes } from 'react-router-dom'

// Importujemy komponenty podstron, które router może wyświetlić.
import { NotFoundPage } from '../pages/NotFoundPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { ContactPage } from '../pages/ContactPage'
import { GalleryPage } from '../pages/GalleryPage'
import { MenuPage } from '../pages/MenuPage'
import { RestaurantAboutPage } from '../pages/RestaurantAboutPage'
import { RestaurantHomePage } from '../pages/RestaurantHomePage'

// export udostępnia AppRouter innym plikom.
// Nazwa zaczyna się wielką literą, ponieważ AppRouter jest komponentem React.
export function AppRouter() {
  // return zwraca Reactowi wszystkie trasy aplikacji.
  return (
    // Routes jest wspólnym kontenerem dla wszystkich elementów Route.
    <Routes>
      {/* path określa adres, a element określa wyświetlany komponent. */}
      <Route path="/" element={<RestaurantHomePage />} />
      <Route path="/menu.html" element={<MenuPage />} />
      <Route path="/about.html" element={<RestaurantAboutPage />} />
      <Route path="/gallery.html" element={<GalleryPage />} />
      <Route path="/contact.html" element={<ContactPage />} />
      <Route path="/privacy-policy.html" element={<PrivacyPage />} />

      {/* Gwiazdka pasuje do każdego nieznanego adresu i pokazuje stronę 404. */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Importy Route i Routes:
   Routes przechowuje wszystkie trasy. Każdy Route łączy jeden adres path
   z jednym komponentem element.

2. Importy komponentów:
   Wszystkie podstrony restauracji oraz strony techniczne 404 i polityki prywatności
   są zebrane w katalogu pages.

3. Komponent AppRouter:
   Zwraca Routes zawierający wszystkie dostępne podstrony aplikacji.

4. Route:
   path określa adres, a element określa komponent wyświetlany pod tym adresem.
   Na przykład /menu.html wyświetla komponent MenuPage.

5. Trasy statyczne:
   Adresy /, /menu.html, /about.html, /gallery.html i /contact.html prowadzą
   do konkretnych podstron Pizzeria Sardegna.

6. Zakres projektu:
   Router zawiera tylko strony potrzebne witrynie pizzerii oraz dwie strony
   techniczne: politykę prywatności i stronę błędu 404.

7. Trasa *:
   Gwiazdka pasuje do każdego nieznanego adresu i wyświetla NotFoundPage.

8. Export AppRouter:
   Pozwala zaimportować komponent w SiteLayout i wyświetlić aktualną podstronę
   pomiędzy wspólnym nagłówkiem i wspólną stopką.

Zastosowanie praktyczne:
Ten plik działa jak mapa całej witryny. Gdy użytkownik kliknie link w menu albo wpisze
adres w przeglądarce, AppRouter wybiera i wyświetla odpowiednią stronę.
*/
