import HomePageClient from "./home-page-client";
import { getAllCatalogs } from "@/lib/catalog-store";

export default async function HomePage() {
  const catalogs = await getAllCatalogs();

  return <HomePageClient catalogs={catalogs} />;
}
