"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Summer Collection",
    subtitle: "Now available",
    gradient: "linear-gradient(135deg, #9333ea 0%, #ec4899 100%)",
  },
  {
    title: "Bold Typography",
    subtitle: "Designed to convert",
    gradient: "linear-gradient(135deg, #2a1f5e 0%, #a855f7 100%)",
  },
  {
    title: "Smooth Interactions",
    subtitle: "Crafted with care",
    gradient: "linear-gradient(135deg, #1d1640 0%, #c026d3 100%)",
  },
  {
    title: "Pixel Perfect",
    subtitle: "On every device",
    gradient: "linear-gradient(135deg, #3b2a82 0%, #f0abfc 100%)",
  },
];

export function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-[260px] flex-col">
      <div className="relative flex-1 overflow-hidden rounded-xl">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex items-end p-5"
            style={{ background: slides[index].gradient }}
          >
            <div>
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80"
              >
                {slides[index].subtitle}
              </motion.div>
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.4 }}
                className="mt-1 text-xl font-semibold text-white"
              >
                {slides[index].title}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-3 flex justify-center gap-1.5">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-electric-500" : "w-1.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
