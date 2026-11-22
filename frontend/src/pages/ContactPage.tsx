/*
Po co istnieje ten plik:

Cel:
ContactPage tworzy kompletną podstronę kontaktową restauracji.

Jak jest zbudowany:
1. useTranslation wybiera tekst kontaktu w języku DE, EN albo IT.
2. usePageMeta ustawia przetłumaczony tytuł i opis karty przeglądarki.
3. PageShell zapewnia główny element main i wspólne odstępy.
4. PageIntro pokazuje tytuł i krótki opis strony.
5. Dwie karty dzielą treść na dane kontaktowe oraz godziny otwarcia.
6. Dolna karta prowadzi do Google Maps, a link tel uruchamia telefon.
7. Dekoracyjna maska SVG pokazuje kontur Sardynii obok wprowadzenia.

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
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Pizzeria+Sardegna+Stadtallendorf'

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
      <PageIntro className="contact-page-intro" eyebrow={translation.t('contact.eyebrow')} title={translation.t('contact.title')}>
        <p className="contact-intro-text">{translation.t('contact.intro')}</p>
        {/* Mapa pokazuje położenie Sardynii w przybliżonym fragmencie Europy Zachodniej. */}
        <span className="contact-europe-map" aria-hidden="true">
          <img src="/europe-blank-map.png" alt="" />
          <span className="contact-sardinia-highlight" />
          <span className="contact-map-label">Sardegna</span>
        </span>
      </PageIntro>

      {/* Dwie główne karty ustawiają kontakt i godziny obok siebie na dużym ekranie. */}
      <div className="contact-card-grid">
        <section className="contact-card" aria-labelledby="contact-details-title">
          <h2 id="contact-details-title">{translation.t('contact.methodsTitle')}</h2>
          <div className="contact-detail-list">
            <div className="contact-detail">
              <strong>{translation.t('contact.phone')}</strong>
              <a className="contact-primary-link" href="tel:+4964284474948">+49 6428 4474948</a>
            </div>
            <div className="contact-detail">
              <strong>{translation.t('contact.address')}</strong>
              <a href={directionsUrl} target="_blank" rel="noreferrer">Stadionweg 2<br />35260 Stadtallendorf</a>
            </div>
          </div>
        </section>

        <section className="contact-card" aria-labelledby="contact-hours-title">
          <h2 id="contact-hours-title">{translation.t('contact.hoursTitle')}</h2>
          <div className="contact-hours-list">
            <p className="contact-hours-row is-open"><span aria-hidden="true" />{translation.t('contact.open')}</p>
            <p className="contact-hours-row is-closed"><span aria-hidden="true" />{translation.t('contact.closed')}</p>
          </div>
        </section>
      </div>

      {/* Szeroka dolna karta prowadzi bezpośrednio do planowania trasy. */}
      <section className="contact-directions" aria-labelledby="contact-directions-title">
        <h2 id="contact-directions-title">{translation.t('contact.directionsTitle')}</h2>
        <a className="button contact-map-link" href={directionsUrl} target="_blank" rel="noreferrer">{translation.t('contact.directions')}</a>
      </section>
    </PageShell>
  )
}

/*
Pełne wyjaśnienie pliku:

1. ContactPage jest powiązany w router.tsx z adresem /contact.html.
2. usePageMeta ustawia tytuł Contact — Pizzeria Sardegna.
3. PageIntro wyjaśnia, że strona służy do planowania wizyty i rezerwacji.
4. contact-card-grid ustawia telefon z adresem oraz godziny otwarcia w dwóch kartach.
5. contact-directions pokazuje osobną kartę z przyciskiem Google Maps.
6. contact-europe-map pokazuje przybliżony fragment Europy z wyróżnioną Sardynią.
7. PageShell zapewnia taki sam układ jak na pozostałych podstronach.

Zastosowanie praktyczne:
To strona otwierana po kliknięciu Contact w menu. Gość znajdzie tutaj telefon, adres,
godziny otwarcia i mapę potrzebne do rezerwacji lub wizyty w restauracji.
*/
