import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import { BUSINESS_DESCRIPTION, BUSINESS_NAME, DEFAULT_KEYWORDS, SITE_URL } from "@/lib/seo";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | Electrical Goods & Project Supply`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: BUSINESS_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  applicationName: BUSINESS_NAME,
  category: "Electrical goods and project supply",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${BUSINESS_NAME} | Electrical Goods & Project Supply`,
    description: BUSINESS_DESCRIPTION,
    type: "website",
    siteName: BUSINESS_NAME,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | Electrical Goods & Project Supply`,
    description: BUSINESS_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const storedTheme = localStorage.getItem("theme");
                const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
                const theme = storedTheme || systemTheme;
                document.documentElement.dataset.theme = theme;
              } catch {
                document.documentElement.dataset.theme = "dark";
              }
            })();`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-signal-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-signal-400"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
