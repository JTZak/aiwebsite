import { industries } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function IndustriesGrid() {
  return (
    <section className="bg-mist-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Built for every kind of business."
          subtitle="From neighborhood shops to enterprise teams, we've shipped sites across nearly every vertical you can think of."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <FadeIn key={industry.name} delay={i * 0.04}>
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-electric-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy-900 text-electric-300 transition-colors group-hover:bg-electric-500 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div className="text-sm font-medium text-navy-900">
                    {industry.name}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
