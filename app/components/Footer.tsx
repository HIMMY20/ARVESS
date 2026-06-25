"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white border-t border-black/10">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      <div className="absolute top-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#012D0E]/10 blur-[180px]" />
      <div className="absolute bottom-[-250px] right-[-250px] h-[500px] w-[500px] rounded-full bg-[#A00A20]/10 blur-[180px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-14">

        {/* TOP — Logo + Description */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pt-14 pb-10 flex flex-col md:flex-row items-start gap-8 border-b border-black/10"
        >
          <img
            src="/arvess.svg"
            alt="Arvess"
            className="w-auto max-w-[200px] md:max-w-[260px] shrink-0"
          />

          <p className="text-black/70 text-[15px] md:text-[16px] leading-relaxed max-w-[700px] md:pt-3">
            Trusted by startups, founders, SMEs, and enterprises across India, Arvess delivers business consulting, legal compliance, Startup India registration, DPIIT recognition, ISO certification, government grant support, investor readiness, fundraising advisory, digital transformation, and business growth solutions. Our mission is to help businesses build credibility, improve efficiency, secure opportunities, and achieve sustainable growth through innovative strategies and execution-driven support.
          </p>
        </motion.div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-black/10">

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <h3 className="text-[#A00A20] text-[18px] font-bold mb-4 uppercase tracking-wide">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Home
              </Link>
              <Link href="/pricing" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Pricing
              </Link>
              <Link href="/digital" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Digital
              </Link>
              <Link href="/investor-relation" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Investor Relation
              </Link>
            </div>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-[#A00A20] text-[18px] font-bold mb-4 uppercase tracking-wide">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/funding/grant-funding" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Grant Funding
              </Link>
              <Link href="/funding/equity-investment" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Equity Investment
              </Link>
              <Link href="/funding/debt-financing" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Debt Financing
              </Link>
              <Link href="/legal/business-formation" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Business Formation
              </Link>
              <Link href="/legal/ip-protection" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                IP Protection
              </Link>
              <Link href="/legal/compliance" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Legal & Compliance
              </Link>
            </div>
          </motion.div>

          {/* RESOURCES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-[#A00A20] text-[18px] font-bold mb-4 uppercase tracking-wide">
              Resources
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/privacy-policy" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Refund Policy
              </Link>
              <Link href="/terms-condition" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-[#A00A20] text-[18px] font-bold mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:arvess.services@gmail.com"
                className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200 break-all"
              >
                arvess.services@gmail.com
              </a>
              <a
                href="tel:+919662347619"
                className="text-[#012D0E] text-[14px] hover:text-[#A00A20] transition-colors duration-200"
              >
                +91 96623 47619
              </a>
              <p className="text-[#012D0E] text-[14px]">
                Ahmedabad, Gujarat, India
              </p>
            </div>
          </motion.div>

        </div>

        {/* SOCIALS */}
        <div className="flex flex-wrap justify-center gap-4 py-8 border-b border-black/10">
          {[
            { name: "LinkedIn", link: "https://www.linkedin.com/company/arvessbusinessfundinginvestorgrant/" },
            { name: "Instagram", link: "https://www.instagram.com/arvess_official?igsh=MXFyYWw4MTJ5eXJyMA==" },
            { name: "Facebook", link: "https://www.facebook.com/share/1JePX6Z9km/" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-2 rounded-full border border-black/10 bg-white text-black/70 text-[14px] hover:border-[#A00A20] hover:text-[#A00A20] transition-all duration-300"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/50 text-sm">
            © 2026 Arvess. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-black/50 hover:text-[#A00A20] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-condition" className="text-black/50 hover:text-[#A00A20] transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}