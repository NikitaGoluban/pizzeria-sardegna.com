export interface MenuItemVariant {
  portion: string
  price: string
}

export interface MenuItem {
  number?: number
  translationKey?: string
  name: string
  description?: string
  portion?: string
  price?: string
  variants?: MenuItemVariant[]
  codes?: string[]
  codesPrinted?: boolean
  paperMenuVerified?: boolean
}

export interface MenuCategoryData {
  id: string
  title: string
  introduction?: string
  needsVerification?: boolean
  items: MenuItem[]
}

/*
Pełne wyjaśnienie pliku:

1. MenuItemVariant:
   Ten interfejs opisuje jeden wariant pojemności i ceny, na przykład wodę 0,25 l
   za 3,20 €. Tablica wariantów pozwala pokazać kilka pojemności na jednej karcie.

2. MenuItem:
   Ten interfejs opisuje jedną pozycję menu. name jest wymagane. Pojedyncza pozycja
   używa price, natomiast napój dostępny w kilku pojemnościach używa variants.

3. Właściwości opcjonalne:
   number, description, portion, price, variants, codes, codesPrinted oraz
   paperMenuVerified mają znak ?. codes przechowuje oznaczenia alergenów i dodatków,
   codesPrinted mówi, czy są wydrukowane przy produkcie, a paperMenuVerified
   potwierdza porównanie całej pozycji z papierową kartą.

4. MenuCategoryData:
   Ten interfejs opisuje całą kategorię, na przykład Salate lub Pizza Tradizionale.
   items jest tablicą elementów zgodnych z interfejsem MenuItem.

5. Export:
   Słowo export pozwala plikowi menuData.ts oraz komponentom zaimportować te typy.

Zastosowanie praktyczne:
Ten plik ustala wspólny kształt danych całego menu. TypeScript od razu pokaże błąd,
jeżeli podczas dodawania nowej pizzy zapomnimy na przykład o nazwie albo cenie.
*/
