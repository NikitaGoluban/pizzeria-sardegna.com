/*
Po co istnieje ten plik:

Cel:
MenuPage składa kompletną podstronę karty dań restauracji.

Jak jest zbudowany:
1. useTranslation pobiera treść w języku DE, EN albo IT.
2. usePageMeta ustawia przetłumaczony tytuł, opis i dane SEO typu Menu.
3. PageShell tworzy wspólny główny obszar strony.
4. PageIntro pokazuje tytuł i informację o cenach oraz alergenach.
5. Nawigacja z linkami # pozwala przewinąć stronę do konkretnej kategorii.
6. menuCategories importuje wspólne dane i ceny z menuData.ts.
7. map wywołuje showMenuCategory dla każdej kategorii.
8. MenuCategory wyświetla przetłumaczony tytuł i wszystkie pozycje.

Przepływ danych:
menuData.ts -> MenuPage -> MenuCategory -> MenuItemCard.

Dlaczego podział pomaga:
Treść menu jest oddzielona od sposobu jej wyświetlania. Nową potrawę można dodać
do danych bez kopiowania kodu JSX całej strony.

Przykład:
Po dodaniu Margherity do kategorii w menuData.ts MenuPage pobiera zaktualizowaną
tablicę. MenuCategory przechodzi po items, a MenuItemCard wyświetla Margheritę.
Cena jest wspólna, natomiast i18n wybiera niemiecki, angielski lub włoski opis.
*/

import { PageIntro } from '../components/ui/PageIntro'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { PageShell } from '../components/ui/PageShell'
import { Section } from '../components/ui/Section'
import { MenuCategory } from '../features/menu/components/MenuCategory'
import { MenuLegend } from '../features/menu/components/MenuLegend'
import { menuCategories } from '../features/menu/menuData'
import type { MenuCategoryData } from '../features/menu/types'
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

/*
PizzaInformation jest małym komponentem React odpowiedzialnym tylko za sekcję
„Rozmiary i ceny pizzy”. Komponent nie przechowuje tekstów na stałe. Pobiera je
ze słownika aktualnie wybranego języka, dzięki czemu ta sama sekcja działa po
niemiecku, angielsku i włosku.
*/
function PizzaInformation() {
  // Hook useTranslation udostępnia funkcję t(), która odczytuje tekst ze słownika i18n.
  const translation = useTranslation()

  // return opisuje elementy HTML, które React ma wyświetlić na stronie.
  return (
    // Section tworzy całą sekcję oraz jej nagłówek. Klucz title wskazuje tekst nagłówka w słowniku.
    <Section title={translation.t('menu.pizzaInformation.title')}>
      {/* ul tworzy listę, a każdy li jest jednym wierszem informacji o pizzy. */}
      <ul>
        {/* t() wybiera wartość klucza large dla aktualnie ustawionego języka. */}
        <li>{translation.t('menu.pizzaInformation.large')}</li>
        {/* Informacja o małej pizzy i różnicy w cenie. */}
        <li>{translation.t('menu.pizzaInformation.small')}</li>
        {/* Informacja o cenie dodatkowych składników. */}
        <li>{translation.t('menu.pizzaInformation.toppings')}</li>
        {/* Informacja o rozmiarze, składzie podstawowym i cenie pizzy familijnej. */}
        <li>{translation.t('menu.pizzaInformation.family')}</li>
      </ul>
    </Section>
  )
}

function showMenuCategory(category: MenuCategoryData) {
  if (category.id === 'traditional-pizza') {
    return (
      <Fragment key={category.id}>
        <PizzaInformation />
        <MenuCategory category={category} />
      </Fragment>
    )
  }

  return <MenuCategory key={category.id} category={category} />
}

