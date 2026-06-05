import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { navLinks, brand } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              aria-label={brand.name}
              className="inline-flex items-center"
            >
              <span className="grid place-items-center rounded-md bg-white p-2 shadow-sm">
                <Image
                  src={brand.logo.src}
                  alt={brand.name}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className="h-14 w-14 object-contain"
                />
              </span>
            </Link>
            <p className="mt-4 text-sm max-w-sm text-slate-400">
              {brand.tagline} We design and build websites that help businesses
              of every size and industry get online and look the part.
            </p>
            <p className="mt-3 text-sm font-medium text-slate-300">
              Serving {brand.location.areaServedLabel}.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Site</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail size={14} className="mt-1 text-electric-400" />
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-white break-all"
                >
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="mt-1 text-electric-400 shrink-0"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a
                  href={brand.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Follow us on Facebook
                </a>
              </li>
              <li className="text-slate-400">
                Free consultations available — reach out by email to get
                started.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} {brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
