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

      <div className="absolute top-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#064e3b]/10 blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-250px] h-[500px] w-[500px] rounded-full bg-[#A00A20]/10 blur-[180px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">

        {/* TOP */}

        <div className="pt-0 md:pt-0">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            {/* LOGO */}

            <img
              src="/arvess.svg"
              alt="Arvess"
              className=" md:h-100 w-auto"
            />

            <p className="
              max-w-[800px]
              text-black/60
              text-lg
              md:text-2xl
              leading-relaxed
            ">
              Building Modern Businesses Through Strategic Growth.
              We help startups, founders and enterprises navigate
              funding, compliance, investor relations and scalable
              business expansion.
            </p>

          </motion.div>

        </div>

        {/* LINKS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-14
          py-24
          border-b
          border-black/10
        ">

          {/* COMPANY */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="
              text-black
              text-[24px]
              font-bold
              mb-8
            ">
              Company
            </h3>

            <div className="flex flex-col gap-5">

              <Link
                href="/"
                className="text-black/60 hover:text-[#A00A20] transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-black/60 hover:text-[#A00A20] transition"
              >
                About Us
              </Link>

              <Link
                href="/digital"
                className="text-black/60 hover:text-[#A00A20] transition"
              >
                Digital
              </Link>

              <Link
                href="/investor"
                className="text-black/60 hover:text-[#A00A20] transition"
              >
                Investor Relation
              </Link>

              <Link
                href="/pricing"
                className="text-black/60 hover:text-[#A00A20] transition"
              >
                Pricing
              </Link>

            </div>

          </motion.div>

          {/* SERVICES */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="
              text-black
              text-[24px]
              font-bold
              mb-8
            ">
              Services
            </h3>

            <div className="flex flex-col gap-5">

              <p className="text-black/60">
                Startup Consulting
              </p>

              <p className="text-black/60">
                Funding Support
              </p>

              <p className="text-black/60">
                Investor Relations
              </p>

              <p className="text-black/60">
                Strategic Growth
              </p>

              <p className="text-black/60">
                Business Expansion
              </p>

            </div>

          </motion.div>

          {/* LEGAL */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="
              text-black
              text-[24px]
              font-bold
              mb-8
            ">
              Legal
            </h3>

            <div className="flex flex-col gap-5">

              <Link
                href="/privacy-policy"
                className="text-black/60 hover:text-[#064e3b] transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/refund-policy"
                className="text-black/60 hover:text-[#064e3b] transition"
              >
                Refund Policy
              </Link>

              <Link
                href="/terms-condition"
                className="text-black/60 hover:text-[#064e3b] transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </motion.div>

          {/* CONTACT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="
              text-black
              text-[24px]
              font-bold
              mb-8
            ">
              Contact
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="mailto:hello@arvess.com"
                className="text-black/60 hover:text-[#A00A20] transition"
              >
                hello@arvess.com
              </a>

              <p className="text-black/60">
                Ahmedabad, Gujarat, India
              </p>

              <p className="text-black/60">
                +91 99999 99999
              </p>

            </div>

          </motion.div>

        </div>

        {/* SOCIALS */}

        <div className="
          flex
          flex-wrap
          justify-center
          gap-4
          py-16
        ">

          {[
            "LinkedIn",
            "Instagram",
            "Facebook",
            "YouTube",
          ].map((item) => (

            <motion.a
              key={item}
              href="#"
              whileHover={{
                scale: 1.05,
              }}
              className="
                px-8
                py-4
                rounded-full
                border
                border-black/10
                bg-white
                text-black/70
                hover:border-[#A00A20]
                hover:text-[#A00A20]
                transition-all
                duration-300
              "
            >
              {item}
            </motion.a>

          ))}

        </div>

        {/* BOTTOM */}

        <div className="
          py-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          border-t
          border-black/10
        ">

          <p className="text-black/50 text-sm">
            © 2026 Arvess. All Rights Reserved.
          </p>

          <div className="
            flex
            items-center
            gap-6
            text-sm
          ">

            <Link
              href="/privacy-policy"
              className="text-black/50 hover:text-[#A00A20]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-condition"
              className="text-black/50 hover:text-[#A00A20]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}