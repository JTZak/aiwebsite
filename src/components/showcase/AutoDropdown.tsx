"use client";

import { useEffect, useState } from "react";
import { ChevronDown, User, Settings, Bell, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
  { icon: Bell, label: "Notifications" },
  { icon: LogOut, label: "Sign out" },
] as const;

export function AutoDropdown() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(-1);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const itemDelay = 550;
    const cycleLength = 1000 + items.length * itemDelay + 1200;

    const cycle = () => {
      timers.push(setTimeout(() => setOpen(true), 600));
      items.forEach((_, i) => {
        timers.push(
          setTimeout(() => setHovered(i), 1000 + i * itemDelay)
        );
      });
      timers.push(
        setTimeout(() => setHovered(-1), 1000 + items.length * itemDelay)
      );
      timers.push(
        setTimeout(() => setOpen(false), 1200 + items.length * itemDelay)
      );
    };

    cycle();
    const interval = setInterval(cycle, cycleLength);
    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex h-[260px] items-start justify-center pt-6">
      <div className="relative w-60">
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-lg border bg-white px-4 py-2.5 text-sm font-medium text-navy-900 shadow-sm transition-all ${
            open
              ? "border-electric-500 ring-2 ring-electric-500/20"
              : "border-slate-200"
          }`}
        >
          <span className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-electric-500 text-white text-xs font-bold">
              A
            </span>
            Account
          </span>
          <ChevronDown
            size={16}
            className={`text-ink-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute z-10 mt-2 w-full rounded-lg border border-slate-200 bg-white py-1 shadow-xl shadow-navy-900/10"
            >
              {items.map((it, i) => {
                const Icon = it.icon;
                const active = hovered === i;
                return (
                  <div
                    key={it.label}
                    className={`mx-1 flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-150 ${
                      active
                        ? "bg-electric-500 text-white"
                        : "text-navy-900"
                    }`}
                  >
                    <Icon size={15} />
                    {it.label}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
