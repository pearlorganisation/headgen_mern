import React, { useEffect, useLayoutEffect, useState } from "react";
// import { GenIcon } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";

const HeadshotSelection = ({ userData, setUserData, errors }) => {
  let { headshot } = useParams();

  const decodedParam = decodeURIComponent(headshot);

  const [headshotType, setHeadshotType] = useState(userData?.headshotType);

  const headshots = [
    {
      name: "Corporate Headshots",
    },
    {
      name: "Doctor Headshots",
      headshotInfo: {
        tag: "Doctor Headshots",
        title: "Professional Medical, Doctor, & ERAS Headshots with AI",
        content:
          "Elevate your healthcare profile with professional AI-generated medical headshots—perfect for doctors, medical school applications, or ERAS residency. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/healthcare.webp",
      },
    },
    {
      name: "Lawyer Headshots",
      headshotInfo: {
        tag: "Lawyer Headshots",
        title: "Professional Lawyer Headshots with AI",
        content:
          "Get professional attorney headshots in minutes with the most realistic AI headshot generator ever. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/lawyer.webp",
      },
    },
    {
      name: "Sales Headshots",
      headshotInfo: {
        tag: "Sales Headshots",
        title: "Close more leads with our charming AI headshots",
        content:
          "Update your professional headshot in minutes with the most realistic AI headshot generator ever. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/sales.webp",
      },
    },
    {
      name: "Students Headshots",
      headshotInfo: {
        tag: "Students Headshots",
        title: "Land more jobs with our professional AI headshots",
        content:
          "Get affordable professional headshots in minutes with the most realistic AI headshot generator ever. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/student.webp",
      },
    },
    {
      name: "Teacher Headshots",
      headshotInfo: {
        tag: "Teacher Headshots",
        title: "The best AI headshots for teachers",
        content:
          "Get professional headshots in minutes with the most realistic AI headshot generator ever. Perfect for school websites, learning platform, and more. Set a good first impression for students and their parents.",
        imgPath: "/headshots/teacher.webp",
      },
    },
    {
      name: "Youtube or Instagram",
    },
  ];

  useEffect(() => {
    if (headshotType) {
      console.log(headshotType);
      const updatedUserData = { ...userData };
      updatedUserData.headshotType = headshotType;
      setUserData(updatedUserData);
    }
  }, [headshotType]);

  useEffect(() => {
    console.log(headshotType);
    if (decodedParam) {
      setHeadshotType(decodedParam);
    }
  }, [decodedParam]);

  return (
    <div className="flex flex-col gap-4 justify-between relative h-full items-center space-y-10">
      <div>Pick from our custom headshot templates:</div>
      <div className="flex w-full ">
        <div className="flex flex-col justify-center items-center gap-2 w-1/2 max-h-[400px] overflow-auto">
          <div className="text-2xl">Headshot Type:</div>
          <div className="flex flex-row justify-center flex-wrap gap-1">
            {headshots &&
              headshots?.map((item, idx) => (
                <div
                  key={`headshotType${idx}`}
                  className={`bg-[#f1f1f1]  text-[#131313] ${userData?.headshotType === item?.name
                    ? "!bg-[#355cc9] text-[#f1f1f1]"
                    : "bg-[#f1f1f1] "
                    } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-2/3 transition duration-500 text-[18px] font-semibold cursor-pointer flex justify-center gap-2 relative`}
                  onClick={() => {
                    setHeadshotType(item?.name);
                  }}
                >
                  <span>{item?.name}</span>
                  <span className="absolute right-4 -translate-y-1/2 top-1/2">
                    <FaChevronRight />
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-1/2 max-h-[400px]  overflow-auto">
          <div className="text-center text-xl py-2">What you'll get:</div>
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            className="w-full flex justify-center"
          >
            <SwiperSlide className="flex justify-center h-full ">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px] mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px] mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px] mx-auto" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px] mx-auto" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="px-1 flex justify-center">
        {headshots
          ?.filter((item) => {
            return item?.name === headshotType && item?.headshotInfo;
          })
          .map((filteredItem, idx) => (
            <div
              key={`filteredItem${idx}`}
              className="w-[95%] !glassMorphism !bg-gradient-to-br from-[#1b222d] via-[#212d3f] to-[#161f2c] mt-10 mx-20 py-10 rounded-xl flex shadow-[0_0_1px#ababab] relative"
            >
              <div className="w-fit px-2 rounded-lg bg-orange-500 text-white text-lg absolute left-10">
                {filteredItem?.headshotInfo?.tag}
              </div>
              <div className="flex flex-col justify-center gap-5 w-[50%] px-10">
                <div className="text-3xl text-[#F1F1F1] font-bold">
                  {filteredItem?.headshotInfo?.title}
                </div>
                <div className="text-base 2xl:text-[24px] text-[#F1F1F1]">
                  {filteredItem?.headshotInfo?.content}
                </div>
              </div>
              <div className=" w-[50%]">
                <img
                  src={`${filteredItem?.headshotInfo?.imgPath}`}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeadshotSelection;
