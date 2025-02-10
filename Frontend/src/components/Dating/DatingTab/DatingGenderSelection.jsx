import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UserDetails from "../../UserDetails/UserDetails";

const DatingGenderSelection = ({ userData, setUserData, errors, type }) => {
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      setUserData({
        email: "",
        gender: "Male",
        files: "",
        generationType: "individualDating",
      });
      localStorage.clear();
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const selectionData = [
    {
      name: "Male",
      bannerImg:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023820/8_g2bxtb.webp",
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023826/Screenshot_2024-06-11_at_5.02.09_PM_gh46xe.webp",
    },
    {
      name: "Female",
      bannerImg:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023822/9_nmatyz.webp",
      imgPreview:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023818/Indoor_Office_Casual_AI_Headshots_8_hb5oll.webp",
    },
  ];

  return (
    <div className="flex flex-col gap-6 justify-between relative h-full w-full items-center px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_20rem] gap-6 w-full">
        {/* Left Section */}
        <div className="w-full flex flex-col items-center lg:items-start">
          <div className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold ml-8">
            Boost your Dating Profile.
          </div>
          <LazyLoadImage
            alt=""
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721023816/ai_dating_photos_logos_rr8ugz.webp"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[700px] mt-4"
          />
          <div className="flex flex-col justify-center items-center w-full mt-6">
            <UserDetails
              userData={userData}
              setUserData={setUserData}
              errors={errors}
              type={type}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center w-full max-h-[400px] overflow-auto">
          <div className="text-center text-lg sm:text-xl py-2">What you'll get:</div>
          {userData?.gender?.length > 0 &&
            selectionData
              .filter((item) => item?.name === userData?.gender)
              .map((filteredItem, idx) => (
                <div key={idx} className="flex justify-center rounded-xl w-full">
                  <LazyLoadImage
                    alt=""
                    src={filteredItem?.imgPreview}
                    className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[320px] mx-auto rounded-xl"
                  />
                </div>
              ))}
          <div className="text-sm text-center mt-2">
            This image is a reference for Image Quality.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatingGenderSelection;
