"use client";

import { motion } from "framer-motion";
import { Target, Smartphone, Sparkles, Cable, LifeBuoy, type LucideIcon } from "lucide-react";
import { WHY_US, WHY_US_HEADING } from "@/lib/config";

const ICONS: Record<string, LucideIcon> = {
  Target,
  Smartphone,
  Sparkles,
  Cable,
  LifeBuoy,
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {WHY_US_HEADING}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_US.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (index % 5) * 0.05 }}
                className="rounded-2xl border border-line bg-card p-5"
              >
                <Icon className="h-5 w-5 text-amber-dark" strokeWidth={1.75} />
                <h3 className="mt-3 font-display text-sm font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
