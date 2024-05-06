import React, { useEffect, useRef } from "react";
import "./Tab.css";
import { useState } from "react";
import PriceCards from "../PriceCards/PriceCards";
import IndividualForm from "../IndividualForm/IndividualForm";
import ImageSection from "../ImageSection/ImageSection";

const Tab = () => {
  const [userData, setUserData] = useState({email:''});
  const [errors, setErrors] = useState({});

  const [tabSwitched, setTabSwitched] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabContentRef = useRef(null);

  const priceCardData = [
    {
      title: "STARTER PACK",
      originalPrice: "$35",
      price: "$29",
      features: ["Basic Quality", "2 Hour Turn Around Time"],
      packName: "Starter Pack",
      tag: "",
    },
    {
      title: "BASIC PACK",
      originalPrice: "$79",
      price: "$45",
      features: ["High Quality", "1 Hour Turn Around Time"],
      packName: "Basic Pack",
      tag: "83% pick this plan",
    },
    {
      title: "PREMIUM PACK",
      originalPrice: "$149",
      price: "$79",
      features: ["Premium Quality", "30 minutes Turn Around Time"],
      packName: "Premium Pack",
      tag: "Best Value",
    },
  ];

  const indivdualData = [
    {
      idx: 0,
      ele: (
        <>
          <div>
            <PriceCards
              data={priceCardData}
              userData={userData}
              setUserData={setUserData}
            />
          </div>
        </>
      ),
    },

    {
      idx: 1,
      ele: (
        <>
          <IndividualForm
            userData={userData}
            setUserData={setUserData}
            errors={errors}
          />
        </>
      ),
    },

    {
      idx: 2,
      ele: (
        <>
          <ImageSection userData={userData} setUserData={setUserData} />
        </>
      ),
    },
  ];

  let maxIndex = 4 - 1;

  const updateIndex = (val) => {
    let newIndex = Math.max(currentIndex + val, 0);

    if (newIndex > 1 && val > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(userData?.email) && userData?.email?.length > 0) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setCurrentIndex(newIndex);
      } else {
        setErrors({ email: "Incorrect/Missing email" });
        return;
      }
    } else {
      if (maxIndex === currentIndex && val > 0) {
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <div className="flex flex-col items-center gap-10 px-10 2xl:px-[80px]">
      <div className="rounded-full w-[200px] bg-gradient-to-br from-[#1d2838] to-[#1d283880] p-1 px-2 relative h-[50px] flex justify-between">
        <span
          className="text-center w-1/2 flex flex-col justify-center text-[#a9acb1] cursor-pointer"
          onClick={() => setTabSwitched(true)}
        >
          Individual
        </span>
        <span
          className="text-center w-1/2 flex flex-col justify-center text-[#a9acb1] cursor-pointer"
          onClick={() => setTabSwitched(false)}
        >
          Teams
        </span>
        <div
          className={`absolute rounded-full w-1/2 top-1/2 -translate-y-1/2 h-[80%] flex flex-col justify-center text-center bg-gradient-to-r from-[#3183ff] to-[#0c4cac] ${
            tabSwitched ? "translate-x-0" : "translate-x-[85%]"
          } z-[10] transition duration-300`}
        >
          <div>
            <div
              className={"text-[#ffffff] font-semibold transition duration-300"}
            >
              {tabSwitched ? "Individual" : "Teams"}
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0_0_0_1px_#babcbf80] rounded-xl px-20 2xl:px-24 py-12 w-full 2xl:w-[1200px] h-[700px] bg-gradient-to-br from-[#1d2838] to-[#1d283880]">
        <div className="text-white text-3xl h-full ">
          {tabSwitched ? (
            <div
              className="flex flex-col justify-between h-full gap-8"
              ref={tabContentRef}
            >
              {indivdualData &&
                indivdualData?.map((item, idx) => {
                  if (item?.idx === currentIndex) {
                    return <div className="h-[90%] w-full" key={`individualData${idx}`}>{item?.ele}</div>;
                  }
                })}

              <div className="flex justify-center gap-2">
                {currentIndex > 0 && (
                  <button
                    className={`hover:squeezyBtn px-8 py-3 bg-[#b41f58] hover:bg-[#b41f58a8] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => updateIndex(-1)}
                  >
                    Back
                  </button>
                )}
                <button
                  className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                  onClick={() => {
                    updateIndex(1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            "Teams"
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
