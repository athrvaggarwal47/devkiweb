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
    pdfUrl: "#",
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
    pdfUrl: "#",
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
    pdfUrl: "#",
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
    pdfUrl: "#",
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
    pdfUrl: "#",
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
    pdfUrl: "#",
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
    pdfUrl: "#",
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
    pdfUrl: "#",
    coverGradient: "from-rose-800 to-red-700",
    featured: false,
  },
  {
    id: "finolex-cables-2024",
    title: "Finolex Cables & Wires 2024",
    brand: "Finolex",
    brandId: "finolex",
    category: "Wiring",
    year: 2024,
    description:
      "Premium copper wires, FR cables, and electrical accessories for all applications.",
    pdfUrl: "#",
    coverGradient: "from-orange-800 to-amber-700",
    featured: false,
  },
];
