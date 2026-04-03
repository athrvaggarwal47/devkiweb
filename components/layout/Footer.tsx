import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { brands } from "@/data/brands";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(7,11,17,0.94)] text-sand-50">
      <div className="page-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr_0.8fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6">
                <Image src="/logo.png" alt="Devki Nandan Logo" width={28} height={28} className="object-contain" />
              </span>
              <div>
                <p className="font-display text-xl font-bold tracking-[-0.04em]">Devki Nandan & Sons</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/58">
                  Premium electrical supply since 1975
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-sand-100/70">
              Built for contractors, retailers, architects, and procurement teams that need dependable brands, fast answers, and catalog-led decision making.
            </p>

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
                <a href="mailto:dns.rampur@gmail.com" className="transition hover:text-sand-50">
                  dns.rampur@gmail.com
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
          <p>Catalog-first procurement experience for wholesale, retail, and project supply.</p>
        </div>
      </div>
    </footer>
  );
}
