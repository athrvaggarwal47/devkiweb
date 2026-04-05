import { stat } from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { seoPages } from "@/data/seo-pages";
import { getAllCatalogs } from "@/lib/catalog-store";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/catalogs", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...seoPages.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const catalogs = await getAllCatalogs();
  const localCatalogPaths = [...new Set(catalogs.map((catalog) => catalog.pdfUrl).filter((pdfUrl) => pdfUrl.startsWith("/catalogs/")))];

  const documentEntries = await Promise.all(
    localCatalogPaths.map(async (pdfUrl) => {
      const relativePath = pdfUrl.replace(/^\/+/, "");
      const filePath = path.join(process.cwd(), "public", ...relativePath.split("/"));
      const fileStats = await stat(filePath);

      return {
        url: absoluteUrl(pdfUrl),
        lastModified: fileStats.mtime,
        changeFrequency: "monthly" as const,
        priority: 0.64,
      };
    })
  );

  return [...pageEntries, ...documentEntries];
}
