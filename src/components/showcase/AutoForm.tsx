"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type Stage = "typing" | "submitting" | "success";

const script = [
  { field: "name", value: "Alex Carter" },
  { field: "email", value: "alex@studio.com" },
  { field: "message", value: "Excited to launch our new site!" },
] as const;

export function AutoForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [stage, setStage] = useState<Stage>("typing");
  const [focusField, setFocusField] = useState<string | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const reset = () => {
      setValues({ name: "", email: "", message: "" });
      setStage("typing");
      setFocusField(null);
    };

    const runCycle = () => {
      reset();
      let delay = 600;
      script.forEach(({ field, value }) => {
        timers.push(setTimeout(() => setFocusField(field), delay));
        delay += 200;
        const charDelay = 55;
        for (let i = 1; i <= value.length; i++) {
          timers.push(
            setTimeout(() => {
              setValues((v) => ({ ...v, [field]: value.slice(0, i) }));
            }, delay)
          );
          delay += charDelay;
        }
        delay += 350;
      });
      timers.push(setTimeout(() => setFocusField(null), delay));
      timers.push(setTimeout(() => setStage("submitting"), delay + 200));
      timers.push(setTimeout(() => setStage("success"), delay + 1100));
    };

    runCycle();
    const totalCycle = 13000;
    const interval = setInterval(runCycle, totalCycle);
    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="h-[260px]">
      <AnimatePresence mode="wait">
        {stage === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex h-full items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-electric-500 text-white shadow-lg shadow-electric-500/30"
              >
                <CheckCircle2 size={28} />
              </motion.div>
              <p className="mt-3 text-sm font-semibold text-navy-900">
                Message sent
              </p>
              <p className="text-xs text-ink-500">
                Reply on the way in under 48 hours.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-2.5"
          >
            <PreviewField label="Name" value={values.name} active={focusField === "name"} />
            <PreviewField label="Email" value={values.email} active={focusField === "email"} />
            <PreviewField
              label="Message"
              value={values.message}
              active={focusField === "message"}
              tall
            />
            <button
              type="button"
              className={`mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors ${
                stage === "submitting"
                  ? "bg-electric-400 cursor-wait"
                  : "bg-electric-500"
              }`}
            >
              {stage === "submitting" ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PreviewField({
  label,
  value,
  active,
  tall,
}: {
  label: string;
  value: string;
  active: boolean;
  tall?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-medium uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <div
        className={`mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm text-navy-900 transition-all ${
          active
            ? "border-electric-500 ring-2 ring-electric-500/20"
            : "border-slate-200"
        } ${tall ? "min-h-[52px]" : "min-h-[34px]"}`}
      >
        {value}
        {active && (
          <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-electric-500 animate-pulse" />
        )}
      </div>
    </label>
  );
}
