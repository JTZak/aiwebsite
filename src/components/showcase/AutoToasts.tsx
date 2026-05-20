"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, Info, type LucideIcon } from "lucide-react";

type ToastType = "success" | "info" | "warning";

type Toast = {
  id: number;
  type: ToastType;
  title: string;
  message: string;
};

const queue: Omit<Toast, "id">[] = [
  {
    type: "success",
    title: "Order confirmed",
    message: "We sent a receipt to your inbox.",
  },
  {
    type: "info",
    title: "New message",
    message: "Sarah replied to your quote request.",
  },
  {
    type: "warning",
    title: "Session ending",
    message: "You'll be signed out in 5 minutes.",
  },
  {
    type: "success",
    title: "Payment received",
    message: "Invoice #1042 has been paid in full.",
  },
];

const styles: Record<ToastType, { bg: string; icon: LucideIcon; iconColor: string }> = {
  success: {
    bg: "border-emerald-200 bg-emerald-50",
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
  },
  info: {
    bg: "border-electric-200 bg-electric-50",
    icon: Info,
    iconColor: "text-electric-500",
  },
  warning: {
    bg: "border-amber-200 bg-amber-50",
    icon: AlertTriangle,
    iconColor: "text-amber-500",
  },
};

export function AutoToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    let nextId = 0;
    const id = setInterval(() => {
      const template = queue[nextId % queue.length];
      const newToast: Toast = { ...template, id: Date.now() + nextId };
      setToasts((cur) => [newToast, ...cur].slice(0, 3));
      const toastId = newToast.id;
      setTimeout(() => {
        setToasts((cur) => cur.filter((t) => t.id !== toastId));
      }, 3800);
      nextId++;
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[260px]">
      <div className="absolute right-0 top-0 flex w-full flex-col gap-2">
        <AnimatePresence>
          {toasts.map((t) => {
            const s = styles[t.type];
            const Icon = s.icon;
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.95, transition: { duration: 0.25 } }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className={`flex items-start gap-3 rounded-lg border ${s.bg} px-3.5 py-3 shadow-md shadow-navy-900/5`}
              >
                <Icon size={18} className={`mt-0.5 shrink-0 ${s.iconColor}`} />
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy-900">
                    {t.title}
                  </div>
                  <div className="text-xs text-ink-700">{t.message}</div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
