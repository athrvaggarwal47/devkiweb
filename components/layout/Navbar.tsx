"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Catalogs", href: "/catalogs" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div
          className={cn(
            "page-shell flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6",
            isScrolled || !isHome
              ? "border-white/10 bg-[rgba(8,12,18,0.82)] shadow-panel backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(145deg,rgba(247,242,232,0.12),rgba(247,242,232,0.02))] transition duration-300 group-hover:scale-105">
              <Image src="/logo.png" alt="Devki Nandan Logo" width={28} height={28} className="object-contain" />
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="font-display text-base font-bold leading-none tracking-[-0.03em] text-sand-50">
                Devki Nandan
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sand-100/60">
                Project supply since 1975
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive ? "text-sand-50" : "text-sand-100/66 hover:text-sand-50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full bg-white/8"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/catalogs"
              className={cn(
                "hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-sand-50/84 transition hover:border-white/18 hover:text-sand-50 md:inline-flex",
                isScrolled || !isHome ? "bg-white/5" : "bg-black/15 backdrop-blur"
              )}
            >
              Catalog Library
            </Link>
            <Link href="/contact" className="button-primary hidden lg:inline-flex">
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "rounded-full border p-2.5 transition-all lg:hidden",
                isScrolled || !isHome
                  ? "border-white/10 bg-white/6 text-sand-50"
                  : "border-white/12 bg-black/18 text-sand-50 backdrop-blur-md"
              )}
              aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(8,12,18,0.94)] p-6 shadow-panel backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "rounded-[1.25rem] border px-4 py-4 text-lg font-semibold transition-colors",
                      isActive
                        ? "border-signal-400/35 bg-signal-500/14 text-sand-50"
                        : "border-white/8 bg-white/4 text-sand-100/76"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="mt-4 space-y-3 rounded-[1.5rem] border border-white/8 bg-white/4 p-4">
                <p className="text-sm leading-6 text-sand-100/70">
                  Browse catalogs, compare brands, and move directly into a project inquiry without digging through the site.
                </p>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="button-primary w-full">
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
