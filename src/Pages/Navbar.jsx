import React, { useEffect } from "react";
import "../Components/Css.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {

  useEffect(() => {
    const navbar = document.querySelector(".custom-navbar");
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
      } else {
        navbar.style.backgroundColor = "#ffffff";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
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
                      <h6 className="mega-title">House Of Legal Foundations</h6>
                      <ul className="mega-list">
                        <li><a href="/companyincorporation">Company Incorporation</a></li>
                        <li><a href="/government">Government Licences</a></li>
                        <li><a href="/legalcertification">Legal Certifications</a></li>
                        <li><a href="/annualCompliances">Annual Compliances</a></li>
                        <li><a href="/CA&CS">CA & CS Services</a></li>
                        <li><a href="/financialmodel">Financial Modelling</a></li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <h6 className="mega-title">Office Of Opportunity</h6>
                      <ul className="mega-list">
                        <li><a href="/startup">Startup India Seed Fund</a></li>
                        <li><a href="/industryfund">Industry Grant Schemes</a></li>
                        <li><a href="/womenspecific">Women Specific Programs</a></li>
                        <li><a href="/angle">Angel & VC Connect</a></li>
                        <li><a href="/privatefunding">Private Funding</a></li>
                        <li><a href="/governmentandprivateloans">Govt & Private Loans</a></li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <h6 className="mega-title">Studio Of Branding & Digital</h6>
                      <ul className="mega-list">
                        <li><a href="/branding">Branding & Designs</a></li>
                        <li><a href="#">Website & App Development</a></li>
                        <li><a href="#">Lead Generation</a></li>
                        <li><a href="#">Performance Marketing</a></li>
                        <li><a href="#">SEO & Content Strategy</a></li>
                        <li><a href="#">Social Media Management</a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">More</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
