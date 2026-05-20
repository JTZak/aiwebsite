"use client";

import { motion } from "framer-motion";

const shapes = [
  { x: "8%", y: "20%", size: 140, delay: 0, color: "#3b82f6" },
  { x: "85%", y: "30%", size: 200, delay: 1.2, color: "#60a5fa" },
  { x: "20%", y: "75%", size: 100, delay: 0.6, color: "#2563eb" },
  { x: "75%", y: "80%", size: 160, delay: 1.8, color: "#93c5fd" },
  { x: "50%", y: "15%", size: 80, delay: 0.3, color: "#3b82f6" },
];

export function ShowcaseHero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />

      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {shapes.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              background: s.color,
              opacity: 0.18,
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 20, 0, -20, 0],
              scale: [1, 1.1, 1, 0.95, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">
            Showcase
          </div>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            A taste of what we can{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-electric-400 via-electric-300 to-electric-400 bg-clip-text text-transparent">
                build for you
              </span>
              <motion.span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-electric-400 to-electric-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Sit back and watch. Every interaction below is a live preview of the
            kind of polish we put into the websites we ship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
