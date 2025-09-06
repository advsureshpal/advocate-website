import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import heroImage from "./assets/Image.png";
import PP from "./assets/PP.png";

// Define this function inside your component
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      {/* ================= Navbar ================= */}
      <div className="w-full bg-white px-4 sm:px-6 py-4 md:h-[102.76px] flex justify-center items-center">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Mobile GET IN TOUCH */}
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Logo */}
            <div className="text-[#1E1E1E] text-[20px] sm:text-[32px] md:text-[20px] font-black uppercase font-vollkorn leading-7">
              Adv. S.K. Pal
            </div>

            {/* Mobile GET IN TOUCH */}
            <div className="md:hidden">
              <div
                onClick={() => scrollToSection("contact")}
                className="px-3 py-2 text-[#1E1E1E] text-[16px] font-normal uppercase font-montserrat cursor-pointer hover:text-[#007BFF] transition-colors duration-200"
              >
                GET IN TOUCH
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-row justify-end items-center gap-8 w-full md:w-auto mt-4 md:mt-0">
            {[
              { name: "PRACTICE AREA", id: "practice" },
              { name: "My Approach", id: "approach" },
              { name: "GET IN TOUCH", id: "contact" },
            ].map((link, index) => (
              <div
                key={index}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-6 text-[#1E1E1E] text-[16px] sm:text-[18px] font-normal uppercase font-montserrat leading-[24px] sm:leading-[28.8px] cursor-pointer hover:text-[#007BFF] transition-colors duration-200"
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ================= Hero Section ================= */}
      <div className="w-full h-[250px] aspect-[16/9] sm:h-[480px] md:h-[650px] px-0 sm:px-5 flex justify-center items-start ">
        <div
          className="w-full h-full md:max-w-[1300px] -mt-10 md:mt-0 mb-0 bg-contain bg-no-repeat bg-center flex justify-center items-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        ></div>
      </div>

      {/* ================= About Section ================= */}
      <section className="w-full px-5 bg-white pt-2 pb-[40px] sm:pb-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <header className="text-center md:text-left">
              <p className=" text-[40px] sm:text-[50px] md:text-[60px] font-vollkorn font-medium text-gray-900 leading-relaxed grid gap-[20px] ">
                <span className="block text-[28px] sm:text-[48px] md:text-6xl  ">
                  Advocate Suresh Kumar Pal -
                </span>
                <span className="text-black-700 font-medium justify-center text-[20px] sm:text-[32px] md:text-[53px] leading-snug md:leading-[3.5rem] text-justify">
                  Delivering trusted legal expertise with integrity, precision,
                  and unwavering commitment to justice.
                </span>
              </p>
            </header>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Column 1 */}
              <div className="grid gap-[16px] md:gap-[24px] space-y-4 md:space-y-6 font-montserrat text-base sm:text-lg md:text-[24px] leading-7 text-justify text-black-100 text-opacity-30">
                <p className="montserrat">
                  I am Advocate Suresh Kumar Pal, enrolled with the Bar Council
                  of India and the Bar Council of Uttar Pradesh. With a
                  dedicated legal practice, I have consistently represented
                  clients before the Hon’ble High Court of Judicature at
                  Allahabad, the Debts Recovery Tribunal (DRT), and various
                  other tribunals and forums across India.
                </p>
                <p className="montserrat">
                  My core areas of professional practice include civil
                  litigation, criminal defense, matrimonial and family disputes,
                  service matters, and banking recovery under the SARFAESI Act.
                  I offer practical and strategic legal solutions tailored to
                  the specific needs of each client, whether individuals,
                  businesses, or institutions.
                </p>
              </div>

              {/* Column 2 */}
              <div className="grid gap-[16px] md:gap-[24px] space-y-4 md:space-y-6 font-montserrat text-base sm:text-lg md:text-[24px] leading-7 text-justify text-black-100 text-opacity-30">
                <p className="relative montserrat">
                  Drawing from years of experience across diverse legal forums,
                  I adopt a client-focused approach that combines legal clarity
                  with efficient representation. I believe in maintaining
                  transparency, timely communication, and thorough preparation
                  in every matter I handle.
                </p>
                <p className="montserrat">
                  I am committed to upholding the highest standards of legal
                  integrity, professional ethics, and due process. My practice
                  is grounded in respect for the law and a firm dedication to
                  delivering justice with honesty, diligence, and
                  accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="practice"
        className="w-full py-[60px] md:py-[80px]"
        style={{ backgroundColor: "#ECECEC" }}
      >
        <div className="w-[90%] md:max-w-[75%] mx-auto">
          {/* Card */}
          <div className="bg-gray-50 shadow-md rounded-[30px] md:rounded-[50px] py-[60px] md:py-[100px] px-[30px] sm:px-[50px] md:px-[115px]">
            <div className="text-base sm:text-lg md:text-lg leading-7 text-gray-800 space-y-6">
              {/* Section 1 */}
              <header className="mb-6 md:mb-8 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-vollkorn font-semibold text-gray-900 vollkron">
                  Practice Areas
                </h2>
              </header>

              <div>
                <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold text-gray-900">
                  Litigation & Dispute Resolution
                </h3>
                <ul className="montserrat list-disc list-inside mt-2 space-y-1">
                  <li>
                    Civil Disputes – Suits, injunctions, property & contracts
                  </li>
                  <li>Criminal Law – Trials, appeals, bail & defence</li>
                  <li>
                    Cheque Bounce (NI Act) – Prosecution & defence, Sec. 138
                  </li>
                  <li>
                    Matrimonial & Family – Divorce, custody, maintenance, DV
                  </li>
                  <li>
                    Consumer Protection – Forums for service/trade disputes
                  </li>
                  <li>
                    Writs & Constitutional Law – High Courts & Supreme Court
                  </li>
                  <li>Arbitration – Domestic & international ADR</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold text-gray-900">
                  Banking, Finance & Recovery
                </h3>
                <ul className="montserrat list-disc list-inside mt-2 space-y-1">
                  <li>
                    Banking & Recovery – DRT, DRAT, SARFAESI, debt recovery &
                    enforcement
                  </li>
                  <li>
                    Insolvency (IBC) – Creditor & debtor representation in
                    resolution matters
                  </li>
                  <li>
                    NCLT & Corporate Disputes – Company law, shareholder &
                    management issues
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold text-gray-900">
                  Regulatory & Enforcement
                </h3>
                <ul className="montserrat list-disc list-inside mt-2 space-y-1">
                  <li>
                    Prevention of Corruption Act – Defence & prosecution in
                    corruption cases
                  </li>
                  <li>
                    CBI Matters – Representation in CBI-investigated cases
                  </li>
                  <li>NCB Matters – Defence in NDPS Act offences</li>
                  <li>
                    ED Matters – Money laundering & PMLA attachment proceedings
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold text-gray-900">
                  Tribunal & Administrative Matters
                </h3>
                <ul className="montserrat list-disc list-inside mt-2 space-y-1">
                  <li>
                    CAT Matters – Service law disputes for govt. employees &
                    officials
                  </li>
                  <li>
                    Civil Service & Education – Recruitment, appointments, exams
                    & institutions
                  </li>
                  <li>
                    RERA Disputes – Representation of buyers, builders & agents
                    before RERA
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold text-gray-900">
                  Taxation
                </h3>
                <ul className="montserrat list-disc list-inside mt-2 space-y-1">
                  <li>
                    Direct & Indirect Tax – Advisory & litigation on income tax,
                    GST & other tax matters
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="approach" className="py-[60px] md:py-[100px] bg-white">
        <div className="w-[90%] md:max-w-8xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-vollkorn font-semibold text-gray-900 pl-4 md:pl-65">
              My Approach
            </h2>
          </div>

          {/* Card */}
          <div className="bg-gray-50 w-full rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <p className="montserrat text-base sm:text-lg md:text-[22px] leading-relaxed text-black-700">
              <span className="block mb-6 font-regular montserrat pl-4 md:pl-60 w-full">
                My practice is built on trust, transparency, and a commitment to
                guiding clients with clarity and confidence. Consultations are
                available by appointment and remain strictly confidential.
              </span>

              <span className="block my-4 sm:my-6"></span>

              <span className="block mb-6 montserrat italic pl-4 md:pl-60 w-full">
                <span className="mb-6 font-bold text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
                  “
                </span>
                I strive to ensure that each engagement is handled with
                professional discretion, adherence to statutory and
                constitutional principles, and timely communication with
                procedural transparency.
              </span>

              <span className="block my-4 sm:my-6"></span>

              <span className="block mb-6 montserrat italic pl-4 md:pl-60 w-full">
                <span className="mb-6 font-bold text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
                  “
                </span>
                I believe that legal representation should be objective,
                unbiased, and grounded in a clear understanding of the client’s
                rights and obligations under the law. My work is driven by a
                responsibility to assist the courts and tribunals in the pursuit
                of justice while remaining within the ethical limits of
                advocacy.
              </span>
            </p>
          </div>
        </div>
      </section>
      <footer
        id="contact"
        className="max-w-full bg-black text-white py-8 sm:py-12 px-4 md:px-8 w-full flex flex-col md:flex-row justify-center"
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-8 pt-[40px] md:pt-[80px]">
          {/* Logo / Image */}
          <div className="flex items-center justify-center">
            <img
              className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[1200px] h-auto rounded-lg shadow-lg"
              src={PP}
              alt="Advocate Suresh Kumar Pal"
            />
          </div>

          {/* Contact Info */}
          <div className="max-w-full md:col-span-2 p-4">
            <div className="bg-black text-white p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold mb-2 leading-[32px] font-sans [font-feature-settings:'liga'_off,'clig'_off] montserrat">
                Get In Touch
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-[20px] mb-6 leading-[24px] sm:leading-[28px] md:leading-[30px] font-montserrat">
                Please note that no legal opinion is provided unless formally
                engaged, and all consultations remain confidential as per
                professional conduct rules.
              </p>

              <div className="space-y-4 text-base sm:text-lg md:text-[20px] underline leading-[26px] sm:leading-[28px] md:leading-[30px] font-montserrat">
                <p className="text-gray-200 flex items-center gap-3 sm:gap-4">
                  <FaPhoneAlt className="text-gray-400" />
                  <a href="tel:+9191404344453">+91-9140434453</a>
                </p>

                <p className="text-gray-200 flex items-center gap-3 sm:gap-4 uppercase">
                  <FaEnvelope className="text-gray-400" />
                  <a href="mailto:advsureshipal.co.in@gmail.com">
                    advsureshpal.co.in@gmail.com
                  </a>
                </p>

                <div className="flex items-start gap-3 sm:gap-4">
                  <FaMapMarkerAlt className="text-gray-400 mt-1" />
                  <p className="text-gray-200">
                    Chamber No. 95, High Court, Allahabad <br />
                    Office at: 5A, Sardar Patel Marg, Civil Lines, <br />
                    Prayagraj, Uttar Pradesh 211001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
