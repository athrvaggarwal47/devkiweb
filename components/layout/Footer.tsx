import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { brands } from "@/data/brands";
import { seoPages } from "@/data/seo-pages";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

// Custom SVG icons for social media
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.116 1.513 5.849L0 24l6.335-1.492A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.584-.507-5.072-1.39l-.363-.214-3.762.886.931-3.667-.237-.378A9.963 9.963 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(7,11,17,0.94)] text-sand-50">
      <div className="page-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.65fr_0.8fr_0.85fr_0.95fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6">
                <Image src="/logo.png" alt="Devki Nandan Logo" width={28} height={28} className="object-contain" />
              </span>
              <div>
                <p className="font-display text-xl font-bold tracking-[-0.04em]">Devki Nandan & Sons</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/58">
                  Established 1957
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-sand-100/70">
              Serving households, retailers, contractors, and institutions with dependable brands, practical guidance, and steady supply support.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/dns.rampur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sand-100/70 transition hover:border-signal-400/50 hover:bg-signal-500/10 hover:text-signal-400"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/dnsrampur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sand-100/70 transition hover:border-signal-400/50 hover:bg-signal-500/10 hover:text-signal-400"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919418000309"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sand-100/70 transition hover:border-signal-400/50 hover:bg-signal-500/10 hover:text-signal-400"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>

            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.default)}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.116 1.513 5.849L0 24l6.335-1.492A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.584-.507-5.072-1.39l-.363-.214-3.762.886.931-3.667-.237-.378A9.963 9.963 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-sand-50">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-100/68">
              {[
                { href: "/", label: "Home" },
                { href: "/catalogs", label: "Catalog Library" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Project Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-sand-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-sand-50">Supply Partners</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-100/68">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link href={`/catalogs?brand=${brand.slug}`} className="transition hover:text-sand-50">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-sand-50">Popular Searches</h3>
            <ul className="mt-5 space-y-3 text-sm text-sand-100/68">
              {seoPages.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="transition hover:text-sand-50">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-sand-50">Reach Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-sand-100/68">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-copper-400" />
                <span className="leading-relaxed">
                  Devki Nandan and Sons, Rampur Bushahr
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-copper-400" />
                <a href="tel:+919418000309" className="transition hover:text-sand-50">
                  +91 94180 00309
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-copper-400" />
                <a href="mailto:puneet@devkinandanandsons.com" className="transition hover:text-sand-50">
                  puneet@devkinandanandsons.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 shrink-0 text-copper-400" />
                <span>Mon-Sat: 9AM-7PM IST</span>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-signal-400">
                  Open the contact page
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-sand-100/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Devki Nandan & Sons. All rights reserved.</p>
          <p>Electrical goods, trusted brands, and supply support for retail, wholesale, and project requirements.</p>
        </div>
      </div>
    </footer>
  );
}
