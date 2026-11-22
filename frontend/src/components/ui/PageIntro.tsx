/*
Po co istnieje ten plik:

Cel:
PageIntro tworzy jednakowy początek treści każdej podstrony.

Dane otrzymywane przez props:
- title jest wymaganym głównym tytułem h1;
- eyebrow jest opcjonalną małą etykietą nad tytułem;
- children jest opcjonalną dodatkową treścią, na przykład opisem lub przyciskami.

Jak działa:
1. TypeScript sprawdza dane według PageIntroProps.
2. showEyebrow używa prostego if i zwraca null, gdy etykiety nie podano.
3. props.title trafia do h1.
4. props.children trafia pod tytuł.

Dlaczego komponent pomaga:
Każda podstrona ma spójny tytuł i układ początku, ale może przekazać własne teksty.

Przykład:
<PageIntro eyebrow="Pizzeria Sardegna" title="Speisekarte"> może pokazać małą
etykietę Pizzeria Sardegna, główny tytuł Speisekarte i opis przekazany jako children.
*/

import type { ReactNode } from 'react'

interface PageIntroProps {
  eyebrow?: string
  title: string
  children?: ReactNode
}

function showEyebrow(props: PageIntroProps) {
  if (props.eyebrow === undefined) {
    return null
  }

  return <p className="eyebrow">{props.eyebrow}</p>
}

export function PageIntro(props: PageIntroProps) {
  return (
    <header className="page-intro">
      {showEyebrow(props)}
      <h1>{props.title}</h1>
      {props.children}
    </header>
  )
}

/*
Pełne wyjaśnienie pliku:

1. ReactNode:
   Ten typ oznacza dowolną treść, którą React potrafi renderować, na przykład
   tekst, element JSX, kilka elementów albo inny komponent.

2. PageIntroProps:
   Interfejs opisuje właściwości komponentu. title jest wymagany, natomiast znak ?
   przy eyebrow i children oznacza, że te wartości są opcjonalne.

3. Obiekt props:
   Komponent odczytuje wartości jawnie jako props.title, props.eyebrow i props.children.

4. Element header:
   Grupuje wprowadzenie do konkretnej strony. Nie jest to główny SiteHeader, lecz
   nagłówek treści aktualnej podstrony.

5. Funkcja showEyebrow:
   Zwykły if sprawdza, czy mały tekst został podany. Funkcja zwraca null, jeżeli
   tekstu nie ma, albo zwraca element p, jeżeli tekst istnieje.

6. Tytuł h1:
   Każda strona otrzymuje jeden główny nagłówek z wartości props.title.

7. children:
   Pozwala stronie dodać pod tytułem własną treść, na przykład opis lub link.

PageIntro usuwa potrzebę wielokrotnego pisania tej samej struktury na każdej stronie.

Zastosowanie praktyczne:
Umieszczamy go na początku każdej podstrony. Zapewnia jednakowy główny tytuł H1,
małą etykietę nad tytułem i miejsce na krótki opis charakterystyczny dla danej strony.
*/
