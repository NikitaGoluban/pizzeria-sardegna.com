/*
Po co istnieje ten plik:

Cel:
SiteLayout jest wspólnym szkieletem całej witryny. Zapewnia wszystkim podstronom
taką samą kolejność głównych części.

Jak działa:
1. useTranslation pobiera tłumaczenie linku pomocniczego w aktywnym języku.
2. Link pomocniczy pozwala przejść klawiaturą bezpośrednio do głównej treści.
3. SiteHeader pokazuje stały nagłówek.
4. AppRouter wybiera podstronę pasującą do aktualnego adresu.
5. SiteFooter pokazuje stałą stopkę.

Części stałe:
SiteHeader i SiteFooter pozostają widoczne podczas zmiany podstrony.

Część zmienna:
AppRouter może wyświetlić MenuPage, ContactPage albo inną stronę.

Gdzie jest używany:
App umieszcza SiteLayout wewnątrz BrowserRouter.

Dlaczego ten plik pomaga:
Nie dodajemy nagłówka i stopki ręcznie do każdej podstrony.

Przykład:
Dla adresu /menu.html SiteLayout pokazuje kolejno SiteHeader, MenuPage wybrane
przez AppRouter oraz SiteFooter. Dla /contact.html zmienia się tylko MenuPage
na ContactPage, a nagłówek i stopka pozostają te same. Po wybraniu EN link
pomocniczy zmienia tekst na „Skip to main content”.
*/

import { AppRouter } from '../../app/router'
import { useTranslation } from 'react-i18next'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

// Wspólna rama zapewnia każdej stronie ten sam nagłówek i tę samą stopkę.
export function SiteLayout() {
  const translation = useTranslation()

  return (
    <div className="site-shell"> {/* zawartość strony, po miedzy <div ... </div> */}
      <a className="skip-link" href="#main-content">{translation.t('common.skipToMain')}</a>

      {/* SiteHeader — nagłówek pozostaje na każdej stronie. */}
      <SiteHeader />

      {/* AppRouter — wyświetlana podstrona zmienia się na podstawie adresu. */}
      <AppRouter />

      {/* SiteFooter — stopka pozostaje na każdej stronie. */}
      <SiteFooter />
    </div>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Import AppRouter:
   AppRouter sprawdza adres i wyświetla pasującą podstronę.

2. Importy nagłówka i stopki:
   SiteHeader oraz SiteFooter tworzą stałe elementy wspólne dla całej witryny.

3. Komponent SiteLayout:
   Jest główną ramą interfejsu całej witryny.

4. site-shell:
   Zewnętrzny div pozwala CSS ustawić nagłówek, treść i stopkę w układzie
   zajmującym co najmniej całą wysokość ekranu.

5. Skip link:
   Link Skip to main content pozwala użytkownikowi klawiatury ominąć menu i
   przejść bezpośrednio do elementu o identyfikatorze main-content.

6. AppRouter:
   <AppRouter /> wyświetla komponent pasujący do aktualnego adresu, na przykład
   RestaurantHomePage albo MenuPage.

Nagłówek i stopka pozostają na miejscu, a zmienia się tylko zawartość AppRouter.

Zastosowanie praktyczne:
SiteLayout jest wspólnym szkieletem całej witryny. Nie dodajemy nagłówka i stopki
w każdej stronie osobno; AppRouter wyświetla pomiędzy nimi aktualną podstronę.
*/
