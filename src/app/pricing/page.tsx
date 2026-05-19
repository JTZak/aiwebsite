import { PageHeader } from "@/components/PageHeader";
import { PricingTable } from "@/components/PricingTable";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for every kind of business — from Starter to Enterprise.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Honest pricing, no surprises."
        subtitle="Pick the package that fits today — you can always grow into the next one. Every plan includes senior design and ongoing support during launch."
      />

      <section className="bg-white pt-16 pb-24 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <PricingTable />
          <p className="mt-10 text-center text-sm text-ink-500">
            Prices in USD. Payment plans available. Need something custom?{" "}
            <a
              href="/contact"
              className="text-electric-600 font-medium hover:underline"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked"
            title="Answers to the questions we hear most."
            subtitle="Don't see your question? Ask us directly — we usually reply within a business day."
          />
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which plan is right?"
        subtitle="Send us a quick note and we'll point you to the best fit — no pressure, no hard sell."
        primaryLabel="Get a recommendation"
        secondaryHref="/services"
        secondaryLabel="See services"
      />
    </>
  );
}
