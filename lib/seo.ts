import type { Metadata } from "next";

export const SITE_URL = "https://www.devkinandanandsons.com";
export const BUSINESS_NAME = "Devki Nandan & Sons";
export const BUSINESS_EMAIL = "puneet@devkinandanandsons.com";
export const BUSINESS_PHONE = "+91 94180 00309";
export const BUSINESS_PHONE_E164 = "+919418000309";
export const BUSINESS_DESCRIPTION =
  "Established in 1957, Devki Nandan & Sons supplies trusted electrical brands, catalog support, and dependable project assistance in Rampur Bushahr and across Himachal Pradesh.";

export const DEFAULT_KEYWORDS = [
  "Devki Nandan and Sons",
  "Devki Nandan & Sons Rampur Bushahr",
  "electrical goods supplier Rampur Bushahr",
  "electrical goods supplier Himachal Pradesh",
  "electrical shop Rampur Bushahr",
  "electrical catalogs Himachal Pradesh",
  "Anchor switches supplier",
  "Havells dealer Rampur Bushahr",
  "electrical project supply Himachal Pradesh",
  "switches and wiring supplier Rampur Bushahr",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({ title, description, path, keywords = [] }: PageMetadataInput): Metadata {
  const keywordSet = [...DEFAULT_KEYWORDS, ...keywords];

  return {
    title,
    description,
    keywords: keywordSet,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${BUSINESS_NAME}`,
      description,
      url: path,
      type: "website",
      siteName: BUSINESS_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${BUSINESS_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createNoIndexMetadata(title = "Admin"): Metadata {
  return {
    title,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        nosnippet: true,
      },
    },
  };
}

export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": absoluteUrl("/#business"),
        name: BUSINESS_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/icon.png"),
        image: absoluteUrl("/logo.png"),
        email: BUSINESS_EMAIL,
        telephone: BUSINESS_PHONE_E164,
        description: BUSINESS_DESCRIPTION,
        foundingDate: "1957",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Main Market, Rajpur",
          addressLocality: "Rampur Bushahr",
          addressRegion: "Himachal Pradesh",
          postalCode: "172001",
          addressCountry: "IN",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Rampur Bushahr",
          },
          {
            "@type": "State",
            name: "Himachal Pradesh",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: BUSINESS_PHONE_E164,
          email: BUSINESS_EMAIL,
          areaServed: "IN-HP",
          availableLanguage: ["en", "hi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: BUSINESS_NAME,
        url: SITE_URL,
        description: BUSINESS_DESCRIPTION,
      },
    ],
  };
}
