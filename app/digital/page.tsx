import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function DigitalPage() {
  return (
    <main className="bg-white">

      <Navbar />

      {/* HERO */}

     {/* HERO */}

<section className="pt-44 pb-32 px-6 overflow-hidden">
  <div className="max-w-[1400px] mx-auto">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <div>

        <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#A00A20]/10 text-[#A00A20] text-sm font-semibold tracking-[2px] uppercase">
          Digital Growth Solutions
        </span>

        <h1 className="mt-8 text-[65px] md:text-[120px] font-black leading-[0.88] tracking-[-6px] text-[#012D0E]">
          Build
          <br />
          Digital
          <br />
          <span className="text-[#A00A20]">
            Authority
          </span>
        </h1>

        <p className="mt-8 max-w-[700px] text-lg md:text-2xl text-black/60 leading-relaxed">
          From websites and SEO to performance marketing,
          automation and AI-powered growth systems, Arvess
          helps businesses create visibility, generate leads,
          and scale sustainably in competitive markets.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <button className="px-8 py-4 rounded-full bg-[#A00A20] text-white font-semibold hover:scale-105 transition-all duration-300">
            Start Digital Growth
          </button>

          <button className="px-8 py-4 rounded-full border border-black/10 bg-white hover:border-[#A00A20] hover:text-[#A00A20] transition-all duration-300">
            Explore Services
          </button>

        </div>

      </div>

      {/* RIGHT */}

      <div className="relative">

        {/* MAIN CARD */}

        <div className="bg-[#012D0E] rounded-[40px] p-10 md:p-14 text-white shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
            Accelerate
            <br />
            Business Growth
          </h3>

          <p className="mt-5 text-white/70 text-lg">
            Strategy, technology, performance marketing
            and automation working together to create
            measurable business results.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">

            <div>
              <h4 className="text-5xl font-black text-[#A00A20]">
                500+
              </h4>
              <p className="mt-2 text-white/70">
                Growth Campaigns
              </p>
            </div>

            <div>
              <h4 className="text-5xl font-black text-[#A00A20]">
                98%
              </h4>
              <p className="mt-2 text-white/70">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h4 className="text-5xl font-black text-[#A00A20]">
                10M+
              </h4>
              <p className="mt-2 text-white/70">
                Audience Reach
              </p>
            </div>

            <div>
              <h4 className="text-5xl font-black text-[#A00A20]">
                100+
              </h4>
              <p className="mt-2 text-white/70">
                Brands Supported
              </p>
            </div>

          </div>

        </div>

        {/* FLOATING BADGE */}

        <div className="absolute -bottom-6 -left-6 bg-white rounded-[25px] p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-black/5">

          <p className="text-sm text-black/50 uppercase tracking-[2px]">
            Core Focus
          </p>

          <h4 className="mt-2 text-xl font-bold text-[#012D0E]">
            SEO • Ads • AI
          </h4>

        </div>

      </div>

    </div>

  </div>
</section>

{/* DIGITAL IMPACT */}

<section className="py-28 px-6">
  <div className="max-w-[1400px] mx-auto">

    <div className="grid lg:grid-cols-3 gap-8">

      {/* BIG CARD */}

      <div className="lg:col-span-2 bg-[#012D0E] rounded-[40px] p-10 md:p-14 text-white">

        <span className="text-[#A00A20] uppercase tracking-[4px] font-semibold">
          Why Digital Matters
        </span>

        <h2 className="mt-6 text-[45px] md:text-[75px] font-bold tracking-[-4px] leading-[0.95]">
          Digital Is The
          <br />
          New Growth Engine
        </h2>

        <p className="mt-8 max-w-[750px] text-white/70 text-lg md:text-xl leading-relaxed">
          Modern businesses grow through visibility, engagement,
          automation and data-driven decision making. A strong
          digital ecosystem helps brands attract customers,
          increase conversions and create sustainable growth.
        </p>

      </div>

      {/* SIDE CARD */}

      <div className="bg-[#A00A20] rounded-[40px] p-10 text-white flex flex-col justify-between">

        <div>
          <p className="uppercase tracking-[3px] text-white/70 text-sm">
            Average Growth
          </p>

          <h3 className="mt-4 text-7xl font-black">
            250%
          </h3>
        </div>

        <p className="text-lg text-white/80">
          Businesses implementing integrated digital
          strategies often experience significant
          improvements in visibility, lead generation
          and customer acquisition.
        </p>

      </div>

    </div>

    {/* BENEFITS */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

      {[
        "Higher Lead Generation",
        "Improved Brand Visibility",
        "Better Customer Engagement",
        "Scalable Revenue Growth",
      ].map((item, index) => (
        <div
          key={index}
          className="
            border
            border-black/10
            rounded-[25px]
            p-8
            bg-white
            hover:border-[#A00A20]
            hover:-translate-y-1
            transition-all
            duration-300
          "
        >
          <div className="text-[#A00A20] text-4xl font-black">
            0{index + 1}
          </div>

          <h3 className="mt-4 text-xl font-bold text-[#012D0E]">
            {item}
          </h3>
        </div>
      ))}

    </div>

  </div>
</section>

{/* DIGITAL ECOSYSTEM */}

<section className="py-32 px-6 bg-[#fafafa]">
  <div className="max-w-[1400px] mx-auto">

    <div className="text-center mb-20">
      <span className="text-[#A00A20] font-semibold uppercase tracking-[4px]">
        Digital Ecosystem
      </span>

      <h2 className="mt-6 text-[50px] md:text-[90px] font-black tracking-[-5px] text-[#012D0E]">
        Growth Through
        <br />
        Connected Systems
      </h2>
    </div>

    <div className="grid lg:grid-cols-4 gap-6">

      {/* BIG CARD */}

      <div className="lg:col-span-2 lg:row-span-2 bg-[#012D0E] rounded-[40px] p-12 text-white">

        <h3 className="text-5xl font-bold">
          360° Digital Growth
        </h3>

        <p className="mt-6 text-white/70 text-lg">
          Strategy, marketing, automation, analytics and
          technology integrated into one scalable ecosystem.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6">

          <div>
            <h4 className="text-5xl font-black text-[#A00A20]">
              500+
            </h4>
            <p className="text-white/70">
              Campaigns
            </p>
          </div>

          <div>
            <h4 className="text-5xl font-black text-[#A00A20]">
              98%
            </h4>
            <p className="text-white/70">
              Satisfaction
            </p>
          </div>

        </div>

      </div>

      <div className="bg-white rounded-[30px] border p-8">
        <span className="text-5xl">🔍</span>
        <h3 className="mt-5 text-2xl font-bold">
          SEO
        </h3>
      </div>

      <div className="bg-white rounded-[30px] border p-8">
        <span className="text-5xl">📈</span>
        <h3 className="mt-5 text-2xl font-bold">
          Paid Ads
        </h3>
      </div>

      <div className="bg-white rounded-[30px] border p-8">
        <span className="text-5xl">⚡</span>
        <h3 className="mt-5 text-2xl font-bold">
          Automation
        </h3>
      </div>

      <div className="bg-white rounded-[30px] border p-8">
        <span className="text-5xl">🤖</span>
        <h3 className="mt-5 text-2xl font-bold">
          AI Solutions
        </h3>
      </div>

      <div className="lg:col-span-2 bg-[#A00A20] rounded-[30px] p-10 text-white">
        <h3 className="text-3xl font-bold">
          Everything Connected
        </h3>

        <p className="mt-4 text-white/80">
          Every channel works together to maximize
          visibility, engagement and conversion.
        </p>
      </div>

    </div>

  </div>
</section>

{/* DIGITAL ADVANTAGE */}

<section className="py-32 px-6 bg-[#fafafa]">

  <div className="max-w-[1400px] mx-auto">

    <div className="text-center">

      <span className="text-[#A00A20] uppercase tracking-[4px] font-semibold">
        Why Businesses Choose Digital
      </span>

      <h2 className="mt-6 text-[50px] md:text-[90px] font-black tracking-[-5px] text-[#012D0E]">
        Competitive Advantage
        <br />
        In The Digital Era
      </h2>

      <p className="mt-8 max-w-[900px] mx-auto text-lg text-black/60 leading-relaxed">
        Businesses that embrace digital transformation gain stronger
        market visibility, improve customer engagement, optimize
        operations, and unlock scalable growth opportunities.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 mt-20">

      <div className="bg-white rounded-[35px] border border-black/10 p-10">

        <div className="text-[#A00A20] text-6xl font-black">
          01
        </div>

        <h3 className="mt-6 text-3xl font-bold text-[#012D0E]">
          Stronger Market Presence
        </h3>

        <p className="mt-5 text-black/60 leading-8">
          Build brand authority across search engines,
          social media platforms, digital channels and
          customer touchpoints to increase visibility
          and attract qualified audiences.
        </p>

      </div>

      <div className="bg-[#012D0E] rounded-[35px] p-10 text-white">

        <div className="text-[#A00A20] text-6xl font-black">
          02
        </div>

        <h3 className="mt-6 text-3xl font-bold">
          Sustainable Growth Systems
        </h3>

        <p className="mt-5 text-white/70 leading-8">
          Combine marketing, automation, analytics,
          technology and customer experience into a
          scalable growth engine that continuously
          generates business opportunities.
        </p>

      </div>

    </div>

  </div>

</section>

      <Footer />

    </main>
  );
}