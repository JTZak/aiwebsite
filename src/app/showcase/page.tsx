import { ShowcaseHero } from "@/components/showcase/ShowcaseHero";
import { DemoCard } from "@/components/showcase/DemoCard";
import { AutoForm } from "@/components/showcase/AutoForm";
import { AutoDropdown } from "@/components/showcase/AutoDropdown";
import { AutoChart } from "@/components/showcase/AutoChart";
import { AutoCarousel } from "@/components/showcase/AutoCarousel";
import { AutoToasts } from "@/components/showcase/AutoToasts";
import { AutoTabs } from "@/components/showcase/AutoTabs";
import { CTASection } from "@/components/CTASection";
import { FadeIn } from "@/components/FadeIn";

export const metadata = {
  title: "Showcase",
  description:
    "Live, auto-playing previews of the interactive components, animations, and polished interfaces we build into every Magnolia website.",
};

const demos = [
  {
    title: "interactive-form.tsx",
    description:
      "Smart forms with real-time validation, focus states, and a satisfying success animation.",
    component: <AutoForm />,
  },
  {
    title: "live-dashboard.tsx",
    description:
      "Animated charts and KPIs that bring your data to life — perfect for analytics, reports, or admin tools.",
    component: <AutoChart />,
  },
  {
    title: "dropdown-menu.tsx",
    description:
      "Crisp, accessible menus with smooth open/close motion and beautifully styled hover states.",
    component: <AutoDropdown />,
  },
  {
    title: "carousel.tsx",
    description:
      "Auto-playing image carousels with crossfades, perfect for product galleries or hero sections.",
    component: <AutoCarousel />,
  },
  {
    title: "toast-system.tsx",
    description:
      "Layered notifications that slide in, stack neatly, and auto-dismiss — a delight to use.",
    component: <AutoToasts />,
  },
  {
    title: "tab-navigation.tsx",
    description:
      "Animated tab switches with a sliding indicator pill and seamless content transitions.",
    component: <AutoTabs />,
  },
];

export default function ShowcasePage() {
  return (
    <>
      <ShowcaseHero />

      <section className="bg-mist-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo, i) => (
              <FadeIn key={demo.title} delay={i * 0.06} className="h-full">
                <DemoCard title={demo.title} description={demo.description}>
                  {demo.component}
                </DemoCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 text-center">
            <p className="text-sm text-ink-500 mx-auto max-w-xl">
              Every interaction above runs live in your browser — no videos, no
              screenshots. This is the same craft we bring to every website we
              build.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Want this kind of polish on your site?"
        subtitle="Tell us about your project and we'll come back with a plan within 48 hours."
        primaryLabel="Start your project"
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      />
    </>
  );
}
