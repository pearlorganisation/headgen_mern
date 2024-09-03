import React, { useEffect, useLayoutEffect, useState } from "react";
// import { GenIcon } from "react-icons";
import { FaChevronRight } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeadshotSelection = ({
  userData,
  setUserData,
  errors,
  headshots = null,
  selection = "Corporate Headshots"
}) => {

  const [headshotType, setHeadshotType] = useState(selection);

  useEffect(() => {
    if (headshotType) {
      console.log(headshotType);
      const updatedUserData = { ...userData };
      console.log(updatedUserData)
      updatedUserData.headshotType = headshotType;
      setUserData(updatedUserData);
    }
  }, [headshotType]);

   const updateHeashotSelection = (headshotName) => {

   }


   useEffect(() => {
    const dataFound = localStorage.getItem("userData")
    if (dataFound) {
      console.log(dataFound)
      setUserData(JSON.parse(dataFound));
    }
  }, []);


  return (
    <div className="flex flex-col gap-4 justify-between relative h-full  w-full items-center ">
      <div className="text-center  lg:text-left text-xl sm:text-2xl md:text-3xl">Pick from our custom headshot templates:</div>
      <div className="grid lg:grid-cols-[auto_20rem] gap-8 w-full  ">
        <div className="w-full mt-2 hidden md:flex flex-col  justify-end  rounded-xl">
          {headshots &&
            headshots
              ?.filter((item) => {
                return item?.name === headshotType && item?.headshotInfo;
              })
              .map((filteredItem, idx) => (
                <div
                  key={`filteredItem${idx}`}
                  className="w-full h-[90%]   rounded-xl  shadow-[0_0_1px#ababab] "
                >

                  <LazyLoadImage
                    src={`${filteredItem?.headshotInfo?.imgPath}`}
                    className="w-full h-full rounded-xl"
                  />

                </div>
              ))}
        </div>

        <div className="flex flex-col justify-center  items-center w-full max-h-[400px]  overflow-auto">
          <div className="text-center text-xl py-2">What you'll get:</div>
          {headshots &&
            headshots
              ?.filter((item) => {
                return item?.name === headshotType && item?.headshotInfo;
              })
              .map((filteredItem, idx) => (
                <div className="flex justify-center rounded-xl ">
                  <LazyLoadImage
                    src={filteredItem?.imgPreview}
                    className="!h-[320px] mx-auto rounded-xl"
                  />
                </div>
              ))}

        </div>
      </div>

      <div className="px-1 flex flex-col gap-4 justify-center  w-full">
        <div className="text-2xl text-center">Headshot Type:</div>
        <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
          {headshots &&
            headshots?.map((item, idx) => (
              <div
                key={`headshotType${idx}`}
                className={`bg-[#f1f1f1]  text-[#131313] ${userData?.headshotType === item?.name
                  ? "!bg-[#355cc9] text-[#f1f1f1]"
                  : "bg-[#f1f1f1] "
                  } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-full  transition duration-500 text-[14px] md:text-[12px] lg:text-[18px] font-semibold cursor-pointer flex justify-center gap-2 relative`}
                onClick={updateHeashotSelection(item?.name)}
              >
                <span>{item?.name}</span>
                <div className=" grid place-items-center">
                  <FaChevronRight />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeadshotSelection;
