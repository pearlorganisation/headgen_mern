// import react, { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
import Dating from "./pages/Dating/Dating";
import NotFound from './pages/NotFound/NotFound';
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer"
import BeforeAfterSlider from "./components/BeforeAfterSlider/BeforeAfterSlider";
import CancellationAndRefunds from "./pages/CancellationAndRefunds/CancellationAndRefunds";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import ContactUs from "./pages/ContactUs/ContactUs";
import UploadPage from "./pages/UploadPage/UploadPage";
import Customize from "./pages/Customize/Customize";

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cancellationandrefunds" element={<CancellationAndRefunds />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dating" element={<Dating />} />
        <Route path="/upload/:headshot?" element={<UploadPage />} />
        <Route path="/test" element={<BeforeAfterSlider />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
