"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CleanCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true, ...props }: CleanCardProps) {
  return (
    <motion.div
      className={cn(
        "clean-card relative overflow-hidden",
        hoverEffect && "clean-card-hover",
        className
      )}
      {...props}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
