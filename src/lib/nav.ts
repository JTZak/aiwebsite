export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const brand = {
  name: "Magnolia Web Design Services",
  shortName: "Magnolia",
  tagline: "Modern websites for every business, every industry.",
  email: "magnoliawebdesignservices@gmail.com",
  logo: {
    src: "/magnolia-logo.png",
    width: 1254,
    height: 1254,
  },
} as const;
