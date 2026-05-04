"use client";

import { motion } from "framer-motion";
import { Users, Award, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TrustSignal {
  icon: React.ElementType;
  value: string;
  label: string;
}

const trustSignals: TrustSignal[] = [
  {
    icon: Users,
    value: "500+",
    label: "Contractors in Himachal Pradesh",
  },
  {
    icon: Award,
    value: "200+",
    label: "Projects completed",
  },
  {
    icon: TrendingUp,
    value: "69 Years",
    label: "Of trusted service since 1957",
  },
];

export default function TrustSignals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
      {trustSignals.map((signal, index) => {
        const Icon = signal.icon;
        return (
          <motion.div
            key={signal.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="surface-panel rounded-2xl p-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-signal-500/20 to-copper-400/20 mb-4">
              <Icon className="h-6 w-6 text-signal-400" />
            </div>
            <div className="font-display text-3xl font-bold text-sand-50 mb-1">
              {signal.value}
            </div>
            <div className="text-sm text-sand-100/70">
              {signal.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
