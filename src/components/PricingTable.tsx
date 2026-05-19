import Link from "next/link";
import { Check } from "lucide-react";
import { pricingTiers } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function PricingTable() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 items-stretch">
      {pricingTiers.map((tier, i) => (
        <FadeIn key={tier.name} delay={i * 0.08} className="h-full">
          <div
            className={`relative flex h-full flex-col rounded-2xl p-8 transition-all ${
              tier.highlighted
                ? "border-2 border-electric-500 bg-gradient-to-b from-navy-900 to-navy-950 text-white shadow-2xl shadow-electric-500/20 lg:-mt-4 lg:mb-0"
                : "border border-slate-200 bg-white text-navy-900 hover:shadow-lg"
            }`}
          >
            {tier.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-electric-500 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-electric-500/40">
                Most Popular
              </span>
            )}

            <div>
              <h3
                className={`text-lg font-semibold ${
                  tier.highlighted ? "text-white" : "text-navy-900"
                }`}
              >
                {tier.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-semibold tracking-tight ${
                    tier.highlighted ? "text-white" : "text-navy-900"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span
                    className={`text-sm ${
                      tier.highlighted ? "text-slate-400" : "text-ink-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                )}
              </div>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.highlighted ? "text-slate-300" : "text-ink-700"
                }`}
              >
                {tier.description}
              </p>
            </div>

            <ul className="mt-6 space-y-3 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <Check
                    size={18}
                    className={`mt-0.5 shrink-0 ${
                      tier.highlighted
                        ? "text-electric-400"
                        : "text-electric-600"
                    }`}
                  />
                  <span
                    className={
                      tier.highlighted ? "text-slate-200" : "text-ink-700"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all ${
                tier.highlighted
                  ? "bg-electric-500 text-white hover:bg-electric-400 shadow-lg shadow-electric-500/30"
                  : "bg-navy-900 text-white hover:bg-navy-800"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
