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
    <section id="final-cta" className="mx-auto max-w-6xl px-6 py-12 sm:py-18">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="darkMoonVariant rounded-3xl border border-paper/10 bg-ink px-6 py-12 text-center shadow-[0_24px_80px_-48px_rgba(18,24,26,0.8)] sm:px-12 sm:py-16"
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
                    : "border-paper/20 bg-paper/8 text-paper/80 backdrop-blur hover:border-paper/40"
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
          className="vh-btn-gold w-full max-w-xl text-lg mt-8 inline-flex items-center justify-center rounded-xl bg-amber px-10 py-5 font-semibold text-ink shadow-[0_0_34px_rgba(232,163,61,0.24)] transition-colors hover:bg-amber-dark"
        >
          {FINAL_CTA.primaryCta}
        </a>
        <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-slate-500 uppercase">30 minutes · Zoom or Google Meet · No commitment</p>
        <p className="mt-4 text-xs text-paper/50">{FINAL_CTA.secondaryText}</p>
        <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-[13.5px] text-slate-400"><a href="mailto:pheayphearum@gmail.com" className="flex items-center gap-2 hover:text-brand-bright transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-brand-bright"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>pheayphearum@gmail.com</a><a href="tel:+85586232004" className="flex items-center gap-2 hover:text-brand-bright transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call text-brand-bright"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>+855 86 232 004</a><span className="font-mono text-[11px] tracking-[0.14em] uppercase">@phearumphaey</span></div>
      </motion.div>
    </section>
  );
}
