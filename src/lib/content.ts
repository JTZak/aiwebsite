import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Sparkles,
  ShoppingBag,
  Stethoscope,
  Cpu,
  UtensilsCrossed,
  Briefcase,
  Home,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "custom-web-design",
    title: "Custom Web Design",
    icon: Palette,
    blurb:
      "Bespoke websites designed around your brand, your goals, and the customers you want to reach.",
    description:
      "Every site we build starts with a clean slate and your business at the center. We map your audience, sharpen your message, and design pages that load fast, look beautiful on any device, and convert visitors into customers.",
    includes: [
      "Discovery workshop & site strategy",
      "Custom desktop, tablet, and mobile layouts",
      "Conversion-focused copy structure",
      "Accessible, semantic HTML and CSS",
      "Editor-friendly CMS so your team can keep content fresh",
      "Launch checklist, analytics, and basic SEO",
    ],
  },
  {
    slug: "branding-ui-ux",
    title: "Branding & UI/UX Design",
    icon: Sparkles,
    blurb:
      "Logos, color systems, and user experiences that make your business instantly recognizable.",
    description:
      "A great website starts with a great brand. We craft logos, type systems, and color palettes that hold up across every touchpoint, then translate them into product UI and user flows that feel effortless to use.",
    includes: [
      "Logo design and brand mark variants",
      "Color, typography, and iconography system",
      "Brand guidelines document",
      "Wireframes and interactive prototypes",
      "Component library handoff (Figma)",
      "Usability review and iteration",
    ],
  },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  { name: "Retail & E-commerce", icon: ShoppingBag },
  { name: "Healthcare & Wellness", icon: Stethoscope },
  { name: "SaaS & Technology", icon: Cpu },
  { name: "Restaurants & Hospitality", icon: UtensilsCrossed },
  { name: "Professional Services", icon: Briefcase },
  { name: "Real Estate", icon: Home },
  { name: "Non-profits", icon: HeartHandshake },
  { name: "Education", icon: GraduationCap },
];

export type Testimonial = {
  quote: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They rebuilt our site from the ground up and our qualified leads tripled in the first quarter. Sharp, calm, and genuinely focused on the outcome.",
    role: "Director of Marketing",
  },
  {
    quote:
      "They translated our scrappy startup brand into something that finally feels enterprise-ready, without losing what made us us. Worth every dollar.",
    role: "Startup Co-founder",
  },
  {
    quote:
      "Felt like hiring an in-house design team for a few weeks. Clear timelines, beautiful work, and they actually answer their email.",
    role: "Small Business Owner",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Essentials",
    price: "$499",
    period: "one-time",
    description:
      "A clean, professional one-page website — perfect for getting online quickly with a strong first impression.",
    features: [
      "Single-page custom design",
      "Mobile, tablet, and desktop layouts",
      "Contact form with email delivery",
      "On-page SEO essentials",
      "2 rounds of revisions",
      "Delivered in 2–3 weeks",
    ],
    cta: "Get Essentials",
  },
  {
    name: "Professional",
    price: "$999",
    period: "one-time",
    description:
      "A multi-page site with deeper personalization, custom interfaces, and interactive features like fillable forms.",
    features: [
      "Multi-page custom design",
      "Distinct interfaces tailored to each section",
      "Fillable forms (booking, intake, quote requests)",
      "Brand refresh and design system",
      "Advanced on-page SEO",
      "4 rounds of revisions",
      "Delivered in 3–4 weeks",
    ],
    cta: "Choose Professional",
    highlighted: true,
  },
  {
    name: "Bespoke",
    price: "Custom",
    description:
      "A fully custom website built around your brand — personal photography, testimonials, multiple pages, and integrated payment software.",
    features: [
      "Unlimited custom pages",
      "Personal photography integration",
      "Testimonials and portfolio sections",
      "Integrated payment software (Stripe, etc.)",
      "Bookings, accounts, or custom workflows",
      "Brand and content collaboration",
      "Timeline and pricing tailored to your scope",
    ],
    cta: "Request a quote",
  },
];

export type AddOn = {
  name: string;
  price: string;
  description: string;
};

export const addOns: AddOn[] = [
  {
    name: "Expedited production",
    price: "+$100",
    description:
      "Move to the front of the queue. Your project gets priority scheduling and the fastest possible turnaround. Available on any tier.",
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Essentials sites are delivered in 2–3 weeks and Professional sites in 3–4 weeks. Bespoke projects vary based on scope — we'll give you a firm timeline after the free consultation.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Strategy, design, development, copy structure, basic SEO, and final handover. Each tier lists exactly what you'll receive, with no surprise add-ons.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Each package includes a set number of revision rounds at the design stage. Additional rounds can be added at our standard hourly rate so you stay in control of the budget.",
  },
  {
    question: "Can I get my project finished faster?",
    answer:
      "Yes — add Expedited production for $100. Your project jumps the queue and receives priority scheduling for the fastest possible turnaround.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payment is due once your website is finished and you've approved it. We launch the site, send you an invoice, and the full balance is due on completion. As soon as payment clears, the domain and website are transferred to you. We accept card and ACH.",
  },
  {
    question: "Who owns the site when it's done?",
    answer:
      "You do — fully. The domain and website remain ours until the invoice is paid in full, and the moment it clears we transfer the domain and hand over source files, accounts, and documentation. From there the site is yours to host and run however you like.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start with a free consultation to learn your business, audience, and goals — then scope the right package.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We craft moodboards, wireframes, and pixel-perfect mockups iterated together until they feel right.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Designs become a fast, accessible, fully responsive website built on a modern, maintainable stack.",
  },
  {
    step: "04",
    title: "Handover",
    description:
      "We QA, migrate, and hand the finished site over with all source files and documentation — it's yours to run.",
  },
];
