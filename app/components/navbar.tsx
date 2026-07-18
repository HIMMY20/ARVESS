"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navRef = useRef(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isMoreActive = [
    "/privacy-policy",
    "/refund-policy",
    "/terms-condition",
    "/contact",
  ].includes(pathname);

  const navLink = (path: string) =>
    `text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold ${
      pathname === path ? "text-[#A00A20]" : "text-black hover:text-[#A00A20]"
    }`;

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const fundingLinks = [
    { href: "/funding/grant-funding", title: "Grant Funding", desc: "Government backend financial support" },
    { href: "/funding/equity-investment", title: "Equity Investment", desc: "Raise capital by offering ownership" },
    { href: "/funding/debt-financing", title: "Debt Financing", desc: "Secure funds without equity dilution" },
  ];

  const legalLinks = [
    { href: "/legal/business-formation", title: "Business Formation", desc: "Company setup & registrations" },
    { href: "/legal/ip-protection", title: "IP Protection", desc: "Trademark, copyright & patents" },
    { href: "/legal/compliance", title: "Legal & Compliance", desc: "Regulatory and legal support" },
  ];

  const moreLinks = [
    { href: "/privacy-policy", title: "Privacy Policy" },
    { href: "/refund-policy", title: "Refund Policy" },
    { href: "/terms-condition", title: "Term & Condition" },
    { href: "/contact", title: "Contact Us" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 z-[999] flex w-full items-center justify-between px-4 md:px-14 py-5"
      >
        {/* LOGO */}
        <img
          src="/arvess.svg"
          alt="logo"
          className="h-[65px] md:h-[95px] object-contain"
        />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 ml-auto mr-6">
          <a href="/" className={navLink("/")}>Home</a>

          {/* FUNDING */}
          <div className="group relative">
            <button className="flex items-center gap-[6px] text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold text-black hover:text-[#A00A20]">
              Funding
              <span className="text-[7px] transition-all duration-300 group-hover:rotate-180">▼</span>
            </button>
            <div className="invisible absolute left-0 top-[145%] z-50 w-[255px] rounded-[22px] border border-black/5 bg-white/95 p-4 opacity-0 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:top-[125%] group-hover:opacity-100">
              <div className="space-y-2">
                {fundingLinks.map((item) => (
                  <a key={item.href} href={item.href}>
                    <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5">
                      <h3 className="text-[14px] font-medium text-[#012D0E]">{item.title}</h3>
                      <p className="mt-[2px] text-[11px] leading-4 text-black">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div className="group relative">
            <button className="flex items-center gap-[6px] text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold text-black hover:text-[#A00A20]">
              Legal
              <span className="text-[7px] transition-all duration-300 group-hover:rotate-180">▼</span>
            </button>
            <div className="invisible absolute left-0 top-[145%] z-50 w-[255px] rounded-[22px] border border-black/5 bg-white/95 p-4 opacity-0 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:top-[125%] group-hover:opacity-100">
              <div className="space-y-2">
                {legalLinks.map((item) => (
                  <a key={item.href} href={item.href}>
                    <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5">
                      <h3 className="text-[14px] font-medium text-[#012D0E]">{item.title}</h3>
                      <p className="mt-[2px] text-[11px] leading-4 text-black">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/digital" className={navLink("/digital")}>Digital</a>
          <a href="/investor" className={navLink("/investor")}>Investor Relation</a>
          <a href="/pricing" className={navLink("/pricing")}>Pricing</a>

          {/* MORE */}
          <div className="group relative">
            <button className={`flex items-center gap-[6px] text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold ${isMoreActive ? "text-[#A00A20]" : "text-black hover:text-[#A00A20]"}`}>
              More
              <span className="text-[7px] transition-all duration-300 group-hover:rotate-180">▼</span>
            </button>
            <div className="invisible absolute right-0 top-[145%] z-50 w-[240px] rounded-[22px] border border-black/5 bg-white/95 p-4 opacity-0 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:top-[125%] group-hover:opacity-100">
              <div className="space-y-2">
                {moreLinks.map((item) => (
                  <a key={item.href} href={item.href} className="block rounded-xl p-2 text-[14px] font-medium text-[#012D0E] transition-all duration-300 hover:bg-[#A00A20]/5 hover:font-bold hover:text-[#A00A20]">
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LANGUAGE BUTTON */}
        <button className="hidden lg:block rounded-full bg-black px-6 py-3 text-[13px] font-semibold uppercase tracking-[-0.5px] text-white transition hover:bg-[#A00A20]">
          Language
        </button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden z-[999] p-2 rounded-full transition-colors duration-300 hover:bg-black/5"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[996] bg-black/30 backdrop-blur-[2px] transition-opacity duration-400 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-[997] h-screen w-[85%] max-w-[360px] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* DRAWER HEADER */}
        <div className="flex items-center justify-between px-6 pt-6 pb-12 border-b border-gray-100">
          
        </div>

        {/* DRAWER LINKS */}
        <div className="overflow-y-auto h-[calc(100vh-90px)] px-4 py-6 space-y-1">

          {/* HOME */}
          <a
            href="/"
            onClick={() => setOpen(false)}
            className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold uppercase tracking-wide transition-all duration-200 ${
              pathname === "/" ? "bg-[#A00A20]/8 text-[#A00A20]" : "text-black hover:bg-gray-50 hover:text-[#A00A20]"
            }`}
          >
            Home
          </a>

          {/* FUNDING ACCORDION */}
          <div>
            <button
              onClick={() => toggleDropdown("funding")}
              className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold uppercase tracking-wide text-black hover:bg-gray-50 hover:text-[#A00A20] transition-all duration-200"
            >
              Funding
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className={`transition-transform duration-300 text-gray-400 ${openDropdown === "funding" ? "rotate-180 text-[#A00A20]" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openDropdown === "funding" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="mx-3 my-1 space-y-1 rounded-xl bg-gray-50/80 p-2">
                {fundingLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg p-3 transition-all duration-200 hover:bg-white hover:shadow-sm"
                  >
                    <p className="text-[14px] font-semibold text-[#012D0E]">{item.title}</p>
                    <p className="mt-[2px] text-[11px] text-gray-500 leading-4">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LEGAL ACCORDION */}
          <div>
            <button
              onClick={() => toggleDropdown("legal")}
              className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold uppercase tracking-wide text-black hover:bg-gray-50 hover:text-[#A00A20] transition-all duration-200"
            >
              Legal
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className={`transition-transform duration-300 text-gray-400 ${openDropdown === "legal" ? "rotate-180 text-[#A00A20]" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openDropdown === "legal" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="mx-3 my-1 space-y-1 rounded-xl bg-gray-50/80 p-2">
                {legalLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg p-3 transition-all duration-200 hover:bg-white hover:shadow-sm"
                  >
                    <p className="text-[14px] font-semibold text-[#012D0E]">{item.title}</p>
                    <p className="mt-[2px] text-[11px] text-gray-500 leading-4">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* DIGITAL */}
          <a
            href="/digital"
            onClick={() => setOpen(false)}
            className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold uppercase tracking-wide transition-all duration-200 ${
              pathname === "/digital" ? "bg-[#A00A20]/8 text-[#A00A20]" : "text-black hover:bg-gray-50 hover:text-[#A00A20]"
            }`}
          >
            Digital
          </a>

          {/* INVESTOR RELATION */}
          <a
            href="/investor"
            onClick={() => setOpen(false)}
            className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold uppercase tracking-wide transition-all duration-200 ${
              pathname === "/investor" ? "bg-[#A00A20]/8 text-[#A00A20]" : "text-black hover:bg-gray-50 hover:text-[#A00A20]"
            }`}
          >
            Investor Relation
          </a>

          {/* PRICING */}
          <a
            href="/pricing"
            onClick={() => setOpen(false)}
            className={`flex items-center px-4 py-3 rounded-xl text-[15px] font-semibold uppercase tracking-wide transition-all duration-200 ${
              pathname === "/pricing" ? "bg-[#A00A20]/8 text-[#A00A20]" : "text-black hover:bg-gray-50 hover:text-[#A00A20]"
            }`}
          >
            Pricing
          </a>

          {/* MORE ACCORDION */}
          <div>
            <button
              onClick={() => toggleDropdown("more")}
              className={`flex w-full items-center justify-between px-4 py-3 rounded-xl text-[15px] font-semibold uppercase tracking-wide transition-all duration-200 ${
                isMoreActive ? "text-[#A00A20]" : "text-black hover:bg-gray-50 hover:text-[#A00A20]"
              }`}
            >
              More
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className={`transition-transform duration-300 text-gray-400 ${openDropdown === "more" ? "rotate-180 text-[#A00A20]" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openDropdown === "more" ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="mx-3 my-1 space-y-1 rounded-xl bg-gray-50/80 p-2">
                {moreLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-[14px] font-semibold transition-all duration-200 hover:bg-white hover:shadow-sm hover:text-[#A00A20] ${
                      pathname === item.href ? "text-[#A00A20]" : "text-[#012D0E]"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LANGUAGE BUTTON */}
          <div className="pt-4 px-2">
            <button className="w-full rounded-full bg-black px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wider text-white transition hover:bg-[#A00A20]">
              Language
            </button>
          </div>

        </div>
      </div>
    </>
  );
}