export function MenuPage() {
  const translation = useTranslation()

  usePageMeta({
    title: translation.t('menu.meta.title'),
    description: translation.t('menu.meta.description'),
    path: '/menu.html',
    schemaType: 'Menu',
    schemaName: translation.t('menu.meta.schemaName'),
    locale: getLocaleForLanguage(translation.i18n.resolvedLanguage),
    servesCuisine: translation.t('seo.cuisine'),
    openingHours: [translation.t('seo.openingHours')],
  })

  return (
    <PageShell>
      <PageIntro eyebrow={translation.t('menu.eyebrow')} title={translation.t('menu.title')}>
        <p>{translation.t('menu.intro')}</p>
        <p className="menu-source-note">{translation.t('menu.note')}</p>
      </PageIntro>
      <nav className="menu-page-navigation" aria-label={translation.t('menu.categoryNavigation')}>
        <a href="#aperitifs">{translation.t('menu.categories.aperitifs.title')}</a>
        <a href="#hot-drinks">{translation.t('menu.categories.hot-drinks.title')}</a>
        <a href="#cold-drinks">{translation.t('menu.categories.cold-drinks.title')}</a>
        <a href="#beer">{translation.t('menu.categories.beer.title')}</a>
        <a href="#red-wine">{translation.t('menu.categories.red-wine.title')}</a>
        <a href="#white-wine">{translation.t('menu.categories.white-wine.title')}</a>
        <a href="#rose-wine">{translation.t('menu.categories.rose-wine.title')}</a>
        <a href="#digestifs">{translation.t('menu.categories.digestifs.title')}</a>
        <a href="#liqueurs">{translation.t('menu.categories.liqueurs.title')}</a>
        <a href="#whisky">{translation.t('menu.categories.whisky.title')}</a>
        <a href="#spirits">{translation.t('menu.categories.spirits.title')}</a>
        <a href="#cocktails">{translation.t('menu.categories.cocktails.title')}</a>
        <a href="#starters">{translation.t('menu.categories.starters.title')}</a>
        <a href="#salads">{translation.t('menu.categories.salads.title')}</a>
        <a href="#traditional-pizza">{translation.t('menu.categories.traditional-pizza.title')}</a>
        <a href="#house-pizza">{translation.t('menu.categories.house-pizza.title')}</a>
        <a href="#side-dishes">{translation.t('menu.categories.side-dishes.title')}</a>
        <a href="#desserts">{translation.t('menu.categories.desserts.title')}</a>
        <a href="#allergens">{translation.t('menu.legend.navigation')}</a>
      </nav>
      {menuCategories.map(showMenuCategory)}
      <MenuLegend />
      <Section title={translation.t('menu.orderTitle')}>
        <p>{translation.t('menu.orderBeforePhone')} <a href="tel:+4964284474948">+49 6428 4474948</a> {translation.t('menu.orderAfterPhone')}</p>
      </Section>
    </PageShell>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Importy:
   PageIntro, PageShell i Section tworzą wspólny układ strony. MenuCategory wyświetla
   jedną kategorię, a menuCategories zawiera wszystkie dane potraw oraz napojów.

2. usePageMeta:
   Ustawia niemiecki tytuł, opis, adres canonical oraz dane SEO typu Menu.

3. PageIntro:
   Pokazuje tytuł Speisekarte i ważną informację, że ceny, dostępność oraz alergeny
   należy potwierdzić z personelem restauracji.

4. Nawigacja kategorii:
   Zwykłe linki z # przewijają stronę do wybranej części menu bez zmiany podstrony.

5. Funkcja showMenuCategory:
   Jest to zwykła nazwana funkcja. Otrzymuje jedną kategorię i zwraca jeden komponent
   MenuCategory. Dzięki nazwie łatwo znaleźć ją wyżej w tym samym pliku.

6. menuCategories.map:
   Metoda map otrzymuje funkcję showMenuCategory i wywołuje ją dla każdej kategorii
   zapisanej w tablicy menuCategories.

7. Ostatnia sekcja:
   Pokazuje numer telefonu potrzebny do zamówienia lub rezerwacji.

Zastosowanie praktyczne:
Ta podstrona wyświetla pełną kartę odczytaną z najnowszych zdjęć menu. Użytkownik może
szybko przejść do pizzy, sałatek, napojów lub deserów i zobaczyć ceny oraz składniki.
*/
