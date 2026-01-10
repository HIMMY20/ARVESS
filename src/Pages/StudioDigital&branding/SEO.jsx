import React from "react";

const SEO = () => {
  return (
    <>
      <section className="brand-hero">
        <div className="brand-hero-wrap">
          <h1 className="brand-hero-title">SEO</h1>

          <p className="brand-hero-text">
            Your website or app is often the first real conversation your brand
            has with your audience. At The House of Startups – Bharat, we craft
            digital experiences that aren’t just functional—they’re intuitive,
            scalable, and genuinely human. Whether you’re launching a new idea
            or reinventing an existing platform, we build with purpose and
            precision
          </p>
        </div>
      </section>
      <section className="brand-why-section">
        <div className="brand-why-wrap">
          <div className="brand-why-left">
            <h2>
              Because First Impressions in the Digital World Are <br /> 
              Everything
            </h2>

            <div className="brand-why-card">
              <h4>Why it matters?</h4>
              <ul>
                <li>It sets the tone for your brand’s digital reputation</li>
                <li>It drives engagement and customer interaction</li>
                <li>It’s a 24/7 storefront, support system, and storyteller</li>
                <li>It improves SEO, reach, and conversions</li>
                <li>It enables business scalability and product innovation</li>
              </ul>
            </div>
          </div>

          <div className="brand-why-right">
            <img src="/Branding1.jpeg" alt="Branding work" />
          </div>
        </div>
      </section>
      <section className="branding-expertise">
        <h2 className="branding-title">
          Explore Our Developement Excercise
        </h2>

        <div className="branding-grid">
          <div className="branding-card">
            <img src="./Bdesign.avif" alt="Brand Naming" />
            <span>Custom Website Development   </span>
          </div>

          <div className="branding-card">
            <img src="./Blogo.avif" alt="Logo Design" />
            <span>E-Commerce Development</span>
          </div>

          <div className="branding-card">
            <img src="./Btypography.avif" alt="Typography" />
            <span>Mobile App Development</span>
          </div>

          <div className="branding-card">
            <img src="./Bproduct.avif" alt="Product Design" />
            <span>Web App Development </span>
          </div>

          <div className="branding-card">
            <img src="./Bpacakging.webp" alt="Packaging Design" />
            <span>UI/UX Design for Web & App </span>
          </div>

          <div className="branding-card">
            <img src="./Buiux.avif" alt="UI UX Design" />
            <span>CMS Integration</span>
          </div>
          <div className="branding-card">
            <img src="./Buiux.avif" alt="UI UX Design" />
            <span>Landing Page & Funnel Design</span>
          </div>
        </div>
      </section>
      <section className="brandfaq-section">
        <div className="brandfaq-wrap">
          <div className="brandfaq-left">
            <h6 className="brandfaq-tag">Popular Questions</h6>
            <h2 className="brandfaq-title">
              Frequently Asked <br /> Questions
            </h2>
            <p className="brandfaq-note">
              Clear answers to common branding and logo design questions.
            </p>
          </div>

          <div className="brandfaq-right">
            <details className="brandfaq-item" open>
              <summary>Why is a logo important for a brand?</summary>
              <p>
                A logo creates recognition, builds trust, and visually
                represents the values and personality of your brand.
              </p>
            </details>

            <details className="brandfaq-item">
              <summary>Who should invest in a logo design?</summary>
              <p>
                Startups, growing businesses, and established brands looking to
                strengthen their market presence.
              </p>
            </details>

            <details className="brandfaq-item">
              <summary>What makes a logo effective?</summary>
              <p>
                Simplicity, clarity, scalability, and relevance to your brand
                story make a logo effective.
              </p>
            </details>

            <details className="brandfaq-item">
              <summary>How long does logo design usually take?</summary>
              <p>
                Depending on complexity, logo design typically takes 7–14
                working days including revisions.
              </p>
            </details>

            <details className="brandfaq-item">
              <summary>Can logos be trademarked?</summary>
              <p>
                Yes, once finalized, a logo can be registered for trademark
                protection.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};
export default SEO


