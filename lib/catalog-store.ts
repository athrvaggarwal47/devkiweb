import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { list, put } from "@vercel/blob";
import { brands } from "@/data/brands";
import { baseCatalogs, getCatalogCoverGradient, type Catalog } from "@/data/catalogs";

const uploadedCatalogsPath = path.join(process.cwd(), "data", "catalogs.user.json");
const uploadedCatalogDirectory = path.join(process.cwd(), "public", "catalogs", "uploads");
const uploadedCatalogsBlobPath = "catalogs-data/catalogs.json";

export type CatalogStorageMode = "local" | "blob";

export type UploadedCatalogMetadataInput = {
  title: string;
  brandId: string;
  category: string;
  year: number;
  description: string;
  featured: boolean;
  pdfUrl: string;
};

function normalizeText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function sanitizeFileName(value: string) {
  return value
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sortCatalogs(list: Catalog[]) {
  return [...list].sort((left, right) => {
    if (left.featured !== right.featured) {
      return Number(right.featured) - Number(left.featured);
    }

    if (left.year !== right.year) {
      return right.year - left.year;
    }

    return left.title.localeCompare(right.title);
  });
}

async function ensureUploadedCatalogFile() {
  try {
    await readFile(uploadedCatalogsPath, "utf8");
  } catch {
    await writeFile(uploadedCatalogsPath, "[]\n", "utf8");
  }
}

export function getCatalogStorageMode(): CatalogStorageMode {
  return process.env.BLOB_READ_WRITE_TOKEN ? "blob" : "local";
}

async function getBlobCatalogs(): Promise<Catalog[]> {
  const { blobs } = await list({
    prefix: uploadedCatalogsBlobPath,
    limit: 10,
  });

  const metadataBlob = blobs.find((blob) => blob.pathname === uploadedCatalogsBlobPath);

  if (!metadataBlob) {
    return [];
  }

  const response = await fetch(metadataBlob.url, { cache: "no-store" });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  return Array.isArray(payload) ? (payload as Catalog[]) : [];
}

async function writeBlobCatalogs(catalogs: Catalog[]) {
  await put(uploadedCatalogsBlobPath, JSON.stringify(catalogs, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function getUploadedCatalogs(): Promise<Catalog[]> {
  if (getCatalogStorageMode() === "blob") {
    return getBlobCatalogs();
  }

  await ensureUploadedCatalogFile();

  try {
    const raw = await readFile(uploadedCatalogsPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Catalog[]) : [];
  } catch {
    return [];
  }
}

export async function getAllCatalogs(): Promise<Catalog[]> {
  const uploadedCatalogs = await getUploadedCatalogs();
  return sortCatalogs([...uploadedCatalogs, ...baseCatalogs]);
}

function buildUploadedCatalog(input: UploadedCatalogMetadataInput) {
  const brand = brands.find((item) => item.slug === input.brandId);

  if (!brand) {
    throw new Error("Select a valid partner brand.");
  }

  return {
    id: `${slugify(input.title)}-${Date.now()}`,
    title: input.title,
    brand: brand.name,
    brandId: brand.slug,
    category: input.category,
    year: input.year,
    description: input.description,
    pdfUrl: input.pdfUrl,
    coverGradient: getCatalogCoverGradient(brand.slug),
    featured: input.featured,
  } satisfies Catalog;
}

export async function createUploadedCatalogRecord(input: UploadedCatalogMetadataInput) {
  if (!input.title || !input.brandId || !input.category || !input.description || !Number.isFinite(input.year)) {
    throw new Error("Please complete the title, brand, category, year, and description fields.");
  }

  if (input.year < 2000 || input.year > 2100) {
    throw new Error("Use a valid catalog year.");
  }

  if (!input.pdfUrl) {
    throw new Error("The PDF upload did not finish correctly.");
  }

  const existingCatalogs = await getUploadedCatalogs();
  const nextCatalog = buildUploadedCatalog(input);
  const nextUploadedCatalogs = sortCatalogs([nextCatalog, ...existingCatalogs]);

  if (getCatalogStorageMode() === "blob") {
    await writeBlobCatalogs(nextUploadedCatalogs);
  } else {
    await writeFile(uploadedCatalogsPath, `${JSON.stringify(nextUploadedCatalogs, null, 2)}\n`, "utf8");
  }

  return nextCatalog;
}

export async function createUploadedCatalog(formData: FormData) {
  const title = normalizeText(formData.get("title"));
  const brandId = normalizeText(formData.get("brandId"));
  const category = normalizeText(formData.get("category"));
  const description = normalizeText(formData.get("description"));
  const year = Number(normalizeText(formData.get("year")));
  const featured = formData.get("featured") === "on";
  const file = formData.get("pdf");

  if (!title || !brandId || !category || !description || !Number.isFinite(year)) {
    throw new Error("Please complete the title, brand, category, year, and description fields.");
  }

  if (year < 2000 || year > 2100) {
    throw new Error("Use a valid catalog year.");
  }

  const brand = brands.find((item) => item.slug === brandId);
  if (!brand) {
    throw new Error("Select a valid partner brand.");
  }

  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Upload a PDF catalog file.");
  }

  const lowerName = file.name.toLowerCase();
  const declaredPdf = file.type === "application/pdf" || lowerName.endsWith(".pdf");

  if (!declaredPdf) {
    throw new Error("Only PDF catalogs are supported right now.");
  }

  const timestamp = Date.now();
  const fileBaseName = sanitizeFileName(`${slugify(title)}-${year}-${timestamp}`);
  const fileName = `${fileBaseName}.pdf`;
  const filePath = path.join(uploadedCatalogDirectory, fileName);
  const pdfUrl = `/catalogs/uploads/${fileName}`;

  await mkdir(uploadedCatalogDirectory, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(filePath, buffer);

  return createUploadedCatalogRecord({
    title,
    brandId: brand.slug,
    category,
    year,
    description,
    featured,
    pdfUrl,
  });
}
