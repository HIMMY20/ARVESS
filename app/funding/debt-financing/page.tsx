import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function DebtFinancingPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}

      <section className="pt-40 pb-28 px-6">
        <div className="max-w-[1400px] mx-auto">

          <span className="text-[#A00A20] font-bold uppercase tracking-[6px]">
            Business Financing
          </span>

          <h1 className="mt-6 text-[60px] md:text-[120px] font-bold leading-[0.9] tracking-[-6px] text-[#012D0E]">
            Debt
            <span className="block text-[#A00A20]">
              Financing
            </span>
          </h1>

          <p className="mt-8 max-w-[900px] text-lg md:text-2xl text-black/60 leading-relaxed">
            Debt financing is a strategic funding solution that allows businesses to access working capital, business loans, term loans, equipment financing, project funding, and institutional credit without giving up equity ownership. Arvess supports startups, MSMEs, and enterprises with financing strategy, lender readiness, documentation support, and funding assistance to secure capital for growth, expansion, and operational excellence.
          </p>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
              What Is Debt Financing?
            </h2>

            <p className="mt-8 text-black/60 leading-[2] text-lg">
              Debt financing allows businesses to secure capital from banks, NBFCs, financial institutions, and lending partners without giving up equity ownership. It is commonly used for working capital, business expansion, equipment purchases, project financing, and operational growth. With structured repayment terms and flexible funding options, debt financing helps businesses scale while maintaining complete ownership and control.
            </p>
          </div>

          <div className="bg-[#A00A20]/5 border border-[#A00A20]/10 rounded-[35px] p-10">
  <h3 className="text-3xl font-bold text-[#A00A20]">
    Strategic Advantages
  </h3>

  <div className="mt-8 space-y-5 text-black/70">
    <p>✓ Retain Full Equity Ownership</p>
    <p>✓ Access Business Loans & Credit Facilities</p>
    <p>✓ Support Working Capital Requirements</p>
    <p>✓ Finance Business Expansion & Projects</p>
    <p>✓ Improve Cash Flow Management</p>
    <p>✓ Maintain Long-Term Financial Control</p>
  </div>
</div>

        </div>
      </section>

     {/* FINANCING OPTIONS */}

<section className="py-24 px-6 bg-[#fafafa]">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
      Financing Options
    </h2>

    <p className="mt-8 max-w-[900px] mx-auto text-center text-lg text-black/60 leading-relaxed">
      Explore a range of financing solutions designed to support business
      growth, operational efficiency, expansion initiatives, and long-term
      financial stability without compromising ownership.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {[
        {
          title: "Working Capital Loans",
          desc: "Short-term financing solutions designed to manage cash flow, operational expenses, inventory, and day-to-day business requirements.",
        },
        {
          title: "Term Loans",
          desc: "Structured business loans with fixed repayment schedules for expansion, infrastructure, and long-term growth investments.",
        },
        {
          title: "Business Expansion Loans",
          desc: "Growth-focused financing to support market expansion, new locations, increased production capacity, and strategic scaling initiatives.",
        },
        {
          title: "Equipment Financing",
          desc: "Funding solutions for machinery, technology, equipment purchases, and business asset acquisition without impacting working capital.",
        },
        {
          title: "MSME Loans",
          desc: "Specialized financing programs for MSMEs and small businesses, including government-backed funding and growth support schemes.",
        },
        {
          title: "Credit Line Facilities",
          desc: "Flexible revolving credit solutions that provide immediate access to working capital and business liquidity when needed.",
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

      {/* ELIGIBILITY */}

<section className="py-24 px-6">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
      What Lenders Look For
    </h2>

    <p className="mt-8 max-w-[900px] mx-auto text-center text-lg text-black/60 leading-relaxed">
     Explore business loans, working capital financing, MSME loans, term loans, equipment financing, credit facilities, and growth capital solutions designed to support business expansion, operational efficiency, and long-term financial stability.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        {
          title: "Revenue Stability",
          desc: "Consistent business revenue and healthy cash flow that demonstrate financial strength and sustainability.",
        },
        {
          title: "Creditworthiness",
          desc: "Strong credit history, responsible borrowing behavior, and a positive financial track record.",
        },
        {
          title: "Financial Documentation",
          desc: "Accurate financial statements, bank records, tax filings, and business performance reports.",
        },
        {
          title: "Repayment Capacity",
          desc: "The ability to manage loan repayments through stable income, profitability, and cash flow management.",
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

      {/* PROCESS */}

<section className="py-24 px-6 bg-[#fafafa]">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-center text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
      Our Process
    </h2>

    <p className="mt-8 max-w-[900px] mx-auto text-center text-lg text-black/60 leading-relaxed">
      Our structured financing process helps startups, MSMEs, and growing businesses secure business loans, working capital facilities, MSME funding, term loans, and institutional financing through strategic planning, lender matching, and end-to-end funding support.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        {
          title: "Funding Assessment",
          desc: "Analyze business requirements, financial health, loan eligibility, and capital requirements to identify the most suitable financing solution.",
        },
        {
          title: "Financing Strategy",
          desc: "Structure the right funding mix, loan type, repayment terms, and financing approach aligned with business objectives.",
        },
        {
          title: "Lender Alignment",
          desc: "Connect with banks, NBFCs, financial institutions, and lending partners best suited to your funding requirements.",
        },
        {
          title: "Approval & Disbursement",
          desc: "Manage documentation, lender coordination, approval processes, and fund disbursement support from start to finish.",
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
      Need Business Funding
      <span className="block text-[#A00A20]">
        To Scale?
      </span>
    </h2>

    <p className="mt-6 max-w-[950px] mx-auto text-lg md:text-xl text-black/60 leading-relaxed">
      Arvess helps startups, MSMEs, and enterprises secure business loans,
      working capital facilities, term loans, credit lines, and debt
      financing solutions through leading banks and NBFCs. Our end-to-end
      financing support includes funding assessment, lender matching,
      documentation assistance, and loan application management to
      maximize approval potential and accelerate business growth.
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
      Start Your Funding Journey
    </button>

  </div>
</section>

      <Footer />
    </main>
  );
}