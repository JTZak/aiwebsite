"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Code2, Sparkles } from "lucide-react";

const tabs = [
  {
    label: "Design",
    icon: Layout,
    body: "Custom layouts crafted around your brand, with attention to every spacing, color, and interaction.",
    points: ["Mood boards", "Wireframes", "Prototypes"],
  },
  {
    label: "Build",
    icon: Code2,
    body: "Modern, accessible, fast websites built on the same stack the best teams in tech are using today.",
    points: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Polish",
    icon: Sparkles,
    body: "Smooth animations, responsive details, and conversion-focused copy that all add up to a site that feels alive.",
    points: ["Micro-interactions", "Motion design", "Accessibility"],
  },
];

export function AutoTabs() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % tabs.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-[260px] flex-col">
      <div className="relative flex gap-1 rounded-lg border border-slate-200 bg-mist-50 p-1">
        {tabs.map((t, i) => {
          const Icon = t.icon;
          const isActive = active === i;
          return (
            <div
              key={t.label}
              className="relative flex-1 px-3 py-2 text-center"
            >
              {isActive && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-md bg-white shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`relative inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                  isActive ? "text-navy-900" : "text-ink-500"
                }`}
              >
                <Icon size={14} />
                {t.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="relative flex-1 mt-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-sm leading-relaxed text-ink-700">
              {tabs[active].body}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {tabs[active].points.map((p) => (
                <li
                  key={p}
                  className="rounded-full bg-electric-500/10 px-2.5 py-1 text-xs font-medium text-electric-600"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
