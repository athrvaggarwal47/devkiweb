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
  metadataBase: new URL("https://www.devkinandanandsons.com"),
  title: {
    default: "Devki Nandan & Sons | Electrical Goods & Project Supply",
    template: "%s | Devki Nandan & Sons",
  },
  description:
    "Established in 1957, Devki Nandan & Sons supplies trusted electrical brands, catalog support, and dependable project assistance in Rampur Bushahr and across Himachal Pradesh.",
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
      "Established in 1957, Devki Nandan & Sons serves homes, retailers, contractors, and project teams with trusted electrical brands and dependable supply support.",
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
