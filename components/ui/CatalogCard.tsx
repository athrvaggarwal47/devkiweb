import { ArrowUpRight, Download, FileText } from "lucide-react";
import type { Catalog } from "@/data/catalogs";

interface CatalogCardProps {
  catalog: Catalog;
}

const BRAND_STYLES: Record<string, { accent: string; surface: string }> = {
  anchor: {
    accent: "#ef5b67",
    surface: "linear-gradient(135deg, rgba(239,91,103,0.26), rgba(11,16,23,0.72))",
  },
  havells: {
    accent: "#4d94ff",
    surface: "linear-gradient(135deg, rgba(77,148,255,0.26), rgba(11,16,23,0.74))",
  },
  panasonic: {
    accent: "#6aa0ff",
    surface: "linear-gradient(135deg, rgba(106,160,255,0.24), rgba(18,26,36,0.78))",
  },
  greatwhite: {
    accent: "#80c2ff",
    surface: "linear-gradient(135deg, rgba(128,194,255,0.24), rgba(18,26,36,0.76))",
  },
  diplast: {
    accent: "#f17a76",
    surface: "linear-gradient(135deg, rgba(241,122,118,0.22), rgba(18,26,36,0.78))",
  },
  philips: {
    accent: "#59a8ff",
    surface: "linear-gradient(135deg, rgba(89,168,255,0.28), rgba(17,28,46,0.78))",
  },
  bajaj: {
    accent: "#ff9a57",
    surface: "linear-gradient(135deg, rgba(255,154,87,0.26), rgba(24,18,24,0.78))",
  },
  racold: {
    accent: "#ff6b63",
    surface: "linear-gradient(135deg, rgba(255,107,99,0.26), rgba(26,18,18,0.8))",
  },
  usha: {
    accent: "#ff7078",
    surface: "linear-gradient(135deg, rgba(255,112,120,0.24), rgba(25,18,29,0.8))",
  },
};

export default function CatalogCard({ catalog }: CatalogCardProps) {
  const palette =
    BRAND_STYLES[catalog.brandId] ??
    ({
      accent: "#63a7ff",
      surface: "linear-gradient(135deg, rgba(99,167,255,0.22), rgba(18,26,36,0.78))",
    } as const);

  return (
    <a
      href={catalog.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${catalog.title}`}
      className="group block h-full"
    >
      <article className="catalog-card flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-white/10 bg-[rgba(12,18,26,0.74)] shadow-panel transition duration-300 hover:-translate-y-1 hover:border-signal-400/40">
        <div className="relative aspect-[4/3] overflow-hidden p-6" style={{ background: palette.surface }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,242,232,0.18),transparent_24%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <span className="catalog-card-badge inline-flex rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-50/86 backdrop-blur">
                {catalog.category}
              </span>
              <span
                className="rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  color: palette.accent,
                  backgroundColor: `${palette.accent}1A`,
                  border: `1px solid ${palette.accent}33`,
                }}
              >
                {catalog.year}
              </span>
            </div>

            <div className="space-y-4">
              <div className="catalog-card-meta inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-3 py-1.5 text-xs font-medium text-sand-50/78">
                <FileText className="h-4 w-4" />
                Official catalog access
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100/60">{catalog.brand}</p>
                  <h3 className="mt-3 max-w-[14rem] font-display text-3xl font-bold leading-[0.95] text-sand-50">
                    {catalog.title}
                  </h3>
                </div>
                <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-sand-50/78 transition group-hover:flex">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-8 -right-4 font-display text-[7rem] font-bold leading-none text-white/5 transition duration-500 group-hover:scale-110"
            aria-hidden="true"
          >
            {catalog.brand.charAt(0)}
          </div>
        </div>

        <div className="catalog-card-body flex flex-1 flex-col gap-6 p-6 sm:p-7">
          <p className="catalog-card-description flex-1 text-sm leading-7 text-sand-100/72">{catalog.description}</p>
          <div className="signal-divider" />
          <div className="flex items-center justify-between gap-4">
            <span className="catalog-card-brand text-xs font-medium uppercase tracking-[0.22em] text-sand-100/52">{catalog.brand}</span>
            <span className="catalog-card-cta inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-sand-50 transition hover:border-signal-400/40 hover:bg-white/9">
              <Download className="h-4 w-4" />
              <span>View Catalog</span>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
