import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navLinks, brand } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-electric-400 to-electric-600 text-white font-bold">
                M
              </span>
              <span className="font-semibold tracking-tight">{brand.shortName}</span>
            </Link>
            <p className="mt-4 text-sm max-w-sm text-slate-400">
              {brand.tagline} We design and build websites that help businesses
              of every size and industry grow.
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
              <li className="flex items-center gap-2 text-slate-400">
                <Mail size={14} className="text-electric-400" />
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Phone size={14} className="text-electric-400" />
                <a href={`tel:${brand.phone.replace(/[^\d]/g, "")}`} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} {brand.name}. All rights reserved.</p>
          <p>Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
