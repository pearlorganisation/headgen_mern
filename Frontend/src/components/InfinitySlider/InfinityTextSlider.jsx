import React from "react";
import AppSvgs from "../AppSvgs/AppSvgs";

const InfinityTextSlider = () => {
  const data = [
    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedin" />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: <AppSvgs name="team" />,
      content: "TEAM HEADSHOTS",
    },
    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedin" />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: <AppSvgs name="team" />,
      content: "TEAM HEADSHOTS",
    },

    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedin" />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: <AppSvgs name="team" />,
      content: "TEAM HEADSHOTS",
    },

    {
      //   svg: <AppSvgs name="tinder" />,
      content: "AI HEADSHOTS",
    },
    {
      svg: <AppSvgs name="linkedin" />,
      content: "LINKEDIN HEADSHOTS",
    },
    {
      svg: <AppSvgs name="tinder" />,
      content: "DATING HEADSHOTS",
    },
    {
      svg: <AppSvgs name="team" />,
      content: "TEAM HEADSHOTS",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div class="infinityTextSlider">
          <div class="text-slide-track-left">
            {data?.map((item) => (
              <div class="text-slide-left">
                <div className="flex gap-2 items-center">
                  {item.svg && <span>{item.svg}</span>}
                  <span className="text-white text-5xl">{item?.content}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfinityTextSlider;
