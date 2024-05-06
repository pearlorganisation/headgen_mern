import React from "react";
import { Link } from "react-router-dom";
import AppSvgs from "../../AppSvgs/AppSvgs";

const Footer = () => {
  const footerContent = [
    {
      title: "Corporate headshot",
      list: [
        {
          title: "Dating Photos",
          link: "#",
        },
        {
          title: "Doctor Headshots",
          link: "#",
        },
        {
          title: "Lawyer Headshots",
          link: "#",
        },
        {
          title: "Real Estate Headshots",
          link: "#",
        },
        {
          title: "Salesperson",
          link: "#",
        },
        {
          title: "Headshots",
          link: "#",
        },
      ],
    },
    {
      title: "Corporate headshot",
      list: [
        {
          title: "Corporate Headshots",
          link: "#",
        },
        {
          title: "Professional",
          link: "#",
        },
        {
          title: "Headshots",
          link: "#",
        },
        {
          title: "Student Headshots",
          link: "#",
        },
        {
          title: "Teacher Headshots",
          link: "#",
        },
        {
          title: "YouTube Profile",
          link: "#",
        },
      ],
    },
    {
      title: "Company",
      list: [
        {
          title: "AI Portrait Generator",
          link: "#",
        },
        {
          title: "LinkedIn Headshots",
          link: "#",
        },
        {
          title: "Affiliate Program",
          link: "#",
        },
        {
          title: "Blog",
          link: "#",
        },
        {
          title: "Featured In",
          link: "#",
        },
      ],
    },
    {
      title: "Trust & Legal",
      list: [
        {
          title: "About us",
          link: "#",
        },
        {
          title: "Privacy Policy",
          link: "#",
        },
        {
          title: "Terms & Conditions",
          link: "#",
        },
        {
          title: "Cancellation & Refund",
          link: "#",
        },
        {
          title: "Policy",
          link: "#",
        },
        {
          title: "Contact",
          link: "#",
        },
      ],
    },
    {
      title: "Support",
      list: [
        {
          title: "Support@headgen.ai",
          link: "#",
        },
      ],
    },
  ];

  return (

    <div className="flex flex-col items-center gap-20 px-10 2xl:px-[250px] py-10">
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-2">

        <div
          style={{
            background: "url(/man.jpg) no-repeat center",
            backgroundSize: "cover",
          }}
          className="min-w-[250px] rounded-2xl flex flex-col justify-end px-2 py-4"
        >
          <div className="flex flex-col gap-1">
            <Link to="/" className="flex justify-center">
              <img src="/logo.webp" alt="" className="max-w-[180px]" />
            </Link>
            <button className="w-full px-2 py-3 bg-gradient-to-b from-[#7559FF] to-[#5636F3] hover:from-[#3f26bd] hover:to-[#3822aa] rounded-xl text-[#f1f1f1] text-[15px] font-medium transition duration-400">
              Get Started
            </button>
          </div>
        </div>

 
        <div className="py-16 px-16 rounded-2xl bg-[#E6E0F4] flex flex-row gap-2 justify-center">
          {footerContent &&
            footerContent?.map((fc, idx) => (
              <div className="flex flex-col gap-2 w-[18%]" key={`fc${idx}`}>
                <div className="text-base xl:text-lg font-medium h-[80px]">
                  {fc?.title}
                </div>
                <div className="flex flex-col gap-1 ">
                  {fc?.list &&
                    fc?.list?.map((item, idx2) => (
                      <a key={`fcl${idx2}`}>{item?.title}</a>
                    ))}
                </div>
              </div>
            ))}
        </div>

      </div>
      <div className="w-full flex flex-row justify-between">
        <div className="text-sm text-[#f1f1f1]">
          Copyright ©2024 Playcloud Technologies Private Limited.
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/">
            <AppSvgs name="linkedIn" />
          </Link>

          <AppSvgs name="tiktok" />
          <AppSvgs name="youtube" />
          <AppSvgs name="x" />
          <AppSvgs name="facebook" />
          <AppSvgs name="discord" />
        </div>
      </div>
    </div>
  
  );
};

export default Footer;
