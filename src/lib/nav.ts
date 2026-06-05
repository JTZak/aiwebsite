export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/showcase", label: "Showcase" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const brand = {
  name: "Magnolia Web Design Services",
  shortName: "Magnolia",
  tagline: "Modern websites for every business, every industry.",
  email: "magnoliawebdesignservices@gmail.com",
  url: "https://www.magnoliawebdesignservices.net",
  facebook: "https://www.facebook.com/profile.php?id=61590578643622",
  logo: {
    src: "/magnolia-logo.png",
    width: 1254,
    height: 1254,
  },
  location: {
    // Magnolia is the Mississippi state flower — the brand is rooted in the South.
    baseRegion: "Mississippi",
    areaServedLabel: "Mississippi, Memphis & across the South",
    serviceAreas: [
      "Mississippi",
      "Memphis, TN",
      "Tennessee",
      "the Southern United States",
    ],
  },
} as const;
