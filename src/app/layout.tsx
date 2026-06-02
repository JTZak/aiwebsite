import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { brand } from "@/lib/nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} — Web Design in Mississippi, Memphis & the South`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Magnolia Web Design Services builds modern, fast, beautiful websites for small businesses in Mississippi, Memphis, and across the South. Custom web design and branding, delivered and handed off — yours to run.",
  keywords: [
    "web design Mississippi",
    "web designer Mississippi",
    "Memphis web design",
    "web design Memphis TN",
    "small business website design",
    "website designer near me",
    "branding and UI/UX design",
    "web design agency South",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${brand.name} — Web Design in Mississippi, Memphis & the South`,
    description:
      "Modern, fast, beautiful websites for small businesses in Mississippi, Memphis, and across the South.",
    url: brand.url,
    siteName: brand.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  image: `${brand.url}${brand.logo.src}`,
  "@id": brand.url,
  url: brand.url,
  email: brand.email,
  description:
    "Custom web design and branding for small businesses in Mississippi, Memphis, and across the South.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "MS",
    addressCountry: "US",
  },
  areaServed: brand.location.serviceAreas.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  priceRange: "$$",
  knowsAbout: ["Web Design", "Web Development", "Branding", "UI/UX Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-mist-50 text-navy-900">
        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TMVXSLGDZT"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TMVXSLGDZT');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
