"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

// ---------- Animated counter ----------
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const TICKER_ITEMS = [
  { to: 120, suffix: "+", label: "Investors In Network" },
  { to: 45, suffix: "+", label: "Deals Closed" },
  { to: 850, suffix: " Cr+", label: "Capital Facilitated" },
  { to: 12, suffix: "", label: "Sectors Covered" },
];

const REGISTER = [
  {
    entry: "No. 01",
    date: "Week 1–2",
    title: "Assessment",
    desc: "We review your business, financials, and growth story to understand investment readiness.",
  },
  {
    entry: "No. 02",
    date: "Week 3–4",
    title: "Strategy & Structuring",
    desc: "We build the fundraising strategy, valuation approach, and materials investors expect.",
  },
  {
    entry: "No. 03",
    date: "Week 5–8",
    title: "Investor Matchmaking",
    desc: "We connect you with angels, VCs, family offices, or institutions that fit your stage.",
  },
  {
    entry: "No. 04",
    date: "Week 9+",
    title: "Closure & Support",
    desc: "We support negotiations, due diligence, and closing so the round actually lands.",
  },
];

const INVESTOR_TYPES = [
  {
    type: "Angel Investors",
    checkSize: "₹10L – ₹1Cr",
    stage: "Idea / Seed",
    note: "Early believers who back founders on conviction as much as numbers.",
  },
  {
    type: "Venture Capital",
    checkSize: "₹1Cr – ₹25Cr",
    stage: "Seed / Series A–B",
    note: "Growth capital paired with mentorship for scalable businesses.",
  },
  {
    type: "Family Offices",
    checkSize: "₹2Cr – ₹50Cr",
    stage: "Growth / Late",
    note: "Patient capital from private wealth, built for long partnerships.",
  },
  {
    type: "Institutional Investors",
    checkSize: "₹25Cr+",
    stage: "Late / Pre-IPO",
    note: "Large-scale funding for mature businesses ready to expand.",
  },
];

