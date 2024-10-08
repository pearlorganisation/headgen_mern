import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const InfinitySlider = ({ imgData1, imgData2, size = "200" }) => {
  if (imgData2) {
    return (
      <LazyLoadComponent>
        <div className="w-full flex flex-col gap-4">
          <div class="infinitySlider">
            <div class="slide-track-right">
              {imgData2?.map((item) => (
                <div class="slide-right">
                  <img alt="" 
                    src={item.path}
                    className={`!h-[${size}px] !w-[${size}px] rounded-2xl`}
                    height={size}
                    width={size}
                  />
                </div>
              ))}
            </div>
          </div>

          <div class="infinitySlider">
            <div class="slide-track-left">
              {imgData1?.map((item) => (
                <div class="slide-left">
                  <img alt="" 
                    src={item.path}
                    className={`!h-[${size}px] !w-[${size}px] rounded-2xl`}
                    height={size}
                    width={size}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    );
  } else {
    return (
      <LazyLoadComponent>
        <div className="w-full flex flex-col gap-4">
          <div class="infinitySlider">
            <div class="slide-track-right">
              {imgData1?.map((item) => (
                <div class="slide-right">
                  <img alt="" 
                    src={item.path}
                    className={`!h-[${size}px !w-[${size}px] rounded-2xl`}
                    height={size}
                    width={size}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </LazyLoadComponent>
    );
  }
};

export default InfinitySlider;
