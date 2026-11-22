/*
Po co istnieje ten plik:

Cel:
LanguageSwitcher tworzy trzy przyciski DE, EN i IT służące do zmiany języka całej
witryny. Jest używany w SiteHeader, dlatego jest dostępny na każdej podstronie.

Jak działa:
1. useTranslation daje komponentowi dostęp do uruchomionego systemu i18n.
2. Każda nazwana funkcja wywołuje i18n.changeLanguage z właściwym kodem języka.
3. Biblioteka informuje wszystkie komponenty używające tłumaczeń o zmianie.
4. React ponownie je renderuje i widoczne teksty zmieniają się bez przeładowania.
5. aria-pressed informuje czytnik ekranu, który język jest obecnie wybrany.

Przykład:
Użytkownik naciska IT. Funkcja changeToItalian ustawia język „it”. Nawigacja zmienia
„Speisekarte” na „Menù”, a strona kontaktowa pokazuje włoskie teksty.
*/

import { useTranslation } from 'react-i18next'

function getLanguageButtonClassName(currentLanguage: string | undefined, buttonLanguage: string) {
  if (currentLanguage === buttonLanguage) {
    return 'language-button is-active'
  }

  return 'language-button'
}

export function LanguageSwitcher() {
  const translation = useTranslation()
  const currentLanguage = translation.i18n.resolvedLanguage

  function changeToGerman() {
    void translation.i18n.changeLanguage('de')
  }

  function changeToEnglish() {
    void translation.i18n.changeLanguage('en')
  }

  function changeToItalian() {
    void translation.i18n.changeLanguage('it')
  }

  return (
    // Klasa is-de, is-en albo is-it określa w CSS położenie przesuwanej złotej kapsuły.
    <div className={`language-switcher is-${currentLanguage ?? 'de'}`} role="group" aria-label={translation.t('common.language.label')}>
      <button className={getLanguageButtonClassName(currentLanguage, 'de')} type="button" onClick={changeToGerman} aria-label={translation.t('common.language.german')} aria-pressed={currentLanguage === 'de'}>DE</button>
      <button className={getLanguageButtonClassName(currentLanguage, 'en')} type="button" onClick={changeToEnglish} aria-label={translation.t('common.language.english')} aria-pressed={currentLanguage === 'en'}>EN</button>
      <button className={getLanguageButtonClassName(currentLanguage, 'it')} type="button" onClick={changeToItalian} aria-label={translation.t('common.language.italian')} aria-pressed={currentLanguage === 'it'}>IT</button>
    </div>
  )
}

/*
Pełne wyjaśnienie:
LanguageSwitcher nie przechowuje własnej kopii tekstów. Zmienia tylko aktywny kod
języka w centralnym i18n.ts. Klasa is-active wyróżnia aktualny przycisk wizualnie,
a aria-pressed przekazuje tę samą informację osobom używającym czytnika ekranu.

Zastosowanie praktyczne:
Jeden przełącznik kontroluje język nagłówka, stron, menu, stopki oraz metadanych SEO.
Nie tworzymy osobnych komponentów RestaurantHomePageDe, RestaurantHomePageEn i
RestaurantHomePageIt, dzięki czemu projekt pozostaje prosty i nie powiela kodu.
*/
