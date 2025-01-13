# Guida allo Stile - Marina d'Albori

## Configurazione Tailwind

### Colori
```css
--primary: 198 85% 45%     /* Blu Marina */
--secondary: 240 4.8% 95.9% /* Grigio chiaro */
--background: 0 0% 100%    /* Bianco */
--foreground: 240 10% 3.9% /* Quasi nero */
```

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

### Container
Container centrato con padding di 2rem e larghezza massima di 1400px.

## Design System

### Componenti Base
- `Button`: Componente base per tutti i pulsanti
- `Card`: Container per contenuti correlati
- `Sheet`: Pannelli scorrevoli e modali
- `Typography`: Componenti per testo e titoli
- `Image`: Wrapper ottimizzato per immagini
- `Container`: Layout wrapper responsive

### Tipografia
```tsx
<Heading>Titoli principali</Heading>
<Text>Testo del corpo</Text>
```

## Pattern Comuni

### Layout
```tsx
<Container>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Contenuto */}
  </div>
</Container>
```

### Spaziature
- Padding sezioni: `py-12 md:py-16 lg:py-24`
- Gap grid: `gap-4` o `gap-6`
- Margin componenti: `mb-4` o `mb-6`

### Responsive Design
1. Mobile First
```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Il testo scala con i breakpoint */}
</div>
```

2. Layout Fluido
```tsx
<div className="grid grid-cols-1 md:grid-cols-2">
  {/* Da 1 a 2 colonne su tablet */}
</div>
```

## Convenzioni di Naming

### Classi Utility
- Usa nomi descrittivi: `hover:bg-primary/10` invece di `hover:bg-blue-500/10`
- Ordina le classi: layout → dimensioni → spaziature → colori → stati

### Pattern @apply
Usa @apply solo per stili molto ripetuti:
```css
@layer components {
  .nav-link {
    @apply text-sm font-medium hover:text-primary transition-colors;
  }
}
```

## Best Practices

1. **Consistenza**
   - Usa le variabili CSS per colori e radius
   - Mantieni spaziature consistenti tra sezioni simili

2. **Responsive**
   - Inizia sempre dal mobile
   - Usa i breakpoint standard di Tailwind
   - Testa su tutti i dispositivi

3. **Performance**
   - Minimizza l'uso di custom CSS
   - Usa le utility classes di Tailwind
   - Ottimizza le immagini con next/image

4. **Accessibilità**
   - Mantieni contrasto adeguato
   - Usa semantic HTML
   - Implementa dark mode correttamente
