import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="arvess-footer">
  <div className="container">

    {/* LOGO SIDE */}
    <div className="footer-top">
      <img src="./ARVESSLOGO.svg" alt="Arvess" className="footer-logo" />
    </div>

    {/* TOP INFO BOXES */}
    <div className="footer-info-box">
      <div className="info-item">
        <div className="info-icon">📍</div>
        <h6>Address</h6>
        <p>Ahmedabad, Gujarat</p>
      </div>

      <div className="info-item">
        <div className="info-icon">✉️</div>
        <h6>Email</h6>
        <p>info@arvess.com</p>
      </div>

      <div className="info-item">
        <div className="info-icon">📞</div>
        <h6>Connect</h6>
        <p>Facebook · Twitter · Instagram · LinkedIn</p>
      </div>
    </div>

    {/* TAGLINE */}
    <div className="footer-brand">
      <p>
        Empowering startups through compliance, funding,
        branding and long-term growth strategy.
      </p>
    </div>

    {/* LINKS */}
    <div className="footer-links">
      <span>Home</span>
      <span>About Us</span>
      <span>Services</span>
      <span>Blog</span>
      <span>Contact Us</span>
    </div>

    {/* DISCLAIMER */}
    <p className="footer-disclaimer">
      Disclaimer: Arvess is an independent consultancy providing advisory
      services in business registration, compliance, funding, branding, and
      growth strategy for startups and MSMEs. We are not affiliated with or
      endorsed by any government or non-government agency.
    </p>

    <p className="footer-copy">
      © 2025 Arvess. All Rights Reserved.
    </p>

  </div>
</footer>

    </>
  )
}
