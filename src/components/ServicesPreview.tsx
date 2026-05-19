import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="A focused set of services, delivered with care."
          subtitle="We keep our offering tight so we can go deep — every engagement is led by senior designers and engineers."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={i * 0.08}>
                <Link
                  href="/services"
                  className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-electric-300 hover:shadow-xl hover:shadow-electric-500/10 hover:-translate-y-1"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-electric-500/10 text-electric-600 transition-colors group-hover:bg-electric-500 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700 flex-1">
                    {service.blurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-electric-600">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
