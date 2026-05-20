"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdweeva";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type."),
  budget: z.string().min(1, "Please select a budget range."),
  message: z
    .string()
    .min(20, "Tell us a little more — at least 20 characters."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company || "—",
          projectType: values.projectType,
          budget: values.budget,
          message: values.message,
          _subject: `New project inquiry from ${values.name}`,
          _replyto: values.email,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const detail =
          data?.errors?.[0]?.message ||
          "We couldn't send your message. Please try again or email us directly.";
        throw new Error(detail);
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "We couldn't send your message. Please try again or email us directly."
      );
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-electric-300 bg-electric-50/50 p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-electric-500 text-white">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-navy-900">
          Thanks — we&rsquo;ll be in touch.
        </h3>
        <p className="mt-2 text-sm text-ink-700 max-w-sm mx-auto">
          We received your message and will reply within 48 hours with next
          steps and any quick questions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register("name")}
            className={inputClass(!!errors.name)}
            placeholder="Jordan Reyes"
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputClass(!!errors.email)}
            placeholder="jordan@company.com"
          />
        </Field>
        <Field label="Company" error={errors.company?.message} optional>
          <input
            type="text"
            autoComplete="organization"
            {...register("company")}
            className={inputClass(!!errors.company)}
            placeholder="Reyes & Co."
          />
        </Field>
        <Field label="Project type" error={errors.projectType?.message}>
          <select {...register("projectType")} className={inputClass(!!errors.projectType)}>
            <option value="">Select one…</option>
            <option>Essentials — one-page site</option>
            <option>Professional — multi-page site</option>
            <option>Bespoke — fully custom site</option>
            <option>Branding / UI-UX</option>
            <option>Free consultation</option>
            <option>Something else</option>
          </select>
        </Field>
        <Field
          label="Budget"
          error={errors.budget?.message}
          className="sm:col-span-2"
        >
          <select {...register("budget")} className={inputClass(!!errors.budget)}>
            <option value="">Select a range…</option>
            <option>$499 — Essentials</option>
            <option>$999 — Professional</option>
            <option>$1,000+ — Bespoke / custom quote</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field
          label="Project details"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <textarea
            rows={5}
            {...register("message")}
            className={inputClass(!!errors.message)}
            placeholder="Tell us about your business, your goals, and your timeline."
          />
        </Field>
      </div>

      {submitError && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700"
        >
          <AlertTriangle size={16} className="mt-0.5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-electric-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-electric-500/30 transition-all hover:bg-electric-400 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>

      <p className="mt-4 text-xs text-ink-500">
        By submitting, you agree we may reach out about your project. We never
        share your information.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  optional,
  className,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 flex items-center gap-1 text-sm font-medium text-navy-900">
        {label}
        {optional && (
          <span className="text-xs font-normal text-ink-500">(optional)</span>
        )}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-md border bg-white px-3 py-2.5 text-sm text-navy-900 placeholder:text-ink-500/70",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-electric-500/40",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-slate-300 focus:border-electric-500",
  ].join(" ");
}
