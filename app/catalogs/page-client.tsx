"use client";

import { useDeferredValue, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileStack, Search, SlidersHorizontal, X } from "lucide-react";
import CatalogCard from "@/components/ui/CatalogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { brands } from "@/data/brands";
import type { Catalog } from "@/data/catalogs";
import { cn } from "@/lib/utils";

type CatalogsPageClientProps = {
  initialBrand: string;
  initialCatalogs: Catalog[];
};

export default function CatalogsPageClient({ initialBrand, initialCatalogs }: CatalogsPageClientProps) {
  const resolvedBrand = brands.some((brand) => brand.slug === initialBrand) ? initialBrand : "all";
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBrand, setActiveBrand] = useState(resolvedBrand);
  const [activeCategory, setActiveCategory] = useState("all");

  const deferredQuery = useDeferredValue(searchQuery.trim().toLowerCase());
  const categories = Array.from(new Set(initialCatalogs.map((catalog) => catalog.category))).sort();

  const filteredCatalogs = initialCatalogs.filter((catalog) => {
    const matchesSearch =
      deferredQuery.length === 0 ||
      catalog.title.toLowerCase().includes(deferredQuery) ||
      catalog.description.toLowerCase().includes(deferredQuery) ||
      catalog.brand.toLowerCase().includes(deferredQuery);

    const matchesBrand = activeBrand === "all" || catalog.brandId === activeBrand;
    const matchesCategory = activeCategory === "all" || catalog.category === activeCategory;

    return matchesSearch && matchesBrand && matchesCategory;
  });

  const activeFilters =
    Number(searchQuery.trim().length > 0) + Number(activeBrand !== "all") + Number(activeCategory !== "all");

  const suggestedBrands = brands.filter((brand) => brand.slug !== activeBrand).slice(0, 4);

  const suggestedCategories = categories.filter((category) => category !== activeCategory).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-22">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(99,167,255,0.18),transparent_34%),radial-gradient(circle_at_82%_4%,rgba(185,133,71,0.14),transparent_28%)]" />
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-end">
            <SectionHeading
              eyebrow="Catalogs"
              title="Browse partner catalogs by brand, category, and requirement."
              subtitle="This library brings together product documents from trusted brands so customers can compare ranges and move forward with more clarity."
              invert
            />

            <div className="surface-panel rounded-[2rem] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/56">Catalog access</p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50">
                    Find the right document quickly.
                  </h2>
                </div>
                <div className="rounded-full border border-signal-400/24 bg-signal-500/12 px-4 py-2 text-sm font-semibold text-signal-400">
                  {filteredCatalogs.length} results
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-black/18 p-4">
                <label className="flex items-center gap-3 rounded-full border border-white/8 bg-white/4 px-4 py-3">
                  <Search className="h-4 w-4 text-sand-100/56" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search brands, categories, or document names"
                    className="w-full bg-transparent text-sm text-sand-50 outline-none placeholder:text-sand-100/40"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="rounded-full border border-white/8 p-1 text-sand-100/50 transition hover:text-sand-50"
                      aria-label="Clear search"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell">
          <div className="surface-panel-light rounded-[2rem] p-6 sm:p-8">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-600">Browse by need</p>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em] text-ink-950">
                  Sort by trusted brand or product category.
                </h2>
                <p className="mt-4 text-sm leading-7 text-ink-700">
                  Buyers often already know the brand they trust or the category they need. These filters make that process simpler and faster.
                </p>
              </div>

              <div className="rounded-full border border-ink-950/8 bg-white px-4 py-3 text-sm font-medium text-ink-700">
                {activeFilters > 0 ? `${activeFilters} active filters` : "No filters applied"}
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-600">
                  <FileStack className="h-4 w-4" />
                  Filter by brand
                </div>
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => setActiveBrand("all")} className={chipClass(activeBrand === "all")}>
                    All brands
                  </button>
                  {brands.map((brand) => (
                    <button
                      type="button"
                      key={brand.slug}
                      onClick={() => setActiveBrand(brand.slug)}
                      className={chipClass(activeBrand === brand.slug)}
                    >
                      {brand.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-600">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filter by category
                </div>
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={() => setActiveCategory("all")} className={chipClass(activeCategory === "all")}>
                    All categories
                  </button>
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={chipClass(activeCategory === category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-100/52">Results</p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50">
                {filteredCatalogs.length} catalog{filteredCatalogs.length === 1 ? "" : "s"} ready to open
              </h3>
            </div>

            {activeFilters > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveBrand("all");
                  setActiveCategory("all");
                }}
                className="button-secondary self-start"
              >
                Reset filters
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>

          {filteredCatalogs.length > 0 ? (
            <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredCatalogs.map((catalog) => (
                  <motion.div
                    key={catalog.id}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.24 }}
                  >
                    <CatalogCard catalog={catalog} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-dashed border-white/14 bg-white/4 px-6 py-10 sm:px-8 sm:py-12">
              <div className="mx-auto flex max-w-4xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/6">
                    <Search className="h-6 w-6 text-sand-100/60" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.05em] text-sand-50">
                    No matching catalogs found
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-sand-100/66">
                    Nothing matches the current combination of search, brand, and category. Try a nearby brand or category,
                    or clear the filters to return to the full catalog library.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveBrand("all");
                      setActiveCategory("all");
                    }}
                    className="button-secondary mt-6"
                  >
                    Show all catalogs
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:min-w-[24rem]">
                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100/58">
                      Try another brand
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {suggestedBrands.map((brand) => (
                        <button
                          key={brand.slug}
                          type="button"
                          onClick={() => setActiveBrand(brand.slug)}
                          className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-sand-50 transition hover:border-signal-400/34 hover:text-signal-400"
                        >
                          {brand.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100/58">
                      Nearby categories
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {suggestedCategories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setActiveCategory(category)}
                          className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-sand-50 transition hover:border-signal-400/34 hover:text-signal-400"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function chipClass(active: boolean) {
  return cn(
    "rounded-full border px-4 py-2 text-sm font-medium transition",
    active
      ? "border-signal-500/35 bg-signal-500 text-white shadow-signal"
      : "border-ink-950/8 bg-white text-ink-700 hover:border-signal-500/30 hover:text-ink-950"
  );
}
