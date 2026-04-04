import CatalogsPageClient from "./page-client";
import { getAllCatalogs } from "@/lib/catalog-store";

type CatalogsPageProps = {
  searchParams: Promise<{ brand?: string }>;
};

export default async function CatalogsPage({ searchParams }: CatalogsPageProps) {
  const params = await searchParams;
  const initialBrand = typeof params.brand === "string" ? params.brand : "all";
  const initialCatalogs = await getAllCatalogs();

  return <CatalogsPageClient initialBrand={initialBrand} initialCatalogs={initialCatalogs} />;
}
