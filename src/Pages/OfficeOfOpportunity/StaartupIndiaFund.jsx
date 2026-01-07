import React, { useEffect } from "react";

const StaartupIndiaFund = () => {
  // ✅ ANIMATION LOGIC (SAHI JAGAH)
  useEffect(() => {
    const cards = document.querySelectorAll(".workflow-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("active");
      }, i * 200);
    });
  }, []);

  return (
    <>
      {/* ===== FUNDING HERO SECTION ===== */}
      <section className="funding-hero">
        <div className="funding-container">
          <h1>Funding Pathways for Entrepreneurs</h1>

          <p>
            This is where ideas turn into funded opportunities. At Arvess, we
            help early-stage startups navigate structured funding routes and
            access equity-free capital through leading government grant
            programs. From DPIIT recognition to end-to-end grant execution, we
            manage the entire journey with clarity, efficiency, and a
            founder-first approach—so you can focus on building, not chasing
            paperwork.
          </p>
        </div>
      </section>

      {/* ===== GRANT TYPES ===== */}
      <section className="grant-wrapper">
        <div className="grant-layout">
          <div className="grant-left">
            <h2>Government Grants</h2>
            <p>
              Access equity-free, non-repayable capital offered by government
              institutions to support early-stage, innovation-driven, and
              impact-focused startups across India. These grants are designed to
              accelerate product development, validation, and scalable growth
              without dilution.
            </p>

            <div className="color-bar">
              <span className="red"></span>
              <span className="green"></span>
              <span className="white"></span>
            </div>
          </div>

          <div className="grant-right">
            <div className="grant-block red-block">
              <h4>DPIIT Recognized</h4>
              <p>
                Startups officially recognized under DPIIT with strong
                innovation, scalability, and commercial potential.
              </p>
            </div>

            <div className="grant-block green-block">
              <h4>Priority Sectors</h4>
              <p>
                Biotech, AgriTech, Hardware, AI, IoT, and deep-tech driven
                ventures aligned with national innovation goals.
              </p>
            </div>

            <div className="grant-block white-block">
              <h4>Impact-Focused Startups</h4>
              <p>
                Women-led enterprises, rural innovation ventures, and startups
                creating measurable social or economic impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORKFLOW ===== */}
      <section className="workflow-section">
        <h3 className="workflow-title">Grant Application Journey</h3>

        <div className="workflow-grid">
          <div className="workflow-card">
            <span>01</span>
            <p>
              Discovery Call & Scheme Alignment
              <br />
              We begin with a no-cost consultation to understand your startup,
              eligibility, and map the most relevant government grant
              opportunities.
            </p>
          </div>

          <div className="workflow-card">
            <span>02</span>
            <p>
              Application & Documentation Build
              <br />
              Our team prepares end-to-end documentation including pitch deck
              refinement, financial projections, and startup profiling as per
              scheme requirements.
            </p>
          </div>

          <div className="workflow-card">
            <span>03</span>
            <p>
              Portal & Incubator Filing
              <br />
              We manage submissions across incubator platforms and official
              scheme portals, ensuring accuracy and compliance.
            </p>
          </div>

          <div className="workflow-card">
            <span>04</span>
            <p>
              Pitch & Interaction Support
              <br />
              Get hands-on assistance for demo days, interviews, and
              presentation rounds with structured guidance and mock prep
            </p>
          </div>

          <div className="workflow-card">
            <span>05</span>
            <p>
              Evaluation & Query Management
              <br />
              We handle reviewer queries, clarifications, and follow-ups during
              the evaluation phase to keep your application on track.
            </p>
          </div>

          <div className="workflow-card">
            <span>06</span>
            <p>
              Approval & Fund Disbursement Support
              <br />
              From sanction communication to final handover, we assist through
              grant approval and disbursement coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="grant-approach-rgw">
        <h2>
          Our Proven Method to <span>Secure Startup Grants</span>
        </h2>

        <div className="grant-steps-grid">
          <div className="grant-step-box">
            <span>01</span>
            <h3>Grant Discovery & Eligibility Assessment</h3>
            <p>
              We identify the most suitable government grant programs based on
              your startup’s sector, stage, and innovation profile, ensuring
              eligibility before applying.
            </p>
          </div>

          <div className="grant-step-box">
            <span>02</span>
            <h3>Pitch Deck & Financial Structuring</h3>
            <p>
              Our team builds a compelling pitch deck and realistic financial
              projections aligned with grant evaluation criteria and DPIIT
              expectations
            </p>
          </div>

          <div className="grant-step-box">
            <span>03</span>
            <h3>Incubator Coordination & Application Handling</h3>
            <p>
              We manage end-to-end coordination with empanelled incubators and
              handle portal submissions with complete accuracy.
            </p>
          </div>

          <div className="grant-step-box">
            <span>04</span>
            <h3>Pitch, Demo & Interview Readiness</h3>
            <p>
              Founders receive hands-on guidance for presentations, interviews,
              and Q&A rounds to confidently represent their startup vision.
            </p>
          </div>

          <div className="grant-step-box">
            <span>05</span>
            <h3>Post-Approval & Fund Disbursement Support</h3>
            <p>
              We stay involved after approval to ensure smooth documentation,
              compliance, and timely grant disbursement.
            </p>
          </div>
        </div>
      </section>

      <section className="simple-grants">
        <h2>Key Government Grant Programs for Startups</h2>

        <div className="grant-grid">
          <div className="grant-card green">
            Startup India Seed Fund (SISFS) <br />
            <p>
              Early-stage funding support to help startups validate ideas, build
              prototypes, and achieve initial market traction.
            </p>
          </div>

          <div className="grant-card white">
            PRAYAS - DST
            <p>
              Assistance for innovators and technology-driven startups to
              develop proof-of-concept and working prototypes.
            </p>
          </div>

          <div className="grant-card green">
            TIDE 2.0 - MeitY
            <p>
              Focused funding and incubation support for startups working in
              emerging technologies such as AI, IoT, and digital innovation.
            </p>
          </div>

          <div className="grant-card white">
            BIRAC BIG Grant
            <p>
              Specialized grants for biotech and life-science startups aimed at
              accelerating research, product development, and commercialization.
            </p>
          </div>

          <div className="grant-card red">
            MSME Innovation Support
            <p>
              Government-backed funding to encourage innovation, product
              development, and competitiveness among MSMEs and startups.
            </p>
          </div>

          <div className="grant-card white">
            Find the Right Grant for You
            <p>
              Not sure which scheme fits your startup? We evaluate your profile
              and map you to the most relevant funding opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="grant-docs">
        <h2 className="grant-title">
          Documents & <span>Grant Deliverables</span>
        </h2>
        <div className="grant-wrap">
          {/* LEFT : ACCORDIONS */}
          <div className="grant-accordion">
            <details className="doc-item">
              <summary>Business & Legal Records</summary>
              <ul>
                <li>Certificate of Incorporation</li>
                <li>DPIIT Recognition</li>
                <li>Shareholding Pattern</li>
              </ul>
            </details>

            <details className="doc-item">
              <summary>Founder & Core Team Profiles</summary>
              <ul>
                <li>Founder Profiles</li>
                <li>Past Experience</li>
                <li>Key Team Details</li>
              </ul>
            </details>

            <details className="doc-item">
              <summary>Financial Projections & Estimates</summary>
              <ul>
                <li>Financial Projections</li>
                <li>Revenue Model</li>
                <li>Cash Flow Statements</li>
              </ul>
            </details>

            <details className="doc-item">
              <summary>Product & Market Information</summary>
              <ul>
                <li>Pitch Deck</li>
                <li>Market Research</li>
                <li>Product Demo</li>
              </ul>
            </details>

            <details className="doc-item red">
              <summary>Application & Compliance Package</summary>
              <ul>
                <li>Grant Forms</li>
                <li>Declarations</li>
                <li>Submission Checklist</li>
              </ul>
            </details>
          </div>

          {/* RIGHT : IMAGE */}
          <div className="grant-image">
            <img src="/startupimage1.jpeg" alt="Grant Documentation" />
          </div>
        </div>
      </section>

      <section className="gm-zigzag">
        <h2 className="gmz-title">
          The <span>Grant Ministries</span>
        </h2>

        <div className="gmz-wrapper">
          <div className="gmz-item left">
            DPIIT (Department for Promotion of Industry & Internal Trade)
          </div>
          <div className="gmz-item right">
            MeitY (Ministry of Electronics & Information Technology)
          </div>

          <div className="gmz-item left">
            DST (Department of Science & Technology)
          </div>
          <div className="gmz-item right highlight">Ministry of MSME</div>

          <div className="gmz-item left">DBT (Department of Biotechnology)</div>
          <div className="gmz-item right">
            NABARD – Rural, agri, and development-focused funding
          </div>

          <div className="gmz-item left">
            NITI Aayog – Policy-driven innovation initiatives
          </div>
          <div className="gmz-item right">
            Karnataka Startup Mission – State-backed startup incentives
          </div>

          <div className="gmz-item left">
            Startup Odisha – Early-stage ecosystem support
          </div>
          <div className="gmz-item right">
            Kerala Startup Mission – Innovation and technology grants
          </div>
        </div>
      </section>

      <section className="why-arvess-section">
        <h2 className="why-arvess-title">
          Why Founders Trust <span>Arvess</span>
        </h2>

        <div className="why-arvess-list">
          <div className="why-arvess-item red">
            <img src="/images/founder1.jpg" alt="Funded Startups" />
            <p>
              Proven Funding Track Record <br />
              Over 150+ startups supported through successful central and state
              government funding programs.
            </p>
          </div>

          <div className="why-arvess-item green">
            <img src="/images/founder2.jpg" alt="Templates" />
            <p>
              Incubator-Approved Documentation <br />
              We use incubator-aligned, ATS-friendly templates designed to meet
              evaluation and screening standards.
            </p>
          </div>

          <div className="why-arvess-item green">
            <img src="/images/founder3.jpg" alt="Fast Approval" />
            <p>
              Faster Evaluation Cycles <br />
              Our strong incubator partnerships help reduce approval timelines
              by 30–40%.
            </p>
          </div>

          <div className="why-arvess-item red">
            <img src="/images/founder4.jpg" alt="Support" />
            <p>
              End-to-End Startup Support <br />
              From pitch decks and compliance to grant execution and
              fundraising, we handle everything under one roof
            </p>
          </div>
        </div>
      </section>

      
      <section className="faq7-section7-rgw7">
        <h2 className="faq7-heading7-rgw7">Frequently Asked Questions</h2>

        <div className="faq7-wrapper7-rgw7">
          <div className="faq7-item7-rgw7 active">
            <div className="faq7-question7-rgw7">
              Who is eligible for government startup grants?
              <span>−</span>
            </div>
            <div className="faq7-answer7-rgw7">
              Registered startups under Startup India with innovative ideas and
              compliance with scheme guidelines are eligible.
            </div>
          </div>

          <div className="faq7-item7-rgw7">
            <div className="faq7-question7-rgw7">
              Can I apply for multiple grants at once?
              <span>+</span>
            </div>
            <div className="faq7-answer7-rgw7">
              Yes, startups can apply for multiple grants if eligibility
              criteria are met for each scheme.
            </div>
          </div>

          <div className="faq7-item7-rgw7">
            <div className="faq7-question7-rgw7">
              Is the funding equity-free?
              <span>+</span>
            </div>
            <div className="faq7-answer7-rgw7">
              Most government grants are equity-free and do not dilute
              ownership.
            </div>
          </div>

          <div className="faq7-item7-rgw7">
            <div className="faq7-question7-rgw7">
              How long does the grant process take?
              <span>+</span>
            </div>
            <div className="faq7-answer7-rgw7">
              The process usually takes between 3 to 9 months depending on the
              scheme.
            </div>
          </div>

          <div className="faq7-item7-rgw7">
            <div className="faq7-question7-rgw7">
              What is the success rate?
              <span>+</span>
            </div>
            <div className="faq7-answer7-rgw7">
              Success depends on eligibility, documentation quality, and
              evaluation performance.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaartupIndiaFund;
