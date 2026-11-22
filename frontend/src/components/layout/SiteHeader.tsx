/*
Po co istnieje ten plik:

Cel:
SiteHeader tworzy wspólny nagłówek wyświetlany na każdej podstronie.

Jak działa:
1. Element header oznacza nagłówek witryny.
2. Link z nazwą Pizzeria Sardegna prowadzi do strony głównej.
3. aria-label dokładniej opisuje link użytkownikom czytników ekranu.
4. SiteNavigation wstawia całe menu nawigacyjne z osobnego pliku.
5. LanguageSwitcher wstawia przyciski DE, EN i IT.
6. useTranslation tłumaczy opis logo dla czytnika ekranu.
7. Klasy CSS ustawiają szerokość oraz położenie nazwy, menu i języków.

Gdzie jest używany:
SiteLayout umieszcza SiteHeader nad aktualną podstroną.

Dlaczego podział pomaga:
Nagłówek odpowiada za ogólną strukturę, a szczegóły menu pozostają w
SiteNavigation.tsx. Każdy plik ma dzięki temu jedno jasne zadanie.

Przykład:
Użytkownik będący na stronie kontaktowej może kliknąć nazwę Pizzeria Sardegna.
Link z to="/" przeniesie go wtedy na stronę główną. Wybranie IT w przełączniku
zmieni teksty całej witryny na włoskie, ale nie przeładuje dokumentu.
*/

// Link służy do przechodzenia pomiędzy podstronami aplikacji bez pełnego przeładowania.
import { useEffect, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// SiteNavigation zawiera główne menu: Home, About us, Gallery i Contact.
import { SiteNavigation } from './SiteNavigation'
import { LanguageSwitcher } from './LanguageSwitcher'

// export udostępnia SiteHeader innym plikom.
// SiteHeader tworzy nagłówek widoczny na każdej podstronie.
export function SiteHeader() {
  const translation = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Klawisz Escape zapewnia szybkie zamknięcie menu osobom używającym klawiatury.
  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    function closeMenuWithEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeMenuWithEscape)
    return () => document.removeEventListener('keydown', closeMenuWithEscape)
  }, [isMenuOpen])

  function closeMenuAfterLinkClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element && event.target.closest('a') !== null) {
      setIsMenuOpen(false)
    }
  }

  return (
    // Element header oznacza nagłówek witryny.
    <header className="site-header">
      {/* Ten div grupuje nazwę restauracji i menu nawigacyjne. */}
      <div className="container header-layout">
        {/* to="/" prowadzi do strony głównej. */}
        {/* aria-label przekazuje opis linku czytnikom ekranu. */}
        <Link className="site-logo" to="/" aria-label={translation.t('common.logoHomeLabel')} onClick={() => setIsMenuOpen(false)}>
          {/* Osobna ramka pozwala przeprowadzić błysk tylko przez powierzchnię herbu. */}
          <span className="site-crest-frame" aria-hidden="true">
            <img className="site-crest" src="/sardinia-crest.svg" alt="" />
          </span>
          <span className="site-logo-name">
            <span className="site-logo-prefix">Pizzeria</span>
            <span className="site-logo-mark">
              {/* data-label dostarcza nazwę Sardegna dekoracyjnej warstwie błysku w CSS. */}
              <span className="site-logo-sardegna" data-label="Sardegna">Sardegna</span>
              <span className="site-logo-underline" aria-hidden="true" />
            </span>
            <span className="site-logo-tagline">{translation.t('common.brandTagline')}</span>
          </span>
        </Link>

        <button
          className={isMenuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
          type="button"
          aria-controls="site-mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={translation.t(isMenuOpen ? 'common.mobileMenu.close' : 'common.mobileMenu.open')}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="site-mobile-menu"
          className={isMenuOpen ? 'header-actions-layout is-open' : 'header-actions-layout'}
          onClickCapture={closeMenuAfterLinkClick}
        >
          {/* W tym miejscu React wstawia całe menu nawigacyjne. */}
          <SiteNavigation />
          {/* Przełącznik zmienia wspólny język całej aplikacji. */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Import Link:
   Link tworzy wewnętrzne przejście do strony głównej bez przeładowania aplikacji.

2. Import SiteNavigation:
   Menu znajduje się w osobnym komponencie, aby nagłówek pozostał prosty.

3. Komponent SiteHeader:
   Funkcja zwraca nagłówek wspólny dla wszystkich stron.

4. Element header:
   Jest semantycznym nagłówkiem witryny. Klasa site-header ustawia jego wygląd.

5. Kontener i układ:
   container ogranicza szerokość treści, a header-layout rozmieszcza logo i menu.

6. Logo:
   Link z tekstem Pizzeria Sardegna prowadzi do /. aria-label przekazuje czytnikom
   ekranu informację, że jest to link do strony głównej.

7. SiteNavigation:
   <SiteNavigation /> umieszcza w nagłówku wszystkie linki menu.

SiteHeader jest używany przez SiteLayout, więc nie trzeba dodawać go osobno do stron.

Zastosowanie praktyczne:
To górna część widoczna na każdej podstronie. Pokazuje nazwę witryny i SiteNavigation,
dzięki czemu użytkownik zawsze może wrócić na stronę główną lub otworzyć inną sekcję.
*/
