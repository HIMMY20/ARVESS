import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function LegalCompliancePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}

      <section className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">

          <span className="text-[#A00A20] font-bold uppercase tracking-[4px] sm:tracking-[6px] text-sm sm:text-base">
            Regulatory Services
          </span>

          <h1 className="mt-4 sm:mt-6 text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-bold leading-[0.9] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-5px] lg:tracking-[-6px] text-[#012D0E]">
            Legal &
            <span className="block text-[#A00A20]">
              Compliance
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-[900px] text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 leading-relaxed">
            Stay compliant, avoid penalties and build trust with
            investors, customers and regulators through proactive
            legal and compliance management.
          </p>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          <div>
            <h2 className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
              Why Compliance Matters?
            </h2>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-black/60 leading-[1.8] md:leading-[2]">
              Every business must comply with government regulations,
              tax laws and corporate requirements. Strong compliance
              practices reduce legal risks, improve transparency and
              ensure smooth business operations.
            </p>
          </div>

          <div className="bg-[#A00A20]/5 border border-[#A00A20]/10 rounded-[20px] sm:rounded-[28px] lg:rounded-[35px] p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#A00A20]">
              Benefits
            </h3>

            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base text-black/70">
              <p>✓ Avoid Regulatory Penalties</p>
              <p>✓ Build Investor Confidence</p>
              <p>✓ Maintain Legal Compliance</p>
              <p>✓ Improve Business Transparency</p>
              <p>✓ Reduce Operational Risks</p>
              <p>✓ Ensure Long-Term Stability</p>
            </div>
          </div>

        </div>
      </section>

      {/* COMPLIANCE SERVICES */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            Compliance Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              "ROC Filings",
              "Annual Compliance",
              "GST Compliance",
              "Corporate Governance",
              "Labour Law Compliance",
              "Regulatory Advisory",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border border-black p-6 sm:p-7 lg:p-8 hover:-translate-y-2 hover:border-[#A00A20] transition-all duration-500"
              >
                <span className="text-[#A00A20] text-3xl sm:text-4xl font-black">
                  0{index + 1}
                </span>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-2xl font-bold text-[#012D0E]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT WE HANDLE */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            What We Handle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              "GST Returns",
              "ROC Filings",
              "Legal Documentation",
              "Regulatory Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border border-black p-6 sm:p-7 lg:p-8 text-center bg-white hover:-translate-y-2 hover:border-[#A00A20] transition-all duration-500"
              >
                <div className="text-[#A00A20] text-3xl sm:text-4xl lg:text-5xl font-black">
                  0{index + 1}
                </div>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-bold text-[#012D0E]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            Compliance Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              "Compliance Review",
              "Documentation",
              "Filing & Submission",
              "Monitoring & Support",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border border-black p-6 sm:p-7 lg:p-8 text-center hover:-translate-y-2 hover:border-[#A00A20] transition-all duration-500"
              >
                <div className="text-[#A00A20] text-3xl sm:text-4xl lg:text-5xl font-black">
                  0{index + 1}
                </div>

                <h3 className="mt-4 sm:mt-5 text-lg sm:text-2xl font-bold text-[#012D0E]">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">

          <h2 className="text-[36px] sm:text-[50px] md:text-[70px] lg:text-[80px] font-bold text-[#012D0E] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-4px] leading-[1.1]">
            Stay Compliant. Stay Protected.
          </h2>

          <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-lg text-black/60 max-w-[800px] mx-auto">
            Let Arvess manage your legal and compliance obligations
            while you focus on growing your business.
          </p>

          <button className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#A00A20] text-white font-semibold text-sm sm:text-base hover:scale-105 hover:bg-[#87081b] transition-all duration-300">
            Get Compliance Support
          </button>

        </div>
      </section>

      <Footer />
    </main>
  );
}