import React, { useEffect, useState } from "react";
// import { GenIcon } from "react-icons";
import { FaChevronRight } from "react-icons/fa";
import { IoManSharp, IoWoman } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";

const IndividualForm = ({ userData, setUserData, errors }) => {
  const [email, setEmail] = useState(userData?.email);
  const [gender, setGender] = useState(userData?.gender);
  const [headshotType, setHeadshotType] = useState(userData?.headshotType);

  let { headshot } = useParams();

  const decodedParam = decodeURIComponent(headshot);

  const genderSelections = [
    {
      name: "Male",
      svg: (
        <>
          <IoManSharp size={22} />
        </>
      ),
    },
    {
      name: "Female",
      svg: (
        <>
          <IoWoman size={22} />
        </>
      ),
    },
  ];

  const headshots = [
    {
      name: "Corporate Headshots",
    },
    {
      name: "Doctor Headshots",
      headshotInfo: {
        tag: "Doctor Headshots",
        title: "",
        content: "",
        imgPath: "/headshots/healthcare.webp",
      },
    },
    {
      name: "Lawyer Headshots",
      headshotInfo: {
        tag: "Lawyer Headshots",
        title: "",
        content: "",
        imgPath: "/headshots/lawyer.webp",
      },
    },
    {
      name: "Sales Headshots",
      headshotInfo: {
        tag: "Sales Headshots",
        title: "",
        content: "",
        imgPath: "/headshots/sales.webp",
      },
    },
    {
      name: "Students Headshots",
      headshotInfo: {
        tag: "Students Headshots",
        title: "",
        content: "",
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
      name: "Youtube / Instagram",
    },
  ];

  useEffect(() => {
    const updatedUserData = { ...userData };
    updatedUserData.email = email;
    updatedUserData.gender = gender;
    updatedUserData.headshotType = headshotType;
    setUserData(updatedUserData);
  }, [email, gender, headshotType]);

  return (
    <div className="flex flex-col gap-2 justify-between relative h-full items-center">
      <div className="flex w-full">
        <div className="flex flex-col items-center gap-4 w-1/2 relative">
          <label htmlFor="email" className="text-center text-2xl text-white ">
            Enter your Email:
          </label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter your email"
            className="w-2/3 text-center bg-[#f1f1f1]  text-[#131313] text-[18px] px-2 rounded-lg  shadow-[0_0_0_1px_#5d5b68] focus:shadow-[0_0_0_1px_#1d2838]"
          />

          <div className="text-[#ff1717] text-[16px] leading-3">
            {errors?.email && errors?.email}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-1/2">
          <label htmlFor="gender" className="text-center text-2xl text-white">
            What's your gender?
          </label>
          <div className="flex gap-2 justify-center">
            {genderSelections &&
              genderSelections?.map((item, idx) => (
                <div
                  onClick={() => {
                    setGender(item?.name);
                  }}
                  key={`gender${idx}`}
                  className={`bg-[#f1f1f1]  text-[#131313] ${
                    userData?.gender === item?.name
                      ? "!bg-[#355cc9] text-[#f1f1f1]"
                      : "bg-[#f1f1f1]"
                  } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-1/3 transition duration-500 text-[18px] font-semibold cursor-pointer flex justify-center gap-2`}
                >
                  <span className="flex flex-col justify-center">
                    {item?.svg}
                  </span>
                  <span>{item?.name}</span>
                </div>
              ))}
          </div>
          <div className="text-[#ff1717] text-[16px] leading-3">
            {errors?.gender && errors?.gender}
          </div>
        </div>
      </div>
      <div className="flex w-full ">
        <div className="flex flex-col justify-center items-center gap-2 w-1/2 max-h-[400px] overflow-auto">
          <div className="text-2xl">Headshot Type:</div>
          <div className="flex flex-row justify-center flex-wrap gap-1">
            {headshots &&
              headshots?.map((item, idx) => (
                <div
                  key={`headshotType${idx}`}
                  className={`bg-[#f1f1f1]  text-[#131313] ${
                    userData?.headshotType === item?.name
                      ? "!bg-[#355cc9] text-[#f1f1f1]"
                      : "bg-[#f1f1f1] "
                  } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-[48%] transition duration-500 text-[18px] font-semibold cursor-pointer flex justify-center gap-2 relative`}
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

        <div className="flex flex-col justify-center items-center gap-2 w-1/2 max-h-[400px] overflow-auto">
          <div className="text-center text-xl py-2">What you'll get:</div>
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000 }}
            className="w-full flex justify-center"
          >
            <SwiperSlide className="flex justify-center h-full">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px]" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px]" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px]" />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center h-full">
              <img src="/slider1/1.jpg" className="h-full max-h-[300px]" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {headshots
        ?.filter((item) => {
          return item?.name === headshotType && item?.headshotInfo;
        })
        .map((filteredItem, idx) => (
          <div
            key={`filteredItem${idx}`}
            className="w-full !glassMorphism !bg-gradient-to-br from-[#1b222d] via-[#212d3f] to-[#161f2c] mt-10 py-10 rounded-xl flex shadow-[0_0_1px#ababab] relative"
          >
            <div className="w-fit px-2 rounded-lg bg-orange-500 text-white text-lg absolute left-10">
              {filteredItem?.headshotInfo?.tag}
            </div>
            <div className="flex flex-col justify-center gap-4 w-[50%] px-10">
              <div className="text-5xl text-[#F1F1F1]">
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

      <div></div>
    </div>
  );
};

export default IndividualForm;
