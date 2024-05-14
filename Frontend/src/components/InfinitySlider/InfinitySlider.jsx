import React from "react";

const InfinitySlider = ({ imgData }) => {
  return (
    <div className="w-full">
      <div class="infinitySlider">
        <div class="slide-track-left">
          {imgData?.map((item) => (
            <div class="slide-left">
              <img src={item.path} className="!h-[200px] rounded-2xl" />
            </div>
          ))}
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinitySlider;
