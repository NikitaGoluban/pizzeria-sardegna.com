import type { MenuCategoryData } from './types'

export const menuCategories: MenuCategoryData[] = [
  {
    id: 'aperitifs',
    title: 'Aperitifs',
    introduction: 'Aperitifs aus der aktuellen Speisekarte.',
    items: [
      { translationKey: 'campari-soda', name: 'Campari Soda', portion: '9,8 cl', price: '4,00 €' },
      { translationKey: 'campari-orange', name: 'Campari Orange', portion: '0,3 l', price: '6,00 €' },
      { translationKey: 'bitter', name: 'Bitter', portion: '9,8 cl', price: '3,00 €' },
      { translationKey: 'prosecco', name: 'Prosecco', portion: '0,2 l', price: '5,00 €' },
      { translationKey: 'aperol-spritz', name: 'Aperol Spritz', portion: '0,3 l', price: '7,50 €' },
    ],
  },
  {
    id: 'hot-drinks',
    title: 'Warme Getränke',
    items: [
      { translationKey: 'latte-macchiato', name: 'Latte Macchiato', price: '3,50 €', codes: ['G'], codesPrinted: true, paperMenuVerified: true },
      { translationKey: 'cappuccino', name: 'Cappuccino', price: '3,50 €', codes: ['G'], codesPrinted: true, paperMenuVerified: true },
      { translationKey: 'coffee', name: 'Tasse Kaffee', price: '2,90 €' },
      { translationKey: 'espresso', name: 'Espresso', price: '2,90 €' },
      { translationKey: 'decaf-espresso', name: 'Espresso Hag (entkoffeiniert)', price: '2,90 €' },
      { translationKey: 'tea', name: 'Tee', price: '2,90 €' },
      { translationKey: 'hot-chocolate', name: 'Kakao', price: '3,90 €', codes: ['G'], codesPrinted: true, paperMenuVerified: true },
      { translationKey: 'espresso-corretto', name: 'Espresso Corretto', price: '3,90 €' },
    ],
  },
  {
    id: 'cold-drinks',
    title: 'Kalte Getränke',
    items: [
      {
        translationKey: 'panna-water',
        name: 'Panna Wasser',
        variants: [
          { portion: '0,25 l', price: '3,20 €' },
          { portion: '0,75 l', price: '5,00 €' },
        ],
      },
      {
        translationKey: 'san-pellegrino-water',
        name: 'San Pellegrino Wasser',
        variants: [
          { portion: '0,25 l', price: '3,20 €' },
          { portion: '0,75 l', price: '5,00 €' },
        ],
      },
      {
        translationKey: 'coca-cola',
        name: 'Coca Cola',
        codes: ['1', '9', '11'],
        codesPrinted: true,
        paperMenuVerified: true,
        variants: [
          { portion: '0,3 l', price: '3,50 €' },
          { portion: '0,4 l', price: '4,20 €' },
        ],
      },
      {
        translationKey: 'fanta',
        name: 'Fanta',
        codes: ['1', '11'],
        codesPrinted: true,
        paperMenuVerified: true,
        variants: [
          { portion: '0,3 l', price: '3,50 €' },
          { portion: '0,4 l', price: '4,20 €' },
        ],
      },
      {
        translationKey: 'apple-spritzer',
        name: 'Apfelsaftschorle',
        variants: [
          { portion: '0,3 l', price: '3,50 €' },
          { portion: '0,4 l', price: '4,20 €' },
        ],
      },
      { translationKey: 'orange-juice', name: 'Orangensaft', portion: '0,3 l', price: '3,50 €' },
      { translationKey: 'bitter-lemon', name: 'Bitter Lemon', portion: '0,3 l', price: '3,50 €', codes: ['3', '10'], codesPrinted: true, paperMenuVerified: true },
      { translationKey: 'peach-iced-tea', name: 'Eistee Pfirsich', portion: '0,3 l', price: '3,80 €', codes: ['10'], codesPrinted: true, paperMenuVerified: true },
    ],
  },
  {
    id: 'beer',
    title: 'Bier',
    items: [
      {
        translationKey: 'licher-pils-draft',
        name: 'Licher Pils – vom Fass',
        variants: [
          { portion: '0,3 l', price: '3,50 €' },
          { portion: '0,5 l', price: '4,50 €' },
        ],
      },
      {
        translationKey: 'benediktiner-weissbier-draft',
        name: 'Benediktiner Weißbier – vom Fass',
        variants: [
          { portion: '0,3 l', price: '3,50 €' },
          { portion: '0,5 l', price: '4,50 €' },
        ],
      },
      { translationKey: 'licher-alcohol-free', name: 'Licher alkoholfrei', portion: '0,5 l', price: '3,50 €' },
      { translationKey: 'benediktiner-alcohol-free', name: 'Benediktiner alkoholfrei', portion: '0,3 l', price: '4,50 €' },
      { translationKey: 'paulaner-kristall', name: 'Paulaner Kristall', portion: '0,5 l', price: '4,50 €' },
      { translationKey: 'benediktiner-dunkel', name: 'Benediktiner Dunkel', portion: '0,5 l', price: '4,50 €' },
    ],
  },
  {
    id: 'red-wine',
    title: 'Rotwein',
    introduction: 'Alle Weine enthalten Sulfite.',
    items: [
      {
        translationKey: 'lambrusco',
        name: 'Lambrusco',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'valpolicella',
        name: 'Valpolicella',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'chianti',
        name: 'Chianti',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'barbera',
        name: 'Barbera',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'monica-di-sardegna',
        name: 'Monica di Sardegna',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'anghelia-di-santadi-red',
        name: 'Anghelia di Santadi',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'cannonau-di-sardegna',
        name: 'Cannonau di Sardegna',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
    ],
  },
  {
    id: 'white-wine',
    title: 'Weißwein',
    introduction: 'Alle Weine enthalten Sulfite.',
    items: [
      {
        translationKey: 'frascati',
        name: 'Frascati',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'pino-grigio',
        name: 'Pino Grigio',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'anghelia-di-santadi-white',
        name: 'Anghelia di Santadi',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
      {
        translationKey: 'apple-wine',
        name: 'Apfelwein',
        variants: [
          { portion: '0,3 l', price: '3,00 €' },
          { portion: '0,5 l', price: '5,00 €' },
        ],
      },
      { translationKey: 'vermentino-di-sardegna', name: 'Vermentino di Sardegna', portion: '0,75 l', price: '25,00 €' },
    ],
  },
  {
    id: 'rose-wine',
    title: 'Roséwein',
    introduction: 'Alle Weine enthalten Sulfite.',
    items: [
      {
        translationKey: 'rosatello',
        name: 'Rosatello',
        variants: [
          { portion: '0,2 l', price: '5,00 €' },
          { portion: '0,5 l', price: '10,00 €' },
        ],
      },
    ],
  },
  {
    id: 'digestifs',
    title: 'Magenbitter',
    introduction: 'Zu prüfen: Sind die Portionen wirklich 2 cl?',
    needsVerification: true,
    items: [
      { translationKey: 'mirto', name: 'Mirto', portion: '2 cl', price: '3,00 €' },
      { translationKey: 'averna', name: 'Averna', portion: '2 cl', price: '3,00 €' },
      { translationKey: 'ramazzotti', name: 'Ramazzotti', portion: '2 cl', price: '3,00 €' },
      { translationKey: 'montenegro', name: 'Montenegro', portion: '2 cl', price: '3,00 €' },
      { translationKey: 'jagermeister', name: 'Jagermeister', portion: '2 cl', price: '3,00 €' },
      { translationKey: 'tequila', name: 'Tequila', portion: '2 cl', price: '3,00 €' },
    ],
  },
  {
    id: 'liqueurs',
    title: 'Liköre',
    introduction: 'Zu prüfen: Sind die Portionen wirklich 2 cl?',
    needsVerification: true,
    items: [
      { translationKey: 'limoncello', name: 'Limoncello', portion: '2 cl', price: '3,00 €' },
      { translationKey: 'sambuca', name: 'Sambuca', portion: '2 cl', price: '3,00 €' },
      { translationKey: 'amaretto', name: 'Amaretto', portion: '2 cl', price: '3,00 €' },
    ],
  },
  {
    id: 'whisky',
    title: 'Whisky',
    introduction: 'Zu prüfen: Sind die Portionen wirklich 2 cl?',
    needsVerification: true,
    items: [
      { translationKey: 'jack-daniels', name: 'Jack Daniel’s', portion: '2 cl', price: '4,50 €' },
    ],
  },
  {
    id: 'spirits',
    title: 'Spirituosen',
    introduction: 'Zu prüfen: Sind die Portionen wirklich 2 cl?',
    needsVerification: true,
    items: [
      { translationKey: 'vecchia-romagna-brandy', name: 'Vecchia Romagna / Brandy', portion: '2 cl', price: '4,00 €' },
      { translationKey: 'grappa', name: 'Grappa', portion: '2 cl', price: '3,50 €' },
      { translationKey: 'grappa-barolo', name: 'Grappa Barolo', portion: '2 cl', price: '4,50 €' },
      { translationKey: 'grappa-prosecco', name: 'Grappa Prosecco', portion: '2 cl', price: '4,00 €' },
      { translationKey: 'vodka', name: 'Wodka', portion: '2 cl', price: '3,00 €' },
    ],
  },
  {
    id: 'cocktails',
    title: 'Cocktails',
    introduction: 'Zu prüfen: Welche Größe haben die großen Cocktails?',
    needsVerification: true,
    items: [
      { translationKey: 'vodka-red-bull', name: 'Wodka Red Bull', price: '6,50 €' },
      { translationKey: 'jack-daniels-cola', name: 'Jack Daniel’s Cola', price: '5,00 €' },
      { translationKey: 'gin-tonic', name: 'Gin Tonic', price: '6,00 €' },
      { translationKey: 'vodka-coconut-orange', name: 'Wodka, Kokossirup und Orangensaft', price: '6,00 €' },
    ],
  },
  {
    id: 'starters',
    title: 'Vorspeisen',
    items: [
      { number: 1, name: 'Caprese Mozzarella di Bufala', description: 'Mozzarella, Tomaten und Basilikum', price: '11,00 €', codes: ['G', 'M'], codesPrinted: true, paperMenuVerified: true },
      { number: 2, name: 'Bresaola', description: 'Luftgetrocknetes Rinderfilet', price: '16,00 €', codes: ['G'], codesPrinted: true, paperMenuVerified: true },
      { number: 3, name: 'Carpaccio', description: 'Mariniertes rohes Rinderfilet', price: '16,50 €', codes: ['G'], codesPrinted: true, paperMenuVerified: true },
      { number: 4, name: 'Gemischte Vorspeisen', description: 'Für 2 Personen', price: '28,00 €', codes: ['G'], codesPrinted: true, paperMenuVerified: true },
      { number: 5, name: 'Vitello Tonnato', description: 'Kalbfleisch mit Thunfischcreme', price: '16,50 €', codes: ['G', 'C', 'D', 'J', 'I', 'M'], codesPrinted: true, paperMenuVerified: true },
    ],
  },
  {
    id: 'salads',
    title: 'Salate',
    items: [
      { number: 6, name: 'Beilagensalat', description: 'Kleiner gemischter Salat', price: '6,00 €', codes: ['G', 'C'], codesPrinted: true, paperMenuVerified: true },
      { number: 7, name: 'Insalata della casa Klein', description: 'Bunter Salatteller nach Art des Hauses', price: '7,20 €', codes: ['G', 'C', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 8, name: 'Insalata della casa groß', description: 'Bunter Salatteller nach Art des Hauses', price: '8,50 €', codes: ['G', 'C', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 9, name: 'Tomaten Salat', description: 'Tomaten und Zwiebeln', price: '9,50 €', codes: ['G', 'C'], codesPrinted: true, paperMenuVerified: true },
      { number: 10, name: 'Kleine Italienische Salat', description: 'Bunter Salatteller nach italienischer Art', price: '7,00 €', codes: ['G', 'C', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 11, name: 'Große Italienische Salat', description: 'Bunter Salatteller nach italienischer Art', price: '8,00 €', codes: ['G', 'C', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 12, name: 'Kleine Italienische Salat mit Thunfisch', description: 'Bunter Salatteller nach italienischer Art mit Thunfisch', price: '7,20 €', codes: ['G', 'C', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 13, name: 'Große Italienische Salat mit Thunfisch', description: 'Bunter Salatteller nach italienischer Art mit Thunfisch', price: '8,90 €', codes: ['G', 'C', '8'], codesPrinted: true, paperMenuVerified: true },
    ],
  },
  {
    id: 'traditional-pizza',
    title: 'Pizza Tradizionale',
    items: [
      { number: 14, name: 'Pane', description: 'Mit Olivenöl und Oregano', price: '6,50 €', codes: ['A1'], codesPrinted: true, paperMenuVerified: true },
      { number: 15, name: 'Pomodoro', description: 'Frische Tomaten in Stücken, Oregano und Zwiebeln', price: '9,20 €', codes: ['A1'], codesPrinted: true, paperMenuVerified: true },
      { number: 16, name: 'Margherita', description: 'Tomatensauce und Mozzarella', price: '9,20 €', codes: ['A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 17, name: 'Rossa', description: 'Nur mit Tomatensauce, ohne Käse', price: '8,50 €', codes: ['A1'], codesPrinted: true, paperMenuVerified: true },
      { number: 18, name: 'Napoli', description: 'Mozzarella, Sardellen und Kapern', price: '9,90 €', codes: ['2', 'A1', 'G', 'D', 'L', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 19, name: 'Marina', description: 'Knoblauch und Oregano', price: '9,00 €', codes: ['A1'], codesPrinted: true, paperMenuVerified: true },
      { number: 20, name: 'Salami', description: 'Mozzarella und Salami', price: '9,90 €', codes: ['1', '2', '4', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 21, name: 'Prosciutto', description: 'Mozzarella und Formvorderschinken', price: '9,90 €', codes: ['G', '5', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 22, name: 'Hawai', description: 'Mozzarella, Formvorderschinken und Ananas', price: '10,20 €', codes: ['2', '5', '11', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 23, name: 'Peperoniwurst', description: 'Mozzarella und Peperoniwurst', price: '9,90 €', codes: ['1', '2', '4', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 24, name: 'Tonno', description: 'Mozzarella, Thunfisch und Zwiebeln', price: '10,50 €', codes: ['A1', 'G', 'D', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 25, name: 'Funghi', description: 'Mozzarella und frische Pilze', price: '9,90 €', codes: ['A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 26, name: 'Vegetariana', description: 'Mozzarella und Gemüse', price: '12,50 €', codes: ['A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 27, name: 'Carrettiera', description: 'Mozzarella und frische Tomatenscheiben', price: '10,90 €', codes: ['A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 28, name: 'Quattro Stagioni', description: 'Mozzarella, Salami, Formvorderschinken, Pilze und Paprika', price: '10,50 €', codes: ['1', '2', '4', '5', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 29, name: 'Diavolo', description: 'Mozzarella, Peperoniwurst, Knoblauch, Paprika und Oliven', price: '10,50 €', codes: ['1', '2', '4', '6', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 30, name: 'Piccante', description: 'Mozzarella, Paprika, Salami, Pilze und scharfe Peperoni', price: '10,90 €', codes: ['1', '2', '4', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 31, name: 'Toscana', description: 'Mozzarella, Pilze, Salami, Tomatenscheiben, Formvorderschinken und Zwiebeln', price: '10,90 €', codes: ['1', '2', '4', '5', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 32, name: 'Sorrento', description: 'Mozzarella, Salami, Formvorderschinken und Pilze', price: '10,90 €', codes: ['1', '2', '4', '5', 'A1', 'G', '8'], codesPrinted: true, paperMenuVerified: true },
      { number: 33, name: 'Gorgonzola', description: 'Gorgonzola, Formvorderschinken und Pilze', price: '11,20 €', codes: ['2', '5', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 34, name: 'Quattro Formaggi', description: 'Vier verschiedene Käsesorten', price: '11,20 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 35, name: 'Scampi', description: 'Mozzarella, Krabben und scharfe Peperoni', price: '13,50 €', codes: ['2', 'A1', 'G', 'B', 'D', 'L'], codesPrinted: true, paperMenuVerified: true },
      { number: 36, name: 'Frutti di Mare', description: 'Mozzarella und Meeresfrüchte', price: '13,50 €', codes: ['A1', 'G', 'B', 'D', 'L'], codesPrinted: true, paperMenuVerified: true },
      { number: 37, name: 'Federico', description: 'Mozzarella, Peperoniwurst, scharfe Peperoni, Gorgonzola und Pilze', price: '11,20 €', codes: ['2', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 38, name: 'Jan', description: 'Mozzarella, Peperoniwurst, Pilze und schwarze Oliven', price: '11,20 €', codes: ['1', '2', '4', '6', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
    ],
  },
  {
    id: 'house-pizza',
    title: 'Pizza della Casa',
    items: [
      { number: 39, name: 'Sardegna', description: 'Mozzarella, Artischocken, Knoblauch und Basilikum', price: '11,20 €', codes: ['2', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 40, name: 'Gabilla', description: 'Mozzarella, Salsiccia, Pecorino und Oliven', price: '13,00 €', codes: ['1', '2', '4', '6', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 41, name: 'Cabras', description: 'Mozzarella und Bottarga (sardischer Kaviar)', price: '13,50 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 42, name: 'Emiliana', description: 'Mozzarella, Coppa und Scheiben vom Parmesankäse', price: '12,50 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 43, name: 'Speck', description: 'Mozzarella, Speck und Radicchio', price: '12,50 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 44, name: 'Parma', description: 'Mozzarella, Parmaschinken, Rucola und Scheiben vom Parmesankäse', price: '14,50 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 45, name: 'Bresaola', description: 'Mozzarella, luftgetrocknetes Rinderfilet, Rucola und Scheiben vom Parmesankäse', price: '14,50 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 46, name: 'Tonno Speciale', description: 'Mozzarella, Thunfisch, rote Zwiebeln und Gorgonzola', price: '12,50 €', codes: ['A1', 'G', 'D'], codesPrinted: true, paperMenuVerified: true },
      { number: 47, name: 'al Salmone', description: 'Mozzarella, Zwiebeln, Rucola und geräucherter Lachs', price: '14,00 €', codes: ['A1', 'G', 'D'], codesPrinted: true, paperMenuVerified: true },
      { number: 48, name: 'Ortolana', description: 'Mozzarella, verschiedene Gemüsesorten, Radicchio und Rucola', price: '12,00 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 49, name: 'dello Chef Terra', description: 'Lassen Sie sich überraschen', price: '12,90 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 50, name: 'dello Chef Mare', description: 'Lassen Sie sich überraschen', price: '12,90 €', codes: ['A1', 'G', 'B', 'D', 'L'], codesPrinted: true, paperMenuVerified: true },
      { number: 51, name: 'Masainas', description: 'Mozzarella, Krabben, Knoblauch, Artischocken und pikantes Öl', price: '12,90 €', codes: ['2', 'A1', 'G', 'B', 'D', 'L'], codesPrinted: true, paperMenuVerified: true },
      { number: 52, name: 'Muschel', description: 'Mozzarella, Muschel, Knoblauch und scharfe Peperoni', price: '14,00 €', codes: ['2', 'A1', 'G', 'L'], codesPrinted: true, paperMenuVerified: true },
      { number: 53, name: 'del Mare', description: 'Mozzarella, Krabbenfleisch und Bottarga (sardischer Kaviar)', price: '14,00 €', codes: ['2', 'A1', 'G', 'B', 'L'], codesPrinted: true, paperMenuVerified: true },
      { number: 54, name: 'ai Funghi Porcini', description: 'Mozzarella und Steinpilze', price: '12,90 €', codes: ['2', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 55, name: 'con crema Tartufata', description: 'Mozzarella, getrüffelter Rahm, Parmaschinken und Scheiben vom Parmesankäse', price: '15,00 €', codes: ['2', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 56, name: 'Siciliana', description: 'Mozzarella, Peperoni, schwarze Oliven, Kapern, Zwiebeln und Oregano', price: '11,50 €', codes: ['2', '6', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 57, name: 'Fordongianus', description: 'Mozzarella, Salsiccia und gegrillte Gemüsesorten', price: '12,90 €', codes: ['2', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 58, name: 'Oristanese', description: 'Mozzarella, Artischocken, Meeresfrüchte und Bottarga (sardischer Kaviar)', price: '13,50 €', codes: ['2', 'A1', 'G', 'B', 'D', 'L'], codesPrinted: true, paperMenuVerified: true },
      { number: 59, name: 'Speciale', description: 'Camembert, Gorgonzola, Mozzarella und Walnüsse', price: '12,00 €', codes: ['A1', 'G', 'H2'], codesPrinted: true, paperMenuVerified: true },
      { number: 61, name: 'Calzone dello Chef', description: 'Lassen Sie sich überraschen', price: '12,90 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 62, name: 'Calzone Classico', description: 'Mozzarella, Formvorderschinken und Pilze', price: '11,50 €', codes: ['2', '5', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 63, name: 'Lorenzo', description: 'Mit Nutella', price: '9,20 €', codes: ['A1'], codesPrinted: true, paperMenuVerified: true },
      { number: 64, name: 'Lucia', description: 'Mozzarella und Würstel', price: '9,90 €', codes: ['2', '4', '7', 'A1', 'G'], codesPrinted: true, paperMenuVerified: true },
      { number: 65, name: 'Pommes', description: 'Mozzarella und Pommes', price: '10,90 €', codes: ['A1', 'G'], codesPrinted: true, paperMenuVerified: true },
    ],
  },
  {
    id: 'side-dishes',
    title: 'Beilagen',
    items: [
      { number: 66, name: 'Pommes frites', portion: 'Klein', price: '6,00 €', paperMenuVerified: true },
      { number: 67, name: 'Pommes frites', portion: 'Groß', price: '8,00 €', paperMenuVerified: true },
    ],
  },
  {
    id: 'desserts',
    title: 'Dessert',
    introduction: 'Jedes Dessert auf dieser Karte kostet 6,00 €.',
    items: [
      { translationKey: 'mono-tiramisu', name: 'Mono Tiramisu', description: 'Mit Kaffee getränkter Löffelbiskuit und Mascarponecreme, mit Kakaopulver bestreut', price: '6,00 €', paperMenuVerified: true },
      { translationKey: 'cocco-ripieno', name: 'Cocco Ripieno', description: 'Natürliche Kokosnusshälfte, gefüllt mit Kokoseis', price: '6,00 €', paperMenuVerified: true },
      { translationKey: 'tartufo-classico', name: 'Tartufo Classico', description: 'Halbgefrorenes aus Zabaionecreme mit Gianduiacreme, Kakao und kandierten Haselnussstückchen', price: '6,00 €', paperMenuVerified: true },
      { translationKey: 'limone-ripieno', name: 'Limone Ripieno', description: 'Natürliche Limone, gefüllt mit Limonensorbet', price: '6,00 €', paperMenuVerified: true },
      { translationKey: 'house-dessert', name: 'Dessert nach Art des Hauses', description: 'Auf Nachfrage', price: '6,00 €', paperMenuVerified: true },
    ],
  },
]

/*
Pełne wyjaśnienie pliku:

1. Import typu:
   MenuCategory opisuje poprawną budowę każdej kategorii oraz jej pozycji.

2. menuCategories:
   Jest to jedna tablica zawierająca całe menu. Każdy obiekt ma id używane w linku,
   tytuł kategorii oraz tablicę items.

3. Pozycje menu:
   Każda pozycja ma nazwę i cenę. Numer, opis oraz wielkość porcji dodajemy tylko
   wtedy, gdy są widoczne na aktualnych zdjęciach karty.

4. Źródło danych:
   Ceny i opisy zostały przepisane ze zdjęć menu oznaczonych jako październik 2026.
   Starsze zdjęcia z 2023 i 2024 roku nie są mieszane z aktualnymi cenami.

5. Brak numeru 60:
   Numer 60 nie występuje na najnowszym widocznym zdjęciu, dlatego nie tworzymy
   niepotwierdzonej pozycji.

Zastosowanie praktyczne:
To tutaj właściciel strony może zmienić cenę, poprawić opis albo dodać nowe danie.
Komponenty menu automatycznie pokażą każdą zmianę na podstronie /menu.html.
*/
