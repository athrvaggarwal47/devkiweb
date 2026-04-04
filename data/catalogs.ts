export interface Catalog {
  id: string;
  title: string;
  brand: string;
  brandId: string;
  category: string;
  year: number;
  description: string;
  pdfUrl: string;
  coverGradient: string;
  featured: boolean;
}

const DEFAULT_COVER_GRADIENTS: Record<string, string> = {
  anchor: "from-red-800 to-red-600",
  havells: "from-blue-800 to-blue-600",
  panasonic: "from-indigo-800 to-blue-700",
  greatwhite: "from-sky-800 to-blue-700",
  diplast: "from-rose-800 to-red-700",
  philips: "from-blue-800 to-cyan-700",
  bajaj: "from-orange-800 to-amber-700",
  racold: "from-red-900 to-orange-700",
  usha: "from-red-800 to-rose-700",
  default: "from-slate-800 to-slate-600",
};

export function getCatalogCoverGradient(brandId: string) {
  return DEFAULT_COVER_GRADIENTS[brandId] ?? DEFAULT_COVER_GRADIENTS.default;
}

export const baseCatalogs: Catalog[] = [
  {
    id: "anchor-switches-2024",
    title: "Anchor Switches & Sockets 2026",
    brand: "Anchor",
    brandId: "anchor",
    category: "Switches",
    year: 2026,
    description:
      "Complete range of modular switches, sockets, and wiring accessories.",
    pdfUrl: "/catalogs/Anchor_Switches.pdf",
    coverGradient: "from-red-800 to-red-600",
    featured: true,
  },
  {
    id: "anchor-wiring-2024",
    title: "Anchor Wiring Solutions 2026",
    brand: "Anchor",
    brandId: "anchor",
    category: "Wiring",
    year: 2026,
    description:
      "Comprehensive wiring guide including cables, conduits, and accessories.",
    pdfUrl: "/catalogs/Anchor_Wires.pdf",
    coverGradient: "from-red-900 to-red-700",
    featured: true,
  },
  {
    id: "anchor-penta-modular-2024",
    title: "Anchor Penta Modular Switches 2026",
    brand: "Anchor",
    brandId: "anchor",
    category: "Switches",
    year: 2026,
    description:
      "Penta modular switch range for a cleaner modern switchboard and premium wall plate selection.",
    pdfUrl: "/catalogs/Penta_Modular_20240124150847754564929366-compressed.pdf",
    coverGradient: "from-red-700 to-orange-600",
    featured: false,
  },
  {
    id: "havells-lighting-2024",
    title: "Havells Lighting Catalog 2026",
    brand: "Havells",
    brandId: "havells",
    category: "Lighting",
    year: 2026,
    description:
      "LED bulbs, tube lights, panel lights, and decorative lighting solutions.",
    pdfUrl: "https://havellslighting.com/catalog/Havells-Catalogue.pdf",
    coverGradient: "from-blue-800 to-blue-600",
    featured: true,
  },
  {
    id: "havells-fans-2024",
    title: "Havells Fan Price List 2026",
    brand: "Havells",
    brandId: "havells",
    category: "Fans",
    year: 2026,
    description:
      "Current fan list prices and specification callouts for residential and commercial models.",
    pdfUrl: "/catalogs/Havells_Fan_List_Price_20260402.pdf",
    coverGradient: "from-blue-900 to-indigo-700",
    featured: false,
  },
  {
    id: "havells-modern-fans-2026",
    title: "Havells Modern Fan Range 2026",
    brand: "Havells",
    brandId: "havells",
    category: "Fans",
    year: 2026,
    description:
      "Modern fan designs with aerodynamic blades, smart controllers, and curated finish options.",
    pdfUrl: "/catalogs/Havells_Modern_Fan.pdf",
    coverGradient: "from-sky-800 to-blue-700",
    featured: false,
  },
  {
    id: "havells-air-coolers-2024",
    title: "Havells Air Coolers 2026",
    brand: "Havells",
    brandId: "havells",
    category: "Air Coolers",
    year: 2026,
    description:
      "Portable and desert air coolers for residential comfort, seasonal retail, and project applications.",
    pdfUrl: "/catalogs/Havells_Air_Coolers.pdf",
    coverGradient: "from-cyan-800 to-blue-700",
    featured: false,
  },
  {
    id: "panasonic-led-2024",
    title: "Panasonic LED Solutions 2026",
    brand: "Panasonic",
    brandId: "panasonic",
    category: "Lighting",
    year: 2026,
    description:
      "Energy-efficient LED lighting range for residential and commercial use.",
    pdfUrl: "https://lsin.panasonic.com/led-lighting/panasonic-led-lighting",
    coverGradient: "from-indigo-800 to-blue-700",
    featured: false,
  },
  {
    id: "havells-wiring-2024",
    title: "Havells Wires & Cables 2026",
    brand: "Havells",
    brandId: "havells",
    category: "Wiring",
    year: 2026,
    description: "Wires, cables, and related electrical solutions for residential, retail, and project applications.",
    pdfUrl: "/catalogs/Havells_Wire.pdf",
    coverGradient: "from-blue-900 to-sky-700",
    featured: false,
  },
  {
    id: "greatwhite-switches-2024",
    title: "Greatwhite Switches 2026",
    brand: "Greatwhite",
    brandId: "greatwhite",
    category: "Switches",
    year: 2026,
    description:
      "Modern modular switches and wiring accessories at competitive pricing.",
    pdfUrl: "https://www.great-white.in/switches-and-accessories.php",
    coverGradient: "from-sky-800 to-blue-700",
    featured: false,
  },
  {
    id: "diplast-conduit-2023",
    title: "Diplast PVC Conduit Catalog 2026",
    brand: "Diplast",
    brandId: "diplast",
    category: "Fixtures",
    year: 2026,
    description:
      "PVC conduits, fittings, junction boxes, and electrical accessories.",
    pdfUrl: "https://www.diplast.com/products.php",
    coverGradient: "from-rose-800 to-red-700",
    featured: false,
  },
  {
    id: "philips-lighting-2024",
    title: "Philips Professional Lighting 2026",
    brand: "Philips",
    brandId: "philips",
    category: "Lighting",
    year: 2026,
    description:
      "Architectural, commercial, and decorative lighting solutions for retail and project requirements.",
    pdfUrl: "/catalogs/philips_light.pdf",
    coverGradient: "from-blue-800 to-cyan-700",
    featured: true,
  },
  {
    id: "bajaj-lighting-2024",
    title: "Bajaj Lighting & Utility Range 2026",
    brand: "Bajaj",
    brandId: "bajaj",
    category: "Lighting",
    year: 2026,
    description:
      "LED fixtures, utility lighting, and everyday electrical products suited for homes and commercial spaces.",
    pdfUrl: "https://illumination.bajajelectricals.com/catalogue",
    coverGradient: "from-orange-800 to-amber-700",
    featured: false,
  },
  {
    id: "usha-fans-2024",
    title: "Usha Fans & Comfort Solutions 2026",
    brand: "Usha",
    brandId: "usha",
    category: "Fans",
    year: 2026,
    description:
      "Ceiling fans, wall fans, and comfort-led appliances with dependable after-sales confidence.",
    pdfUrl: "https://www.ushafans.com/themes/custom/ushafan/images/Usha_Fans_Brochure.pdf",
    coverGradient: "from-red-800 to-rose-700",
    featured: false,
  },
  {
    id: "racold-waterheaters-2024",
    title: "Racold Water Heating Range 2026",
    brand: "Racold",
    brandId: "racold",
    category: "Water Heaters",
    year: 2026,
    description:
      "Storage and instant water heaters designed for residential, hospitality, and project installation needs.",
    pdfUrl: "https://www.racold.com/download-catalogues",
    coverGradient: "from-red-900 to-orange-700",
    featured: false,
  },
];

export const catalogs = baseCatalogs;
