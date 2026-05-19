import { Zap } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PricingTable } from "@/components/PricingTable";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { addOns } from "@/lib/content";

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

      <section className="bg-white pt-16 pb-20 sm:pt-20 sm:pb-24">
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

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Add-ons"
            title="Need it faster?"
            subtitle="Optional extras you can add to any tier at checkout."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-1">
            {addOns.map((addOn, i) => (
              <FadeIn key={addOn.name} delay={i * 0.06}>
                <div className="flex items-start gap-5 rounded-2xl border border-electric-200 bg-gradient-to-br from-electric-50 to-white p-6 sm:p-7 transition-all hover:border-electric-400 hover:shadow-md">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric-500 text-white shadow-md shadow-electric-500/30">
                    <Zap size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-navy-900">
                        {addOn.name}
                      </h3>
                      <span className="text-lg font-semibold text-electric-600">
                        {addOn.price}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                      {addOn.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
