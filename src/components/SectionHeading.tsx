import { type ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = invert ? "text-white" : "text-navy-900";
  const subColor = invert ? "text-slate-300" : "text-ink-700";
  const eyebrowColor = invert ? "text-electric-300" : "text-electric-600";

  return (
    <FadeIn className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <div
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor} mb-3`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-semibold tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subColor}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
