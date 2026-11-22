/*
Po co istnieje ten plik:

Cel:
SiteNavigation tworzy główne menu i przechowuje wszystkie jego linki w jednym miejscu.

Jak działa:
1. Element nav oznacza obszar nawigacji dla przeglądarki i czytników ekranu.
2. ul tworzy listę, a każdy li zawiera jeden link menu.
3. NavLink zmienia adres bez pełnego przeładowania strony.
4. NavLink przekazuje do funkcji obiekt state z wartością isActive.
5. Funkcja getNavigationLinkClassName zwraca klasę is-active dla linku,
   który prowadzi do aktualnie otwartej podstrony.
6. useTranslation i funkcja t pobierają podpisy linków w aktywnym języku.
7. Właściwość end sprawia, że Home jest aktywny tylko pod dokładnym adresem /.

Gdzie jest używany:
SiteHeader wyświetla SiteNavigation obok nazwy restauracji.

Dlaczego osobny plik pomaga:
Dodanie lub zmiana linku nie wymaga edytowania całego nagłówka.

Przykład:
Gdy aktualny adres to /contact.html, NavLink Contact otrzymuje klasę is-active.
NavLink Gallery jej nie otrzymuje, ponieważ prowadzi do innego adresu. Po zmianie
języka adres pozostaje ten sam, a zmieniają się tylko podpisy linków.
*/

// NavLink tworzy link i potrafi rozpoznać, czy jego adres jest aktywny.
// NavLinkRenderProps opisuje informacje przekazywane przez NavLink do funkcji.
import { NavLink, type NavLinkRenderProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// NavLink automatycznie wywołuje tę funkcję i przekazuje do niej obiekt state.
function getNavigationLinkClassName(state: NavLinkRenderProps) {
  // state.isActive ma wartość true, kiedy link prowadzi do aktualnej podstrony.
  if (state.isActive) {
    // Aktywny link otrzymuje klasę CSS is-active.
    return 'is-active'
  }

  // Nieaktywny link nie otrzymuje dodatkowej klasy CSS.
  return ''
}

// SiteNavigation tworzy główne menu witryny.
export function SiteNavigation() {
  const translation = useTranslation()

  return (
    // Element nav oznacza obszar nawigacji.
    <nav aria-label={translation.t('common.navigation.label')}>
      {/* ul tworzy całą listę nieuporządkowaną. */}
      <ul className="site-navigation">
        {/* Każdy li jest jednym elementem listy i zawiera jeden NavLink. */}
        <li>
          {/* to określa adres, a className wywołuje funkcję wybierającą klasę CSS. */}
          <NavLink to="/" end className={getNavigationLinkClassName}>{translation.t('common.navigation.home')}</NavLink>
        </li>
        <li>
          <NavLink to="/about.html" className={getNavigationLinkClassName}>{translation.t('common.navigation.about')}</NavLink>
        </li>
        <li>
          <NavLink to="/gallery.html" className={getNavigationLinkClassName}>{translation.t('common.navigation.gallery')}</NavLink>
        </li>
        <li>
          <NavLink to="/contact.html" className={getNavigationLinkClassName}>{translation.t('common.navigation.contact')}</NavLink>
        </li>
      </ul>
    </nav>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Import:
   NavLink pochodzi z biblioteki react-router-dom i tworzy link, który zmienia
   adres oraz wyświetlany komponent bez pełnego przeładowania strony.
   NavLinkRenderProps jest typem TypeScript opisującym stan przekazywany przez
   NavLink. Import z użyciem słowa type istnieje wyłącznie podczas sprawdzania
   kodu przez TypeScript i nie trafia do gotowego kodu JavaScript.

2. Funkcja getNavigationLinkClassName:
   NavLink wywołuje tę funkcję i przekazuje jej obiekt state. Właściwość
   state.isActive informuje, czy adres linku odpowiada aktualnemu adresowi
   przeglądarki. Jeżeli link jest aktywny, funkcja zwraca nazwę klasy CSS
   is-active. W przeciwnym przypadku zwraca undefined, czyli nie dodaje klasy.

3. Komponent SiteNavigation:
   Jest to komponent funkcyjny React. Słowo export pozwala importować go w
   SiteHeader.tsx i wyświetlać za pomocą <SiteNavigation />.

4. Element nav:
   <nav> semantycznie oznacza obszar nawigacji. aria-label nadaje mu dostępną
   nazwę, dzięki czemu czytnik ekranu rozpoznaje go jako główną nawigację.

5. Lista ul i elementy li:
   <ul> grupuje wszystkie pozycje menu, a każdy <li> reprezentuje jedną z nich.
   Klasa site-navigation umożliwia ustawienie wyglądu całego menu w CSS.

6. Właściwość to:
   Każdy NavLink ma właściwość to określającą adres docelowy.
   Przykładowo to="/about.html" otwiera opis lokalu, a to="/gallery.html" galerię.
   Adresy muszą odpowiadać trasom zdefiniowanym w app/router.tsx.

7. Właściwość className:
   Zamiast stałego tekstu otrzymuje funkcję getNavigationLinkClassName.
   React Router używa jej do automatycznego dodawania klasy is-active do linku
   prowadzącego do aktualnie otwartej strony.

8. Właściwość end linku Home:
   Adres strony głównej to "/", czyli początek każdego adresu w witrynie.
   Właściwość end wymaga dokładnego dopasowania, dlatego Home jest aktywny
   tylko na stronie "/", a nie również na "/cv.html" lub "/blog/".

9. Przepływ działania:
   Użytkownik wybiera link. React Router zmienia adres, router.tsx wybiera
   pasujący komponent strony, a SiteLayout.tsx wyświetla go w miejscu <Outlet />.
   Przeglądarka nie musi przeładowywać całego dokumentu index.html.

Podsumowanie:
Ten plik tworzy dostępne menu główne, obsługuje przechodzenie między stronami
i pozwala CSS wyróżnić link odpowiadający aktualnie otwartej stronie.

Zastosowanie praktyczne:
To menu widoczne w nagłówku. Gość wybiera w nim Home, About us, Gallery albo
Contact, a React zmienia podstronę bez przeładowania całego dokumentu.
*/
