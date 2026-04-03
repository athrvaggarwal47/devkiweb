"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileStack,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  Waypoints,
  Zap,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import CatalogCard from "@/components/ui/CatalogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { brands } from "@/data/brands";
import { catalogs } from "@/data/catalogs";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

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
  { value: "50+", label: "Years of market trust" },
  { value: "1000+", label: "Products across trusted brands" },
  { value: "6", label: "Key partner brands" },
  { value: "B2B", label: "Bulk and project support" },
];

const CATEGORY_SHOWCASE = [
  {
    title: "Switchgear and wiring",
    description: "Reliable modular systems, switches, sockets, and wiring essentials for new builds and retrofits.",
    icon: Zap,
  },
  {
    title: "Lighting and automation",
    description: "Functional and decorative lighting with the practical guidance procurement teams need.",
    icon: Sparkles,
  },
  {
    title: "Cables and conduits",
    description: "Core infrastructure products for retail counters, contractors, and site-ready inventory plans.",
    icon: Warehouse,
  },
  {
    title: "Project response support",
    description: "Quick catalog sharing, brand comparisons, and WhatsApp-first coordination for live requirements.",
    icon: Waypoints,
  },
];

const SERVICE_STEPS = [
  {
    title: "Discover the right range",
    description: "Start with brand-led catalogs and category views built for fast comparison instead of generic browsing.",
  },
  {
    title: "Share your project brief",
    description: "Move into WhatsApp or direct contact with a clear next step for retail, bulk, or site-specific support.",
  },
  {
    title: "Source with confidence",
    description: "Procurement teams get a cleaner route to trusted products, reliable stock conversations, and follow-up.",
  },
];

export default function HomePage() {
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
                Northern India&apos;s modern electrical supply desk
              </motion.div>

              <motion.h1
                variants={FADE_UP}
                className="max-w-4xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.07em] text-sand-50 sm:text-6xl lg:text-[5.5rem]"
              >
                Built for projects.
                <br />
                Backed by fifty years
                <span className="block text-signal-400">of trust.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="max-w-2xl text-base leading-8 text-sand-100/74 sm:text-lg">
                Devki Nandan & Sons helps contractors, retailers, architects, and procurement teams source trusted
                electrical products faster through clear catalogs, stronger wayfinding, and direct support.
              </motion.p>

              <motion.div variants={FADE_UP} className="flex flex-col gap-4 sm:flex-row">
                <Link href="/catalogs" className="button-primary">
                  Browse Catalogs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.bulk)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  Talk on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div variants={FADE_UP} className="flex flex-wrap gap-3">
                <div className="info-chip">
                  <BadgeCheck className="h-4 w-4 text-copper-400" />
                  Premium brand partnerships
                </div>
                <div className="info-chip">
                  <Truck className="h-4 w-4 text-copper-400" />
                  Bulk-ready procurement support
                </div>
                <div className="info-chip">
                  <ShieldCheck className="h-4 w-4 text-copper-400" />
                  Legacy business, modern experience
                </div>
              </motion.div>
            </div>

            <motion.div variants={FADE_UP} className="relative">
              <div className="surface-panel animate-float-slow rounded-[2rem] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">
                      Procurement cockpit
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50 sm:text-4xl">
                      A website that behaves like a supply desk.
                    </h2>
                  </div>
                  <div className="rounded-full border border-signal-400/28 bg-signal-500/12 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-signal-400">
                    Always project-ready
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <div className="flex items-center gap-3 text-sand-50">
                      <FileStack className="h-5 w-5 text-copper-400" />
                      <p className="font-semibold">Catalog-first discovery</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-sand-100/66">
                      Key documents are elevated early so buyers can move from browsing to action quickly.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <div className="flex items-center gap-3 text-sand-50">
                      <Building2 className="h-5 w-5 text-copper-400" />
                      <p className="font-semibold">Clear B2B pathways</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-sand-100/66">
                      The strongest calls to action now support quotes, procurement, and quick communication.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-black/16 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">
                        Why this direction fits
                      </p>
                      <p className="mt-2 text-sm leading-7 text-sand-100/68">
                        Electrical procurement needs trust and speed. The new UX delivers both without losing legacy.
                      </p>
                    </div>
                    <div className="rounded-[1.25rem] border border-copper-400/28 bg-copper-400/12 px-4 py-3 text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-copper-400">Fast path</p>
                      <p className="mt-1 text-xl font-bold text-sand-50">Catalog → Quote</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={FADE_UP}
                className="rounded-[1.6rem] border border-white/8 bg-white/4 px-5 py-5 backdrop-blur"
              >
                <p className="font-display text-4xl font-bold tracking-[-0.05em] text-sand-50">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-sand-100/64">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <SectionHeading
            eyebrow="What the new UX prioritizes"
            title="The experience now starts with tasks people actually come here to complete."
            subtitle="Instead of making visitors decode the brand first, the homepage now guides them toward categories, catalogs, and direct project support."
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
              title="Featured documents stay front and center."
              subtitle="The catalog experience is now treated like the main product utility of the website, not a secondary afterthought."
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

      <section className="section-space">
        <div className="page-shell grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="Brand confidence"
              title="Trusted partners deserve more than a simple logo strip."
              subtitle="Every brand now carries context, category relevance, and a cleaner route into the catalog library."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/catalogs?brand=${brand.slug}`}
                  className="rounded-[1.4rem] border border-ink-950/8 bg-white px-5 py-5 transition hover:-translate-y-1 hover:border-signal-500/24 hover:shadow-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-600">Brand partner</p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">{brand.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-700">{brand.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="How projects move"
              title="A tighter path from discovery to response."
              subtitle="The new site uses clearer sequencing so high-intent buyers always know what to do next."
              invert
            />

            <div className="mt-8 space-y-5">
              {SERVICE_STEPS.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-signal-500/14 text-sm font-bold text-signal-400">
                      0{index + 1}
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-sand-50">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-sand-100/66">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(99,167,255,0.14),rgba(247,242,232,0.06),rgba(185,133,71,0.12))] p-8 sm:p-10 lg:flex lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/60">Ready to use the new flow</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-sand-50 sm:text-5xl">
                Use the catalog library first, then move straight into your project inquiry.
              </h2>
              <p className="mt-4 text-sm leading-7 text-sand-100/74 sm:text-base">
                The rebuild keeps the brand legacy intact while turning the website into a more decisive tool for discovery,
                comparison, and contact.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <Link href="/catalogs" className="button-primary">
                Open Catalogs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="button-secondary">
                Contact the Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
