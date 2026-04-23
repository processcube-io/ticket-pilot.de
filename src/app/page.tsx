import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProblemAgitation } from "@/components/problem-agitation";
import { FeatureComparison } from "@/components/feature-comparison";
import { HowItWorks } from "@/components/how-it-works";
import { LiveDemo } from "@/components/live-demo";
import { SocialProof } from "@/components/social-proof";
import { WhyItWorks } from "@/components/why-it-works";
import { UseCases } from "@/components/use-cases";
import { Integration } from "@/components/integration";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemAgitation />
      <FeatureComparison />
      <HowItWorks />
      <LiveDemo />
      <SocialProof />
      <WhyItWorks />
      <UseCases />
      <Integration />
      <Faq />
      <Pricing />
      <FinalCta />
      <Footer />
      <MobileStickyCta
        primaryHref="https://www.processcube.io/shop/category/software-abos-1?search=ticketpilot"
        primaryEvent="cta_mobile_sticky_a"
      />
    </>
  );
}
