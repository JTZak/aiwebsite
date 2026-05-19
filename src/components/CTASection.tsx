import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "Ready to build something great?",
  subtitle = "Tell us about your business and we'll come back with a tailored plan within one business day.",
  primaryHref = "/contact",
  primaryLabel = "Start your project",
  secondaryHref = "/pricing",
  secondaryLabel = "View pricing",
}: CTASectionProps) {
  return (
    <section className="bg-navy-950 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-10 sm:p-14 text-center">
            <div
              className="absolute inset-0 bg-grid opacity-40"
              aria-hidden
            />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[120%] bg-electric-500/20 blur-3xl" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
                {subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href={primaryHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-electric-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-electric-500/30 transition-all hover:bg-electric-400 hover:-translate-y-0.5"
                >
                  {primaryLabel}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
