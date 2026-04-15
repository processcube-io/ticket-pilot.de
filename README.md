# ticket-pilot.de

Oeffentliche Landingpage fuer [Ticket-Pilot](https://ticket-pilot.de) — ein Human-in-the-Loop Coding Agent von ProcessCube (Gelsenkirchen).

## Voraussetzungen

- **Node.js** >= 22
- **pnpm** >= 10

## Lokale Entwicklung

```bash
# Abhaengigkeiten installieren
pnpm install

# Dev-Server starten (http://localhost:3000)
pnpm dev
```

## Build

```bash
# Statischen Export erzeugen (Ausgabe: out/)
pnpm build
```

Der Build erzeugt eine vollstaendig statische SPA im `out/`-Verzeichnis. Diese kann auf jedem Webserver gehostet werden.

## Deployment

### GitHub Pages (automatisch)

Das Deployment auf GitHub Pages erfolgt automatisch bei jedem Push auf `main` via GitHub Actions (`.github/workflows/deploy.yml`).

**Ablauf:**
1. Push auf `main`
2. GitHub Action installiert Abhaengigkeiten (`pnpm install --frozen-lockfile`)
3. Statischer Build (`pnpm build`)
4. Upload und Deployment auf GitHub Pages

### Manuelles Deployment

Der statische Export aus `out/` kann auf jedem Webserver gehostet werden:

```bash
pnpm build

# Beispiel: lokaler Preview mit einem beliebigen HTTP-Server
npx serve out
```

## Tech Stack

| Technologie | Version | Zweck |
|---|---|---|
| Next.js | 15 | Framework (Static Export) |
| React | 19 | UI |
| Tailwind CSS | 4 | Styling |
| TypeScript | 5.7 | Typsicherheit |

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout (Fonts, Metadata)
│   ├── page.tsx            # Seitenaufbau (alle Sektionen)
│   └── globals.css         # Tailwind Config, Design Tokens, Animationen
├── components/
│   ├── header.tsx          # Sticky Header mit aktiver Sektionsmarkierung
│   ├── hero.tsx            # Hero-Bereich
│   ├── feature-comparison.tsx
│   ├── how-it-works.tsx
│   ├── use-cases.tsx
│   ├── live-demo.tsx
│   ├── why-it-works.tsx
│   ├── pricing.tsx
│   ├── integration.tsx
│   ├── final-cta.tsx
│   ├── footer.tsx
│   └── ui/                 # Wiederverwendbare Primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── eyebrow-badge.tsx
│       ├── scroll-hint.tsx # Klickbarer "Weiter"-Indikator
│       └── section-wrapper.tsx
reguirements/               # Design-Vorlagen und Referenzmaterial
public/                     # Statische Assets (Logos, Favicon)
```

## Design

- **Fonts**: Barlow Condensed (Headlines) + Roboto (Body), DSGVO-konform via `next/font/google` (self-hosted bei Build)
- **Farben**: Dunkles Theme (`#1C1C1E`), Akzent-Orange (`#F79646`)
- **Layout**: Viewport-Block-Sektionen mit zentriertem Content und Scroll-Navigation

## Lizenz

Proprietaer — ProcessCube GmbH
