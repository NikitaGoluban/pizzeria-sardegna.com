/*
Po co istnieje ten plik:

Cel:
ContactPage tworzy kompletną podstronę kontaktową restauracji.

Jak jest zbudowany:
1. useTranslation wybiera tekst kontaktu w języku DE, EN albo IT.
2. usePageMeta ustawia przetłumaczony tytuł i opis karty przeglądarki.
3. PageShell zapewnia główny element main i wspólne odstępy.
4. PageIntro pokazuje tytuł i krótki opis strony.
5. Trzy karty dzielą treść na dane kontaktowe, godziny otwarcia i usługi.
6. Dolna karta prowadzi do Google Maps lub Waze, a link tel uruchamia telefon.
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

// Uniwersalne adresy uruchamiają aplikację nawigacyjną na telefonie albo mapę
// w przeglądarce na komputerze. Punkt startowy jest pobierany z urządzenia.
const googleMapsDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Pizzeria+Sardegna%2C+Stadionweg+2%2C+35260+Stadtallendorf&travelmode=driving&dir_action=navigate'
const wazeDirectionsUrl = 'https://waze.com/ul?q=Pizzeria%20Sardegna%2C%20Stadionweg%202%2C%2035260%20Stadtallendorf&navigate=yes&utm_source=pizzeria-sardegna.com'

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
      <PageIntro
        className="contact-page-intro"
        eyebrow={translation.t('contact.eyebrow')}
        title={(
          <span className="contact-title-stack">
            <span>{translation.t('contact.title')}</span>
            <span className="contact-title-location">{translation.t('contact.location')}</span>
          </span>
        )}
      >
        <p className="contact-intro-text">{translation.t('contact.intro')}</p>
        {/* Mapa pokazuje położenie Sardynii w przybliżonym fragmencie Europy Zachodniej. */}
        <span className="contact-europe-map" aria-hidden="true">
          <img src="/europe-blank-map.png" alt="" />
          <span className="contact-sardinia-highlight" />
          <span className="contact-map-label">Sardegna</span>
          <span className="contact-map-coordinates">40°N · 9°E</span>
        </span>
      </PageIntro>

      {/* Trzy karty ustawiają kontakt, godziny i usługi obok siebie na dużym ekranie. */}
      <div className="contact-card-grid">
        <section className="contact-card" aria-labelledby="contact-details-title">
          <h2 id="contact-details-title">{translation.t('contact.methodsTitle')}</h2>
          <div className="contact-detail-list">
            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">☎</span>
              <strong>{translation.t('contact.phone')}</strong>
              <a className="contact-primary-link" href="tel:+4964284474948">+49 6428 4474948</a>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">⌖</span>
              <strong>{translation.t('contact.address')}</strong>
              <a href={googleMapsDirectionsUrl} target="_blank" rel="noreferrer">Stadionweg 2<br />35260 Stadtallendorf</a>
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

        <section className="contact-card" aria-labelledby="contact-service-title">
          <h2 id="contact-service-title">{translation.t('contact.serviceTitle')}</h2>
          <div className="contact-service-list">
            <p className="contact-service-row"><span aria-hidden="true">✦</span>{translation.t('contact.dineIn')}</p>
            <p className="contact-service-row"><span aria-hidden="true">✓</span>{translation.t('contact.reservations')}</p>
          </div>
        </section>
      </div>

      {/* Szeroka dolna karta prowadzi bezpośrednio do planowania trasy. */}
      <section className="contact-directions" aria-labelledby="contact-directions-title">
        <h2 id="contact-directions-title">{translation.t('contact.directionsTitle')}</h2>
        <div className="contact-navigation-links">
          <a className="button contact-map-link" href={googleMapsDirectionsUrl} target="_blank" rel="noreferrer">{translation.t('contact.directions')}</a>
          <a className="button button-secondary contact-waze-link" href={wazeDirectionsUrl} target="_blank" rel="noreferrer">{translation.t('contact.wazeDirections')}</a>
        </div>
      </section>
    </PageShell>
  )
}

/*
Pełne wyjaśnienie pliku:

1. ContactPage jest powiązany w router.tsx z adresem /contact.html.
2. usePageMeta ustawia tytuł Contact — Pizzeria Sardegna.
3. PageIntro wyjaśnia, że strona służy do planowania wizyty i rezerwacji.
4. contact-card-grid ustawia telefon z adresem, godziny i usługi w trzech kartach.
5. contact-directions pokazuje osobną kartę z przyciskami Google Maps oraz Waze.
6. contact-europe-map pokazuje przybliżony fragment Europy z wyróżnioną Sardynią.
7. PageShell zapewnia taki sam układ jak na pozostałych podstronach.

Zastosowanie praktyczne:
To strona otwierana po kliknięciu Contact w menu. Gość znajdzie tutaj telefon, adres,
godziny otwarcia i mapę potrzebne do rezerwacji lub wizyty w restauracji.
*/