export default function InvestorRelationsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO — split, term-sheet signature card on the right */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-[#A00A20]/5 blur-[160px]" />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[4px] text-[#A00A20]">
              <span className="h-px w-8 bg-[#A00A20]" />
              Investor Relations
            </span>

            <h1 className="mt-8 font-serif text-[48px] md:text-[84px] font-black leading-[0.98] tracking-[-3px] text-[#012D0E]">
              Every great round starts as a paper trail.
            </h1>

            <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-black/60">
              We build the strategy, the story, and the introductions —
              turning investment readiness into a signed term sheet with
              angels, VCs, family offices, and institutional investors.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#A00A20] px-9 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-[#8a0a1c]">
                Talk To Us
              </button>
              <button className="rounded-full border border-[#012D0E]/15 px-9 py-4 text-sm font-semibold uppercase tracking-[2px] text-[#012D0E] transition-colors duration-300 hover:bg-[#012D0E]/5">
                Download Deck
              </button>
            </div>
          </motion.div>

          {/* Signature element: a term-sheet card */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            <div className="rounded-[4px] border border-[#012D0E]/15 bg-white p-9 shadow-[0_30px_60px_-20px_rgba(1,45,14,0.25)]">
              <div className="flex items-start justify-between border-b border-dashed border-[#012D0E]/20 pb-5">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[2px] text-black/40">
                    Term Sheet — Draft
                  </div>
                  <div className="mt-1 font-serif text-2xl font-bold text-[#012D0E]">
                    Series A
                  </div>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#A00A20]/70 font-serif text-[11px] font-bold uppercase tracking-[1px] text-[#A00A20] rotate-[8deg]">
                  IR
                  <br />
                  Co.
                </div>
              </div>

              <dl className="mt-6 space-y-4">
                {[
                  ["Instrument", "Priced Equity Round"],
                  ["Valuation Cap", "On Request"],
                  ["Lead Status", "In Diligence"],
                  ["Close Target", "Q3 2026"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-black/50">{k}</dt>
                    <dd className="flex-1 border-b border-dotted border-[#012D0E]/20" />
                    <dd className="whitespace-nowrap text-sm font-semibold text-[#012D0E]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex items-center justify-between border-t border-dashed border-[#012D0E]/20 pt-5">
                <span className="text-[11px] uppercase tracking-[2px] text-black/40">
                  Prepared By IR Desk
                </span>
                <span className="font-serif text-lg italic text-[#A00A20]">
                  Signed &amp; Filed
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPITAL TAPE — ticker instead of a stat grid */}
      <section className="overflow-hidden border-y border-white/10 bg-[#012D0E] py-8">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex w-max items-center"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="flex items-center gap-4 border-r border-white/10 px-10"
            >
              <span className="font-serif text-3xl font-bold text-white">
                <Counter to={stat.to} suffix={stat.suffix} />
              </span>
              <span className="text-xs uppercase tracking-[2px] text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS — filed register / timeline, not numbered cards */}
      <section className="relative px-6 py-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="max-w-[700px]"
          >
            <span className="text-[13px] font-semibold uppercase tracking-[4px] text-[#A00A20]">
              The Register
            </span>
            <h2 className="mt-5 font-serif text-[36px] md:text-[58px] font-black leading-[1] tracking-[-2px] text-[#012D0E]">
              From first call to closed round.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mt-20 border-t border-[#012D0E]/10"
          >
            {REGISTER.map((row) => (
              <motion.div
                key={row.entry}
                variants={fadeUp}
                className="group grid grid-cols-1 gap-3 border-b border-[#012D0E]/10 py-8 md:grid-cols-[140px_140px_1fr_1.4fr] md:items-baseline md:gap-8"
              >
                <span className="font-serif text-lg text-[#A00A20]">
                  {row.entry}
                </span>
                <span className="text-xs uppercase tracking-[2px] text-black/40">
                  {row.date}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#012D0E] transition-transform duration-300 group-hover:translate-x-1">
                  {row.title}
                </h3>
                <p className="text-base leading-relaxed text-black/60">
                  {row.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INVESTOR REGISTER — cap-table style rows instead of icon cards */}
      <section className="bg-[#012D0E]/[0.03] px-6 py-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-[13px] font-semibold uppercase tracking-[4px] text-[#A00A20]">
              Who We Connect You With
            </span>
            <h2 className="mt-5 max-w-[800px] font-serif text-[32px] md:text-[52px] font-black leading-[1.05] tracking-[-2px] text-[#012D0E]">
              A capitalization table of relationships, not just names.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-16 overflow-hidden rounded-2xl border border-[#012D0E]/10 bg-white"
          >
            <div className="hidden grid-cols-[1.4fr_1fr_1fr_2fr] gap-6 border-b border-[#012D0E]/10 px-8 py-4 text-xs font-semibold uppercase tracking-[2px] text-black/40 md:grid">
              <span>Investor Type</span>
              <span>Typical Check</span>
              <span>Stage Focus</span>
              <span>What They Bring</span>
            </div>
            {INVESTOR_TYPES.map((row, i) => (
              <motion.div
                key={row.type}
                variants={fadeUp}
                className={`grid grid-cols-1 gap-2 px-8 py-7 md:grid-cols-[1.4fr_1fr_1fr_2fr] md:items-center md:gap-6 ${
                  i !== INVESTOR_TYPES.length - 1
                    ? "border-b border-[#012D0E]/10"
                    : ""
                } transition-colors duration-300 hover:bg-[#A00A20]/[0.03]`}
              >
                <span className="font-serif text-xl font-bold text-[#012D0E]">
                  {row.type}
                </span>
                <span className="text-sm font-semibold text-[#A00A20]">
                  {row.checkSize}
                </span>
                <span className="text-sm text-black/60">{row.stage}</span>
                <span className="text-sm leading-relaxed text-black/60">
                  {row.note}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA — signature line, stamped */}
      <section className="px-6 py-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[#012D0E] px-10 py-20"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#A00A20]/20 blur-[150px]" />

          <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
            <span className="font-serif text-sm italic text-white/50">
              Ready when you are —
            </span>
            <h2 className="mt-4 font-serif text-[32px] md:text-[54px] font-black leading-[1.08] tracking-[-2px] text-white">
              Ready to meet the right investors?
            </h2>
            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-white/60">
              Tell us about your business and where you want to go. We'll
              draft the strategy and open the introductions.
            </p>

            <div className="mt-10 w-full max-w-[420px] border-t border-dashed border-white/25 pt-6">
              <button className="w-full rounded-full bg-[#A00A20] px-10 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-transform duration-300 hover:scale-[1.02]">
                Schedule A Call
              </button>
              <span className="mt-4 block text-[11px] uppercase tracking-[2px] text-white/35">
                No commitment — 20 minute intro
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}