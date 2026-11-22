/*
Po co istnieje ten plik:

Cel:
RestaurantAboutPage tworzy kompletną podstronę przedstawiającą restaurację.

Jak jest zbudowany:
1. useTranslation pobiera treść w aktywnym języku.
2. usePageMeta ustawia przetłumaczony tytuł, opis i dane SEO typu AboutPage.
3. PageShell zapewnia główny obszar i wspólną szerokość treści.
4. PageIntro przedstawia nazwę i krótkie wprowadzenie.
5. Komponenty Section dzielą opis restauracji na czytelne części.

Gdzie jest używany:
router.tsx wyświetla RestaurantAboutPage pod adresem /about.html.

Cel dla użytkownika:
Gość może poznać atmosferę i charakter lokalu przed wizytą.

Przykład:
Po kliknięciu About us router otwiera /about.html. PageIntro pokazuje główny tytuł,
a kolejne Section przedstawiają włoski charakter lokalu i sposób przyjmowania gości.
Zmiana języka podmienia treści, ale nie tworzy drugiej kopii komponentu strony.
*/

import { PageIntro } from '../components/ui/PageIntro'
import { useTranslation } from 'react-i18next'
import { PageShell } from '../components/ui/PageShell'
import { Section } from '../components/ui/Section'
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

export function RestaurantAboutPage() {
  const translation = useTranslation()

  usePageMeta({
    title: translation.t('about.meta.title'),
    description: translation.t('about.meta.description'),
    path: '/about.html',
    schemaType: 'AboutPage',
    schemaName: translation.t('about.meta.schemaName'),
    locale: getLocaleForLanguage(translation.i18n.resolvedLanguage),
    servesCuisine: translation.t('seo.cuisine'),
    openingHours: [translation.t('seo.openingHours')],
  })

  return (
    <PageShell>
      <PageIntro eyebrow={translation.t('about.eyebrow')} title={translation.t('about.title')}>
        <p>{translation.t('about.intro')}</p>
      </PageIntro>
      <Section title={translation.t('about.localTitle')}>
        <p>{translation.t('about.localText')}</p>
      </Section>
      <Section title={translation.t('about.welcomeTitle')}>
        <p>{translation.t('about.welcomeText')}</p>
      </Section>
    </PageShell>
  )
}

/*
Zastosowanie praktyczne:
Ta podstrona opowiada o restauracji i jej atmosferze. Później można tutaj dodać
zdjęcia lokalu, historię właścicieli i informacje o kuchni.
*/
