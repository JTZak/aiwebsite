"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";
import { motion } from "framer-motion";
import { Eye, MousePointer2, Users, Zap } from "lucide-react";

const stats = [
  { label: "Page views", value: 248_310, icon: Eye, suffix: "" },
  { label: "Conversions", value: 4_982, icon: MousePointer2, suffix: "" },
  { label: "Active users", value: 1_204, icon: Users, suffix: "" },
  { label: "Load time", value: 0.8, icon: Zap, suffix: "s", decimals: 1 },
] as const;

function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    let stopped = false;
    const cycle = () => {
      if (stopped) return;
      mv.set(0);
      animate(mv, value, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      });
    };
    cycle();
    const id = setInterval(cycle, 4500);
    return () => {
      stopped = true;
      clearInterval(id);
    };
  }, [value, mv]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function AutoCounters() {
  return (
    <div className="flex h-[260px] flex-col justify-center">
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-md bg-electric-500/10 text-electric-600">
                  <Icon size={14} />
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-ink-500">
                  {s.label}
                </span>
              </div>
              <div className="mt-2 text-2xl font-semibold text-navy-900">
                <Counter
                  value={s.value}
                  decimals={"decimals" in s ? s.decimals : 0}
                  suffix={s.suffix}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
