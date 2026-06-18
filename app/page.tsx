// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/Footer";

// export default function HomePage() {
//   const titleRef = useRef(null);
//   const lineRef = useRef(null);
//   const subRef = useRef(null);

//   const clients = [
//   "/clients/client1.png",
//   "/clients/client2.png",
//   "/clients/client3.png",
//   "/clients/client4.png",
//   "/clients/client5.png",
//   "/clients/client6.png",
//   "/clients/client7.png",
// ];


//   const schemes = [
//   "BIRAC",
//   "MEITY TIDE",
//   "80-IAC",
//   "CGTMSE",
//   "Make in India",
//   "SISFS",
//   "PMEGP",
//   "Stand-Up India",
//   "MSME Schemes",
//   "DPIIT Recognized",
//   "SIDBI",
// ];

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // LINE ENTRY

//     gsap.fromTo(
//       lineRef.current,
//       {
//         scaleX: 0,
//       },
//       {
//         scaleX: 1,
//         duration: 1.8,
//         ease: "power4.inOut",
//       },
//     );

//     // LOGO ENTRY

//     gsap.fromTo(
//       titleRef.current,
//       {
//         y: 220,
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 2,
//         delay: 0.2,
//         ease: "power4.out",
//       },
//     );

//     // SUBTITLE ENTRY

//     gsap.fromTo(
//       subRef.current,
//       {
//         y: 40,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         delay: 1,
//         ease: "power4.out",
//       },
//     );

//     // SCROLL EFFECT

//     gsap.to(".hero-logo img", {
//       scale: 0.22,
//       y: -260,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".hero-wrapper",
//         start: "top top",
//         end: "+=600",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="relative overflow-x-hidden bg-white text-black">
//       {/* NAVBAR */}

//       <Navbar />

//       {/* GLOW */}

//       <div className="absolute left-[-180px] top-[5%] h-[450px] w-[450px] rounded-full bg-[#A00A20]/10 blur-[140px]" />

//       <div className="absolute right-[-180px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#012D0E]/10 blur-[140px]" />

//       {/* HERO WRAPPER */}

//       <section className="hero-wrapper relative h-[100vh]">
//         {/* STICKY HERO */}

//         <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
//           {/* LINE */}

//           <div className="absolute left-0 top-[61%] w-full -translate-y-1/2 z-0">
//             <div
//               ref={lineRef}
//               className="h-[2px] w-full bg-black origin-left"
//             />
//           </div>

//           {/* CENTER SVG */}

//           <div
//             ref={titleRef}
//             className="hero-logo relative z-20 flex items-center justify-center"
//           >
//             <img
//               src="/arvess.svg"
//               alt="logo"
//               className="w-[320px] sm:w-[500px] md:w-[700px] lg:w-[700px] object-contain"
//             />
//           </div>

//           {/* SUBTITLE */}

//           <p
//             ref={subRef}
//             className="absolute top-[63%] max-w-[700px] text-[30px] md:text-[16px] uppercase tracking-[3px] text-black"
//           >
//             Where Strategy Meets Execution For Sustainable Growth
//           </p>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}

//       <section className="relative overflow-hidden bg-white py-0 md:py-0">
//         {/* BACKGROUND LIGHT */}

//         <div className="absolute left-[-250px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#A00A20]/10 blur-[170px]" />

//         <div className="absolute right-[-250px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#012D0E]/10 blur-[170px]" />

//         {/* HUGE BACK TEXT */}

//         <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//           <h1 className="text-[90px] md:text-[240px] font-black uppercase tracking-[-12px] text-black/[0.03]">
//             ARVESS
//           </h1>
//         </div>


// <div className="relative overflow-hidden py-6">

//   <motion.div
//     animate={{
//       x: [0, -1500],
//     }}
//     transition={{
//   duration: 18,
//   repeat: Infinity,
//   repeatType: "loop",
//   ease: "linear",
// }}
//     className="flex w-max whitespace-nowrap gap-5 pr-5"
//   >

//     {[...schemes, ...schemes].map((item, index) => (

//       <motion.div
//         key={index}
//         whileHover={{
//           scale: 1.06,
//           y: -4,
//         }}
//         className="
//           group
//           flex
//           items-center
//           gap-3
//           px-7
//           md:px-10
//           py-4
//           rounded-[18px]
//           border
//           border-[#A00A20]/10
//           bg-white
//           text-[#012D0E]
//           font-bold
//           text-base
//           md:text-lg
//           tracking-wide
//           shadow-[0_10px_30px_rgba(0,0,0,0.05)]
//           hover:border-[#A00A20]/40
//           hover:shadow-[0_15px_40px_rgba(160,10,32,0.15)]
//           transition-all
//           duration-300
//         "
//       >

//         <span className="text-[#A00A20] text-sm">
//           ◆
//         </span>

//         {item}

//       </motion.div>

//     ))}

//   </motion.div>

// </div>

//         {/* CONTENT */}

//         <div className="relative z-20 mx-auto max-w-[1600px] px-6">
//           {/* TOP */}

//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] items-start">
//             {/* LEFT SIDE */}

//             <div
//               data-aos="fade-right"
//               data-aos-duration="1400"
//               className="sticky top-32"
//             >
//               {/* MINI TAG */}

//               <div className="mb-7 flex items-center gap-4">
//                 <div className="h-[2px] w-[60px] bg-[#012D0E]" />

//                 <span className="text-[20px] font-bold uppercase tracking-[6px] text-[#A00A20]">
//                   About Arvess
//                 </span>
//               </div>

//               {/* TITLE */}

//               <h2 className="text-[54px] md:text-[100px] font-semibold leading-[0.9] tracking-[-5px] text-[#012D0E]">
//                 We Build
//                 <span className="block text-[#A00A20]">Powerful</span>
//                 <span className="block text-[#012D0E]">Business</span>
//               </h2>
//             </div>

//             {/* RIGHT SIDE */}

//             <div className="space-y-8">
//               {/* CARD 1 */}

//               <div
//                 data-aos="fade-up"
//                 data-aos-duration="1200"
//                 className="group relative overflow-hidden rounded-[30px] border border-black bg-[#A00A20]/25 p-8 md:p-3 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2"
//               >
//                 <span className="absolute right-8 top-5 text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
//                   01
//                 </span>

//                 <h3 className="text-[24px] md:text-[30px] font-semibold tracking-[-2px] text-black">
//                   Strategic Foundation
//                 </h3>

//                 <div className="mt-5 h-[2px] w-[90px] bg-[#A00A20] transition-all duration-700 group-hover:w-[140px]" />

//                 <p className="mt-7 text-[10px] md:text-[15px] leading-[2] text-black/60 transition-all duration-700 group-hover:text-black">
//                   Arvess is a leading business consulting, startup advisory, and
//                   growth solutions firm helping entrepreneurs, startups, SMEs,
//                   and enterprises build strong, scalable, and future-ready
//                   businesses. From company registration, government
//                   certifications, legal compliance, and financial structuring to
//                   strategic planning and business expansion, we create the
//                   foundation required for sustainable growth. Our mission is to
//                   simplify complex business processes and empower founders to
//                   focus on innovation, profitability, and long-term success
//                 </p>
//               </div>

