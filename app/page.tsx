import Script from "next/script";
import HomePageClient from "./home-page-client";
import { getAllCatalogs } from "@/lib/catalog-store";
import { getBusinessJsonLd } from "@/lib/seo";

export default async function HomePage() {
  const catalogs = await getAllCatalogs();
  const structuredData = getBusinessJsonLd();

  return (
    <>
      <Script id="business-jsonld" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <HomePageClient catalogs={catalogs} />
    </>
  );
}
