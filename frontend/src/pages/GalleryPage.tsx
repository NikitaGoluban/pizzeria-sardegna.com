/*
Po co istnieje ten plik:

Cel:
GalleryPage tworzy kompletną podstronę galerii restauracji i pokazuje zdjęcia
lokalu, pizzy, antipasti oraz deseru.

Jak jest zbudowany:
1. useTranslation pobiera tekst galerii w aktywnym języku.
2. usePageMeta ustawia przetłumaczone metadane charakterystyczne dla galerii.
3. PageShell zapewnia wspólny główny obszar strony.
4. PageIntro przedstawia cel galerii.
5. Section grupuje siedem elementów figure zawierających zdjęcie i podpis.
6. Atrybut loading="lazy" pobiera zdjęcie dopiero wtedy, gdy jest potrzebne.

Gdzie jest używany:
router.tsx wyświetla GalleryPage pod adresem /gallery.html.

Przykład:
Plik /gallery/pizza-ham-tomatoes.jpg jest wyświetlany w elemencie img. Funkcja
translation.t pobiera niemiecki, angielski albo włoski opis zdjęcia.
*/

import { PageIntro } from '../components/ui/PageIntro'
import { useTranslation } from 'react-i18next'
import { PageShell } from '../components/ui/PageShell'
import { Section } from '../components/ui/Section'
import { usePageMeta } from '../hooks/usePageMeta'
import { getLocaleForLanguage } from '../i18n'

export function GalleryPage() {
  const translation = useTranslation()

  usePageMeta({
    title: translation.t('gallery.meta.title'),
    description: translation.t('gallery.meta.description'),
    path: '/gallery.html',
    schemaType: 'ImageGallery',
    schemaName: translation.t('gallery.meta.schemaName'),
    locale: getLocaleForLanguage(translation.i18n.resolvedLanguage),
    servesCuisine: translation.t('seo.cuisine'),
    openingHours: [translation.t('seo.openingHours')],
  })

  return (
    <PageShell>
      <PageIntro eyebrow={translation.t('gallery.eyebrow')} title={translation.t('gallery.title')}>
        <p>{translation.t('gallery.intro')}</p>
      </PageIntro>
      <Section title={translation.t('gallery.photosTitle')}>
        <div className="gallery-grid">
          <figure className="gallery-item">
            <a href="/gallery/interior-bar-trophies.jpg" target="_blank" rel="noreferrer"><img src="/gallery/interior-bar-trophies.jpg" alt={translation.t('gallery.images.interior')} loading="lazy" decoding="async" /></a>
            <figcaption>{translation.t('gallery.images.interior')}</figcaption>
          </figure>
          <figure className="gallery-item">
            <a href="/gallery/pizza-ham-tomatoes.jpg" target="_blank" rel="noreferrer"><img src="/gallery/pizza-ham-tomatoes.jpg" alt={translation.t('gallery.images.pizzaHam')} loading="lazy" decoding="async" /></a>
            <figcaption>{translation.t('gallery.images.pizzaHam')}</figcaption>
          </figure>
          <figure className="gallery-item">
            <a href="/gallery/pizza-mushrooms-ham.jpg" target="_blank" rel="noreferrer"><img src="/gallery/pizza-mushrooms-ham.jpg" alt={translation.t('gallery.images.pizzaMushrooms')} loading="lazy" decoding="async" /></a>
            <figcaption>{translation.t('gallery.images.pizzaMushrooms')}</figcaption>
          </figure>
          <figure className="gallery-item">
            <a href="/gallery/antipasti-cured-meats.jpg" target="_blank" rel="noreferrer"><img src="/gallery/antipasti-cured-meats.jpg" alt={translation.t('gallery.images.curedMeats')} loading="lazy" decoding="async" /></a>
            <figcaption>{translation.t('gallery.images.curedMeats')}</figcaption>
          </figure>
          <figure className="gallery-item">
            <a href="/gallery/pizza-arugula-artichokes.jpg" target="_blank" rel="noreferrer"><img src="/gallery/pizza-arugula-artichokes.jpg" alt={translation.t('gallery.images.pizzaArugula')} loading="lazy" decoding="async" /></a>
            <figcaption>{translation.t('gallery.images.pizzaArugula')}</figcaption>
          </figure>
          <figure className="gallery-item">
            <a href="/gallery/antipasti-table.jpg" target="_blank" rel="noreferrer"><img src="/gallery/antipasti-table.jpg" alt={translation.t('gallery.images.antipasti')} loading="lazy" decoding="async" /></a>
            <figcaption>{translation.t('gallery.images.antipasti')}</figcaption>
          </figure>
          <figure className="gallery-item">
            <a href="/gallery/tiramisu.jpg" target="_blank" rel="noreferrer"><img src="/gallery/tiramisu.jpg" alt={translation.t('gallery.images.tiramisu')} loading="lazy" decoding="async" /></a>
            <figcaption>{translation.t('gallery.images.tiramisu')}</figcaption>
          </figure>
        </div>
        <p className="gallery-source-note">{translation.t('gallery.sourceBefore')} <a href="https://www.google.com/maps/place/Pizzeria+Sardegna+Stadtallendorf/@50.8268003,9.0065146,17z/data=!4m6!3m5!1s0x47bc91ec7b8446a5:0x4a9a981358049f43!8m2!3d50.8268003!4d9.0065146!16s%2Fg%2F11pz03wd8j" target="_blank" rel="noreferrer">{translation.t('gallery.sourceLink')} ↗</a></p>
      </Section>
    </PageShell>
  )
}

/*
Zastosowanie praktyczne:
Ta podstrona jest wizualną prezentacją lokalu i potraw. Gość widzi fotografie
w dopasowanej siatce, a kliknięcie zdjęcia otwiera jego pełną wersję. Teksty alt
i podpisy zmieniają się razem z językiem całej witryny.
*/
