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

export const catalogs: Catalog[] = [
  {
    id: "anchor-switches-2024",
    title: "Anchor Switches & Sockets 2024",
    brand: "Anchor",
    brandId: "anchor",
    category: "Switches",
    year: 2024,
    description:
      "Complete range of modular switches, sockets, and wiring accessories.",
    pdfUrl: "https://lsin.panasonic.com/switches-sockets/",
    coverGradient: "from-red-800 to-red-600",
    featured: true,
  },
  {
    id: "anchor-wiring-2024",
    title: "Anchor Wiring Solutions 2024",
    brand: "Anchor",
    brandId: "anchor",
    category: "Wiring",
    year: 2024,
    description:
      "Comprehensive wiring guide including cables, conduits, and accessories.",
    pdfUrl: "https://lsin.panasonic.com/wires-cable-tapes",
    coverGradient: "from-red-900 to-red-700",
    featured: true,
  },
  {
    id: "havells-lighting-2024",
    title: "Havells Lighting Catalog 2024",
    brand: "Havells",
    brandId: "havells",
    category: "Lighting",
    year: 2024,
    description:
      "LED bulbs, tube lights, panel lights, and decorative lighting solutions.",
    pdfUrl: "https://havellslighting.com/catalog/Havells-Catalogue.pdf",
    coverGradient: "from-blue-800 to-blue-600",
    featured: true,
  },
  {
    id: "havells-fans-2024",
    title: "Havells Fan Collection 2024",
    brand: "Havells",
    brandId: "havells",
    category: "Fans",
    year: 2024,
    description:
      "Ceiling fans, wall fans, exhaust fans with premium design finishes.",
    pdfUrl: "https://consumer.havells.com/consumer/",
    coverGradient: "from-blue-900 to-indigo-700",
    featured: false,
  },
  {
    id: "panasonic-led-2024",
    title: "Panasonic LED Solutions 2024",
    brand: "Panasonic",
    brandId: "panasonic",
    category: "Lighting",
    year: 2024,
    description:
      "Energy-efficient LED lighting range for residential and commercial use.",
    pdfUrl: "https://lsin.panasonic.com/led-lighting/panasonic-led-lighting",
    coverGradient: "from-indigo-800 to-blue-700",
    featured: false,
  },
  {
    id: "panasonic-wiring-2023",
    title: "Panasonic Wiring Devices 2023",
    brand: "Panasonic",
    brandId: "panasonic",
    category: "Wiring",
    year: 2023,
    description: "Modular wiring devices, switches, and socket collections.",
    pdfUrl: "https://lsin.panasonic.com/switches-sockets/",
    coverGradient: "from-slate-800 to-indigo-800",
    featured: false,
  },
  {
    id: "greatwhite-switches-2024",
    title: "Greatwhite Switches 2024",
    brand: "Greatwhite",
    brandId: "greatwhite",
    category: "Switches",
    year: 2024,
    description:
      "Modern modular switches and wiring accessories at competitive pricing.",
    pdfUrl: "https://www.great-white.in/switches-and-accessories.php",
    coverGradient: "from-sky-800 to-blue-700",
    featured: false,
  },
  {
    id: "diplast-conduit-2023",
    title: "Diplast PVC Conduit Catalog 2023",
    brand: "Diplast",
    brandId: "diplast",
    category: "Fixtures",
    year: 2023,
    description:
      "PVC conduits, fittings, junction boxes, and electrical accessories.",
    pdfUrl: "https://www.diplast.com/products.php",
    coverGradient: "from-rose-800 to-red-700",
    featured: false,
  },
  {
    id: "philips-lighting-2024",
    title: "Philips Professional Lighting 2024",
    brand: "Philips",
    brandId: "philips",
    category: "Lighting",
    year: 2024,
    description:
      "Architectural, commercial, and decorative lighting solutions for retail and project requirements.",
    pdfUrl: "https://www.usa.lighting.philips.com/support/purchase/literature",
    coverGradient: "from-blue-800 to-cyan-700",
    featured: true,
  },
  {
    id: "bajaj-lighting-2024",
    title: "Bajaj Lighting & Utility Range 2024",
    brand: "Bajaj",
    brandId: "bajaj",
    category: "Lighting",
    year: 2024,
    description:
      "LED fixtures, utility lighting, and everyday electrical products suited for homes and commercial spaces.",
    pdfUrl: "https://illumination.bajajelectricals.com/catalogue",
    coverGradient: "from-orange-800 to-amber-700",
    featured: false,
  },
  {
    id: "usha-fans-2024",
    title: "Usha Fans & Comfort Solutions 2024",
    brand: "Usha",
    brandId: "usha",
    category: "Fans",
    year: 2024,
    description:
      "Ceiling fans, wall fans, and comfort-led appliances with dependable after-sales confidence.",
    pdfUrl: "https://www.ushafans.com/themes/custom/ushafan/images/Usha_Fans_Brochure.pdf",
    coverGradient: "from-red-800 to-rose-700",
    featured: false,
  },
  {
    id: "racold-waterheaters-2024",
    title: "Racold Water Heating Range 2024",
    brand: "Racold",
    brandId: "racold",
    category: "Water Heaters",
    year: 2024,
    description:
      "Storage and instant water heaters designed for residential, hospitality, and project installation needs.",
    pdfUrl: "https://www.racold.com/download-catalogues",
    coverGradient: "from-red-900 to-orange-700",
    featured: false,
  },
];
