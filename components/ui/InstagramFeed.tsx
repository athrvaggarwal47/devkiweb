"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const INSTAGRAM_HANDLE = "dns.rampur";
const FEATURED_REEL_URL = "https://www.instagram.com/reel/DVGHvaVk510/embed";

export default function InstagramFeed() {
  return (
    <section className="py-20 sm:py-24">
      <div className="page-shell">
        <div className="text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5"
          >
            <InstagramIcon className="h-5 w-5 text-signal-400" />
            <span className="text-sm font-semibold text-sand-100/80">Latest from Instagram</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="mt-6 font-display text-4xl font-bold tracking-[-0.05em] text-sand-50 sm:text-5xl"
          >
            Follow Our Journey
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
            className="mx-auto mt-4 w-full text-center text-base leading-8 text-sand-100/74 sm:text-lg md:max-w-2xl"
          >
            Stay updated with our latest products, projects, and electrical solutions.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="mx-auto mt-12 flex max-w-lg justify-center overflow-hidden rounded-2xl border border-white/10"
        >
          <iframe
            src={FEATURED_REEL_URL}
            className="w-full border-0"
            height="600"
            allow="encrypted-media"
            title="Instagram feed"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="mt-10 text-center"
        >
          <a
            href={`https://www.instagram.com/dns.rampur/`}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            <InstagramIcon className="h-4 w-4" />
            View All Posts
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
