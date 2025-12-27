import React from 'react'

const Government = () => {
  return (
      <>
    <section className="ci-section">
      <div className="ci-container">
        <div className="ci-content">
          <h1>Register Your MSME / Udyam</h1>

          <p>
            Register your business under MSME (Micro, Small, or Medium
            Enterprise) with Arvess and unlock government benefits, subsidies,
            priority lending, and official recognition. Our experts ensure a
            smooth, fast, and compliant Udyam registration process.
          </p>

          <div className="ci-free-box">
            <h4>Also Get with MSME / Udyam Registration</h4>

            <div className="ci-icons">
              <div className="ci-item">
                <span>🆔</span>
                <p>Udyam Registration Number</p>
              </div>

              <div className="ci-item">
                <span>📄</span>
                <p>Udyam e-Certificate</p>
              </div>

              <div className="ci-item">
                <span>✅</span>
                <p>Eligibility Assessment</p>
              </div>

              <div className="ci-item">
                <span>🛠️</span>
                <p>Compliance Support</p>
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
        Why MSME / <span>Udyam Registration</span> Matters
      </h2>

      <div className="impact-point active">
        <span>01</span>
        <p>Government Recognition</p>
      </div>

      <div className="impact-point">
        <span>02</span>
        <p>Financial Strength</p>
      </div>

      <div className="impact-point">
        <span>03</span>
        <p>Legal Protection</p>
      </div>

      <div className="impact-point">
        <span>04</span>
        <p>Business Growth</p>
      </div>
    </div>

    <div className="udyam-impact-right">
      <div className="impact-box">
        <h4>Official MSME Recognition</h4>
        <p>
          Udyam registration gives your business official recognition from the
          Government of India, increasing trust among banks, vendors, and
          clients.
        </p>
      </div>

      <div className="impact-box">
        <h4>Better Financial Access</h4>
        <p>
          Registered MSMEs get priority lending, collateral-free loans, and
          easier access to government-backed credit schemes.
        </p>
      </div>

      <div className="impact-box">
        <h4>Protection Under MSME Act</h4>
        <p>
          MSMEs are protected against delayed payments and receive legal
          remedies under MSME laws.
        </p>
      </div>

      <div className="impact-box">
        <h4>Long-Term Business Growth</h4>
        <p>
          From subsidies to tender benefits, MSME registration fuels structured
          and sustainable growth.
        </p>
      </div>
    </div>

  </div>
</section>
<section className="msme-req-section">
  <h2 className="msme-req-title">
    Minimum <span>Requirements</span>
  </h2>

  <div className="msme-req-wrap">
    <div className="msme-req-item">
      <span className="req-badge">01</span>
      <p>Business engaged in manufacturing, trading, or services</p>
    </div>

    <div className="msme-req-item">
      <span className="req-badge">02</span>
      <p>Valid Aadhaar & PAN of proprietor / partners / directors</p>
    </div>

    <div className="msme-req-item">
      <span className="req-badge">03</span>
      <p>Active bank account details of the business</p>
    </div>

    <div className="msme-req-item">
      <span className="req-badge">04</span>
      <p>Business address and activity details</p>
    </div>

    <div className="msme-req-item">
      <span className="req-badge">05</span>
      <p>Investment & turnover within MSME limits</p>
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
      <p>Visit the Udyam Registration Portal</p>
    </div>

    <div className="flow-step right">
      <span>02</span>
      <p>Enter Aadhaar and PAN details for validation</p>
    </div>

    <div className="flow-step left">
      <span>03</span>
      <p>Verify with OTP sent to registered mobile number</p>
    </div>

    <div className="flow-step right">
      <span>04</span>
      <p>Fill business details like name, type, and activity</p>
    </div>

    <div className="flow-step left">
      <span>05</span>
      <p>Provide PAN and GST details (if applicable)</p>
    </div>

    <div className="flow-step right">
      <span>06</span>
      <p>Enter bank details and investment / turnover</p>
    </div>

    <div className="flow-step left">
      <span>07</span>
      <p>Submit form online and verify with OTP</p>
    </div>

    <div className="flow-step right">
      <span>08</span>
      <p>Download Udyam Registration Certificate instantly</p>
    </div>
  </div>
</section>
<section className="faq2-selector2-section2">
  <h2 className="faq2-selector2-title2">
    Frequently Asked <span>Questions</span>
  </h2>

  <div className="faq2-selector2-wrap2">
    {/* LEFT QUESTIONS */}
    <div className="faq2-questions2">
      <button className="faq2-q2 active2">
        What is MSME / Udyam Registration?
      </button>
      <button className="faq2-q2">
        Who can apply for Udyam Registration?
      </button>
      <button className="faq2-q2">
        Is there any fee for MSME registration?
      </button>
      <button className="faq2-q2">
        Can existing Udyog Aadhaar be updated?
      </button>
      <button className="faq2-q2">
        How long does MSME registration take?
      </button>
    </div>

    {/* RIGHT ANSWER */}
    <div className="faq2-answer2">
      <h4>What is MSME / Udyam Registration?</h4>
      <p>
        MSME (Micro, Small & Medium Enterprises) Registration, also known as
        Udyam Registration, is a government initiative that provides official
        recognition and benefits to small businesses under the Ministry of
        MSME.
      </p>
    </div>
  </div>
</section>



    </>
  );
};

export default Government