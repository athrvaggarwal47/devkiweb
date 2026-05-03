export default function CatalogCardSkeleton() {
  return (
    <div className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-white/10 bg-[rgba(12,18,26,0.74)] shadow-panel">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-white/2 p-6">
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between gap-3">
              <div className="h-7 w-24 animate-pulse rounded-full bg-white/10" />
              <div className="h-7 w-16 animate-pulse rounded-full bg-white/10" />
            </div>

            <div className="space-y-4">
              <div className="h-8 w-32 animate-pulse rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="h-3 w-20 animate-pulse rounded bg-white/8" />
                <div className="h-10 w-48 animate-pulse rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
          <div className="flex-1 space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-white/8" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-white/8" />
            <div className="h-4 w-4/6 animate-pulse rounded bg-white/8" />
          </div>
          <div className="h-px bg-white/8" />
          <div className="flex items-center justify-between gap-4">
            <div className="h-4 w-20 animate-pulse rounded bg-white/8" />
            <div className="h-10 w-32 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
      </article>
    </div>
  );
}
