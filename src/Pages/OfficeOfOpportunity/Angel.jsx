import React from "react";

const Angel = () => {
  return (
    <>
      {/* EQUITY INTRO */}
      <section className="equity-alt">
        <div className="equity-wrap">

          <div className="equity-left">
            <h2>What Is Equity Funding?</h2>

            <p>
              Equity funding means raising growth capital by offering a share of
              ownership in your company to investors. This capital helps founders
              scale faster without repayment pressure.
            </p>

            <ul>
              <li>No repayment obligation</li>
              <li>Strategic investor support</li>
              <li>Faster scale & market access</li>
            </ul>

          </div>

          <div className="equity-right">
            <div className="equity-card">Angel Investors</div>
            <div className="equity-card highlight">Venture Capital</div>
            <div className="equity-card">Family Offices</div>
          </div>

        </div>
      </section>

      {/* EQUITY V2 */}
      <section className="equity-v2">
        <div className="equity-v2-wrap">

          <div className="equity-v2-content">
            <span className="equity-tag">Equity Funding</span>

            <h2>What Is Equity Funding?</h2>

            <p>
              Equity funding allows startups to raise growth capital by offering
              a share of ownership to investors. This enables faster expansion
              without repayment pressure.
            </p>

          </div>

          <div className="equity-v2-cards">
            <div className="equity-box one">
              Scalable startups with strong product–market fit
            </div>

            <div className="equity-box two">
              Tech, D2C & innovation-led ventures ready to expand
            </div>

            <div className="equity-box three">
              Founders seeking strategic investors with sector expertise
            </div>
          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="equity-workflow-v2">
        <h2 className="workflow-title">Equity Funding Workflow</h2>
        <div className="workflow-line"></div>

        <div className="workflow-v2">

          <div className="step right">
            <span className="step-no">01</span>
            <div className="step-box">
              <h4>Free Consultation & Investor Mapping</h4>
              <p>Assess stage, valuation, and funding goals</p>
            </div>
          </div>

          <div className="step left">
            <span className="step-no">02</span>
            <div className="step-box">
              <h4>Investor-Ready Documentation</h4>
              <p>Pitch deck, financial model, teaser, cap table</p>
            </div>
          </div>

          <div className="step right">
            <span className="step-no">03</span>
            <div className="step-box">
              <h4>Targeted Investor Outreach</h4>
              <p>Warm introductions to VCs, Angels, Family Offices</p>
            </div>
          </div>

          <div className="step left">
            <span className="step-no">04</span>
            <div className="step-box">
              <h4>Pitch Meetings & Negotiations</h4>
              <p>Deal structuring, valuation scenarios</p>
            </div>
          </div>

          <div className="step right">
            <span className="step-no">05</span>
            <div className="step-box">
              <h4>Investor Due Diligence</h4>
              <p>Data room management & compliance checks</p>
            </div>
          </div>

          <div className="step left">
            <span className="step-no">06</span>
            <div className="step-box">
              <h4>Term Sheet & Legal Closure</h4>
              <p>SHA, SSA, ROC filings & fund transfer</p>
            </div>
          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="equity-approach-v2">
        <div className="approach-wrap">

          <div className="approach-head">
            <h2>Our Approach to Securing Equity Capital</h2>
            <span className="approach-line"></span>
          </div>

          <div className="approach-grid">
            <div className="approach-card"><span>01</span><p>Investor Fit Analysis</p></div>
            <div className="approach-card"><span>02</span><p>Valuation & Dilution Planning</p></div>
            <div className="approach-card"><span>03</span><p>Narrative & Pitch Development</p></div>
            <div className="approach-card"><span>04</span><p>Warm Investor Outreach</p></div>
            <div className="approach-card"><span>05</span><p>Negotiation Advisory</p></div>
            <div className="approach-card highlight"><span>06</span><p>Closing & Fund Transfer Support</p></div>
          </div>

        </div>
      </section>

      {/* INVESTOR CONNECT */}
      <section className="investor-connect-v2">
        <div className="investor-wrap">

          <h2 className="investor-title">
            Investor Categories We Connect You To
          </h2>

          <div className="investor-flow">
            <div className="investor-item left"><span>01</span><h4>Venture Capital Funds (VCs)</h4></div>
            <div className="investor-item right"><span>02</span><h4>Angel Investors & Syndicates</h4></div>
            <div className="investor-item left"><span>03</span><h4>Family Offices</h4></div>
            <div className="investor-item right"><span>04</span><h4>Private Equity Firms</h4></div>
            <div className="investor-item left"><span>05</span><h4>Corporate Venture Arms</h4></div>
          </div>

        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="deliverables-v2">
        <h2 className="deliverables-title">Documents & Grant Deliverables</h2>

        <div className="deliverables-grid">
          <div className="deliverable-card">
            <h4>Company Profile & Compliance</h4>
            <p>DPIIT profile, incorporation, statutory & regulatory docs</p>
          </div>

          <div className="deliverable-card highlight">
            <h4>Founder & Team</h4>
            <p>Founder bios, credentials, governance & roles</p>
          </div>

          <div className="deliverable-card">
            <h4>Financials & Valuation</h4>
            <p>Financial models, projections, valuation logic</p>
          </div>

          <div className="deliverable-card">
            <h4>Pitch & Market Collateral</h4>
            <p>Pitch deck, teaser, GTM & storytelling assets</p>
          </div>

          <div className="deliverable-card">
            <h4>Investor Outreach Kit</h4>
            <p>Target list, outreach strategy & follow-ups</p>
          </div>
        </div>

        <h3 className="desk-title">Meet the Equity Funding Desk</h3>

        <div className="desk-chips">
          <span>Investor Relations Manager</span>
          <span>Pitch Deck Designer</span>
          <span>Financial Analyst</span>
          <span>Legal Advisor</span>
          <span>Negotiation Coach</span>
          <span>Funding Strategist</span>
        </div>
      </section>
      
    </>
  );
};

export default Angel;
