import React, { useEffect, useState } from "react";

const HowItWorks = () => {
  //   const [isAnimated, setIsAnimated] = useState(false);
  const cardData = [
    {
      title: "Upload a selfie",
      imgPath: "/aiBlog/1.png",
    },
    {
      title: "Make payment",
      imgPath: "/aiBlog/2.png",
    },
    {
      title: "Get Images",
      imgPath: "/aiBlog/3.png",
    },
  ];
  return (
    <div className="w-full py-20 flex flex-col bg-[#161616] gap-10">
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

      <div className="flex flex-col gap-24 px-10  xl:px-[160px] 2xl:px-[250px]">
        {/* <div className="text-center text-[60px] text-[#F1F1F1]">
          <span className="text-[55px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            HeadGen
          </span>{" "}
          AI Blog
        </div> */}
        <div>
          <div className="flex flex-row justify-between">
            {cardData?.map((item, idx) => (
              <div
                key={`blogCard${idx}`}
                className={`flex flex-col justify-evenly items-center w-[32%] bg-gradient-to-b from-[#1a1e43] to-[#1b2bbb] rounded-xl  py-10 group shadow-[0_0_0_1px_#babcbf80]`}
              >
                <div className="w-[80%] -translate-y-20 group-hover:-translate-y-24 rounded-xl transition duration-300">
                  <img src={item?.imgPath} className="w-full rounded-xl" />
                </div>
                <div
                  className={`h-[100px] flex flex-col ${
                    item?.btnLink ? "justify-between" : ""
                  }  gap-4 items-center`}
                >
                  {item?.title?.length > 0 && (
                    <div className="px-2 text-center font-bold text-[#F1F1F1] text-3xl ">
                      {item?.title}
                    </div>
                  )}

                  {item?.btnLink && (
                    <div className="w-2/3">
                      <button className="hover:squeezyBtn bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full h-[58px] hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]">
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
