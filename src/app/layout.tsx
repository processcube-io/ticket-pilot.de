import type { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Roboto } from "next/font/google";
import { DownloadProvider } from "@/components/download-modal";
import { OnepagerProvider } from "@/components/onepager-modal";
import { VideoProvider } from "@/components/video-modal";
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
  return (
    <html lang="de" className={`${barlow.variable} ${roboto.variable}`}>
      <body>
        <DownloadProvider>
          <OnepagerProvider>
            <VideoProvider>{children}</VideoProvider>
          </OnepagerProvider>
        </DownloadProvider>
        <Script
          src="https://plausible.io/js/pa--T6CrgJa5DrqYZ3dUAqWS.js"
          strategy="afterInteractive"
          async
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  );
}
