/*
Po co istnieje ten plik:

Cel:
SiteFooter tworzy jedną wspólną stopkę używaną na każdej podstronie witryny.

Jak działa:
1. Element footer semantycznie oznacza stopkę strony.
2. Akapit pokazuje nazwę restauracji i symbol praw autorskich.
3. Zwykły link <a href="tel:..."> uruchamia funkcję telefonu.
4. Link z React Routera otwiera wewnętrzną stronę polityki prywatności bez
   pełnego przeładowania dokumentu.
5. useTranslation pobiera nazwę polityki prywatności w wybranym języku.
6. Dwie klasy CSS ustawiają wspólną szerokość i układ zawartości.

Gdzie jest używany:
SiteLayout umieszcza SiteFooter pod aktualną podstroną.

Dlaczego osobny komponent pomaga:
Nie powtarzamy stopki w każdej stronie. Zmiana telefonu lub treści wymaga edycji
tylko tego jednego pliku.

Przykład:
Kliknięcie numeru +49 6428 4474948 otwiera aplikację telefonu. Kliknięcie
Privacy Policy zmienia adres na /privacy-policy.html i wyświetla PrivacyPage.
W wersji niemieckiej ten sam link ma podpis „Datenschutzerklärung”.
*/

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function SiteFooter() {
  const translation = useTranslation()

  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <p>© Pizzeria Sardegna Stadtallendorf</p>
        <div>
          <a href="tel:+4964284474948">+49 6428 4474948</a>
          <span> · </span>
          <Link to="/privacy-policy.html">{translation.t('common.footer.privacy')}</Link>
        </div>
        <p className="background-photo-credit">
          {translation.t('common.footer.backgroundPhoto')}{' '}
          <a href="https://commons.wikimedia.org/wiki/File:La_Pelosa_beach,_north_Sardinia_(Italy)_(24086631522).jpg" target="_blank" rel="noreferrer">Tommie Hansen</a>
          {' · '}
          <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a>
          {' · '}{translation.t('common.footer.backgroundPhotoChanges')}
        </p>
      </div>
    </footer>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Import Link:
   Link pochodzi z React Routera i umożliwia przejście do innej strony bez pełnego
   przeładowania dokumentu. Po kliknięciu Link przekazuje nowy adres do React Routera.
   React Router zmienia adres w przeglądarce, odnajduje pasujący Route i wyświetla
   przypisany do niego komponent. Nie pobiera ponownie całego dokumentu index.html.

2. Komponent SiteFooter:
   Funkcja zwraca stopkę wspólną dla wszystkich stron aplikacji.

3. Element footer:
   Semantycznie oznacza stopkę witryny. Klasa site-footer odpowiada za wygląd.

4. Kontener:
   Klasa container ogranicza szerokość treści, a footer-layout ustawia elementy
   stopki obok siebie lub pionowo na mniejszym ekranie.

5. Treść:
   Akapit wyświetla nazwę właściciela, a Link prowadzi do polityki prywatności.

SiteFooter jest renderowany przez SiteLayout, dlatego pojawia się na każdej stronie.

Zastosowanie praktyczne:
To dolna część każdej podstrony. Obecnie pokazuje właściciela witryny i link do polityki
prywatności; później możemy dodać tu na przykład rok, kontakt albo profile społecznościowe.
*/
