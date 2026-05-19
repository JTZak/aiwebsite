"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
