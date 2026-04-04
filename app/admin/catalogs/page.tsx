import Link from "next/link";
import { ArrowRight, FileStack, LockKeyhole, UploadCloud } from "lucide-react";
import CatalogCard from "@/components/ui/CatalogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { logoutAdminAction } from "@/app/admin/actions";
import UploadCatalogForm from "./upload-form";
import { requireAdminSession } from "@/lib/admin-auth";
import { getAllCatalogs, getCatalogStorageMode, getUploadedCatalogs } from "@/lib/catalog-store";

export const metadata = {
  title: "Admin Catalog Desk",
  description: "Upload partner catalogs and publish them into the Devki Nandan & Sons catalog library.",
};

export const dynamic = "force-dynamic";

export default async function AdminCatalogsPage() {
  await requireAdminSession();

  const uploadedCatalogs = await getUploadedCatalogs();
  const allCatalogs = await getAllCatalogs();
  const recentCatalogs = allCatalogs.slice(0, 6);
  const storageMode = getCatalogStorageMode();

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-22">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(99,167,255,0.18),transparent_34%),radial-gradient(circle_at_82%_4%,rgba(185,133,71,0.14),transparent_28%)]" />
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:items-end">
          <SectionHeading
            eyebrow="Admin catalog desk"
            title="Upload a PDF once, and let the existing catalog interface do the rest."
            subtitle="This desk is designed to keep the catalog library consistent while adding new documents into the same cards, filters, and featured sections already used across the business pages."
            invert
          />

          <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <form action={logoutAdminAction} className="mb-5 flex justify-end">
              <button type="submit" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand-100/72 transition hover:text-sand-50">
                Sign out
              </button>
            </form>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100/58">Current uploads</p>
                <p className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-sand-50">{uploadedCatalogs.length}</p>
                <p className="mt-2 text-sm leading-7 text-sand-100/66">
                  Admin-added catalogs stored separately from the curated default library.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100/58">How it behaves</p>
                <p className="mt-3 font-display text-2xl font-bold tracking-[-0.05em] text-sand-50">
                  {storageMode === "blob" ? "Blob-backed upload" : "Local upload mode"}
                </p>
                <p className="mt-2 text-sm leading-7 text-sand-100/66">
                  New catalogs appear in the library immediately, and featured uploads can also flow into the homepage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell grid gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)]">
          <div className="surface-panel rounded-[2rem] p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <UploadCloud className="h-5 w-5 text-copper-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/58">Upload workflow</p>
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-sand-50">
              Add catalogs without disturbing the current design system.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sand-100/70">
              The form keeps each upload compatible with the current catalog cards, filters, and featured sections. Right now
              it supports catalogs for the existing partner brands, which keeps the main UI stable.
            </p>

            <div className="mt-8">
              <UploadCatalogForm storageMode={storageMode} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-panel-light rounded-[2rem] p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <LockKeyhole className="h-5 w-5 text-signal-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">Important note</p>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.05em] text-ink-950">Good for the current server setup.</h2>
              <p className="mt-4 text-sm leading-7 text-ink-700">
                {storageMode === "blob"
                  ? "This deployment is configured for Vercel Blob, so PDFs persist beyond redeploys and are suitable for the live admin workflow."
                  : "Blob storage is not configured yet, so uploads stay local to this project environment. Add BLOB_READ_WRITE_TOKEN on Vercel for production-safe catalog uploads."}
              </p>
            </div>

            <div className="surface-panel-light rounded-[2rem] p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <FileStack className="h-5 w-5 text-signal-500" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">Quick links</p>
              </div>
              <div className="mt-6 space-y-3">
                <Link
                  href="/catalogs"
                  className="flex items-center justify-between rounded-[1.25rem] border border-ink-950/8 bg-white px-4 py-4 text-sm font-semibold text-ink-950 transition hover:border-signal-500/24"
                >
                  <span>Open the catalog library</span>
                  <ArrowRight className="h-4 w-4 text-signal-500" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-between rounded-[1.25rem] border border-ink-950/8 bg-white px-4 py-4 text-sm font-semibold text-ink-950 transition hover:border-signal-500/24"
                >
                  <span>Open project contact page</span>
                  <ArrowRight className="h-4 w-4 text-signal-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="page-shell mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/52">Recent library view</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50">
                What the catalog library is showing right now
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-sand-100/66">
              This lets you sanity-check new uploads inside the same visual card system used everywhere else.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recentCatalogs.map((catalog) => (
              <CatalogCard key={catalog.id} catalog={catalog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
