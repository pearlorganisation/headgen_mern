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
          link: "/upload/dating",
        },
        {
          title: "Doctor Headshots",
          link: "/upload/Doctor%20Headshots",
        },
        {
          title: "Lawyer Headshots",
          link: "/upload/Lawyer%20Headshots",
        },
        {
          title: "Salesperson",
          link: "/upload/Sales%20Headshots",
        },
       
      ],
    },
    {
      title: "Corporate headshot",
      list: [
        {
          title: "Corporate Headshots",
          link: "/upload/Corporate%20Headshots",
        },
        {
          title: "Student Headshots",
          link: "/upload/Student%20Headshots",
        },
        {
          title: "Teacher Headshots",
          link: "/upload/Teacher%20Headshots",
        },
        {
          title: "YouTube Profile",
          link: "/upload/Youtube%20or%20Instagram%20Headshots",
        },
      ],
    },
    {
      title: "Company",
      list: [
        {
          title: "AI Portrait Generator",
          link: "/upload",
        },
        {
          title: "LinkedIn Headshots",
          link: "/upload/Corporate%20Headshots",
        },
        // {
        //   title: "Affiliate Program",
        //   link: "/upload",
        // },
        {
          title: "Blog",
          link: "/blogs",
        },
      ],
    },
    {
      title: "Trust & Legal",
      list: [
        {
          title: "About us",
          link: "/aboutus",
        },
        {
          title: "Privacy Policy",
          link: "/privacypolicy",
        },
        {
          title: "Terms & Conditions",
          link: "/termsandconditions",
        },
        {
          title: "Cancellation & Refund",
          link: "cancellation",
        },
        {
          title: "Contact",
          link: "/contactus",
        },
      ],
    },
    {
      title: "Support",
      list: [
        {
          title: "Support@headgen.ai",
          link: "email:support@headgen.ai"
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
                      <Link to={item?.link} key={`fcl${idx2}`}>{item?.title}</Link>
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
