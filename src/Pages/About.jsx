import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }, []);

  return (
    <>
      <section className="about-grid-section">
        <div className="container">
          <div className="about-grid">
            {/* IMAGE 1 (BIG TOP) */}
            <div className="grid-img img-1 reveal">
              <img src="./about1.jpeg" alt="" />
            </div>

            {/* IMAGE 2 (BOTTOM LEFT) */}
            <div className="grid-img img-2 reveal">
              <img src="./about2.jpeg" alt="" />
            </div>

            {/* IMAGE 3 (BOTTOM CENTER) */}
            <div className="grid-img img-3 reveal">
              <img src="./about3.jpeg" alt="" />
            </div>

            {/* TEXT BLOCK */}
            <div className="grid-text reveal">
              <span className="about-tag">Our Identity</span>

              <h2>
                Powered by <span>Arvess</span>
              </h2>

              <p>
                Arvess is a professional consulting and outsourcing firm
                dedicated to empowering startups and growing enterprises through
                structured legal, financial, and strategic support. We
                collaborate closely with founders and leadership teams to build
                strong foundations, ensure regulatory compliance, and unlock
                growth opportunities.
                <br />
                <br />
                Our work spans across business incorporation, compliance
                management, funding assistance, investor readiness, branding,
                and digital growth. With a process driven and transparent
                approach, Arvess enables businesses to scale with confidence,
                clarity, and long-term vision.
                <br />
                <br />
                At Arvess, we transform ideas into well-structured, growth-ready
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION CARDS ================= */}
      <section className="arvess-mv-cards">
        <div className="container">
          <div className="row g-5 align-items-stretch reveal">
            {/* MISSION CARD */}
            <div className="col-lg-6">
              <div className="mv-card mission-card">
                <div className="mv-image">
                  <img
                    src="/arvessmission.jpg" // ⬅ public folder image
                    alt="Arvess Mission"
                  />
                </div>

                <div className="mv-content">
                  <span className="mv-tag green">Our Mission</span>
                  <h3>Simplifying the Startup Journey</h3>
                  <p>
                    At Arvess, our mission is to simplify and strengthen the
                    startup journey through a unified support ecosystem. We
                    provide founders and businesses with legal clarity,
                    financial structure, funding guidance, and digital growth
                    strategies so they can focus on building, scaling, and
                    sustaining impactful ventures with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* VISION CARD */}
            <div className="col-lg-6">
              <div className="mv-card vision-card">
                <div className="mv-image">
                  <img
                    src="/arvessmission1.jpg" // ⬅ public folder image
                    alt="Arvess Vision"
                  />
                </div>

                <div className="mv-content">
                  <span className="mv-tag red">Our Vision</span>
                  <h3>Building India’s Most Trusted Startup Partner</h3>
                  <p>
                    Our vision is to become India’s most trusted startup growth
                    partner where strategy meets execution. We aim to empower
                    founders with the right frameworks, insights, and long-term
                    support to transform bold ideas into scalable, compliant,
                    and sustainable businesses across industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE ARVESS ================= */}
      <section className="arvess-why-section">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 arvess-why-content">
              <span className="arvess-badge">About Arvess</span>
              <h2>
                Why Founders <br />
                <span>Choose Arvess</span>
              </h2>

              <p className="lead-text">
                Arvess is more than a consultancy — we are a structured growth
                partner designed to support startups, MSMEs, and emerging
                enterprises at every stage of their journey. From laying strong
                legal and financial foundations to unlocking funding and driving
                scalable growth, we work closely with founders to turn vision
                into execution.
              </p>

              <ul className="arvess-points">
                <li>End-to-end startup & MSME ecosystem support</li>
                <li>Compliance-driven, transparent execution</li>
                <li>Funding, branding & growth under one roof</li>
                <li>Founder-first advisory and execution mindset</li>
                <li>We don’t just advise  we build alongside you, ensuring clarity, confidence, and long-term sustainability.</li>
              </ul>

              <a href="/contact" className="arvess-btn-primary">
                Talk To Our Experts →
              </a>
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="col-lg-6">
              <div className="arvess-image-card">
                <img src="/strategy.jpg" alt="Why Arvess" />

                <div className="floating-tag green">Trusted by Founders</div>
                <div className="floating-tag red">
                  Strategy • Funding • Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="industries-section">
        <div className="container">
          {/* Heading */}
          <div className="industries-header">
            <span className="pill">Industries We Serve</span>
            <h2>
              Powering Growth Across <span>Key Sectors</span>
            </h2>
            <p>
              Arvess supports startups and MSMEs across high-impact industries
              with funding, compliance, branding, and strategic execution.
            </p>
          </div>

          {/* Grid */}
          <div className="industries-grid">
            <div className="industry-card">
              <div className="icon">🩺</div>
              <h5>MedTech & Devices</h5>
              <p>
                Healthcare innovation, diagnostics, and medical technologies.
              </p>
            </div>

            <div className="industry-card">
              <div className="icon">🧬</div>
              <h5>BioTech & Life Sciences</h5>
              <p>Research-driven ventures in life sciences and healthcare.</p>
            </div>

            <div className="industry-card">
              <div className="icon">🌾</div>
              <h5>AgriTech & Food Processing</h5>
              <p>Technology-led agriculture and sustainable food systems.</p>
            </div>

            <div className="industry-card">
              <div className="icon">🤖</div>
              <h5>AI & Deep Tech</h5>
              <p>
                Artificial Intelligence, automation, and deep technology
                startups.
              </p>
            </div>

            <div className="industry-card">
              <div className="icon">💳</div>
              <h5>FinTech & InsurTech</h5>
              <p>Financial innovation, digital payments, and insurance tech.</p>
            </div>

            <div className="industry-card">
              <div className="icon">🎓</div>
              <h5>EdTech & Skilling</h5>
              <p>Education platforms and workforce skilling solutions.</p>
            </div>

            <div className="industry-card">
              <div className="icon">⚡</div>
              <h5>Green & Renewable Energy</h5>
              <p>Sustainable energy, climate tech, and green solutions.</p>
            </div>

            <div className="industry-card">
              <div className="icon">🚗</div>
              <h5>EV & Mobility</h5>
              <p>
                Electric vehicles, mobility platforms, and transport innovation.
              </p>
            </div>

            <div className="industry-card">
              <div className="icon">♻️</div>
              <h5>Sustainability & Waste</h5>
              <p>Waste management, recycling "and" circular economy models.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
