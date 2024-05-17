import React, { useEffect, useState } from "react";

const InfinitySlider = ({ imgData }) => {

  return (
    <div className="w-full">
      <div class="infinitySlider">
        <div class="slide-track-left">
          {imgData?.map((item) => (
            <div class="slide-left">
                <img
                  src={item?.path}
                  className="!h-[200px] !w-[200px] rounded-2xl"
                />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfinitySlider;
