import CatalogsPageClient from "./page-client";

type CatalogsPageProps = {
  searchParams: Promise<{ brand?: string }>;
};

export default async function CatalogsPage({ searchParams }: CatalogsPageProps) {
  const params = await searchParams;
  const initialBrand = typeof params.brand === "string" ? params.brand : "all";

  return <CatalogsPageClient initialBrand={initialBrand} />;
}
