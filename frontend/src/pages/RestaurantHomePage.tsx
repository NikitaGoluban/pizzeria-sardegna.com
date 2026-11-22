/*
Po co istnieje ten plik:

Cel:
RestaurantHomePage tworzy kompletną stronę główną i jest pierwszą treścią,
którą widzi większość odwiedzających.

Jak jest zbudowany:
1. useTranslation wybiera wszystkie teksty w języku DE, EN albo IT.
2. usePageMeta ustawia przetłumaczoną nazwę, opis i dane SEO typu Restaurant.
3. PageShell zapewnia wspólny główny obszar strony.
4. home-page-intro pokazuje jasną kartę z powitaniem Simone, zdjęcie i przyciski.
5. RestaurantMenu wyświetla bezpośrednio pełną kartę dań, ceny i alergeny.

Gdzie jest używany:
router.tsx wyświetla RestaurantHomePage pod głównym adresem /.

Cel dla użytkownika:
Strona szybko odpowiada na pytania: co to za lokal, gdzie się znajduje,
kiedy jest otwarty i jak zobaczyć menu lub skontaktować się z restauracją.

Przykład:
Użytkownik otwiera adres /. Może nacisnąć Call, aby zadzwonić, albo View our menu,
aby przewinąć tę samą stronę do sekcji #menu. Po wybraniu IT te same elementy
pobierają włoskie teksty ze słownika, ale układ pozostaje wspólny.
*/

import { useTranslation } from 'react-i18next'
import { PageShell } from '../components/ui/PageShell'
import { RestaurantMenu } from '../features/menu/components/RestaurantMenu'
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

// usePageMeta jest własnym hookiem Reacta.
// Hook to funkcja, która dodaje komponentowi określone zachowanie.
// W tym przypadku zachowaniem jest:
// ustawienie tytułu karty
// ustawienie description
// ustawienie adresu canonical
// ustawienie danych SEO
// usePageMeta nie wyświetla treści w środku strony. Zmienia informacje w <head> dokumentu.
export function RestaurantHomePage() {
  const translation = useTranslation()

  usePageMeta({
    title: translation.t('home.meta.title'),
    // title: ustawia tekst widoczny na karcie przeglądarki.
    description: translation.t('home.meta.description'),
    path: '/',
    schemaType: 'Restaurant',
    schemaName: translation.t('home.meta.schemaName'),
    keywords: translation.t('home.meta.keywords'),
    locale: getLocaleForLanguage(translation.i18n.resolvedLanguage),
    servesCuisine: translation.t('seo.cuisine'),
    openingHours: [translation.t('seo.openingHours')],
  })

  return (
    <PageShell>
      <header className="page-intro home-page-intro">
        <p className="eyebrow">{translation.t('home.eyebrow')}</p>

        {/* Jasna karta łączy powitanie i zdjęcie w jeden dekoracyjny element. */}
        <div className="home-welcome-card">
          <div className="home-welcome-copy">
            <h1>{translation.t('home.title')}</h1>
            <div className="home-paper-welcome">
              <p>{translation.t('home.paperWelcome.greeting')}</p>
              <p>{translation.t('home.paperWelcome.stay')}</p>
              <p>{translation.t('home.paperWelcome.appetite')}</p>
              <p className="home-paper-signature">{translation.t('home.paperWelcome.signature')}</p>
            </div>

            <div className="hero-actions">
              <a className="button" href="tel:+4964284474948">{translation.t('home.call')}</a>
              <a className="button button-secondary" href="#menu">{translation.t('home.viewMenu')}</a>
            </div>
          </div>

          {/* Zdjęcie pozostaje niewidoczne na telefonach i dekoracyjne dla czytników ekranu. */}
          <div className="home-hero-photo" aria-hidden="true" />
        </div>
      </header>

      {/* Pełna karta dań znajduje się bezpośrednio na stronie głównej. */}
      <RestaurantMenu />
    </PageShell>
  )
}

/*
Pełne wyjaśnienie pliku:

1. RestaurantHomePage:
   Jest to strona główna witryny Pizzeria Sardegna w Stadtallendorf.
   Zbiera najważniejsze informacje potrzebne gościowi restauracji.

2. usePageMeta:
   Ustawia nazwę restauracji, opis, słowa kluczowe i typ danych strukturalnych
   Restaurant. Dzięki temu później możemy dodać pełne dane restauracji dla SEO.

3. home-page-intro i home-welcome-card:
   Tworzą pierwsze wrażenie strony. Jasna karta zawiera powitanie z papierowego menu
   i dwa działania: pierwszy przycisk rozpoczyna rozmowę, a drugi prowadzi do menu.

4. RestaurantMenu:
   Pokazuje pełną kartę restauracji bezpośrednio na stronie głównej. Dane nadal
   pochodzą z menuData.ts, dlatego każdą cenę poprawiamy tylko w jednym miejscu.

Zastosowanie praktyczne:
To strona widoczna po otwarciu aplikacji pod adresem /. Jej celem jest natychmiastowe
pokazanie, czym jest restauracja, gdzie się znajduje i jak zarezerwować stolik.
*/
