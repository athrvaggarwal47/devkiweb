import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogsPageClient from "./page-client";
import CatalogCardSkeleton from "@/components/ui/CatalogCardSkeleton";
import { getAllCatalogs } from "@/lib/catalog-store";
import { createPageMetadata } from "@/lib/seo";

type CatalogsPageProps = {
  searchParams: Promise<{ brand?: string }>;
};

export const metadata: Metadata = createPageMetadata({
  title: "Catalog Library",
  description:
    "Browse electrical catalogs, price lists, and product documents from trusted brands supplied by Devki Nandan & Sons in Rampur Bushahr.",
  path: "/catalogs",
  keywords: [
    "electrical catalogs Rampur Bushahr",
    "electrical price list Himachal Pradesh",
    "Anchor catalogs",
    "Havells catalogs",
    "Philips lighting catalog",
  ],
});

export default async function CatalogsPage({ searchParams }: CatalogsPageProps) {
  const params = await searchParams;
  const initialBrand = typeof params.brand === "string" ? params.brand : "all";
  const initialCatalogs = await getAllCatalogs();

  return (
    <Suspense
      fallback={
        <div className="page-shell mt-32 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CatalogCardSkeleton key={i} />
          ))}
        </div>
      }
    >
      <CatalogsPageClient initialBrand={initialBrand} initialCatalogs={initialCatalogs} />
    </Suspense>
  );
}
