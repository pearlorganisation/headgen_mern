import React from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";

const AboutUs = () => {
  const imgData = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s800",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s800",
    },
  ];

  const aboutUsContent = (
    <div className="leading-relaxed">
      <span>
        Playcloud Technologies ( HeadGen AI) is founded by brother and sister
        duo of Ruark Gordon and Krasia Gordon. Ruark is a Film Director,
        Producer and Serial Entrepreneur with multiple ventures. Krasia is a
        computer engineer with a knack for visual design. Together we created
        HeadGen AI. With HeadGen AI we wanted to perfect creating the best
        possible outcome of an AI generated image. HeadGen AI is our flagship
        project, where we strive to perfect the art of AI-generated images.
      </span>
      <br />
      <span>
        Situated at the crossroads of design, programming, and art, we craft
        exceptional digital tools and services that harness the transformative
        power of generative AI to enhance your everyday life. Our mission is
        simple: to democratize access to generative AI and make it accessible to
        everyone. We value your input and welcome your thoughts, feedback, and
        requests.
      </span>
      <br />
      Reach out to us at support@headgen.ai and let’s shape the future together.
      In case of collaborations or any urgent requests please whatsapp us on +39
      3333304061.
    </div>
  );

  const foundersContent = [
    {
      name: "Ruark Gordon",
      designation: "Founder & CEO.",
      imagePath: "/ruark.png",
      socials: [
        {
          name: "linkedIn",
          link: "/",
        },
        {
          name: "instagram",
          link: "/",
        },
      ],
    },
    {
      name: "Krasia Gordon",
      designation: "Co-Founder & Design Lead.",
      imagePath: "/krasia.png",
      socials: [
        {
          name: "linkedIn",
          link: "/",
        },
        {
          name: "instagram",
          link: "/",
        },
      ],
    },
  ];

  const logoData = [
    {
      name: "walmart logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1up3Y8G7BYQt4vFDeXYicUUbrnMDNz0QK&sz=s600",
    },
    {
      name: "microsoft logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=10vAAtNBCVa35oLUmY6NZKDwrq2kl8w6V&sz=s600",
    },
    {
      name: "google logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1T5_P_dHHDNxPdlN_oCp8lxcxAM7BXYEp&sz=s600",
    },
    {
      name: "airbnb logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1m45hPUM6sDgtDdC1hG89FKgd7MAmAwsi&sz=s600",
    },
    {
      name: "amazon logo",
      imgPath:
        "https://drive.google.com/thumbnail?id=1bupr8brSqprqrt5xDygIUbcTkxkc-uX0&sz=s600",
    },
  ];

  return (
    <div className="bg-[#161616]">
      <div className="relative w-full text-white py-10 xl:py-20 px-10 xl:px-[250px]  flex flex-col gap-8 xl:gap-[3.5rem] tracking-wider">
        <div className="mt-10">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 2000 }}
            className="w-full flex justify-center"
          >
            {imgData &&
              imgData?.map((item) => (
                <SwiperSlide className="flex justify-center ">
                  <img src={item.path} className="!h-[320px] mx-auto" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="flex justify-center my-10">
          <div className="flex flex-row flex-wrap md:justify-between w-full">
            <div className="w-1/5 flex flex-col gap-4 justify-center items-center ">
              <div className="flex flex-col gap-1 w-fit">
                <div className="text-[#F1F1F1] text-[60px] 2xl:text-[72px] font-medium leading-6">
                  Our
                </div>
                <div className="text-[60px] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                  story
                </div>
              </div>
            </div>
            <div className="w-3/5 flex flex-col gap-6 items-center">
              {aboutUsContent && (
                <p className="text-justified">{aboutUsContent}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* trusted by */}

      <div className="flex  justify-center gap-6">
        <div
          className={`flex flex-col justify-center text-center font-bold text-[20px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] text-transparent bg-clip-text `}
        >
          Trusted By
        </div>
        <div className={`flex flex-row`}>
          {logoData?.map((item, idx) => (
            <div
              key={`logo${idx}`}
              className="w-[150px] flex flex-col justify-center"
            >
              <img
                src={item?.imgPath}
                alt={item?.name}
                className="w-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full text-white px-10 xl:px-[250px] py-20 bg-[#161616] flex flex-col gap-8 xl:gap-[6rem] tracking-wider">
        <div className="w-full text-center font-medium text-[44px] md:text-[52px] xl:text-[60px] animatedReveal">
          Meet the AI Founders of HeadGen
        </div>

        <div className="flex flex-row flex-wrap md:justify-between w-full">
          <div className="w-2/5 flex flex-col gap-4 justify-center items-start ">
            <div
              className={`flex flex-col justify-evenly items-center bg-gradient-to-b  from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
            >
              <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                <img
                  src={foundersContent[0]?.imagePath}
                  className="w-full rounded-xl"
                />
              </div>
              <div
                className={`h-[50%] flex flex-col justify-between
                gap-4 items-center`}
              >
                <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl">
                  {foundersContent[0]?.name}
                </div>

                <div className="px-2 text-center font-bold text-[#F1F1F1] text-md">
                  {foundersContent[0]?.designation}
                </div>
                <div className="flex font-medium animatedReveal">
                  {foundersContent[0]?.socials?.map((e, idx) => (
                    <Link
                      key={`founder0${idx}`}
                      to={e?.link}
                      className="flex flex-col justify-center "
                    >
                      <AppSvgs name={e?.name} width={32} height={32} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex flex-col gap-6 justify-center *:items-center">
            {aboutUsContent && (
              <p className="text-justified">{aboutUsContent}</p>
            )}
          </div>
        </div>

        <div className="flex flex-row flex-wrap md:justify-between w-full">
          <div className="w-3/5 flex flex-col gap-6 justify-center *:items-center">
            {aboutUsContent && (
              <p className="text-justified">{aboutUsContent}</p>
            )}
          </div>

          <div className="w-2/5 flex flex-col gap-4 justify-center items-end ">
            <div
              className={`flex flex-col justify-evenly items-center bg-gradient-to-b  from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
            >
              <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                <img
                  src={foundersContent[1]?.imagePath}
                  className="w-full rounded-xl"
                />
              </div>
              <div
                className={`h-[50%] flex flex-col justify-between
                gap-4 items-center`}
              >
                <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl">
                  {foundersContent[1]?.name}
                </div>

                <div className="px-2 text-center font-bold text-[#F1F1F1] text-md">
                  {foundersContent[1]?.designation}
                </div>
                <div className="flex font-medium animatedReveal">
                  {foundersContent[1]?.socials?.map((e, idx) => (
                    <Link
                      key={`founder0${idx}`}
                      to={e?.link}
                      className="flex flex-col justify-center "
                    >
                      <AppSvgs name={e?.name} width={32} height={32} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/upload/Corporate%20Headshots"
          className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]"
        >
          Get your photos for $29
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
