import type { NextConfig } from "next";

/**
 * HINWEIS: "output: export" wurde entfernt, weil wir zwei Server-Features nutzen:
 *   - Middleware fuer den 50/50-A/B-Split (src/middleware.ts)
 *   - POST-Route /api/lead fuer das Lead-Formular in Variante B
 *
 * Deployment-Ziel muss ein Node/Edge-Runtime sein:
 *   - Vercel (Default, empfohlen)
 *   - Netlify mit Next-Runtime
 *   - Eigenes Docker/Node (next build && next start)
 *
 * Falls wieder statisch gewuenscht: output: "export" zurueck, dann muss der
 * A/B-Split clientseitig erfolgen und /api/lead auf ein externes Service
 * (HubSpot, Odoo, n8n, Zapier) umgezogen werden.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
