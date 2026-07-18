"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Globe,
  Clock,
  ArrowRight,
  CheckCircle,
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
      <p className="text-3xl lg:text-4xl font-black text-[#012D0E]">{count}+</p>
      <p className="mt-1 text-[11px] text-black/45 uppercase tracking-[3px]">{label}</p>
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
    "w-full rounded-2xl px-5 py-4 text-[#012D0E] placeholder-black/35 outline-none transition-all duration-300 text-sm bg-[#012D0E]/[0.03]";
  const inputStyle = (field: string, hasError?: boolean) =>
    `${inputBase} ${
      hasError
        ? "border-2 border-[#A00A20] bg-[#A00A20]/[0.04]"
        : focusedField === field
        ? "border-2 border-[#012D0E] bg-white shadow-[0_4px_20px_rgba(1,45,14,0.08)]"
        : "border-2 border-transparent hover:bg-[#012D0E]/[0.05]"
    }`;

  /* Contact details */
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
    <main className="bg-white">
      <Navbar />

      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-44 pb-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#A00A20]/5 blur-[160px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-[900px] text-center"
        >
          <span className="inline-flex rounded-full bg-[#A00A20]/10 px-6 py-3 text-[13px] font-semibold uppercase tracking-[4px] text-[#A00A20]">
            Contact Arvess
          </span>

          <h1 className="mt-8 text-[44px] md:text-[76px] font-black leading-[0.98] tracking-[-3px] text-[#012D0E]">
            Let's Talk Business.
          </h1>

          <p className="mx-auto mt-7 max-w-[640px] text-lg leading-relaxed text-black/60">
            Not just messages — real discussions, expert guidance, and
            strategic business solutions. Whether you're seeking funding,
            legal advisory, digital transformation, or startup consulting,
            our team is ready to help.
          </p>
        </motion.div>
      </section>

      {/* ── GET IN TOUCH  +  FORM ───────────────────────────── */}
      <section id="contact-form" className="relative px-6 py-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.25fr] lg:items-stretch">

            {/* LEFT — Get In Touch, soft gradient panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-[32px] bg-gradient-to-br from-[#012D0E] to-[#01180a] p-9 sm:p-11 shadow-[0_25px_60px_-15px_rgba(1,45,14,0.4)]"
            >
              <p className="text-[11px] uppercase tracking-[3px] text-white/50">Reach Us Directly</p>
              <h2 className="mt-3 text-[32px] sm:text-[38px] font-black text-white leading-[1.05]">
                Get In Touch
              </h2>
              <div className="mt-4 h-[3px] w-14 rounded-full bg-[#A00A20]" />

              <div className="mt-9 flex-1 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] uppercase tracking-[3px] text-white/45">{label}</p>
                      <p className="text-sm font-medium leading-snug text-white/95">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919662347619"
                target="_blank"
                rel="noreferrer"
                className="mt-9 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#012D0E] transition-transform duration-300 hover:scale-[1.02]"
              >
                <MessageCircle size={16} />
                Chat With Us On WhatsApp
              </a>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center rounded-[32px] border border-black/5 bg-white p-12 text-center shadow-[0_10px_50px_-15px_rgba(0,0,0,0.1)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#012D0E]/10">
                    <CheckCircle size={30} className="text-[#012D0E]" />
                  </div>
                  <h3 className="mt-6 text-2xl sm:text-3xl font-black text-[#012D0E]">
                    WhatsApp Opened!
                  </h3>
                  <p className="mt-3 max-w-[420px] text-black/60">
                    Your details have been pre-filled. Send the message to
                    connect with our team instantly.
                  </p>
                  <button
                    className="mt-8 rounded-full bg-[#A00A20] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#012D0E]"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <div className="flex h-full flex-col rounded-[32px] border border-black/5 bg-white p-7 sm:p-9 lg:p-10 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.1)]">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#012D0E]">
                        Send Us A Message
                      </h3>
                      <p className="mt-1 text-sm text-black/50">
                        Fill in your details and we'll get back to you fast.
                      </p>
                    </div>
                    <span className="hidden shrink-0 rounded-full bg-[#012D0E]/5 px-3.5 py-2 text-[11px] font-semibold text-[#012D0E]/60 sm:block">
                      ~2 min
                    </span>
                  </div>

                  <div className="mb-4 grid gap-4 md:grid-cols-2">
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
                      {errors.name && <p className="mt-1 text-xs text-[#A00A20]">{errors.name}</p>}
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
                      {errors.email && <p className="mt-1 text-xs text-[#A00A20]">{errors.email}</p>}
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
                      {errors.phone && <p className="mt-1 text-xs text-[#A00A20]">{errors.phone}</p>}
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

                  <div className="mb-5">
                    <p className="mb-2.5 text-xs font-medium text-black/50">
                      What do you need help with?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => {
                        const active = form.service === s;
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setForm({ ...form, service: active ? "" : s })}
                            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                              active
                                ? "bg-[#012D0E] text-white"
                                : "bg-[#012D0E]/[0.05] text-black/60 hover:bg-[#012D0E]/10"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-2 flex-1">
                    <textarea
                      rows={5}
                      placeholder="Your Message *"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputStyle("message", !!errors.message)} h-full resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-[#A00A20]">{errors.message}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#A00A20] py-4.5 text-sm font-semibold text-white transition hover:bg-[#012D0E] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Opening WhatsApp...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-xs text-black/35">
                    Powered by Arvess Services · No data stored, opens WhatsApp directly.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS + WHY US + SERVICES ─────────────────────── */}
      <section className="relative px-6 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-[1300px] rounded-[32px] border border-black/5 bg-[#012D0E]/[0.02] p-8 sm:p-10"
        >
          <div className="grid gap-10 md:grid-cols-3">
            {/* Stats */}
            <div className="flex items-center justify-center border-b border-black/5 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-8">
              <div className="grid w-full grid-cols-3 gap-6">
                <Counter end={500} label="Clients" />
                <Counter end={12} label="Services" />
                <Counter end={8} label="Years" />
              </div>
            </div>

            {/* Why Us */}
            <div className="border-b border-black/5 pb-8 md:border-b-0 md:border-r md:pb-0 md:px-8">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#012D0E]">
                <Building2 size={18} className="text-[#A00A20]" />
                Why Contact Arvess?
              </h3>
              <div className="space-y-2.5">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="mt-[2px] shrink-0 text-[#A00A20]" />
                    <span className="text-sm leading-snug text-black/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="md:pl-8">
              <h3 className="mb-4 text-lg font-bold text-[#012D0E]">What We Help With</h3>
              <div className="flex flex-wrap gap-2">
                {services.map((s, i) => (
                  <span
                    key={s}
                    className="rounded-full px-3.5 py-2 text-xs font-medium"
                    style={{
                      background: i % 2 === 0 ? "rgba(1,45,14,0.06)" : "rgba(160,10,32,0.06)",
                      color: i % 2 === 0 ? "#012D0E" : "#A00A20",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── MAP ──────────────────────────────────────────── */}
      <section className="relative px-6 pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-[1300px] overflow-hidden rounded-[32px] border border-black/5 shadow-[0_10px_50px_-15px_rgba(0,0,0,0.1)]"
          style={{ height: "380px" }}
        >
          <iframe
            title="Arvess Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8059329788675!2d72.49663037476941!3d22.99416276738878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ac2f8623323%3A0xc84338dfb6bdb047!2sSIDDHI%20VINAYAK%20TOWER%2C%20Kataria%20Automobiles%20Rd%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20380051!5e0!3m2!1sen!2sin!4v1775811086224!5m2!1sen!2sin"
            loading="lazy"
            className="h-full w-full border-0"
          />
        </motion.div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="px-6 pb-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[40px] bg-[#012D0E] px-10 py-20 text-center"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#A00A20]/20 blur-[150px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-[700px] text-[34px] md:text-[56px] font-black leading-[1.05] tracking-[-2px] text-white">
              Ready To Build Something Great?
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-base md:text-lg text-white/60">
              Every successful business starts with a conversation. Arvess is
              here to help you move forward with confidence.
            </p>
            <button
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#A00A20] px-10 py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book A Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}