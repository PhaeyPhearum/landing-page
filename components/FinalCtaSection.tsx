"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FINAL_CTA, BUSINESS_TYPES, DEFAULT_TELEGRAM_URL, telegramUrlForBusinessType } from "@/lib/config";
import { track } from "@/lib/analytics";

export default function FinalCtaSection() {
  const [selected, setSelected] = useState<string | null>(null);

  const telegramUrl = selected ? telegramUrlForBusinessType(selected) : DEFAULT_TELEGRAM_URL;

  function handleSelect(type: string) {
    setSelected(type);
    track("business_type_selected", { businessType: type });
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rounded-3xl border border-line bg-ink px-6 py-12 text-center sm:px-12 sm:py-16"
      >
        <h2 className="mx-auto max-w-xl font-display text-2xl font-semibold leading-snug text-paper sm:text-3xl">
          {FINAL_CTA.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-paper/70">{FINAL_CTA.supporting}</p>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {BUSINESS_TYPES.map((type) => {
            const isSelected = selected === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => handleSelect(type)}
                aria-pressed={isSelected}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isSelected
                    ? "border-amber bg-amber text-ink"
                    : "border-paper/20 bg-transparent text-paper/80 hover:border-paper/40"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("final_telegram_click", { businessType: selected ?? "unspecified" })}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-amber px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-dark"
        >
          {FINAL_CTA.primaryCta}
        </a>
        <p className="mt-4 text-xs text-paper/50">{FINAL_CTA.secondaryText}</p>
      </motion.div>
    </section>
  );
}
