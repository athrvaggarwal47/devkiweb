import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Building2, FileStack, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { brands } from "@/data/brands";
import { getSeoPage, seoPages } from "@/data/seo-pages";
import { getAllCatalogs } from "@/lib/catalog-store";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: `${page.metaTitle} | Devki Nandan & Sons`,
      description: page.description,
      url: `/${page.slug}`,
      type: "website",
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const catalogs = await getAllCatalogs();

  const relatedCatalogs = catalogs
    .filter((catalog) => {
      const matchesBrand = page.relatedBrand ? catalog.brandId === page.relatedBrand : true;
      const matchesCategory = page.relatedCategory ? catalog.category === page.relatedCategory : true;
      return matchesBrand && matchesCategory;
    })
    .slice(0, 3);

  const relatedBrands = page.relatedBrand
    ? brands.filter((brand) => brand.slug === page.relatedBrand)
    : brands.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-22">
        <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,rgba(99,167,255,0.18),transparent_32%),radial-gradient(circle_at_86%_8%,rgba(185,133,71,0.14),transparent_30%)]" />
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-end">
          <SectionHeading eyebrow={page.eyebrow} title={page.heroTitle} subtitle={page.heroText} invert />

          <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">Why this page helps</p>
            <div className="mt-6 space-y-4">
              {page.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-white/4 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-copper-400" />
                  <p className="text-sm leading-7 text-sand-100/70">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="Relevant catalogs"
              title="Open the matching catalogs directly from the library."
              subtitle="These documents are the quickest way to compare product ranges, shortlist options, and move into a direct inquiry."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedCatalogs.map((catalog) => (
                <a
                  key={catalog.id}
                  href={catalog.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.5rem] border border-ink-950/8 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-signal-500/25"
                >
                  <div className="flex items-center gap-3">
                    <FileStack className="h-5 w-5 text-signal-500" />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-600">{catalog.category}</p>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.04em] text-ink-950">{catalog.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-700">{catalog.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="surface-panel rounded-[2rem] p-7 sm:p-9">
              <SectionHeading
                eyebrow="Quick actions"
                title="Move from search to inquiry without losing momentum."
                subtitle="These paths are useful if you already know the brand, category, or requirement type you are sourcing."
                invert
              />

              <div className="mt-8 space-y-4">
                <Link href="/catalogs" className="button-primary w-full">
                  Open catalog library
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="button-secondary w-full">
                  Contact the team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.catalog)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary w-full"
                >
                  Request catalogs on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="surface-panel-light rounded-[2rem] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">Local advantage</p>
              <div className="mt-6 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-signal-500" />
                <p className="text-sm leading-7 text-ink-700">
                  Devki Nandan & Sons supports retail buyers, contractors, and project teams in Rampur Bushahr and across
                  Himachal Pradesh with brand-led electrical sourcing.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {relatedBrands.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/catalogs?brand=${brand.slug}`}
                    className="flex items-center justify-between rounded-[1.25rem] border border-ink-950/8 bg-white px-4 py-4 text-sm font-semibold text-ink-950 transition hover:border-signal-500/24"
                  >
                    <span>{brand.name}</span>
                    <Building2 className="h-4 w-4 text-signal-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
