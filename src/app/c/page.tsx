import { HeaderC } from "@/components/header-c";
import { HeroC } from "@/components/hero-c";
import { ProblemAgitation } from "@/components/problem-agitation";
import { VsCopilot } from "@/components/vs-copilot";
import { HowItWorks } from "@/components/how-it-works";
import { LiveDemo } from "@/components/live-demo";
import { SocialProof } from "@/components/social-proof";
import { Testimonials } from "@/components/testimonials";
import { WhyItWorks } from "@/components/why-it-works";
import { Integration } from "@/components/integration";
import { Compliance } from "@/components/compliance";
import { WhyNow } from "@/components/why-now";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

// Direkter Studio-Download \u2013 Variante C erfasst KEINE Kundendaten via Formular.
// Alle primaeren CTAs zeigen auf den ProcessCube-Studio-Download, von wo aus
// der/die User direkt mit dem Setup loslegt.
const DOWNLOAD_URL = "https://www.processcube.io/download";
// Mental Availability (Byron Sharp): ein einziger CTA-Text, ueberall identisch.
const CTA_LABEL = "Kostenlos starten";

/**
 * Variante C \u2013 finale Variante.
 * Vercel-inspirierter Aufbau, ohne Lead-Formular. Alle Conversions gehen
 * direkt in den ProcessCube-Shop. Keine clientseitige Datenerfassung.
 */
export default function VariantC() {
  return (
    <>
      <HeaderC />
      <HeroC />
      <ProblemAgitation />
      <VsCopilot />
      <HowItWorks />
      <LiveDemo ctaHref={DOWNLOAD_URL} ctaLabel={CTA_LABEL} />
      <SocialProof />
      <Testimonials />
      <WhyItWorks />
      <Integration />
      <Compliance />
      <WhyNow ctaHref={DOWNLOAD_URL} ctaLabel={CTA_LABEL} />
      <Faq />
      <Pricing ctaHref={DOWNLOAD_URL} ctaLabel={CTA_LABEL} />
      <FinalCta ctaHref={DOWNLOAD_URL} ctaLabel={CTA_LABEL} />
      <Footer />
      <MobileStickyCta
        primaryHref={DOWNLOAD_URL}
        primaryLabel={CTA_LABEL}
        primaryEvent="cta_mobile_sticky_c"
      />
    </>
  );
}

export const metadata = {
  title: "Ticketpilot \u2013 KI-Support, den dein Dev freigibt",
  description:
    "Vercel-inspirierte finale Variante: zentrierter Hero, Kundenreferenz (BEHR IT + ProcessCube), Compliance-Block. Conversions direkt im Shop.",
};
