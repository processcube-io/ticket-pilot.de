import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProblemAgitation } from "@/components/problem-agitation";
import { FeatureComparison } from "@/components/feature-comparison";
import { HowItWorks } from "@/components/how-it-works";
import { LiveDemo } from "@/components/live-demo";
import { WhyItWorks } from "@/components/why-it-works";
import { UseCases } from "@/components/use-cases";
import { Integration } from "@/components/integration";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProblemAgitation />
      <FeatureComparison />
      <HowItWorks />
      <LiveDemo />
      <WhyItWorks />
      <UseCases />
      <Integration />
      <Faq />
      <Pricing />
      <FinalCta />
      <Footer />
    </>
  );
}
