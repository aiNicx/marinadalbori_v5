# Descrizione dei File Principali

Questo documento elenca i file principali del progetto Marina d'Albori e ne descrive brevemente lo scopo.

## File di Configurazione

- `package.json`: Gestisce le dipendenze del progetto e definisce gli script npm. Contiene le configurazioni essenziali per Next.js, Tailwind, e altre dipendenze.

- `tsconfig.json`: Configurazione TypeScript che definisce le opzioni del compilatore e i path alias per una migliore organizzazione del codice.

- `next.config.js` e `next.config.ts`: Configurazione di Next.js che include impostazioni per ottimizzazione delle immagini, internazionalizzazione e altre funzionalità avanzate.

- `tailwind.config.ts`: Configurazione di Tailwind CSS con tema personalizzato, plugin e estensioni per l'UI del sito.

- `postcss.config.mjs`: Configurazione PostCSS per l'integrazione con Tailwind e altri plugin CSS.

- `eslint.config.mjs`: Regole ESLint per mantenere uno stile di codice consistente e individuare potenziali errori.

## File di Ambiente e Tipizzazione

- `next-env.d.ts`: Dichiarazioni dei tipi TypeScript per Next.js.
- `.gitignore`: Specifica quali file e cartelle devono essere ignorati da Git.
- `.windsurfrules`: Configurazioni specifiche per l'ambiente di sviluppo Windsurf.

## Struttura delle Directory

### `/src`
- **/app**: Implementazione App Router di Next.js
  - **/routes**: Raggruppa le route pubbliche
    - `page.tsx`: Homepage
    - **/components**: Componenti specifici della homepage
      - `beach-section.tsx`: Sezione spiagge
      - `hero.tsx`: Hero section
      - `la-nostra-cucina.tsx`: Sezione cucina
      - `restaurant-section.tsx`: Sezione ristorante
  - `layout.tsx`: Layout principale dell'applicazione
  - `globals.css`: Stili globali

- **/components**: Componenti riutilizzabili
  - **/layout**: Componenti strutturali
    - `header.tsx`: Header del sito
  - **/shared**: Componenti condivisi
    - `logo.tsx`: Componente logo
  - **/ui**: Componenti UI riutilizzabili
    - `button.tsx`: Componente bottone
    - `card.tsx`: Componente card
    - `container.tsx`: Wrapper container
    - `image.tsx`: Componente immagine ottimizzato
    - `navigation-menu.tsx`: Menu di navigazione
    - `sheet.tsx`: Componente foglio/modal
    - `typography.tsx`: Componenti tipografici

- **/hooks**: Custom hooks
  - `use-scroll-header.ts`: Hook per gestire lo scroll dell'header

- **/lib**: Utility e logica condivisa
  - `utils.ts`: Funzioni di utilità

### `/public`
- **/images**: Asset immagini
  - **/beaches**: Immagini delle spiagge
  - **/dishes**: Immagini dei piatti
  - `hero.jpg`: Immagine hero
  - `logo-black.svg` e `logo-white.svg`: Loghi
  - `restaurant-food.jpg`: Immagine ristorante
- File SVG vari: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`

## Script di Utilità

- `update_directory.ps1`: Script PowerShell per aggiornare e mantenere la struttura delle directory del progetto.

## Documentazione

- `README.md`: Documentazione principale del progetto con istruzioni di setup, sviluppo e deploy.
