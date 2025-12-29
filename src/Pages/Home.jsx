import React, { useEffect } from "react";
import "../Components/Css.css";
import Counter from "../Components/Counter";
import { initScrollReveal } from "../Components/scrollReveal";

const Home = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="home-hero reveal">
        <div className="container">
          <h1>
            Welcome to Arvess <sup>TM</sup>
          </h1>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Where Strategy Meets Execution for Sustainable Growth</h2>
            </div>

            <div className="col-lg-6 text-center">
              <div className="hero-box">
                <h4>Turning idea's into impact</h4>
                <p>
                  Arvess brings structure, strategy, and operational discipline
                  to growing businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="home-about reveal">
        <div className="container text-center">
          <h1>About Arvess</h1>
          <h4>
            Arvess is a strategic business consulting and outsourcing firm built
            to support ambitious startups and growth-stage enterprises in
            navigating complexity with confidence. We partner with founders to
            establish strong foundations across legal, financial, operational,
            and digital function sensuring their businesses are structured,
            compliant, and ready to scale.
          </h4>
          <h4>
            Our approach blends strategic insight with execution excellence.
            From early-stage setup to long-term growth optimization, Arvess
            delivers clarity, control, and credibility empowering businesses to
            make informed decisions, attract opportunities, and grow sustainably
            in an evolving market.
          </h4>
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}
      <section className="home-stats reveal">
        <div className="stats-bg"></div>

        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <Counter end={550} suffix="+" />
              <span className="stat-line"></span>
              <p>Startups supported and scaled successfully with Arvess</p>
            </div>

            <div className="stat-card">
              <Counter end={1500} suffix="+" />
              <span className="stat-line"></span>
              <p>Customized funding and grant proposals delivered</p>
            </div>

            <div className="stat-card">
              <Counter end={20} suffix="+" />
              <span className="stat-line"></span>
              <p>Strategic hubs and nationwide partner agencies</p>
            </div>
            <div className="stat-card">
              <Counter end={79} suffix="%" />
              <span className="stat-line"></span>
              <p>Our success rate across schemes</p>
            </div>

            <div className="stat-card">
              <Counter end={5} suffix="+" />
              <span className="stat-line"></span>
              <p>Year's of Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-values reveal">
        <div className="container">
          <div className="value-header text-center">
            <h2>
              Empowering Arvess’s Startup Growth <br />
              Through Insight & Innovation
            </h2>
          </div>

          <div className="value-grid">
            <div className="value-card big">
              <div className="icon">⚙️</div>
              <h5>Founder-Centric Approach</h5>
              <p>
                We focus on founders first. Every solution is tailored to your
                startup’s stage, vision, and execution needs.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">🏆</div>
              <h5>Data-Driven Strategy</h5>
              <p>
                Decisions are powered by market data, performance insights, and
                ecosystem intelligence.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">🏛️</div>
              <h5>Government Scheme Alignment</h5>
              <p>
                From MSME to DPIIT and state programs, we ensure accurate
                eligibility.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">📄</div>
              <h5>Agile Startup Structuring</h5>
              <p>
                Legal, financial, and operational structures that adapt as you
                grow.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">📊</div>
              <h5>Market-Backed Growth Planning</h5>
              <p>
                We analyze your market deeply to design traction strategies.
              </p>
            </div>

            <div className="value-card wide">
              <div className="icon">🌍</div>
              <h5>Sustainable & Scalable Models</h5>
              <p>
                We help build resilient businesses focused on long-term value
                creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="home-services reveal">
        <div className="container">
          <div className="text-center mb-5">
            <h1>Our Core Offerings</h1>
            <p>
              Integrated solutions designed to help startups and growing
              enterprises build strong foundations, secure capital, and scale
              with confidence.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card">
                <h5>Legal & Compliance Infrastructure</h5>
                <p>
                  We establish and safeguard your business through structured
                  incorporation, statutory registrations, licenses,
                  certifications, and ongoing compliances ensuring regulatory
                  clarity, risk mitigation, and long-term operational stability.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>Funding & Capital Advisory</h5>
                <p>
                  We support founders in navigating government schemes, startup
                  funding programs, investor readiness, and private capital
                  opportunities through strategic documentation, financial
                  structuring, and end-to-end application support.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>Branding & Digital Acceleration</h5>
                <p>
                  We create growth-oriented brands with strategic positioning,
                  digital marketing, website & app solutions, and
                  performance-driven campaigns helping businesses convert
                  visibility into measurable results.
                </p>
              </div>
            </div>
            <p>
              From compliance to capital and market presence, Arvess acts as a
              single strategic partner across your growth journey.
            </p>
          </div>
        </div>
      </section>
      {/* ================= BLOG SECTION ================= */}
      <section className="home-blog reveal">
        <div className="container">
          <div className="row align-items-start">
            {/* LEFT CONTENT */}
            <div className="col-lg-4 mb-4 reveal">
              <span className="blog-tag">Blog & News</span>
              <h2 className="blog-heading">
                Read Our Articles to Learn <br />
                About us in Depth.
              </h2>
            </div>

            {/* RIGHT BLOG CARDS */}
            <div className="col-lg-8">
              <div className="row g-4">
                {/* BLOG CARD 1 */}
                <div className="col-md-4 reveal delay-1">
                  <div className="blog-card">
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                      alt="blog"
                    />
                    <span className="blog-date">12 Dec, 2024</span>
                    <h5>
                      Top 10 Government Grants Every Startup Should Apply For In
                      2025
                    </h5>
                    <p>
                      Top 10 Government Grants Every Startup Should Apply for in
                      2025
                    </p>
                  </div>
                </div>

                {/* BLOG CARD 2 */}
                <div className="col-md-4 reveal delay-2">
                  <div className="blog-card">
                    <span className="blog-date">12 Dec, 2024</span>
                    <h5>How To Build An Investor-Ready Pitch Deck</h5>
                    <p>How to Build an Investor-Ready Pitch Deck</p>
                  </div>
                </div>

                {/* BLOG CARD 3 */}
                <div className="col-md-4 reveal delay-3">
                  <div className="blog-card">
                    <span className="blog-date">12 Dec, 2024</span>
                    <h5>
                      Angel Investors Vs. Venture Capitalists: Key Differences
                      Explained
                    </h5>
                    <p>
                      Angel Investors vs. Venture Capitalists: Key Differences
                      Explained
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="home0-faq0 reveal">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-lg-5 mb-4">

              <div className="faq0-heading-image">
                <img
                  src="./FaqHomeQuestion.png"
                  alt="FAQ Title"
                  className="faq0-heading-img"
                />
              </div>

              {/* MAIN ILLUSTRATION IMAGE (jo pehle se thi) */}
              <div className="faq0-illustration0">
                <img
                  src="./FAQHome.png"
                  alt="FAQ Illustration"
                  className="faq0-illustration-img"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7">
              <div className="faq0-item0 active">
                <h5>
                  <span>1.</span> What services does Arvess provide?
                </h5>
                <p>
                  Arvess offers end-to-end business support, including legal and
                  regulatory compliance, government schemes and funding
                  assistance, financial structuring, branding, digital growth,
                  and strategic consulting to support sustainable business
                  expansion.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>2.</span> Who can work with Arvess?
                </h5>
                <p>
                  Arvess works with idea-stage founders, early-stage startups,
                  MSMEs, and scaling enterprises across multiple industries,
                  supporting businesses at every stage of growth.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>3.</span> Does Arvess assist with government schemes
                  and grants?
                </h5>
                <p>
                  Yes. We specialize in MSME, DPIIT, Startup India, state and
                  central government schemes, grants, incentives, and related
                  compliance and application processes.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>4.</span> How does Arvess ensure legal and financial
                  compliance?
                </h5>
                <p>
                  Our team follows structured legal, financial, and regulatory
                  frameworks, ensuring accuracy, transparency, and adherence to
                  statutory requirements at every stage.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>5.</span> Does Arvess provide long-term support?
                </h5>
                <p>
                  Absolutely. We focus on long-term partnerships, offering
                  continuous advisory and operational support as your business
                  grows, evolves, and scales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="home-why reveal">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>Why Choose Arvess</h2>
              <ul className="why-list">
                <li> End-to-end business consulting & outsourcing</li>
                <li> Startup and MSME-focused expertise</li>
                <li> Strong legal, financial, and compliance foundation</li>
                <li> Funding, grants, and investor-readiness support</li>
                <li> Transparent, process-driven execution</li>
                <li> Tailored solutions for every growth stage</li>
                <li> Long-term partnership mindset</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="why-box">
                <h4>Your Growth. Our Commitment. </h4>
                <p>
                  Arvess partners with founders and leadership teams to create
                  strong, compliant, and scalable business foundations. Through
                  strategic consulting and structured execution, we help unlock
                  growth opportunities, simplify complexity, and provide
                  dependable support that enables confident decisions and
                  long-term business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
