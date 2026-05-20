import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";
import { services, processSteps } from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "Custom web design and branding/UI-UX — delivered, handed off, and yours to run.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to launch online."
        subtitle="Two focused offerings that cover what most projects actually need — from first sketch to a finished site, handed off and yours to run."
      />

      <section className="bg-mist-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug}>
                <article
                  id={service.slug}
                  className={`grid gap-10 lg:grid-cols-12 items-start ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-electric-500/10 text-electric-600">
                      <Icon size={26} />
                    </div>
                    <h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight text-navy-900">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-ink-700">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="rounded-2xl border border-slate-200 bg-mist-100 p-7">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-electric-600">
                        What&rsquo;s included
                      </div>
                      <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-ink-700">
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-electric-600"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="bg-mist-100 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
              Our process
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-navy-900">
              Discover, design, build, launch.
            </h2>
            <p className="mt-4 text-base text-ink-700">
              A clear, four-stage process so you always know what&rsquo;s next.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-sm font-semibold text-electric-600">
                    {step.step}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's scope your project."
        subtitle="Share what you have in mind — we'll recommend the right service mix and timeline."
      />
    </>
  );
}
