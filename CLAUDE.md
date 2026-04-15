# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**ticket-pilot.de** is the public-facing landing page for Ticket-Pilot, a Human-in-the-Loop Coding Agent product by ProcessCube (Gelsenkirchen). It is a statically exported Next.js SPA designed for GitHub Pages hosting.

## Build Commands

```bash
pnpm install          # Abhaengigkeiten installieren
pnpm dev              # Dev-Server auf http://localhost:3000
pnpm build            # Static Export nach out/
```

## Tech Stack

- **Next.js 15** with `output: 'export'` (static SPA, no server features)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **TypeScript** strict mode
- **Fonts**: Barlow Condensed + Roboto via `next/font/google` (DSGVO-konform, self-hosted at build time)

## Architecture

Single-page landing page with section-based component architecture. Jede Sektion ist ein Viewport-Block (`min-h-[calc(100dvh-64px)]`) mit vertikal zentriertem Content und einem klickbaren "Weiter"-Scroll-Indikator.

- `src/app/layout.tsx` — Root layout (fonts, metadata)
- `src/app/page.tsx` — Assembles all sections
- `src/app/globals.css` — Tailwind config, design tokens (`@theme` block), custom styles, scroll-hint animation
- `src/components/` — One file per page section (header, hero, pricing, etc.)
- `src/components/ui/` — Reusable primitives (button, card, eyebrow-badge, section-wrapper, scroll-hint)

### Section Pattern

- `SectionWrapper` rendert jede Sektion als `<section>` mit Viewport-Hoehe, Flex-Zentrierung und optionalem `ScrollHint`
- `ScrollHint` ist eine Client-Komponente die per `closest('section').nextElementSibling` zur naechsten Sektion scrollt
- Die Hero-Komponente nutzt kein `SectionWrapper`, implementiert das Pattern aber direkt (eigenes Grid-Layout)
- Letzte Sektion (`FinalCta`) setzt `hideScrollHint` um den Weiter-Button auszublenden
- Header-Navigation mit IntersectionObserver fuer aktive Sektionsmarkierung (orange Unterstreichung)

### Design Tokens

Definiert in `globals.css` via Tailwind's `@theme` block. Key tokens: `--color-accent` (#F79646), `--color-bg` (#1C1C1E), `--color-card` (#2A2A2A). Custom breakpoints: `tablet` (760px), `desktop` (1100px).

## Design Reference

The `reguirements/` folder contains the source materials:
- `ticketpilot_landingpage_designvorschlag.html` — Complete HTML mockup (visual source of truth)
- `DESIGN_SYSTEM.md` — ProcessCube Studio design system tokens
- Logo images (favicon + horizontal variants)

## ProcessCube Ecosystem Conventions

- **Language**: TypeScript strict mode. Code in English, comments and documentation in German.
- **Commit messages**: Conventional Commits format, in German.
- **Branch strategy**: Single-branch workflow (`main` only).
- **No cloud lock-in**: Static export, hostable anywhere (GitHub Pages, Docker, k8s).
- **DSGVO-compliant**: No external font loading, no tracking without consent.
- **No `console.log`** in production code.
- **No auto-commit/push**: Only on explicit user instruction.

## Related Repositories

| Repo | Purpose |
|---|---|
| `agent-loop` | Ticket-Pilot PoC backend (Hono) + Chat UI (Next.js) |
| `ProcessCube.Products` | Cuby plugin marketplace integration |
| `docs.processcube.io` | ProcessCube platform documentation (Nextra 4.0) |
