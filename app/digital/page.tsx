"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

/* ---------- Animated counter ---------- */
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

/* ---------- Signature device: every section is numbered like a line in a source file ---------- */
function Eyebrow({
  n,
  children,
  tone = "dark",
}: {
  n: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[13px] tracking-[1px]">
      <span className={tone === "dark" ? "text-black/30" : "text-white/30"}>{n}</span>
      <span className={tone === "dark" ? "text-black/15" : "text-white/15"}>/</span>
      <span className={tone === "dark" ? "text-[#A00A20]" : "text-white/70"}>{children}</span>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

/* ---------- Data ---------- */
const terminalStats = [
  { cmd: "campaigns.run()", to: 500, suffix: "+", label: "Campaigns" },
  { cmd: "clients.retain()", to: 98, suffix: "%", label: "Satisfaction" },
  { cmd: "reach.expand()", to: 10, suffix: "M+", label: "Audience reach" },
  { cmd: "brands.scale()", to: 100, suffix: "+", label: "Brands" },
];

const tickerItems = ["SEO", "Paid Ads", "Automation", "AI Solutions", "Analytics", "Content"];

const benefits = [
  {
    tag: "LEADS",
    title: "Higher Lead Generation",
    desc: "More qualified enquiries reaching your team, every month.",
  },
  {
    tag: "VISIBILITY",
    title: "Improved Brand Visibility",
    desc: "Consistent presence across search, social, and paid channels.",
  },
  {
    tag: "ENGAGEMENT",
    title: "Better Customer Engagement",
    desc: "Content and campaigns tuned to how your audience actually behaves.",
  },
  {
    tag: "REVENUE",
    title: "Scalable Revenue Growth",
    desc: "Systems built to compound, not just campaigns that spike and fade.",
  },
];

const nodes = [
  { key: "seo", label: "SEO", angle: 45 },
  { key: "ads", label: "Paid Ads", angle: 135 },
  { key: "auto", label: "Automation", angle: 225 },
  { key: "ai", label: "AI Solutions", angle: 315 },
];

const without = [
  "Leads trickle in unpredictably, month to month.",
  "Channels run in isolation with no shared data.",
  "Manual reporting eats hours every week.",
  "Growth stalls the moment a campaign pauses.",
];

const withArvess = [
  "A steady, forecastable flow of qualified leads.",
  "SEO, ads, and automation reading from one dataset.",
  "Dashboards that update themselves, in real time.",
  "Systems that keep compounding after launch.",
];

/* ---------- Signature visual: a live growth console ---------- */
function GrowthConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[28px] border border-white/10 bg-[#01180a] shadow-[0_30px_80px_-15px_rgba(1,45,14,0.5)]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#A00A20]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 font-mono text-xs text-white/35">arvess://growth-engine</span>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-7 p-7 font-mono md:grid-cols-4 md:p-9">
        {terminalStats.map((s, i) => (
          <motion.div
            key={s.cmd}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.14 }}
          >
            <p className="text-[12px] text-white/35">$ {s.cmd}</p>
            <p className="mt-2 text-3xl font-black text-white md:text-4xl">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-[12px] text-white/40">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Ticker: continuous strip, not a card grid ---------- */
function ServiceTicker() {
  const loop = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#012D0E] py-6">
      <motion.div
        className="flex w-max items-center gap-14 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-14 font-mono text-lg text-white/50">
            {item}
            <span className="text-[#A00A20]">→</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------- Ecosystem: orbit diagram instead of a bento grid ---------- */
function OrbitDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const cx = 300;
  const cy = 300;
  const r = 220;

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[600px]">
      <svg viewBox="0 0 600 600" className="h-full w-full">
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy - r * Math.sin(rad);
          return (
            <motion.line
              key={`line-${n.key}`}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#012D0E"
              strokeOpacity={0.15}
              strokeWidth={2}
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: "easeOut" }}
            />
          );
        })}

        {/* center node */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={78}
          fill="#012D0E"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "300px 300px" }}
        />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#ffffff" fontWeight={800} fontSize={22}>
          ARVESS
        </text>
        <text
          x={cx}
          y={cy + 18}
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="ui-monospace, monospace"
          fontSize={11}
          opacity={0.5}
        >
          growth-core
        </text>

        {/* satellite nodes */}
        {nodes.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy - r * Math.sin(rad);
          return (
            <motion.g
              key={n.key}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.35 + 0.15 * i, ease: "easeOut" }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <circle cx={x} cy={y} r={52} fill="#ffffff" stroke="#A00A20" strokeWidth={2} />
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fill="#012D0E"
                fontWeight={700}
                fontSize={15}
              >
                {n.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

export default function DigitalPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-44">
        <div className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-[#A00A20]/5 blur-[160px]" />

        <div className="relative mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Eyebrow n="001">digital-growth-solutions</Eyebrow>

            <h1 className="mt-8 text-[52px] font-black leading-[0.92] tracking-[-3px] text-[#012D0E] md:text-[104px] md:tracking-[-6px]">
              Build Digital
              <br />
              <span className="text-[#A00A20]">Authority</span>
            </h1>

            <p className="mt-8 max-w-[640px] text-lg leading-relaxed text-black/60 md:text-xl">
              From websites and SEO to performance marketing, automation and
              AI-powered growth systems, Arvess helps businesses create
              visibility, generate leads, and scale sustainably.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-[#A00A20] px-8 py-4 font-semibold text-white transition-transform duration-300 hover:scale-[1.03]">
                Start Digital Growth
              </button>
              <button className="rounded-full border border-black/10 bg-white px-8 py-4 font-semibold transition-colors duration-300 hover:border-[#A00A20] hover:text-[#A00A20]">
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-[1100px]"
        >
          <GrowthConsole />
        </motion.div>
      </section>

      {/* TICKER — replaces a card row with a continuous strip */}
      <ServiceTicker />

      {/* WHY DIGITAL MATTERS */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Eyebrow n="014">why-digital-matters</Eyebrow>
              <h2 className="mt-6 text-[38px] font-bold leading-[0.98] tracking-[-2px] text-[#012D0E] md:text-[58px] md:tracking-[-3px]">
                Digital Is The New Growth Engine
              </h2>
              <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-black/60">
                Modern businesses grow through visibility, engagement,
                automation and data-driven decision making. A strong digital
                ecosystem helps brands attract customers, increase
                conversions and create sustainable growth.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col justify-between rounded-[32px] bg-[#A00A20] p-10 text-white"
            >
              <p className="font-mono text-xs uppercase tracking-[3px] text-white/70">
                Average Growth
              </p>
              <h3 className="mt-4 text-7xl font-black">
                <Counter to={250} suffix="%" />
              </h3>
              <p className="mt-6 text-white/80">
                Seen by businesses running integrated digital strategies
                across search, paid, and automation.
              </p>
            </motion.div>
          </div>

          {/* BENEFITS — a log list, not a card grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-20 divide-y divide-black/10 border-y border-black/10"
          >
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group grid gap-4 py-8 md:grid-cols-[140px_1fr] md:items-baseline md:gap-10"
              >
                <span className="font-mono text-xs tracking-[1px] text-[#A00A20]">
                  {item.tag}
                </span>
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-2xl font-bold text-[#012D0E] transition-transform duration-300 group-hover:translate-x-2">
                    {item.title}
                  </h3>
                  <p className="max-w-[420px] text-sm leading-relaxed text-black/55">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIGITAL ECOSYSTEM — orbit diagram */}
      <section className="bg-[#fafafa] px-6 py-32">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            <Eyebrow n="038">digital-ecosystem</Eyebrow>
            <h2 className="mt-6 text-[38px] font-black tracking-[-2px] text-[#012D0E] md:text-[64px] md:tracking-[-4px]">
              Growth Through Connected Systems
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <OrbitDiagram />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="mx-auto mt-16 max-w-[720px] rounded-[30px] bg-[#012D0E] p-10 text-center text-white"
          >
            <h3 className="text-2xl font-bold md:text-3xl">Everything Connected</h3>
            <p className="mt-4 text-white/70">
              Every channel feeds the same system, working together to
              maximize visibility, engagement and conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ADVANTAGE — split comparison instead of two matching cards */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            <Eyebrow n="052">why-businesses-choose-digital</Eyebrow>
            <h2 className="mt-6 text-[38px] font-black tracking-[-2px] text-[#012D0E] md:text-[64px] md:tracking-[-4px]">
              Competitive Advantage In The Digital Era
            </h2>
            <p className="mx-auto mt-7 max-w-[800px] text-lg leading-relaxed text-black/60">
              Businesses that embrace digital transformation gain stronger
              market visibility, improve customer engagement, optimize
              operations, and unlock scalable growth opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid overflow-hidden rounded-[35px] border border-black/10 lg:grid-cols-2"
          >
            <motion.div variants={fadeUp} className="bg-white p-10 md:p-12">
              <span className="font-mono text-xs tracking-[1px] text-black/35">
                without-a-system
              </span>
              <ul className="mt-8 space-y-5">
                {without.map((line) => (
                  <li key={line} className="flex gap-4 text-black/55">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-black/25" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#012D0E] p-10 text-white md:p-12">
              <span className="font-mono text-xs tracking-[1px] text-white/50">
                with-arvess
              </span>
              <ul className="mt-8 space-y-5">
                {withArvess.map((line) => (
                  <li key={line} className="flex gap-4 text-white/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A00A20]" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}