//               {/* CARD 2 */}

//               <div
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 data-aos-duration="1400"
//                 className="group relative overflow-hidden rounded-[30px] border border-black bg-white p-8 md:p-3 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
//               >
//                 <span className="absolute right-8 top-5 text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
//                   02
//                 </span>

//                 <h3 className="text-[26px] md:text-[30px] font-semibold tracking-[-2px] text-black">
//                   Execution Excellence
//                 </h3>

//                 <div className="mt-5 h-[2px] w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[140px]" />

//                 <p className="mt-7 text-[10px] md:text-[15px] leading-[2] text-black/60 transition-all duration-700 group-hover:text-black/90">
//                   At Arvess, strategy means nothing without execution. We work
//                   as an extension of your team to implement high-impact
//                   solutions that drive measurable business outcomes. Our
//                   expertise spans startup consulting, compliance management,
//                   operational optimization, digital transformation, business
//                   process outsourcing, and growth acceleration. By combining
//                   industry expertise with practical execution, we help
//                   businesses increase efficiency, strengthen credibility, reduce
//                   operational challenges, and achieve faster market growth.
//                 </p>
//               </div>
//               {/* CARD 3 */}
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 data-aos-duration="1400"
//                 className="group relative overflow-hidden rounded-[30px] border border-black bg-[#012D0E]/30 p-8 md:p-3 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
//               >
//                 <span className="absolute right-8 top-5 text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
//                   03
//                 </span>

//                 <h3 className="text-[26px] md:text-[30px] font-semibold tracking-[-2px] text-black">
//                   Growth Acceleration
//                 </h3>

//                 <div className="mt-5 h-[2px] w-[90px] bg-black transition-all duration-700 group-hover:w-[140px]" />

//                 <p className="mt-7 text-[10px] md:text-[15px] leading-[2] text-black/60 transition-all duration-700 group-hover:text-black/90">
//                   Growth requires more than ambition it demands the right
//                   systems, certifications, partnerships, and market positioning.
//                   Arvess helps businesses unlock new opportunities through
//                   Startup India recognition, DPIIT registration, ISO
//                   certifications, government schemes, business development
//                   strategies, digital presence enhancement, and expansion
//                   planning. Our growth-focused approach ensures organizations
//                   remain competitive, investment-ready, and positioned for
//                   long-term success in an evolving marketplace.
//                 </p>
//               </div>

//               {/* CARD 4 */}

//               <div
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 data-aos-duration="1400"
//                 className="group relative overflow-hidden rounded-[30px] border border-black bg-white p-8 md:p-3 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
//               >
//                 <span className="absolute right-8 top-5 text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
//                   04
//                 </span>

//                 <h3 className="text-[26px] md:text-[30px] font-semibold tracking-[-2px] text-black">
//                   Trusted Business Partner
//                 </h3>

//                 <div className="mt-5 h-[2px] w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[140px]" />

//                 <p className="mt-7 text-[10px] md:text-[15px] leading-[2] text-black/60 transition-all duration-700 group-hover:text-black/90">
//                   Arvess is committed to becoming the most trusted business
//                   support partner for ambitious entrepreneurs and organizations.
//                   We believe in delivering transparent guidance, professional
//                   expertise, and result-driven solutions tailored to each
//                   client's unique objectives. Whether you are launching a
//                   startup, scaling an established company, or seeking
//                   operational support, Arvess provides end-to-end consulting and
//                   outsourcing services designed to help businesses grow smarter,
//                   faster, and stronger.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}

//       <section className="relative overflow-hidden bg-white py-15 md:py-15">
//         <div className="relative z-20 mx-auto max-w-[1600px] px-6">
//           <div className="mb-20 text-center">
//             <span className="text-[20px] font-bold uppercase tracking-[6px] text-[#A00A20]">
//               Our Services
//             </span>

//             <h2 className="mt-5 text-[55px] md:text-[100px] font-semibold leading-[0.9] tracking-[-5px] text-[#012D0E]">
//               What We
//               <span className=" text-[#A00A20]"> Deliver</span>
//             </h2>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="group rounded-[40px] border border-black bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
//               <h3 className="text-[34px] font-semibold">
//                 01. Business Consulting
//               </h3>

//               <div className="mt-5 h-[2px] w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[150px]" />

//               <p className="mt-7 text-black/60 leading-[2] group-hover:text-black/90">
//                 Strategic business consulting services designed to help
//                 startups, SMEs, and enterprises build strong foundations,
//                 improve operational efficiency, ensure regulatory compliance,
//                 and achieve sustainable business growth through expert advisory
//                 and execution support.
//               </p>
//             </div>

//             <div className="group rounded-[40px] bg-[#A00A20]/30 border border-black p-10 transition-all duration-700 hover:-translate-y-2">
//               <h3 className="text-[34px] font-semibold text-black">
//                 02. Compliance & Certifications
//               </h3>

//               <div className="mt-5 h-[2px] w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[150px]" />

//               <p className="mt-7 text-black/60 leading-[2] group-hover:text-black/90">
//                 Comprehensive support for Startup India Registration, DPIIT
//                 Recognition, ISO Certification, NPOP Certification, business
//                 registrations, legal documentation, and government compliance
//                 services that enhance credibility and unlock growth
//                 opportunities.
//               </p>
//             </div>

//             <div className="group rounded-[40px] border border-black bg-[#012D0E]/30 p-10 transition-all duration-700 hover:-translate-y-2">
//               <h3 className="text-[34px] font-semibold text-black">
//                 03. Digital Transformation
//               </h3>

//               <div className="mt-5 h-[2px] w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[150px]" />

//               <p className="mt-7 text-black/60 leading-[2] group-hover:text-black/90">
//                 End-to-end digital transformation solutions including branding,
//                 website development, SEO, digital marketing, business
//                 automation, and online growth strategies that help businesses
//                 strengthen their market presence and generate measurable
//                 results.
//               </p>
//             </div>

//             <div className="group rounded-[40px] border border-black bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
//               <h3 className="text-[34px] font-semibold">
//                 04. Growth & Expansion
//               </h3>

//               <div className="mt-5 h-[2px] w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[150px]" />

//               <p className="mt-7 text-black/60 leading-[2] group-hover:text-black/90">
//                 Business growth consulting focused on funding assistance,
//                 government grant schemes, investor readiness, market expansion,
//                 strategic partnerships, and scalable growth frameworks that
//                 drive long-term success and competitive advantage.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
// <section className="py-2 overflow-hidden">

//   <div className="text-center mb-12">

//     <span className="text-[18px] font-bold uppercase tracking-[6px] text-[#A00A20]">
//       Our Clients
//     </span>

//   </div>

//   <div className="relative overflow-hidden">

//     <motion.div
//       animate={{
//         x: [0, -1200],
//       }}
//       transition={{
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//       className="flex w-max gap-10"
//     >

