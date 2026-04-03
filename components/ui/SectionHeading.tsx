import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  invert?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-5", centered && "mx-auto text-center")}>
      {eyebrow && (
        <div className={cn("eyebrow", centered && "mx-auto")}>
          <p>{eyebrow}</p>
        </div>
      )}
      <h2
        className={cn(
          "max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl",
          centered && "mx-auto",
          invert ? "text-sand-50" : "text-ink-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-sm leading-7 sm:text-base",
            centered && "mx-auto",
            invert ? "text-sand-100/78" : "text-ink-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
