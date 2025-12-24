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
            This is where startup stories meet structured funding. At The House
            of Startups, we’ve built the Office of Opportunity to help early
            stage ventures secure equity-free capital through India’s leading
            government grants. From DPIIT certification to fund disbursement,
            we manage it all with precision, speed, and startup-first empathy.
          </p>
        </div>
      </section>

      {/* ===== GRANT TYPES ===== */}
      <section className="grant-wrapper">
        <div className="grant-layout">

          <div className="grant-left">
            <h2>Government Grants</h2>
            <p>
              Equity-free, non-repayable funding provided by government bodies to
              support early-stage and impact-driven startups across India.
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
              <p>Startups with strong innovation & scalability potential</p>
            </div>

            <div className="grant-block green-block">
              <h4>Focused Sectors</h4>
              <p>Biotech, Agri, Hardware, AI & IoT based ventures</p>
            </div>

            <div className="grant-block white-block">
              <h4>Impact Driven</h4>
              <p>Women-led, rural or social-impact startups</p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== WORKFLOW ===== */}
      <section className="workflow-section">
        <h3 className="workflow-title">– Grant Application Workflow –</h3>

        <div className="workflow-grid">
          <div className="workflow-card">
            <span>01</span>
            <p>Free Consultation<br />& Scheme Mapping</p>
          </div>

          <div className="workflow-card">
            <span>02</span>
            <p>Document Preparation<br />(Deck + Financials + Profile)</p>
          </div>

          <div className="workflow-card">
            <span>03</span>
            <p>Incubator Submission /<br />Scheme Portal Upload</p>
          </div>

          <div className="workflow-card">
            <span>04</span>
            <p>Live Pitch or Interview<br />Round Support</p>
          </div>

          <div className="workflow-card">
            <span>05</span>
            <p>Evaluation Round &<br />Clarification Filling</p>
          </div>

          <div className="workflow-card">
            <span>06</span>
            <p>Grant Sanction Letter +<br />Disbursement Handoff</p>
          </div>
        </div>
      </section>
      <section className="grant-approach-rgw">
  <h2>
    Our Approach to Securing <span>Startup Grants</span>
  </h2>

  <div className="grant-image-wrap">
    <img src="./startupimage.png" alt="Startup Grant Discussion" />
  </div>

  <div className="grant-steps-grid">

    <div className="grant-step-box">
      <span>01</span>
      <p>Grant Matching & Eligibility Check</p>
    </div>

    <div className="grant-step-box">
      <span>02</span>
      <p>Deck & Financials Creation</p>
    </div>

    <div className="grant-step-box">
      <span>03</span>
      <p>Incubator & Application Management</p>
    </div>

    <div className="grant-step-box">
      <span>04</span>
      <p>Pitch & Interview Preparation</p>
    </div>

    <div className="grant-step-box">
      <span>05</span>
      <p>Disbursement Follow-through</p>
    </div>

  </div>
</section>
<section className="simple-grants">
  <h2>
    Popular <span>Government Grants</span>
  </h2>

  <div className="grant-grid">

    <div className="grant-card green">
      Startup India Seed Fund <br /> (SISFS)
    </div>

    <div className="grant-card white">
      PRAYAS <br /> DST
    </div>

    <div className="grant-card green">
      TIDE 2.0 <br /> MeitY
    </div>

    <div className="grant-card white">
      BIRAC BIG <br /> Grant
    </div>

    <div className="grant-card red">
      MSME Innovation <br /> Grant
    </div>

    <div className="grant-card white">
      Find Your <br /> Best Fit
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
        <summary>Company Documents</summary>
        <ul>
          <li>Certificate of Incorporation</li>
          <li>DPIIT Recognition</li>
          <li>Shareholding Pattern</li>
        </ul>
      </details>

      <details className="doc-item">
        <summary>Founder & Team Credentials</summary>
        <ul>
          <li>Founder Profiles</li>
          <li>Past Experience</li>
          <li>Key Team Details</li>
        </ul>
      </details>

      <details className="doc-item">
        <summary>Financials & Forecasts</summary>
        <ul>
          <li>Financial Projections</li>
          <li>Revenue Model</li>
          <li>Cash Flow Statements</li>
        </ul>
      </details>

      <details className="doc-item">
        <summary>Product & Market Assets</summary>
        <ul>
          <li>Pitch Deck</li>
          <li>Market Research</li>
          <li>Product Demo</li>
        </ul>
      </details>

      <details className="doc-item red">
        <summary>Application & Compliance Kit</summary>
        <ul>
          <li>Grant Forms</li>
          <li>Declarations</li>
          <li>Submission Checklist</li>
        </ul>
      </details>

    </div>

    {/* RIGHT : IMAGE */}
    <div className="grant-image">
      <img
        src="/startupimage1.jpg"
        alt="Grant Documentation"
      />
    </div>

  </div>
</section>
<section className="gm-zigzag">
  <h2 className="gmz-title">
    The <span>Grant Ministries</span>
  </h2>

  <div className="gmz-wrapper">

    <div className="gmz-item left">DPIIT</div>
    <div className="gmz-item right">MeitY</div>

    <div className="gmz-item left">DST</div>
    <div className="gmz-item right highlight">Ministry of MSME</div>

    <div className="gmz-item left">DBT</div>
    <div className="gmz-item right">NABARD</div>

    <div className="gmz-item left">NITI Aayog</div>
    <div className="gmz-item right">Karnataka Startup Mission</div>

    <div className="gmz-item left">Startup Odisha</div>
    <div className="gmz-item right">Kerala Startup Mission</div>

  </div>
</section>
<section className="why-arvess-section">
  <h2 className="why-arvess-title">
    Why Founders Choose <span>Arvess</span>
  </h2>

  <div className="why-arvess-list">

    <div className="why-arvess-item red">
      <img src="/images/founder1.jpg" alt="Funded Startups" />
      <p>150+ startups funded across central & state schemes</p>
    </div>

    <div className="why-arvess-item green">
      <img src="/images/founder2.jpg" alt="Templates" />
      <p>ATS-ready templates used by leading incubators</p>
    </div>

    <div className="why-arvess-item green">
      <img src="/images/founder3.jpg" alt="Fast Approval" />
      <p>Partner incubators reduce evaluation time by 30–40%</p>
    </div>

    <div className="why-arvess-item red">
      <img src="/images/founder4.jpg" alt="Support" />
      <p>End-to-end support: pitch, compliance & fundraising</p>
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
        Yes, startups can apply for multiple grants if eligibility criteria
        are met for each scheme.
      </div>
    </div>

    <div className="faq7-item7-rgw7">
      <div className="faq7-question7-rgw7">
        Is the funding equity-free?
        <span>+</span>
      </div>
      <div className="faq7-answer7-rgw7">
        Most government grants are equity-free and do not dilute ownership.
      </div>
    </div>

    <div className="faq7-item7-rgw7">
      <div className="faq7-question7-rgw7">
        How long does the grant process take?
        <span>+</span>
      </div>
      <div className="faq7-answer7-rgw7">
        The process usually takes between 3 to 9 months depending on the scheme.
      </div>
    </div>

    <div className="faq7-item7-rgw7">
      <div className="faq7-question7-rgw7">
        What is the success rate?
        <span>+</span>
      </div>
      <div className="faq7-answer7-rgw7">
        Success depends on eligibility, documentation quality, and evaluation
        performance.
      </div>
    </div>

  </div>
</section>


    </>
  );
};

export default StaartupIndiaFund;
