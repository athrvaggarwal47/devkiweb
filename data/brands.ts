export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  color: string;
  categories: string[];
}

export const brands: Brand[] = [
  {
    id: "anchor",
    name: "Anchor",
    slug: "anchor",
    tagline: "Trusted Switches & Wiring Solutions",
    color: "#E31837",
    categories: ["Switches", "Wiring", "Sockets"],
  },
  {
    id: "havells",
    name: "Havells",
    slug: "havells",
    tagline: "Premium Electrical Equipment",
    color: "#0047AB",
    categories: ["Lighting", "Fans", "Switches", "Wiring", "Air Coolers"],
  },
  {
    id: "panasonic",
    name: "Panasonic",
    slug: "panasonic",
    tagline: "Innovation for Everyday",
    color: "#0040A0",
    categories: ["LED Lighting", "Wiring", "Fans"],
  },
  {
    id: "greatwhite",
    name: "Greatwhite",
    slug: "greatwhite",
    tagline: "Modern Switchgear Solutions",
    color: "#1A4FA0",
    categories: ["Switches", "Switchgear", "Wiring Accessories"],
  },
  {
    id: "diplast",
    name: "Diplast",
    slug: "diplast",
    tagline: "Quality PVC Conduits & Fittings",
    color: "#C41E3A",
    categories: ["Conduits", "Fittings", "PVC Accessories"],
  },
  {
    id: "philips",
    name: "Philips",
    slug: "philips",
    tagline: "Professional Lighting & Smart Illumination",
    color: "#0066CC",
    categories: ["Lighting", "LED Systems", "Smart Lighting"],
  },
  {
    id: "bajaj",
    name: "Bajaj",
    slug: "bajaj",
    tagline: "Reliable Fans, Lighting & Appliances",
    color: "#F15A29",
    categories: ["Lighting", "Fans", "Appliances"],
  },
  {
    id: "racold",
    name: "Racold",
    slug: "racold",
    tagline: "Water Heating Solutions for Homes & Projects",
    color: "#E1251B",
    categories: ["Water Heaters", "Geysers", "Storage Solutions"],
  },
  {
    id: "usha",
    name: "Usha",
    slug: "usha",
    tagline: "Trusted Fans, Appliances & Everyday Comfort",
    color: "#D91F26",
    categories: ["Fans", "Appliances", "Home Comfort"],
  },
];

export const brandCategories = [
  "All",
  "Anchor",
  "Havells",
  "Panasonic",
  "Greatwhite",
  "Diplast",
  "Philips",
  "Bajaj",
  "Racold",
  "Usha",
];

export const productCategories = [
  "All",
  "Lighting",
  "Wiring",
  "Switches",
  "Fans",
  "Air Coolers",
  "Fixtures",
  "Conduits",
  "Water Heaters",
  "Appliances",
];
