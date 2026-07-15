"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Sparkles,
  Bot,
  QrCode,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { SOLUTIONS, SOLUTIONS_HEADING, SOLUTIONS_SUBHEADING } from "@/lib/config";

const ICONS: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  Sparkles,
  Bot,
  QrCode,
  Cpu,
};

export default function SolutionsSection() {
  const primarySolutions = SOLUTIONS.filter((solution) => solution.tier === "primary");
  const advancedSolutions = SOLUTIONS.filter((solution) => solution.tier === "advanced");

  return (
    <section id="solutions" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold leading-snug text-paper sm:text-3xl">
            {SOLUTIONS_HEADING}
          </h2>
          <p className="mt-3 leading-relaxed text-paper/68">{SOLUTIONS_SUBHEADING}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primarySolutions.map((solution, index) => {
            const Icon = ICONS[solution.icon];
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.06 }}
                className="rounded-2xl border border-paper/12 bg-paper/8 p-6 text-paper shadow-[0_18px_60px_-38px_rgba(0,0,0,0.8)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/16">
                  <Icon className="h-5 w-5 text-amber" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-paper">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/64">
                  {solution.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {solution.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="rounded-full border border-paper/12 bg-paper/8 px-2.5 py-1 text-xs text-paper/68"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {advancedSolutions.map((solution, index) => {
            const Icon = ICONS[solution.icon];
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
                className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-5"
              >
                <Icon className="h-5 w-5 text-signal" strokeWidth={1.75} />
                <h3 className="mt-3 font-display text-sm font-semibold text-paper">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/58">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
