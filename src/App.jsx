import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CompanyIncorporationLeft from "./Pages/HOUSEOFLEGALFOUNDATION/Companyincorporation";
import Government from "./Pages/HOUSEOFLEGALFOUNDATION/Government";
import LegalCertification from "./Pages/HOUSEOFLEGALFOUNDATION/LegalCertification";
import AnnualCompliances from "./Pages/HOUSEOFLEGALFOUNDATION/Annualcompliances";
import { Financialmodeling } from "./Pages/HOUSEOFLEGALFOUNDATION/Financialmodeling";
import StaartupIndiaFund from "./Pages/OfficeOfOpportunity/StaartupIndiaFund";
import CACS from "./Pages/HOUSEOFLEGALFOUNDATION/CACS";
import Industryfunding from "./Pages/OfficeOfOpportunity/Industryfunding";
import Womenspecification from "./Pages/OfficeOfOpportunity/Womenspecification";
import Angel from "./Pages/OfficeOfOpportunity/Angel";
import Privatefunding from "./Pages/OfficeOfOpportunity/Privatefunding";
import GovernmentandPrivateloans from "./Pages/OfficeOfOpportunity/GovernmentandPrivateloans";
import Branding from "./Pages/StudioDigital&branding/Branding";
import Foooter from "./Pages/Foooter";
import TermsCondition from "./Pages/Moree/TermsCondition";
import PrivacyPolicy from "./Pages/Moree/PrivacyPolicy";
import RefundPolicy from "./Pages/Moree/RefundPolicy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/companyincorporation" element={<CompanyIncorporationLeft/>} />
        <Route path="/government" element={<Government/>} />
        <Route path="/legalcertification" element={<LegalCertification/>} />
        <Route path="/annualCompliances" element={<AnnualCompliances/>} />
        <Route path="/CA&CS" element={<CACS/>} />
        <Route path="/financialmodel" element={<Financialmodeling/>} />
        <Route path="/startup" element={<StaartupIndiaFund/>} />
        <Route path="/industryfund" element={<Industryfunding/>} />
        <Route path="/womenspecific" element={<Womenspecification/>} />
        <Route path="/angle" element={<Angel/>} />
        <Route path="/privatefunding" element={<Privatefunding/>} />
        <Route path="/governmentandprivateloans" element={<GovernmentandPrivateloans/>} />
        <Route path="/branding" element={<Branding/>} />
        <Route path="/termscondition" element={<TermsCondition/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/refundpolicy" element={<RefundPolicy/>} />

        
      </Routes>
      <Foooter/>
    </BrowserRouter>
  );
}

export default App;
