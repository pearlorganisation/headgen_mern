import React, { useState, useEffect } from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import { Link } from "react-router-dom";
import DatingHero from "../../components/Dating/DatingHero/DatingHero";
import BlogCards from "../../components/BlogCards/BlogCards";

const Dating = () => {
  const [counter, setCounter] = useState(0);

 

  useEffect(() => {
    const maxCount = 30000;
    let incrementBy = 15;

    const updateCounter = () => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + incrementBy;
        if (newCounter >= maxCount) {
          clearInterval(counterInterval);
          return maxCount; // Ensure the counter stops at maxCount
        }
        return newCounter;
      });
    };

    const counterInterval = setInterval(updateCounter, 1); // Set interval to 1 second

    return () => clearInterval(counterInterval); // Cleanup function to clear interval on component unmount
  }, []);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const datingCardData = [
    {
      title: "Upload your images",
      content: "Upload just 1-4 images of yourself. Selfies work great",
      imgPath: "/dating/1.png",
    },
    {
      title: "Our AI gets to work",
      content:
        "HeadGen AI gets to work instantly & generates amazing Images of you!",
      imgPath: "/dating/2.png",
    },
    {
      title: "Get Amazing Dating Images",
      content:
        "Improve your dating game and stand out with Headgen AI",
      imgPath: "/dating/3.png",
    },
  ];

  return (
    <div className="w-full py-20 flex flex-col bg-[#161616] gap-10 px-[200px] gradientBgRed">
      <div>
        <DatingHero />
      </div>
      <div className="text-white text-[48px] 2xl:text-[62px] font-bold flex items-center gap-6">
        <div className="flex justify-center w-1/2 ">
        <div className="flex flex-col">
          <div className="flex gap-8 2xl:gap-24">
            <span className="w-[190px] text-right">
              {counter.toLocaleString("en-US")}
            </span>
            <span>AI</span> 
          </div>
          <div className="w-fit">Dating photos</div>
          <div className="w-fit">Generated</div>
        </div>
        </div>
        <div className="w-1/2 p-10 text-justify text-[22px] 2xl:text-[26px] flex justify-center font-normal">
          The #1 dating advice that any dating guru will tell you is get better
          photos. Humans are visual creatures after all. We use cutting-edge AI
          to make that process super affordable and as easy as 1-2-3.
        </div>
      </div>

      <div className="py-20">
        <BlogCards data={datingCardData} datingPage={true} />
      </div>

      <div className="flex justify-between cursor-default">
        <div className="w-[50%] 2xl:w-[55%] bg-gradient-to-br from-[#c4325eab] to-[#e60045c2] rounded-2xl shadow-[0_0_0_1px_#ffffff] pt-10 px-6 relative transition duration-500">
          <div className="absolute bg-white shadow-[0_0_0_1px_#ffffff] w-2/5 flex justify-center gap-2 top-0 right-0 p-2 rounded-[0_1rem_0_1rem] text-[20px] 2xl:text-[24px]">
            
              <span>It's a</span>{" "}
              <span className="font-bold italic">Match!</span>
            
          </div>
          <div className="flex flex-col justify-between gap-10  h-full">
            <div className="flex flex-col text-[40px] font-semibold text-[#F1F1F1]">
              <div>
                <div>Higher</div>
                <div>Quality Conversations</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[#f1f1f1] text-[16px] 2xl:text-[22px]">
              Not only will you get more matches, our AI dating photos will also
              increase the quality of your matches.
            </div>
            <div className="flex justify-center">
              <img src="/dating/4.png" className="w-[300px]" />
            </div>
          </div>
        </div>
        <div className="w-[40%] 2xl:w-[35%] flex flex-col gap-10 ">
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-2/3">
            <div className="absolute w-[220px] h-[170px] -top-8 -translate-y-8 right-1">
              <img src="/dating/phonePreview.png" className="h-full w-full" />
            </div>

            <div className="flex flex-col h-full justify-evenly gap-4 text-[#f1f1f1] ">
              <div className="flex flex-col gap-0 ">
                <div className="text-[44px] font-bold">10X</div>
                <div className="text-[28px] font-bold w-[200px] leading-tight">
                  Your match game
                </div>
              </div>
              <div className="text-[20px] ">
                Whether you’re looking for AI Tinder photos or AI Hinge photos,
                we’ve got you covered.
              </div>
            </div>
          </div>
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff]">
            <div className="flex flex-col justify-evenly gap-4 text-[#f1f1f1]">
              <div className="flex flex-col gap-0">
                <div className="text-[28px]  font-bold w-full flex justify-between">
                  <div className="bg-gradient-to-r from-[#ff437b] to-[#ff1158]  inline-block text-transparent bg-clip-text">
                    Find the one.
                  </div>
                  <AppSvgs name="heartPhone" height={44} width={44} />
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px]">
                Looking for a loving partner? Our AI dating photos are
                guaranteed to help increase your odds of helping you find a
                long-term partner or find a hookup.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute">

      </div>
    </div>
  );
};

export default Dating;
