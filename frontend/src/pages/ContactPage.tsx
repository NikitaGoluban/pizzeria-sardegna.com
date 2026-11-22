/*
Po co istnieje ten plik:

Cel:
ContactPage tworzy kompletną podstronę kontaktową restauracji.

Jak jest zbudowany:
1. useTranslation wybiera tekst kontaktu w języku DE, EN albo IT.
2. usePageMeta ustawia przetłumaczony tytuł i opis karty przeglądarki.
3. PageShell zapewnia główny element main i wspólne odstępy.
4. PageIntro pokazuje tytuł i krótki opis strony.
5. Section dzieli treść na kontakt, godziny otwarcia i mapę.
6. Link tel uruchamia telefon, a link do Google Maps otwiera zewnętrzną mapę.

Gdzie jest używany:
router.tsx wyświetla ContactPage pod adresem /contact.html.

Cel dla użytkownika:
Gość szybko znajduje wszystkie informacje potrzebne do rezerwacji lub wizyty.

Przykład:
Po otwarciu /contact.html użytkownik widzi numer telefonu, Stadionweg 2,
godziny otwarcia i link, który otwiera trasę w Google Maps.
*/

import { PageIntro } from '../components/ui/PageIntro'
import { useTranslation } from 'react-i18next'
import { PageShell } from '../components/ui/PageShell'
import { Section } from '../components/ui/Section'
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

export function ContactPage() {
  const translation = useTranslation()

  usePageMeta({
    title: translation.t('contact.meta.title'),
    description: translation.t('contact.meta.description'),
    path: '/contact.html',
    locale: getLocaleForLanguage(translation.i18n.resolvedLanguage),
    servesCuisine: translation.t('seo.cuisine'),
    openingHours: [translation.t('seo.openingHours')],
  })

  return (
    <PageShell>
      <PageIntro eyebrow={translation.t('contact.eyebrow')} title={translation.t('contact.title')}>
        <p>{translation.t('contact.intro')}</p>
      </PageIntro>
      <Section title={translation.t('contact.methodsTitle')}>
        <p><strong>{translation.t('contact.phone')}</strong> <a href="tel:+4964284474948">+49 6428 4474948</a></p>
        <p><strong>{translation.t('contact.address')}</strong> Stadionweg 2, 35260 Stadtallendorf</p>
      </Section>
      <Section title={translation.t('contact.hoursTitle')}>
        <p>{translation.t('contact.open')}</p>
        <p>{translation.t('contact.closed')}</p>
      </Section>
      <Section title={translation.t('contact.directionsTitle')}>
        <a href="https://www.google.com/maps/search/?api=1&query=Pizzeria+Sardegna+Stadtallendorf" target="_blank" rel="noreferrer">{translation.t('contact.directions')}</a>
      </Section>
    </PageShell>
  )
}

/*
Pełne wyjaśnienie pliku:

1. ContactPage jest powiązany w router.tsx z adresem /contact.html.
2. usePageMeta ustawia tytuł Contact — Pizzeria Sardegna.
3. PageIntro wyjaśnia, że strona służy do planowania wizyty i rezerwacji.
4. Contact methods pokazuje telefon i adres restauracji.
5. Opening hours oraz Find us pokazują godziny otwarcia i link do mapy.
6. PageShell zapewnia taki sam układ jak na pozostałych podstronach.

Zastosowanie praktyczne:
To strona otwierana po kliknięciu Contact w menu. Gość znajdzie tutaj telefon, adres,
godziny otwarcia i mapę potrzebne do rezerwacji lub wizyty w restauracji.
*/
