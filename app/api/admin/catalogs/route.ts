import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { seoPages } from "@/data/seo-pages";
import { verifyAdminRequest } from "@/lib/admin-auth";
import { createUploadedCatalogRecord } from "@/lib/catalog-store";

export async function POST(request: Request) {
  if (!verifyAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const payload = await request.json();

    const catalog = await createUploadedCatalogRecord({
      title: String(payload.title ?? "").trim(),
      brandId: String(payload.brandId ?? "").trim(),
      category: String(payload.category ?? "").trim(),
      year: Number(payload.year),
      description: String(payload.description ?? "").trim(),
      featured: Boolean(payload.featured),
      pdfUrl: String(payload.pdfUrl ?? "").trim(),
    });

    revalidatePath("/");
    revalidatePath("/catalogs");
    revalidatePath("/admin/catalogs");

    for (const page of seoPages) {
      revalidatePath(`/${page.slug}`);
    }

    return NextResponse.json({
      ok: true,
      message: `${catalog.title} is live in the catalog library.`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Catalog metadata could not be saved." },
      { status: 400 }
    );
  }
}
