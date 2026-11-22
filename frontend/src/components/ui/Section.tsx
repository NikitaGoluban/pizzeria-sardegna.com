/*
Po co istnieje ten plik:

Cel:
Section tworzy powtarzalną część treści z nagłówkiem drugiego poziomu h2.

Dane otrzymywane przez props:
- title jest wymaganym tytułem sekcji;
- children jest opcjonalną zawartością sekcji, na przykład tekstem, listą lub kartami.

Jak działa:
1. props.title jest wyświetlany w elemencie h2.
2. props.children jest wstawiany pod nagłówkiem.
3. Klasa content-section nadaje wszystkim sekcjom wspólny wygląd.

Gdzie jest używany:
Podstrony używają Section wewnątrz PageShell.

Dlaczego komponent pomaga:
Nie powtarzamy elementu section, h2 i klasy CSS dla każdej części strony.

Przykład:
<Section title="Opening hours"><p>Tuesday-Sunday</p></Section> tworzy sekcję,
w której Opening hours jest nagłówkiem h2, a akapit jest props.children.
*/

import type { ReactNode } from 'react'

interface SectionProps {
  title: string
  children?: ReactNode
}

export function Section(props: SectionProps) {
  return (
    <section className="content-section">
      <h2>{props.title}</h2>
      {props.children}
    </section>
  )
}

/*
Pełne wyjaśnienie pliku:

1. SectionProps:
   Interfejs wymaga tekstu title. children jest opcjonalne, dlatego sekcja może zostać
   najpierw utworzona jako pusty element struktury, a treść można dodać później.

2. Komponent Section:
   Przyjmuje obiekt props bez destrukturyzacji i tworzy semantyczny element <section>.

3. Klasa content-section:
   Nadaje wszystkim sekcjom wspólne tło, obramowanie, odstępy i zaokrąglenie.

4. Nagłówek h2:
   props.title staje się nagłówkiem drugiego poziomu. H1 znajduje się wcześniej
   w komponencie PageIntro.

5. props.children:
   W tym miejscu pojawia się dowolna treść przekazana przez komponent strony.

Section zapewnia spójną semantykę i wygląd wszystkich głównych części strony.

Zastosowanie praktyczne:
Section dzieli podstronę na czytelne części, na przykład About me i Featured project.
Podajemy tytuł, a pomiędzy znacznikami umieszczamy tekst, karty, zdjęcia albo listy.
*/
