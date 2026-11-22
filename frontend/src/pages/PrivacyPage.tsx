/*
Po co istnieje ten plik:

Cel:
PrivacyPage tworzy osobną podstronę przeznaczoną na politykę prywatności.

Jak jest zbudowany:
1. useTranslation wybiera podpisy w aktywnym języku.
2. usePageMeta ustawia przetłumaczony tytuł i opis strony prawnej.
3. PageShell zapewnia wspólny główny obszar treści.
4. PageIntro pokazuje główny tytuł.
5. Section wyznacza miejsce na pełny tekst polityki.

Gdzie jest używany:
router.tsx wyświetla PrivacyPage pod adresem /privacy-policy.html, a SiteFooter
zawiera prowadzący do niego Link.

Stan obecny:
Struktura jest gotowa, ale właściwy tekst prawny trzeba uzupełnić przed publikacją.

Przykład:
Kliknięcie Privacy Policy w SiteFooter otwiera /privacy-policy.html. Router wybiera
PrivacyPage, a tekst prawny pojawi się później wewnątrz Section.
*/

import { PageIntro } from '../components/ui/PageIntro'
import { useTranslation } from 'react-i18next'
import { PageShell } from '../components/ui/PageShell'
import { Section } from '../components/ui/Section'
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

export function PrivacyPage() {
  const translation = useTranslation()

  usePageMeta({
    title: translation.t('privacy.meta.title'),
    description: translation.t('privacy.meta.description'),
    path: '/privacy-policy.html',
    locale: getLocaleForLanguage(translation.i18n.resolvedLanguage),
    servesCuisine: translation.t('seo.cuisine'),
    openingHours: [translation.t('seo.openingHours')],
  })

  return (
    <PageShell>
      <PageIntro eyebrow={translation.t('privacy.eyebrow')} title={translation.t('privacy.title')} />
      <Section title={translation.t('privacy.sectionTitle')} />
    </PageShell>
  )
}

/*
Pełne wyjaśnienie pliku:

1. PrivacyPage jest przypisany do adresu /privacy-policy.html.
2. usePageMeta ustawia tytuł Privacy Policy — Pizzeria Sardegna.
3. PageIntro tworzy główny nagłówek i oznacza stronę jako treść prawną.
4. Sekcja Privacy information jest miejscem na pełny tekst dotyczący prywatności.
5. Strona korzysta z tych samych komponentów układu co pozostałe podstrony.

Zastosowanie praktyczne:
Użytkownik otwiera tę stronę przez link Privacy policy w stopce. Docelowo umieścimy
tu informacje o danych zbieranych przez witrynę i sposobie ich wykorzystywania.
*/
