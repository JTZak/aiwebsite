import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Sparkles,
  ShieldCheck,
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
      "CMS setup so your team can edit with confidence",
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
  {
    slug: "maintenance-hosting",
    title: "Maintenance & Hosting",
    icon: ShieldCheck,
    blurb:
      "We keep your site fast, secure, and up to date so you can focus on running your business.",
    description:
      "Launch day is just the beginning. Our care plans bundle hosting, security patches, content updates, performance monitoring, and a real human you can email when something needs to change.",
    includes: [
      "Managed hosting with global CDN",
      "SSL, backups, and uptime monitoring",
      "Monthly security and dependency updates",
      "Content edits and small design changes",
      "Performance reports and recommendations",
      "Priority email support",
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
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Magnolia rebuilt our site from the ground up and our qualified leads tripled in the first quarter. The whole team is sharp, calm, and genuinely cares about the outcome.",
    name: "Priya Shah",
    role: "Director of Marketing",
    company: "Northwind Realty",
  },
  {
    quote:
      "They translated our scrappy startup brand into something that finally feels enterprise-ready, without losing what made us us. Worth every dollar.",
    name: "Marcus Lee",
    role: "Co-founder",
    company: "Lattice Health",
  },
  {
    quote:
      "Working with Magnolia felt like hiring an in-house design team. Clear timelines, beautiful work, and they actually answer their email.",
    name: "Elena Ortiz",
    role: "Owner",
    company: "Ortiz Family Kitchen",
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
    name: "Starter",
    price: "$435",
    period: "one-time",
    description:
      "A polished, professional presence for new businesses ready to look the part.",
    features: [
      "Up to 5 custom-designed pages",
      "Mobile, tablet, and desktop layouts",
      "Contact form and basic CMS",
      "On-page SEO essentials",
      "2 rounds of revisions",
      "Standard 3–4 week delivery",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Business",
    price: "$735",
    period: "one-time",
    description:
      "Our most popular package — built for growing businesses that need to convert.",
    features: [
      "Up to 12 custom-designed pages",
      "Brand refresh and design system",
      "Advanced CMS with team training",
      "Conversion-focused copy structure",
      "Analytics and performance tuning",
      "4 rounds of revisions",
      "Standard 5–7 week delivery",
    ],
    cta: "Choose Business",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Multi-site rollouts, e-commerce platforms, and complex integrations for established teams.",
    features: [
      "Unlimited pages and templates",
      "Custom integrations and APIs",
      "Dedicated project manager",
      "Advanced security and compliance",
      "Quarterly strategy reviews",
      "Priority support SLA",
      "Timeline tailored to your scope",
    ],
    cta: "Talk to sales",
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
      "Skip the line — your site goes into expedited production with delivery in 4–5 business days. Available on any tier.",
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
      "Most Starter sites launch in 3–4 weeks, Business sites in 5–7 weeks, and Enterprise projects vary based on scope. We'll give you a firm timeline after our discovery call.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Strategy, design, development, copy structure, basic SEO, analytics setup, and launch support. Each tier lists exactly what you'll receive, with no surprise add-ons.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Each package includes a set number of revision rounds at the design stage. Additional rounds are billed at our standard hourly rate so you stay in control of the budget.",
  },
  {
    question: "Do you handle hosting and ongoing updates?",
    answer:
      "Yes. Our Maintenance & Hosting plans cover managed hosting, security patches, content edits, and performance monitoring so you don't have to think about it.",
  },
  {
    question: "How do payments work?",
    answer:
      "We invoice 50% to begin the project and 50% on launch. Enterprise projects are typically split into milestone-based payments. We accept ACH, card, and wire.",
  },
  {
    question: "Who owns the site when it's done?",
    answer:
      "You do — fully. We hand over source files, accounts, and documentation at launch. No lock-in, ever.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We learn your business, audience, and goals through a structured kickoff and stakeholder interviews.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We craft moodboards, wireframes, and pixel-perfect mockups iterated together until they're right.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Designs become a fast, accessible, fully responsive website built on a modern, maintainable stack.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We QA, migrate, and ship — then stay close for the first 30 days to make sure everything sings.",
  },
];
