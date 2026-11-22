/*
Po co istnieje ten plik:

Cel:
NotFoundPage obsługuje adresy, których nie ma na liście znanych tras.

Jak działa:
1. Route z path="*" w router.tsx wybiera ten komponent dla nieznanego adresu.
2. useTranslation pobiera komunikat błędu w aktywnym języku.
3. usePageMeta ustawia przetłumaczony tytuł i robots="noindex, follow".
4. PageShell i PageIntro zachowują wygląd pozostałych stron.
5. Link prowadzi użytkownika z powrotem do strony głównej.

Dlaczego ta strona jest potrzebna:
Zamiast pustego ekranu użytkownik otrzymuje jasny komunikat 404 i drogę powrotu.

Przykład:
Adres /nieistniejaca-strona nie pasuje do zwykłych Route. Trasa * wybiera wtedy
NotFoundPage, który pokazuje błąd 404 i link Return to the homepage.
*/

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageIntro } from '../components/ui/PageIntro'
import { PageShell } from '../components/ui/PageShell'
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

export function NotFoundPage() {
  const translation = useTranslation()

  usePageMeta({
    title: translation.t('notFound.metaTitle'),
    description: translation.t('notFound.metaDescription'),
    path: window.location.pathname,
    robots: 'noindex, follow',
    locale: getLocaleForLanguage(translation.i18n.resolvedLanguage),
    servesCuisine: translation.t('seo.cuisine'),
    openingHours: [translation.t('seo.openingHours')],
  })

  return (
    <PageShell>
      <PageIntro eyebrow="404" title={translation.t('notFound.title')}>
        <p>{translation.t('notFound.text')}</p>
        <Link to="/">{translation.t('notFound.back')}</Link>
      </PageIntro>
    </PageShell>
  )
}

/*
Pełne wyjaśnienie pliku:

1. NotFoundPage jest przypisany w router.tsx do trasy * pasującej do nieznanych adresów.
2. usePageMeta ustawia jasny tytuł Page not found na karcie przeglądarki.
3. PageIntro wyświetla kod 404 i informuje, że wskazana strona nie istnieje.
4. Link pochodzi z React Routera i prowadzi do / bez przeładowania całej aplikacji.
5. PageShell zachowuje wspólną szerokość i semantyczny obszar main.

Zastosowanie praktyczne:
Ta strona pojawia się automatycznie, gdy użytkownik otworzy nieistniejący adres.
Zamiast pustego ekranu zobaczy informację 404 i link prowadzący z powrotem do Home.
*/
