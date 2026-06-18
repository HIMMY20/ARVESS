import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function BusinessFormationPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}

      <section className="pt-40 pb-28 px-6">
        <div className="max-w-[1400px] mx-auto">

          <span className="text-[#A00A20] font-bold uppercase tracking-[6px]">
            Legal Services
          </span>

          <h1 className="mt-6 text-[60px] md:text-[120px] font-bold leading-[0.9] tracking-[-6px] text-[#012D0E]">
            Business
            <span className="block text-[#A00A20]">
              Formation
            </span>
          </h1>

          <p className="mt-8 max-w-[900px] text-lg md:text-2xl text-black/60 leading-relaxed">
            Arvess provides comprehensive business formation and company registration services for startups, entrepreneurs, SMEs, and growing enterprises. Our expertise includes Private Limited Company Registration, LLP Registration, OPC Registration, Partnership Firm Registration, Startup India Registration, DPIIT Recognition, legal documentation, compliance management, and regulatory support. We help businesses establish legally compliant structures, reduce administrative complexity, and create a foundation for sustainable growth and future expansion.
          </p>

        </div>
      </section>

      {/* ABOUT */}

<section className="py-24 px-6">
  <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">

    <div>
      <h2 className="text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
        Why It Matters
      </h2>

      <p className="mt-8 text-black/60 leading-[2] text-lg">
        Business formation is more than registration—it's the foundation
        of a sustainable and scalable enterprise. A well-structured legal
        entity strengthens credibility, improves compliance, supports
        fundraising efforts, and creates opportunities for future growth,
        partnerships, and market expansion.
      </p>
    </div>

    <div className="bg-[#A00A20]/5 border border-[#A00A20]/10 rounded-[35px] p-10">

      <h3 className="text-3xl font-bold text-[#A00A20]">
        Strategic Advantages
      </h3>

      <div className="mt-8 space-y-5 text-black/70">

        <p>
          <span className="text-[#A00A20] font-bold">✓</span>{" "}
          Legal Business Registration
        </p>

        <p>
          <span className="text-[#A00A20] font-bold">✓</span>{" "}
          Startup India & DPIIT Eligibility
        </p>

        <p>
          <span className="text-[#A00A20] font-bold">✓</span>{" "}
          Investor & Funding Readiness
        </p>

        <p>
          <span className="text-[#A00A20] font-bold">✓</span>{" "}
          Enhanced Brand Credibility
        </p>

        <p>
          <span className="text-[#A00A20] font-bold">✓</span>{" "}
          Regulatory & Tax Compliance
        </p>

        <p>
          <span className="text-[#A00A20] font-bold">✓</span>{" "}
          Scalable Growth Foundation
        </p>

      </div>

    </div>

  </div>
</section>

      {/* BUSINESS STRUCTURES */}

