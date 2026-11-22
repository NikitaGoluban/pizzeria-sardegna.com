/*
Stary adres /menu.html może nadal występować w zakładkach, wynikach wyszukiwania
albo wiadomościach wysłanych klientom. Menu znajduje się teraz na stronie głównej,
dlatego ten mały komponent bezpiecznie przekierowuje do sekcji #menu.
*/

import { Navigate } from 'react-router-dom'

export function MenuPage() {
  return <Navigate to="/#menu" replace />
}
