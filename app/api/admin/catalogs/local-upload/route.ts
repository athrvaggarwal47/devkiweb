import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { seoPages } from "@/data/seo-pages";
import { verifyAdminRequest } from "@/lib/admin-auth";
import { createUploadedCatalog } from "@/lib/catalog-store";

export async function POST(request: Request) {
  if (!verifyAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const catalog = await createUploadedCatalog(formData);

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
      { error: error instanceof Error ? error.message : "The local upload could not be completed." },
      { status: 400 }
    );
  }
}
