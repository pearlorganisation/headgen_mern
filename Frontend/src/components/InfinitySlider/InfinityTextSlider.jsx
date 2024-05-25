import React, { useEffect } from "react";

const InfinityTextSlider = ({ data }) => {

    return (
      <>
      
      <div className="w-full flex flex-col gap-4">
        <div class="infinitySlider">
          <div class="slide-track-left">
            {imgData1?.map((item) => (
              <div class="slide-left">
                <img src={item.path} className="!h-[200px] rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  
};

export default InfinityTextSlider;
