# Magnolia Web Design Services

Marketing site for **Magnolia Web Design Services** — a modern, blue-themed,
four-page site (Home, Services, Pricing, Contact) built with Next.js 16 +
Tailwind CSS v4 + TypeScript.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Start the dev server
- `npm run build` — Production build
- `npm run start` — Run the production build locally
- `npm run lint` — ESLint

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          Root layout (Navbar + Footer, fonts, metadata)
│   ├── page.tsx            Home
│   ├── services/page.tsx   Services
│   ├── pricing/page.tsx    Pricing
│   ├── contact/page.tsx    Contact
│   ├── icon.svg            Brand favicon
│   └── globals.css         Tailwind theme tokens (navy + electric blue)
├── components/             UI components (Hero, PricingTable, FAQ, …)
└── lib/
    ├── content.ts          Single source of truth for all copy
    └── nav.ts              Nav links + brand details
```

## Editing Content

All marketing copy (services, pricing tiers, testimonials, industries, FAQs)
lives in `src/lib/content.ts`. Brand name, email, and phone live in
`src/lib/nav.ts`. Edit those two files to update most of the site without
touching JSX.

## Contact Form

The contact form (`src/components/ContactForm.tsx`) is UI-only — it validates
client-side with `zod` and shows a success state. To wire it to a real email
backend (Resend, Formspree, etc.), replace the `onSubmit` handler with a real
fetch — the file has a `TODO` marker pointing to the exact spot.

## Deployment

Any platform that runs Next.js works (Vercel, Netlify, self-host).
For Vercel: push to GitHub and import the repo.
