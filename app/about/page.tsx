"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, Clock3, Layers3, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const MILESTONES = [
  {
    year: "1975",
    title: "The business begins",
    description: "Devki Nandan & Sons starts with a simple promise: dependable products, practical guidance, and honest business.",
  },
  {
    year: "1990s",
    title: "Brand relationships deepen",
    description: "Long-term partnerships with premium electrical brands turn the business into a trusted destination for quality-first buyers.",
  },
  {
    year: "Today",
    title: "Legacy meets clarity",
    description: "The new digital experience translates that trust into a cleaner catalog, better page flow, and faster project response.",
  },
];

const OPERATING_VALUES = [
  {
    title: "Long-view relationships",
    description: "A multigenerational business should feel consistent, stable, and easy to rely on when requirements are time-sensitive.",
    icon: Users,
  },
  {
    title: "Brand-led confidence",
    description: "Customers remember names they trust, so the site now gives those brands more structure and clearer pathways into catalogs.",
    icon: BadgeCheck,
  },
  {
    title: "Operational clarity",
    description: "The best UX for this business is practical: better routing, less guesswork, and stronger next actions at every stage.",
    icon: Layers3,
  },
];

const NUMBERS = [
  { label: "Legacy years", value: "50+" },
  { label: "Partner brands", value: "6" },
  { label: "Primary use cases", value: "Retail + B2B" },
  { label: "Response mindset", value: "Fast and direct" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-22">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(185,133,71,0.16),transparent_30%),radial-gradient(circle_at_86%_6%,rgba(99,167,255,0.14),transparent_28%)]" />
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-end">
            <SectionHeading
              eyebrow="About the business"
              title="Three generations of dependable electrical supply, translated into a clearer digital experience."
              subtitle="This page now explains the business the same way people already experience it offline: trustworthy, direct, and steady."
              invert
            />

            <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">Why the new direction works</p>
              <p className="mt-4 text-sm leading-7 text-sand-100/72">
                The site no longer treats heritage as decoration. It uses legacy to support credibility, while the layout does the practical work
                of helping visitors understand what the business offers and why they should trust it.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {NUMBERS.map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4">
                    <p className="font-display text-3xl font-bold tracking-[-0.05em] text-sand-50">{item.value}</p>
                    <p className="mt-2 text-sm text-sand-100/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="A concise timeline"
              title="The story is now easier to scan, but still feels substantial."
              subtitle="Instead of over-styling the history, the page presents it in a way that supports trust and keeps momentum."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {MILESTONES.map((item) => (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[1.7rem] border border-ink-950/8 bg-white p-6 shadow-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">{item.year}</p>
                  <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.05em] text-ink-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink-700">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div className="surface-panel rounded-[2rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="How the business shows up"
              title="The operating model is simple: trusted products, clear advice, and responsive support."
              subtitle="That is the tone this redesign brings forward everywhere, from the homepage to contact."
              invert
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {OPERATING_VALUES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal-500/12 text-signal-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em] text-sand-50">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-sand-100/66">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">What visitors should leave understanding</p>
            <div className="mt-6 space-y-5">
              <div className="rounded-[1.5rem] border border-ink-950/8 bg-white p-5">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-signal-500" />
                  <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">This is a legacy business</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-700">
                  The page now communicates heritage without relying on theatrical styling that can distract from trust.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-ink-950/8 bg-white p-5">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-signal-500" />
                  <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">This is a supply partner</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-700">
                  Visitors can tell this is not only a brand story, but a business ready to support real procurement needs.
                </p>
              </div>
            </div>

            <Link href="/contact" className="button-primary mt-8">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
