# Standard di Codifica Marina d'Albori

Questo documento definisce gli standard di codifica e le best practice per il progetto Marina d'Albori.

## Standard di Stile

### ESLint e TypeScript
- Utilizzo delle configurazioni `next/core-web-vitals` e `next/typescript`
- Strict mode TypeScript abilitato
- Controllo obbligatorio dei tipi

### Formattazione
- Indentazione: 2 spazi
- Fine riga: LF (Unix-style)
- Punto e virgola obbligatorio
- Virgole finali nei multi-line
- Lunghezza massima riga: 80 caratteri
- Utilizzare sempre singoli apici per le stringhe

## Convenzioni di Naming

### Componenti React
- PascalCase per i nomi dei componenti (es. `RestaurantSection.tsx`)
- Suffisso `.tsx` per i file dei componenti
- File name deve corrispondere al nome del componente

### Variabili e Funzioni
- camelCase per variabili e funzioni
- Prefissi comuni:
  - `is/has/should` per booleani (es. `isLoading`, `hasError`)
  - `get/set` per funzioni accessor (es. `getUserData`)
  - `handle` per event handlers (es. `handleSubmit`)
- Costanti in UPPERCASE_SNAKE_CASE

### TypeScript
- Interfacce: prefisso `I` (es. `IUserData`)
- Types: suffisso `Type` (es. `ButtonType`)
- Enums: evitare, usare const objects o union types

## Pattern e Best Practices

### Componenti React
```typescript
// Esempio di struttura componente
import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface IButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button: FC<IButtonProps> = ({
  variant = 'primary',
  children
}) => {
  return (
    <button
      className={cn(
        'base-styles',
        variant === 'primary' ? 'primary-styles' : 'secondary-styles'
      )}
    >
      {children}
    </button>
  )
}
```

### Struttura dei File
1. Imports
2. Interfaces/Types
3. Componente esportato
4. Subcomponenti (se necessari)
5. Helper functions

### Server Components
- Preferire Server Components quando possibile
- `use client` solo quando necessario per:
  - Gestione eventi
  - Hooks React
  - Browser APIs

### Gestione State
- Preferire React Server Components
- useState solo per UI state locale
- Zustand per state globale se necessario

## Performance

### Ottimizzazioni
- Lazy loading per componenti non critici
- Immagini ottimizzate con next/image
- Suspense boundaries per loading states
- Route handlers per API endpoints

### Caching
- Utilizzare la cache di Next.js
- Implementare strategie di revalidation appropriate

## Eccezioni e Regole Custom

### Tailwind CSS
- Utilizzare utility classes direttamente
- `@apply` solo per stili ripetuti frequentemente
- Mantenere un theme consistente in `tailwind.config.ts`

### Database
- Utilizzare Supabase SDK
- Astrarre le query in funzioni riutilizzabili
- Validare input con Zod

### Testing
- Unit test per utility functions
- Integration test per componenti complessi
- E2E test per flussi critici

## Accessibilità
- Semantic HTML obbligatorio
- ARIA labels dove necessario
- Contrasto colori conforme a WCAG
- Supporto keyboard navigation

## Sicurezza
- Validazione input lato server
- Sanitizzazione dati
- Protezione route admin
- Gestione appropriata delle sessioni

## Note Aggiuntive
- Documentare le funzioni complesse
- Mantenere i componenti sotto le 150 righe
- Estrarre logica complessa in hooks custom
- Seguire il principio DRY (Don't Repeat Yourself)
