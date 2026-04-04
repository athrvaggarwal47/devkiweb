import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (await verifyAdminSession()) {
    redirect("/admin/catalogs");
  }

  redirect("/admin/login");
}
