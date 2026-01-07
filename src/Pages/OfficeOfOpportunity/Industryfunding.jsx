import React from "react";

const Industryfunding = () => {
  return (
    <>
      <section className="rgw-hero-text">
        <h1 className="rgw-hero-title">Funding Pathways for Entrepreneurs</h1>

        <p className="rgw-hero-desc">
          Where innovative ideas connect with structured capital. At Arvess,
          we’ve built a dedicated ecosystem to help early-stage startups access
          equity-free government funding with clarity and confidence. From DPIIT
          recognition to final grant disbursement, our team manages the entire
          journey with speed, accuracy, and a founder-first approach.
        </p>
      </section>
      <section className="grants-section">
        <div className="grants-container">
          <h2 className="grants-title">What Are Government Grants?</h2>

          <p className="grants-desc">
            Government grants are non-dilutive, non-repayable financial support
            provided by central and state authorities to help early-stage
            startups build, test, and scale innovative ideas. These programs are
            designed to support founders during critical phases such as
            prototype development, market validation, and early
            commercialization.
          </p>

          <h2>Typically suited for:</h2>
          <div className="grants-cards">
            <div className="grant-card">
              DPIIT-recognized startups demonstrating strong innovation and
              scalability
            </div>

            <div className="grant-card">
              Sector-focused ventures in areas like biotech, agriculture,
              hardware, AI, and IoT
            </div>

            <div className="grant-card">
              Women-led, rural, and impact-driven startups creating measurable
              social or economic value
            </div>
          </div>
        </div>
      </section>
      <section className="workflow-section">
        <div className="workflow-container">
          <h3 className="workflow-heading"> Grant Application Workflow </h3>

          <div className="workflow-grid-areas">
            <div className="workflow-card card1">
              <div className="workflow-step">01</div>
              <p>Discovery Call & Grant Alignment</p>
              <p>
                We begin with a free consultation to understand your startup and
                map the most suitable government grant schemes based on
                eligibility and sector fit.
              </p>
            </div>

            <div className="workflow-card card2">
              <div className="workflow-step">02</div>
              <p>Application & Financial Documentation</p>
              <p>
                Our team prepares end-to-end documentation including pitch deck,
                financial projections, and founder/startup profile aligned with
                grant guidelines.
              </p>
            </div>

            <div className="workflow-card card3">
              <div className="workflow-step">03</div>
              <p>Incubator or Portal Submission</p>
              <p>
                We handle submission through the relevant incubator or official
                government portal, ensuring accuracy and compliance at every
                step.
              </p>
            </div>

            <div className="workflow-card card4">
              <div className="workflow-step">04</div>
              <p>Pitch & Interview Readiness</p>
              <p>
                Founders receive structured support for demo days, interviews,
                and evaluation rounds, including mock pitches and Q&A
                preparation.
              </p>
            </div>

            <div className="workflow-card card5">
              <div className="workflow-step">05</div>
              <p>Evaluation & Query Resolution</p>
              <p>
                We assist during the review phase by addressing evaluator
                queries, clarifications, and follow-ups to keep your application
                moving forward
              </p>
            </div>

            <div className="workflow-card card6">
              <div className="workflow-step">06</div>
              <p>Approval & Fund Disbursement Support</p>
              <p>
                Once approved, we guide you through sanction documentation and
                coordinate the final handover for smooth grant disbursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-container">
          <h2 className="approach-heading">
            Our Approach to Helping Startups Secure Grants
          </h2>

          <div className="approach-grid">
            <div className="approach-card">
              <h3>
                Scheme Identification & Eligibility Review
                </h3>
              <p>
                We assess your startup profile and align it with the most
                relevant government grant opportunities.
              </p>
            </div>

            <div className="approach-card">
              <h3>
                Pitch Deck & Financial Structuring{" "}
                </h3>
              <p>
                Creation of grant-ready pitch decks and financial projections
                tailored to evaluation criteria.
              </p>
            </div>

            <div className="approach-card">
              <h3>
                Incubator Coordination & Application Handling{" "}
                </h3>
              <p>
                End-to-end management of incubator onboarding and grant
                application submissions.
              </p>
            </div>

            <div className="approach-card">
              <h3>
                Pitch Readiness & Interview Support{" "}
                </h3>
              <p>
                Focused preparation for presentations, demo days, and evaluator
                interactions.
              </p>
            </div>

            <div className="approach-card">
              <h3>
                Funds Release & Post-Approval Assistance{" "}
                </h3>
              <p>
                Continuous follow-up until sanction completion and smooth grant
                disbursement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industryfunding;
