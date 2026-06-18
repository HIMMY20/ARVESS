import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function LegalCompliancePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}

      <section className="pt-40 pb-28 px-6">
        <div className="max-w-[1400px] mx-auto">

          <span className="text-[#A00A20] font-bold uppercase tracking-[6px]">
            Regulatory Services
          </span>

          <h1 className="mt-6 text-[60px] md:text-[120px] font-bold leading-[0.9] tracking-[-6px] text-[#012D0E]">
            Legal &
            <span className="block text-[#A00A20]">
              Compliance
            </span>
          </h1>

          <p className="mt-8 max-w-[900px] text-lg md:text-2xl text-black/60 leading-relaxed">
            Stay compliant, avoid penalties and build trust with
            investors, customers and regulators through proactive
            legal and compliance management.
          </p>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
              Why Compliance Matters?
            </h2>

            <p className="mt-8 text-black/60 leading-[2] text-lg">
              Every business must comply with government regulations,
              tax laws and corporate requirements. Strong compliance
              practices reduce legal risks, improve transparency and
              ensure smooth business operations.
            </p>
          </div>

          <div className="bg-[#A00A20]/5 border border-[#A00A20]/10 rounded-[35px] p-10">
            <h3 className="text-3xl font-bold text-[#A00A20]">
              Benefits
            </h3>

            <div className="mt-8 space-y-5 text-black/70">
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

      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
            Compliance Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

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
                className="bg-white rounded-[30px] border border-black p-8 hover:-translate-y-2 transition-all duration-500"
              >
                <span className="text-[#A00A20] text-4xl font-black">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#012D0E]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT WE HANDLE */}

      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
            What We Handle
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "GST Returns",
              "ROC Filings",
              "Legal Documentation",
              "Regulatory Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-black p-8 text-center"
              >
                <div className="text-[#A00A20] text-5xl font-black">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#012D0E]">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}

      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
            Compliance Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Compliance Review",
              "Documentation",
              "Filing & Submission",
              "Monitoring & Support",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] border border-black p-8 text-center"
              >
                <div className="text-[#A00A20] text-5xl font-black">
                  0{index + 1}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#012D0E]">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-28 px-6">
        <div className="max-w-[1200px] mx-auto text-center">

          <h2 className="text-[50px] md:text-[80px] font-bold text-[#012D0E] tracking-[-4px]">
            Stay Compliant. Stay Protected.
          </h2>

          <p className="mt-8 text-lg text-black/60 max-w-[800px] mx-auto">
            Let Arvess manage your legal and compliance obligations
            while you focus on growing your business.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-[#A00A20] text-white font-semibold hover:scale-105 transition-all">
            Get Compliance Support
          </button>

        </div>
      </section>

      <Footer />
    </main>
  );
}