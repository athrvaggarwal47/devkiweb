"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileStack,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  Waypoints,
  Zap,
  Download,
  Phone,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import CatalogCard from "@/components/ui/CatalogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import TrustSignals from "@/components/ui/TrustSignals";
import { brands } from "@/data/brands";
import type { Catalog } from "@/data/catalogs";
import { testimonials } from "@/data/testimonials";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

// Custom Instagram icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const STAGGER: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const HERO_STATS = [
  { value: "69+", label: "Years of business since 1957" },
  { value: "1000+", label: "Products across trusted brands" },
  { value: `${brands.length}`, label: "Partner brands" },
  { value: "Retail + B2B", label: "Support for homes, trade, and projects" },
];

const CATEGORY_SHOWCASE = [
  {
    title: "Switchgear and wiring",
    description: "Modular switches, sockets, cables, and essential wiring products for homes, shops, and ongoing project work.",
    icon: Zap,
  },
  {
    title: "Lighting and fans",
    description: "Decorative and utility lighting, fan ranges, and everyday electrical products from dependable brands.",
    icon: Sparkles,
  },
  {
    title: "Conduits and fixtures",
    description: "Core infrastructure products for electricians, contractors, retailers, and installation-ready supply.",
    icon: Warehouse,
  },
  {
    title: "Project and bulk support",
    description: "Straightforward coordination for quotations, brand options, catalog sharing, and repeat supply requirements.",
    icon: Waypoints,
  },
];

const SERVICE_STEPS = [
  {
    title: "Understand the requirement",
    description: "Every requirement begins with the right brand, category, quantity, and application, whether it is a household need or a larger project.",
  },
  {
    title: "Recommend suitable options",
    description: "The business helps customers compare trusted ranges through catalogs, product guidance, and practical suggestions.",
  },
  {
    title: "Support supply and follow-up",
    description: "From first inquiry to final selection, the focus stays on dependable service, clear communication, and steady supply support.",
  },
];

const SUPPLY_PARTNER_PILLARS = [
  {
    title: "Trusted guidance at the counter",
    description: "People return to established businesses because they value clear advice, honest recommendations, and practical product knowledge.",
    icon: Handshake,
  },
  {
    title: "Readiness for repeat and bulk needs",
    description: "Retailers, contractors, institutions, and project teams need a supplier who can support regular buying cycles and larger requirements.",
    icon: Truck,
  },
  {
    title: "Confidence through known brands",
    description: "Strong relationships with trusted brands help buyers feel confident about quality, availability, and long-term reliability.",
    icon: ShieldCheck,
  },
];

type HomePageClientProps = {
  catalogs: Catalog[];
};

