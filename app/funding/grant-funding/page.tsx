import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";



export default function GrantFundingPage() {
  return (
    <main className="bg-white">
        <Navbar/>

      {/* HERO */}

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">

          <span className="text-[#A00A20] font-bold uppercase tracking-[6px]">
            Funding Solutions
          </span>

          <h1 className="mt-6 text-[55px] md:text-[100px] font-bold leading-[0.9] tracking-[-5px] text-[#012D0E]">
            Grant
            <span className="text-[#A00A20]"> Funding</span>
          </h1>

          <p className="mt-8 max-w-[850px] text-lg md:text-2xl text-black/60 leading-relaxed">
            Arvess helps startups, MSMEs, entrepreneurs, and growing businesses secure government grants, startup funding, DPIIT recognition benefits, Startup India schemes, seed funding, innovation grants, subsidy programs, and strategic financial assistance. Our experts provide end-to-end support including funding opportunity assessment, documentation, application management, compliance guidance, and grant advisory services, helping businesses access capital, accelerate innovation, and achieve sustainable growth.
          </p>

        </div>
      </section>

      {/* ABOUT */}

      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-[45px] md:text-[70px] font-bold text-[#012D0E] tracking-[-3px]">
              What Is Grant Funding?
            </h2>

            <p className="mt-8 text-black/60 leading-[2]">
              Grant funding is a financial assistance program provided by government agencies, Startup India schemes, DPIIT-recognized initiatives, incubators, and innovation bodies to support startups, MSMEs, entrepreneurs, and high-growth businesses. Unlike loans or debt financing, government grants typically do not require repayment, helping businesses access capital for innovation, research and development, product commercialization, technology adoption, business expansion, and sustainable growth.
            </p>
          </div>

          <div className="bg-[#A00A20]/5 border border-[#A00A20]/10 rounded-[35px] p-10">
            <h3 className="text-3xl font-bold text-[#A00A20]">
              Key Outcomes
            </h3>

            <div className="mt-8 space-y-5 text-black/70">
              <p>✓ Increased Access to Capital</p>
              <p>✓ Accelerated Business Growth</p>
              <p>✓ Enhanced Business Credibility</p>
              <p>✓ Improved Investor Readiness</p>
              <p>✓ Innovation & Product Development</p>
              <p>✓ Sustainable Market Expansion</p>
            </div>
          </div>

        </div>
      </section>

      {/* SCHEMES */}

      {/* GOVERNMENT GRANTS & STARTUP FUNDING PROGRAMS */}

<section className="py-20 px-6">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-[45px] md:text-[70px] font-bold text-center text-[#012D0E] tracking-[-3px]">
      Government Grants & Startup Funding Programs
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {[
        {
          title: "Startup India Seed Fund",
          desc: "Early-stage funding support for innovative DPIIT-recognized startups.",
        },
        {
          title: "BIRAC Biotechnology Grants",
          desc: "Funding programs for biotech, healthcare, research, and deep-tech innovation.",
        },
        {
          title: "MeitY TIDE 2.0",
          desc: "Government-backed support for technology startups, AI, SaaS, and digital innovation.",
        },
        {
          title: "PMEGP Funding",
          desc: "Financial assistance and subsidy support for new businesses and entrepreneurs.",
        },
        {
          title: "CGTMSE Credit Support",
          desc: "Collateral-free credit guarantee scheme for MSMEs and growing enterprises.",
        },
        {
          title: "MSME Innovation Programs",
          desc: "Funding, technology development, and innovation support for MSMEs.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            rounded-[30px]
            border
            border-black
            p-8
            hover:-translate-y-2
            hover:border-[#A00A20]
            transition-all
            duration-500
            bg-white
          "
        >
          <span className="text-[#A00A20] text-xl font-bold">
            0{index + 1}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-[#012D0E] leading-snug">
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

      <section className="py-20 px-6 bg-[#fafafa]">
  <div className="max-w-[1400px] mx-auto">

    <h2 className="text-[45px] md:text-[70px] font-bold text-center text-[#012D0E] tracking-[-3px]">
      Our Process
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        {
          title: "Business Assessment",
          desc: "Analyze eligibility, funding requirements, startup readiness, and growth opportunities.",
        },
        {
          title: "Grant & Scheme Selection",
          desc: "Identify suitable government grants, Startup India schemes, DPIIT opportunities, and MSME funding programs.",
        },
        {
          title: "Documentation & Compliance",
          desc: "Prepare business plans, funding applications, supporting documents, and regulatory requirements.",
        },
        {
          title: "Application & Funding Support",
          desc: "Manage submissions, coordination, compliance follow-ups, and grant funding assistance for successful outcomes.",
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

    <h2 className="text-[45px] md:text-[75px] font-bold text-[#012D0E] tracking-[-3px] leading-[1]">
      Secure The Right Funding
      <span className="block text-[#A00A20]">
        For Sustainable Growth
      </span>
    </h2>

    <p className="mt-8 max-w-[850px] mx-auto text-lg md:text-xl text-black/60 leading-relaxed">
      From government grants and Startup India funding to DPIIT-backed
      opportunities and MSME support programs, Arvess helps startups,
      entrepreneurs, and growing businesses access the capital they need
      to innovate, expand, and scale with confidence.
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
      Get Expert Guidance
    </button>

  </div>
</section>
            <Footer/>
    </main>
  );
}