//       {[...clients, ...clients, ...clients].map((logo, index) => (

//         <div
//           key={index}
//           className="
//             flex
//             items-center
//             justify-center
//             h-[100px]
//             w-[180px]
//             rounded-[20px]
//             border
//             border-black/10
//             bg-white
//             shadow-sm
//             hover:shadow-lg
//             transition-all
//           "
//         >

//           <Image
//             src={logo}
//             alt="Client Logo"
//             width={90}
//             height={50}
//             className="object-contain"
//           />

//         </div>

//       ))}

//     </motion.div>

//   </div>

// </section>


//       {/* WHY CHOOSE ARVESS */}

//       <section className="relative overflow-hidden bg-white py-24 md:py-10">
//         {/* BACK TEXT */}

//         <div className="pointer-events-none absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//           <h1 className="text-[90px] md:text-[240px] font-black uppercase tracking-[-12px] text-black/[0.03]">
//             ARVESS
//           </h1>
//         </div>

//         <div className="relative z-20 mx-auto max-w-[1600px] px-6">
//           {/* HEADING */}

//           <div className="mb-24 text-center">
//             <span className="text-[20px] font-bold uppercase tracking-[6px] text-[#A00A20]">
//               Why Choose Us
//             </span>

//             <h2 className="mt-5 text-[55px] md:text-[90px] font-semibold leading-[0.9] tracking-[-5px] text-[#012D0E]">
//               Why
//               <span className=" text-[#A00A20]"> Arvess</span>
//             </h2>
//           </div>

//           {/* ITEMS */}

//           <div className="space-y-8">
//             <div className="group flex flex-col md:flex-row md:items-center justify-between rounded-[40px] border border-black bg-[#A00A20]/30 p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
//               <div>
//                 <span className="text-[#000000] text-sm tracking-[4px] uppercase">
//                   01
//                 </span>

//                 <h3 className="mt-2 text-[32px] md:text-[48px] font-semibold tracking-[-2px]">
//                   Strategic Expertise
//                 </h3>
//               </div>

//               <p className="mt-6 md:mt-0 max-w-[650px] text-black/60 leading-[2] group-hover:text-black/90">
//                 Industry-focused business consulting backed by practical
//                 insights, regulatory knowledge, and growth-driven strategies.
//               </p>
//             </div>

//             <div className="group flex flex-col md:flex-row md:items-center border border-black justify-between rounded-[40px] bg-[#ffff] p-8 md:p-12 transition-all duration-700 hover:-translate-y-2">
//               <div>
//                 <span className="text-black text-sm tracking-[4px] uppercase">
//                   02
//                 </span>

//                 <h3 className="mt-2 text-[32px] md:text-[48px] font-semibold tracking-[-2px] text-black">
//                   Proven Execution
//                 </h3>
//               </div>

//               <p className="mt-6 md:mt-0 max-w-[650px] text-black/60 leading-[2] group-hover:text-black/90">
//                 A hands-on approach that transforms business plans into
//                 real-world results through structured implementation and
//                 continuous support.
//               </p>
//             </div>

//             <div className="group flex flex-col md:flex-row md:items-center justify-between border border-black rounded-[40px] bg-[#012D0E]/30 p-8 md:p-12 transition-all duration-700 hover:-translate-y-2">
//               <div>
//                 <span className="text-black text-sm tracking-[4px] uppercase">
//                   03
//                 </span>

//                 <h3 className="mt-2 text-[32px] md:text-[48px] font-semibold tracking-[-2px] text-black">
//                   Scalable Growth
//                 </h3>
//               </div>

//               <p className="mt-6 md:mt-0 max-w-[650px] text-black/60 leading-[2] group-hover:text-black/90">
//                 Solutions designed to improve credibility, attract
//                 opportunities, strengthen operations, and accelerate long-term
//                 business growth.
//               </p>
//             </div>

//             <div className="group flex flex-col md:flex-row md:items-center justify-between rounded-[40px] border border-black bg-white p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
//               <div>
//                 <span className="text-black text-sm tracking-[4px] uppercase">
//                   04
//                 </span>

//                 <h3 className="mt-2 text-[32px] md:text-[48px] font-semibold tracking-[-2px]">
//                   Future-Ready Systems
//                 </h3>
//               </div>

//               <p className="mt-6 md:mt-0 max-w-[650px] text-black/60 group-hover:text-black/90 leading-[2]">
//                 We create future-ready business ecosystems by strengthening
//                 compliance, operations, technology, and growth frameworks that
//                 support long-term scalability and competitive advantage.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* EXPERTISE SECTION */}

//       <section className="relative overflow-hidden bg-white py-32 md:py-10">
//         <div className="mx-auto max-w-[1600px] px-6">
//           {/* TITLE */}

//           <div className="mb-24">
//             <span className="text-[20px] uppercase tracking-[6px] text-[#A00A20] font-bold">
//               Core Expertise
//             </span>

//             <h2 className="mt-5 text-[55px] md:text-[90px]  font-bold leading-[0.9] tracking-[-6px] text-[#012D0E]">
//               Our 
//              <span className="text-[#A00A20]"> Specializations</span>
                 
//             </h2>
//           </div>

//           {/* ITEMS */}

//           <div className="space-y-10">
//             <div className="group flex items-center justify-between border-b border-black/10 pb-10">
//               <div>
//                 <span className="text-[14px] tracking-[5px] font-bold text-[#012D0E]">
//                   01
//                 </span>

//                 <h3 className="mt-2 text-[45px] md:text-[80px] font-black tracking-[-4px] text-[#A00A20]">
//                   GRANTS
//                 </h3>
//               </div>

//               <p className="max-w-[500px] text-center text-black leading-[2]">
//                 Helping startups and businesses secure government grants, startup incentives, subsidy programs, DPIIT benefits, and funding opportunities that fuel innovation and sustainable growth.
//               </p>
//             </div>

//             <div className="group flex items-center justify-between border-b border-black/10 pb-10">
//               <div>
//                 <span className="text-[14px] font-bold tracking-[5px] text-[#A00A20]">
//                   02
//                 </span>

//                 <h3 className="mt-2 text-[45px] md:text-[80px] font-black tracking-[-4px] text-[#012D0E]">
//                   INVESTORS
//                 </h3>
//               </div>

//               <p className="max-w-[500px] text-center text-black leading-[2]">
//                 Providing investor readiness, fundraising advisory, pitch support, financial structuring, and capital access solutions that help businesses attract investment and scale successfully.
//               </p>
//             </div>

//             <div className="group flex items-center justify-between pb-10">
//               <div>
//                 <span className="text-[14px] font-bold tracking-[5px] text-[#012D0E]">
//                   03
//                 </span>

//                 <h3 className="mt-2 text-[45px] md:text-[80px] font-black tracking-[-4px] text-[#A00A20]">
//                   DEPTH
//                 </h3>
//               </div>

