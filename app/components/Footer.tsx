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

      <div className="relative z-10 max-w-[1600px] mx-auto px-6">

        {/* TOP */}

        <div className="pt-0 md:pt-0">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >

    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

      <img
        src="/arvess.svg"
        alt="Arvess"
        className="w-auto max-w-[450px]"
      />

      <p
        className="
          mt-30
          ml-30
    max-w-[800px]
    text-black
    text-
    md:tepxxt-2xl
    leading-relaxed
        "
      >
        Trusted by startups, founders, SMEs, and enterprises across India, Arvess delivers business consulting, legal compliance, Startup India registration, DPIIT recognition, ISO certification, government grant support, investor readiness, fundraising advisory, digital transformation, and business growth solutions. Our mission is to help businesses build credibility, improve efficiency, secure opportunities, and achieve sustainable growth through innovative strategies and execution-driven support.
      </p>

    </div>

  </motion.div>

</div>

        {/* LINKS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-14
          py-20
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
              text-[#A00A20]
              text-[24px]
              font-bold
              mb-5
            ">
              Company
            </h3>

            <div className="flex flex-col gap-2">

              <Link
                href="/"
                className="text-[#012D0E] hover:text-[#A00A20]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-[#012D0E] hover:text-[#A00A20] transition"
              >
                About Us
              </Link>

              <Link
                href="/digital"
                className="text-[#012D0E] hover:text-[#A00A20] transition"
              >
                Digital
              </Link>

              <Link
                href="/investor"
                className="text-[#012D0E] hover:text-[#A00A20] transition"
              >
                Investor Relation
              </Link>

              <Link
                href="/pricing"
                className="text-[#012D0E] hover:text-[#A00A20] transition"
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
              text-[#A00A20]
              text-[24px]
              font-bold
              mb-5
            ">
              Services
            </h3>

            <div className="flex flex-col gap-2">

              <p className="text-[#012D0E] hover:text-[#A00A20] transition">
                Funding
              </p>

              <p className="text-[#012D0E] hover:text-[#A00A20] transition">
                Legal
              </p>

              <p className="text-[#012D0E] hover:text-[#A00A20] transition">
                Digital
              </p>

              <p className="text-[#012D0E] hover:text-[#A00A20] transition">
                Investor Relations
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
              text-[#A00A20]
              text-[24px]
              font-bold
              mb-5
            ">
              Legal
            </h3>

            <div className="flex flex-col gap-2">

              <Link
                href="/privacy-policy"
                className="text-[#012D0E] hover:text-[#012D0E] transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/refund-policy"
                className="text-[#012D0E] hover:text-[#012D0E] transition"
              >
                Refund Policy
              </Link>

              <Link
                href="/terms-condition"
                className="text-[#012D0E] hover:text-[#012D0E] transition"
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
              text-[#A00A20]
              text-[24px]
              font-bold
              mb-5
            ">
              Contact
            </h3>

            <div className="flex flex-col gap-2">

              <a
                href="mailto:arvess.services@gmail.com"
                className="text-[#012D0E] hover:text-[#A00A20] transition"
              >
                arvess.services@gmail.com
              </a>

              <p className="text-[#012D0E]">
                Ahmedabad, Gujarat, India
              </p>

              <p className="text-[#012D0E]">
                +91 9662347619
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
                py-2
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
          py-2
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