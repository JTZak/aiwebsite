import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { FadeIn } from "./FadeIn";

export function FAQ() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((item, i) => (
        <FadeIn key={item.question} delay={i * 0.04}>
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-left">
              <span className="text-base font-medium text-navy-900">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className="mt-0.5 shrink-0 text-electric-600 transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              {item.answer}
            </p>
          </details>
        </FadeIn>
      ))}
    </div>
  );
}
