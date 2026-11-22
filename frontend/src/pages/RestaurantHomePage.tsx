/*
Po co istnieje ten plik:

Cel:
RestaurantHomePage tworzy kompletną stronę główną i jest pierwszą treścią,
którą widzi większość odwiedzających.

Jak jest zbudowany:
1. useTranslation wybiera wszystkie teksty w języku DE, EN albo IT.
2. usePageMeta ustawia przetłumaczoną nazwę, opis i dane SEO typu Restaurant.
3. PageShell zapewnia wspólny główny obszar strony.
4. PageIntro pokazuje nazwę, opis oraz przyciski telefonu i menu.
5. Pierwsza Section prezentuje lokal, godziny, adres i sposób obsługi.
6. Kolejna Section przedstawia główne grupy dań.
7. Ostatnia Section prowadzi do mapy oraz strony kontaktowej.

Gdzie jest używany:
router.tsx wyświetla RestaurantHomePage pod głównym adresem /.

Cel dla użytkownika:
Strona szybko odpowiada na pytania: co to za lokal, gdzie się znajduje,
kiedy jest otwarty i jak zobaczyć menu lub skontaktować się z restauracją.

Przykład:
Użytkownik otwiera adres /. Może nacisnąć Call, aby zadzwonić, albo View our menu,
aby przejść przez React Router do /menu.html i zobaczyć MenuPage. Po wybraniu IT
te same elementy pobierają włoskie teksty ze słownika, ale układ pozostaje wspólny.
*/

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageIntro } from '../components/ui/PageIntro'
import { PageShell } from '../components/ui/PageShell'
import { Section } from '../components/ui/Section'
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
      <PageIntro eyebrow={translation.t('home.eyebrow')} title={translation.t('home.title')}>
        <p>{translation.t('home.intro')}</p>
        <div className="hero-actions">
          <a className="button" href="tel:+4964284474948">{translation.t('home.call')}</a>
          <Link className="button button-secondary" to="/menu.html">{translation.t('home.viewMenu')}</Link>
        </div>
      </PageIntro>

      <Section title={translation.t('home.welcome.title')}>
        <p>{translation.t('home.welcome.firstText')}</p>
        <p>{translation.t('home.welcome.secondText')}</p>
        <div className="restaurant-facts">
          <div>
            <strong>{translation.t('home.welcome.hours')}</strong>
            <span>{translation.t('home.welcome.open')}</span>
            <span>{translation.t('home.welcome.closed')}</span>
          </div>
          <div>
            <strong>{translation.t('home.welcome.address')}</strong>
            <span>Stadionweg 2</span>
            <span>35260 Stadtallendorf</span>
          </div>
          <div>
            <strong>{translation.t('home.welcome.service')}</strong>
            <span>{translation.t('home.welcome.dineIn')}</span>
            <span>{translation.t('home.welcome.reservations')}</span>
          </div>
        </div>
      </Section>
      
      <Section title={translation.t('home.kitchen.title')}>
        <div className="menu-highlights">
          <article>
            <span className="menu-icon" aria-hidden="true">🍕</span>
            <h3>{translation.t('home.kitchen.pizzaTitle')}</h3>
            <p>{translation.t('home.kitchen.pizzaText')}</p>
          </article>
          <article>
            <span className="menu-icon" aria-hidden="true">🍝</span>
            <h3>{translation.t('home.kitchen.pastaTitle')}</h3>
            <p>{translation.t('home.kitchen.pastaText')}</p>
          </article>
          <article>
            <span className="menu-icon" aria-hidden="true">🥗</span>
            {/* aria-hidden="true" Ukryj ten element przed czytnikami ekranu tak zeby przez przypadek emoji nie był widoczny */}
            <h3>{translation.t('home.kitchen.saladsTitle')}</h3>
            <p>{translation.t('home.kitchen.saladsText')}</p>
          </article>
        </div>
        <Link to="/menu.html">{translation.t('home.kitchen.discover')}</Link>
      </Section>

      <Section title={translation.t('home.moments.title')}>
        <p>{translation.t('home.moments.text')}</p>
        <div className="project-update-links">
          <a href="https://www.google.com/maps/search/?api=1&query=Pizzeria+Sardegna+Stadtallendorf" target="_blank" rel="noreferrer">{translation.t('home.moments.directions')}</a>
          <Link to="/contact.html">{translation.t('home.moments.contact')}</Link>
        </div>
      </Section>
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

3. PageIntro:
   Tworzy pierwsze wrażenie strony: nazwę lokalu, krótki opis i dwa główne działania.
   Pierwszy przycisk rozpoczyna rozmowę telefoniczną, a drugi prowadzi do menu.

4. Welcome to Pizzeria Sardegna:
   Przedstawia lokal, adres, godziny otwarcia i podstawowe informacje o obsłudze.

5. From our kitchen:
   Pokazuje trzy najważniejsze grupy dań. Każdy article jest osobnym blokiem,
   który można później rozszerzyć o zdjęcie, cenę i link do szczegółowego menu.

6. A place for good moments:
   Końcowa sekcja prowadzi do mapy Google oraz strony kontaktowej.

Zastosowanie praktyczne:
To strona widoczna po otwarciu aplikacji pod adresem /. Jej celem jest natychmiastowe
pokazanie, czym jest restauracja, gdzie się znajduje i jak zarezerwować stolik.
*/
