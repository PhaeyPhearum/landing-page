"use client";

import { motion } from "framer-motion";
import { Users, Workflow, LayoutDashboard, Cable, type LucideIcon } from "lucide-react";
import { PROBLEMS, PROBLEMS_HEADING } from "@/lib/config";

const ICONS: Record<string, LucideIcon> = {
  Users,
  Workflow,
  LayoutDashboard,
  Cable,
};

export default function ProblemsSection() {
  return (
    <section className="bg-[#eef5f1]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="max-w-2xl">
        <h2 className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
          {PROBLEMS_HEADING}
        </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((problem, index) => {
          const Icon = ICONS[problem.icon];
          return (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
              className="rounded-2xl border border-signal/10 bg-card/82 p-6 shadow-[0_16px_42px_-34px_rgba(14,107,92,0.45)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10">
                <Icon className="h-5 w-5 text-signal" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {problem.description}
              </p>
            </motion.div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