//               <p className="max-w-[500px] text-center text-black leading-[2]">
//                 Combining business strategy, regulatory expertise, operational excellence, and market intelligence to deliver long-term growth, competitive advantage, and measurable business outcomes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* PROCESS SECTION */}

//       <section className="relative overflow-hidden bg-white py-32 md:py-10">
//         <div className="mx-auto max-w-[1600px] px-6">
//           {/* TITLE */}

//           <div className="mb-24">
//             <span className="text-[20px] font-bold uppercase tracking-[6px] text-[#A00A20]">
//               Our Process
//             </span>

//             <h2 className="mt-4 text-[60px] md:text-[90px] font-bold text-[#012D0E] tracking-[-6px] leading-[0.9]">
//               <span className="text-[#A00A20]">The </span> 
//               Arvess 
//               <span className="text-[#A00A20]"> Method</span>

//             </h2>
//           </div>

//           {/* STEP 1 */}

//           <div className="grid lg:grid-cols-[0.3fr_1fr] items-start gap-10 border-t border-black/10 py-16">
//             <h1 className="text-[90px] md:text-[180px] font-black leading-none text-[#A00A20]/15">
//               01
//             </h1>

//             <div>
//               <h3 className="text-[40px] md:text-[70px] text-[#012D0E] font-bold tracking-[-3px]">
//                 Discover
//               </h3>

//               <p className="mt-6 max-w-[700px] text-black leading-[2]">
//                 We begin by understanding your business goals, challenges, market position, and growth objectives to identify the right opportunities and strategic direction.
//               </p>
//             </div>
//           </div>

//           {/* STEP 2 */}

//           <div className="grid lg:grid-cols-[0.3fr_1fr] items-start gap-10 border-t border-black/10 py-16">
//             <h1 className="text-[90px] md:text-[180px] font-black leading-none text-[#012D0E]/15">
//               02
//             </h1>

//             <div>
//               <h3 className="text-[40px] md:text-[70px] text-[#A00A20] font-bold tracking-[-3px]">
//                 Strategize
//               </h3>

//               <p className="mt-6 max-w-[700px] text-black leading-[2]">
//                 Our experts develop tailored business strategies, compliance roadmaps, funding plans, and growth frameworks aligned with your long-term vision
//               </p>
//             </div>
//           </div>

//           {/* STEP 3 */}

//           <div className="grid lg:grid-cols-[0.3fr_1fr] items-start gap-10 border-y border-black/10 py-16">
//             <h1 className="text-[90px] md:text-[180px] font-black leading-none text-[#A00A20]/15">
//               03
//             </h1>

//             <div>
//               <h3 className="text-[40px] md:text-[70px] text-[#012D0E] font-bold tracking-[-3px]">
//                 Execute
//               </h3>

//               <p className="mt-6 max-w-[700px] text-black leading-[2]">
//                 We implement solutions with precision, managing registrations, certifications, compliance requirements, digital initiatives, and business growth activities.
//               </p>
//             </div>
//           </div>
//           <div className="grid lg:grid-cols-[0.3fr_1fr] items-start gap-10 border-y border-black/10 py-16">
//             <h1 className="text-[90px] md:text-[180px] font-black leading-none text-[#012D0E]/15">
//               04
//             </h1>

//             <div>
//               <h3 className="text-[40px] md:text-[70px] font-bold text-[#A00A20] tracking-[-3px]">
//                 Scale
//               </h3>

//               <p className="mt-6 max-w-[700px] text-black/60 leading-[2]">
//                 Through continuous support, optimization, and expansion planning, we help businesses improve performance, unlock opportunities, and achieve sustainable growth.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* PRICING SECTION */}

//       <section className="relative overflow-hidden bg-white py-32 md:py-20">
//         <div className="mx-auto max-w-[1800px] px-6">
//           {/* HEADING */}

//           <div className="mb-24 text-center">
//             <span className="text-[20px] uppercase font-bold tracking-[6px] text-[#A00A20]">
//               Pricing Plans
//             </span>

//             <h2 className="mt-5 text-[60px] md:text-[90px] text-[#012D0E] font-bold tracking-[-6px] leading-[0.9]">
//               Solutions For Every Stage
              
//             </h2>
//           </div>

//           {/* CARDS */}

//           <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-8">
//             {/* CARD 1 */}

//             <div className="rounded-[40px] border border-black/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
//               <p className="uppercase tracking-[4px] text-black/40 text-xs">
//                 3 Months
//               </p>

//               <h3 className="mt-6 text-[42px] font-black tracking-[-2px]">
//                 Grant Basic
//               </h3>

//               <h4 className="mt-8 text-[55px] font-black tracking-[-3px] text-[#A00A20]">
//                 ₹15K
//               </h4>

//               <p className="mt-4 text-black/60 leading-[1.9]">
//                 Perfect for startups looking for grant opportunities.
//               </p>

//               <button className="mt-8 w-full rounded-full border border-black/10 py-4 font-semibold hover:border-[#A00A20] transition">
//                 Get Started →
//               </button>

//               <div className="mt-10 space-y-4 text-black/70">
//                 <p>✓ Grant Assessment</p>
//                 <p>✓ Startup Roadmap</p>
//                 <p>✓ 3 Grant Applications</p>
//                 <p>✓ Email Support</p>
//               </div>
//             </div>

//             {/* CARD 2 */}

//             <div className="rounded-[40px] border border-black/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
//               <p className="uppercase tracking-[4px] text-black/40 text-xs">
//                 6 Months
//               </p>

//               <h3 className="mt-6 text-[42px] font-black tracking-[-2px]">
//                 Grant Plus
//               </h3>

//               <h4 className="mt-8 text-[55px] font-black tracking-[-3px] text-[#012D0E]">
//                 ₹25K
//               </h4>

//               <p className="mt-4 text-black/60 leading-[1.9]">
//                 Enhanced grant and funding preparation support.
//               </p>

//               <button className="mt-8 w-full rounded-full border border-black/10 py-4 font-semibold hover:border-[#012D0E] transition">
//                 Get Started →
//               </button>

//               <div className="mt-10 space-y-4 text-black/70">
//                 <p>✓ Financial Report</p>
//                 <p>✓ 5 Grant Applications</p>
//                 <p>✓ Funding Strategy</p>
//                 <p>✓ Priority Support</p>
//               </div>
//             </div>

//             {/* FEATURED CARD */}

//             <div className="relative rounded-[40px] bg-[#A00A20] p-8 text-white shadow-[0_25px_80px_rgba(160,10,32,0.25)] scale-[1.03]">
//               <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#012D0E] px-6 py-2 text-sm font-semibold">
//                 Most Popular
//               </div>

//               <p className="uppercase tracking-[4px] text-white/70 text-xs mt-4">
//                 9 Months
//               </p>

//               <h3 className="mt-6 text-[42px] font-black tracking-[-2px]">
//                 Investor Ready
//               </h3>

//               <h4 className="mt-8 text-[55px] font-black tracking-[-3px]">
//                 ₹45K
//               </h4>

//               <p className="mt-4 text-white/80 leading-[1.9]">
//                 Complete investor readiness and funding package.
//               </p>

