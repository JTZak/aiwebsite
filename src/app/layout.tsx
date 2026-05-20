import type { Metadata } from "next";
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
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Magnolia Web Design Services builds modern, fast, beautiful websites for businesses of every size and industry. Custom design and branding, delivered and handed off — yours to run.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "UI/UX",
    "small business websites",
    "agency",
  ],
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "Modern, fast, beautiful websites for businesses of every size and industry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
