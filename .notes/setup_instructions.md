# Istruzioni di Setup - Marina d'Albori

Questa guida ti aiuterà a configurare e avviare il progetto Marina d'Albori in locale.

## Prerequisiti

Prima di iniziare, assicurati di avere installato:

- Node.js (versione 18 o superiore)
- Git
- Un account [Supabase](https://supabase.com)

## Setup del Progetto

### 1. Clonare il Repository

```bash
git clone <repository-url>
cd marinadalbori_v5
```

### 2. Installare le Dipendenze

```bash
npm install
```

### 3. Configurazione Ambiente

Crea un file `.env.local` nella root del progetto con le seguenti variabili:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Per ottenere le credenziali Supabase:
1. Vai su [app.supabase.com](https://app.supabase.com)
2. Crea un nuovo progetto
3. Vai in Project Settings > API
4. Copia "Project URL" e "anon public" key

### 4. Avviare il Progetto

Per sviluppo:
```bash
npm run dev
```

Per produzione:
```bash
npm run build
npm run start
```

Il sito sarà disponibile su `http://localhost:3000`

### 5. Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Crea la build di produzione
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegue il linting del codice

## Struttura del Progetto

Il progetto segue la struttura App Router di Next.js 14:

```
src/
├── app/                    # App Router routes
├── components/             # Componenti React
├── lib/                    # Utility e configurazioni
└── public/                 # Asset statici
```

Per maggiori dettagli sulla struttura, consulta il file `directory_structure.md`.

## Setup Database Supabase

1. Dopo aver creato il progetto Supabase, importa lo schema del database:
   - Vai nella sezione SQL Editor
   - Usa gli script di migrazione forniti nella cartella `supabase/migrations`

2. Configura le Row Level Security (RLS):
   - Ogni tabella ha policies predefinite
   - Verifica le policy in `supabase/policies`

## Dipendenze Principali

- Next.js 15.1.4 - Framework React
- Supabase - Database e autenticazione
- Tailwind CSS - Styling
- Radix UI - Componenti UI accessibili
- Zod - Validazione schema
- React Hook Form - Gestione form

## Link Utili

- [Documentazione Next.js](https://nextjs.org/docs)
- [Documentazione Supabase](https://supabase.com/docs)
- [Guida Tailwind CSS](https://tailwindcss.com/docs)
- [Componenti Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)

## Troubleshooting

### Errori Comuni

1. **Errore di connessione Supabase**
   - Verifica che le variabili d'ambiente siano corrette
   - Controlla che il progetto Supabase sia attivo

2. **Errori TypeScript**
   - Esegui `npm run build` per verificare tutti gli errori
   - Assicurati che tutti i tipi siano correttamente definiti

3. **Problemi con le Policy**
   - Verifica le RLS policies in Supabase
   - Controlla i log per errori di permessi