//               <button className="mt-8 w-full rounded-full bg-white py-4 font-semibold text-[#A00A20]">
//                 Book Now →
//               </button>

//               <div className="mt-10 space-y-4 text-white/90">
//                 <p>✓ Investor Pitch Deck</p>
//                 <p>✓ 10 Investor Connections</p>
//                 <p>✓ Funding Readiness</p>
//                 <p>✓ Dedicated Advisor</p>
//                 <p>✓ Executive Summary</p>
//               </div>
//             </div>

//             {/* CARD 4 */}

//             <div className="rounded-[40px] border border-black/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
//               <p className="uppercase tracking-[4px] text-black/40 text-xs">
//                 12 Months
//               </p>

//               <h3 className="mt-6 text-[42px] font-black tracking-[-2px]">
//                 Growth Advisory
//               </h3>

//               <h4 className="mt-8 text-[55px] font-black tracking-[-3px] text-[#A00A20]">
//                 ₹75K
//               </h4>

//               <p className="mt-4 text-black/60 leading-[1.9]">
//                 Strategic planning and long-term growth consulting.
//               </p>

//               <button className="mt-8 w-full rounded-full border border-black/10 py-4 font-semibold hover:border-[#A00A20] transition">
//                 Get Started →
//               </button>

//               <div className="mt-10 space-y-4 text-black/70">
//                 <p>✓ Growth Strategy</p>
//                 <p>✓ Investor Relations</p>
//                 <p>✓ Expansion Planning</p>
//                 <p>✓ Dedicated Consultant</p>
//               </div>
//             </div>

//             {/* CARD 5 */}

//             <div className="rounded-[40px] border border-black/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
//               <p className="uppercase tracking-[4px] text-black/40 text-xs">
//                 Enterprise
//               </p>

//               <h3 className="mt-6 text-[42px] font-black tracking-[-2px]">
//                 Custom
//               </h3>

//               <h4 className="mt-8 text-[55px] font-black tracking-[-3px] text-[#012D0E]">
//                 Quote
//               </h4>

//               <p className="mt-4 text-black/60 leading-[1.9]">
//                 Fully customized solutions for enterprises.
//               </p>

//               <button className="mt-8 w-full rounded-full bg-[#012D0E] text-white py-4 font-semibold">
//                 Contact Us →
//               </button>

