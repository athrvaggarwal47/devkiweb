import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";

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
  metadataBase: new URL("https://devkinandansons.com"),
  title: {
    default: "Devki Nandan & Sons | Electrical Goods & Project Supply",
    template: "%s | Devki Nandan & Sons",
  },
  description:
    "A refined digital procurement experience for premium electrical goods, trusted brands, catalog discovery, and fast project support from Devki Nandan & Sons.",
  keywords: [
    "electrical goods Himachal Pradesh",
    "bulk electrical supply",
    "electrical catalogs",
    "project procurement",
    "Devki Nandan and Sons",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Devki Nandan & Sons | Electrical Goods & Project Supply",
    description:
      "Built for projects, retailers, and procurement teams looking for trusted brands, direct support, and fast catalog access.",
    type: "website",
    siteName: "Devki Nandan & Sons",
    url: "/",
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
      <body className="flex min-h-screen flex-col antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const storedTheme = localStorage.getItem("theme");
                const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
                const theme = storedTheme || systemTheme;
                document.documentElement.dataset.theme = theme;
              } catch {
                document.documentElement.dataset.theme = "dark";
              }
            })();
          `}
        </Script>
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
