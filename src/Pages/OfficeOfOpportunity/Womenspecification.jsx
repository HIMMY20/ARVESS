import React from "react";

const Womenspecification = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="funding-hero-v2">
        <div className="hero-box">
          <h1>Funding Pathways for Entrepreneurs</h1>
          <p>
            This is where startup stories meet structured funding. At The House
            of Startups, we help early-stage ventures secure equity-free capital
            through India’s leading government grants.
          </p>
        </div>
      </section>

      {/* GRANTS INFO */}
      <section className="grants-alt-section">
        <div className="grants-alt-container">

          <div className="grants-alt-left">
            <h2>What Are Government Grants?</h2>
            <p>
              Government grants are non-repayable, equity-free funds offered by
              central and state ministries to support early-stage startups
              working on innovative solutions.
            </p>
            <div className="grants-alt-line"></div>
          </div>

          <div className="grants-alt-right">
            <div className="grants-alt-card green">
              DPIIT-recognized startups with strong innovation potential
            </div>

            <div className="grants-alt-card red">
              Sector-specific ventures in biotech, agri, hardware, or AI/IoT
            </div>

            <div className="grants-alt-card white">
              Women-led, rural, or impact-focused startups
            </div>
          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="workflow-alt-section">
        <h3 className="workflow-alt-heading">
          – Grant Application Workflow –
        </h3>

        <div className="workflow-alt-timeline">
          <div className="workflow-alt-step left">
            <span className="step-no">01</span>
            <p>Free Consultation & Scheme Mapping</p>
          </div>

          <div className="workflow-alt-step right">
            <span className="step-no">02</span>
            <p>Document Preparation (Deck + Financials + Profile)</p>
          </div>

          <div className="workflow-alt-step left">
            <span className="step-no">03</span>
            <p>Incubator Submission / Scheme Portal Upload</p>
          </div>

          <div className="workflow-alt-step right">
            <span className="step-no">04</span>
            <p>Live Pitch or Interview Round Support</p>
          </div>

          <div className="workflow-alt-step left">
            <span className="step-no">05</span>
            <p>Evaluation Round & Clarification Filling</p>
          </div>

          <div className="workflow-alt-step right">
            <span className="step-no">06</span>
            <p>Grant Sanction Letter + Disbursement Handoff</p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-clean">
        <div className="approach-clean-container">
          <h2 className="approach-clean-title">
            Our Approach to Securing Startup Grants
          </h2>

          <div className="approach-clean-grid">
            <div className="approach-item"><span>01</span><p>Grant Matching & Eligibility Check</p></div>
            <div className="approach-item"><span>02</span><p>Deck & Financials Creation</p></div>
            <div className="approach-item"><span>03</span><p>Incubator & Application Management</p></div>
            <div className="approach-item"><span>04</span><p>Pitch & Interview Preparation</p></div>
            <div className="approach-item"><span>05</span><p>Disbursement Follow-through</p></div>
          </div>
        </div>
      </section>

      {/* GRANT SCHEMES */}
      <section className="grant-flow-strip">
        <h2 className="grant-flow-title">
          Explore Popular Government Grant Schemes
        </h2>

        <div className="grant-flow">
          <div className="flow-item"><span>01</span>Startup India Seed Fund (SISFS)</div>
          <div className="flow-item"><span>02</span>PRAYAS – DST</div>
          <div className="flow-item"><span>03</span>TIDE 2.0 – MeitY</div>
          <div className="flow-item"><span>04</span>BIRAC BIG Grant</div>
          <div className="flow-item"><span>05</span>MSME Innovation Grant</div>
          <div className="flow-item highlight"><span>06</span>Ready to Find Your Fit?</div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="grant-new-section">
        <h2 className="grant-title">Documents & Grant Deliverables</h2>

        <div className="grant-split">
          <div className="grant-docs">
            <div className="doc-item"><span>01</span>Company Documents</div>
            <div className="doc-item"><span>02</span>Founder & Team Credentials</div>
            <div className="doc-item"><span>03</span>Financials & Forecasts</div>
            <div className="doc-item"><span>04</span>Product & Market Assets</div>
            <div className="doc-item"><span>05</span>Application & Compliance Kit</div>
          </div>

          <div className="grant-ministry">
            <h3>The Grant Ministries</h3>
            <div className="ministry-tags">
              <span>DPIIT</span>
              <span>MeitY</span>
              <span>DST</span>
              <span>DBT</span>
              <span>Ministry of MSME</span>
              <span>NABARD</span>
              <span>NITI Aayog</span>
              <span>Karnataka Startup Mission</span>
              <span>Startup Odisha</span>
              <span>Kerala Startup Mission</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq9-clean9">
        <h2 className="faq9-heading9">Frequently Asked Questions</h2>

        <div className="faq9-grid9">
          <div className="faq9-box9"><span className="faq9-no9">01</span><h4>Who is eligible?</h4><p>DPIIT-recognized startups with innovative ideas.</p></div>
          <div className="faq9-box9"><span className="faq9-no9">02</span><h4>Multiple grants?</h4><p>Yes, if eligibility criteria are met.</p></div>
          <div className="faq9-box9"><span className="faq9-no9">03</span><h4>Equity free?</h4><p>Yes, most grants are non-repayable.</p></div>
          <div className="faq9-box9"><span className="faq9-no9">04</span><h4>Timeline?</h4><p>Usually 3–9 months.</p></div>
          <div className="faq9-box9"><span className="faq9-no9">05</span><h4>Success rate?</h4><p>Strong documentation improves chances.</p></div>
        </div>
      </section>
    </>
  );
};

export default Womenspecification;
