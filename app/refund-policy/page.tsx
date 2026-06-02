"use client";

import Navbar from "@/app/components/navbar";
import { useEffect } from "react";
import gsap from "gsap";

export default function RefundPolicyPage() {
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
            Refund
            <span className="block text-[#A00A20]">Policy</span>
          </h1>

          <p className="mt-8 max-w-[900px] text-[15px] md:text-[18px] leading-[2] text-black/55">
            This Cancellation & Refund Policy outlines the terms, conditions,
            procedures, and eligibility criteria governing cancellations,
            refunds, and service-related financial transactions carried out with
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
                  This Cancellation & Refund Policy outlines the terms,
                  conditions, procedures, and eligibility criteria governing
                  cancellations, refunds, and service-related financial
                  transactions carried out with Arvess Services Private Limited
                  (“Company”, “we”, “our”, or “us”).
                </p>

                <p className="mt-6 text-[17px] leading-[2] text-black/70">
                  Our objective is to maintain transparency, professionalism,
                  and fairness in all client engagements while ensuring clear
                  communication regarding payments, cancellations, and
                  refund-related matters.
                </p>

                <p className="mt-6 text-[17px] leading-[2] text-black/70">
                  By purchasing, booking, or availing any service offered by
                  Arvess Services Private Limited, the client acknowledges and
                  agrees to the terms stated in this policy.
                </p>
              </div>

              {/* 2 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  2. Definitions
                </h3>

                <div className="mt-10 grid gap-8 md:grid-cols-3">
                  <div className="policy-card rounded-[35px] bg-[#A00A20]/5 p-8">
                    <h4 className="text-[26px] font-semibold text-black">
                      Service Provider
                    </h4>

                    <p className="mt-5 text-[16px] leading-[2] text-black/70">
                      Arvess Services Private Limited, including its employees,
                      representatives, affiliates, and authorized operational
                      partners responsible for providing services.
                    </p>
                  </div>

                  <div className="policy-card rounded-[35px] bg-[#012D0E]/5 p-8">
                    <h4 className="text-[26px] font-semibold text-black">
                      Client / Service Receiver
                    </h4>

                    <p className="mt-5 text-[16px] leading-[2] text-black/70">
                      Any individual, startup, business entity, organization,
                      founder, or customer availing services, consultations,
                      registrations, digital solutions, compliance services, or
                      professional assistance.
                    </p>
                  </div>

                  <div className="policy-card rounded-[35px] bg-black p-8 text-white">
                    <h4 className="text-[26px] font-semibold">
                      Service Engagement
                    </h4>

                    <p className="mt-5 text-[16px] leading-[2] text-white/70">
                      Any paid or unpaid consultation, registration, filing,
                      project, subscription, digital service, compliance
                      assistance, advisory support, or business-related service
                      initiated with the Company.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  3. Cancellation Policy
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Clients may request cancellation of services only before the
                  commencement of actual service execution, documentation
                  processing, filing procedures, or operational work.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  {[
                    "Registered Email Communication",
                    "Authorized Company Support Channels",
                    "Written Communication approved by the Company",
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
                  4. Refund Eligibility
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Refunds, where applicable, shall be considered only after
                  internal review and verification by Arvess Services Private
                  Limited.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Nature of service purchased",
                    "Stage of project or service completion",
                    "Documentation already processed",
                    "Government or third-party fees involved",
                    "Time and operational resources already utilized",
                    "Terms agreed under signed proposals, quotations, agreements, or invoices",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#012D0E]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  5. Non-Refundable Charges
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Government Fees & Statutory Charges",
                    "Third-Party Processing Fees",
                    "Consultation Charges",
                    "Digital Service Charges",
                    "Domain, Hosting, Software, or Licensing Fees",
                    "Documentation & Compliance Charges",
                    "Taxes and Transaction Processing Charges",
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

              {/* 6 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  6. Refund Amount Determination
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  If a refund is approved, the refundable amount shall be
                  determined solely by Arvess Services Private Limited after
                  considering work completed till the date of cancellation,
                  resources utilized, operational and administrative costs,
                  third-party expenses incurred, and applicable deductions under
                  company policy.
                </p>
              </div>

              {/* 7 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  7. Refund Processing Timeline
                </h3>

                <div className="policy-card mt-10 rounded-[35px] bg-black p-8 text-white">
                  <h4 className="text-[30px] font-semibold">
                    30 to 45 Working Days
                  </h4>

                  <p className="mt-5 text-[16px] leading-[2] text-white/70">
                    The processing timeline shall begin only after refund
                    approval confirmation, submission of required documents,
                    verification of banking details, and completion of internal
                    financial review procedures.
                  </p>
                </div>
              </div>

              {/* 8 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  8. Refund Procedure
                </h3>

                <div className="mt-10 space-y-8">
                  <div className="policy-card rounded-[35px] border border-black/5 p-8">
                    <h4 className="text-[28px] font-semibold text-black">
                      Step 1 – Refund Request Submission
                    </h4>

                    <p className="mt-5 text-[16px] leading-[2] text-black/70">
                      The client must submit a formal refund request through:
                    </p>

                    <p className="mt-5 text-[16px] text-[#A00A20]">
                      • 📧 support@arvessofficial.com
                    </p>
                  </div>

                  <div className="policy-card rounded-[35px] border border-black/5 p-8">
                    <h4 className="text-[28px] font-semibold text-black">
                      Step 2 – Internal Review
                    </h4>

                    <p className="mt-5 text-[16px] leading-[2] text-black/70">
                      The Company will review service status, documentation
                      progress, operational work completed, applicable
                      deductions, and eligibility.
                    </p>
                  </div>

                  <div className="policy-card rounded-[35px] border border-black/5 p-8">
                    <h4 className="text-[28px] font-semibold text-black">
                      Step 3 – Approval / Rejection Notification
                    </h4>

                    <p className="mt-5 text-[16px] leading-[2] text-black/70">
                      The client will receive official communication regarding
                      refund approval or rejection, refund amount, deductions,
                      and estimated processing timeline.
                    </p>
                  </div>
                </div>
              </div>

              {/* 9 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  9. Service Delays & Limitations
                </h3>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {[
                    "Government department processing timelines",
                    "Technical server issues",
                    "Third-party vendor delays",
                    "Regulatory changes",
                    "Client-side delay in documentation or approvals",
                    "Unforeseen operational or force majeure events",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="policy-card rounded-[28px] bg-[#012D0E]/5 p-6"
                    >
                      <p className="text-[16px] text-black/70">• {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  10. Chargebacks & Payment Disputes
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Clients are encouraged to contact Arvess Services Private
                  Limited before initiating any chargeback, payment reversal, or
                  dispute with banks or payment gateways.
                </p>
              </div>

              {/* 11 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  11. Grievance Redressal
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  For any concerns, disputes, or grievances related to
                  cancellations, payments, or refunds, users may contact:
                </p>

                <p className="mt-6 text-[18px] text-[#A00A20]">
                  • 📧 support@arvessofficial.com
                </p>
              </div>

              {/* 12 */}

              <div className="policy-section">
                <h3 className="text-[34px] font-semibold tracking-[-2px] text-[#A00A20]">
                  12. Policy Amendments
                </h3>

                <p className="mt-8 text-[17px] leading-[2] text-black/70">
                  Arvess Services Private Limited reserves the right to amend,
                  modify, revise, or update this Cancellation & Refund Policy at
                  any time without prior notice.
                </p>
              </div>

              {/* 13 */}

              <div className="policy-card rounded-[40px] border border-black/5 bg-black p-10 text-white">
                <h3 className="text-[38px] font-semibold tracking-[-2px]">
                  13. Contact Information
                </h3>

                <p className="mt-6 text-[17px] leading-[2] text-white/70">
                  For cancellations, refund requests, payment concerns, or
                  policy-related queries, contact:
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
    </div>
  );
}
