import React from "react";


const Privatefunding = () => {
  return (
    <>
      {/* HERO */}
      <section className="pf-hero">
        <h1>Your Gateway to Global Investors</h1>

        <p>
          From pre-seed to pre-IPO, we help founders raise equity capital from
          leading Venture Capitalists, Angel Investors, and Family Offices. Our
          investor network spans India and global markets, while our process
          covers everything from pitch readiness to term sheet closure.
        </p>

        <button className="pf-btn">
          Get Started With A Free Funding Strategy Call →
        </button>
      </section>
      <section className="pf-equity-wrap">

  {/* EQUITY TEXT */}
  <div className="pf-equity-content">
    <h2>What Is Equity Funding?</h2>

    <p>
      Equity funding means raising growth capital by offering a share of
      ownership in your company to investors. This capital is used to
      accelerate expansion, develop products, enter new markets, and scale
      operations—without the repayment burden of loans.
    </p>
  </div>

  {/* ELIGIBLE CARDS */}
  <div className="pf-eligible-boxes">

    <div className="pf-eligible-card">
      <h4>Scalable startups</h4>
      <p>with strong product-market fit</p>
    </div>

    <div className="pf-eligible-card">
      <h4>Tech, D2C, and innovation-led ventures</h4>
      <p>ready to expand</p>
    </div>

    <div className="pf-eligible-card">
      <h4>
        Founders seeking <span>strategic investors</span>
      </h4>
      <p>with sector expertise</p>
    </div>

  </div>
</section>
<section className="pf-workflow">

  <h2 className="pf-workflow-title">Equity Funding Workflow</h2>

  <div className="pf-workflow-grid">

    <div className="pf-workflow-card">
      <span>01</span>
      <h4>Free Consultation & Investor Mapping</h4>
      <p>Assess stage, valuation, and funding goals</p>
    </div>

    <div className="pf-workflow-card">
      <span>02</span>
      <h4>Investor-Ready Documentation</h4>
      <p>Pitch deck, financial model, teaser, cap table</p>
    </div>

    <div className="pf-workflow-card">
      <span>03</span>
      <h4>Targeted Investor Outreach</h4>
      <p>Warm introductions to VCs, Angels, Family Offices</p>
    </div>

    <div className="pf-workflow-card">
      <span>04</span>
      <h4>Pitch Meetings & Negotiations</h4>
      <p>Deal structure alignment, valuation scenarios</p>
    </div>

    <div className="pf-workflow-card">
      <span>05</span>
      <h4>Investor Due Diligence</h4>
      <p>Data room management, compliance verification</p>
    </div>

    <div className="pf-workflow-card">
      <span>06</span>
      <h4>Term Sheet & Legal Closure</h4>
      <p>SHA, SSA, ROC filings, fund transfer</p>
    </div>

    <div className="pf-workflow-card">
      <span>07</span>
      <h4>Post-Funding Support</h4>
      <p>Investor reporting, governance, growth milestones</p>
    </div>

  </div>
</section>
<section className="pf-approach-v2">

  <div className="pf-approach-card-v2">

    <div className="pf-approach-text">
      <h2>Our Approach to Securing Equity Capital</h2>

      <ul>
        <li>Investor Fit Analysis</li>
        <li>Valuation & Dilution Planning</li>
        <li>Narrative & Pitch Development</li>
        <li>Warm Outreach</li>
        <li>Negotiation Advisory</li>
        <li>Closing Support</li>
      </ul>
    </div>

    <div className="pf-approach-image">
      <img src="./privatefundimage.jpg" alt="Equity Funding Strategy" />
    </div>

  </div>

</section>
<section className="pf-investors-clean">

  <h2 className="pf-investors-title">
    Investor Categories We Connect You To
  </h2>

  <div className="pf-investors-clean-grid">

    <div className="pf-clean-card">
      Venture Capital Funds (VCs)
    </div>

    <div className="pf-clean-card">
      Angel Investors & Syndicates
    </div>

    <div className="pf-clean-card">
      Family Offices
    </div>

    <div className="pf-clean-card pf-red">
      Private Equity Firms
    </div>

    <div className="pf-clean-card">
      Corporate Venture Arms
    </div>

    <div className="pf-clean-card pf-outline">
      Ready to Find Your Fit?
    </div>

  </div>

</section>
<section className="pf-docs">

  <h2 className="pf-docs-title">Documents & Grant Deliverables</h2>

  <div className="pf-docs-list">
    <div className="pf-doc-item">Company Profile & Compliance</div>
    <div className="pf-doc-item">Founder & Team</div>
    <div className="pf-doc-item">Financials & Valuation</div>
    <div className="pf-doc-item">Pitch & Market Collateral</div>
    <div className="pf-doc-item">Investor Outreach Kit</div>
  </div>

  <h3 className="pf-desk-title">Meet the Equity Funding Desk</h3>

  <div className="pf-desk-roles">
    <span>Investor Relations Manager</span>
    <span>Pitch Deck Designer</span>
    <span>Financial Analyst</span>
    <span>Legal Advisor</span>
    <span>Negotiation Coach</span>
    <span>Funding Strategist</span>
  </div>

</section>
<section className="pf-faq">
  <h2 className="pf-faq-title">Frequently Asked Questions</h2>

  <div className="pf-faq-list">

    <details className="pf-faq-item">
      <summary>When should I raise equity funding?</summary>
      <p>You should consider raising equity funding when you have product-market fit and a clear growth plan.</p>
    </details>

    <details className="pf-faq-item">
      <summary>How much equity should I dilute?</summary>
      <p>Typically founders dilute 10–25% per funding round, depending on valuation and growth stage.</p>
    </details>

    <details className="pf-faq-item">
      <summary>How long does it take?</summary>
      <p>The equity funding process usually takes 3–6 months depending on readiness and investor interest.</p>
    </details>

    <details className="pf-faq-item">
      <summary>Do you guarantee funding?</summary>
      <p>No funding can be guaranteed, but we maximize your chances through preparation and investor access.</p>
    </details>

    <details className="pf-faq-item">
      <summary>Do you work with global investors?</summary>
      <p>Yes, we connect founders with both Indian and global investors across sectors.</p>
    </details>

  </div>
</section>




    </>
  );
};

export default Privatefunding;
