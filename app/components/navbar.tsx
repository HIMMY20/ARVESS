"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
    );
  }, []);

  const isMoreActive = [
    "/privacy-policy",
    "/refund-policy",
    "/terms-condition",
    "/contact",
  ].includes(pathname);

  const navLink = (path: string) =>
    `text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold ${
      pathname === path
        ? "text-[#A00A20]"
        : "text-black hover:text-[#A00A20]"
    }`;

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
          {/* HOME */}

          <a href="/" className={navLink("/")}>
            Home
          </a>

          

          {/* FUNDING */}

          <div className="group relative">
            <button
              className={`flex items-center gap-[6px] text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold ${
                pathname.includes("/funding")
                  ? "text-[#A00A20]"
                  : "text-black hover:text-[#A00A20]"
              }`}
            >
              Funding
              <span className="text-[7px] transition-all duration-300 group-hover:rotate-180">
                ▼
              </span>
            </button>

            <div className="invisible absolute left-0 top-[145%] z-50 w-[255px] rounded-[22px] border border-black/5 bg-white/95 p-4 opacity-0 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:top-[125%] group-hover:opacity-100">
              <div className="space-y-2">
                <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5 hover:scale-[1.02]">
                  <h3 className="text-[14px] font-medium tracking-[-0.3px] text-[#012D0E] transition-all duration-300 hover:font-bold hover:text-[#A00A20]">
                    Grant Funding
                  </h3>

                  <p className="mt-[2px] text-[11px] leading-4 text-black">
                    Government backend financial support
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5 hover:scale-[1.02]">
                  <h3 className="text-[14px] font-medium tracking-[-0.3px] text-[#012D0E] transition-all duration-300 hover:font-bold hover:text-[#A00A20]">
                    Equity Investment
                  </h3>

                  <p className="mt-[2px] text-[11px] leading-4 text-black">
                    Raise capital by offering ownership
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5 hover:scale-[1.02]">
                  <h3 className="text-[14px] font-medium tracking-[-0.3px] text-[#012D0E] transition-all duration-300 hover:font-bold hover:text-[#A00A20]">
                    Debt Financing
                  </h3>

                  <p className="mt-[2px] text-[11px] leading-4 text-black">
                    Secure funds without equity dilution
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LEGAL */}

          <div className="group relative">
            <button
              className={`flex items-center gap-[6px] text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold ${
                pathname.includes("/legal")
                  ? "text-[#A00A20]"
                  : "text-black hover:text-[#A00A20]"
              }`}
            >
              Legal
              <span className="text-[7px] transition-all duration-300 group-hover:rotate-180">
                ▼
              </span>
            </button>

            <div className="invisible absolute left-0 top-[145%] z-50 w-[255px] rounded-[22px] border border-black/5 bg-white/95 p-4 opacity-0 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:top-[125%] group-hover:opacity-100">
              <div className="space-y-2">
                <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5 hover:scale-[1.02]">
                  <h3 className="text-[14px] font-medium tracking-[-0.3px] text-[#012D0E] transition-all duration-300 hover:font-bold hover:text-[#A00A20]">
                    Business Formation
                  </h3>

                  <p className="mt-[2px] text-[11px] leading-4 text-black">
                    Company setup & legal registrations
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5 hover:scale-[1.02]">
                  <h3 className="text-[14px] font-medium tracking-[-0.3px] text-[#012D0E] transition-all duration-300 hover:font-bold hover:text-[#A00A20]">
                    IP Protection
                  </h3>

                  <p className="mt-[2px] text-[11px] leading-4 text-black">
                    Safeguard your brand & innovations
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-[#A00A20]/5 hover:scale-[1.02]">
                  <h3 className="text-[14px] font-medium tracking-[-0.3px] text-[#012D0E] transition-all duration-300 hover:font-bold hover:text-[#A00A20]">
                    Legal & Compliance
                  </h3>

                  <p className="mt-[2px] text-[11px] leading-4 text-black">
                    Contracts, filings & regulatory support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DIGITAL */}

          <a href="/digital" className={navLink("/digital")}>
            Digital
          </a>

          {/* INVESTOR */}

          <a
            href="/investor-relation"
            className={navLink("/investor-relation")}
          >
            Investor Relation
          </a>

          {/* PRICING */}

          <a href="/pricing" className={navLink("/pricing")}>
            Pricing
          </a>

          {/* MORE */}

          <div className="group relative">
            <button
              className={`flex items-center gap-[6px] text-[14px] font-medium uppercase tracking-[0.4px] transition-all duration-300 hover:scale-[1.06] hover:font-semibold ${
                isMoreActive
                  ? "text-[#A00A20]"
                  : "text-black hover:text-[#A00A20]"
              }`}
            >
              More
              <span className="text-[7px] transition-all duration-300 group-hover:rotate-180">
                ▼
              </span>
            </button>

            <div className="invisible absolute right-0 top-[145%] z-50 w-[240px] rounded-[22px] border border-black/5 bg-white/95 p-4 opacity-0 shadow-[0_15px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:top-[125%] group-hover:opacity-100">
              <div className="space-y-2">
                <a
                  href="/privacy-policy"
                  className="block rounded-xl p-2 text-[14px] font-medium text-[#012D0E] transition-all duration-300 hover:bg-[#A00A20]/5 hover:font-bold hover:text-[#A00A20]"
                >
                  Privacy Policy
                </a>

                <a
                  href="/refund-policy"
                  className="block rounded-xl p-2 text-[14px] font-medium text-[#012D0E] transition-all duration-300 hover:bg-[#A00A20]/5 hover:font-bold hover:text-[#A00A20]"
                >
                  Refund Policy
                </a>

                <a
                  href="/terms-condition"
                  className="block rounded-xl p-2 text-[14px] font-medium text-[#012D0E] transition-all duration-300 hover:bg-[#A00A20]/5 hover:font-bold hover:text-[#A00A20]"
                >
                  Term & Condition
                </a>

                <a
                  href="/contact"
                  className="block rounded-xl p-2 text-[14px] font-medium text-[#012D0E] transition-all duration-300 hover:bg-[#A00A20]/5 hover:font-bold hover:text-[#A00A20]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LANGUAGE */}

        <button className="hidden lg:block rounded-full bg-black px-6 py-3 text-[13px] font-semibold uppercase tracking-[-0.5px] text-white transition hover:bg-[#A00A20]">
          Language
        </button>

        {/* MOBILE TOGGLE */}

        <button onClick={() => setOpen(!open)} className="lg:hidden z-[999]">
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-0 right-0 z-[998] h-screen w-[80%] bg-white transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Digital", path: "/digital" },
            { name: "Pricing", path: "/pricing" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`text-2xl font-bold uppercase tracking-[3px] transition-all duration-300 hover:scale-[1.05] ${
                pathname === item.path
                  ? "text-[#A00A20]"
                  : "text-black hover:text-[#A00A20]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
