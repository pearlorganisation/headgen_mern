import React, { useEffect, useState } from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import OrderDetails from "../OrderDetails/OrderDetails";
import PriceCards from "../PriceCards/PriceCards";
import { useStateManager } from "react-select";

const CustomizeTabs = ({ setUserData, userData, type }) => {
  const temp = [
    {
      section: "Formal",
      icon: (
        <>
          <AppSvgs name="formal" />
        </>
      ),
      subSection: [
        {
          title: "Outdoor Park",
          images: [
            { name: "", path: "/slider1/1.jpg" },
            { name: "", path: "/slider1/2.jpg" },
            { name: "", path: "/slider1/3.jpg" },
            { name: "", path: "/slider1/4.jpg" },
          ],
        },
        {
          title: "Indoor Office",
          images: [
            { name: "", path: "/slider1/5.jpg" },
            { name: "", path: "/slider1/6.jpg" },
            { name: "", path: "/slider1/7.jpg" },
            { name: "", path: "/slider1/8.jpg" },
          ],
        },
        {
          title: "Studio Grey",
          images: [
            { name: "", path: "/slider1/4.jpg" },
            { name: "", path: "/slider1/3.jpg" },
            { name: "", path: "/slider1/7.jpg" },
            { name: "", path: "/slider1/8.jpg" },
          ],
        },
        {
          title: "Studio White",
          images: [
            { name: "", path: "/slider1/3.jpg" },
            { name: "", path: "/slider1/6.jpg" },
            { name: "", path: "/slider1/2.jpg" },
            { name: "", path: "/slider1/1.jpg" },
          ],
        },
        {
          title: "Black & White",
          images: [
            { name: "", path: "/slider1/2.jpg" },
            { name: "", path: "/slider1/5.jpg" },
            { name: "", path: "/slider1/7.jpg" },
            { name: "", path: "/slider1/4.jpg" },
          ],
        },
      ],
    },
    {
      section: "Casual",
      icon: (
        <>
          <AppSvgs name="casual" />
        </>
      ),
      subSection: [
        {
          title: "Indoor Park",
          images: [
            { name: "", path: "/slider1/1.jpg" },
            { name: "", path: "/slider1/2.jpg" },
            { name: "", path: "/slider1/3.jpg" },
            { name: "", path: "/slider1/4.jpg" },
          ],
        },
        {
          title: "Outdoor Office",
          images: [
            { name: "", path: "/slider1/5.jpg" },
            { name: "", path: "/slider1/6.jpg" },
            { name: "", path: "/slider1/7.jpg" },
            { name: "", path: "/slider1/8.jpg" },
          ],
        },
        {
          title: "Studio White",
          images: [
            { name: "", path: "/slider1/4.jpg" },
            { name: "", path: "/slider1/3.jpg" },
            { name: "", path: "/slider1/7.jpg" },
            { name: "", path: "/slider1/8.jpg" },
          ],
        },
        {
          title: "Studio Grey",
          images: [
            { name: "", path: "/slider1/3.jpg" },
            { name: "", path: "/slider1/6.jpg" },
            { name: "", path: "/slider1/2.jpg" },
            { name: "", path: "/slider1/1.jpg" },
          ],
        },
        {
          title: "Black & White",
          images: [
            { name: "", path: "/slider1/2.jpg" },
            { name: "", path: "/slider1/5.jpg" },
            { name: "", path: "/slider1/7.jpg" },
            { name: "", path: "/slider1/4.jpg" },
          ],
        },
      ],
    },
  ];

  const [subSectionData, setSubSectionData] = useState(
    temp[0]?.subSection || []
  );
  const [subSectionImages, setSubSectionImages] = useState(
    temp[0]?.subSection[0]?.images || []
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data?.section?.length > 0 && data?.subSection?.length > 0) {
      setUserData((prevData) => {
        let tempData = { ...prevData }
        if (type === 'Dating') {
          tempData.customizeDatingData = data
          tempData.generationTypes = 'datingCustomize'
        } else {
          tempData.customizeData = data

        }

      })
    }
  }, [data]);

  return (
    <>
      <div className="text-[#121212] text-3xl h-fit space-y-8 bg-[#f1f1f1] p-10 rounded-2xl">
        <div className="w-full flex justify-center flex-wrap gap-3">
          {temp?.map((item) => {
            return (
              <div className=" w-1/4">
                <input
                  name="sectionName"
                  className="peer hidden"
                  type="radio"

                  value={item?.section}
                  id={`${item?.section}`}
                  checked={userData?.customizeData
                    ?.section === item?.section}
                />
                <label
                  onClick={() => {
                    setData((prev) => {
                      let data = {
                        section: item?.section,
                        subSection: prev?.subSection,
                      };
                      return data;
                    });
                  }}
                  className={`px-6 py-2  flex justify-center items-center gap-2
                   ${type === 'Dating'
                      ? ' hover:text-[#E23A6D] peer-checked:shadow-[0_3px#E23A6D] hover:shadow-[0_3px#E23A6D]' : 'hover:text-[#E23A6D] peer-checked:shadow-[0_3px#0000FF] hover:shadow-[0_3px#0000FF]'} font-medium cursor-pointer border-4 border-transparent ring-indigo-500/80 transition duration-300`}
                  htmlFor={item?.section}
                >
                  <span>{item?.icon}</span>
                  {item?.section}{" "}
                </label>
              </div>
            );
          })}
        </div>
        <section className="flex justify-around items-center flex-wrap p-2 text-lg gap-3">
          {subSectionData?.map((item) => {
            return (
              <div className="relative ">
                <input
                  name="subSectionTitle"
                  className="peer hidden"
                  type="radio"

                  value={item?.title}
                  id={`${item?.title}`}
                  checked={userData?.customizeData
                    ?.subSection === item?.title}
                />
                <label
                  onClick={() => {
                    setData((prev) => {
                      let data = {
                        section: prev?.section,
                        subSection: item?.title,
                      };
                      return data;
                    });
                  }}
                  className={`px-6 py-2   font-medium cursor-pointer border-4 border-transparent ${type === 'Dating' ? ' hover:text-[#E23A6D] peer-checked:shadow-[0_3px#E23A6D] hover:shadow-[0_3px#E23A6D]' : 'hover:text-[#E23A6D] peer-checked:shadow-[0_3px#0000FF] hover:shadow-[0_3px#0000FF]'}  ring-indigo-500/80 transition duration-300`}
                  htmlFor={item?.title}
                >
                  {item?.title}{" "}
                </label>
              </div>
            );
          })}
        </section>
        <section className="flex justify-around gap-4 items-center flex-wrap">
          {subSectionImages?.map((item) => {
            return (
              <img
                src={item?.path}
                className="w-[200px] h-[200px] cursor-pointer hover:shadow-[0_0_0_1px#ffffff] rounded-xl transition duration-300"
              />
            );
          })}
        </section>
      </div>
    </>
  );
};

export default CustomizeTabs;
