/*
Po co istnieje ten plik:

Cel:
MenuItemCard wyświetla jedną pozycję menu, na przykład pizzę albo napój.

Dane otrzymywane przez props:
props.item zawiera nazwę i cenę oraz może zawierać numer, opis i wielkość porcji.

Jak działa:
1. getMenuItemTitle łączy numer i nazwę, jeśli numer istnieje.
2. showMenuItemDescription zwraca opis albo null.
3. showMenuItemPortion zwraca porcję albo null.
4. useTranslation pobiera tłumaczenie nazwy, opisu i porcji.
5. Komponent zawsze pokazuje nazwę i cenę; cena jest wspólna dla języków.

Gdzie jest używany:
MenuCategory tworzy jeden MenuItemCard dla każdego elementu tablicy items.

Dlaczego komponent pomaga:
Każda pozycja ma taki sam układ, a obsługa opcjonalnych danych znajduje się
w jednym pliku zamiast powtarzać się w całym menu.

Przykład:
Dla pozycji { number: 16, name: 'Margherita', price: '9,20 €' } komponent pokaże
tytuł "16. Margherita" i cenę "9,20 €". Dla EN i18n zmieni opis na
„Tomato sauce and mozzarella”. Brak portion nie spowoduje pustego elementu.
*/

import type { MenuItem } from '../types'
import type { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

interface MenuItemCardProps {
  item: MenuItem
}

function getMenuItemTranslationKey(item: MenuItem) {
  if (item.number !== undefined) {
    return String(item.number)
  }

  if (item.translationKey !== undefined) {
    return item.translationKey
  }

  return item.name
}

function getMenuItemTitle(item: MenuItem, translate: TFunction) {
  const translationKey = getMenuItemTranslationKey(item)
  const translatedName = translate(`menu.items.${translationKey}.name`, { defaultValue: item.name })

  if (item.number !== undefined) {
    return `${item.number}. ${translatedName}`
  }

  return translatedName
}

function showMenuItemDescription(item: MenuItem, translate: TFunction) {
  if (item.description === undefined) {
    return null
  }

  const translationKey = getMenuItemTranslationKey(item)
  const translatedDescription = translate(`menu.items.${translationKey}.description`, { defaultValue: item.description })

  return <p>{translatedDescription}</p>
}

function showMenuItemPortion(item: MenuItem, translate: TFunction) {
  if (item.portion === undefined) {
    return null
  }

  const translationKey = getMenuItemTranslationKey(item)
  const translatedPortion = translate(`menu.items.${translationKey}.portion`, { defaultValue: item.portion })

  return <span>{translatedPortion}</span>
}

function showMenuItemPrice(item: MenuItem) {
  if (item.price === undefined) {
    return null
  }

  return <strong>{item.price}</strong>
}

function showMenuItemVariants(item: MenuItem) {
  if (item.variants === undefined) {
    return null
  }

  return (
    <div className="menu-item-variants">
      {item.variants.map((variant) => (
        <div className="menu-item-variant" key={variant.portion}>
          <span>{variant.portion}</span>
          <strong>{variant.price}</strong>
        </div>
      ))}
    </div>
  )
}

function showMenuItemCodes(item: MenuItem, translate: TFunction) {
  if (item.codes === undefined || item.codesPrinted !== true) {
    return null
  }

  return (
    <div className="menu-item-codes">
      <span>{translate('menu.codesLabel')}</span>
      <div className="menu-item-code-list">
        {item.codes.map((code) => <strong key={code}>{code}</strong>)}
      </div>
    </div>
  )
}

export function MenuItemCard(props: MenuItemCardProps) {
  const translation = useTranslation()

  return (
    <article className="menu-item-card">
      <div className="menu-item-heading">
        <h3>{getMenuItemTitle(props.item, translation.t)}</h3>
        {showMenuItemPrice(props.item)}
      </div>
      {showMenuItemDescription(props.item, translation.t)}
      {showMenuItemPortion(props.item, translation.t)}
      {showMenuItemVariants(props.item)}
      {showMenuItemCodes(props.item, translation.t)}
    </article>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Import MenuItem:
   Typ mówi komponentowi, jakie informacje może otrzymać o jednej pozycji menu.

2. MenuItemCardProps:
   Komponent wymaga jednego propsa o nazwie item. Jest to jeden obiekt z menuData.ts.

3. Funkcja getMenuItemTitle:
   Zwykła funkcja sprawdza instrukcją if, czy pozycja ma numer. Jeśli numer istnieje,
   zwraca numer i nazwę. Jeśli nie istnieje, zwraca tylko nazwę.

4. Funkcje showMenuItemDescription i showMenuItemPortion:
   Każda funkcja używa prostego if. Jeśli wartość nie istnieje, zwraca null. Jeśli
   istnieje, funkcja zwraca odpowiedni element p albo span.

5. Komponent MenuItemCard:
   Komponent wywołuje trzy nazwane funkcje i przekazuje do nich props.item. Cena
   znajduje się bezpośrednio w elemencie strong.

Zastosowanie praktyczne:
Ten komponent tworzy jedną kartę, na przykład Pizza Margherita albo Aperol Spritz.
Kod używa zwykłych funkcji i instrukcji if, aby początkujący mógł śledzić każdy krok.
*/
