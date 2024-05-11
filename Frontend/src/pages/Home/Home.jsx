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

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

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

  useEffect(() => {
    // Set a small delay before applying the animation class
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    // Clear the timeout on component unmount to prevent memory leaksq
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full py-20 flex flex-col bg-[#161616] gap-10">
      {/* hero */}

      <div className="flex justify-center px-10  xl:px-[160px] 2xl:px-[250px]">
        <div
          className={`max-w-[834px] w-[100%] flex flex-col gap-6 items-center pt-10`}
        >
          <div
            className={`text-[26px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold ${
              isAnimated ? "animatedReveal" : "invisible"
            }`}
          >
            AI HEADSHOT GENERATOR
          </div>
          <div className="flex flex-col leading-[75px] items-center">
            <div
              className={`text-white text-[55px] 2xl:text-[72px] font-normal ${
                isAnimated ? "animatedReveal" : "invisible"
              }`}
            >
              AI Tool for
            </div>
            <div
              className={`text-[55px] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold font-bold ${
                isAnimated ? "animatedReveal" : "invisible"
              }`}
            >
              Professional Headshots
            </div>
          </div>
          <div
            className={`flex flex-col gap-6 items-center text-center ${
              isAnimated ? "animatedReveal" : "invisible"
            }`}
          >
            <div className="text-[#F1F1F1] text-[20px] ">
              Upload a selfie and get Professional Images for your
              LinkedIn/Business Profile.
            </div>
            <button
              className={`hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-1/3 h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 ${
                isAnimated ? "animatedReveal" : "invisible"
              }`}
            >
              Get your photos for $29
            </button>
          </div>
        </div>
      </div>

      {/* infinity slider */}
      <div className="w-full overflow-hidden px-10  xl:px-[160px] 2xl:px-[250px]">
        <InfinitySlider imgData={imgData1} />
      </div>

      {/* featured by */}

      {/* 
      <div className="flex flex-col items-center gap-6">
        <div
          className={`flex flex-row gap-6  ${
            isAnimated ? "animatedReveal" : "invisible"
          }`}
        >
          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              Featured in
            </div>
            <div className=" flex flex-col justify-center">
              <AppSvgs name="forbes" width={100} height={100} />
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <AppSvgs name="productHunt" width={40} height={40} />
            </div>
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <span className="text-[10px]">Featured on</span>
              <span className="text-[24px] font-semibold leading-none">
                Product Hunt
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1] font-semibold text-[36px]">
              <div className="flex gap-2">
                <span>300K+</span>
                <span>Users</span>
              </div>
            </div>
          </div>




          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
            <IoStarSharp size={34} className="text-green-500"/>

            </div>
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <span className="text-[10px]">Trustpilot</span>
              <span className="text-[20px] font-semibold leading-none">
                Rated 4.7/5 (4129)
              </span>
            </div>
          </div>

        </div>
      </div> */}

      {/* trusted by */}

      <div className="flex flex-col items-center gap-6">
        <div
          className={`text-center font-bold text-[20px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text ${
            isAnimated ? "animatedReveal" : "invisible"
          }`}
        >
          Trusted By
        </div>
        <div
          className={`flex flex-row ${
            isAnimated ? "animatedReveal" : "invisible"
          }`}
        >
          {logoData?.map((item, idx) => (
            <div
              key={`logo${idx}`}
              className="w-[150px] flex flex-col justify-center"
            >
              <img
                src={item?.imgPath}
                alt={item?.name}
                className="w-auto h-[40px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* how it works */}

      <div className="flex justify-center px-10  xl:px-[160px] 2xl:px-[250px] py-14">
        <div className="flex flex-row flex-wrap md:justify-between w-full">
          <div className="w-1/5 flex flex-col gap-4 justify-center items-center ">
            <div className="flex flex-col gap-1 w-fit">
              <div className="text-[#F1F1F1] text-[60px] 2xl:text-[72px] font-medium leading-6">
                How it
              </div>
              <div className="text-[60px] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                works
              </div>
              <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]">
                Get your photos for $29
              </button>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-6 items-center">
            <div className="w-full">
              <img
                src="/howitworks.png"
                className="w-full rounded-2xl"
                alt=""
              />
            </div>

            <div className="text-[#F1F1F1] text-[10px]">
              Upload a selfie and get Professional Images for your LinkedIn
              Profile, Resume, TV Commercial etc
            </div>
          </div>
        </div>
      </div>

      {/* use flow card section */}

      <div className=" xl:px-[160px] 2xl:px-[250px] pb-20">
        <div className="flex flex-wrap flex-col gap-2 md:flex-row md:justify-between ">
          {cardData &&
            cardData?.map((item, idx) => (
              <div className="w-full max-w-[420px] 2xl:h-[500px] md:w-[32%]  rounded-t-2xl bg-white pt-6 flex flex-col gap-8 2xl:gap-4 justify-between hover:shadow-[0_0_0_6px_#3A36F3] hover:-translate-y-7 hover:scale-[1.02] cursor-default transition duration-300">
                <div className="flex flex-col gap-8 px-6">
                  <div className="text-7xl text-[#0055D4] font-medium">
                    {`0${idx + 1}`}
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="text-[#0C062C] text-2xl font-medium">
                      {item?.title}
                    </div>
                    <div className="text-[#232833] text-base">
                      {item?.content}
                    </div>
                  </div>
                </div>
                <div className="w-full h-[200px] 2xl:h-[230px] flex justify-center">
                  <img src={item?.imgPath} className="w-full h-full" />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* swipe section */}

      <div className="px-10  xl:px-[160px] 2xl:px-[250px] flex justify-between cursor-default">
        <div className="w-[50%] 2xl:w-[55%] bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] rounded-2xl shadow-[0_0_0_1px_#ffffff] py-10 relative transition duration-500">
          <div className="flex flex-col justify-between gap-20 items-center h-full">
            <div className="flex flex-col items-center text-[48px] font-semibold text-[#F1F1F1]">
              <div>Ultra Realistic</div>
              <div>AI Image Generator</div>
            </div>
            <div className="text-[#f1f1f1] text-[80px] italic">VS</div>
            <div className="flex flex-col gap-2 text-[#f1f1f1] text-[22px]">
              <div>Why waste hours on expensive Photoshoots?</div>
              <div>Boost your careed with amazing AI Generated</div>
              <div>Images that are quick, easy, cheap & convenient!</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] 2xl:w-[270px] 2xl:h-[220px] flex flex-col justify-evenly items-center bg-gradient-to-br from-[#053499] to-[#2563EB] p-4 absolute top-1/2 -translate-y-1/2 -left-14 rounded-xl shadow-[0_0_0_1px_#ffffff] hover:scale-[1.001] hover:shadow-[0_0_0_2px_#ffffff] transition duration-600 text-[#ffffff]">
            <div className="text-[24px] font-bold text-center">
              Professional Photoshoot
            </div>
            <div className="flex flex-col gap-2 text-[18px]">
              <div>Upto $2500</div>
              <div>Multiple Days</div>
              <div>Tedious Process</div>
            </div>
          </div>
          <div className="w-[200px] h-[200px] 2xl:w-[270px] 2xl:h-[220px] flex flex-col justify-evenly items-center bg-gradient-to-br from-[#053499] to-[#2563EB]  p-4 absolute top-1/2 -translate-y-1/2 -right-14 rounded-xl shadow-[0_0_0_1px_#ffffff] hover:scale-[1.001] hover:shadow-[0_0_0_2px_#ffffff] transition duration-600 text-[#ffffff] ">
            <div className="text-[24px] font-bold text-center">HeadGen AI</div>
            <div className="flex flex-col gap-2 text-[18px]">
              <div>$29</div>
              <div>Within 2 hours</div>
              <div>Very easy process</div>
            </div>
          </div>
        </div>
        <div className="w-[40%] 2xl:w-[35%] flex flex-col gap-10 ">
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-2/3">
            <div className="absolute w-[200px] h-[200px] -top-10 -translate-y-10 right-2 shadow-[0_0_0_1px_#ffffff] rounded-2xl">
              <BeforeAfterSlider
                img1={"/beforeAfter/before.jpg"}
                img2={"/beforeAfter/after.jpg"}
              />
            </div>

            <div className="flex flex-col h-full justify-evenly gap-4 text-[#f1f1f1] ">
              <div className="flex flex-col gap-0 ">
                <div className="text-[44px] font-bold">Swipe</div>
                <div className="text-[28px] font-bold w-[200px] leading-tight">
                  to see the results
                </div>
              </div>
              <div className="text-[20px]">
                Simply upload a selfie and get High Quality Professional AI
                Generated Images
              </div>
            </div>
          </div>
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-1/3">
            <div className="flex flex-col justify-evenly gap-4 text-[#f1f1f1]">
              <div className="flex flex-col gap-0">
                <div className="text-[28px] font-bold w-full flex justify-between">
                  <div>Boost your Career</div>
                  <FaLinkedin size={48} className="text-blue-500" />
                </div>
                {/* <div className="text-[28px] font-bold w-[200px] leading-tight">
                  to see the results
                </div> */}
              </div>
              <div className="text-[20px]">
                Make a lasting first impression <br /> with amazing Professional
                Headshots.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gradientBackground px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="flex flex-col items-center gap-6 pt-14">
          <div className="text-white text-[64px]">High Quality Images</div>
          <div className="max-w-[90%] flex flex-col gap-6 items-center">
            <div className="text-center text-white text-[16px]">
              We take our Quality very seriously Our Engineers ensure that
              almost all the images generated can be used in a profesional
              setting
            </div>
            <div className="flex flex-col gap-4 w-1/2 items-center">
              <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500">
                Get your photos for $29
              </button>
              <span className="flex flex-col text-center text-[19px] text-[#f1f1f1]">
                <span>
                  Payment handled by{" "}
                  <strong className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text ">
                    Stripe
                  </strong>
                </span>
                <span className="text-[14px]">
                  We do not store your payment details
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="py-16">
          <BiInfinitySlider imgData1={imgData1} imgData2={imgData1} />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div className="text-[#F1F1F1] text-[55px] 2xl:text-[72px] font-medium">
            Use Cases of{" "}
            <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text font-bold">
              AI Headshots
            </span>
          </div>
          <div className="flex flex-row justify-around w-full gap-2">
            {useCaseData?.map((item) => (
              <div className="w-auto max-w-[250px] h-[300px] 2xl:h-[350px] bg-white shadow-[0_0_0_1px_#2563EB] rounded-xl hover:-translate-y-4 cursor-default transition duration-300">
                <div className="w-full h-2/3">
                  <img
                    src={item?.path}
                    className="w-full h-full rounded-t-xl"
                  />
                </div>
                <div className="flex flex-col justify-center px-2 pt-2">
                  <div className="text-medium text-sm font-bold flex justify-between">
                    <span>{item?.title}</span>
                    <span>{item?.svg}</span>
                  </div>
                  <div className="text-xs">{item?.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* turn your selfie info card */}
        <div className="w-full bg-gradient-to-r from-[#131270] via-[#161497] to-[#1f1db3] mt-28 py-10 rounded-xl shadow-[0_0_5px_2px#f1f1f1] flex ">
          <div className="flex flex-col justify-evenly gap-4 w-[50%] px-10">
            <div className="text-[32px] xl:text-[48px] 2xl:text-5xl text-[#F1F1F1]">
              Turn your selfie into
            </div>
            <div className="text-[32px] xl:text-[48px] 2xl:text-5xl  bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              Professional Headshots
            </div>
            <div className="text-[16px] 2xl:text-[24px] text-[#F1F1F1]">
              High Quality AI Image Generator for your Business Profiles
            </div>
            <div>
              <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-2/3 h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500">
                Get your photos for $29
              </button>
            </div>
          </div>
          <div className=" w-[50%]">
            <img src="/infoBanner.png" className="w-full h-full" />
          </div>
        </div>

        {/* dating hero section */}
        <div className="flex justify-center">
          <DatingHero />
        </div>
      </div>

      <div className="flex flex-row px-10 xl:px-[160px] 2xl:px-[250px]">
        <div className="w-1/2 relative">
          <div className="flex flex-col justify-center gap-6 top-0">
            <div className=" text-[#F1F1F1] text-[52px] 2xl:text-[60px] font-medium">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </div>
            <div className="text-[#F1F1F1] text-[14px]">
              E-mail is at support@headgen.ai we are available round the clock.
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <FaqAccordian />
        </div>
      </div>

      <div className="flex flex-col px-10 xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Our Clients love
          </span>{" "}
          Our Results
        </div>
        <BiInfinitySlider imgData1={reviewData1} imgData2={reviewData1} />
      </div>

      <div className="flex flex-col gap-10">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Privacy First
          </span>{" "}
          to Protect Your Data
        </div>
        <div className="flex justify-center gap-4 px-10  xl:px-[160px] 2xl:px-[250px] ">
          {privacyFirstData &&
            privacyFirstData?.map((item) => (
              <div className="w-[250px] h-[200px] 2xl:w-[350px] 2xl:h-[300px] rounded-2xl p-4 py-6 bg-transparent hover:!bg-gradient-to-b hover:!from-[#02AFDC] hover:!to-[#2563EB] flex flex-col justify-between items-center text-[#F1F1F1] shadow-[0_0_2px_1px_#02AFDC] hover:shadow-[0_0_5px_1px_#2563EB] hover:scale-[0.98] cursor-default transition duration-500">
                <div className="w-1/3">
                  <img src={item?.imgPath} className="w-full" />
                </div>
                <div className="2xl:text-lg">{item?.title}</div>
                <div className="text-xs 2xl:text-base text-center">
                  {item?.content}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Premium Professional
          </span>{" "}
          Image Generator
        </div>
        <div className="text-center text-[#f1f1f1] text-[15px]">
          Swipe to see more images
        </div>
        <Carousel carouselData={carouselData} />
        <div className="text-center text-[#f1f1f1] text-[12px]">
          AI Generated Images using HeadGen
        </div>
      </div>

      <div className="flex flex-row px-10 xl:px-[160px] 2xl:px-[250px] py-10">
        <div className="w-1/2 flex flex-col items-center gap-1">
          <div className="flex w-2/3  gap-1">
            <div className="w-2/3">
              <img
                src="/slider1/1.jpg"
                className="h-full rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
            <div className="w-1/3 flex flex-col gap-1">
              <img
                src="/slider1/2.jpg"
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
              <img
                src="/slider1/3.jpg"
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
          </div>
          <div className="flex w-2/3  gap-1">
            <div className="w-1/3 flex flex-col gap-1">
              <img
                src="/slider1/2.jpg"
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
              <img
                src="/slider1/3.jpg"
                className="h-1/2 rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
            <div className="w-2/3">
              <img
                src="/slider1/1.jpg"
                className="h-full rounded-xl hover:scale-[1.04] transition duration-400"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col items-center justify-center gap-6 top-0">
            <div className="text-center text-[#F1F1F1] text-[52px] 2xl:text-[60px] font-medium">
              <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                Money-Back
              </span>
              <br />
              Gurantee
            </div>
            <div className="text-[#F1F1F1] text-[14px]">
              Try Headgen.ai with confidence. Our results are Mind blowing.
            </div>
            <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-2/3 h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500">
              Get your photos for $29
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24 px-10  xl:px-[160px] 2xl:px-[250px]">
        <div className="text-center text-[60px] text-[#F1F1F1]">
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            HeadGen
          </span>{" "}
          AI Blog
        </div>
        <div>
          <BlogCards data={blogData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
