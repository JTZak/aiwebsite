import { Mail, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { brand } from "@/lib/nav";

export const metadata = {
  title: "Contact",
  description:
    "Tell us about your project — we'll reply within 48 hours with next steps.",
};

const details = [
  {
    icon: Mail,
    label: "Email",
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    icon: MessageCircle,
    label: "Free consultation",
    value: "Available on request",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 48 hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something great together."
        subtitle="Tell us about your business and what you're hoping to launch. Every project starts with a free consultation — no pressure, no obligation."
      />

      <section className="bg-mist-50 py-20 sm:py-24">
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
                      <div className="mt-0.5 text-sm font-medium text-navy-900 break-all">
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

            <div className="mt-10 rounded-2xl border border-slate-200 bg-mist-100 p-6">
              <div className="text-sm font-semibold text-navy-900">
                What happens next?
              </div>
              <p className="mt-1 text-sm text-ink-700">
                We reply by email within 48 hours with a few clarifying
                questions and a proposed scope. From there we&apos;ll schedule
                your free consultation to walk through the details.
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
