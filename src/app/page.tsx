import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeatureComparison } from "@/components/feature-comparison";
import { HowItWorks } from "@/components/how-it-works";
import { UseCases } from "@/components/use-cases";
import { LiveDemo } from "@/components/live-demo";
import { WhyItWorks } from "@/components/why-it-works";
import { Pricing } from "@/components/pricing";
import { Integration } from "@/components/integration";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureComparison />
      <HowItWorks />
      <UseCases />
      <LiveDemo />
      <WhyItWorks />
      <Integration />
      <Pricing />
      <FinalCta />
      <Footer />
    </>
  );
}
