import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

/*
Pełne wyjaśnienie pliku:

1. Plugin React:
   @vitejs/plugin-react pozwala Vite przetwarzać komponenty TSX i obsługiwać
   szybkie odświeżanie aplikacji podczas programowania.

2. defineConfig:
   Funkcja pomaga TypeScriptowi sprawdzić poprawność ustawień Vite.

3. plugins:
   Tablica włącza plugin React dla całego projektu frontendowego.

Ten plik wpływa na serwer deweloperski i proces budowania, a nie tworzy interfejsu.

Zastosowanie praktyczne:
Podczas pracy uruchamiamy projekt przez Vite. Ta konfiguracja włącza obsługę Reacta,
dzięki czemu Vite rozumie pliki TSX, szybko odświeża stronę i tworzy build produkcyjny.
*/
