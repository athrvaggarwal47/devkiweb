"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Lightbulb, Shield, Sparkles, Target, Users2, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InstagramFeed from "@/components/ui/InstagramFeed";
import { brands } from "@/data/brands";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const STAGGER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Handshake = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);

const STORY_TIMELINE = [
  {
    year: "1957",
    title: "The Beginning",
    description: "Founded with a vision to serve the electrical needs of Rampur Bushahr and surrounding regions with quality products and honest service.",
    icon: Sparkles,
  },
  {
    year: "1970s-1990s",
    title: "Building Trust",
    description: "Established strong partnerships with leading electrical brands. Became the go-to supplier for contractors and retailers across Himachal Pradesh.",
    icon: Handshake,
  },
  {
    year: "2000s",
    title: "Expanding Reach",
    description: "Expanded product range to include modern switchgear, lighting solutions, and project support. Served major infrastructure projects in the region.",
    icon: Target,
  },
  {
    year: "Today",
    title: "Digital Transformation",
    description: "Combining 69 years of experience with modern technology. Online catalog library, WhatsApp support, and seamless customer service.",
    icon: Zap,
  },
];

const OUR_VALUES = [
  {
    title: "Quality First",
    description: "We partner only with trusted brands that meet our quality standards. Every product we supply is backed by manufacturer warranties and our commitment.",
    icon: Shield,
  },
  {
    title: "Customer-Centric",
    description: "From homeowners to large contractors, we treat every customer with the same respect and attention. Your project success is our success.",
    icon: Heart,
  },
  {
    title: "Expert Guidance",
    description: "Our team brings decades of electrical industry knowledge. We help you choose the right products for your specific needs and budget.",
    icon: Lightbulb,
  },
  {
    title: "Community Focused",
    description: "As a local business, we're invested in our community's growth. We support local contractors, institutions, and development projects.",
    icon: Users2,
  },
];

const STATS = [
  { value: "69+", label: "Years of Excellence" },
  { value: "9", label: "Trusted Brands" },
  { value: "500+", label: "Happy Contractors" },
  { value: "200+", label: "Projects Completed" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top_left,rgba(185,133,71,0.18),transparent_32%),radial-gradient(circle_at_86%_8%,rgba(99,167,255,0.16),transparent_30%)]" />
        <div className="page-shell">
          <motion.div
            initial="hidden"
            animate="show"
            variants={STAGGER}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 rounded-full border border-copper-400/30 bg-copper-500/10 px-4 py-2 backdrop-blur">
              <Award className="h-4 w-4 text-copper-400" />
              <span className="text-sm font-semibold text-copper-400">Established 1957</span>
            </motion.div>

            <motion.h1
              variants={FADE_UP}
              className="mt-8 font-display text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-sand-50 sm:text-6xl lg:text-7xl"
            >
              69 Years of Powering
              <span className="block text-signal-400">Himachal Pradesh</span>
            </motion.h1>

            <motion.p
              variants={FADE_UP}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sand-100/80 sm:text-xl"
            >
              From a small shop in Rampur Bushahr to the region's trusted electrical supplier.
              Three generations of serving homes, businesses, and infrastructure projects with quality and integrity.
            </motion.p>

            <motion.div variants={FADE_UP} className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="button-primary">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/catalogs" className="button-secondary">
                Browse Catalogs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={STAGGER}
            className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={FADE_UP}
                className="surface-panel rounded-2xl p-6 text-center"
              >
                <p className="font-display text-4xl font-bold text-signal-400">{stat.value}</p>
                <p className="mt-2 text-sm text-sand-100/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Journey"
            title="A Legacy Built on Trust and Quality"
            subtitle="From humble beginnings to becoming Himachal Pradesh's preferred electrical supplier."
            invert
            className="mb-16 text-center mx-auto max-w-3xl"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {STORY_TIMELINE.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="surface-panel rounded-2xl p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-signal-500/20 to-copper-400/20">
                      <Icon className="h-6 w-6 text-signal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex rounded-full border border-copper-400/30 bg-copper-500/10 px-3 py-1 text-xs font-semibold text-copper-400">
                        {milestone.year}
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-bold text-sand-50">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-sand-100/70">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-space bg-gradient-to-b from-transparent via-ink-900/30 to-transparent">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us Every Day"
            subtitle="The principles that have guided us for nearly seven decades and continue to shape how we serve our customers."
            invert
            className="mb-16 text-center mx-auto max-w-3xl"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OUR_VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="surface-panel rounded-2xl p-6"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-signal-500/20 to-copper-400/20">
                    <Icon className="h-6 w-6 text-signal-400" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-sand-50">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-sand-100/70">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="section-space">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Trusted Partners"
            title="We Work With the Best Brands"
            subtitle="Our partnerships with leading electrical manufacturers ensure you get quality products backed by reliable warranties."
            invert
            className="mb-12 text-center mx-auto max-w-3xl"
          />

          <div className="surface-panel rounded-2xl p-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {brands.map((brand) => (
                <div
                  key={brand.slug}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur transition hover:border-signal-400/30 hover:bg-white/10"
                >
                  <p className="font-display text-lg font-semibold text-sand-50">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="pb-24">
        <div className="page-shell">
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(99,167,255,0.14),rgba(247,242,232,0.06),rgba(185,133,71,0.12))] p-8 text-center sm:p-12">
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em] text-sand-50 sm:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-sand-100/74 sm:text-lg">
              Whether you're a homeowner, contractor, or project manager, we're here to help you find the right electrical solutions.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="button-primary">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/catalogs" className="button-secondary">
                Browse Catalogs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