//               <div className="mt-10 space-y-4 text-black/70">
//                 <p>✓ End-to-End Execution</p>
//                 <p>✓ Strategic Partnerships</p>
//                 <p>✓ Dedicated Team</p>
//                 <p>✓ Premium Support</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subRef = useRef(null);

  const clients = [
    "/clients/client1.png",
    "/clients/client2.png",
    "/clients/client3.png",
    "/clients/client4.png",
    "/clients/client5.png",
    "/clients/client6.png",
    "/clients/client7.png",
  ];

  const schemes = [
    "BIRAC",
    "MEITY TIDE",
    "80-IAC",
    "CGTMSE",
    "Make in India",
    "SISFS",
    "PMEGP",
    "Stand-Up India",
    "MSME Schemes",
    "DPIIT Recognized",
    "SIDBI",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: "power4.inOut" });

    gsap.fromTo(
      titleRef.current,
      { y: 220, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 2, delay: 0.2, ease: "power4.out" }
    );

    gsap.fromTo(
      subRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 1, ease: "power4.out" }
    );

    gsap.to(".hero-logo img", {
      scale: 0.22,
      y: -260,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=600",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-white text-black">
      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div className="absolute left-[-180px] top-[5%] h-[450px] w-[450px] rounded-full bg-[#A00A20]/10 blur-[140px]" />
      <div className="absolute right-[-180px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#012D0E]/10 blur-[140px]" />

      {/* HERO WRAPPER */}
      <section className="hero-wrapper relative h-[100vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
          {/* LINE */}
          <div className="absolute left-0 top-[61%] w-full -translate-y-1/2 z-0">
            <div ref={lineRef} className="h-[2px] w-full bg-black origin-left" />
          </div>

          {/* CENTER SVG */}
          <div ref={titleRef} className="hero-logo relative z-20 flex items-center justify-center">
            <img
              src="/arvess.svg"
              alt="logo"
              className="w-[220px] sm:w-[400px] md:w-[600px] lg:w-[700px] object-contain"
            />
          </div>

          {/* SUBTITLE */}
          <p
            ref={subRef}
            className="absolute top-[64%] max-w-[90vw] md:max-w-[700px] text-[11px] sm:text-[13px] md:text-[16px] uppercase tracking-[2px] md:tracking-[3px] text-black px-4"
          >
            Where Strategy Meets Execution For Sustainable Growth
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative overflow-hidden bg-white py-0 md:py-0">
        <div className="absolute left-[-250px] top-[10%] h-[500px] w-[500px] rounded-full bg-[#A00A20]/10 blur-[170px]" />
        <div className="absolute right-[-250px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#012D0E]/10 blur-[170px]" />

        {/* HUGE BACK TEXT */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[60px] md:text-[240px] font-black uppercase tracking-[-4px] md:tracking-[-12px] text-black/[0.03]">
            ARVESS
          </h1>
        </div>

        {/* SCHEMES MARQUEE */}
        <div className="relative overflow-hidden py-6">
          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ duration: 18, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            className="flex w-max whitespace-nowrap gap-5 pr-5"
          >
            {[...schemes, ...schemes].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06, y: -4 }}
                className="group flex items-center gap-3 px-7 md:px-10 py-4 rounded-[18px] border border-[#A00A20]/10 bg-white text-[#012D0E] font-bold text-sm md:text-lg tracking-wide shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#A00A20]/40 hover:shadow-[0_15px_40px_rgba(160,10,32,0.15)] transition-all duration-300"
              >
                <span className="text-[#A00A20] text-sm">◆</span>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
            {/* LEFT SIDE */}
            <div data-aos="fade-right" data-aos-duration="1400" className="lg:sticky lg:top-32">
              <div className="mb-7 flex items-center gap-4">
                <div className="h-[2px] w-[40px] md:w-[60px] bg-[#012D0E]" />
                <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">
                  About Arvess
                </span>
              </div>

              <h2 className="text-[42px] sm:text-[60px] md:text-[100px] font-semibold leading-[0.9] tracking-[-3px] md:tracking-[-5px] text-[#012D0E]">
                We Build
                <span className="block text-[#A00A20]">Powerful</span>
                <span className="block text-[#012D0E]">Business</span>
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6 md:space-y-8">
              {/* CARD 1 */}
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="group relative overflow-hidden rounded-[24px] md:rounded-[30px] border border-black bg-[#A00A20]/25 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2"
              >
                <span className="absolute right-6 top-4 text-[40px] md:text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
                  01
                </span>
                <h3 className="text-[20px] md:text-[30px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black pr-12">
                  Strategic Foundation
                </h3>
                <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#A00A20] transition-all duration-700 group-hover:w-[120px]" />
                <p className="mt-5 text-[13px] md:text-[15px] leading-[1.9] text-black/60 transition-all duration-700 group-hover:text-black">
                  Arvess is a leading business consulting, startup advisory, and growth solutions firm helping
                  entrepreneurs, startups, SMEs, and enterprises build strong, scalable, and future-ready businesses.
                  From company registration, government certifications, legal compliance, and financial structuring to
                  strategic planning and business expansion, we create the foundation required for sustainable growth.
                  Our mission is to simplify complex business processes and empower founders to focus on innovation,
                  profitability, and long-term success
                </p>
              </div>

              {/* CARD 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1400"
                className="group relative overflow-hidden rounded-[24px] md:rounded-[30px] border border-black bg-white p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
              >
                <span className="absolute right-6 top-4 text-[40px] md:text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
                  02
                </span>
                <h3 className="text-[20px] md:text-[30px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black pr-12">
                  Execution Excellence
                </h3>
                <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[120px]" />
                <p className="mt-5 text-[13px] md:text-[15px] leading-[1.9] text-black/60 transition-all duration-700 group-hover:text-black/90">
                  At Arvess, strategy means nothing without execution. We work as an extension of your team to implement
                  high-impact solutions that drive measurable business outcomes. Our expertise spans startup consulting,
                  compliance management, operational optimization, digital transformation, business process outsourcing,
                  and growth acceleration. By combining industry expertise with practical execution, we help businesses
                  increase efficiency, strengthen credibility, reduce operational challenges, and achieve faster market
                  growth.
                </p>
              </div>

              {/* CARD 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1400"
                className="group relative overflow-hidden rounded-[24px] md:rounded-[30px] border border-black bg-[#012D0E]/30 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
              >
                <span className="absolute right-6 top-4 text-[40px] md:text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
                  03
                </span>
                <h3 className="text-[20px] md:text-[30px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black pr-12">
                  Growth Acceleration
                </h3>
                <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-black transition-all duration-700 group-hover:w-[120px]" />
                <p className="mt-5 text-[13px] md:text-[15px] leading-[1.9] text-black/60 transition-all duration-700 group-hover:text-black/90">
                  Growth requires more than ambition it demands the right systems, certifications, partnerships, and
                  market positioning. Arvess helps businesses unlock new opportunities through Startup India recognition,
                  DPIIT registration, ISO certifications, government schemes, business development strategies, digital
                  presence enhancement, and expansion planning. Our growth-focused approach ensures organizations remain
                  competitive, investment-ready, and positioned for long-term success in an evolving marketplace.
                </p>
              </div>

              {/* CARD 4 */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1400"
                className="group relative overflow-hidden rounded-[24px] md:rounded-[30px] border border-black bg-white p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
              >
                <span className="absolute right-6 top-4 text-[40px] md:text-[60px] font-black text-black/50 transition-all duration-700 group-hover:scale-125">
                  04
                </span>
                <h3 className="text-[20px] md:text-[30px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black pr-12">
                  Trusted Business Partner
                </h3>
                <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[120px]" />
                <p className="mt-5 text-[13px] md:text-[15px] leading-[1.9] text-black/60 transition-all duration-700 group-hover:text-black/90">
                  Arvess is committed to becoming the most trusted business support partner for ambitious entrepreneurs
                  and organizations. We believe in delivering transparent guidance, professional expertise, and
                  result-driven solutions tailored to each client's unique objectives. Whether you are launching a
                  startup, scaling an established company, or seeking operational support, Arvess provides end-to-end
                  consulting and outsourcing services designed to help businesses grow smarter, faster, and stronger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative overflow-hidden bg-white py-12 md:py-15">
        <div className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-20 text-center">
            <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">
              Our Services
            </span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[100px] font-semibold leading-[0.9] tracking-[-3px] md:tracking-[-5px] text-[#012D0E]">
              What We
              <span className="text-[#A00A20]"> Deliver</span>
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <div className="group rounded-[28px] md:rounded-[40px] border border-black bg-white p-7 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
              <h3 className="text-[24px] md:text-[34px] font-semibold">01. Business Consulting</h3>
              <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[130px]" />
              <p className="mt-5 text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">
                Strategic business consulting services designed to help startups, SMEs, and enterprises build strong
                foundations, improve operational efficiency, ensure regulatory compliance, and achieve sustainable
                business growth through expert advisory and execution support.
              </p>
            </div>

            <div className="group rounded-[28px] md:rounded-[40px] bg-[#A00A20]/30 border border-black p-7 md:p-10 transition-all duration-700 hover:-translate-y-2">
              <h3 className="text-[24px] md:text-[34px] font-semibold text-black">
                02. Compliance & Certifications
              </h3>
              <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[130px]" />
              <p className="mt-5 text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">
                Comprehensive support for Startup India Registration, DPIIT Recognition, ISO Certification, NPOP
                Certification, business registrations, legal documentation, and government compliance services that
                enhance credibility and unlock growth opportunities.
              </p>
            </div>

            <div className="group rounded-[28px] md:rounded-[40px] border border-black bg-[#012D0E]/30 p-7 md:p-10 transition-all duration-700 hover:-translate-y-2">
              <h3 className="text-[24px] md:text-[34px] font-semibold text-black">03. Digital Transformation</h3>
              <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[130px]" />
              <p className="mt-5 text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">
                End-to-end digital transformation solutions including branding, website development, SEO, digital
                marketing, business automation, and online growth strategies that help businesses strengthen their
                market presence and generate measurable results.
              </p>
            </div>

            <div className="group rounded-[28px] md:rounded-[40px] border border-black bg-white p-7 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
              <h3 className="text-[24px] md:text-[34px] font-semibold">04. Growth & Expansion</h3>
              <div className="mt-4 h-[2px] w-[70px] md:w-[90px] bg-[#012D0E] transition-all duration-700 group-hover:w-[130px]" />
              <p className="mt-5 text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">
                Business growth consulting focused on funding assistance, government grant schemes, investor readiness,
                market expansion, strategic partnerships, and scalable growth frameworks that drive long-term success
                and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-2 overflow-hidden">
        <div className="text-center mb-12">
          <span className="text-[14px] md:text-[18px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">
            Our Clients
          </span>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-6 md:gap-10"
          >
            {[...clients, ...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[80px] w-[140px] md:h-[100px] md:w-[180px] rounded-[16px] md:rounded-[20px] border border-black/10 bg-white shadow-sm hover:shadow-lg transition-all"
              >
                <Image src={logo} alt="Client Logo" width={90} height={50} className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE ARVESS */}
      <section className="relative overflow-hidden bg-white py-16 md:py-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-[60px] md:text-[240px] font-black uppercase tracking-[-4px] md:tracking-[-12px] text-black/[0.03]">
            ARVESS
          </h1>
        </div>

        <div className="relative z-20 mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-24 text-center">
            <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[90px] font-semibold leading-[0.9] tracking-[-3px] md:tracking-[-5px] text-[#012D0E]">
              Why
              <span className="text-[#A00A20]"> Arvess</span>
            </h2>
          </div>

          <div className="space-y-5 md:space-y-8">
            <div className="group flex flex-col md:flex-row md:items-center justify-between rounded-[28px] md:rounded-[40px] border border-black bg-[#A00A20]/30 p-6 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
              <div>
                <span className="text-[#000000] text-xs tracking-[4px] uppercase">01</span>
                <h3 className="mt-2 text-[26px] md:text-[48px] font-semibold tracking-[-1px] md:tracking-[-2px]">
                  Strategic Expertise
                </h3>
              </div>
              <p className="mt-4 md:mt-0 max-w-full md:max-w-[650px] text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">
                Industry-focused business consulting backed by practical insights, regulatory knowledge, and
                growth-driven strategies.
              </p>
            </div>

            <div className="group flex flex-col md:flex-row md:items-center border border-black justify-between rounded-[28px] md:rounded-[40px] bg-white p-6 md:p-12 transition-all duration-700 hover:-translate-y-2">
              <div>
                <span className="text-black text-xs tracking-[4px] uppercase">02</span>
                <h3 className="mt-2 text-[26px] md:text-[48px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black">
                  Proven Execution
                </h3>
              </div>
              <p className="mt-4 md:mt-0 max-w-full md:max-w-[650px] text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">
                A hands-on approach that transforms business plans into real-world results through structured
                implementation and continuous support.
              </p>
            </div>

            <div className="group flex flex-col md:flex-row md:items-center justify-between border border-black rounded-[28px] md:rounded-[40px] bg-[#012D0E]/30 p-6 md:p-12 transition-all duration-700 hover:-translate-y-2">
              <div>
                <span className="text-black text-xs tracking-[4px] uppercase">03</span>
                <h3 className="mt-2 text-[26px] md:text-[48px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black">
                  Scalable Growth
                </h3>
              </div>
              <p className="mt-4 md:mt-0 max-w-full md:max-w-[650px] text-black/60 leading-[2] group-hover:text-black/90 text-[14px] md:text-base">
                Solutions designed to improve credibility, attract opportunities, strengthen operations, and accelerate
                long-term business growth.
              </p>
            </div>

            <div className="group flex flex-col md:flex-row md:items-center justify-between rounded-[28px] md:rounded-[40px] border border-black bg-white p-6 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2">
              <div>
                <span className="text-black text-xs tracking-[4px] uppercase">04</span>
                <h3 className="mt-2 text-[26px] md:text-[48px] font-semibold tracking-[-1px] md:tracking-[-2px]">
                  Future-Ready Systems
                </h3>
              </div>
              <p className="mt-4 md:mt-0 max-w-full md:max-w-[650px] text-black/60 group-hover:text-black/90 leading-[2] text-[14px] md:text-base">
                We create future-ready business ecosystems by strengthening compliance, operations, technology, and
                growth frameworks that support long-term scalability and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="relative overflow-hidden bg-white py-16 md:py-10">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-24">
            <span className="text-[14px] md:text-[20px] uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20] font-bold">
              Core Expertise
            </span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[90px] font-bold leading-[0.9] tracking-[-3px] md:tracking-[-6px] text-[#012D0E]">
              Our
              <span className="text-[#A00A20]"> Specializations</span>
            </h2>
          </div>

          <div className="space-y-8 md:space-y-10">
            <div className="group flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 pb-8 md:pb-10 gap-4">
              <div>
                <span className="text-[13px] tracking-[5px] font-bold text-[#012D0E]">01</span>
                <h3 className="mt-2 text-[40px] sm:text-[60px] md:text-[80px] font-black tracking-[-2px] md:tracking-[-4px] text-[#A00A20]">
                  GRANTS
                </h3>
              </div>
              <p className="max-w-full md:max-w-[500px] text-black leading-[2] text-[14px] md:text-base">
                Helping startups and businesses secure government grants, startup incentives, subsidy programs, DPIIT
                benefits, and funding opportunities that fuel innovation and sustainable growth.
              </p>
            </div>

            <div className="group flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 pb-8 md:pb-10 gap-4">
              <div>
                <span className="text-[13px] font-bold tracking-[5px] text-[#A00A20]">02</span>
                <h3 className="mt-2 text-[40px] sm:text-[60px] md:text-[80px] font-black tracking-[-2px] md:tracking-[-4px] text-[#012D0E]">
                  INVESTORS
                </h3>
              </div>
              <p className="max-w-full md:max-w-[500px] text-black leading-[2] text-[14px] md:text-base">
                Providing investor readiness, fundraising advisory, pitch support, financial structuring, and capital
                access solutions that help businesses attract investment and scale successfully.
              </p>
            </div>

            <div className="group flex flex-col md:flex-row md:items-center justify-between pb-8 md:pb-10 gap-4">
              <div>
                <span className="text-[13px] font-bold tracking-[5px] text-[#012D0E]">03</span>
                <h3 className="mt-2 text-[40px] sm:text-[60px] md:text-[80px] font-black tracking-[-2px] md:tracking-[-4px] text-[#A00A20]">
                  DEPTH
                </h3>
              </div>
              <p className="max-w-full md:max-w-[500px] text-black leading-[2] text-[14px] md:text-base">
                Combining business strategy, regulatory expertise, operational excellence, and market intelligence to
                deliver long-term growth, competitive advantage, and measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative overflow-hidden bg-white py-16 md:py-10">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="mb-12 md:mb-24">
            <span className="text-[14px] md:text-[20px] font-bold uppercase tracking-[4px] md:tracking-[6px] text-[#A00A20]">
              Our Process
            </span>
            <h2 className="mt-4 text-[42px] sm:text-[60px] md:text-[90px] font-bold text-[#012D0E] tracking-[-3px] md:tracking-[-6px] leading-[0.9]">
              <span className="text-[#A00A20]">The </span>
              Arvess
              <span className="text-[#A00A20]"> Method</span>
            </h2>
          </div>

          {[
            { num: "01", title: "Discover", color: "text-[#A00A20]/15", headColor: "text-[#012D0E]", text: "We begin by understanding your business goals, challenges, market position, and growth objectives to identify the right opportunities and strategic direction." },
            { num: "02", title: "Strategize", color: "text-[#012D0E]/15", headColor: "text-[#A00A20]", text: "Our experts develop tailored business strategies, compliance roadmaps, funding plans, and growth frameworks aligned with your long-term vision" },
            { num: "03", title: "Execute", color: "text-[#A00A20]/15", headColor: "text-[#012D0E]", text: "We implement solutions with precision, managing registrations, certifications, compliance requirements, digital initiatives, and business growth activities." },
            { num: "04", title: "Scale", color: "text-[#012D0E]/15", headColor: "text-[#A00A20]", text: "Through continuous support, optimization, and expansion planning, we help businesses improve performance, unlock opportunities, and achieve sustainable growth." },
          ].map((step, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-[0.3fr_1fr] items-start gap-4 md:gap-10 border-t border-black/10 py-10 md:py-16 ${i === 3 ? "border-b" : ""}`}
            >
              <h1 className={`text-[70px] md:text-[180px] font-black leading-none ${step.color}`}>{step.num}</h1>
              <div>
                <h3 className={`text-[36px] md:text-[70px] ${step.headColor} font-bold tracking-[-2px] md:tracking-[-3px]`}>
                  {step.title}
                </h3>
                <p className="mt-4 md:mt-6 max-w-[700px] text-black/60 leading-[2] text-[14px] md:text-base">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1800px] px-4 md:px-6">
          <div className="mb-12 md:mb-24 text-center">
            <span className="text-[14px] md:text-[20px] uppercase font-bold tracking-[4px] md:tracking-[6px] text-[#A00A20]">
              Pricing Plans
            </span>
            <h2 className="mt-4 text-[36px] sm:text-[52px] md:text-[90px] text-[#012D0E] font-bold tracking-[-2px] md:tracking-[-6px] leading-[0.95]">
              Solutions For Every Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-5 md:gap-8">
            {/* CARD 1 */}
            <div className="rounded-[28px] md:rounded-[40px] border border-black/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
              <p className="uppercase tracking-[4px] text-black/40 text-xs">3 Months</p>
              <h3 className="mt-5 text-[32px] md:text-[42px] font-black tracking-[-1px] md:tracking-[-2px]">
                Grant Basic
              </h3>
              <h4 className="mt-6 text-[42px] md:text-[55px] font-black tracking-[-2px] md:tracking-[-3px] text-[#A00A20]">
                ₹15K
              </h4>
              <p className="mt-3 text-black/60 leading-[1.9] text-[14px] md:text-base">
                Perfect for startups looking for grant opportunities.
              </p>
              <button className="mt-6 md:mt-8 w-full rounded-full border border-black/10 py-3 md:py-4 font-semibold hover:border-[#A00A20] transition text-sm md:text-base">
                Get Started →
              </button>
              <div className="mt-8 space-y-3 text-black/70 text-[14px] md:text-base">
                <p>✓ Grant Assessment</p>
                <p>✓ Startup Roadmap</p>
                <p>✓ 3 Grant Applications</p>
                <p>✓ Email Support</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-[28px] md:rounded-[40px] border border-black/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
              <p className="uppercase tracking-[4px] text-black/40 text-xs">6 Months</p>
              <h3 className="mt-5 text-[32px] md:text-[42px] font-black tracking-[-1px] md:tracking-[-2px]">
                Grant Plus
              </h3>
              <h4 className="mt-6 text-[42px] md:text-[55px] font-black tracking-[-2px] md:tracking-[-3px] text-[#012D0E]">
                ₹25K
              </h4>
              <p className="mt-3 text-black/60 leading-[1.9] text-[14px] md:text-base">
                Enhanced grant and funding preparation support.
              </p>
              <button className="mt-6 md:mt-8 w-full rounded-full border border-black/10 py-3 md:py-4 font-semibold hover:border-[#012D0E] transition text-sm md:text-base">
                Get Started →
              </button>
              <div className="mt-8 space-y-3 text-black/70 text-[14px] md:text-base">
                <p>✓ Financial Report</p>
                <p>✓ 5 Grant Applications</p>
                <p>✓ Funding Strategy</p>
                <p>✓ Priority Support</p>
              </div>
            </div>

            {/* FEATURED CARD */}
            <div className="relative rounded-[28px] md:rounded-[40px] bg-[#A00A20] p-6 md:p-8 text-white shadow-[0_25px_80px_rgba(160,10,32,0.25)] sm:scale-[1.03]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#012D0E] px-5 md:px-6 py-2 text-xs md:text-sm font-semibold whitespace-nowrap">
                Most Popular
              </div>
              <p className="uppercase tracking-[4px] text-white/70 text-xs mt-4">9 Months</p>
              <h3 className="mt-5 text-[32px] md:text-[42px] font-black tracking-[-1px] md:tracking-[-2px]">
                Investor Ready
              </h3>
              <h4 className="mt-6 text-[42px] md:text-[55px] font-black tracking-[-2px] md:tracking-[-3px]">₹45K</h4>
              <p className="mt-3 text-white/80 leading-[1.9] text-[14px] md:text-base">
                Complete investor readiness and funding package.
              </p>
              <button className="mt-6 md:mt-8 w-full rounded-full bg-white py-3 md:py-4 font-semibold text-[#A00A20] text-sm md:text-base">
                Book Now →
              </button>
              <div className="mt-8 space-y-3 text-white/90 text-[14px] md:text-base">
                <p>✓ Investor Pitch Deck</p>
                <p>✓ 10 Investor Connections</p>
                <p>✓ Funding Readiness</p>
                <p>✓ Dedicated Advisor</p>
                <p>✓ Executive Summary</p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="rounded-[28px] md:rounded-[40px] border border-black/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
              <p className="uppercase tracking-[4px] text-black/40 text-xs">12 Months</p>
              <h3 className="mt-5 text-[32px] md:text-[42px] font-black tracking-[-1px] md:tracking-[-2px]">
                Growth Advisory
              </h3>
              <h4 className="mt-6 text-[42px] md:text-[55px] font-black tracking-[-2px] md:tracking-[-3px] text-[#A00A20]">
                ₹75K
              </h4>
              <p className="mt-3 text-black/60 leading-[1.9] text-[14px] md:text-base">
                Strategic planning and long-term growth consulting.
              </p>
              <button className="mt-6 md:mt-8 w-full rounded-full border border-black/10 py-3 md:py-4 font-semibold hover:border-[#A00A20] transition text-sm md:text-base">
                Get Started →
              </button>
              <div className="mt-8 space-y-3 text-black/70 text-[14px] md:text-base">
                <p>✓ Growth Strategy</p>
                <p>✓ Investor Relations</p>
                <p>✓ Expansion Planning</p>
                <p>✓ Dedicated Consultant</p>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="rounded-[28px] md:rounded-[40px] border border-black/10 bg-white p-6 md:p-8 shadow-sm transition-all duration-500 hover:-translate-y-2">
              <p className="uppercase tracking-[4px] text-black/40 text-xs">Enterprise</p>
              <h3 className="mt-5 text-[32px] md:text-[42px] font-black tracking-[-1px] md:tracking-[-2px]">Custom</h3>
              <h4 className="mt-6 text-[42px] md:text-[55px] font-black tracking-[-2px] md:tracking-[-3px] text-[#012D0E]">
                Quote
              </h4>
              <p className="mt-3 text-black/60 leading-[1.9] text-[14px] md:text-base">
                Fully customized solutions for enterprises.
              </p>
              <button className="mt-6 md:mt-8 w-full rounded-full bg-[#012D0E] text-white py-3 md:py-4 font-semibold text-sm md:text-base">
                Contact Us →
              </button>
              <div className="mt-8 space-y-3 text-black/70 text-[14px] md:text-base">
                <p>✓ End-to-End Execution</p>
                <p>✓ Strategic Partnerships</p>
                <p>✓ Dedicated Team</p>
                <p>✓ Premium Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}