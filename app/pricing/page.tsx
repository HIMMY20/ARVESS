"use client";
import { useRef, useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

function PricingCard({ plan, index }: { plan: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -10, y: (px - 0.5) * 10 });
    setGlow({ x: px * 100, y: py * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  const accent = plan.featured ? "#A00A20" : index % 2 === 0 ? "#A00A20" : "#012D0E";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 10, filter: "blur(15px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1400px" }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        whileHover={{ y: -10, scale: plan.featured ? 1.04 : 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[18px] sm:rounded-[22px] p-4 sm:p-5 backdrop-blur-xl ${
          plan.featured ? "z-10" : "z-0"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[18px] sm:rounded-[22px] opacity-70"
          style={{
            background: `conic-gradient(from 0deg, ${accent}55, transparent 25%, transparent 50%, ${accent}55 75%, ${accent}55)`,
            padding: 1,
            animation: "spin-border 8s linear infinite",
          }}
        >
          <div className="h-full w-full rounded-[17px] sm:rounded-[21px] bg-white" />
        </div>

        <div
          className="relative flex h-full flex-col rounded-[17px] sm:rounded-[21px] p-4 sm:p-5"
          style={{
            background: plan.featured
              ? `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(160,10,32,0.07), rgba(255,255,255,0.85) 60%)`
              : `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(1,45,14,0.05), rgba(255,255,255,0.9) 60%)`,
            border: `1px solid ${plan.featured ? "rgba(160,10,32,0.18)" : "rgba(0,0,0,0.06)"}`,
            boxShadow: plan.featured
              ? "0 25px 80px rgba(160,10,32,0.18), 0 0 60px rgba(160,10,32,0.10)"
              : "0 15px 50px rgba(0,0,0,0.06)",
          }}
        >
          {plan.featured &&
            [...Array(6)].map((_, p) => (
              <span
                key={p}
                className="pointer-events-none absolute rounded-full bg-[#A00A20]/30"
                style={{
                  width: 3 + (p % 3),
                  height: 3 + (p % 3),
                  left: `${10 + p * 15}%`,
                  top: `${15 + (p % 4) * 20}%`,
                  animation: `float-particle ${4 + p}s ease-in-out infinite`,
                  animationDelay: `${p * 0.4}s`,
                }}
              />
            ))}

          {plan.badge && (
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#A00A20] px-3 sm:px-3.5 py-[4px] text-[8.5px] sm:text-[9.5px] font-semibold text-white tracking-wide whitespace-nowrap shadow-[0_6px_20px_rgba(160,10,32,0.4)]"
            >
              {plan.badge}
            </motion.div>
          )}

          <div style={{ transform: "translateZ(20px)" }}>
            <span className="inline-block text-[9px] sm:text-[9.5px] font-semibold uppercase tracking-[1.6px] sm:tracking-[1.8px] text-[#A00A20]/70">
              {plan.duration}
            </span>

            <h3 className="mt-1.5 text-[15px] sm:text-[16px] font-bold tracking-[-0.1px] leading-tight text-[#0F1B0F] min-h-[20px]">
              {plan.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-1">
              <span className={`text-[24px] sm:text-[26px] font-extrabold tracking-[-0.8px] leading-none ${plan.priceColor}`}>
                {plan.price}
              </span>
            </div>

            <p className="mt-2.5 text-[10.5px] sm:text-[11px] leading-[1.55] text-black min-h-0 sm:min-h-[48px]">
              {plan.desc}
            </p>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`relative mt-4 w-full overflow-hidden rounded-[8px] py-2.5 sm:py-2 text-[11.5px] font-semibold tracking-wide transition-all duration-300 ${plan.ctaStyle}`}
            >
              <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
                {plan.cta}
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>
          </div>

          <div className="relative mt-5 flex-1 border-t border-black/[0.07] pt-4" style={{ transform: "translateZ(10px)" }}>
            <p className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[1px] text-black/35 mb-2.5">
              What You'll Get
            </p>
            <div className="flex flex-col gap-2">
              {plan.features.map((f: string, j: number) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -6, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * j, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-1.5"
                >
                  <motion.span
                    whileHover={{ scale: 1.25 }}
                    className="mt-[1px] flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-[#A00A20]/10 transition-colors duration-300 group-hover:bg-[#A00A20]/20"
                  >
                    <svg width="7" height="7" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 4" stroke="#A00A20" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.span>
                  <span className="text-[10.5px] sm:text-[11px] leading-[1.4] text-black/60 transition-colors duration-300 group-hover:text-black/80">
                    {f}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PricingPage() {
  const pricingPlans = [
    {
      duration: "3 Months",
      name: "Foundation",
      price: "₹15,000",
      priceColor: "text-[#A00A20]",
      desc: "For startups exploring grant opportunities for the first time.",
      features: [
        "Grant-ready Pitch Deck (According to Guidelines)",
        "Detailed Financial Report with Projections (3 to 5 Years)",
        "5 Relevant Grant Scheme Application",
        "1:1 Consultation with Professional Consultant(s).",
        "Success Fee: 1.5% of Funds Raised (Applicable Post-disbursement)",
      ],
      cta: "Get Started",
      ctaStyle: "border border-[#A00A20]/25 text-[#A00A20] hover:bg-[#A00A20] hover:text-white hover:border-[#A00A20]",
      featured: false,
    },
    {
      duration: "6 Months",
      name: "Venture One",
      price: "₹25,000",
      priceColor: "text-[#012D0E]",
      desc: "Enhanced grant and funding preparation with deeper support.",
      features: [
        "Grant and Investors-ready Pitch Deck (According to Guidelines)",
        "Detailed Financial Report with Projections (3 to 5 Years)",
        "3 Industry-Specific Curated Investor Connections",
        "5 Relevant Grant Scheme Application",
        "1:1 Consultation with Professional Consultant(s).",
        "Success Fee: 1.5% of Funds Raised (Applicable Post-disbursement)",
      ],
      cta: "Get Started",
      ctaStyle: "border border-[#012D0E]/25 text-[#012D0E] hover:bg-[#012D0E] hover:text-white hover:border-[#012D0E]",
      featured: false,
    },
    {
      duration: "9 Months",
      name: "Venture Plus",
      price: "₹45,000",
      priceColor: "text-[#A00A20]",
      desc: "Complete investor readiness and fundraising package.",
      features: [
        "Grant and Investors-ready Pitch Deck (According to Guidelines)",
        "Detailed Financial Report with Projections (3 to 5 Years)",
        "10 Industry-Specific Curated Investor Connections",
        "10 Relevant Grant Scheme Application",
        "1:1 Consultation with Professional Consultant(s).",
        "Dedicated Funding Analyst",
        "Investor Collateral: Executive summary",
        "Investor Follow-Up Assistance",
        "Investor Pitch Rehearsal + Mock Session",
        "Success Fee: 1.5% of Funds Raised (Applicable Post-disbursement)",
      ],
      cta: "Get Started",
      ctaStyle: "bg-[#A00A20] text-white hover:bg-[#012D0E]",
      featured: true,
      badge: "Most Popular",
    },
    {
      duration: "12 Months",
      name: "Venture Elite",
      price: "₹75,000",
      priceColor: "text-[#A00A20]",
      desc: "Strategic planning and long-term growth consulting.",
      features: [
        "Grant and Investors-ready Pitch Deck (According to Guidelines)",
        "Detailed Financial Report with Projections (3 to 5 Years)",
        "10 Industry-Specific Curated Investor Connections",
        "15 Relevant Grant Scheme Application",
        "Invitation to Demo Day, PR and Networking Seminars",
        "1:1 Consultation with Professional Consultant(s).",
        "Dedicated Financial & Growth Consultant + Relationship Manager",
        "Advanced Investor Collateral",
        "Investor Follow-Up Assistance",
        "Investor Pitch Rehearsal + Mock Session",
        "Success Fee: 1.5% of Funds Raised (Applicable Post-disbursement)",
      ],
      cta: "Get Started",
      ctaStyle: "border border-[#A00A20]/25 text-[#A00A20] hover:bg-[#A00A20] hover:text-white hover:border-[#A00A20]",
      featured: false,
    },
    {
      duration: "Tax Exemption",
      name: "Tax Exemption Plan",
      price: "₹99,999",
      priceColor: "text-[#012D0E]",
      desc: "Secure a 100% 3-year income tax holiday for your DPIIT-recognized startup.",
      features: [
        "Designed for Scaling Startups.",
        "Eligibility Check & Pre-screening of Innovation & Business Model (3–5 Years).",
        "Documentation Support – Video Pitch, Pitch Deck, Detailed Report & Financial Validation.",
        "Application Filing – Complete Section 80-IAC Certificate Support.",
        "Query Management – IMB Clarifications & Follow-ups Handled.",
        "Dedicated Compliance & Documentation Assistance.",
        "End-to-End Guidance Until Application Submission.",
      ],
      cta: "Get Started",
      ctaStyle: "bg-[#012D0E] text-white hover:bg-[#A00A20]",
      featured: false,
    },
    {
      duration: "Enterprise",
      name: "Custom",
      price: "Quote",
      priceColor: "text-[#012D0E]",
      desc: "Fully customized end-to-end solutions for enterprises.",
      features: [
        "Designed For Scaling Startups & Enterprises.",
        "Eligibility Check & Pre-screening of Innovation and Business Model (3 to 5 Years).",
        "Documentation: Video Pitch, Deck, Report & Financial Validation.",
        "Application Filing Support — Section 80-IAC Certificate.",
        "Query Management — IMB Clarifications & Follow-ups Handled.",
        "Dedicated Account Manager & Custom Reporting Cadence.",
        "Success Fee: 1.5% of Funds Raised (Applicable Post-disbursement)",
      ],
      cta: "Contact Us",
      ctaStyle: "bg-[#012D0E] text-white hover:bg-[#A00A20]",
      featured: false,
    },
  ];

  const serviceCategories = [
    {
      num: "01",
      title: "Raise Capital",
      icon: "💰",
      bg: "bg-white",
      text: "text-[#012D0E]",
      sub: "text-black/60",
      tagBg: "bg-[#A00A20] text-white",
      desc: "From government grants to investor funding, we help businesses secure the right financial support for sustainable growth.",
      items: ["Grant Funding", "Equity Investment", "Debt Financing", "Investor Pitch", "Financial Advisory"],
    },
    {
      num: "02",
      title: "Build Securely",
      icon: "⚖️",
      bg: "bg-[#012D0E]",
      text: "text-white",
      sub: "text-white/70",
      tagBg: "bg-white text-[#012D0E]",
      desc: "Company registration, compliance management, IP protection, contracts, and complete legal advisory under one roof.",
      items: ["Business Formation", "Trademark", "Copyright", "Compliance", "Documentation"],
    },
    {
      num: "03",
      title: "Scale Faster",
      icon: "🚀",
      bg: "bg-[#A00A20]",
      text: "text-white",
      sub: "text-white/80",
      tagBg: "bg-white text-[#A00A20]",
      desc: "Powerful digital solutions including websites, SEO, branding, AI automation, and marketing strategies for long-term growth.",
      items: ["Website Development", "SEO Optimization", "Branding", "AI Automation", "Digital Marketing"],
    },
  ];

  const faqs = [
    {
      q: "Are your service prices fixed?",
      a: "Our packages have transparent starting prices. Depending on the project scope, business requirements, and timelines, the final investment may vary.",
    },
    {
      q: "Can I request a customized package?",
      a: "Absolutely. Every business has different objectives, so we create customized solutions that match your requirements and budget.",
    },
    {
      q: "Do you work with startups and enterprises?",
      a: "Yes. We support startups, MSMEs, growing businesses, and enterprises with funding, legal, and digital consulting.",
    },
    {
      q: "How quickly can we get started?",
      a: "After your consultation call, our team prepares a roadmap, proposal, and project timeline before beginning execution.",
    },
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />

      {/* HERO — split color-block, big flat type */}
      <section className="relative overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] border-b-[3px] border-[#012D0E] pb-14 sm:pb-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-[#A00A20]" />
                <span className="text-[11px] sm:text-sm font-bold uppercase tracking-[3px] text-[#A00A20]">
                  Pricing
                </span>
              </div>

              <h1 className="mt-6 sm:mt-8 text-[42px] sm:text-[64px] md:text-[104px] font-black uppercase leading-[0.92] tracking-[-2px] sm:tracking-[-5px] text-[#012D0E]">
                Pay For
                <br />
                Outcomes,
                <br />
                Not Hours.
              </h1>

              <p className="mt-6 sm:mt-8 max-w-[600px] text-base sm:text-xl leading-relaxed text-black/60">
                Fixed packages for startups, MSMEs and enterprises — funding,
                legal, and digital growth, priced upfront so you know exactly
                what you're signing up for.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
                <button className="rounded-md bg-[#A00A20] px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-[1px] text-white transition hover:bg-[#012D0E]">
                  Explore Pricing
                </button>
                <button className="rounded-md border-2 border-[#012D0E] px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#012D0E] transition hover:bg-[#012D0E] hover:text-white">
                  Talk To Expert
                </button>
              </div>
            </motion.div>

            {/* Signature element: flat stat block, no card/shadow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="grid grid-cols-2 gap-[2px] bg-[#012D0E] lg:self-stretch"
            >
              <div className="col-span-2 flex flex-col justify-center bg-[#012D0E] p-6 sm:p-8 text-white">
                <span className="text-[11px] uppercase tracking-[2px] text-white/60">
                  Starting From
                </span>
                <span className="mt-2 text-[48px] sm:text-[60px] font-black leading-none">
                  ₹9,999
                </span>
              </div>
              <div className="bg-white p-6 sm:p-8">
                <span className="text-3xl sm:text-4xl font-black text-[#012D0E]">250+</span>
                <p className="mt-2 text-xs sm:text-sm uppercase tracking-[1px] text-black/50">
                  Businesses Served
                </p>
              </div>
              <div className="bg-[#A00A20] p-6 sm:p-8">
                <span className="text-3xl sm:text-4xl font-black text-white">98%</span>
                <p className="mt-2 text-xs sm:text-sm uppercase tracking-[1px] text-white/80">
                  Satisfaction
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 — PRICING PLANS (unchanged) ============ */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[-150px] sm:left-[-200px] top-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#A00A20]/8 blur-[110px] sm:blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[-150px] sm:right-[-200px] bottom-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#012D0E]/8 blur-[110px] sm:blur-[160px]"
        />
        {[...Array(10)].map((_, p) => (
          <span
            key={p}
            className="pointer-events-none absolute rounded-full hidden sm:block"
            style={{
              width: 2 + (p % 3),
              height: 2 + (p % 3),
              left: `${5 + p * 9}%`,
              top: `${10 + (p % 5) * 15}%`,
              background: p % 2 === 0 ? "rgba(160,10,32,0.25)" : "rgba(1,45,14,0.25)",
              animation: `float-particle ${6 + p}s ease-in-out infinite`,
              animationDelay: `${p * 0.3}s`,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10 sm:mb-14 md:mb-20 text-center sm:text-left"
          >
            <span className="text-[11px] sm:text-[13px] md:text-[16px] font-bold uppercase tracking-[3px] sm:tracking-[5px] text-[#A00A20]">
              Choose Your Package
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[54px] md:text-[80px] text-[#012D0E] font-bold tracking-[-1.5px] sm:tracking-[-5px] leading-[1] sm:leading-[0.95]">
              Solutions For
              <span className="text-[#A00A20]"> Every Stage</span>
            </h2>
            <p className="mt-4 text-sm sm:text-[14px] md:text-[16px] text-black/50 max-w-[500px] leading-relaxed mx-auto sm:mx-0">
              Transparent, fixed-price packages — no hidden fees, no lock-ins.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-[1300px] mx-auto"
            style={{ perspective: "1800px" }}
          >
            {pricingPlans.map((plan, i) => (
              <PricingCard key={i} plan={plan} index={i} />
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-center text-[12px] sm:text-[13px] text-black/35 tracking-wide px-4">
            All plans include onboarding call · GST applicable · Custom plans available on request
          </p>
        </div>

        <style jsx global>{`
          @keyframes spin-border {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float-particle {
            0%, 100% { transform: translate(0, 0); opacity: 0.3; }
            50% { transform: translate(8px, -14px); opacity: 0.9; }
          }
        `}</style>
      </section>
      {/* ============ END SECTION 2 ============ */}

      {/* SERVICE CATEGORIES — full-bleed color-block stack with outline numerals */}
      <section className="relative">
        {serviceCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative overflow-hidden ${cat.bg} px-4 sm:px-6 py-16 sm:py-20`}
          >
            <span
              className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[160px] sm:text-[260px] md:text-[340px] font-black leading-none opacity-[0.06]"
              style={{
                WebkitTextStroke: cat.text.includes("white") ? "2px #ffffff" : "2px #012D0E",
                color: "transparent",
              }}
            >
              {cat.num}
            </span>

            <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 md:grid-cols-[80px_1fr_1.4fr_auto] md:gap-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-current text-3xl">
                {cat.icon}
              </div>

              <div>
                <span className={`inline-block rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-[2px] ${cat.tagBg}`}>
                  {`Category ${cat.num}`}
                </span>
                <h3 className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-[-1px] ${cat.text}`}>
                  {cat.title}
                </h3>
              </div>

              <div>
                <p className={`text-sm sm:text-base leading-relaxed ${cat.sub}`}>{cat.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <span
                      key={it}
                      className={`rounded-md border px-3 py-1 text-xs font-semibold uppercase tracking-[0.5px] ${
                        cat.text.includes("white")
                          ? "border-white/30 text-white/90"
                          : "border-[#012D0E]/20 text-[#012D0E]/80"
                      }`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className={`justify-self-start rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-[1px] transition md:justify-self-end ${cat.tagBg} hover:opacity-90`}
              >
                Explore →
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FAQ — two-column asymmetric, square toggles */}
      <section className="relative px-4 sm:px-6 py-20 sm:py-28 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="md:sticky md:top-32 md:self-start"
          >
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 bg-[#A00A20]" />
              <span className="text-[11px] sm:text-sm font-bold uppercase tracking-[3px] text-[#A00A20]">
                FAQ
              </span>
            </div>
            <h2 className="mt-6 text-[34px] sm:text-[48px] md:text-[58px] font-black uppercase leading-[0.95] tracking-[-2px] text-[#012D0E]">
              Questions,
              <br />
              Answered.
            </h2>
            <p className="mt-6 max-w-[380px] text-sm sm:text-base leading-relaxed text-black/60">
              Can't find what you're looking for? Talk to our team directly.
            </p>
          </motion.div>

          <div>
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group border-t-2 border-[#012D0E] py-6 last:border-b-2"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-lg sm:text-2xl font-bold text-[#012D0E]">{item.q}</h3>
                  <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center bg-[#A00A20]">
                    <span className="absolute h-[2px] w-3.5 sm:w-4 bg-white" />
                    <span className="absolute h-3.5 w-[2px] sm:h-4 bg-white transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </div>
                </summary>
                <p className="mt-4 max-w-[600px] text-sm sm:text-base leading-relaxed text-black/60">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — split solid-color panels */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-28 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto grid max-w-[1400px] grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2"
        >
          <div className="bg-[#012D0E] px-8 sm:px-12 py-14 sm:py-16">
            <span className="text-[11px] uppercase tracking-[2px] text-white/50">
              Business Consultation
            </span>
            <h2 className="mt-5 text-[30px] sm:text-[44px] font-black uppercase leading-[0.98] tracking-[-1.5px] text-white">
              Your Next
              <br />
              Big Move
              <br />
              Starts Here.
            </h2>
            <p className="mt-6 max-w-[420px] text-sm sm:text-base leading-relaxed text-white/60">
              Connect with our experts to identify opportunities, overcome
              challenges, and build a clear roadmap for growth.
            </p>
          </div>

          <div className="bg-[#A00A20] px-8 sm:px-12 py-14 sm:py-16">
            <span className="text-[11px] uppercase tracking-[2px] text-white/70">
              Free Session Includes
            </span>
            <ul className="mt-6 space-y-3 text-sm sm:text-base text-white">
              {[
                "Business Growth Strategy",
                "Funding & Legal Guidance",
                "Digital Growth Assessment",
                "Pricing Recommendation",
              ].map((line) => (
                <li key={line} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-white" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-md bg-white py-3.5 text-sm sm:text-base font-bold uppercase tracking-[1px] text-[#A00A20] transition hover:bg-[#012D0E] hover:text-white">
                Schedule Free Call
              </button>
              <button className="flex-1 rounded-md border-2 border-white py-3.5 text-sm sm:text-base font-bold uppercase tracking-[1px] text-white transition hover:bg-white hover:text-[#A00A20]">
                Get Custom Quote
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}