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

const DOWNLOAD_URL = "https://www.processcube.io/download";
const CTA_LABEL = "Kostenlos starten";

export default function Home() {
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
      <Pricing />
      <FinalCta ctaHref={DOWNLOAD_URL} ctaLabel={CTA_LABEL} />
      <Footer />
      <MobileStickyCta
        primaryHref={DOWNLOAD_URL}
        primaryLabel={CTA_LABEL}
        primaryEvent="cta_mobile_sticky"
      />
    </>
  );
}
