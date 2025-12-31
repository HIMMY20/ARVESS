import React from 'react'

const Foooter = () => {
  return (
    <>
         <footer className="arvess-footer">
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <img src="./ARVESSLOGO.svg" alt="Arvess" className="footer-logo" />

          <p className="footer-desc">
            Arvess Service Private Limited is a startup consultancy firm in
            India dedicated to helping startups and MSMEs grow through
            compliance, funding, branding, and long-term strategy. We provide
            end-to-end professional guidance to entrepreneurs at every stage
            of their business journey.
          </p>

          <p className="footer-desc">
            From company incorporation and branding to securing funding and
            scaling operations, Arvess delivers practical solutions focused
            on sustainable growth and long-term success.
          </p>

          <h4 className="footer-heading">Contact Info</h4>

          <p className="footer-contact">
            <strong>Location:</strong> Ahmedabad, Gujarat
          </p>
          <p className="footer-contact">
            <strong>Email:</strong> info@arvess.com
          </p>
          <p className="footer-contact">
            <strong>Contact:</strong> +91 9662347619
          </p>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <p className="footer-disclaimer">
             <p>Disclaimer:</p> We are an independent startup consultancy firm
            operating in India. We do not have any affiliation, authorization,
            or partnership with any government or non-government organization,
            institution, or department.
            
          </p>

          <div className="footer-links-grid">
            <div>
              <h4 className="footer-heading">Navigation</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/">Contact Us</a></li>
                {/* <li><a href="/"></a></li> */}
                {/* <li><a href="/"></a></li> */}
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Support Center</h4>
              <ul>
                <li><a href="/">Blog</a></li>
                <li> <a href="/privacypolicy">Privacy Policy</a></li>
                <li><a href="/refundpolicy">Refund Policy</a></li>
                <li> <a href="/termscondition">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Arvess. All Rights Reserved.
      </div>
    </footer>
    </>
  )
}

export default Foooter