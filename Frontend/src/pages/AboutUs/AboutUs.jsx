import React from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import { Link } from "react-router-dom";

const AboutUs = () => {
  
  const aboutUsContent =
    "Playcloud Technologies ( HeadGen AI) is founded by brother and sister duo of Ruark Gordon and Krasia Gordon. Ruark is a Film Director, Producer and Serial Entrepreneur with multiple ventures. Krasia is a computer engineer with a knack for visual design. Together we created HeadGen AI. With HeadGen AI we wanted to perfect creating the best possible outcome of an AI generated image. HeadGen AI is our flagship project, where we strive to perfect the art of AI-generated images. Situated at the crossroads of design, programming, and art, we craft exceptional digital tools and services that harness the transformative power of generative AI to enhance your everyday life. Our mission is simple: to democratize access to generative AI and make it accessible to everyone. We value your input and welcome your thoughts, feedback, and requests. Reach out to us at support@headgen.ai and let’s shape the future together. In case of collaborations or any urgent requests please whatsapp us on +39 3333304061.";

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

  return (
    <div className="bg-[#161616]">
      <div
        className="relative w-full text-white py-10 xl:py-20 px-10 xl:px-[250px]  flex flex-col gap-8 xl:gap-[3.5rem] tracking-wider"
      >
        <div className="w-full text-center font-medium text-[44px] md:text-[52px] xl:text-[60px] animatedReveal">
          Our Story
        </div>
        <div className="flex flex-col justify-between gap-6 text-[14px] md:text-[16px]  xl:text-[22px] text-[#e4e2e2] font-light h-full animatedReveal">
          {aboutUsContent && <p className="text-center">{aboutUsContent}</p>}
        </div>
      </div>
      <div
        
        className="relative w-full text-white px-10 xl:px-[250px] bg-[#161616] flex flex-col gap-8 xl:gap-[3.5rem] tracking-wider"
      >
        <div className="w-full text-center font-medium text-[44px] md:text-[52px] xl:text-[60px] animatedReveal">
          Meet the AI Founders of HeadGen
        </div>
        <div className="flex gap-8 font-regular justify-center text-[#e4e2e2] animatedReveal">
          {foundersContent &&
            foundersContent?.map((item) => (
              <div className="flex flex-col items-center gap-8 w-[48%]">
                <img
                  src={item?.imagePath}
                  className="rounded-2xl w-full"
                />
                <div className="text-[32px] font-medium animatedReveal">{item?.name}</div>
                <div className="text-[20px] font-medium animatedReveal">
                  {item?.designation}
                </div>
                {item?.socials && (
                  <div className="flex font-medium animatedReveal">
                    {item?.socials?.map((e) => (
                      <Link
                        to={e?.link}
                        className="flex flex-col justify-center "
                      >
                        <AppSvgs name={e?.name} width={32} height={32} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
