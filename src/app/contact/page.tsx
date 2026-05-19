import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { brand } from "@/lib/nav";

export const metadata = {
  title: "Contact",
  description:
    "Tell us about your project — we'll reply within one business day with next steps.",
};

const details = [
  {
    icon: Mail,
    label: "Email",
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: brand.phone,
    href: `tel:${brand.phone.replace(/[^\d]/g, "")}`,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 1 business day",
  },
  {
    icon: MapPin,
    label: "Working hours",
    value: "Mon–Fri, 9am – 6pm ET",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something great together."
        subtitle="Tell us about your business and what you're hoping to launch. We reply to every message personally."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 grid gap-12 lg:grid-cols-12 items-start">
          <FadeIn className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900">
              Get in touch
            </h2>
            <p className="mt-3 text-base text-ink-700">
              Whether you have a brief, a rough sketch, or just an idea — drop
              us a line. We&apos;ll come back with thoughtful questions and a clear
              next step.
            </p>

            <ul className="mt-8 space-y-5">
              {details.map((d) => {
                const Icon = d.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-electric-500/10 text-electric-600 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                        {d.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-navy-900">
                        {d.value}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a href={d.href} className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold text-navy-900">
                Prefer to talk first?
              </div>
              <p className="mt-1 text-sm text-ink-700">
                Book a free 20-minute intro call after sending your message —
                we&apos;ll include a calendar link in our reply.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.08}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
