import React from 'react'

const Branding = () => {
  return (
    <>
        <section className="brand-hero">
  <div className="brand-hero-wrap">

    <h1 className="brand-hero-title">
      Build Your Brand with Purpose & Precision
    </h1>

    <p className="brand-hero-text">
      Branding is not just about visuals — it’s about telling your story.
      We help you craft meaningful brand identities that reflect your values,
      connect emotionally with your audience, and stand strong in the market.
    </p>

  </div>
</section>
<section className="brand-why-section">
  <div className="brand-why-wrap">

    <div className="brand-why-left">
      <h2>
        Branding is What People Remember <br />
        Long After the Product is Gone
      </h2>

      <div className="brand-why-card">
        <h4>Why it matters?</h4>
        <ul>
          <li>It creates a lasting emotional impression</li>
          <li>It makes your business instantly recognizable</li>
          <li>It builds trust before the first transaction</li>
          <li>It tells your story without needing to speak</li>
        </ul>
      </div>
    </div>

    <div className="brand-why-right">
      <img
        src="/Branding1.jpeg"
        alt="Branding work"
      />
    </div>

  </div>
</section>
<section className="branding-expertise">
  <h2 className="branding-title">
    Explore Our Branding & Design Expertise
  </h2>

  <div className="branding-grid">

    <div className="branding-card">
      <img src="./Bdesign.avif" alt="Brand Naming" />
      <span>Brand Identity & Naming</span>
    </div>

    <div className="branding-card">
      <img src="./Blogo.avif" alt="Logo Design" />
      <span>Logo Design</span>
    </div>

    <div className="branding-card">
      <img src="./Btypography.avif" alt="Typography" />
      <span>Typography</span>
    </div>

    <div className="branding-card">
      <img src="./Bproduct.avif" alt="Product Design" />
      <span>Product Design</span>
    </div>

    <div className="branding-card">
      <img src="./Bpacakging.webp" alt="Packaging Design" />
      <span>Packaging Design</span>
    </div>

    <div className="branding-card">
      <img src="./Buiux.avif" alt="UI UX Design" />
      <span>UI/UX for Digital Platforms</span>
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
          A logo creates recognition, builds trust, and visually represents
          the values and personality of your brand.
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
          Simplicity, clarity, scalability, and relevance to your brand story
          make a logo effective.
        </p>
      </details>

      <details className="brandfaq-item">
        <summary>How long does logo design usually take?</summary>
        <p>
          Depending on complexity, logo design typically takes 7–14 working
          days including revisions.
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
  )
}

export default Branding