export default function HomePageClient({ catalogs }: HomePageClientProps) {
  const featuredCatalogs = catalogs.filter((catalog) => catalog.featured).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(99,167,255,0.18),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(185,133,71,0.16),transparent_28%)]" />
        <div className="page-shell">
          <motion.div
            initial="hidden"
            animate="show"
            variants={STAGGER}
            className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-center"
          >
            <div className="space-y-8">
              <motion.div variants={FADE_UP} className="eyebrow">
                Established in 1957
              </motion.div>

              <motion.h1
                variants={FADE_UP}
                className="max-w-4xl font-display text-[2.75rem] font-bold leading-[0.9] tracking-[-0.07em] text-sand-50 sm:text-5xl md:text-6xl lg:text-[6rem]"
              >
                Devki Nandan
                <span className="block text-signal-400">& Sons</span>
              </motion.h1>

              <motion.p
                variants={FADE_UP}
                className="max-w-3xl font-display text-xl font-semibold leading-[1.15] tracking-[-0.04em] text-sand-50/92 sm:text-2xl md:text-3xl"
              >
                Serving homes, retailers, contractors, and project teams with trusted electrical goods and dependable supply support.
              </motion.p>

              <motion.p variants={FADE_UP} className="max-w-2xl text-sm leading-7 text-sand-100/74 sm:text-base md:text-lg">
                From everyday household requirements to bulk project needs, the business is built on reliable brands, practical guidance,
                and long-standing customer relationships.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="button-primary">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.bulk)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Quick Inquiry
                  <MessageCircle className="h-4 w-4" />
                </a>
                <Link href="/catalogs" className="button-secondary">
                  Browse Catalogs
                  <FileStack className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-3">
                <div className="info-chip">
                  <BadgeCheck className="h-4 w-4 text-copper-400" />
                  Trusted brand relationships
                </div>
                <div className="info-chip">
                  <Truck className="h-4 w-4 text-copper-400" />
                  Bulk and project support
                </div>
                <div className="info-chip">
                  <ShieldCheck className="h-4 w-4 text-copper-400" />
                  Established local business
                </div>
              </motion.div>
            </div>

            <motion.div variants={FADE_UP} className="relative">
              <div className="surface-panel animate-float-slow rounded-[2rem] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">
                      Trusted supply support
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50 sm:text-4xl">
                      A dependable name for electrical goods in Rampur Bushahr.
                    </h2>
                  </div>
                  <div className="rounded-full border border-signal-400/28 bg-signal-500/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-signal-400">
                    Retail and project-ready
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <div className="flex items-center gap-3 text-sand-50">
                      <FileStack className="h-5 w-5 text-copper-400" />
                      <p className="font-semibold">Strong product access</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-sand-100/66">
                      Trusted catalogs and known brands help customers review options with clarity and confidence.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <div className="flex items-center gap-3 text-sand-50">
                      <Building2 className="h-5 w-5 text-copper-400" />
                      <p className="font-semibold">Responsive business support</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-sand-100/66">
                      Quotations, requirement discussions, and follow-up support stay direct and practical.
                    </p>
                  </div>
                </div>

                {/* Social follow section */}
                <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-gradient-to-br from-white/8 to-white/3 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <InstagramIcon className="h-5 w-5 text-signal-400" />
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">
                      Follow Our Journey
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-sand-100/70 mb-5">
                    Stay updated with our latest products, projects, and electrical solutions on social media.
                  </p>
                  <a
                    href="https://www.instagram.com/devkinandanandsons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-signal-400/30 bg-signal-500/10 px-4 py-2.5 text-sm font-semibold text-signal-400 transition hover:bg-signal-500/20"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={FADE_UP}
                className="rounded-[1.6rem] border border-white/8 bg-white/4 px-4 py-4 backdrop-blur sm:px-5 sm:py-5"
              >
                <p className="font-display text-3xl font-bold tracking-[-0.05em] text-sand-50 sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs leading-5 text-sand-100/64 sm:text-sm sm:leading-6">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="What We Supply"
            title="Product categories trusted by households, retailers, electricians, and project buyers."
            subtitle="From switchgear and wiring to lighting, fans, conduits, and project support, the business covers the practical needs customers ask for most."
            invert
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {CATEGORY_SHOWCASE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="surface-panel-light rounded-[1.7rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-sand-50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Catalog library"
              title="Featured catalogs from trusted partner brands."
              subtitle="These documents help customers compare ranges, review product families, and move into a direct inquiry with better clarity."
              invert
            />
            <Link href="/catalogs" className="button-secondary self-start">
              Explore the full library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={STAGGER}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            {featuredCatalogs.map((catalog) => (
              <motion.div key={catalog.id} variants={FADE_UP} className="h-full">
                <CatalogCard catalog={catalog} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Trusted by the community"
            title="Serving Himachal Pradesh for nearly 7 decades"
            subtitle="Our commitment to quality products and reliable service has earned the trust of contractors, retailers, and homeowners across the region."
            invert
            className="mb-12 text-center mx-auto max-w-3xl"
          />
          <TrustSignals />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-space bg-gradient-to-b from-transparent via-ink-900/30 to-transparent">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Customer feedback"
            title="What our customers say"
            subtitle="Real experiences from contractors, retailers, and customers who trust us for their electrical supply needs."
            invert
            className="mb-12 text-center mx-auto max-w-3xl"
          />
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </section>

      <SocialLinks />

      <section className="section-space">
        <div className="page-shell">
          <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
              <SectionHeading
                eyebrow="Supply partner"
                title="A business built on trust, product knowledge, and dependable support."
                subtitle="Customers do not only need products. They also need clarity, confidence, and a supplier who understands practical requirements at both retail and project scale."
              />

              <div className="grid gap-4 sm:grid-cols-3">
                {SUPPLY_PARTNER_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pillar.title} className="rounded-[1.5rem] border border-ink-950/8 bg-white p-5 shadow-soft">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-sand-50">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-ink-700">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                Quick Inquiry
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(99,167,255,0.14),rgba(247,242,232,0.06),rgba(185,133,71,0.12))] p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/60">Get in touch</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-sand-50 sm:text-5xl">
                Reach out for products, pricing, catalogs, and project requirements.
              </h2>
              <p className="mt-4 text-sm leading-7 text-sand-100/74 sm:text-base">
                Devki Nandan & Sons continues to serve customers with the same values it has carried since 1957:
                trusted products, practical support, and dependable business relationships.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <Link href="/contact" className="button-primary">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/catalogs" className="button-secondary">
                View Catalogs
                <FileStack className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
