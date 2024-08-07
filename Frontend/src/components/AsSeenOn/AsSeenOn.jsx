import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AsSeenOn = ({isAnimated=true}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div
        className={`w-full sm:w-1/5 flex flex-col justify-center text-center font-bold text-lg md:text-2xl bg-gradient-to-r from-[#02AFDC] to-[#2563EB] text-transparent bg-clip-text ${
          isAnimated ? "animatedReveal" : "invisible"
        }`}
      >
        As seen on
      </div>

      <LazyLoadImage
        src={`https://res.cloudinary.com/dj2fvzfmm/image/upload/v1720502114/headgen/Home/As%20seen%20on/vgozfhzblspkran3nbai.png`}
        className={`w-full sm:w-2/3 lg:w-3/5 xl:w-2/5 ${
          isAnimated ? "animatedReveal" : "invisible"
        }`}
      />
    </div>
  );
};

export default AsSeenOn;
