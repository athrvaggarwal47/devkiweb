"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

const CONTACT_PATHS = [
  {
    title: "General inquiry",
    description: "Use this when you want product guidance, a brand recommendation, or a quick first conversation.",
    href: getWhatsAppLink(WHATSAPP_MESSAGES.contact),
    cta: "Open WhatsApp chat",
    icon: MessageCircle,
  },
  {
    title: "Bulk or project support",
    description: "Best for contractors, procurement teams, or commercial requirements that need a direct response.",
    href: getWhatsAppLink(WHATSAPP_MESSAGES.bulk),
    cta: "Start bulk inquiry",
    icon: Building2,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-22">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(99,167,255,0.18),transparent_34%),radial-gradient(circle_at_80%_4%,rgba(185,133,71,0.16),transparent_28%)]" />
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,1.05fr)] lg:items-end">
            <SectionHeading
              eyebrow="Project contact"
              title="A contact page that helps people choose the right path, not just locate your details."
              subtitle="The redesign makes inquiry intent clearer by separating general contact, bulk support, and physical store information."
              invert
            />

            <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">Best way to use this page</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50">
                Start with the inquiry type that matches your urgency.
              </h2>
              <p className="mt-4 text-sm leading-7 text-sand-100/70">
                This route keeps the faster, higher-intent actions visible first, while still preserving full business details for visitors who need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div className="space-y-8">
            <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
              <SectionHeading
                eyebrow="Contact routes"
                title="Two high-intent paths now lead the page."
                subtitle="These actions are designed for the people most likely to convert quickly: buyers, contractors, and project coordinators."
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {CONTACT_PATHS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.42 }}
                      className="rounded-[1.6rem] border border-ink-950/8 bg-white p-5 shadow-soft transition hover:-translate-y-1"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-sand-50">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-ink-700">{item.description}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal-500">
                        {item.cta}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-7 sm:p-9">
              <SectionHeading
                eyebrow="What helps us respond faster"
                title="A better inquiry usually starts with a better brief."
                subtitle="The new contact flow encourages people to share specifics instead of sending low-context messages."
                invert
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Brand or category you are considering",
                  "Whether the requirement is retail or project-based",
                  "Approximate quantity or scale of requirement",
                  "Preferred response channel and timeline",
                ].map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/8 bg-white/5 px-5 py-4 text-sm leading-7 text-sand-100/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">Store and support details</p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-signal-500" />
                  <div className="text-sm leading-7 text-ink-700">
                    DEVKI NANDAN AND SONS
                    <br />
                    Main Market, Rajpur
                    <br />
                    Rampur Bushahr, Himachal Pradesh 172001
                    <br />
                    India
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-700">
                  <Phone className="h-5 w-5 shrink-0 text-signal-500" />
                  <a href="tel:+919418000309" className="transition hover:text-ink-950">
                    +91 94180 00309
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-700">
                  <Mail className="h-5 w-5 shrink-0 text-signal-500" />
                  <a href="mailto:dns.rampur@gmail.com" className="transition hover:text-ink-950">
                    dns.rampur@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-700">
                  <Clock3 className="h-5 w-5 shrink-0 text-signal-500" />
                  <span>Mon-Sat: 9AM-7PM IST</span>
                </div>
              </div>
            </div>

            <div className="surface-panel rounded-[2rem] p-2">
              <div className="overflow-hidden rounded-[1.5rem]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.79!2d77.6293977!3d31.4496762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905c112dd0cc3ed%3A0x4590f92665b5f35d!2sDEVKI+NANDAN+AND+SONS!5e0!3m2!1sen!2sin!4v1711350000000!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Devki Nandan and Sons location"
                  className="block w-full grayscale contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
