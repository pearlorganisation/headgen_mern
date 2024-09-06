// import react, { useEffect, useState } from "react";

import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
import Dating from "./pages/Dating/Dating";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import CancellationAndRefunds from "./pages/CancellationAndRefunds/CancellationAndRefunds";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import ContactUs from "./pages/ContactUs/ContactUs";
import UploadPage from "./pages/UploadPage/UploadPage";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import FreeHeadshots from "./pages/FreeHeadshots/FreeHeadshots";
import FreeHeadshotsTab from "./pages/FreeHeadshots/FreeHeadshotsTab";
import { useEffect } from "react";
import AddReview from "./pages/Reviews/AddReview";
import Reviews from "./pages/Reviews/Reviews";
// import ComingSoon from "./pages/NotFound/ComingSoon";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        {/* Home page routes */}
        <Route path="/" element={<Home />} />
        <Route path="/ai-headshot-generator" element={<Home />} />
        <Route path="/ai-professional-headshots" element={<Home />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/cancellation-and-refunds"
          element={<CancellationAndRefunds />}
        />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dating-ai-headshot-generator" element={<Dating />} />

        {/* Upload page routes */}
        <Route
          path="/dating-ai-headshots"
          element={<UploadPage section={"dating"} />}
        />

        <Route
          path="/corporate-ai-headshots"
          element={<UploadPage section={"Corporate Headshots"} />}
        />
        <Route
          path="/doctor-ai-headshots"
          element={<UploadPage section={"Doctor Headshots"} />}
        />
        <Route
          path="/lawyer-ai-headshots"
          element={<UploadPage section={"Lawyer Headshots"} />}
        />
        <Route
          path="/salesman-ai-headshots"
          element={<UploadPage section={"Sales Headshots"} />}
        />
        <Route
          path="/students-ai-headshots"
          element={<UploadPage section={"Students Headshots"} />}
        />
        <Route
          path="/teacher-ai-headshots"
          element={<UploadPage section={"Teacher Headshots"} />}
        />
        <Route path="/free-ai-headshot-generator" element={<FreeHeadshots />} />
        <Route path="/free-ai-headshots" element={<FreeHeadshotsTab />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addreview" element={<AddReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
