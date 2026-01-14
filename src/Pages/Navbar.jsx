import React, { useEffect } from "react";
import "../Components/Css.css";
import "../Components/Css1.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {

  useEffect(() => {
  const navbar = document.querySelector(".custom-navbar");
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add("navbar-blur");
    } else {
      navbar.classList.remove("navbar-blur");
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);




  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">

          {/* LOGO */}
          <a className="navbar-brand arvess-logo" href="/">
            <img src="/ARVESSLOGO.svg" alt="Arvess Logo" height="70" />
          </a>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#arvessNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="arvessNavbar">
            <ul className="navbar-nav ms-auto gap-lg-3">

              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>

              {/* SERVICES MEGA MENU */}
              <li className="nav-item dropdown mega-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Our Services
                </a>

                <div className="dropdown-menu mega-menu p-4">
                  <div className="row">

                    <div className="col-md-4">
                      <h6 className="mega-title">Legal & Compliance Infrastructure</h6>
                      <ul className="mega-list">
                        <li><a href="/companyincorporation">Business Incorporation & Structuring</a></li>
                        <li><a href="/government">Regulatory Licenses & Registrations</a></li>
                        <li><a href="/legalcertification">Statutory Certifications</a></li>
                        <li><a href="/annualCompliances">Ongoing Compliance Management</a></li>
                        <li><a href="/CA&CS">CA, CS & Corporate Advisory</a></li>
                        <li><a href="/financialmodel">Financial Planning & Projections</a></li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <h6 className="mega-title">Capital, Grants & Growth Access</h6>
                      <ul className="mega-list">
                        <li><a href="/">Startup India & Seed Fund Assistance</a></li>
                        <li><a href="/">Central & State Grant Programs</a></li>
                        <li><a href="/">Women Entrepreneur Schemes</a></li>
                        <li><a href="/">Angel & Venture Capital Access</a></li>
                        <li><a href="/">Strategic Private Funding</a></li>
                        <li><a href="/">Government & Institutional Loans</a></li>
                      </ul>
                    </div>
                    {/* <div className="col-md-4">
                      <h6 className="mega-title">Capital, Grants & Growth Access</h6>
                      <ul className="mega-list">
                        <li><a href="/startup">Startup India & Seed Fund Assistance</a></li>
                        <li><a href="/industryfund">Central & State Grant Programs</a></li>
                        <li><a href="/womenspecific">Women Entrepreneur Schemes</a></li>
                        <li><a href="/angle">Angel & Venture Capital Access</a></li>
                        <li><a href="/privatefunding">Strategic Private Funding</a></li>
                        <li><a href="/governmentandprivateloans">Government & Institutional Loans</a></li>
                      </ul>
                    </div> */}

                    <div className="col-md-4">
                      <h6 className="mega-title">Brand, Digital & Growth Studio</h6>
                      <ul className="mega-list">
                        <li><a href="/">Brand Identity & Creative Design</a></li>
                        <li><a href="/">Website & App Development</a></li>
                        <li><a href="/ ">Demand & Lead Generation</a></li>
                        <li><a href="/">Performance Marketing </a></li>
                        <li><a href="/">SEO, Content & Growth Strategy</a></li>
                        <li><a href="/">Social Media & Community Building</a></li>
                      </ul>
                    </div>
                    {/* <div className="col-md-4">
                      <h6 className="mega-title">Brand, Digital & Growth Studio</h6>
                      <ul className="mega-list">
                        <li><a href="/branding">Brand Identity & Creative Design</a></li>
                        <li><a href="/websiteaap-development">Website & App Development</a></li>
                        <li><a href="/demand-lead ">Demand & Lead Generation</a></li>
                        <li><a href="/performance-marketing">Performance Marketing </a></li>
                        <li><a href="/seo">SEO, Content & Growth Strategy</a></li>
                        <li><a href="/social-media">Social Media & Community Building</a></li>
                      </ul>
                    </div> */}

                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
<li className="nav-item dropdown more-dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  More
                </a>

                <div className="dropdown-menu more-menu p-4">
                  <div className="row">
                    <div className="col-md">
                      <ul className="more-list">
                        <li><a href="/">Blog</a></li>
                        <li><a href="/privacypolicy">Privacy Policy</a></li>
                        <li><a href="/refundpolicy">Refund Policy</a></li>
                        <li><a href="/termscondition">Term & Condition</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
