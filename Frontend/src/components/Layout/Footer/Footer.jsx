import React from "react";
import { Link } from "react-router-dom";
import AppSvgs from "../../AppSvgs/AppSvgs";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  const footerContent = [
    {
      title: "AI Headshots",
      multiList: [
        [
          {
            title: "Corporate",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Doctor",
            link: "/doctor-ai-headshots",
          },
          {
            title: "Lawyer",
            link: "/lawyer-ai-headshots",
          },
          {
            name: "Sales",
            path: "/salesman-ai-headshots",
          },
          {
            name: "Students",
            path: "/students-ai-headshots",
          },
          {
            title: "Teacher",
            link: "/teacher-ai-headshots",
          },
        ],
        [
          {
            title: "Dating",
            link: "/dating-ai-headshot-generator",
          },
          {
            title: "Custom",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Prompts",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Teams",
            link: "/corporate-ai-headshots",
          },
          {
            title: "Blogs",
            link: "/blogs",
          },
          // {
          //   title: "Sitemap",
          //   link: "/sitemap.xml",
          // },
        ],
      ],
    },

    {
      title: "Company",
      list: [
        {
          title: "About Us",
          link: "/about-us",
        },
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Terms & Conditions",
          link: "/terms-and-conditions",
        },
        {
          title: "Cancellation & Refunds",
          link: "/cancellation-and-refunds",
        },
      ],
    },
    {
      title: "Support",
      list: [
        {
          title: "Contact Us",
          link: "/contact-us",
        },
        // {
        //   title: "Payment Gateway",
        //   link: "/",
        // },
        // {
        //   title: "Affiliate Program",
        //   link: "/",
        // },
        {
          title: "Support@headgen.ai",
          link: "mailto:support@headgen.ai",
        },
        {
          title: "+91 9820442749",
          link: "tel:+919820442749",
        },
        {
          link:'https://www.producthunt.com/products/headgen-ai',
          alt:'product hunt',
          imgPath: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1720504906/Untitled_design_71_yhk24p.jpg"
        }
      ],
    },
  ];

  return (
    <div
      id="footer"
      className="flex flex-col items-center gap-20 px-10 2xl:px-[250px] py-10"
    >
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 w-full">
        <div className="w-[300px] xl:w-[380px] hidden rounded-2xl lg:flex flex-col justify-start items-center relative">
          <img
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022117/headgen/Home/Footer/om5r1nxxq4cbjmcqmdet.webp"
            alt=""
            srcset=""
            className="w-full h-[90%] rounded-2xl shadow-[0_0_0_5px#5636F3]"
          />
          <div className="flex flex-col gap-1">
            <div className="w-[90%] px-2 py-3 bg-gradient-to-r from-[#59caff] to-[#5636F3] rounded-xl text-[#f1f1f1] text-[15px] font-medium transition duration-300 absolute -bottom-4 left-1/2 -translate-x-1/2">
              <LazyLoadImage src="/logo.webp" width={"240px"} height={"58px"}/>
            </div>
          </div>
        </div>

        <div className="py-16 px-8 oswald md:px-16  w-full rounded-2xl bg-[#000000] grid grid-cols-1 md:grid-cols-4 gap-2 md:justify-center shadow-[0_0_0_5px#000000]">
          {footerContent &&
            footerContent?.map((fc, idx) => (
              <div className={`flex flex-col  gap-3 md:gap-1 ${fc?.multiList && 'md:col-span-2'}`} key={`fc${idx}`}>
                <div className={`text-2xl xl:text-[2.4rem] md:h-[80px] oswald text-blue-600`}>
                  {fc?.title}
                </div>
                {fc?.multiList ? (
                  <div className="grid md:grid-cols-2 text-[#f1f1f1] text-xl xl:text-[1.7rem] leading-[1.3] ">
                    {fc?.multiList?.map((item, idx) => (
                      <div className="flex flex-col gap-1">
                        {item &&
                          item?.map((item) => (
                            <Link
                              to={item?.link}
                              key={`fcll${idx}`}
                              className="oswald hover:text-blue-600 transition duration-300"
                            >
                              {item?.title}
                            </Link>
                          ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-1 text-[#f1f1f1] text-xl xl:text-[1.7rem] leading-[1.3]  ">
                    {fc?.list &&
                      fc?.list?.map((item, idx2) => (
                        
                        <Link
                          to={item?.link}
                          key={`fcl${idx2}`}
                          className="oswald hover:text-blue-600 transition duration-300"
                        >
                          {item?.title ? item?.title : (
                            <img src={`${item?.imgPath}`} alt={item?.alt} className="w-full rounded-lg shadow-[0_0_0_1px#ffffff] mt-1" width={"60px"} height={"242px"}/>
                          )}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-2 sm:gap-0 justify-center sm:justify-between">
        <div className="text-[11px] sm:text-sm text-[#f1f1f1]">
          Copyright 2024 Playcloud Technologies Private Limited.
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
