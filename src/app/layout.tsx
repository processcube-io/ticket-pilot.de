import type { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Roboto } from "next/font/google";
import { DownloadProvider } from "@/components/download-modal";
import { OnepagerProvider } from "@/components/onepager-modal";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ticketpilot – KI-Support, den dein Dev freigibt",
  description:
    "Ticketpilot klassifiziert Tickets automatisch, lässt die KI den Fix schreiben und deinen Dev freigeben. On-Prem, BPMN-gesteuert, ab 249 €/Monat. 30 Tage kostenlos testen.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ticketpilot – KI-Support, den dein Dev freigibt",
    description:
      "Tickets automatisch klassifiziert, Fixes KI-generiert, vom Dev freigegeben. On-Prem auf deiner Infrastruktur. Von ProcessCube.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Plausible: l\u00e4dt nur, wenn NEXT_PUBLIC_PLAUSIBLE_DOMAIN gesetzt ist.
  // Optional: NEXT_PUBLIC_PLAUSIBLE_SRC \u00fcberschreibt die Script-URL
  // (z. B. f\u00fcr self-hosted Plausible: https://stats.example.com/js/script.tagged-events.js).
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const plausibleSrc =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ??
    "https://plausible.io/js/script.tagged-events.js";

  return (
    <html lang="de" className={`${barlow.variable} ${roboto.variable}`}>
      <body>
        <DownloadProvider>
        <OnepagerProvider>
        {children}
        </OnepagerProvider>
        </DownloadProvider>
        {plausibleDomain && (
          <Script
            src={plausibleSrc}
            data-domain={plausibleDomain}
            strategy="afterInteractive"
            defer
          />
        )}
      </body>
    </html>
  );
}
