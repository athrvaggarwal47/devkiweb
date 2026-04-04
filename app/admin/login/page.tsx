import { redirect } from "next/navigation";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAdminUsername, isAdminAuthConfigured, verifyAdminSession } from "@/lib/admin-auth";
import LoginForm from "./login-form";

export const metadata = {
  title: "Admin Login",
  description: "Private access to the Devki Nandan & Sons catalog admin desk.",
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await verifyAdminSession()) {
    redirect("/admin/catalogs");
  }

  const authConfigured = isAdminAuthConfigured();
  const adminUsername = getAdminUsername();

  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36">
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(99,167,255,0.18),transparent_34%),radial-gradient(circle_at_82%_4%,rgba(185,133,71,0.14),transparent_28%)]" />
      <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.8fr)] lg:items-start">
        <SectionHeading
          eyebrow="Protected access"
          title="Sign in to the catalog admin desk."
          subtitle="This area is intended for internal catalog management so uploads can be controlled without exposing the tools to public visitors."
          invert
        />

        <div className="surface-panel rounded-[2rem] p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">Admin access</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50">Catalog upload panel</h2>
          <p className="mt-4 text-sm leading-7 text-sand-100/70">
            Use the admin user ID and deployment password to access the upload desk and publish new catalogs into the live library.
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/5 p-5 text-sm leading-7 text-sand-100/72">
            <p className="font-semibold text-sand-50">Admin user ID</p>
            <p className="mt-2">{adminUsername}</p>
          </div>

          {!authConfigured ? (
            <div className="mt-6 rounded-[1.5rem] border border-amber-400/24 bg-amber-500/10 p-5 text-sm leading-7 text-amber-100">
              Set `ADMIN_PASSWORD` in your local `.env.local` file and in your Vercel project environment variables before
              using this route. You can also override `ADMIN_USERNAME` there if you ever want a different login ID.
            </div>
          ) : null}

          <div className="mt-8">
            <LoginForm disabled={!authConfigured} />
          </div>
        </div>
      </div>
    </section>
  );
}
