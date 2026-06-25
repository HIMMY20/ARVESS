"use client";

import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Globe,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Building2,
  Send,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────── */
/*  Types                                                       */
/* ─────────────────────────────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

/* ─────────────────────────────────────────────────────────── */
/*  Animated background blobs                                   */
/* ─────────────────────────────────────────────────────────── */
function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-white" />

      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 animate-blob-1"
        style={{ background: "radial-gradient(circle, #012D0E 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full opacity-15 animate-blob-2"
        style={{ background: "radial-gradient(circle, #A00A20 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-12 animate-blob-3"
        style={{ background: "radial-gradient(circle, #01831D 0%, transparent 70%)", filter: "blur(90px)" }}
      />
      <div
        className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full opacity-10 animate-blob-1"
        style={{ background: "radial-gradient(circle, #A00A20 0%, transparent 70%)", filter: "blur(80px)", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #012D0E 0%, #A00A20 50%, transparent 70%)", filter: "blur(120px)" }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Glass Card                                                  */
/* ─────────────────────────────────────────────────────────── */
function GlassCard({
  children,
  className = "",
  glow = "none",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  glow?: "green" | "red" | "none";
  style?: React.CSSProperties;
}) {
  const glowStyle =
    glow === "green"
      ? "0 0 40px rgba(1,131,29,0.18), 0 0 80px rgba(1,45,14,0.12)"
      : glow === "red"
      ? "0 0 40px rgba(160,10,32,0.18), 0 0 80px rgba(160,10,32,0.1)"
      : "0 8px 32px rgba(0,0,0,0.4)";

  return (
    <div
      className={`relative rounded-[28px] border border-white/8 ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: glowStyle,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Animated counter                                            */
/* ─────────────────────────────────────────────────────────── */
function Counter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(end / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else setCount(start);
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl lg:text-4xl font-black text-white">{count}+</p>
      <p className="mt-1 text-[11px] text-white/45 uppercase tracking-[3px]">{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Main Component                                              */
/* ─────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: FieldErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSending(true);

    const subject = form.service ? `Service Enquiry: ${form.service}` : "General Enquiry";
    const text = [
      "Hello Arvess Services,",
      "",
      "New Contact Form Submission",
      "──────────────────────────",
      `Name:    ${form.name}`,
      `Email:   ${form.email}`,
      `Phone:   ${form.phone}`,
      form.company ? `Company: ${form.company}` : null,
      `Subject: ${subject}`,
      "",
      `Message:\n${form.message}`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.open(`https://wa.me/919662347619?text=${encodeURIComponent(text)}`, "_blank");
    }, 800);
  };

  const inputBase =
    "w-full rounded-2xl px-5 py-4 text-white placeholder-white/30 outline-none transition-all duration-300 text-sm";
  const inputStyle = (field: string, hasError?: boolean) =>
    `${inputBase} ${
      hasError
        ? "border-2 border-[#A00A20] bg-white/5 shadow-[0_0_20px_rgba(160,10,32,0.2)]"
        : focusedField === field
        ? "border-2 border-[#01831D] bg-white/8 shadow-[0_0_20px_rgba(1,131,29,0.2)]"
        : "border border-white/10 bg-white/5 hover:border-white/20"
    }`;

  /* Contact details — shown on the gradient "Get In Touch" panel */
  const contactDetails = [
    { icon: MapPin, label: "Office", value: "Office No. C-821, Siddhi Vinayak Tower, Makarba, Ahmedabad – 380051" },
    { icon: Mail, label: "Email", value: "contact@arvessservices.com" },
    { icon: Phone, label: "Phone", value: "+91 96623 47619" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 96623 47619" },
    { icon: Globe, label: "Website", value: "www.arvessservices.com" },
    { icon: Clock, label: "Hours", value: "Mon – Sat · 09:00 AM – 07:00 PM" },
  ];

  const services = [
    "Grant Funding",
    "Equity Investment",
    "Debt Financing",
    "Business Formation",
    "IP Protection",
    "Legal & Compliance",
    "Digital Growth",
    "Investor Relations",
  ];

  const whyUs = [
    "Business & Startup Consulting",
    "Funding & Investor Support",
    "Company Registration & Legal Advisory",
    "Digital Growth & Marketing Solutions",
    "Dedicated Expert Assistance",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Outfit', sans-serif; }
        html, body { background-color: #020a04 !important; color: white; }

        @keyframes blob1 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(40px,-30px) scale(1.05); } 66% { transform: translate(-20px,20px) scale(0.95); } }
        @keyframes blob2 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(-50px,30px) scale(1.08); } 66% { transform: translate(30px,-40px) scale(0.92); } }
        @keyframes blob3 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(20px,50px) scale(1.03); } 66% { transform: translate(-40px,-20px) scale(0.97); } }
        .animate-blob-1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob-2 { animation: blob2 15s ease-in-out infinite; }
        .animate-blob-3 { animation: blob3 18s ease-in-out infinite; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-delay-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-delay-2 { animation: fadeUp 0.7s 0.2s ease both; }
        .fade-up-delay-3 { animation: fadeUp 0.7s 0.3s ease both; }

        .btn-primary {
          background: linear-gradient(135deg, #012D0E 0%, #01831D 50%, #A00A20 100%);
          background-size: 200% 200%;
          transition: all 0.4s ease;
        }
        .btn-primary:hover {
          background-position: right center;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 30px rgba(1,131,29,0.4), 0 0 60px rgba(160,10,32,0.2);
        }

        .tricolor-panel {
          background: linear-gradient(155deg, #012D0E 0%, #01831D 42%, #064d1d 58%, #A00A20 100%);
          background-size: 160% 160%;
        }

        .input-select option { background: #0a1a0b; color: white; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020a04; }
        ::-webkit-scrollbar-thumb { background: #012D0E; border-radius: 3px; }
      `}</style>

      <div className="relative min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: "#020a04" }}>
        <BackgroundBlobs />

        {/* ── PAGE HEADER ──────────────────────────────────── */}
        <section className="relative z-10 pt-28 pb-10 px-6 text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[5px] fade-up"
            style={{ background: "rgba(160,10,32,0.12)", border: "1px solid rgba(160,10,32,0.3)", color: "#ff4060" }}
          >
            <Sparkles size={12} />
            Contact Arvess
          </span>

          <h1
            className="font-display mt-7 text-[44px] lg:text-[68px] font-black tracking-[-2px] leading-[1.05] fade-up-delay-1"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #ffffff 45%, #01d44f 75%, #A00A20 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact Us
          </h1>

          <div
            className="mx-auto mt-5 h-[4px] w-20 rounded-full fade-up-delay-1"
            style={{ background: "linear-gradient(90deg, #01831D, #A00A20)" }}
          />

          <p className="mx-auto mt-6 max-w-[600px] text-white/55 leading-relaxed fade-up-delay-2">
            Not just messages — real discussions, expert guidance, and strategic business
            solutions. Whether you're seeking funding, legal advisory, digital transformation,
            or startup consulting, our team is ready to help you move forward with confidence.
          </p>
        </section>

        {/* ── GET IN TOUCH  +  FORM ───────────────────────────── */}
        <section id="contact-form" className="relative z-10 py-10 px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 items-stretch">

              {/* LEFT — Get In Touch (gradient panel, mirrors reference layout) */}
              <GlassCard className="tricolor-panel overflow-hidden p-10 lg:p-12 flex flex-col fade-up-delay-1" glow="green">
                <p className="text-[11px] uppercase tracking-[5px] text-white/70">Reach Us Directly</p>
                <h2 className="font-display mt-4 text-[36px] lg:text-[42px] font-black text-white leading-[1.05]">
                  Get In Touch
                </h2>
                <div className="mt-4 h-[3px] w-14 rounded-full bg-white/70" />

                <div className="mt-9 space-y-6 flex-1">
                  {contactDetails.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.25)" }}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[3px] text-white/55 mb-1">{label}</p>
                        <p className="text-sm font-medium text-white/95 leading-snug">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/919662347619"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-[#012D0E] w-full transition-transform duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.95)" }}
                >
                  <MessageCircle size={16} />
                  Chat With Us On WhatsApp
                </a>
              </GlassCard>

              {/* RIGHT — Form */}
              <div className="fade-up-delay-2">
                {sent ? (
                  <GlassCard className="p-12 h-full flex flex-col items-center justify-center text-center" glow="green">
                    <div className="text-6xl mb-6">✅</div>
                    <h3 className="font-display text-3xl font-bold text-white mb-3">WhatsApp Opened!</h3>
                    <p className="text-white/55">
                      Your details have been pre-filled. Send the message to connect with our team instantly.
                    </p>
                    <button
                      className="mt-8 btn-primary rounded-full px-8 py-4 font-semibold text-white"
                      onClick={() => {
                        setSent(false);
                        setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
                      }}
                    >
                      Send Another
                    </button>
                  </GlassCard>
                ) : (
                  <GlassCard className="p-8 lg:p-10 h-full flex flex-col" glow="red">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">Send Us A Message</h3>
                    <p className="text-white/45 text-sm mb-6">Fill in your details and we'll get back to you fast.</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name *"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={inputStyle("name", !!errors.name)}
                        />
                        {errors.name && <p className="mt-1 text-xs text-[#ff4060]">{errors.name}</p>}
                      </div>

                      <div>
                        <input
                          type="email"
                          placeholder="Your Email *"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={inputStyle("email", !!errors.email)}
                        />
                        {errors.email && <p className="mt-1 text-xs text-[#ff4060]">{errors.email}</p>}
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Phone Number *"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={inputStyle("phone", !!errors.phone)}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-[#ff4060]">{errors.phone}</p>}
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={inputStyle("company")}
                        />
                      </div>
                    </div>

                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputStyle("service")} mb-4 input-select`}
                    >
                      <option value="">Select Service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>

                    <div className="mb-2 flex-1">
                      <textarea
                        rows={5}
                        placeholder="Your Message *"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputStyle("message", !!errors.message)} resize-none h-full`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-[#ff4060]">{errors.message}</p>}
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={sending}
                      className="mt-6 w-full btn-primary rounded-full py-5 font-semibold text-white flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Opening WhatsApp...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="mt-4 text-center text-xs text-white/30">
                      Powered by Arvess Services · No data stored, opens WhatsApp directly.
                    </p>
                  </GlassCard>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS + WHY US + SERVICES ─────────────────────── */}
        <section className="relative z-10 py-16 px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto">
            <GlassCard className="p-8 lg:p-10">
              <div className="grid md:grid-cols-3 gap-10">

                {/* Stats */}
                <div className="flex justify-around md:justify-start md:gap-10 md:flex-col md:items-start">
                  <div className="grid grid-cols-3 gap-6 w-full">
                    <Counter end={500} label="Clients" />
                    <Counter end={12} label="Services" />
                    <Counter end={8} label="Years" />
                  </div>
                </div>

                {/* Why Us */}
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Building2 size={18} style={{ color: "#01831D" }} />
                    Why Contact Arvess?
                  </h3>
                  <div className="space-y-2.5">
                    {whyUs.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle size={15} style={{ color: "#01831D", flexShrink: 0, marginTop: 2 }} />
                        <span className="text-white/65 text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-4">What We Help With</h3>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s, i) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-3.5 py-2 rounded-full"
                        style={{
                          background: i % 2 === 0 ? "rgba(1,131,29,0.14)" : "rgba(160,10,32,0.14)",
                          border: `1px solid ${i % 2 === 0 ? "rgba(1,131,29,0.35)" : "rgba(160,10,32,0.35)"}`,
                          color: i % 2 === 0 ? "#3ee876" : "#ff6a80",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ── MAP ──────────────────────────────────────────── */}
        <section className="relative z-10 py-4 pb-20 px-6 lg:px-12">
          <div className="max-w-[1200px] mx-auto">
            <GlassCard className="overflow-hidden" style={{ height: "380px" }}>
              <iframe
                title="Arvess Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8059329788675!2d72.49663037476941!3d22.99416276738878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ac2f8623323%3A0xc84338dfb6bdb047!2sSIDDHI%20VINAYAK%20TOWER%2C%20Kataria%20Automobiles%20Rd%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20380051!5e0!3m2!1sen!2sin!4v1775811086224!5m2!1sen!2sin"
                loading="lazy"
                className="w-full h-full border-0 rounded-[28px]"
                style={{ filter: "invert(90%) hue-rotate(170deg) saturate(0.4) brightness(0.7)" }}
              />
            </GlassCard>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────── */}
        <section className="relative z-10 py-20 px-6 text-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(160,10,32,0.07) 0%, transparent 70%)" }}
          />
          <div className="max-w-[800px] mx-auto relative">
            <h2 className="font-display text-[34px] lg:text-[48px] font-black tracking-[-1px] leading-[1.1] text-white">
              Ready To Build <span style={{ color: "#01d44f" }}>Something Great?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[600px] text-white/50 leading-relaxed">
              Every successful business starts with a conversation. Arvess is here to help you
              move forward with confidence.
            </p>
            <button
              className="mt-9 btn-primary rounded-full px-10 py-4 font-semibold text-white flex items-center gap-3 mx-auto"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book A Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}