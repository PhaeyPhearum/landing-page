"use client";

import { motion } from "framer-motion";
import { HERO, DEFAULT_TELEGRAM_URL } from "@/lib/config";
import { track } from "@/lib/analytics";
import StatusPanel from "./StatusPanel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(232,163,61,0.22),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(14,107,92,0.26),transparent_30%),linear-gradient(135deg,#101719_0%,#182124_45%,#0d1113_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-14 sm:pb-28 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-xs font-medium text-amber">
            {HERO.eyebrow}
          </span>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.35] text-paper sm:text-5xl lg:text-[3.05rem]">
            {HERO.headline}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/72 sm:text-lg">
            {HERO.supporting}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {HERO.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-paper/14 bg-paper/8 px-3 py-1 text-xs font-medium text-paper/78 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={DEFAULT_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("hero_telegram_click")}
              className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(232,163,61,0.24)] transition-colors hover:bg-amber-dark"
            >
              {HERO.primaryCta}
            </a>
            <a
              href="#work"
              onClick={() => track("hero_view_work_click")}
              className="inline-flex items-center justify-center rounded-full border border-paper/18 bg-paper/8 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/14"
            >
              {HERO.secondaryCta}
            </a>
          </div>

          <p className="mt-6 text-xs text-paper/54">
            {HERO.trustLine}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <StatusPanel />
        </motion.div>
      </div>
    </section>
  );
}
