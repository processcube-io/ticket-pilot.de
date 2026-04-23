import { Header, type NavLink } from "@/components/header";
import { HeroB } from "@/components/hero-b";

// Nav-Reihenfolge MUSS der Scroll-Reihenfolge dieser Seite entsprechen.
const navLinksB: NavLink[] = [
  { href: "#problem", label: "Das Problem" },
  { href: "#vs", label: "vs. Copilot" },
  { href: "#proof", label: "Eigene Zahlen" },
  { href: "#warum", label: "ROI-Rechnung" },
  { href: "#compliance", label: "Compliance" },
  { href: "#faq", label: "FAQ" },
  { href: "#pricing", label: "Pricing" },
  { href: "#lead", label: "Kostenlos testen" },
];
import { ProblemAgitation } from "@/components/problem-agitation";
import { FeatureComparison } from "@/components/feature-comparison";
import { HowItWorks } from "@/components/how-it-works";
import { LiveDemo } from "@/components/live-demo";
import { SocialProof } from "@/components/social-proof";
import { Testimonials } from "@/components/testimonials";
import { VsCopilot } from "@/components/vs-copilot";
import { WhyItWorks } from "@/components/why-it-works";
import { UseCases } from "@/components/use-cases";
import { Integration } from "@/components/integration";
import { Compliance } from "@/components/compliance";
import { WhyNow } from "@/components/why-now";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { FinalCtaB } from "@/components/final-cta-b";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

export default function VariantB() {
  return (
    <>
      <Header navLinks={navLinksB} />
      <HeroB />
      <ProblemAgitation />
      <VsCopilot />
      <FeatureComparison />
      <HowItWorks />
      <LiveDemo ctaHref="#lead" />
      <SocialProof />
      <Testimonials />
      <WhyItWorks />
      <UseCases />
      <Integration />
      <Compliance />
      <WhyNow />
      <Faq />
      <Pricing ctaHref="#lead" />
      <FinalCtaB />
      <Footer />
      <MobileStickyCta primaryHref="#lead" primaryEvent="cta_mobile_sticky_b" />
    </>
  );
}

export const metadata = {
  title: "Ticketpilot (B) – KI-Support, den dein Dev freigibt",
  description:
    "Variante B: Mit Video, Copilot-Vergleich, Compliance-Block, Warum-jetzt-Rechnung und Lead-Capture statt Direkt-Shop.",
};
