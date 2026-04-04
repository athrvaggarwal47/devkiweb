"use client";

import { upload } from "@vercel/blob/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, FileUp, LoaderCircle } from "lucide-react";
import { brands, productCategories } from "@/data/brands";
import type { CatalogStorageMode } from "@/lib/catalog-store";

type UploadCatalogFormProps = {
  storageMode: CatalogStorageMode;
};

export default function UploadCatalogForm({ storageMode }: UploadCatalogFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get("pdf");

    if (!(file instanceof File) || file.size === 0) {
      setStatus("error");
      setMessage("Choose a PDF before uploading.");
      return;
    }

    setPending(true);
    setStatus("idle");
    setMessage("");

    try {
      let pdfUrl = "";

      if (storageMode === "blob") {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/admin/catalog-upload",
          multipart: file.size > 10 * 1024 * 1024,
        });

        pdfUrl = blob.url;
      } else {
        const localUploadForm = new FormData();
        localUploadForm.set("title", String(formData.get("title") ?? ""));
        localUploadForm.set("brandId", String(formData.get("brandId") ?? ""));
        localUploadForm.set("category", String(formData.get("category") ?? ""));
        localUploadForm.set("year", String(formData.get("year") ?? ""));
        localUploadForm.set("description", String(formData.get("description") ?? ""));
        localUploadForm.set("featured", String(formData.get("featured") ?? ""));
        localUploadForm.set("pdf", file);

        const localResponse = await fetch("/api/admin/catalogs/local-upload", {
          method: "POST",
          body: localUploadForm,
        });

        const localPayload = await localResponse.json();

        if (!localResponse.ok) {
          throw new Error(localPayload.error ?? "The local upload failed.");
        }

        setStatus("success");
        setMessage(localPayload.message ?? "Catalog uploaded successfully.");
        form.reset();
        router.refresh();
        return;
      }

      const response = await fetch("/api/admin/catalogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: String(formData.get("title") ?? "").trim(),
          brandId: String(formData.get("brandId") ?? "").trim(),
          category: String(formData.get("category") ?? "").trim(),
          year: Number(formData.get("year")),
          description: String(formData.get("description") ?? "").trim(),
          featured: formData.get("featured") === "on",
          pdfUrl,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error ?? "The catalog metadata could not be saved.");
      }

      setStatus("success");
      setMessage(payload.message ?? "Catalog uploaded successfully.");
      form.reset();
      router.refresh();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The upload failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" encType="multipart/form-data">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-sand-100/70">
          <span className="font-semibold text-sand-50">Catalog title</span>
          <input
            name="title"
            required
            placeholder="Havells Decorative Lighting 2026"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sand-50 outline-none transition placeholder:text-sand-100/34 focus:border-signal-400/40"
          />
        </label>

        <label className="grid gap-2 text-sm text-sand-100/70">
          <span className="font-semibold text-sand-50">Partner brand</span>
          <select
            name="brandId"
            required
            defaultValue=""
            className="rounded-2xl border border-white/10 bg-ink-950 px-4 py-3 text-sand-50 outline-none transition focus:border-signal-400/40"
          >
            <option value="" disabled>
              Select a partner brand
            </option>
            {brands.map((brand) => (
              <option key={brand.slug} value={brand.slug}>
                {brand.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm text-sand-100/70">
          <span className="font-semibold text-sand-50">Category</span>
          <input
            name="category"
            required
            list="catalog-categories"
            placeholder="Lighting"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sand-50 outline-none transition placeholder:text-sand-100/34 focus:border-signal-400/40"
          />
          <datalist id="catalog-categories">
            {productCategories
              .filter((category) => category !== "All")
              .map((category) => (
                <option key={category} value={category} />
              ))}
          </datalist>
        </label>

        <label className="grid gap-2 text-sm text-sand-100/70">
          <span className="font-semibold text-sand-50">Year</span>
          <input
            name="year"
            type="number"
            min="2000"
            max="2100"
            required
            defaultValue={new Date().getFullYear()}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sand-50 outline-none transition focus:border-signal-400/40"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-sand-100/70">
        <span className="font-semibold text-sand-50">Short description</span>
        <textarea
          name="description"
          required
          rows={4}
          placeholder="Briefly describe what the catalog covers so the existing card layout stays helpful."
          className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-sand-50 outline-none transition placeholder:text-sand-100/34 focus:border-signal-400/40"
        />
      </label>

      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <label className="grid gap-2 text-sm text-sand-100/70">
          <span className="font-semibold text-sand-50">PDF file</span>
          <div className="rounded-[1.5rem] border border-dashed border-white/14 bg-white/4 p-4">
            <div className="flex items-center gap-3 text-sand-50">
              <FileUp className="h-5 w-5 text-copper-400" />
              <p className="text-sm leading-6 text-sand-100/74">
                {storageMode === "blob"
                  ? "Upload a `.pdf` file directly to Vercel Blob so it remains available after redeploys."
                  : "Upload a `.pdf` file locally. This mode is useful for local editing before Blob is configured."}
              </p>
            </div>
            <input
              name="pdf"
              type="file"
              accept="application/pdf,.pdf"
              required
              className="mt-4 block w-full text-sm text-sand-100 file:mr-4 file:rounded-full file:border-0 file:bg-signal-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-signal-400"
            />
          </div>
        </label>

        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-sand-100/74">
          <input name="featured" type="checkbox" className="h-4 w-4 accent-[#63a7ff]" />
          <span>Show this in featured catalog sections</span>
        </label>
      </div>

      {message ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-400/24 bg-emerald-500/10 text-emerald-100"
              : "border-rose-400/24 bg-rose-500/10 text-rose-100"
          }`}
        >
          {message}
        </div>
      ) : null}

      <button type="submit" disabled={pending} className="button-primary justify-center disabled:cursor-not-allowed disabled:opacity-70">
        {pending ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Uploading catalog
          </>
        ) : (
          <>
            Save catalog to the library
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
