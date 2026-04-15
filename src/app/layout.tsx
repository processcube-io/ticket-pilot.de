import type { Metadata } from "next";
import { Barlow_Condensed, Roboto } from "next/font/google";
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
  title: "Ticketpilot – Support-Tickets lösen sich von selbst",
  description:
    "Ticketpilot versteht jedes Ticket, startet automatisch den richtigen Prozess und liefert direkt eine Lösung – ohne manuelle Bearbeitung.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ticketpilot – Support-Tickets lösen sich von selbst",
    description: "Automatisierung für jeden. Von ProcessCube.",
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
      <body>{children}</body>
    </html>
  );
}
