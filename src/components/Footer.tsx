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
              className="inline-flex items-center gap-3"
            >
              <span className="grid place-items-center rounded-lg bg-white p-1.5 shadow-sm">
                <Image
                  src={brand.logo.src}
                  alt=""
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <span className="font-semibold tracking-tight text-white">
                {brand.shortName}
              </span>
            </Link>
            <p className="mt-4 text-sm max-w-sm text-slate-400">
              {brand.tagline} We design and build websites that help businesses
              of every size and industry get online and look the part.
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
