import React, { useEffect, useState } from "react";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import InfinitySlider from "../../components/InfinitySlider/InfinitySlider";
import BiInfinitySlider from "../../components/BiInfinitySlider/BiInfinitySlider";
import DatingHero from "../../components/DatingHero/DatingHero";
import FaqAccordian from "../../components/FaqAccordian/FaqAccordian";
import Carousel from "../../components/Carousel/Carousel";
import BlogCards from "../../components/BlogCards/BlogCards";
import { FaLinkedin } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoDocumentTextOutline, IoStarSharp } from "react-icons/io5";
import AppSvgs from "../../components/AppSvgs/AppSvgs";

const HowItWorks = () => {
  //   const [isAnimated, setIsAnimated] = useState(false);

  const imgData1 = [
    { name: "", path: "/slider1/1.jpg" },
    { name: "", path: "/slider1/2.jpg" },
    { name: "", path: "/slider1/3.jpg" },
    { name: "", path: "/slider1/4.jpg" },
    { name: "", path: "/slider1/5.jpg" },
    { name: "", path: "/slider1/6.jpg" },
    { name: "", path: "/slider1/7.jpg" },
    { name: "", path: "/slider1/8.jpg" },
    { name: "", path: "/slider1/9.jpg" },
    { name: "", path: "/slider1/10.jpg" },
    { name: "", path: "/slider1/11.jpg" },
    { name: "", path: "/slider1/12.jpg" },
    { name: "", path: "/slider1/13.jpg" },
    { name: "", path: "/slider1/14.jpg" },
    { name: "", path: "/slider1/15.jpg" },
    { name: "", path: "/slider1/16.jpg" },
  ];

  const reviewData1 = [
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
    { name: "", path: "/reviewSlider/1.png" },
    { name: "", path: "/reviewSlider/2.png" },
  ];

  const cardData = [
    {
      title: "Upload a selfie",
      content:
        "Start your professional AI image generation experience by uploading your selfie.",
      imgPath: "/cardImgs/1.png",
    },
    {
      title: "Make Payment",
      content:
        "Make your payment to unlock the power of AI and transform your image into stunning professional images.",
      imgPath: "/cardImgs/2.png",
    },
    {
      title: "Get Professional Images",
      content:
        "Get professional images all delivered to you within a swift window of time.",
      imgPath: "/cardImgs/3.png",
    },
  ];

  const logoData = [
    {
      name: "nike logo",
      imgPath: "/logos/nike.png",
    },
    {
      name: "microsoft logo",
      imgPath: "/logos/microsoft.png",
    },
    {
      name: "google logo",
      imgPath: "/logos/google.png",
    },
    {
      name: "walmart logo",
      imgPath: "/logos/walmart.png",
    },
    {
      name: "harvard logo",
      imgPath: "/logos/harvard.png",
    },
  ];

  const carouselData = [
    { name: "", path: "/slider1/1.jpg" },
    { name: "", path: "/slider1/2.jpg" },
    { name: "", path: "/slider1/3.jpg" },
    { name: "", path: "/slider1/4.jpg" },
    { name: "", path: "/slider1/1.jpg" },
    { name: "", path: "/slider1/2.jpg" },
    { name: "", path: "/slider1/3.jpg" },
    { name: "", path: "/slider1/4.jpg" },
  ];

  const useCaseData = [
    {
      title: "Linkedin Photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "/useCase/LinkedIn.png",
      svg: (
        <>
          <FaLinkedin size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Resume",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "/useCase/Resume.png",
      svg: (
        <>
          <IoDocumentTextOutline size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Team photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "/useCase/TeamPhoto.png",
      svg: (
        <>
          <MdGroups size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Portfolio Website",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "/useCase/PortfolioWebsite.png",
    },
    {
      title: "Job Portal",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "/useCase/JobPortal.png",
    },
  ];

  const blogData = [
    {
      title: "",
      content: "10 Tips to Generate the Best AI Headshots",
      imgPath: "/aiBlog/1.png",
      btnLink: "/",
    },
    {
      title: "",
      content: "Can you use Professional Headshots on LinkedIn?",
      imgPath: "/aiBlog/2.png",
      btnLink: "/",
    },
    {
      title: "",
      content: "Do’s & Don’ts for the best results for AI Image Generation",
      imgPath: "/aiBlog/3.png",
      btnLink: "/",
    },
  ];

  const privacyFirstData = [
    {
      title: "Advanced Encryption",
      content:
        "Your data deserves the best protection. We encrypt all sensitive user data",
      imgPath: "/privacyFirst/encryption.webp",
    },
    {
      title: "Secured Data",
      content: "HeadGen.ai will never sell your data to any third party.",
      imgPath: "/privacyFirst/secure.webp",
    },
    {
      title: "You’re in Control",
      content: "We will never use your photos  to train our AI model .",
      imgPath: "/privacyFirst/control.webp",
    },
    {
      title: "Live Support",
      content: "E-mail us anytime. We respond Monday-Saturday.",
      imgPath: "/privacyFirst/support.webp",
    },
  ];

  return (
    <div className="w-full py-20 flex flex-col bg-[#161616] gap-10">
      
      <div className="flex flex-col gap-24 px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          Coming{" "}
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Soon
          </span>
        </div>
        {/* <div>
          <BlogCards data={blogData} />
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
