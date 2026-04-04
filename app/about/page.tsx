"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, Clock3, Layers3, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { brands } from "@/data/brands";

const MILESTONES = [
  {
    year: "1957",
    title: "The business begins",
    description: "Devki Nandan & Sons was established with a simple commitment: dependable products, fair dealing, and practical support for local customers.",
  },
  {
    year: "Over the decades",
    title: "Trust grows through relationships",
    description: "Long-standing ties with reliable electrical brands and customers helped the business become a known and dependable name in the region.",
  },
  {
    year: "Today",
    title: "Still serving with the same values",
    description: "The business continues to support households, retailers, contractors, and project buyers with clarity, responsiveness, and trusted product options.",
  },
];

const OPERATING_VALUES = [
  {
    title: "Relationship-driven business",
    description: "Customers return because they value consistency, honest guidance, and a supplier they can rely on over time.",
    icon: Users,
  },
  {
    title: "Confidence through brands",
    description: "Trusted partner brands help buyers feel assured about product quality, range depth, and long-term reliability.",
    icon: BadgeCheck,
  },
  {
    title: "Practical and responsive support",
    description: "The focus stays on understanding the requirement clearly and helping the customer move forward without unnecessary confusion.",
    icon: Layers3,
  },
];

const NUMBERS = [
  { label: "Years in business", value: "69+" },
  { label: "Partner brands", value: `${brands.length}` },
  { label: "Customer segments", value: "Home + Trade + Projects" },
  { label: "Approach", value: "Direct and dependable" },
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
              title="A trusted electrical business serving the region since 1957."
              subtitle="Devki Nandan & Sons is built on long-term relationships, dependable brands, and practical support for both everyday and project-based requirements."
              invert
            />

            <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">What defines the business</p>
              <p className="mt-4 text-sm leading-7 text-sand-100/72">
                Over the years, the business has earned trust by staying straightforward in the way it serves customers:
                good products, clear advice, and dependable follow-through.
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
              eyebrow="Business journey"
              title="A history shaped by dependable service and repeat trust."
              subtitle="The story matters because it explains why customers continue to rely on the business across generations."
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
              eyebrow="How the business works"
              title="Trusted products, clear advice, and responsive support."
              subtitle="That practical approach has helped the business stay relevant for households, trade buyers, and project requirements alike."
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">What people should understand</p>
            <div className="mt-6 space-y-5">
              <div className="rounded-[1.5rem] border border-ink-950/8 bg-white p-5">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-signal-500" />
                  <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">This is an established business</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-700">
                  More than six decades of service gives customers confidence that the business values continuity, reliability, and reputation.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-ink-950/8 bg-white p-5">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-signal-500" />
                  <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">This is a dependable supply partner</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-700">
                  The business is positioned to support real purchase decisions, repeat buying, and project conversations, not just one-time browsing.
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
