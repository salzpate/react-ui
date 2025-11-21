# AGENTS.md - KI-Agenten Dokumentation

## Projektübersicht

**@salzpate/react-ui** ist eine React UI-Komponentenbibliothek, die mit Tailwind CSS und Next.js 16 erstellt wurde.

## Technologie-Stack

### Kern-Technologien

- **React**: 19. (Peer Dependency)
- **Next.js**: 16 (Peer Dependency)
- **TypeScript**: 5.
- **Tailwind CSS**: 4.
- **Vite**: 7 (Build-Tool)
- **Storybook**: 10 (Komponenten-Dokumentation)

### Wichtige Dependencies

- `classnames`: CSS-Klassen-Verwaltung
- `lucide-react`: Icon-Bibliothek
- `react-hook-form`: Formular-Verwaltung

### Test-Framework

- **Vitest**: 4
- **Testing Library**: React 16
- **Coverage**: V8

## Projektstruktur

```
├── src/
│   ├── components/          # Alle UI-Komponenten
│   │   ├── Banner/
│   │   ├── ButtonLink/
│   │   ├── Contact/
│   │   ├── DataList/
│   │   ├── DisplayMore/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HeadlineTextElement/
│   │   ├── MoreLink/
│   │   ├── OpenPageLink/
│   │   ├── PageLink/
│   │   ├── PageSection/
│   │   ├── SnackBar/
│   │   └── types/
│   ├── config/              # Konfigurationsdateien
│   ├── lib/                 # Hilfsfunktionen
│   └── index.ts             # Haupt-Export
├── stories/                 # Storybook Stories
├── styles/                  # Globale Styles
├── test/                    # Test-Dateien
├── types/                   # TypeScript-Typdefinitionen
└── dist/                    # Build-Output (generiert)
```

## Verfügbare Skripte

```bash
npm run build              # TypeScript kompilieren + Vite Build + Tailwind CSS Build
npm run storybook          # Storybook Dev-Server starten (Port 6006)
npm run build-storybook    # Storybook für Produktion bauen
npm run lint               # ESLint + TypeScript Type-Check
npm run lint:style         # Stylelint für CSS-Dateien
npm run prettier           # Code formatieren
npm run test               # Vitest Tests ausführen
```

## Code-Standards

### TypeScript-Konfiguration

- **Target**: ES2020
- **Module**: ESNext
- **JSX**: react-jsx
- **Strict Mode**: Aktiviert
- **Module Resolution**: bundler

### ESLint-Regeln

- Next.js Core Web Vitals + TypeScript Config
- Storybook Plugin
- Prettier Integration
- Wichtige Custom Rules:
  - `import/extensions`: off
  - `jsx-a11y/anchor-is-valid`: off
  - `@typescript-eslint/no-unused-vars`: warn (mit `_` Prefix-Ignore)
  - `@typescript-eslint/no-explicit-any`: warn

### Prettier-Konfiguration

- **Print Width**: 240 Zeichen
- **Tab Width**: 2 Spaces
- **Single Quotes**: Ja
- **Semicolons**: Ja
- **Trailing Commas**: all
- **Arrow Parens**: avoid
- **End of Line**: lf
- **Plugins**: prettier-plugin-tailwindcss

### Styling-Konventionen

- Tailwind CSS für alle Styles
- `cn()` Funktion für bedingte Klassen (tailwind-merge)
- Globale Styles in `./styles/globals.css`

## Build-Konfiguration

### Vite Library Mode

- **Entry**: `src/index.ts`
- **Formats**: ES Modules + UMD
- **Output**: `dist/react-ui.mjs` und `dist/react-ui.umd.js`
- **Externals**: react, react-dom
- **Source Maps**: Aktiviert

### TypeScript Declarations

- Generiert mit `vite-plugin-dts`
- Output: `dist/index.d.ts`
- Excludes: Tests, Stories, Config

## Komponenten-Entwicklung

### Neue Komponente erstellen

1. **Komponenten-Ordner erstellen**:

   ```
   src/components/MeineKomponente/
   ├── MeineKomponente.tsx
   ├── index.ts
   └── MeineKomponente.test.tsx (optional)
   ```

2. **Komponente exportieren** in `src/components/index.ts`

3. **Story erstellen** in `stories/MeineKomponente.stories.tsx`:

   ```typescript
   import { Meta, StoryObj } from '@storybook/nextjs-vite';
   import MeineKomponente from '../src/components/MeineKomponente/MeineKomponente';

   const meta: Meta<typeof MeineKomponente> = {
     title: 'Components/[Kategorie]/MeineKomponente',
     component: MeineKomponente,
   } satisfies Meta<typeof MeineKomponente>;

   export default meta;
   type Story = StoryObj<typeof MeineKomponente>;

   export const Default: Story = {
     args: {
       // Props hier
     },
   };
   ```

### Komponenten-Richtlinien

- Verwende TypeScript für alle Komponenten
- Exportiere Props-Typen
- Nutze React 19 Features (keine `React.FC`)
- Verwende Tailwind CSS für Styling
- Implementiere Accessibility (a11y) Best Practices
- Schreibe Tests für kritische Funktionalität

## Testing

### Test-Setup

- **Framework**: Vitest mit jsdom
- **Setup-Datei**: `src/config/test/setupTests.ts`
- **Coverage**: Text + LCOV Reports in `./artifacts/coverage`

### Test-Konventionen

- Test-Dateien: `*.test.ts(x)`
- Verwende Testing Library für React-Tests
- Coverage-Ziel: Alle `src/` Dateien außer:
  - `src/**/index.ts`
  - `src/test/**/*`
  - Stories und Storybook-Config

## Storybook

### Entwicklung

```bash
npm run storybook
```

Öffnet Storybook auf http://localhost:6006

### Story-Struktur

- Stories in `stories/` Ordner
- Naming: `[ComponentName].stories.tsx`
- Kategorisierung über `title: 'Components/[Kategorie]/[Name]'`
- Statische Assets in `public/`

## Peer Dependencies

Beim Verwenden dieser Bibliothek müssen folgende Packages installiert sein:

- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `next`: ^16.0.0
- `classnames`: ^2.5.1

## Node.js Version

**Minimum**: Node.js 22+

## Wichtige Hinweise für Agenten

1. **Code-Formatierung**: Immer `npm run prettier` nach Änderungen ausführen
2. **Linting**: `npm run lint` vor Commits ausführen
3. **Build-Test**: Nach Komponenten-Änderungen `npm run build` testen
4. **Storybook**: Neue Komponenten immer mit Story dokumentieren
5. **TypeScript**: Keine `any` Types verwenden (nur mit Warnung erlaubt)
6. **Imports**: Relative Imports für lokale Dateien
7. **Exports**: Alle öffentlichen Komponenten über `src/index.ts` exportieren
8. **CSS**: Nur Tailwind-Klassen verwenden, keine Custom CSS-Dateien in Komponenten

## Git Workflow

- **Pre-Commit Hook**: ESLint + TypeScript Type-Check (via Husky)
- Alle Änderungen müssen Linting bestehen

## Deployment

Die Bibliothek wird als npm-Package veröffentlicht:

- **Package Name**: `@salzpate/react-ui`
- **Main Entry**: `dist/react-ui.umd.js`
- **Module Entry**: `dist/react-ui.mjs`
- **Types**: `dist/index.d.ts`
- **Styles**: `dist/style.css`

## Lizenz

Apache 2.0 - Open Source
