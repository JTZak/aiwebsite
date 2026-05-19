"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-electric-300 backdrop-blur">
            <Sparkles size={12} />
            Now booking projects for the next quarter
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Modern websites for{" "}
            <span className="bg-gradient-to-r from-electric-400 to-electric-300 bg-clip-text text-transparent">
              every business
            </span>
            , every industry.
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300">
            We design, build, and care for fast, beautiful websites — from
            scrappy startups to established enterprises. One team, real
            craftsmanship, real results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-electric-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-electric-500/30 transition-all hover:bg-electric-400 hover:shadow-electric-400/40 hover:-translate-y-0.5"
            >
              Start your project
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              View pricing
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { label: "Sites launched", value: "120+" },
              { label: "Industries served", value: "20+" },
              { label: "Client satisfaction", value: "4.9/5" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-2xl sm:text-3xl font-semibold text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
