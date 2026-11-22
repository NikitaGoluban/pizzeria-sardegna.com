// ReactNode jest typem opisującym każdą treść, którą React potrafi wyświetlić.
// Może to być tekst, element JSX, komponent albo kilka elementów jednocześnie.
import type { ReactNode } from 'react'

/*
Po co istnieje ten plik:

PageShell jest wspólną ramą głównej treści każdej podstrony.
Bez PageShell musielibyśmy w MenuPage, ContactPage i pozostałych stronach
za każdym razem pisać ten sam element <main>, identyfikator i klasy CSS.

PageShell zapisuje ten wspólny kod tylko raz. Dzięki temu jest mniej bałaganu,
nie powtarzamy kodu, a zmianę szerokości lub odstępów wykonujemy w jednym miejscu.

Gdzie jest używany:
Kompletne strony, takie jak MenuPage i ContactPage, otaczają nim całą swoją treść.

Jak działa przepływ treści:
Podstrona umieszcza elementy pomiędzy <PageShell> i </PageShell>. React przekazuje
je jako props.children, a PageShell wstawia je wewnątrz elementu <main>.

Część stała:
- element <main>;
- id="main-content";
- klasy CSS "container page-content".

Część zmienna:
- props.children, czyli indywidualna treść konkretnej podstrony.

Co oznacza ReactNode:
ReactNode jest typem z biblioteki React. Oznacza dowolną treść, którą React potrafi
wyświetlić, na przykład tekst, <h1>Menu</h1>, komponent <PageIntro /> albo kilka
elementów przekazanych razem. Zapis children: ReactNode pozwala więc umieścić
wewnątrz PageShell różne rodzaje treści zależnie od podstrony.

Korzyść praktyczna:
Każda strona ma jeden poprawny element main, ten sam cel linku pomocniczego oraz
jednakową szerokość i odstępy bez kopiowania kodu.

Przykład:
<PageShell><h1>Menu</h1></PageShell> przekazuje nagłówek jako children.
PageShell wstawia go do <main>, więc wynik zawiera <main><h1>Menu</h1></main>.
W tym przykładzie <h1>Menu</h1> jest treścią zgodną z typem ReactNode.
*/

interface PageShellProps {
  children: ReactNode
}

export function PageShell(props: PageShellProps) {
  return (
    <main id="main-content" className="container page-content">
      {props.children}
    </main>
  )
}

/*
Pełne wyjaśnienie pliku:

1. ReactNode:
   Jest typem z biblioteki React. Obejmuje tekst, JSX, komponenty i inne wartości,
   które React potrafi wyświetlić.

2. PageShellProps:
   Interfejs wymaga children, czyli kompletnej treści przekazanej między znacznikami
   <PageShell> oraz </PageShell>.

3. Komponent PageShell:
   Przyjmuje cały obiekt props i zwraca semantyczny element <main>.

4. Identyfikator main-content:
   Jest celem linku Skip to main content znajdującego się w SiteLayout.

5. Klasy CSS:
   container ogranicza szerokość, a page-content dodaje pionowe odstępy strony.

6. props.children:
   React wstawia w tym miejscu elementy konkretnej strony, na przykład PageIntro i Section.

7. Zastosowanie praktyczne:
   PageShell wykorzystujemy praktycznie na każdej podstronie. Tworzy wspólną ramę
   <main> pomiędzy nagłówkiem i stopką, ustala szerokość treści oraz jej odstępy.
   Sam nie zawiera właściwej treści podstrony. Otrzymuje ją przez props.children,
   na przykład z RestaurantHomePage, MenuPage albo ContactPage.

Dzięki PageShell każda podstrona ma jeden główny obszar i ten sam układ treści.
*/
