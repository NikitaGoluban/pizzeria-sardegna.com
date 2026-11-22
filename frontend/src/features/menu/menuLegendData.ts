export interface MenuLegendEntry {
  code: string
  translationKey: string
  defaultLabel: string
}

export const allergenEntries: MenuLegendEntry[] = [
  { code: 'A, A1', translationKey: 'wheat', defaultLabel: 'Gluten (Weizen)' },
  { code: 'A2', translationKey: 'rye', defaultLabel: 'Gluten (Roggen)' },
  { code: 'A3', translationKey: 'barley', defaultLabel: 'Gluten (Gerste)' },
  { code: 'A4', translationKey: 'oats', defaultLabel: 'Gluten (Hafer)' },
  { code: 'B', translationKey: 'crustaceans', defaultLabel: 'Krebstiere' },
  { code: 'C', translationKey: 'eggs', defaultLabel: 'Eier' },
  { code: 'D', translationKey: 'fish', defaultLabel: 'Fische' },
  { code: 'E', translationKey: 'peanuts', defaultLabel: 'Erdnüsse' },
  { code: 'F', translationKey: 'soy', defaultLabel: 'Soja' },
  { code: 'G', translationKey: 'milk', defaultLabel: 'Milch und Laktose' },
  { code: 'H1', translationKey: 'nuts', defaultLabel: 'Schalenfrüchte' },
  { code: 'H2', translationKey: 'hazelnuts', defaultLabel: 'Haselnüsse' },
  { code: 'I', translationKey: 'mustard', defaultLabel: 'Senf' },
  { code: 'J', translationKey: 'celery', defaultLabel: 'Sellerie' },
  { code: 'K', translationKey: 'sesame', defaultLabel: 'Sesamsamen' },
  { code: 'L', translationKey: 'molluscs', defaultLabel: 'Weichtiere' },
  { code: 'M', translationKey: 'sulphites', defaultLabel: 'Sulfite' },
  { code: 'N', translationKey: 'lupin', defaultLabel: 'Lupinen' },
]

export const additiveEntries: MenuLegendEntry[] = [
  { code: '1', translationKey: 'colouring', defaultLabel: 'mit Farbstoff(en)' },
  { code: '2', translationKey: 'preservatives', defaultLabel: 'mit Konservierungsstoff(en)' },
  { code: '3', translationKey: 'antioxidants', defaultLabel: 'mit Antioxidationsmittel' },
  { code: '4', translationKey: 'flavour-enhancers', defaultLabel: 'mit Geschmacksverstärker(n)' },
  { code: '5', translationKey: 'formed-ham', defaultLabel: 'Formvorderschinken (85 % Fleisch)' },
  { code: '6', translationKey: 'blackening-agent', defaultLabel: 'mit Schwärzungsmittel' },
  { code: '7', translationKey: 'phosphate', defaultLabel: 'mit Phosphat' },
  { code: '8', translationKey: 'milk-protein', defaultLabel: 'mit Milcheiweiß' },
  { code: '9', translationKey: 'caffeine', defaultLabel: 'koffeinhaltig' },
  { code: '10', translationKey: 'quinine', defaultLabel: 'chininhaltig' },
  { code: '11', translationKey: 'sweetener', defaultLabel: 'mit Süßungsmittel' },
]

