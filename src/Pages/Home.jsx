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
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>
                Where Strategy Meets Execution 
                for Sustainable Growth
              </h1>
              <p>
                From strategic business consulting to end-to-end outsourcing
                solutions, Arvess partners with founders and enterprises to
                build resilient, compliant, and scalable organizations. We
                simplify complex operations, strengthen governance and financial
                frameworks, and design execution-driven systems that enable
                sustainable growth. With Arvess, businesses gain clarity,
                control, and the confidence to scale in an evolving market.
              </p>
            </div>

            <div className="col-lg-6 text-center">
              <div className="hero-box">
                <h4>Trusted Business Support Partner</h4>
                <p>Expertise. Transparency. Growth-Focused Solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}
      <section className="home-stats reveal">
        <div className="stats-bg"></div>

        <div className="container">
          <div className="row g-4 text-center stats-row">
            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <Counter end={500} suffix="+" />
                <span className="stat-line"></span>
                <p>Startups supported and scaled successfully with Arvess</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <Counter end={1200} suffix="+" />
                <span className="stat-line"></span>
                <p>Customized funding and grant proposals delivered</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <Counter end={98} suffix="%" />
                <span className="stat-line"></span>
                <p>Approval and interview success rate across schemes</p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="stat-card">
                <Counter end={15} suffix="+" />
                <span className="stat-line"></span>
                <p>Strategic hubs and nationwide partner agencies</p>
              </div>
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

      {/* ================= ABOUT SECTION ================= */}
      <section className="home-about reveal">
        <div className="container text-center">
          <h2>About Arvess</h2>
          <p>
            Arvess is a professional consulting and outsourcing organization
            focused on enabling startups, enterprises, and growing businesses
            through structured legal, financial, and digital support systems.
          </p>
          <p>
            Our mission is to simplify complex processes and provide businesses
            with dependable guidance at every stage of their journey.
          </p>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="home-services reveal">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Core Offerings</h2>
            <p>
              Comprehensive solutions designed to support compliance, funding,
              branding, and long-term operational success.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card">
                <h5>Legal & Compliance Services</h5>
                <p>
                  Business registrations, statutory compliances, certifications,
                  and regulatory support to keep your organization secure and
                  compliant.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>Funding & Financial Advisory</h5>
                <p>
                  Assistance with government schemes, startup funding programs,
                  investor connections, and financial planning strategies.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-card">
                <h5>Branding & Digital Growth</h5>
                <p>
                  Strategic branding, digital marketing, web solutions, and
                  performance-driven campaigns to strengthen your market
                  presence.
                </p>
              </div>
            </div>
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
                    <a href="#" className="read-more">
                      ↗ Read More
                    </a>
                  </div>
                </div>

                {/* BLOG CARD 2 */}
                <div className="col-md-4 reveal delay-2">
                  <div className="blog-card">
                    <span className="blog-date">12 Dec, 2024</span>
                    <h5>How To Build An Investor-Ready Pitch Deck</h5>
                    <p>How to Build an Investor-Ready Pitch Deck</p>
                    <a href="#" className="read-more">
                      ↗ Read More
                    </a>
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
                    <a href="#" className="read-more">
                      ↗ Read More
                    </a>
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
              <span className="faq0-tag0">Popular Questions</span>
              <h2 className="faq0-heading0">
                Frequently Asked <br /> Questions
              </h2>

              <div className="faq0-illustration0">?</div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7">
              <div className="faq0-item0 active">
                <h5>
                  <span>1.</span> What services does Arvess provide?
                </h5>
                <p>
                  Arvess provides end-to-end startup support including legal
                  compliance, funding assistance, branding, digital growth, and
                  strategic consulting.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>2.</span> Which startups can work with Arvess?
                </h5>
                <p>
                  From idea-stage founders to scaling businesses, Arvess
                  supports startups across all growth stages and industries.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>3.</span> Does Arvess help with government schemes?
                </h5>
                <p>
                  Yes, we specialize in MSME, DPIIT, Startup India, and
                  state-level government funding and compliance programs.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>4.</span> How does Arvess ensure compliance?
                </h5>
                <p>
                  Our experts follow structured legal and financial frameworks
                  to ensure accuracy, transparency, and long-term compliance.
                </p>
              </div>

              <div className="faq0-item0">
                <h5>
                  <span>5.</span> Is long-term support available?
                </h5>
                <p>
                  Yes, we believe in partnerships, offering continuous support
                  as your business grows and evolves.
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
                <li>Experienced industry professionals</li>
                <li>Process-driven and transparent approach</li>
                <li>Customized solutions for every business</li>
                <li>Strong compliance and ethical standards</li>
                <li>Long-term partnership mindset</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="why-box">
                <h4>Your Growth, Our Responsibility</h4>
                <p>
                  We believe in building lasting partnerships by delivering
                  dependable services that add measurable value to your
                  business.
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
