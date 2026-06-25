import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function EquityInvestmentPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}

      <section className="pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">

          <span className="text-[#A00A20] font-bold uppercase tracking-[4px] sm:tracking-[6px] text-sm sm:text-base">
            Investor Funding
          </span>

          <h1 className="mt-4 sm:mt-6 text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-bold leading-[0.9] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-5px] lg:tracking-[-6px] text-[#012D0E]">
            Secure Investment. 
            <span className="block text-[#A00A20]">
              Accelerate Growth.
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-[900px] text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 leading-relaxed">
            Arvess helps startups, founders, and high-growth businesses connect with angel investors, venture capital funds, strategic partners, and institutional investors. From investor readiness and business valuation to pitch deck development, fundraising advisory, and capital-raising support, we provide end-to-end solutions designed to help businesses attract investment and scale successfully.
          </p>

        </div>
      </section>

      {/* WHAT INVESTORS LOOK FOR */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          <div>
            <h2 className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
              What Investors Look For?
            </h2>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-black/60 leading-[1.8] md:leading-[2]">
              Investors back businesses that demonstrate strong fundamentals, market potential, and the ability to generate exceptional long-term returns. Successful fundraising is built on more than an idea—it requires a compelling vision, scalable execution, and measurable growth potential
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

            {[
              {
                title: "Founder-Market Fit",
                desc: "Founders with deep industry knowledge, execution capability, and a clear understanding of the problem they are solving.",
              },
              {
                title: "Market Opportunity",
                desc: "Large and growing markets with strong demand, expansion potential, and sustainable competitive advantages.",
              },
              {
                title: "Scalable Business Model",
                desc: "A repeatable and scalable revenue model capable of delivering sustainable growth and long-term profitability.",
              },
              {
                title: "Growth & Traction",
                desc: "Demonstrated customer validation, revenue growth, market adoption, and clear momentum toward future expansion.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  border
                  border-black
                  rounded-[20px] sm:rounded-[25px]
                  p-6 sm:p-8
                  hover:border-[#A00A20]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  bg-white
                "
              >
                <div className="text-[#A00A20] text-3xl sm:text-4xl font-black">
                  0{index + 1}
                </div>

                <h3 className="mt-4 text-lg sm:text-2xl font-bold text-[#012D0E]">
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

      {/* FUNDING STAGES */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            Funding Stages
          </h2>

          <p className="mt-6 sm:mt-8 max-w-[900px] mx-auto text-center text-sm sm:text-base md:text-lg text-black/60 leading-relaxed">
            From pre-seed investment and seed funding to Series A and growth
            capital, Arvess helps startups navigate every stage of the
            fundraising journey by connecting founders with angel investors,
            venture capital firms, family offices, and strategic investment
            partners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              {
                title: "Idea & Validation",
                desc: "Transform innovative concepts into investable businesses through early-stage capital.",
              },
              {
                title: "Market Entry",
                desc: "Accelerate product launch, customer acquisition, and business traction.",
              },
              {
                title: "Scale & Expansion",
                desc: "Secure growth capital to expand operations, strengthen teams, and capture market opportunities.",
              },
              {
                title: "Market Leadership",
                desc: "Fuel sustainable growth, strategic expansion, and long-term enterprise value.",
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

                <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-[#012D0E]">
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

      {/* INVESTOR READINESS FRAMEWORK */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            Investor Readiness Framework
          </h2>

          <p className="mt-6 sm:mt-8 max-w-[900px] mx-auto text-center text-sm sm:text-base md:text-lg text-black/60 leading-relaxed">
            We prepare startups and growth-stage businesses for successful
            fundraising by developing investor-ready materials, financial
            strategies, valuation frameworks, and comprehensive fundraising
            support systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              {
                title: "Investor Pitch Deck",
                desc: "Professionally crafted investor presentations designed to communicate vision, traction, market opportunity, and growth potential.",
              },
              {
                title: "Financial Projections",
                desc: "Data-driven revenue forecasts, financial models, and investment projections that support fundraising decisions.",
              },
              {
                title: "Business Valuation",
                desc: "Strategic valuation analysis to determine investment worth, equity positioning, and fundraising readiness.",
              },
              {
                title: "Investor Outreach",
                desc: "Targeted engagement with angel investors, venture capital firms, family offices, and strategic investment partners.",
              },
              {
                title: "Due Diligence Support",
                desc: "Preparation of financial, legal, operational, and compliance documentation required during investor evaluation.",
              },
              {
                title: "Fundraising Strategy",
                desc: "End-to-end fundraising planning, capital-raising strategy, investor positioning, and investment readiness support.",
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
                <span className="text-[#A00A20] text-lg sm:text-xl font-bold">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-lg sm:text-2xl font-bold text-[#012D0E] leading-snug">
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

      {/* FUNDRAISING JOURNEY */}

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="text-center text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-bold text-[#012D0E] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">
            Fundraising Journey
          </h2>

          <p className="mt-6 sm:mt-8 max-w-[900px] mx-auto text-center text-sm sm:text-base md:text-lg text-black/60 leading-relaxed">
            Our structured fundraising process helps startups and growth-stage
            businesses navigate investor readiness, capital raising, venture
            capital engagement, and investment execution with confidence and
            strategic clarity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mt-12 sm:mt-16">

            {[
              {
                title: "Opportunity Assessment",
                desc: "Evaluate business potential, funding requirements, growth objectives, and investment opportunities.",
              },
              {
                title: "Investment Preparation",
                desc: "Develop investor-ready documentation, financial models, valuation frameworks, and fundraising materials.",
              },
              {
                title: "Capital Partner Alignment",
                desc: "Connect with relevant angel investors, venture capital firms, family offices, and strategic partners.",
              },
              {
                title: "Transaction Execution",
                desc: "Support negotiations, due diligence, deal structuring, and successful investment closure.",
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

                <h3 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-[#012D0E] leading-snug">
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
            Ready To Connect
            <span className="block text-[#A00A20]">
              With Investors?
            </span>
          </h2>

          <p className="mt-4 sm:mt-8 max-w-[900px] mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-black/60 leading-relaxed">
            Arvess helps startups, founders, and high-growth businesses raise
            capital through angel investors, venture capital funds, family
            offices, and strategic investment partners. Our investor readiness,
            fundraising advisory, pitch deck development, business valuation,
            and capital raising services are designed to maximize funding
            opportunities and accelerate sustainable business growth.
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
            Start Your Fundraising Journey
          </button>

        </div>
      </section>

      <Footer />
    </main>
  );
}