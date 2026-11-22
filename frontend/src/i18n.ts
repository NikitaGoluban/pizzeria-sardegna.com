/*
Po co istnieje ten plik:

Ten plik uruchamia system wielu języków i18n dla całej aplikacji. Łączy bibliotekę
i18next z Reactem, przekazuje jej niemiecki, angielski i włoski słownik oraz ustala
niemiecki jako język domyślny.

Przepływ danych:
plik języka -> i18next -> funkcja t('klucz') w komponencie -> tekst na ekranie.

Przykład:
SiteNavigation prosi o t('common.navigation.menu'). Dla języka de otrzymuje
„Speisekarte”, dla en „Menu”, a dla it „Menù”. Po zmianie języka React automatycznie
renderuje komponent ponownie. Wybrany język zapisujemy w localStorage, dlatego po
ponownym otwarciu witryny użytkownik nadal widzi swoją wersję językową.
*/

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { deTranslation } from './locales/de'
import { enTranslation } from './locales/en'
import { itTranslation } from './locales/it'

const languageStorageKey = 'pizzeria-language'

function getSavedLanguage() {
  const savedLanguage = window.localStorage.getItem(languageStorageKey)

  if (savedLanguage === 'en') {
    return 'en'
  }

  if (savedLanguage === 'it') {
    return 'it'
  }

  return 'de'
}

function saveLanguage(language: string) {
  window.localStorage.setItem(languageStorageKey, language)
  document.documentElement.lang = language
}

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: deTranslation },
      en: { translation: enTranslation },
      it: { translation: itTranslation },
    },
    lng: getSavedLanguage(),
    fallbackLng: 'de',
    supportedLngs: ['de', 'en', 'it'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })

saveLanguage(i18n.resolvedLanguage ?? 'de')
i18n.on('languageChanged', saveLanguage)

export function getLocaleForLanguage(language: string | undefined) {
  if (language === 'en') {
    return 'en_GB'
  }

  if (language === 'it') {
    return 'it_IT'
  }

  return 'de_DE'
}

export default i18n

/*
Zastosowanie praktyczne:
main.tsx importuje ten plik tylko jeden raz podczas uruchamiania aplikacji. Od tego
momentu każdy komponent może użyć hooka useTranslation i funkcji t. Dodanie nowego
tekstu wymaga dodania tego samego klucza do trzech słowników, a nie kopiowania strony.
*/
