import React, { useEffect, useRef } from "react";
// import "./Tab.css";
import { useState } from "react";
import PriceCards from "../PriceCards/PriceCards";
import HeadshotSelection from "../HeadshotSelection/HeadshotSelection";
import ImageSection from "../ImageSection/ImageSection";
import Customize from "../Customize/Customize";
import OrderDetails from "../OrderDetails/OrderDetails";
import Teams from "./Teams/Teams";
import UserDetails from "../UserDetails/UserDetails";
import axios from "axios";
import Prompt from "../Prompt/Prompt";

const Tab = () => {
  const [userData, setUserData] = useState({
    email: "",
    gender: "",
    files: "",
  });
  
  const [errors, setErrors] = useState({});
  const [fileErrorMsg, setFileErrorMsg] = useState(null);
  const [files, setFiles] = useState([]);
  const [tabSwitched, setTabSwitched] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ["Individual", "Teams", "Customize", "Prompts"];
  const [tabText, setTabText] = useState("Individual");
  const fieldsRef = useRef();

  const tabContentRef = useRef(null);

  const priceCardData = [
    {
      title: "STARTER PACK",
      originalPrice: "$35",
      price: "$29",
      features: ["Basic Quality", "2 Hour Turn Around Time"],
      packName: "Starter Pack",
      tag: "",
    },
    {
      title: "BASIC PACK",
      originalPrice: "$79",
      price: "$45",
      features: ["High Quality", "1 Hour Turn Around Time"],
      packName: "Basic Pack",
      tag: "83% pick this plan",
    },
    {
      title: "PREMIUM PACK",
      originalPrice: "$149",
      price: "$79",
      features: ["Premium Quality", "30 minutes Turn Around Time"],
      packName: "Premium Pack",
      tag: "Best Value",
    },
  ];

  const headshots = [
    {
      name: "Corporate Headshots",
    },
    {
      name: "Doctor Headshots",
      headshotInfo: {
        tag: "Doctor Headshots",
        title: "Professional Medical, Doctor, & ERAS Headshots with AI",
        content:
          "Elevate your healthcare profile with professional AI-generated medical headshots—perfect for doctors, medical school applications, or ERAS residency. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/healthcare.webp",
      },
    },
    {
      name: "Lawyer Headshots",
      headshotInfo: {
        tag: "Lawyer Headshots",
        title: "Professional Lawyer Headshots with AI",
        content:
          "Get professional attorney headshots in minutes with the most realistic AI headshot generator ever. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/lawyer.webp",
      },
    },
    {
      name: "Sales Headshots",
      headshotInfo: {
        tag: "Sales Headshots",
        title: "Close more leads with our charming AI headshots",
        content:
          "Update your professional headshot in minutes with the most realistic AI headshot generator ever. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/sales.webp",
      },
    },
    {
      name: "Students Headshots",
      headshotInfo: {
        tag: "Students Headshots",
        title: "Land more jobs with our professional AI headshots",
        content:
          "Get affordable professional headshots in minutes with the most realistic AI headshot generator ever. Built by AI researchers from Meta and Microsoft.",
        imgPath: "/headshots/student.webp",
      },
    },
    {
      name: "Teacher Headshots",
      headshotInfo: {
        tag: "Teacher Headshots",
        title: "The best AI headshots for teachers",
        content:
          "Get professional headshots in minutes with the most realistic AI headshot generator ever. Perfect for school websites, learning platform, and more. Set a good first impression for students and their parents.",
        imgPath: "/headshots/teacher.webp",
      },
    },
    {
      name: "Youtube or Instagram",
    },
  ];

  const indivdualData = [
    {
      idx: 0,
      ele: (
        <>
          <HeadshotSelection
            userData={userData}
            setUserData={setUserData}
            errors={errors}
            headshots={headshots}
          />
        </>
      ),
    },

    {
      idx: 1,
      ele: (
        <>
          <UserDetails
            userData={userData}
            setUserData={setUserData}
            errors={errors}
          />
        </>
      ),
    },

    {
      idx: 2,
      ele: (
        <>
          <ImageSection
            userData={userData}
            setUserData={setUserData}
            files={files}
            setFiles={setFiles}
            fileErrorMsg={fileErrorMsg}
            setFileErrorMsg={setFileErrorMsg}
          />
        </>
      ),
    },

    {
      idx: 3,
      ele: (
        <>
          <div>
            <PriceCards
              data={priceCardData}
              userData={userData}
              setUserData={setUserData}
            />
          </div>
        </>
      ),
    },

    {
      idx: 4,
      ele: (
        <>
          <div>
            <OrderDetails userData={userData} files={files} />
          </div>
        </>
      ),
    },
  ];

  let maxIndex = 5 - 1;

  const updateIndex = (val) => {
    let newIndex = Math.max(currentIndex + val, 0);

    if (newIndex > 1 && newIndex < 3 && val > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        emailRegex.test(userData?.email) &&
        userData?.email?.length > 0 &&
        userData?.gender?.length > 0
      ) {
        setErrors({});
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        let error = { email: "", gender: "" };
        error.email = "Incorrect/Missing email";

        if (userData?.gender?.length == 0) {
          error.gender = "Please select a gender";
        }
        console.log(userData?.gender?.length);
        setErrors(() => {
          console.log(error);
          return error;
        });
        return;
      }
    }
    if (newIndex > 2 && val > 0) {
      if (files.length > 0 && files.length <= 4) {
        setFileErrorMsg();
        console.log("in this");
        if (maxIndex === currentIndex && val > 0) {
          return;
        }
        setCurrentIndex(newIndex);
      } else {
        setFileErrorMsg("Please upload 1-4 images to continue");
      }
      return;
    } else {
      if (maxIndex === currentIndex && val > 0) {
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem("userImgs", files);
    }
  }, [files]);

  const convertFiles = () => {
    return new Promise((resolve, reject) => {
      let newFiles = [];
      let myFiles = [...files];
      let promises = [];

      myFiles.forEach((element, idx) => {
        promises.push(
          fetch(element)
            .then((res) => res.blob())
            .then((blob) => {
              let extension = blob.type.split("/");

              const file = new File([blob], `${idx}.${extension[1]}`);
              console.log(file);
              newFiles.push(file);
            })
            .catch((error) => reject(error))
        );
      });

      Promise.all(promises)
        .then(() => resolve(newFiles))
        .catch((error) => reject(error));
    });
  };

  const handlePayment = async () => {
    let newFiles = await convertFiles();
    let formData = new FormData();

    // console.log(newFiles)

    // let newArr = []

    for (let i = 0; i < newFiles.length; i++) {
      // newArr.push(newFiles[i])
      formData.append("images", newFiles[i]);
    }
    // formData.append("file", newArr);
    formData.append("email", userData.email);
    formData.append("gender", userData.gender);
    formData.append("headshotType", userData.headshotType);
    formData.append("selectedPlan", JSON.stringify(userData.selectedPlan));

    axios
      .post(`${import.meta.env.VITE_API_URL}/payment/checkout`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.sessionUrl) {
          window.location.href = res.data.sessionUrl;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center gap-10 px-10 2xl:px-[80px]">
      <div
        ref={fieldsRef}
        className="rounded-full   bg-gradient-to-br from-[#1d2838] to-[#1d283880] p-1 px-2 relative h-[50px] flex justify-between"
      >
        {tabs?.map((item) => {
          return (
            <div className="relative">
              <div
                className={` ${
                  tabText === item ? "flex" : "hidden"
                }  absolute text-white h-full `}
              >
                <span
                  className={` rounded-full h-full w-[10rem] cursor-pointer  flex flex-col justify-center text-center bg-gradient-to-r from-[#3183ff] to-[#0c4cac] z-[10] transition duration-300`}
                  onClick={() => {}}
                >
                  {item}
                </span>
              </div>

              <span
                className={` rounded-full h-full w-[10rem] cursor-pointer  flex flex-col justify-center text-center text-white  z-[10] transition duration-300`}
                onClick={() => {
                  setTabSwitched(true);
                  setTabText(item);
                }}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
      <div className="shadow-[0_0_0_1px_#babcbf80] rounded-xl px-20 2xl:px-24 py-12 w-full 2xl:w-[1200px] min-h-[700px] bg-gradient-to-br from-[#1d2838] to-[#1d283880]">
        <div className="text-white text-3xl h-full ">
          {tabText === "Individual" && (
            <div
              className="flex flex-col justify-between h-full gap-8"
              ref={tabContentRef}
            >
              {indivdualData &&
                indivdualData?.map((item, idx) => {
                  if (item?.idx === currentIndex) {
                    return (
                      <div
                        className="h-[90%] w-full"
                        key={`individualData${idx}`}
                      >
                        {item?.ele}
                      </div>
                    );
                  }
                })}

              <div className="flex justify-center gap-2">
                {currentIndex > 0 && (
                  <button
                    className={`hover:squeezyBtn px-8 py-3 bg-[#b41f58] hover:bg-[#b41f58a8] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => updateIndex(-1)}
                  >
                    Back
                  </button>
                )}
                {currentIndex >= 0 && currentIndex < maxIndex && (
                  <button
                    className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => {
                      updateIndex(1);
                    }}
                  >
                    Next
                  </button>
                )}

                {currentIndex === maxIndex && (
                  <button
                    className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => {
                      handlePayment();
                    }}
                  >
                    Proceed to Payment
                  </button>
                )}
              </div>
            </div>
          )}
          {tabText === "Teams" && <Teams />}
          {tabText === "Customize" && (
            <div>
              <Customize
                userData={userData}
                setUserData={setUserData}
                setErrors={setErrors}
                files={files}
                setFiles={setFiles}
                fileErrorMsg={fileErrorMsg}
                setFileErrorMsg={setFileErrorMsg}
                errors={errors}
              />
            </div>
          )}
          {tabText === "Prompts" && (
            <Prompt
              userData={userData}
              setUserData={setUserData}
              setErrors={setErrors}
              files={files}
              setFiles={setFiles}
              fileErrorMsg={fileErrorMsg}
              setFileErrorMsg={setFileErrorMsg}
              errors={errors}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
