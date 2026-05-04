"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Catalog } from "@/data/catalogs";
import { brands } from "@/data/brands";

interface SearchDialogProps {
  catalogs: Catalog[];
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ catalogs, isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{
    catalogs: Catalog[];
    brands: typeof brands;
  }>({ catalogs: [], brands: [] });

  useEffect(() => {
    if (!query.trim()) {
      setResults({ catalogs: [], brands: [] });
      return;
    }

    const searchTerm = query.toLowerCase();

    // Search catalogs
    const matchedCatalogs = catalogs.filter(
      (catalog) =>
        catalog.title.toLowerCase().includes(searchTerm) ||
        catalog.brand.toLowerCase().includes(searchTerm) ||
        catalog.category.toLowerCase().includes(searchTerm) ||
        catalog.description.toLowerCase().includes(searchTerm)
    );

    // Search brands
    const matchedBrands = brands.filter(
      (brand) =>
        brand.name.toLowerCase().includes(searchTerm) ||
        brand.tagline.toLowerCase().includes(searchTerm) ||
        brand.categories.some((cat) => cat.toLowerCase().includes(searchTerm))
    );

    setResults({
      catalogs: matchedCatalogs.slice(0, 5),
      brands: matchedBrands.slice(0, 3),
    });
  }, [query, catalogs]);

  const handleClose = () => {
    setQuery("");
    setResults({ catalogs: [], brands: [] });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Search Catalogs & Brands</DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-600" />
          <Input
            type="text"
            placeholder="Search for catalogs, brands, or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-600 hover:text-ink-950"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {query && (
          <div className="space-y-6 mt-4">
            {results.catalogs.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-ink-950 mb-3">Catalogs</h3>
                <div className="space-y-2">
                  {results.catalogs.map((catalog) => (
                    <Link
                      key={catalog.id}
                      href={`/catalogs?search=${encodeURIComponent(catalog.title)}`}
                      onClick={handleClose}
                      className="block p-3 rounded-lg border border-ink-950/10 hover:border-signal-500/40 hover:bg-signal-500/5 transition"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="font-semibold text-ink-950">{catalog.title}</p>
                          <p className="text-sm text-ink-600 mt-1">{catalog.brand}</p>
                        </div>
                        <Badge variant="secondary">{catalog.category}</Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {results.brands.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-ink-950 mb-3">Brands</h3>
                <div className="space-y-2">
                  {results.brands.map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/catalogs?brand=${brand.slug}`}
                      onClick={handleClose}
                      className="block p-3 rounded-lg border border-ink-950/10 hover:border-signal-500/40 hover:bg-signal-500/5 transition"
                    >
                      <p className="font-semibold text-ink-950">{brand.name}</p>
                      <p className="text-sm text-ink-600 mt-1">{brand.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {results.catalogs.length === 0 && results.brands.length === 0 && (
              <div className="text-center py-8 text-ink-600">
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-2">Try searching for brands like Anchor, Havells, or Panasonic</p>
              </div>
            )}
          </div>
        )}

        {!query && (
          <div className="text-center py-8 text-ink-600">
            <Search className="h-12 w-12 mx-auto mb-3 opacity-40" />
            <p className="text-sm">Start typing to search catalogs and brands</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
