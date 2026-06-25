"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

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
      initial={{ opacity: 0, y: 80, rotateX: 15, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: "1400px" }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        whileHover={{ y: -14, scale: plan.featured ? 1.06 : 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] p-5 backdrop-blur-xl ${
          plan.featured ? "z-10" : "z-0"
        }`}
      >
        {/* animated conic-gradient rotating border */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[22px] opacity-70"
          style={{
            background: `conic-gradient(from 0deg, ${accent}55, transparent 25%, transparent 50%, ${accent}55 75%, ${accent}55)`,
            padding: 1,
            animation: "spin-border 8s linear infinite",
          }}
        >
          <div className="h-full w-full rounded-[21px] bg-white" />
        </div>

        {/* glass body */}
        <div
          className="relative flex h-full flex-col rounded-[21px] p-5"
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
          {/* tiny floating particles */}
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

          {/* BADGE */}
          {plan.badge && (
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#A00A20] px-3.5 py-[4px] text-[9.5px] font-semibold text-white tracking-wide whitespace-nowrap shadow-[0_6px_20px_rgba(160,10,32,0.4)]"
            >
              {plan.badge}
            </motion.div>
          )}

          <div style={{ transform: "translateZ(20px)" }}>
            <span className="inline-block text-[9.5px] font-semibold uppercase tracking-[1.8px] text-[#A00A20]/70">
              {plan.duration}
            </span>

            <h3 className="mt-1.5 text-[16px] font-bold tracking-[-0.1px] leading-tight text-[#0F1B0F] min-h-[20px]">
              {plan.name}
            </h3>

            <div className="mt-3 flex items-baseline gap-1">
              <span className={`text-[26px] font-extrabold tracking-[-0.8px] leading-none ${plan.priceColor}`}>
                {plan.price}
              </span>
            </div>

            <p className="mt-2.5 text-[11px] leading-[1.55] text-black min-h-[48px]">
              {plan.desc}
            </p>

            {/* premium shiny button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`relative mt-4 w-full overflow-hidden rounded-[8px] py-2 text-[11.5px] font-semibold tracking-wide transition-all duration-300 ${plan.ctaStyle}`}
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

          {/* FEATURES */}
          <div className="relative mt-5 flex-1 border-t border-black/[0.07] pt-4" style={{ transform: "translateZ(10px)" }}>
            <p className="text-[10px] font-bold uppercase tracking-[1px] text-black/35 mb-2.5">
              What You'll Get
            </p>
            <div className="flex flex-col gap-2">
              {plan.features.map((f: string, j: number) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -6, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.07 * j, duration: 0.4, ease: "easeOut" }}
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
                  <span className="text-[11px] leading-[1.4] text-black/60 transition-colors duration-300 group-hover:text-black/80">
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

export default function HomePage() {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subRef = useRef(null);

  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client6.png",
    "/clients/client7.png",
  ];

  const schemes = [
    "BIRAC",
    "MEITY TIDE",
    "80-IAC",
    "CGTMSE",
    "Make in India",
    "SISFS",
    "PMEGP",
    "Stand-Up India",
    "MSME Schemes",
    "DPIIT Recognized",
    "SIDBI",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: "power4.inOut" });

    gsap.fromTo(
      titleRef.current,
      { y: 220, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 2, delay: 0.2, ease: "power4.out" }
    );

    gsap.fromTo(
      subRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 1, ease: "power4.out" }
    );

    gsap.to(".hero-logo img", {
      scale: 0.22,
      y: -260,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=600",
        scrub: true,
      },
    });
  }, []);

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
      cardBg: "bg-[#A00A20]/5",
      cardBorder: "border-[#A00A20]/15",
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
      cardBg: "bg-[#012D0E]/5",
      cardBorder: "border-[#012D0E]/15",
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
      cardBg: "bg-gradient-to-br from-[#A00A20]/8 via-[#A00A20]/5 to-[#012D0E]/8",
      cardBorder: "border-[#A00A20]/25",
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
      cardBg: "bg-[#A00A20]/5",
      cardBorder: "border-[#A00A20]/15",
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
    "End-to-End Guidance Until Application Submission."
  ],
  cta: "Get Started",
  ctaStyle: "bg-[#012D0E] text-white hover:bg-[#A00A20]",
  cardBg: "bg-[#012D0E]/5",
  cardBorder: "border-[#012D0E]/15",
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
      cardBg: "bg-[#012D0E]/5",
      cardBorder: "border-[#012D0E]/15",
      featured: false,
    },
  ];

  return (
    <div className="relative overflow-x-hidden bg-white text-black">
      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div className="absolute left-[-180px] top-[5%] h-[450px] w-[450px] rounded-full bg-[#A00A20]/10 blur-[140px]" />
      <div className="absolute right-[-180px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#012D0E]/10 blur-[140px]" />

      {/* HERO WRAPPER */}
      <section className="hero-wrapper relative h-[100vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute left-0 top-[61%] w-full -translate-y-1/2 z-0">
            <div ref={lineRef} className="h-[2px] w-full bg-black origin-left" />
          </div>
          <div ref={titleRef} className="hero-logo relative z-20 flex items-center justify-center">
            <img
              src="/arvess.svg"
              alt="logo"
              className="w-[220px] sm:w-[400px] md:w-[600px] lg:w-[700px] object-contain"
            />
          </div>
          <p
            ref={subRef}
            className="absolute top-[64%] max-w-[90vw] md:max-w-[700px] text-[11px] sm:text-[13px] md:text-[16px] uppercase tracking-[2px] md:tracking-[3px] text-black px-4"
          >
            Where Strategy Meets Execution For Sustainable Growth
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative overflow-hidden bg-white py-0 md:py-0">
        <div className="absolute left-[-250px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#A00A20]/10 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#012D0E]/10 blur-[170px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[60px] md:text-[240px] font-black uppercase tracking-[-4px] md:tracking-[-12px] text-black/[0.03]">
            ARVESS
          </h1>
        </div>

        <div className="relative overflow-hidden py-6">
          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            className="flex w-max whitespace-nowrap gap-5 pr-5"
          >
            {[...schemes, ...schemes].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06, y: -4 }}
                className="group flex items-center gap-3 px-7 md:px-10 py-4 rounded-[18px] border border-[#A00A20]/10 bg-white text-[#012D0E] font-bold text-sm md:text-lg tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#A00A20]/40 hover:shadow-[0_15px_40px_rgba(160,10,32,0.15)] transition-all duration-300"
              >
                <span className="text-[#A00A20] text-sm">◆</span>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <div data-aos="fade-right" data-aos-duration="1400" className="lg:sticky lg:top-32">
              <div className="mb-7 flex items-center gap-4">
                <div className="h-[2px] w-[40px] md:w-[60px] bg-[#012D0E]" />
                <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">
                  About Arvess
                </span>
              </div>
              <h2 className="text-[42px] sm:text-[60px] md:text-[100px] font-semibold leading-[0.9] tracking-[-3px] md:tracking-[-5px] text-[#012D0E]">
                We Build
                <span className="block text-[#A00A20]">Powerful</span>
                <span className="block text-[#012D0E]">Business</span>
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { num: "01", bg: "bg-[#A00A20]/25", barColor: "bg-[#A00A20]", title: "Strategic Foundation", body: "Arvess is a leading business consulting, startup advisory, and growth solutions firm helping entrepreneurs, startups, SMEs, and enterprises build strong, scalable, and future-ready businesses. From company registration, government certifications, legal compliance, and financial structuring to strategic planning and business expansion, we create the foundation required for sustainable growth. Our mission is to simplify complex business processes and empower founders to focus on innovation, profitability, and long-term success" },
                { num: "02", bg: "bg-white", barColor: "bg-[#012D0E]", title: "Execution Excellence", body: "At Arvess, strategy means nothing without execution. We work as an extension of your team to implement high-impact solutions that drive measurable business outcomes. Our expertise spans startup consulting, compliance management, operational optimization, digital transformation, business process outsourcing, and growth acceleration. By combining industry expertise with practical execution, we help businesses increase efficiency, strengthen credibility, reduce operational challenges, and achieve faster market growth." },
                { num: "03", bg: "bg-[#012D0E]/30", barColor: "bg-black", title: "Growth Acceleration", body: "Growth requires more than ambition it demands the right systems, certifications, partnerships, and market positioning. Arvess helps businesses unlock new opportunities through Startup India recognition, DPIIT registration, ISO certifications, government schemes, business development strategies, digital presence enhancement, and expansion planning. Our growth-focused approach ensures organizations remain competitive, investment-ready, and positioned for long-term success in an evolving marketplace." },
                { num: "04", bg: "bg-white", barColor: "bg-[#012D0E]", title: "Trusted Business Partner", body: "Arvess is committed to becoming the most trusted business support partner for ambitious entrepreneurs and organizations. We believe in delivering transparent guidance, professional expertise, and result-driven solutions tailored to each client's unique objectives. Whether you are launching a startup, scaling an established company, or seeking operational support, Arvess provides end-to-end consulting and outsourcing services designed to help businesses grow smarter, faster, and stronger." },
              ].map((card) => (
                <div key={card.num} data-aos="fade-up" data-aos-duration="1200" className={`group relative overflow-hidden rounded-[24px] md:rounded-[30px] border border-black ${card.bg} p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2`}>
                  <span className="absolute right-6 top-4 text-[40px] md:text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">{card.num}</span>
                  <h3 className="text-[20px] md:text-[30px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black pr-12">{card.title}</h3>
                  <div className={`mt-4 h-[2px] w-[70px] md:w-[90px] ${card.barColor} transition-all duration-700 group-hover:w-[120px]`} />
                  <p className="mt-5 text-[13px] md:text-[15px] leading-[1.9] text-black/60 transition-all duration-700 group-hover:text-black">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative overflow-hidden bg-white py-12 md:py-15">
        <div className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-20 text-center">
            <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">Our Services</span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[100px] font-semibold leading-[0.9] tracking-[-3px] md:tracking-[-5px] text-[#012D0E]">
              What We<span className="text-[#A00A20]"> Deliver</span>
            </h2>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {[
              { num: "01", title: "Business Consulting", bg: "bg-white shadow-[0_20px_80px_rgba(0,0,0,0.05)]", body: "Strategic business consulting services designed to help startups, SMEs, and enterprises build strong foundations, improve operational efficiency, ensure regulatory compliance, and achieve sustainable business growth through expert advisory and execution support." },
              { num: "02", title: "Compliance & Certifications", bg: "bg-[#A00A20]/30", body: "Comprehensive support for Startup India Registration, DPIIT Recognition, ISO Certification, NPOP Certification, business registrations, legal documentation, and government compliance services that enhance credibility and unlock growth opportunities." },
              { num: "03", title: "Digital Transformation", bg: "bg-[#012D0E]/30", body: "End-to-end digital transformation solutions including branding, website development, SEO, digital marketing, business automation, and online growth strategies that help businesses strengthen their market presence and generate measurable results." },
              { num: "04", title: "Growth & Expansion", bg: "bg-white shadow-[0_20px_80px_rgba(0,0,0,0.05)]", body: "Business growth consulting focused on funding assistance, government grant schemes, investor readiness, market expansion, strategic partnerships, and scalable growth frameworks that drive long-term success and competitive advantage." },
            ].map((s) => (
              <div key={s.num} className={`group rounded-[28px] md:rounded-[40px] border border-black ${s.bg} p-7 md:p-10 transition-all duration-700 hover:-translate-y-2`}>
                <h3 className="text-[24px] md:text-[34px] font-semibold">{s.num}. {s.title}</h3>
                <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[130px]" />
                <p className="mt-5 text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-2 overflow-hidden">
        <div className="text-center mb-12">
          <span className="text-[14px] md:text-[18px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">Our Clients</span>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-6 md:gap-10"
          >
            {[...clients, ...clients, ...clients].map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-[80px] w-[140px] md:h-[100px] md:w-[180px] rounded-[16px] md:rounded-[20px] border border-black/10 bg-white shadow-sm hover:shadow-lg transition-all">
                <Image src={logo} alt="Client Logo" width={90} height={50} className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE ARVESS */}
      <section className="relative overflow-hidden bg-white py-16 md:py-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[60px] md:text-[240px] font-black uppercase tracking-[-4px] md:tracking-[-12px] text-black/[0.03]">ARVESS</h1>
        </div>
        <div className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-24 text-center">
            <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">Why Choose Us</span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[90px] font-semibold leading-[0.9] tracking-[-3px] md:tracking-[-5px] text-[#012D0E]">
              Why<span className="text-[#A00A20]"> Arvess</span>
            </h2>
          </div>
          <div className="space-y-5 md:space-y-8">
            {[
              { num: "01", title: "Strategic Expertise", bg: "bg-[#A00A20]/30", body: "Industry-focused business consulting backed by practical insights, regulatory knowledge, and growth-driven strategies." },
              { num: "02", title: "Proven Execution", bg: "bg-white", body: "A hands-on approach that transforms business plans into real-world results through structured implementation and continuous support." },
              { num: "03", title: "Scalable Growth", bg: "bg-[#012D0E]/30", body: "Solutions designed to improve credibility, attract opportunities, strengthen operations, and accelerate long-term business growth." },
              { num: "04", title: "Future-Ready Systems", bg: "bg-white", body: "We create future-ready business ecosystems by strengthening compliance, operations, technology, and growth frameworks that support long-term scalability and competitive advantage." },
            ].map((w) => (
              <div key={w.num} className={`group flex flex-col md:flex-row md:items-center justify-between rounded-[28px] md:rounded-[40px] border border-black ${w.bg} p-6 md:p-12 transition-all duration-700 hover:-translate-y-2`}>
                <div>
                  <span className="text-black text-xs tracking-[4px] uppercase">{w.num}</span>
                  <h3 className="mt-2 text-[26px] md:text-[48px] font-semibold tracking-[-1px] md:tracking-[-2px]">{w.title}</h3>
                </div>
                <p className="mt-4 md:mt-0 max-w-full md:max-w-[650px] text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="relative overflow-hidden bg-white py-16 md:py-10">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-24">
            <span className="text-[14px] md:text-[20px] uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20] font-bold">Core Expertise</span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[90px] font-bold leading-[0.9] tracking-[-3px] md:tracking-[-6px] text-[#012D0E]">
              Our<span className="text-[#A00A20]"> Specializations</span>
            </h2>
          </div>
          <div className="space-y-8 md:space-y-10">
            {[
              { num: "01", numColor: "text-[#012D0E]", titleColor: "text-[#A00A20]", title: "GRANTS", border: "border-b border-black/10", body: "Helping startups and businesses secure government grants, startup incentives, subsidy programs, DPIIT benefits, and funding opportunities that fuel innovation and sustainable growth." },
              { num: "02", numColor: "text-[#A00A20]", titleColor: "text-[#012D0E]", title: "INVESTORS", border: "border-b border-black/10", body: "Providing investor readiness, fundraising advisory, pitch support, financial structuring, and capital access solutions that help businesses attract investment and scale successfully." },
              { num: "03", numColor: "text-[#012D0E]", titleColor: "text-[#A00A20]", title: "DEPTH", border: "", body: "Combining business strategy, regulatory expertise, operational excellence, and market intelligence to deliver long-term growth, competitive advantage, and measurable business outcomes." },
            ].map((e) => (
              <div key={e.num} className={`group flex flex-col md:flex-row md:items-center justify-between ${e.border} pb-8 md:pb-10 gap-4`}>
                <div>
                  <span className={`text-[13px] tracking-[5px] font-bold ${e.numColor}`}>{e.num}</span>
                  <h3 className={`mt-2 text-[40px] sm:text-[60px] md:text-[80px] font-black tracking-[-2px] md:tracking-[-4px] ${e.titleColor}`}>{e.title}</h3>
                </div>
                <p className="max-w-full md:max-w-[500px] text-black leading-[2] text-[14px] md:text-base">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative overflow-hidden bg-white py-16 md:py-10">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-24">
            <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">Our Process</span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[90px] font-bold text-[#012D0E] tracking-[-3px] md:tracking-[-6px] leading-[0.9]">
              <span className="text-[#A00A20]">The </span>Arvess<span className="text-[#A00A20]"> Method</span>
            </h2>
          </div>
          {[
            { num: "01", title: "Discover", color: "text-[#A00A20]/15", headColor: "text-[#012D0E]", text: "We begin by understanding your business goals, challenges, market position, and growth objectives to identify the right opportunities and strategic direction." },
            { num: "02", title: "Strategize", color: "text-[#012D0E]/15", headColor: "text-[#A00A20]", text: "Our experts develop tailored business strategies, compliance roadmaps, funding plans, and growth frameworks aligned with your long-term vision" },
            { num: "03", title: "Execute", color: "text-[#A00A20]/15", headColor: "text-[#012D0E]", text: "We implement solutions with precision, managing registrations, certifications, compliance requirements, digital initiatives, and business growth activities." },
            { num: "04", title: "Scale", color: "text-[#012D0E]/15", headColor: "text-[#A00A20]", text: "Through continuous support, optimization, and expansion planning, we help businesses improve performance, unlock opportunities, and achieve sustainable growth." },
          ].map((step, i) => (
            <div key={i} className={`grid lg:grid-cols-[0.3fr_1fr] items-start gap-4 md:gap-10 border-t border-black/10 py-10 md:py-16 ${i === 3 ? "border-b" : ""}`}>
              <h1 className={`text-[70px] md:text-[180px] font-black leading-none ${step.color}`}>{step.num}</h1>
              <div>
                <h3 className={`text-[36px] md:text-[70px] ${step.headColor} font-bold tracking-[-2px] md:tracking-[-3px]`}>{step.title}</h3>
                <p className="mt-4 md:mt-6 max-w-[700px] text-black/60 leading-[2] text-[14px] md:text-base">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────── */}
      {/* PRICING SECTION — premium glass + 3D + particles            */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        {/* animated ambient glows */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[-200px] top-0 h-[500px] w-[500px] rounded-full bg-[#A00A20]/8 blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#012D0E]/8 blur-[160px]"
        />
        {/* tiny ambient particles drifting across section */}
        {[...Array(10)].map((_, p) => (
          <span
            key={p}
            className="pointer-events-none absolute rounded-full"
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

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-14 md:mb-20"
          >
            <span className="text-[13px] md:text-[16px] font-bold uppercase tracking-[5px] text-[#A00A20]">
              Pricing Plans
            </span>
            <h2 className="mt-3 text-[38px] sm:text-[54px] md:text-[80px] text-[#012D0E] font-bold tracking-[-2px] md:tracking-[-5px] leading-[0.95]">
              Solutions For
              <span className="text-[#A00A20]"> Every Stage</span>
            </h2>
            <p className="mt-4 text-[14px] md:text-[16px] text-black/50 max-w-[500px] leading-relaxed">
              Transparent, fixed-price packages  no hidden fees, no lock-ins.
            </p>
          </motion.div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 items-stretch max-w-[1300px] mx-auto" style={{ perspective: "1800px" }}>
            {pricingPlans.map((plan, i) => (
              <PricingCard key={i} plan={plan} index={i} />
            ))}
          </div>

          {/* BOTTOM NOTE */}
          <p className="mt-10 text-center text-[13px] text-black/35 tracking-wide">
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

      <Footer />
    </div>
  );
}