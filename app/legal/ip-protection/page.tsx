import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function IPProtectionPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}

      <section className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">

          <span className="text-[#A00A20] font-bold uppercase tracking-[4px] sm:tracking-[6px] text-sm sm:text-base">
            Intellectual Property
          </span>

          <h1 className="mt-4 sm:mt-6 text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-bold leading-[0.9] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-5px] lg:tracking-[-6px] text-[#012D0E]">
            IP
            <span className="block text-[#A00A20]">
              Protection
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-[900px] text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 leading-relaxed">
            Protect your brand identity, innovations, creative works, software, products, and business assets through comprehensive trademark registration, patent filing, copyright protection, design registration, and intellectual property compliance services. Arvess helps businesses secure legal ownership, enhance market credibility, and build long-term competitive advantage.
          </p>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          <div>
            <h2 className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
              Why IP Protection Matters?
            </h2>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-black/60 leading-[1.8] md:leading-[2]">
              Intellectual Property protection safeguards your brand, innovations, technology, creative works, and business assets from unauthorized use and infringement. Strong IP protection enhances brand value, strengthens market positioning, attracts investors, and creates sustainable competitive advantages for long-term business growth.
            </p>
          </div>

          <div className="bg-[#A00A20]/5 border border-[#A00A20]/10 rounded-[20px] sm:rounded-[28px] lg:rounded-[35px] p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#A00A20]">
              Key Benefits
            </h3>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base text-black/70">
              <p>✓ Protect Brand Identity & Reputation</p>
              <p>✓ Secure Exclusive Commercial Rights</p>
              <p>✓ Increase Startup Valuation</p>
              <p>✓ Strengthen Investor Confidence</p>
              <p>✓ Prevent Unauthorized Usage</p>
              <p>✓ Build Long-Term Competitive Advantage</p>
            </div>
          </div>

        </div>
      </section>

      {/* IP SERVICES */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            IP Services
          </h2>

          <p className="mt-6 sm:mt-8 max-w-[950px] mx-auto text-center text-sm sm:text-base md:text-lg text-black/60 leading-relaxed">
            Comprehensive intellectual property services designed to protect
            brands, innovations, technologies, creative works, and business
            assets through trademark registration, patent filing, copyright
            protection, design registration, and IP portfolio management.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              {
                title: "Trademark Registration",
                desc: "Protect brand names, logos, taglines, and business identities through trademark registration and legal ownership rights.",
              },
              {
                title: "Copyright Registration",
                desc: "Secure ownership of creative works, software, content, designs, publications, and digital assets.",
              },
              {
                title: "Patent Filing",
                desc: "Protect inventions, innovative technologies, products, and processes through patent registration and filing support.",
              },
              {
                title: "Industrial Design Registration",
                desc: "Safeguard the unique appearance, design, shape, and visual identity of products from unauthorized replication.",
              },
              {
                title: "Brand Protection & Enforcement",
                desc: "Monitor, protect, and defend intellectual property rights against infringement, misuse, and unauthorized duplication.",
              },
              {
                title: "IP Portfolio Management",
                desc: "Strategically manage trademarks, patents, copyrights, and intellectual property assets to maximize business value.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]
                  border
                  border-black
                  p-6 sm:p-7 lg:p-8
                  hover:-translate-y-2
                  hover:border-[#A00A20]
                  transition-all
                  duration-500
                "
              >
                <span className="text-[#A00A20] text-3xl sm:text-4xl font-black">
                  0{index + 1}
                </span>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-2xl font-bold text-[#012D0E] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] leading-6 sm:leading-7 text-black/60">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT WE PROTECT */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            What We Protect
          </h2>

          <p className="mt-6 sm:mt-8 max-w-[950px] mx-auto text-center text-sm sm:text-base md:text-lg text-black/60 leading-relaxed">
            We help businesses, startups, innovators, and creators secure their
            intellectual property assets, ensuring long-term protection, market
            differentiation, and legal ownership of valuable business and creative
            resources.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              {
                title: "Trademarks & Brand Assets",
                desc: "Brand names, logos, taglines, domain identities, and business trademarks.",
              },
              {
                title: "Brand Identity & Designs",
                desc: "Visual identities, packaging designs, product aesthetics, and distinctive brand elements.",
              },
              {
                title: "Innovations & Technologies",
                desc: "Patents, inventions, proprietary technologies, processes, and research-driven innovations.",
              },
              {
                title: "Creative & Digital Assets",
                desc: "Copyrights for content, software, websites, publications, media, and creative works.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]
                  border
                  border-black
                  p-6 sm:p-7 lg:p-8
                  bg-white
                  hover:border-[#A00A20]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <div className="text-[#A00A20] text-3xl sm:text-4xl lg:text-5xl font-black">
                  0{index + 1}
                </div>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-2xl font-bold text-[#012D0E] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] leading-6 sm:leading-7 text-black/60">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROTECTION PROCESS */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            Protection Process
          </h2>

          <p className="mt-6 sm:mt-8 max-w-[950px] mx-auto text-center text-sm sm:text-base md:text-lg text-black/60 leading-relaxed">
            Our structured intellectual property protection process helps
            businesses, startups, innovators, and creators secure trademarks,
            patents, copyrights, and design rights through strategic planning,
            expert guidance, and end-to-end registration support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              {
                title: "IP Strategy Assessment",
                desc: "Identify trademarks, patents, copyrights, and intellectual property assets that require legal protection.",
              },
              {
                title: "Documentation & Due Diligence",
                desc: "Prepare supporting documents, ownership records, technical details, and compliance requirements.",
              },
              {
                title: "Filing & Registration",
                desc: "Submit trademark, patent, copyright, or design applications through the appropriate authorities.",
              },
              {
                title: "Protection & Portfolio Management",
                desc: "Secure intellectual property rights and manage ongoing protection, renewals, and enforcement support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]
                  border
                  border-black
                  p-6 sm:p-7 lg:p-8
                  hover:-translate-y-2
                  hover:border-[#A00A20]
                  transition-all
                  duration-500
                "
              >
                <div className="text-[#A00A20] text-3xl sm:text-4xl lg:text-5xl font-black">
                  0{index + 1}
                </div>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-2xl font-bold text-[#012D0E] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] leading-6 sm:leading-7 text-black/60">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">

          <h2 className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[80px] font-bold text-[#012D0E] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] leading-[1.1]">
            Protect Your Brand,
            <span className="block text-[#A00A20]">
              Innovation & Intellectual Property
            </span>
          </h2>

          <p className="mt-4 sm:mt-8 max-w-[950px] mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-black/60 leading-relaxed">
            Protect trademarks, patents, copyrights, industrial designs,
            software, digital assets, and business innovations through
            professional intellectual property registration and protection
            services. Ensure legal ownership, investor confidence, brand
            security, and sustainable business growth with Arvess.
          </p>

          <button
            className="
              mt-8 sm:mt-10
              px-8 sm:px-10
              py-3 sm:py-4
              rounded-full
              bg-[#A00A20]
              text-white
              font-semibold
              text-sm sm:text-base
              hover:scale-105
              hover:bg-[#87081b]
              transition-all
              duration-300
            "
          >
            Start IP Protection
          </button>

        </div>
      </section>

      <Footer />
    </main>
  );
}