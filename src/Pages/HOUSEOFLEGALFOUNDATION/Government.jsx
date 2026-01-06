import React from "react";

const Government = () => {
  return (
    <>
      <section className="ci-section">
        <div className="ci-container">
          <div className="ci-content">
            <h1>
              Register Your MSME / <span>Udyam</span>
            </h1>

            <p>
              Get your business officially recognized under the MSME (Micro,
              Small & Medium Enterprise) framework with Arvess. We manage the
              complete Udyam registration process with precision helping you
              access government benefits, subsidies, priority lending, and
              MSME-specific opportunities. Our structured approach ensures a
              fast, accurate, and fully compliant registration with zero hassle.
            </p>

            <div className="ci-free-box">
              <h4>
                What You Receive with MSME / <span>Udyam Registration</span>
              </h4>

              <div className="ci-icons">
                <div className="ci-item">
                  <span>🆔</span>
                  <p>Udyam Registration Number</p>
                  <p>
                    Your unique MSME identification number issued by the
                    Government of India for official recognition.
                  </p>
                </div>

                <div className="ci-item">
                  <span>📄</span>
                  <p>Udyam Registration Certificate</p>
                  <p>
                    Digitally issued e-certificate validating your MSME status
                    for banks, tenders, and government schemes.
                  </p>
                </div>

                <div className="ci-item">
                  <span>✅</span>
                  <p>Eligibility & Benefit Mapping</p>
                  <p>
                    Assessment of applicable subsidies, incentives, funding
                    schemes, and MSME benefits relevant to your business.
                  </p>
                </div>

                <div className="ci-item">
                  <span>🛠️</span>
                  <p>Ongoing Compliance Guidance</p>
                  <p>
                    Support on MSME-related compliance, updates, and future
                    applicability of schemes and programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="udyam-impact-section">
        <div className="udyam-impact-container">
          <div className="udyam-impact-left">
            <h2>
              Why MSME / <span>Udyam Registration Matters </span>
            </h2>

            <div className="impact-point active">
              <span>01</span>
              <p>Official Government Recognition</p>
            </div>

            <div className="impact-point">
              <span>02</span>
              <p>Stronger Financial Access</p>
            </div>

            <div className="impact-point">
              <span>03</span>
              <p>Legal & Regulatory Safeguards</p>
            </div>

            <div className="impact-point">
              <span>04</span>
              <p>Sustainable Business Growth</p>
            </div>
          </div>

          <div className="udyam-impact-right">
            <div className="impact-box">
              <h4>Official Government Recognition</h4>
              <p>
                Udyam registration formally recognizes your business as an MSME
                under the Government of India, strengthening credibility with
                banks, vendors, corporates, and institutional partners.
              </p>
            </div>

            <div className="impact-box">
              <h4>Stronger Financial Access</h4>
              <p>
                Registered MSMEs gain priority access to collateral-free loans,
                lower interest rates, credit guarantee schemes, and
                government-supported funding programs.
              </p>
            </div>

            <div className="impact-box">
              <h4>Legal & Regulatory Safeguards</h4>
              <p>
                MSME registration offers protection under MSME laws, including safeguards 
                against delayed payments and access to faster legal remedies.
              </p>
            </div>

            <div className="impact-box">
              <h4> Sustainable Business Growth</h4>
              <p>
                From subsidies and tax benefits to tender eligibility and policy support, MSME
                registration enables structured, long-term growth across markets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="msme-req-section">
        <h2 className="msme-req-title">
          Minimum Eligibility<span> Criteria</span>
        </h2>

        <div className="msme-req-wrap">
          <div className="msme-req-item">
            <span className="req-badge">01</span>
            <p>The entity must be engaged in manufacturing, trading, or service-based operations as defined under MSME guidelines.</p>
          </div>

          <div className="msme-req-item">
            <span className="req-badge">02</span>
            <p>Valid Aadhaar and PAN details of the proprietor, partners, or directors are required for registration.</p>
          </div>

          <div className="msme-req-item">
            <span className="req-badge">03</span>
            <p>An active business bank account must be available for verification and official records.</p>
          </div>

          <div className="msme-req-item">
            <span className="req-badge">04</span>
            <p>Complete business address along with clear details of operational activities must be provided.</p>
          </div>

          <div className="msme-req-item">
            <span className="req-badge">05</span>
            <p>The business should fall within the prescribed MSME investment and turnover thresholds.</p>
          </div>
        </div>
      </section>
      <section className="msme-flow-section">
        <h2 className="msme-flow-title">
          Step-by-Step Process for <span>MSME / Udyam Registration</span>
        </h2>

        <div className="msme-flow">
          <div className="flow-line"></div>

          <div className="flow-step left">
            <span>01</span>
            <p>Access the official Udyam Registration platform</p>
          </div>

          <div className="flow-step right">
            <span>02</span>
            <p>Provide Aadhaar and PAN details for initial verification</p>
          </div>

          <div className="flow-step left">
            <span>03</span>
            <p>Authenticate your details through OTP sent to the registered mobile number</p>
          </div>

          <div className="flow-step right">
            <span>04</span>
            <p>Enter business information including entity name, category, and operational activity</p>
          </div>

          <div className="flow-step left">
            <span>05</span>
            <p>Submit PAN and GST details wherever applicable</p>
          </div>

          <div className="flow-step right">
            <span>06</span>
            <p>Add bank account information along with investment and annual turnover data</p>
          </div>

          <div className="flow-step left">
            <span>07</span>
            <p>Review and submit the application, followed by final OTP confirmation</p>
          </div>

          <div className="flow-step right">
            <span>08</span>
            <p>Receive and download the Udyam Registration Certificate instantly</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Government;
