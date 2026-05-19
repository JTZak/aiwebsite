import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <IndustriesGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
