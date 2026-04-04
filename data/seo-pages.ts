export interface SeoPage {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  bullets: string[];
  relatedBrand?: string;
  relatedCategory?: string;
}

export const seoPages: SeoPage[] = [
  {
    slug: "switches-in-rampur-bushahr",
    title: "Switches in Rampur Bushahr",
    metaTitle: "Switches in Rampur Bushahr",
    description:
      "Find modular switches, sockets, and wiring accessories from trusted brands in Rampur Bushahr with support from Devki Nandan & Sons.",
    eyebrow: "Local electrical supply",
    heroTitle: "Switches in Rampur Bushahr for homes, shops, and project sites.",
    heroText:
      "Devki Nandan & Sons helps customers in Rampur Bushahr source modular switches, sockets, and matching accessories with catalog-led product selection and direct support.",
    bullets: [
      "Anchor and Greatwhite switch ranges for residential and commercial use",
      "Quick catalog access for modular plates, switches, and socket families",
      "WhatsApp-first assistance for product comparison and requirement matching",
    ],
    relatedBrand: "anchor",
    relatedCategory: "Switches",
  },
  {
    slug: "electrical-goods-supplier-in-himachal",
    title: "Electrical Goods Supplier in Himachal",
    metaTitle: "Electrical Goods Supplier in Himachal Pradesh",
    description:
      "Explore electrical goods, wiring, lighting, fans, and project supply support in Himachal Pradesh from Devki Nandan & Sons.",
    eyebrow: "Regional supply support",
    heroTitle: "Electrical goods supplier in Himachal Pradesh with trusted brand support.",
    heroText:
      "From retail counters to bulk requirements, Devki Nandan & Sons supports electrical sourcing in Himachal Pradesh through brand catalogs, direct consultation, and project-ready follow-up.",
    bullets: [
      "Product ranges across wiring, switches, lighting, fans, conduits, and water heaters",
      "Suitable for retailers, contractors, architects, institutions, and project teams",
      "Fast access to catalogs, list prices, and requirement-based support",
    ],
    relatedCategory: "Wiring",
  },
  {
    slug: "havells-dealer-in-rampur-bushahr",
    title: "Havells Dealer in Rampur Bushahr",
    metaTitle: "Havells Dealer in Rampur Bushahr",
    description:
      "Browse Havells lighting, fans, wires, and air cooler catalogs in Rampur Bushahr with direct support from Devki Nandan & Sons.",
    eyebrow: "Brand-led sourcing",
    heroTitle: "Havells dealer support in Rampur Bushahr for fans, wiring, lighting, and more.",
    heroText:
      "Devki Nandan & Sons provides access to Havells catalogs and product ranges, helping buyers compare fans, wires, lighting, and air coolers with a quicker route to inquiry.",
    bullets: [
      "Havells fan price lists and modern fan catalog access",
      "Wires, lighting, and air cooler documents ready to open",
      "Useful for retail sourcing as well as site and bulk requirements",
    ],
    relatedBrand: "havells",
  },
  {
    slug: "anchor-switches-supplier-in-rampur-bushahr",
    title: "Anchor Switches Supplier in Rampur Bushahr",
    metaTitle: "Anchor Switches Supplier in Rampur Bushahr",
    description:
      "Discover Anchor switches, Penta modular ranges, and wiring catalogs in Rampur Bushahr from Devki Nandan & Sons.",
    eyebrow: "Switchgear sourcing",
    heroTitle: "Anchor switches supplier in Rampur Bushahr with modular catalog access.",
    heroText:
      "If you are looking for Anchor switches, sockets, or Penta modular options in Rampur Bushahr, Devki Nandan & Sons offers direct catalog access and requirement-based assistance.",
    bullets: [
      "Anchor switch and socket catalogs for quick range comparison",
      "Penta modular access for cleaner premium switchboard selections",
      "Helpful for household upgrades, shop fit-outs, and contractor requirements",
    ],
    relatedBrand: "anchor",
    relatedCategory: "Switches",
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}
