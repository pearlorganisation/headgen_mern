// import react, { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
import Dating from "./pages/Dating/Dating";
import NotFound from './pages/NotFound/NotFound';
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer"
import CancellationAndRefunds from "./pages/CancellationAndRefunds/CancellationAndRefunds";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import ContactUs from "./pages/ContactUs/ContactUs";
import UploadPage from "./pages/UploadPage/UploadPage";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel/PaymentCancel";
import Checkout from "./pages/Checkout/Checkout";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import FreeHeadshots from "./pages/FreeHeadshots/FreeHeadshots";
import FreeHeadshotsTab from "./pages/FreeHeadshots/FreeHeadshotsTab";
import { useEffect } from "react";
import AddReview from "./pages/Reviews/AddReview";
import Reviews from "./pages/Reviews/Reviews";


function App() {

  const location = useLocation()  

  useEffect(() => {
    window.scrollTo({top:0, left:0, behavior: 'smooth'})
  }, [location])
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cancellationandrefunds" element={<CancellationAndRefunds />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/dating" element={<Dating />} />
        <Route path="/upload/:headshot" element={<UploadPage />} />
        <Route path="/test" element={<Checkout />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addreview" element={<AddReview />} />
        <Route path="/freeHeadshots" element={<FreeHeadshots />} />
        <Route path="/freeheadshotupload" element={<FreeHeadshotsTab />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;