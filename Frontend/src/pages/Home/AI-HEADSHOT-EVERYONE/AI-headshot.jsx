import React, { useState } from "react";

function AIHeadshot() {
  const [activeTab, setActiveTab] = useState("Corporate");
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <div className="px-14">
            <img src="/src/assets/jai Changes 1.png" alt="Corporate Headshot" />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-row px-10  gap-6  py-4 justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022266/headgen/Headshots/Image%20to%20appear%20on%20click/l3stzd5y9i3jjt371sol.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022266/headgen/Headshots/Image%20to%20appear%20on%20click/l3stzd5y9i3jjt371sol.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022266/headgen/Headshots/Image%20to%20appear%20on%20click/l3stzd5y9i3jjt371sol.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022266/headgen/Headshots/Image%20to%20appear%20on%20click/l3stzd5y9i3jjt371sol.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
          </div>
        );
      case 2:
        return (
          <div className="flex flex-row px-10  gap-6  py-4 justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023818/Indoor_Office_Casual_AI_Headshots_8_hb5oll.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023818/Indoor_Office_Casual_AI_Headshots_8_hb5oll.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023818/Indoor_Office_Casual_AI_Headshots_8_hb5oll.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023818/Indoor_Office_Casual_AI_Headshots_8_hb5oll.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
          </div>
        );
      case 3:
        return (
          <div className="flex flex-row px-10  gap-6  py-4 justify-center">
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/kgzajygbfhmsbmupz7gv.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/kgzajygbfhmsbmupz7gv.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/kgzajygbfhmsbmupz7gv.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
            <img
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022268/headgen/Headshots/Image%20to%20appear%20on%20click/kgzajygbfhmsbmupz7gv.webp"
              alt=""
              className="w-[200px] h-[220px] rounded-md"
            />
          </div>
        );
      default:
        return <div>No content</div>; // Fixed default case to return valid JSX
    }
  };

  return (
    <div className="text-white space-y-10">
      <div>
        <h2 className="text-4xl text-center font-bold px-16">
        AI Headshots for <span className="text-blue-500">Everyone</span>
          </h2>
      </div>

      <div className="px-8  rounded-t-xl cursor-default transition duration-300 mx-auto   border border-[#65A2E9] rounded-md py-4">
        <div className="flex flex-row  justify-evenly  py-6">
          <button
            className={`px-20 py-2 ${
              activeTab === "Corporate"
                ? " px-14 bg-[#01346F] text-white rounded-lg"
                : ""
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Corporate");
              setActiveTabIndex(0);
            }}
          >
            Corporate
          </button>

          <button
            className={`px-20 py-2 ${
              activeTab === "Doctor"
                ? "px-14 bg-[#01346F] text-white rounded-lg"
                : ""
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Doctor");
              setActiveTabIndex(1);
            }}
          >
            Doctor
          </button>

          <button
            className={`px-20 py-2 ${
              activeTab === "Dating"
                ? "px-14 bg-[#01346F] text-white rounded-lg"
                : ""
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Dating");
              setActiveTabIndex(2);
            }}
          >
            Dating
          </button>
          <button
            className={`px-20 py-2 ${
              activeTab === "Student"
                ? "px-14 bg-[#01346F] text-white rounded-lg"
                : ""
            } text-[#999999]`}
            onClick={() => {
              setActiveTab("Student");
              setActiveTabIndex(3);
            }}
          >
            Student
          </button>
        </div>

        <div>{tabContent()}</div>
      </div>
    </div>
  );
}

export default AIHeadshot;
