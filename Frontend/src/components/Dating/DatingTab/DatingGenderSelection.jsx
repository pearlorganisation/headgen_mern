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
import UserDetails from "../../UserDetails/UserDetails";

const DatingGenderSelection = ({
    userData,
    setUserData,
    errors,
    headshots = null,
}) => {
    const { headshot } = useParams();
    const decodedParam = decodeURIComponent(headshot);
    const [headshotType, setHeadshotType] = useState(userData?.headshotType);

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
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            setUserData({
                email: "",
                gender: "",
                files: "",
            });
            localStorage.clear();
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="flex flex-col gap-4 justify-between relative h-full items-center space-y-10 ">
            <div>Pick from our custom headshot templates:</div>
            <div className="flex w-full ">
                <div className="w-[80%] flex flex-col justify-end rounded-xl">
                    <div

                        className="w-full h-[90%] !glassMorphism !bg-gradient-to-br from-[#1b222d] via-[#212d3f] to-[#161f2c] py-10 rounded-xl flex shadow-[0_0_1px#ababab] relative"
                    >
                        <div className="w-fit px-2 rounded-lg bg-orange-500 text-white text-lg absolute left-10 top-5">

                        </div>
                        <div className="flex flex-col justify-center gap-5 w-[50%] px-10">
                            <div className="text-xl text-[#F1F1F1] font-bold">

                            </div>
                            <div className="text-sm text-[#F1F1F1]">

                            </div>
                        </div>
                        <div className="w-[50%]">

                        </div>
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
                        <SwiperSlide className="flex justify-center ">
                            <img
                                src="/slider1/1.jpg"
                                className="!h-[320px] mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center">
                            <img
                                src="/slider1/1.jpg"
                                className="!h-[320px] mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center">
                            <img
                                src="/slider1/1.jpg"
                                className="!h-[320px]  mx-auto"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center">
                            <img
                                src="/slider1/1.jpg"
                                className="!h-[320px]  mx-auto"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="px-1  w-full">
                <UserDetails
                    userData={userData}
                    setUserData={setUserData}
                    errors={errors}
                />
            </div>
        </div>
    );
};




export default DatingGenderSelection