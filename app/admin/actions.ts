"use server";

import { redirect } from "next/navigation";
import {
  clearAdminSession,
  createAdminSession,
  getAdminUsername,
  isAdminAuthConfigured,
  isCorrectAdminPassword,
  isCorrectAdminUsername,
} from "@/lib/admin-auth";

export async function loginAdminAction(
  _previousState: { status: "idle" | "error"; message: string },
  formData: FormData
): Promise<{ status: "idle" | "error"; message: string }> {
  if (!isAdminAuthConfigured()) {
    return {
      status: "error",
      message: "Set ADMIN_PASSWORD in your environment before using the admin area.",
    };
  }

  const username = typeof formData.get("username") === "string" ? String(formData.get("username")).trim() : "";
  const password = typeof formData.get("password") === "string" ? String(formData.get("password")).trim() : "";

  if (!isCorrectAdminUsername(username)) {
    return {
      status: "error",
      message: `Use the configured admin user ID for ${getAdminUsername()}.`,
    };
  }

  if (!isCorrectAdminPassword(password)) {
    return {
      status: "error",
      message: "That password is not correct.",
    };
  }

  await createAdminSession();
  redirect("/admin/catalogs");
}

export async function logoutAdminAction() {
  await clearAdminSession();
  redirect("/admin/login");
}
