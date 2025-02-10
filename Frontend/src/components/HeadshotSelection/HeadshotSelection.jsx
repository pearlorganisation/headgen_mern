import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import AppSvgs from "../AppSvgs/AppSvgs";

const HeadshotSelection = ({
  userData,
  setUserData,
  errors,
  headshots = null,
  section,
}) => {
  const [headshotType, setHeadshotType] = useState(userData?.headshotType);

  useEffect(() => {
    if (headshotType) {
      const updatedUserData = { ...userData };
      updatedUserData.headshotType = headshotType;
      setUserData(updatedUserData);
    }
  }, [headshotType]);

  return (
    <div className="flex flex-col gap-4 justify-between relative h-full w-full items-center">
    <div className="flex items-center gap-x-2 flex-nowrap font-bold text-lg sm:text-2xl md:text-3xl whitespace-nowrap">
  <AppSvgs name="linkedIn" className="w-6 h-6 sm:w-8 sm:h-8" />
  <span>Boost your LinkedIn / Resume</span>
</div>

      <div className="grid lg:grid-cols-[40%_auto] gap-4 w-full">
        <div className="flex flex-col justify-center items-center w-full max-h-[400px] overflow-auto">
          {headshots &&
            headshots
              ?.filter((item) => {
                return item?.name === section && item?.headshotInfo;
              })
              .map((filteredItem, idx) => (
                <div key={`imgPreview${idx}`} className="flex justify-center rounded-xl">
                  <LazyLoadImage
                    alt=""
                    src={filteredItem?.imgPreview}
                    className="!max-h-[320px] mx-auto rounded-xl"
                  />
                </div>
              ))}
          <div className="text-center text-base py-2">
            <div>
              This image is a reference for{" "}
              <strong>Image Quality, Outfit, and Background of what you’ll get.</strong>
            </div>
          </div>
        </div>

        <div className="px-1 flex flex-col gap-4 justify-center w-full">


          {/* First div to display all names */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
            <div className="col-span-full text-center text-xl font-semibold mb-4">
              <div className="text-1xl px-10">Pick from our custom headshot templates</div>
            </div>
            {headshots &&
              headshots.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Displaying item.name in a separate div */}
                  <div
                    className={`bg-[#f1f1f1] text-[#131313] ${
                      userData?.headshotType === item?.name
                        ? "!bg-[#1d2838] text-[#F1F1F1] rounded-lg shadow-[0_0_0_2px_#224cc2]"
                        : "bg-[#f1f1f1]"
                    } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg md:w-44 pl-1 transition duration-500 text-[12px] md:text-[12px] lg:text-[14px] font-semibold cursor-pointer flex justify-between items-center`}
                    onClick={() => setHeadshotType(item?.name)}
                  >
                    <span className="md:w-5/6 w-full ">{item?.name}</span>
                    <div className="flex flex-col md:justify-center justify-between items-center ">
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              ))}
          </div>

   
   
              <div className="col-span-full text-center text-xl font-semibold mt-6">
    
          </div>
          <div className="">
            {headshots &&
              headshots.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Displaying TitleInfo only for the selected headshotType */}
                  {userData?.headshotType === item?.name && (
                    <div className="mt-2 text-sm text-gray-700">
                      <span className="text-white text-sm">{item?.TitleInfo}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadshotSelection;
