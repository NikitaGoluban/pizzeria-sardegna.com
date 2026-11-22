/*
Po co istnieje ten plik:

Cel:
usePageMeta.ts przechowuje jeden wspólny mechanizm ustawiania metadanych każdej
podstrony. Metadane są informacjami zapisanymi w <head>, na przykład tytułem karty,
opisem dla wyszukiwarki oraz adresem canonical.

To nie jest komponent wizualny:
Hook usePageMeta nie zwraca JSX i nie tworzy elementu widocznego w treści strony.
Po wyrenderowaniu podstrony zmienia informacje w document.head.

Jak działa:
1. Podstrona wywołuje usePageMeta i przekazuje obiekt z własnymi danymi.
2. Interfejs PageMeta sprawdza wymagane i opcjonalne wartości.
3. useEffect uruchamia funkcję updatePageMeta po renderze strony.
4. Funkcje pomocnicze odnajdują istniejące elementy w <head> albo je tworzą.
5. Hook ustawia title, meta description, Open Graph, Twitter Card i canonical.
6. Na końcu zapisuje JSON-LD opisujący restaurację, witrynę i aktualną podstronę.

Przepływ danych:
RestaurantHomePage -> usePageMeta(dane strony) -> document.head -> karta przeglądarki
i informacje dostępne dla wyszukiwarek oraz podglądów udostępnianych linków.

Przykład:
RestaurantHomePage przekazuje title oraz path="/". Hook ustawia ten title na karcie
przeglądarki i buduje pełny adres canonical https://pizzeria-sardegna.com/.

Dlaczego osobny hook pomaga:
Bez niego każda podstrona musiałaby osobno wyszukiwać i zmieniać wiele elementów
w <head>. Tutaj cały trudniejszy kod znajduje się w jednym miejscu, a strony
przekazują tylko własne dane.
*/

// useEffect wykonuje kod po wyrenderowaniu komponentu i po zmianie zależności.
import { useEffect } from 'react'

// Wspólne wartości używane przez wszystkie podstrony.
const siteUrl = 'https://pizzeria-sardegna.com'
const defaultAuthor = 'Pizzeria Sardegna Stadtallendorf'
const defaultKeywords = 'Pizzeria Sardegna, Stadtallendorf, Pizza, italienisches Restaurant, Pasta, Salate, Abholung, Reservierung, Stadionweg 2'

// PageMeta opisuje dane, które podstrona może przekazać do usePageMeta.
// Pola bez ? są wymagane. Pola ze znakiem ? są opcjonalne.
export interface PageMeta {
  title: string
  description: string
  path: string
  author?: string
  keywords?: string
  robots?: string
  type?: string
  locale?: string
  schemaType?: string
  schemaName?: string
  sameAs?: string[]
  servesCuisine?: string
  openingHours?: string[]
}

// Jeżeli podstrona przekazała tekst, funkcja go zwraca.
// Jeżeli tekstu brakuje, funkcja zwraca przygotowaną wartość domyślną.
function getTextOrDefault(value: string | undefined, defaultValue: string) {
  if (value === undefined) {
    return defaultValue
  }

  return value
}

// Jeżeli lista linków sameAs nie istnieje, funkcja zwraca pustą tablicę.
function getListOrEmptyList(value: string[] | undefined) {
  if (value === undefined) {
    return []
  }

  return value
}

// Funkcja wyszukuje odpowiedni meta tag w <head>.
// Gdy tag nie istnieje, tworzy go. Następnie ustawia jego treść content.
function setMetaTag(attribute: string, value: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)

  if (element === null) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

// Funkcja wyszukuje albo tworzy link canonical i ustawia jego pełny adres.
function setCanonicalUrl(url: string) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (element === null) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

