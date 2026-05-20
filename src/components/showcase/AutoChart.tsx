"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const datasets = [
  [42, 58, 51, 73, 65, 88, 96],
  [28, 41, 65, 49, 72, 60, 84],
  [55, 38, 70, 62, 80, 45, 91],
];

export function AutoChart() {
  const [index, setIndex] = useState(0);
  const data = datasets[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % datasets.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const total = data.reduce((a, b) => a + b, 0);
  const avg = Math.round(total / data.length);
  const peak = Math.max(...data);

  return (
    <div className="flex h-[260px] flex-col">
      <div className="flex items-end justify-between mb-3">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-ink-500">
            Weekly visits
          </div>
          <motion.div
            key={total}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-0.5 text-2xl font-semibold text-navy-900"
          >
            {total.toLocaleString()}
          </motion.div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-electric-500/10 px-2 py-1 text-xs font-medium text-electric-600">
          <TrendingUp size={12} />
          +{Math.round(((peak - avg) / avg) * 100)}%
        </div>
      </div>

      <div className="relative flex flex-1 items-end gap-2 rounded-lg bg-mist-50 p-3">
        {data.map((value, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-2">
            <motion.div
              key={`${index}-${i}`}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full rounded-md bg-gradient-to-t from-electric-600 to-electric-400 shadow-sm"
            />
            <span className="text-[10px] font-medium text-ink-500">
              {days[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
