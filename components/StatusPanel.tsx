"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STATUS_FEED } from "@/lib/config";

const VISIBLE_ROWS = 4;
const PRODUCT_WINDOWS = [
  {
    title: "QR Order",
    metric: "តុ 07 · $18.50",
    detail: "New order received",
    bars: ["w-11/12", "w-7/12", "w-9/12"],
    accent: "bg-amber",
  },
  {
    title: "ABA / KHQR",
    metric: "Payment confirmed",
    detail: "Invoice #A-204",
    bars: ["w-8/12", "w-10/12", "w-5/12"],
    accent: "bg-signal",
  },
  {
    title: "Room Invoice",
    metric: "បន្ទប់ 4B · $185",
    detail: "Monthly bill generated",
    bars: ["w-10/12", "w-6/12", "w-8/12"],
    accent: "bg-slate",
  },
  {
    title: "Telegram Post",
    metric: "Gold update · 08:00",
    detail: "Scheduled auto-post",
    bars: ["w-9/12", "w-11/12", "w-6/12"],
    accent: "bg-amber",
  },
];

export default function StatusPanel() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % STATUS_FEED.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const visible = Array.from({ length: VISIBLE_ROWS }, (_, i) => STATUS_FEED[(startIndex + i) % STATUS_FEED.length]);

  return (
    <div
      className="relative w-full max-w-xl"
      aria-hidden="true"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {PRODUCT_WINDOWS.map((item, index) => (
          <motion.div
            key={item.title}
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
            className={`rounded-2xl border border-paper/14 bg-paper/10 p-4 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-xl ${
              index === 1 ? "sm:mt-8" : ""
            } ${index === 2 ? "sm:-mt-4" : ""}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] font-medium text-paper/58">{item.title}</span>
              <span className={`h-2 w-2 rounded-full ${item.accent}`} />
            </div>
            <div className="rounded-xl bg-paper p-3 text-ink">
              <div className="text-lg font-semibold">{item.metric}</div>
              <div className="mt-1 text-[11px] font-medium text-ink-soft">{item.detail}</div>
              <div className="mt-3 space-y-1.5">
                {item.bars.map((bar, barIndex) => (
                  <div key={barIndex} className="h-2 rounded-full bg-line">
                    <div className={`h-2 rounded-full ${item.accent} ${bar}`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-4 max-w-md rounded-2xl border border-paper/14 bg-ink/70 p-4 backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] text-paper/58">ប្រព័ន្ធ · ផ្ទាល់</span>
          <span className="flex h-2 w-2 rounded-full bg-signal status-dot" />
        </div>
        <div className="flex flex-col gap-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((row) => (
            <motion.div
              key={`${row.business}-${row.status}`}
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-xl border border-paper/10 bg-paper/8 px-3 py-2.5"
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  row.state === "active" ? "bg-signal status-dot" : "bg-amber status-dot--pending"
                }`}
              />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-[11px] text-paper/52">
                  {row.business}
                </span>
                <span className="truncate text-sm font-medium text-paper">{row.status}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