// To jest własny hook używany przez wszystkie kompletne podstrony.
export function usePageMeta(meta: PageMeta) {
  // useEffect uruchamia updatePageMeta po wyświetleniu strony.
  useEffect(function updatePageMeta() {
    // Łączymy główny adres witryny ze ścieżką aktualnej podstrony.
    const canonicalUrl = `${siteUrl}${meta.path}`

    // Dane opcjonalne otrzymują wartości domyślne, jeżeli strona ich nie podała.
    const schemaType = getTextOrDefault(meta.schemaType, 'WebPage')
    const schemaName = getTextOrDefault(meta.schemaName, meta.title)

    // restaurantEntity opisuje restaurację niezależnie od aktualnej podstrony.
    const restaurantEntity = {
      '@type': 'Restaurant',
      '@id': `${siteUrl}/#restaurant`,
      name: defaultAuthor,
      url: `${siteUrl}/`,
      telephone: '+49 6428 4474948',
      servesCuisine: getTextOrDefault(meta.servesCuisine, 'Italienisch'),
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Stadionweg 2',
        postalCode: '35260',
        addressLocality: 'Stadtallendorf',
        addressCountry: 'DE',
      },
      openingHours: meta.openingHours ?? ['Dienstag-Sonntag 17:00-23:30'],
      hasMap: 'https://www.google.com/maps/search/?api=1&query=Pizzeria+Sardegna+Stadtallendorf',
      sameAs: getListOrEmptyList(meta.sameAs),
    }

    // websiteEntity opisuje całą witrynę Pizzeria Sardegna.
    const websiteEntity = {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: defaultAuthor,
      publisher: { '@id': `${siteUrl}/#restaurant` },
    }

    // pageEntity opisuje aktualną podstronę, na przykład Home albo Menu.
    const pageEntity = {
      '@type': schemaType,
      '@id': `${canonicalUrl}#webpage`,
      name: schemaName,
      description: meta.description,
      url: canonicalUrl,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#restaurant` },
    }

    // structuredData łączy trzy powyższe obiekty w jeden zapis JSON-LD.
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [restaurantEntity, websiteEntity, pageEntity],
    }

    // Ustawiamy tytuł karty przeglądarki.
    document.title = meta.title

    // Ustawiamy podstawowe meta tagi oraz dane używane przy udostępnianiu linków.
    setMetaTag('name', 'description', meta.description)
    setMetaTag('name', 'author', getTextOrDefault(meta.author, defaultAuthor))
    setMetaTag('name', 'keywords', getTextOrDefault(meta.keywords, defaultKeywords))
    setMetaTag('name', 'robots', getTextOrDefault(meta.robots, 'index, follow, max-image-preview:large'))
    setMetaTag('property', 'og:title', meta.title)
    setMetaTag('property', 'og:description', meta.description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:type', getTextOrDefault(meta.type, 'website'))
    setMetaTag('property', 'og:site_name', defaultAuthor)
    setMetaTag('property', 'og:locale', getTextOrDefault(meta.locale, 'de_DE'))
    setMetaTag('name', 'twitter:card', 'summary')
    setMetaTag('name', 'twitter:title', meta.title)
    setMetaTag('name', 'twitter:description', meta.description)
    setCanonicalUrl(canonicalUrl)

    // Wyszukujemy element script przeznaczony na dane JSON-LD.
    let schemaElement = document.head.querySelector('script[data-seo-json-ld]')

    // Jeżeli element nie istnieje, tworzymy go i dodajemy do <head>.
    if (schemaElement === null) {
      schemaElement = document.createElement('script')
      schemaElement.setAttribute('type', 'application/ld+json')
      schemaElement.setAttribute('data-seo-json-ld', 'true')
      document.head.appendChild(schemaElement)
    }

    // Zamieniamy obiekt structuredData na tekst JSON i zapisujemy go w elemencie script.
    schemaElement.textContent = JSON.stringify(structuredData)
  }, [
    // Efekt uruchomi się ponownie, gdy zmieni się jedna z poniższych wartości.
    meta.author,
    meta.description,
    meta.keywords,
    meta.locale,
    meta.openingHours,
    meta.path,
    meta.robots,
    meta.sameAs,
    meta.schemaName,
    meta.schemaType,
    meta.servesCuisine,
    meta.title,
    meta.type,
  ])
}

/*
Pełne wyjaśnienie pliku:

1. siteUrl:
   Przechowuje główny adres produkcyjnej witryny, który jest potrzebny do canonical,
   Open Graph i JSON-LD.

2. PageMeta:
   Opisuje dane SEO jednej podstrony. title, description i path wskazują podstawowe
   dane, a opcjonalne wartości pozwalają ustawić autora, keywords, robots, locale,
   typ strony, dane schema oraz listę sameAs.

3. getTextOrDefault i getListOrEmptyList:
   Zapewniają proste wartości domyślne dla danych, których podstrona nie przekazała.

4. setMetaTag:
   Wyszukuje istniejący meta tag albo tworzy go i ustawia jego content. Dzięki temu
   hook nie dodaje wielu kopii tego samego tagu przy kolejnych zmianach trasy.

5. setCanonicalUrl:
   Ustawia jeden link canonical wskazujący główny adres aktualnej strony.

6. useEffect i updatePageMeta:
   useEffect wykonuje updatePageMeta po renderze oraz po zmianie zależności. Funkcja
   aktualizuje document.head zgodnie z danymi aktualnej podstrony.

7. usePageMeta:
   Zmienia tytuł karty, description, author, keywords, robots, Open Graph, Twitter Card
   i canonical. Tworzy JSON-LD jako graf Restaurant, WebSite i aktualnej WebPage.

8. Tablica zależności:
   Efekt uruchamia się po pierwszym renderze oraz wtedy, gdy zmieni się dowolna wartość
   metadanych przekazana przez stronę.

9. Przykład:
   MenuPage przekazuje path /menu.html i własny title. Hook tworzy canonical
   https://pizzeria-sardegna.com/menu.html oraz ustawia tytuł karty dla menu.

Zastosowanie praktyczne:
Każda podstrona pizzerii przekazuje własny obiekt do tego hooka. Dzięki temu Home, Menu,
About us, Gallery i Contact mają różne tytuły, opisy i adresy canonical, mimo że
korzystają z jednego mechanizmu zarządzania elementem <head>.
*/
