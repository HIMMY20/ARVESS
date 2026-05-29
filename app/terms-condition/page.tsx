"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";

export default function TermsConditionPage() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-animation",
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
      },
    );

    gsap.fromTo(
      ".policy-section",
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.08,
        delay: 0.3,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".policy-card",
      {
        y: 40,
        opacity: 0,
        scale: 0.96,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.06,
        delay: 0.5,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div className="relative overflow-hidden bg-white pt-5 text-black">
      <Navbar />

      {/* PREMIUM GLOW */}

      <div className="absolute left-[-200px] top-[5%] h-[450px] w-[450px] rounded-full bg-[#A00A20]/10 blur-[140px]" />

      <div className="absolute right-[-200px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#064e3b]/10 blur-[140px]" />

      {/* HERO */}

      <section className="hero-animation relative z-20 border-b border-black/10 px-6 py-28 md:px-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-[70px] bg-[#A00A20]" />

            <span className="text-[11px] uppercase tracking-[6px] text-[#064e3b]">
              Legal
            </span>
          </div>

          <h1 className="text-[52px] md:text-[120px] font-semibold leading-[0.9] tracking-[-6px] text-black">
            Terms &<span className="block text-[#A00A20]">Conditions</span>
          </h1>

          <p className="mt-8 max-w-[900px] text-[15px] md:text-[18px] leading-[2] text-black/55">
            These Terms & Conditions govern the use of services, websites,
            digital platforms, consultations, and business solutions offered by
            Arvess Services Private Limited.
          </p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="relative z-20 px-6 py-20 md:px-14">
        <div className="mx-auto max-w-[1300px]">
          <div className="overflow-hidden rounded-[45px] border border-black/5 bg-white p-8 md:p-14 shadow-[0_25px_90px_rgba(0,0,0,0.05)]">
            {/* COMPANY */}

            <div className="policy-section mb-16">
              <h2 className="text-[32px] md:text-[52px] font-semibold tracking-[-3px] text-black">
                Arvess Services Private Limited
              </h2>

              <p className="mt-3 text-[14px] uppercase tracking-[4px] text-[#A00A20]">
                Effective Date: 16 January 2026
              </p>
            </div>

            <div className="space-y-20">
              {/* 1 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  1. Introduction
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  These Terms & Conditions (“Terms”) govern the use of services,
                  websites, digital platforms, consultations, and business
                  solutions offered by Arvess Services Private Limited
                  (“Company”, “we”, “our”, or “us”).
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Business Registration Services",
                    "Startup & Compliance Assistance",
                    "Branding & Digital Solutions",
                    "Business Consultancy",
                    "Technology & Development Services",
                    "Documentation & Filing Support",
                    "Strategic and Operational Guidance",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#A00A20]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  2. Acceptance of Terms
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "You are legally competent to enter into binding agreements",
                    "You are acting voluntarily and independently in all business, legal, financial, or strategic decisions",
                    "You understand that the Company acts solely based on the information and instructions provided by you",
                    "Your continued use of our services constitutes acceptance of these Terms and future updates",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#064e3b]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  3. Nature of Services
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Arvess Services Private Limited operates as a professional
                  business services and consultancy platform.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "We are not a law firm",
                    "We do not provide legal representation before courts or authorities",
                    "No attorney-client relationship is created through the use of our services",
                    "Services provided should not be interpreted as legal, financial, investment, or tax advice",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  4. User Responsibilities
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "All information submitted by you shall be accurate, complete, and truthful",
                    "You are solely responsible for reviewing documents before approval, signing, or submission",
                    "You shall provide required documents and approvals within reasonable timelines",
                    "You shall not submit false, misleading, fraudulent, or unauthorized information",
                    "You are responsible for maintaining confidentiality of your account credentials and communications",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#A00A20]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  5. Service Execution & Timelines
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Government processing timelines",
                    "Regulatory approvals",
                    "Third-party dependencies",
                    "Technical interruptions",
                    "Client-side delays in documentation or approvals",
                    "Operational or unforeseen circumstances",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#064e3b]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  6. Third-Party Services
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Certain services may involve third-party vendors, platforms,
                  government authorities, software providers, or operational
                  partners.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Delays caused by third parties",
                    "Rejections by government authorities",
                    "Errors originating from third-party systems",
                    "Performance or availability of external platforms",
                    "Additional policies imposed by third parties",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] border border-black/5 bg-white p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  7. Payments & Fees
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "All fees must be paid as per agreed quotations, invoices, or payment terms",
                    "Government charges, statutory fees, taxes, third-party costs, or processing fees may be charged separately",
                    "Delayed payments may result in service suspension or additional charges",
                    "Certain services may be non-refundable as per the Company’s Refund Policy",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#A00A20]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 8 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  8. Intellectual Property Rights
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Copy or reproduce Company materials without authorization",
                    "Modify, distribute, or commercially exploit Company content",
                    "Use Company branding or trademarks without written permission",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#064e3b]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  9. Confidentiality
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Arvess Services Private Limited shall make commercially
                  reasonable efforts to maintain confidentiality of client
                  information shared during service engagement.
                </p>
              </div>

              {/* 10 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  10. Electronic Communication & Consent
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Emails",
                    "Invoices",
                    "Notifications",
                    "Service Updates",
                    "Agreements and Approvals",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] border border-black/5 bg-white p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  11. Limitation of Liability
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Indirect or consequential damages",
                    "Loss of profits, revenue, or business opportunities",
                    "Delays caused by government authorities or third parties",
                    "Data loss or technical interruptions",
                    "Business interruption or reputational loss",
                    "Decisions made based on consultations or recommendations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#A00A20]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 12 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  12. Force Majeure
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Natural disasters",
                    "Government restrictions or policy changes",
                    "Internet or server failures",
                    "Cyber incidents",
                    "Power outages",
                    "Pandemics or public emergencies",
                    "Labor disputes or operational disruptions",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#064e3b]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 13 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  13. Website Usage & Cookies
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Attempt unauthorized access to systems or servers",
                    "Introduce malware or malicious code",
                    "Disrupt website functionality",
                    "Misuse website content or digital assets",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] border border-black/5 bg-white p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 14 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  14. Testimonials & Feedback
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Marketing purposes",
                    "Promotional materials",
                    "Website and social media display",
                    "Internal business improvements",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#A00A20]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 15 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  15. Right to Refuse or Suspend Services
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Fraudulent activity",
                    "Misuse of services",
                    "Violation of these Terms",
                    "Abusive or unlawful conduct",
                    "Non-payment of dues",
                    "Regulatory or legal concerns",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#064e3b]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 16 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  16. Dispute Resolution & Jurisdiction
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Any dispute, claim, or disagreement arising out of these Terms
                  or the use of Company services shall first be attempted to be
                  resolved amicably through mutual discussion.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="policy-card rounded-[30px] bg-black p-8 text-white">
                    <h4 className="text-[26px] font-semibold">
                      Arbitration under applicable Indian laws
                    </h4>
                  </div>

                  <div className="policy-card rounded-[30px] bg-[#A00A20]/5 p-8">
                    <h4 className="text-[26px] font-semibold text-black">
                      Courts located in Ahmedabad, Gujarat, India
                    </h4>
                  </div>
                </div>
              </div>

              {/* 17 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  17. Modifications to Terms
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Arvess Services Private Limited reserves the right to amend,
                  modify, revise, or update these Terms & Conditions at any time
                  without prior notice.
                </p>
              </div>

              {/* 18 */}

              <div className="policy-card rounded-[40px] border border-black/5 bg-black p-10 text-white">
                <h3 className="text-[38px] font-semibold tracking-[-2px]">
                  18. Contact Information
                </h3>

                <p className="mt-6 text-[17px] leading-[2] text-white/70">
                  For questions, legal concerns, service-related clarifications,
                  or policy inquiries, contact:
                </p>

                <div className="mt-8">
                  <h4 className="text-[24px] font-semibold text-[#A00A20]">
                    Arvess Services Private Limited
                  </h4>

                  <p className="mt-4 text-[17px] text-white/75">
                    • 📧 support@arvessofficial.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
