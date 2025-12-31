import React, { useEffect } from "react";
import "../Components/Css.css";

const Contact = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".contact-block");
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add("active"), i * 180);
    });
  }, []);
    useEffect(() => {
    const blocks = document.querySelectorAll(".map-card");
    blocks.forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), i * 200);
    });
  }, []);

  return (
      <>
    <section className="arvess-contact-unique">
      <div className="container">

        {/* HEADER */}
        <div className="contact-hero">
          <span className="contact-chip">Contact Arvess</span>
          <h2>Let’s Start a Meaningful Conversation</h2>
          <p>
            Not just messages — real discussions, real guidance, and
            real startup clarity.
          </p>
        </div>

        {/* UNIQUE GRID */}
        <div className="contact-layout">

          {/* BIG LEFT */}
          <div className="contact-block big">
            <h5>📞 Talk To Us</h5>
            <p className="main">+91 9662347619</p>
            <span>Mon – Sat · 9:00 AM – 7:00 PM</span>
          </div>

          {/* TOP RIGHT */}
          <div className="contact-block">
            <h5>✉️ Email</h5>
            <p>info.arvess@gmail.com</p>
            <span>We reply within 24 hours</span>
          </div>

          {/* MIDDLE RIGHT */}
          <div className="contact-block accent">
            <h5>💬 Chat With Us</h5>
            <p>ARVESS</p>
            <span>Quick startup queries</span>
          </div>

        </div>
      </div>
    </section>
     <section className="arvess-map-section">
      <div className="container">

        <div className="map-grid">

          {/* LEFT CARD */}
          <div className="map-card info-card">
            <h4>Quick Contact</h4>

            <p>📍 Ahmedabad, Gujarat, India</p>
            <p>📞 +91 9662347619</p>
            <p>✉️ info.arvess@gmail.com</p>

            <span className="arrow">↗</span>
          </div>

          {/* MAP */}
          <div className="map-card map-box">
            <iframe
              title="Arvess Location"
              src="https://www.google.com/maps?q=Ahmedabad&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          {/* RIGHT CARD */}
          <div className="map-card info-card">
            <h4>Working Hours</h4>

            <p>🕘 Monday – Saturday</p>
            <p><strong>9:00 AM – 7:00 PM</strong></p>
            <p>Sunday – Closed</p>

            <span className="arrow">↗</span>
          </div>

        </div>

        {/* CTA */}
        <div className="map-cta">
          <a href="#" className="cta-btn">
            Book A Strategy Call →
          </a>
        </div>

      </div>
    </section>
    </>
  );
};

export default Contact;
