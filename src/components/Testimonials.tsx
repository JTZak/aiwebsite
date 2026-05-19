import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kind words"
          title="Trusted by founders, marketers, and owners."
          subtitle="The work speaks loudest through the people we've shipped for."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <Quote
                  size={28}
                  className="text-electric-500/40"
                  aria-hidden
                />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-700 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-200 pt-4">
                  <div className="text-sm font-semibold text-navy-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-500">
                    {t.role}, {t.company}
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
