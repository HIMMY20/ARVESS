"use client";

import Navbar from "@/app/components/navbar";
import { useEffect } from "react";
import gsap from "gsap";

export default function PrivacyPolicyPage() {
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

      <div className="absolute right-[-200px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#012D0E]/10 blur-[140px]" />

      {/* HERO */}

      <section className="hero-animation relative z-20 border-b border-black/10 px-6 py-28 md:px-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-[70px] bg-[#A00A20]" />

            <span className="text-[11px] uppercase tracking-[6px] text-[#012D0E]">
              Legal
            </span>
          </div>

       <h1 className="text-[52px] md:text-[120px] font-semibold leading-[0.9] tracking-[-6px] text-black">
  <span className="text-[#012D0E]">Privacy</span>

  <span className="block text-[#A00A20]">
    Policy
  </span>
</h1>

          <p className="mt-8 max-w-[900px] text-[15px] md:text-[18px] leading-[2] text-black/55">
            This Privacy Policy explains how Arvess Services Private Limited
            collects, uses, processes, stores, protects, and discloses
            information obtained from users while providing services and
            operating its digital platforms.
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
                  Arvess Services Private Limited (“Company”, “we”, “our”, or
                  “us”) values and respects the privacy of every client,
                  visitor, and user associated with our services. We are
                  committed to protecting the confidentiality, integrity, and
                  security of the personal and business information shared with
                  us through our website, applications, communication channels,
                  and professional services.
                </p>
                <p className="mt-4 text-[17px] leading-[2] text-black/70">
                  This Privacy Policy explains how Arvess Services Private
                  Limited collects, uses, processes, stores, protects, and
                  discloses information obtained from users while providing
                  services and operating its digital platforms.
                </p>
                <p className="mt-4 text-[17px] leading-[2] text-black/70">
                  By accessing or using our website, applications, or services,
                  you acknowledge that you have read, understood, and agreed to
                  the practices described in this Privacy Policy.
                </p>
                <p className="mt-4 text-[17px] leading-[2] text-black/70">
                  If you do not agree with any part of this Privacy Policy, you
                  are advised to discontinue the use of our services
                  immediately.
                </p>
                <p className="mt-4 text-[17px] leading-[2] text-black/70">
                  For any privacy-related queries or concerns, contact us at: *
                </p>
                <p className="mt-4 text-[19px] leading-[2] text-black/70">
                  📧{" "}
                  <a
                    href="mailto:support@arvessofficial.com"
                    className="text-[#A00A20] hover:underline"
                  >
                    support@arvessofficial.com
                  </a>
                </p>
              </div>

              {/* 2 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  2. Information We Collect
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Arvess Services Private Limited may collect various categories
                  of information depending on the services requested or
                  interactions made with our platform.
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  <div className="policy-card rounded-[35px] border border-black bg-[#A00A20]/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(160,10,32,0.12)]">
                    <h4 className="text-[30px] font-semibold text-black">
                      A. Personal Information
                    </h4>

                    <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                      We may collect personal information including:
                      <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                      <li>• Full Name</li>
                      <li>• Mobile Number</li>
                      <li>• Email Address</li>
                      <li>• Residential or Business Address</li>
                      <li>• Company or Organization Details</li>
                      <li>
                        • Government Identification Details (where required)
                      </li>
                      <li>• Billing and Payment Information</li>
                      <li>• Legal, compliance, or verification documents</li>
                      <li>
                        • Information submitted during consultations or service
                        applications
                      </li>
                    </ul>
                  </div>

                  <div className="policy-card rounded-[35px] border border-black bg-[#012D0E]/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(6,78,59,0.12)]">
                    <h4 className="text-[30px] font-semibold text-black">
                      B. Technical & Usage Information
                    </h4>

                    <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                      When users access our website or services, certain
                      technical information may automatically be collected,
                      including:
                      <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                      <li>• IP Address</li>
                      <li>• Browser Type</li>
                      <li>• Device Information</li>
                      <li>• Operating System</li>
                      <li>• Website Activity & Navigation Data</li>
                      <li>• Pages Visited</li>
                      <li>• Session Duration</li>
                      <li>• Referral Sources</li>
                    </ul>
                  </div>
                </div>

                <div className="policy-card mt-8 rounded-[35px] border bg-white p-8 text-black transition-all">
                  {" "}
                  <h4 className="text-[30px] font-semibold">
                    C. Communication Information
                  </h4>
                  <p className="mt-5 text-[16px] leading-[2] text-black/70">
                    We may retain records of communications conducted through:
                  </p>
                  <ul className="mt-6 space-y-4 text-[16px] text-black/75">
                    <li>• Email</li>
                    <li>• Phone Calls</li>
                    <li>• Live Chat</li>
                    <li>• Contact Forms</li>
                    <li>• Customer Support Requests</li>
                    <li>• Business Consultations</li>
                  </ul>
                </div>
              </div>

              {/* 3 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  3. Methods of Information Collection
                </h3>
                <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                Information may be collected through various methods including:
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Website registrations and inquiry forms",
                    "Service onboarding processes",
                    "Payments and transactions",
                    "Customer support interactions",
                    "Email or telephonic communication",
                    "Cookies and analytics technologies",
                    "Third-party integrations authorized by the user",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border border-black bg-[#A00A20]/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  4. Purpose of Information Usage
                </h3>
                <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                Arvess Services Private Limited may use collected information
                for legitimate operational, business, legal, and security
                purposes, including:
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Delivering requested services and solutions",
                    "Processing documentation, registrations, or compliance procedures",
                    "Verifying identity and preventing fraudulent activity",
                    "Managing transactions and payment processing",
                    "Providing customer support and resolving disputes",
                    "Sending service-related notifications and updates",
                    "Enhancing website functionality and user experience",
                    "Conducting analytics and internal business improvements",
                    "Marketing and promotional communications (where permitted by law)",
                    "Maintaining platform security and enforcing company policies and enforcing policies",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border border-black bg-[#012D0E]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  We only use information to the extent reasonably necessary for
                  lawful business purposes.
                </p>
              </div>

              {/* 5 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  5. Cookies & Tracking Technologies
                </h3>
                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Our website may use cookies, tracking pixels, web beacons, and
                  similar technologies to improve website performance and user
                  experience.
                </p>
                <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                These technologies help us:
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {[
                    "Understand visitor behavior",
                    "Remember user preferences",
                    "Improve website functionality",
                    "Enhance security measures",
                    "Analyze website traffic and performance",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border border-black bg-white p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                  Users may disable cookies through browser settings; however,
                  certain parts of the website may not function properly after
                  disabling cookies.
                </div>
              </div>

              {/* 6 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  6. Information Sharing & Disclosure
                </h3>
                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Arvess Services Private Limited does not sell, rent, trade, or
                  commercially distribute personal information to third parties.
                </p>
                <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                Information may only be shared under the following
                circumstances:
                <div className="mt-10 grid gap-8 md:grid-cols-3">
                  <div className="rounded-[30px] bg-[#A00A20]/5 border border-black p-8">
                    <h4 className="text-[24px] font-semibold text-black">
                      A. Authorized Service Providers
                    </h4>
                    <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                      We may share information with trusted third-party vendors
                      or operational partners assisting us in areas such as:
                      <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                      <li>• Payment processing</li>
                      <li>• Technical support</li>
                      <li>• Hosting and server management</li>
                      <li>• Verification and compliance services</li>
                      <li>• Customer communication systems</li>
                    </ul>
                  </div>

                  <div className="rounded-[30px] bg-[#012D0E]/5 border border-black p-8">
                    <h4 className="text-[24px] font-semibold text-black">
                      B. Legal & Regulatory Compliance
                    </h4>
                    <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                      Information may be disclosed if required by:
                      <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                      <li>• Applicable laws or regulations</li>
                      <li>• Government authorities</li>
                      <li>• Court orders or legal proceedings</li>
                      <li>• Law enforcement agencies</li>
                    </ul>
                  </div>

                  <div className="rounded-[30px] bg-white p-8 border border-black text-black">
                    <h4 className="text-[24px] font-semibold">
                      C. Protection of Rights & Security
                    </h4>
                    <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                      We may disclose information where necessary to:
                      <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                      <li>• Prevent fraud or illegal activity</li>
                      <li>• Protect company rights, assets, or operations</li>
                      <li>• Enforce legal agreements and company policies</li>
                      <li>• Protect users, employees, or public safety</li>
                    </ul>
                    <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                    All authorized third parties are required to maintain
                    confidentiality and implement appropriate security
                    safeguards.
                  </div>
                </div>
              </div>

              {/* 7 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  7. Data Security & Protection
                </h3>
                <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                  Arvess Services Private Limited maintains appropriate
                  administrative, technical, electronic, and physical safeguards
                  to protect information against:
                  <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                  <li>• Unauthorized access</li>
                  <li>• Data breaches</li>
                  <li>• Misuse or manipulation</li>
                  <li>• Disclosure or destruction</li>
                  <li>• Loss or theft</li>
                </ul>
                <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                  <h4 className="text-[24px] font-semibold">
                    Security measures may include:
                  </h4>
                  <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                  <li>• Encrypted systems and communications</li>
                  <li>• Secure databases and servers</li>
                  <li>• Restricted internal access controls</li>
                  <li>• Monitoring and cybersecurity protections</li>
                </ul>
                <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                Although we strive to maintain industry-standard security
                practices, no digital platform or internet-based system can
                guarantee complete security. Users share information at their
                own discretion and risk.
              </div>

              {/* 8 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  8. Data Retention Policy
                </h3>
                <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                  We retain personal information only for as long as reasonably
                  necessary to:
                  <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                  <li>• Fulfill service obligations</li>
                  <li>• Comply with legal and regulatory requirements</li>
                  <li>• Maintain operational records</li>
                  <li>• Resolve disputes and enforce agreements</li>
                  <li>• Prevent fraudulent or unauthorized activity</li>
                </ul>
                <ul className="mt-8 space-y-4 text-[17px] text-black/70"></ul>
                Once information is no longer required, reasonable efforts will
                be made to securely delete, anonymize, or destroy such
                information.
              </div>

              {/* 9 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  9. User Rights & Choices
                </h3>
                <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                  We retain personal information only for as long as reasonably
                  necessary to:
                </ul>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {[
                    "Request access to personal information",
                    "Correct inaccurate or outdated information",
                    "Withdraw consent for promotional communications",
                    "Request deletion or restriction of data processing",
                    "Raise concerns regarding misuse of information",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                  <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                    Requests regarding personal data may be submitted at:
                  </ul>
                  <p className="mt-4 text-[19px] leading-[2] text-black/70">
                    {" "}
                    <a
                      href="mailto:support@arvessofficial.com"
                      className="text-[#A00A20] hover:underline"
                    >
                      📧 support@arvessofficial.com
                    </a>
                  </p>
                  <ul className="mt-8 space-y-5 text-[17px] text-black/70">
                    Certain requests may be restricted where retention is
                    required under legal, contractual, security, or operational
                    obligations.{" "}
                  </ul>
                </div>
              </div>

              {/* 10 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  10. Third-Party Websites & External Links
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Our platform may contain links to external websites,
                  integrations, or third-party services. Arvess Services Private
                  Limited does not control and is not responsible for the
                  privacy practices, content, policies, or security of
                  third-party platforms.
                </p>
                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Users are encouraged to review the privacy policies of
                  external websites before sharing any information.
                </p>
              </div>

              {/* 11 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  11. Children's Privacy
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  The services offered by Arvess Services Private Limited are
                  not intended for individuals below the age of 18 years.
                </p>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  We do not knowingly collect personal information from minors.
                  If any such information is identified, appropriate steps will
                  be taken to remove it from our systems.
                </p>
              </div>

              {/* 12 */}

              <div>
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  12. Policy Updates & Modifications
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Arvess Services Private Limited reserves the right to amend,
                  modify, update, or revise this Privacy Policy at any time
                  without prior notice.
                </p>
                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Any updates will become effective immediately upon publication
                  on our website or digital platforms. Continued use of our
                  services after such updates shall constitute acceptance of the
                  revised Privacy Policy.
                </p>
              </div>

              {/* 13 */}

              <div className="rounded-[40px] border border-black/5 bg-white p-10 text-black">
                <h3 className="text-[38px] font-semibold tracking-[-2px]">
                  13. Contact Information
                </h3>

                <p className="mt-6 text-[17px] leading-[2] text-black/70">
                  For any questions, concerns, complaints, or requests related to this Privacy Policy or your personal information, contact:

                </p>

                <div className="mt-8">
                  <h4 className="text-[24px] font-semibold text-[#A00A20]">
                    Arvess Services Private Limited
                  </h4>

                  <p className="mt-4 text-[19px] leading-[2] text-black/70">
                    {" "}
                    <a
                      href="mailto:support@arvessofficial.com"
                      className="text-[#A00A20] hover:underline"
                    >
                      📧 support@arvessofficial.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
