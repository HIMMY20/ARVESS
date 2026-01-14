import { useState } from "react";
import React, { useEffect } from "react";
import "../Components/Css.css";
import Counter from "../Components/Counter";
import { initScrollReveal } from "../Components/scrollReveal";

const Home = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);
  const [open, setOpen] = useState(null);

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
            <h2>Empowering Startup Growth Through Insight & Innovation</h2>
          </div>

          <div className="value-grid">
            <div className="value-card big">
              <div className="icon">⚙️</div>
              <h5>Founder-Centric Approach</h5>
              <p> ✓
                At Arvess, founders are at the center of everything we do. We
                don’t believe in generic consulting—our approach is built around
                your vision, stage, and execution reality. <br /><br />
                 ✓ We understand your business model, goals, and growth challenges
                before proposing solutions <br /><br />
                ✓ Strategies are aligned with your current stage—idea, early
                traction, or scale-up
                <br /><br />
                ✓ Clear guidance on what to do now vs. what to delay, saving time
                and capital
                <br /><br />
                ✓ Hands-on support in compliance, funding, and growth execution
                <br /><br />
                ✓ Transparent communication with practical, actionable advice
                <br /><br />
                ✓ Long-term partnership mindset, not one-time service delivery
                <br /><br />
                ✓ Our role is to simplify decision-making, reduce risk, and help
                founders move forward with clarity, confidence, and
                control—while building businesses that are structured,
                compliant, and ready to scale.

              </p>
            </div>

            <div className="value-card">
              <div className="icon">🏆</div>
              <h5>Data-Driven Strategy</h5>
              <p>
                Our decisions are guided by market intelligence, performance
                metrics, and ecosystem insights—ensuring every recommendation is
                backed by data, not assumptions.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">🏛️</div>
              <h5>Government Scheme Alignment</h5>
              <p>
                From MSME and DPIIT to state and central programs, we ensure
                accurate eligibility mapping, compliant documentation, and
                structured execution across funding and incentive schemes.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">📄</div>
              <h5>Agile Startup Structuring</h5>
              <p>
                We design flexible legal, financial, and operational frameworks
                that evolve with your business. From incorporation to compliance
                and internal systems, our structures are built to support speed
                today and scalability tomorrow without creating future
                roadblocks.
              </p>
            </div>

            <div className="value-card">
              <div className="icon">📊</div>
              <h5>Market-Backed Growth Planning</h5>
              <p>
                Our growth strategies are driven by real market insights, not
                assumptions. We analyze industry trends, customer behavior, and
                competitive landscapes to help you plan traction, positioning,
                and expansion with clarity and confidence.
              </p>
            </div>

            <div className="value-card wide">
              <div className="icon">🌍</div>
              <h5>Sustainable & Scalable Models</h5>
              <p>
                We focus on building businesses that last. By aligning revenue
                models, cost structures, and capital planning, we help founders
                create resilient, scalable operations that deliver long-term
                value—not short-term hype.
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

      {/* ================= FAQ SECTION ================= */}
      <section className="home0-faq0 reveal">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-lg-5">
              <div className="faq0-heading-image">
                <img src="./FaqHomeQuestion.png" className="faq0-heading-img" />
                <img src="./FAQHome.png" className="faq0-illustration-img" />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7">
              {/* FAQ 1 */}
              <div
                className={`faq0-item0 ${open === 1 ? "active" : ""}`}
                onClick={() => setOpen(open === 1 ? null : 1)}
              >
                <div className="faq0-question">
                  <h5>
                    <span>1.</span> What services does Arvess provide?
                  </h5>
                  <button className="faq0-toggle">
                    {open === 1 ? "−" : "+"}
                  </button>
                </div>

                {open === 1 && (
                  <p>
                    Arvess offers end-to-end business support, including legal
                    and regulatory compliance, government schemes and funding
                    assistance, financial structuring, branding, digital growth,
                    and strategic consulting.
                  </p>
                )}
              </div>

              {/* FAQ 2 */}
              <div
                className={`faq0-item0 ${open === 2 ? "active" : ""}`}
                onClick={() => setOpen(open === 2 ? null : 2)}
              >
                <div className="faq0-question">
                  <h5>
                    <span>2.</span> Who can work with Arvess?
                  </h5>
                  <button className="faq0-toggle">
                    {open === 2 ? "−" : "+"}
                  </button>
                </div>

                {open === 2 && (
                  <p>
                    Arvess works with idea-stage founders, early-stage startups,
                    MSMEs, and scaling enterprises across multiple industries.
                  </p>
                )}
              </div>

              {/* FAQ 3 */}
              <div
                className={`faq0-item0 ${open === 3 ? "active" : ""}`}
                onClick={() => setOpen(open === 3 ? null : 3)}
              >
                <div className="faq0-question">
                  <h5>
                    <span>3.</span> Does Arvess assist with government schemes?
                  </h5>
                  <button className="faq0-toggle">
                    {open === 3 ? "−" : "+"}
                  </button>
                </div>

                {open === 3 && (
                  <p>
                    Yes. We specialize in MSME, DPIIT, Startup India, and
                    government grants and incentives.
                  </p>
                )}
              </div>
              <div
                className={`faq0-item0 ${open === 4 ? "active" : ""}`}
                onClick={() => setOpen(open === 4 ? null : 4)}
              >
                <div className="faq0-question">
                  <h5>
                    <span>4.</span> How does Arvess ensure legal and financial
                    compliance?
                  </h5>
                  <button className="faq0-toggle">
                    {open === 4 ? "−" : "+"}
                  </button>
                </div>

                {open === 4 && (
                  <p>
                    Our team follows structured legal, financial, and regulatory
                    frameworks, ensuring accuracy, transparency, and adherence
                    to statutory requirements at every stage.
                  </p>
                )}
              </div>

              {/* FAQ 5 */}
              <div
                className={`faq0-item0 ${open === 5 ? "active" : ""}`}
                onClick={() => setOpen(open === 5 ? null : 5)}
              >
                <div className="faq0-question">
                  <h5>
                    <span>5.</span> Does Arvess provide long-term support?
                  </h5>
                  <button className="faq0-toggle">
                    {open === 5 ? "−" : "+"}
                  </button>
                </div>

                {open === 5 && (
                  <p>
                    Absolutely. We focus on long-term partnerships, offering
                    continuous advisory and operational support as your business
                    grows, evolves, and scales.
                  </p>
                )}
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

// import React from "react";

// const Home = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>🚧 Website Under Maintenance</h1>
//       <p style={styles.text}>We’ll be back very soon.</p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "linear-gradient(135deg, #0f172a, #020617)",
//     color: "#ffffff",
//     textAlign: "center",
//     padding: "20px",
//   },
//   title: {
//     fontSize: "2.5rem",
//     marginBottom: "10px",
//     fontWeight: "700",
//   },
//   text: {
//     fontSize: "1.1rem",
//     opacity: 0.85,
//   },
// };

// export default Home;