<section className="py-24 px-6 bg-[#fafafa]">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
      Choose The Right Business Structure
    </h2>

    <p className="mt-8 max-w-[950px] mx-auto text-center text-lg text-black/60 leading-relaxed">
      Explore Private Limited Companies, LLPs, OPCs, Partnership Firms,
      Sole Proprietorships, and Section 8 Companies to identify the most
      suitable legal structure for your business goals, compliance
      requirements, funding plans, and long-term growth strategy.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {[
        {
          title: "Private Limited Company",
          desc: "Ideal for startups and growing businesses seeking investor funding, limited liability protection, and scalable growth opportunities.",
        },
        {
          title: "LLP Registration",
          desc: "Flexible business structure combining limited liability protection with simplified compliance and operational flexibility.",
        },
        {
          title: "One Person Company (OPC)",
          desc: "Perfect for solo entrepreneurs looking for legal recognition, limited liability, and a structured business identity.",
        },
        {
          title: "Partnership Firm",
          desc: "Suitable for businesses operated by two or more partners with shared ownership, responsibilities, and profits.",
        },
        {
          title: "Sole Proprietorship",
          desc: "Simple and cost-effective business structure for individual entrepreneurs and small business owners.",
        },
        {
          title: "Section 8 Company",
          desc: "Non-profit organization structure designed for charitable, social, educational, and development-focused initiatives.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-[30px]
            border
            border-black
            p-8
            hover:-translate-y-2
            hover:border-[#A00A20]
            transition-all
            duration-500
          "
        >
          <span className="text-[#A00A20] text-4xl font-black">
            0{index + 1}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-[#012D0E] leading-snug">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-black/60">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* SERVICES */}

<section className="py-24 px-6">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
      End-to-End Business Setup Services
    </h2>

    <p className="mt-8 max-w-[950px] mx-auto text-center text-lg text-black/60 leading-relaxed">
      From company registration and GST compliance to Startup India
      recognition, MSME registration, legal documentation, and
      regulatory setup, Arvess provides complete business formation
      solutions designed to help startups and enterprises launch,
      operate, and scale with confidence.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {[
        {
          title: "Company Incorporation",
          desc: "Private Limited Company, LLP, OPC, Partnership Firm, and legal business registration services.",
        },
        {
          title: "GST Registration",
          desc: "GST registration, tax identification, and regulatory setup for compliant business operations.",
        },
        {
          title: "Startup India & DPIIT Recognition",
          desc: "Startup India registration, DPIIT recognition, and eligibility support for government benefits and funding opportunities.",
        },
        {
          title: "MSME Registration",
          desc: "Udyam registration and MSME certification to unlock subsidies, incentives, and business support schemes.",
        },
        {
          title: "Legal Documentation",
          desc: "MOA, AOA, partnership agreements, resolutions, declarations, and essential business documentation.",
        },
        {
          title: "Compliance & Regulatory Setup",
          desc: "Business compliance frameworks, statutory registrations, and operational readiness support.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            rounded-[30px]
            border
            border-black
            p-8
            bg-white
            hover:border-[#A00A20]
            hover:-translate-y-2
            transition-all
            duration-500
          "
        >
          <span className="text-[#A00A20] text-4xl font-black">
            0{index + 1}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-[#012D0E] leading-snug">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-black/60">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* FORMATION PROCESS */}

<section className="py-24 px-6 bg-[#fafafa]">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
      Formation Process
    </h2>

    <p className="mt-8 max-w-[950px] mx-auto text-center text-lg text-black/60 leading-relaxed">
      Our streamlined business formation process helps startups,
      entrepreneurs, and enterprises establish legally compliant
      business entities through expert consultation, company
      registration, legal documentation, regulatory filings,
      and compliance support.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        {
          title: "Business Discovery",
          desc: "Understand your business goals, industry requirements, and long-term growth objectives to identify the right legal structure.",
        },
        {
          title: "Entity Structuring",
          desc: "Select the most suitable business structure, whether Private Limited Company, LLP, OPC, Partnership Firm, or Sole Proprietorship.",
        },
        {
          title: "Documentation & Filing",
          desc: "Prepare legal documentation, registrations, compliance records, and regulatory filings required for incorporation.",
        },
        {
          title: "Incorporation & Activation",
          desc: "Complete registration approvals, compliance setup, and business activation to ensure operational readiness.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-[30px]
            border
            border-black
            p-8
            hover:-translate-y-2
            hover:border-[#A00A20]
            transition-all
            duration-500
          "
        >
          <div className="text-[#A00A20] text-5xl font-black">
            0{index + 1}
          </div>

          <h3 className="mt-5 text-2xl font-bold text-[#012D0E] leading-snug">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-black/60">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
      {/* CTA */}

<section className="py-28 px-6">
  <div className="max-w-[1200px] mx-auto text-center">

    <h2 className="text-[50px] md:text-[80px] font-bold text-[#012D0E] tracking-[-4px] leading-[1]">
      Start Your Company
      <span className="block text-[#A00A20]">
        Registration Journey
      </span>
    </h2>

    <p className="mt-8 max-w-[900px] mx-auto text-lg md:text-xl text-black/60 leading-relaxed">
      Launch your startup or business with complete company registration,
      LLP registration, GST registration, Startup India recognition,
      MSME registration, legal documentation, and compliance support
      under one roof.
    </p>

    <button
      className="
        mt-10
        px-10
        py-4
        rounded-full
        bg-[#A00A20]
        text-white
        font-semibold
        hover:scale-105
        hover:bg-[#87081b]
        transition-all
        duration-300
      "
    >
      Start Registration
    </button>

  </div>
</section>

      <Footer />
    </main>
  );
}