import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Features } from "@/components/features";
import { CallToAction } from "@/components/call-to-action";
import { MarketingHeader } from "@/components/marketing-header";

const MarketingPage = async () => {
  return (
    <main className="min-h-screen">
      <MarketingHeader />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default MarketingPage;
