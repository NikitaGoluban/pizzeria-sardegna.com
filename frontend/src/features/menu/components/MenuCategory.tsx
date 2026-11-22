/*
Po co istnieje ten plik:

Cel:
MenuCategory wyświetla jedną pełną kategorię menu, na przykład sałatki lub pizzę.

Dane otrzymywane przez props:
props.category zawiera id, tytuł, opcjonalne wprowadzenie i tablicę pozycji items.

Jak działa:
1. id sekcji pozwala linkowi z # przewinąć stronę do tej kategorii.
2. Tytuł kategorii jest wyświetlany jako h2.
3. showCategoryIntroduction pokazuje wprowadzenie tylko wtedy, gdy istnieje.
4. map przechodzi po wszystkich elementach category.items.
5. showMenuItem tworzy dla każdej pozycji osobny MenuItemCard.
6. useTranslation tłumaczy nazwę i wprowadzenie kategorii.
7. key daje Reactowi stabilny identyfikator elementu listy.

Gdzie jest używany:
MenuPage tworzy MenuCategory osobno dla każdej kategorii z menuData.ts.

Dlaczego komponent pomaga:
Ten sam kod obsługuje wszystkie kategorie niezależnie od liczby potraw.

Przykład:
Kategoria Salate może zawierać osiem elementów items. map wywoła showMenuItem
osiem razy, dlatego React utworzy osiem komponentów MenuItemCard. Gdy aktywny jest
język włoski, ten sam komponent pobierze tytuł „Insalate” ze słownika i18n.
*/

import { MenuItemCard } from './MenuItemCard'
import { useTranslation } from 'react-i18next'
import type { MenuCategoryData } from '../types'
import type { MenuItem } from '../types'

interface MenuCategoryProps {
  category: MenuCategoryData
}

function showCategoryIntroduction(category: MenuCategoryData, translatedIntroduction: string) {
  if (category.introduction === undefined) {
    return null
  }

  let className: string | undefined

  if (category.needsVerification === true) {
    className = 'menu-verification-note'
  }

  return <p className={className}>{translatedIntroduction}</p>
}

function showMenuItem(item: MenuItem) {
  let itemKey = item.name

  if (item.number !== undefined) {
    itemKey = String(item.number)
  } else if (item.translationKey !== undefined) {
    itemKey = item.translationKey
  }

  return <MenuItemCard key={itemKey} item={item} />
}

export function MenuCategory(props: MenuCategoryProps) {
  const translation = useTranslation()
  const titleKey = `menu.categories.${props.category.id}.title`
  const introductionKey = `menu.categories.${props.category.id}.introduction`
  const translatedTitle = translation.t(titleKey, { defaultValue: props.category.title })
  const translatedIntroduction = translation.t(introductionKey, { defaultValue: props.category.introduction ?? '' })

  return (
    <section className="menu-category" id={props.category.id}>
      <div className="menu-category-heading">
        <p className="eyebrow">{translation.t('menu.categoryEyebrow')}</p>
        <h2>{translatedTitle}</h2>
        {showCategoryIntroduction(props.category, translatedIntroduction)}
      </div>
      <div className="menu-item-list">
        {props.category.items.map(showMenuItem)}
      </div>
    </section>
  )
}

/*
Pełne wyjaśnienie pliku:

1. Importy:
   MenuItemCard wyświetla jedno danie, a MenuCategoryData opisuje dane całej kategorii.
   Typ od początku ma inną nazwę niż komponent, więc import pozostaje prosty.

2. MenuCategoryProps:
   Komponent otrzymuje jeden obiekt category, na przykład kategorię Salate.

3. Funkcja showCategoryIntroduction:
   Zwykła funkcja używa if. Zwraca null, gdy w danych nie ma wprowadzenia, albo
   zwraca akapit p, gdy wprowadzenie istnieje.

4. Funkcja showMenuItem:
   Funkcja otrzymuje jeden item. Najpierw ustala prosty key, a następnie zwraca
   MenuItemCard. Nie używa destrukturyzacji ani funkcji strzałkowej.

5. Element section:
   id pochodzi z danych. Dzięki temu link #salads może przewinąć stronę bezpośrednio
   do sekcji sałatek.

6. Metoda map:
   map otrzymuje nazwę funkcji showMenuItem. Wywołuje tę funkcję osobno dla każdej
   pozycji znajdującej się w tablicy props.category.items.

Zastosowanie praktyczne:
Ten komponent buduje jedną pełną część menu. MenuPage używa go dla aperitifów,
przystawek, sałatek, pizzy, dodatków oraz deserów. Nazwane funkcje ułatwiają
śledzenie kolejności wykonywania kodu.
*/
