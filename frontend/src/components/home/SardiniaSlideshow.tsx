/*
SardiniaSlideshow pokazuje krajobrazy wyspy, od której restauracja wzięła nazwę.

Najważniejsze zasady:
- activeIndex wskazuje aktualnie widoczne zdjęcie;
- pokaz zmienia zdjęcie automatycznie co sześć sekund;
- najechanie myszą lub wejście klawiaturą zatrzymuje automatyczną zmianę;
- ustawienie systemowe prefers-reduced-motion wyłącza automatyczne przejścia;
- każde zdjęcie ma podpis, autora, licencję i link do źródła.
*/

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const slides = [
  {
    src: '/sardinia/cala-goloritze.jpg',
    locationKey: 'home.sardinia.slides.goloritze.location',
    descriptionKey: 'home.sardinia.slides.goloritze.description',
    altKey: 'home.sardinia.slides.goloritze.alt',
    credit: 'Unukorno · CC BY 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Sardegna_Cala_Goloritze.jpg',
  },
  {
    src: '/sardinia/la-pelosa.jpg',
    locationKey: 'home.sardinia.slides.pelosa.location',
    descriptionKey: 'home.sardinia.slides.pelosa.description',
    altKey: 'home.sardinia.slides.pelosa.alt',
    credit: 'Tommie Hansen · CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:La_Pelosa_beach,_north_Sardinia_(Italy)_(24086631522).jpg',
  },
  {
    src: '/sardinia/alghero-sunset.jpg',
    locationKey: 'home.sardinia.slides.alghero.location',
    descriptionKey: 'home.sardinia.slides.alghero.description',
    altKey: 'home.sardinia.slides.alghero.alt',
    credit: 'Alexkom000 · CC BY 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2024-10-10_Sunset_in_Alghero.jpg',
  },
  {
    src: '/sardinia/supramonte.jpg',
    locationKey: 'home.sardinia.slides.supramonte.location',
    descriptionKey: 'home.sardinia.slides.supramonte.description',
    altKey: 'home.sardinia.slides.supramonte.alt',
    credit: 'Nicolas Vollmer · CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Vall%C3%A9e_en_Sardaigne_-_Flickr_-_Nicolas_Vollmer.jpg',
  },
] as const

export function SardiniaSlideshow() {
  const translation = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (isPaused || reducedMotion.matches) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [isPaused])

  function showPreviousSlide() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)
  }

  function showNextSlide() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
  }

  function resumeAfterFocusLeaves(event: React.FocusEvent<HTMLElement>) {
    if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  const activeSlide = slides[activeIndex]

  return (
    <section className="sardinia-slideshow" aria-labelledby="sardinia-slideshow-title">
      <header className="sardinia-slideshow-header">
        <div>
          <p className="eyebrow">{translation.t('home.sardinia.eyebrow')}</p>
          <h2 id="sardinia-slideshow-title">{translation.t('home.sardinia.title')}</h2>
        </div>
        <p>{translation.t('home.sardinia.intro')}</p>
      </header>

      <div
        className="sardinia-slideshow-stage"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={resumeAfterFocusLeaves}
      >
        {slides.map((slide, index) => (
          <img
            className={index === activeIndex ? 'sardinia-slide is-active' : 'sardinia-slide'}
            src={slide.src}
            alt={index === activeIndex ? translation.t(slide.altKey) : ''}
            aria-hidden={index !== activeIndex}
            decoding="async"
            loading={index === 0 ? 'eager' : 'lazy'}
            key={slide.src}
          />
        ))}

        <div className="sardinia-slide-shade" />

        <div className="sardinia-slide-caption" aria-live="polite">
          <p>{translation.t(activeSlide.locationKey)}</p>
          <h3>{translation.t(activeSlide.descriptionKey)}</h3>
          <a href={activeSlide.source} target="_blank" rel="noreferrer">
            {translation.t('home.sardinia.photoCredit')}: {activeSlide.credit} ↗
          </a>
        </div>

        <div className="sardinia-slide-controls">
          <button type="button" onClick={showPreviousSlide} aria-label={translation.t('home.sardinia.previous')}>←</button>
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          <button type="button" onClick={showNextSlide} aria-label={translation.t('home.sardinia.next')}>→</button>
        </div>
      </div>

      <div className="sardinia-slide-dots" aria-label={translation.t('home.sardinia.chooseSlide')}>
        {slides.map((slide, index) => (
          <button
            className={index === activeIndex ? 'is-active' : ''}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${translation.t('home.sardinia.showSlide')} ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            key={slide.src}
          />
        ))}
      </div>
    </section>
  )
}
