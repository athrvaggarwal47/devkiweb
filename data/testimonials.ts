export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating?: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "Contractor",
    company: "RK Constructions",
    content: "Working with Devki Nandan & Sons for over 15 years. Their product knowledge and reliable supply have been crucial for our projects across Himachal Pradesh.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Electrical Retailer",
    company: "Sharma Electronics",
    content: "Best supplier in the region. They always have stock of quality brands and their guidance helps us recommend the right products to our customers.",
    rating: 5,
  },
  {
    id: "3",
    name: "Vikram Singh",
    role: "Project Manager",
    company: "Mountain View Developers",
    content: "Excellent bulk order support. They understand project timelines and deliver consistently. The catalog library makes product selection much easier.",
    rating: 5,
  },
  {
    id: "4",
    name: "Anita Verma",
    role: "Homeowner",
    content: "Renovated my entire home with products from here. The staff helped me choose the right switches and lighting. Very satisfied with the quality and service.",
    rating: 5,
  },
  {
    id: "5",
    name: "Mohit Thakur",
    role: "Electrician",
    company: "Thakur Electrical Services",
    content: "My go-to supplier for all electrical materials. Fair pricing, genuine products, and they understand the technical requirements. Highly recommended.",
    rating: 5,
  },
];

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  category: "contractor" | "institution" | "retailer" | "developer";
}

// Placeholder client logos - replace with actual client logos if available
export const clientLogos: ClientLogo[] = [
  {
    id: "1",
    name: "RK Constructions",
    logo: "/clients/rk-constructions.png",
    category: "contractor",
  },
  {
    id: "2",
    name: "Mountain View Developers",
    logo: "/clients/mountain-view.png",
    category: "developer",
  },
  {
    id: "3",
    name: "Sharma Electronics",
    logo: "/clients/sharma-electronics.png",
    category: "retailer",
  },
  {
    id: "4",
    name: "HP Public Works",
    logo: "/clients/hp-pwd.png",
    category: "institution",
  },
  {
    id: "5",
    name: "Valley Resorts",
    logo: "/clients/valley-resorts.png",
    category: "institution",
  },
  {
    id: "6",
    name: "Thakur Electrical",
    logo: "/clients/thakur-electrical.png",
    category: "contractor",
  },
];

export const trustStats = {
  yearsInBusiness: 69,
  productsAvailable: "1000+",
  partnerBrands: 9,
  satisfiedCustomers: "500+",
  projectsCompleted: "200+",
  contractorsServed: "500+",
};
