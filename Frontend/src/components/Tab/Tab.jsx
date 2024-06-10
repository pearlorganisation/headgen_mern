import React, { useEffect, useRef } from "react";
// import "./Tab.css";
import { useState } from "react";
import Customize from "../Customize/Customize";
import Teams from "./Teams/Teams";
import axios from "axios";
import Prompt from "../Prompt/Prompt";
import IndividualTab from "../IndividualTab/IndividualTab";

const Tab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    gender: "",
    files: "",
  });

  const [errors, setErrors] = useState({});
  const [fileErrorMsg, setFileErrorMsg] = useState(null);
  const [files, setFiles] = useState([]);
  const [tabSwitched, setTabSwitched] = useState(true);
  // const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ["Individual", "Teams", "Customize", "Prompts"];
  const [tabText, setTabText] = useState("Individual");
  const fieldsRef = useRef();

  const tabContentRef = useRef(null);

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
  ];

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      localStorage.clear();
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
              // console.log(file);
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

  const handlePayment = async (type) => {
    if (isLoading) return;
    setIsLoading(true);
    let newFiles = await convertFiles();
    let formData = new FormData();

    for (let i = 0; i < newFiles.length; i++) {
      formData.append("images", newFiles[i]);
    }
    formData.append("email", userData.email);
    formData.append("selectedPlan", JSON.stringify(userData.selectedPlan));
    formData.append("gender", userData.gender);
    formData.append("generationType", userData?.generationType || type
    )

    if (type === 'individual') {
      formData.append("headshotType", userData.headshotType);

    }
    if (type === "customize") {
      formData.append("customizeData", JSON.stringify(userData?.customizeData));
    } else if (type === "prompt") {
      formData.append("promptData", JSON.stringify(userData?.promptData));
    }

    axios
      .post(`${import.meta.env.VITE_API_URL}/payment/checkout`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.sessionUrl) {
          window.location.href = res.data.sessionUrl;
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);

        console.error(err);
      });
  };

  // useEffect(() => {
  //   // console.log(userData, "userData")
  //   // console.log(files, "files")
  // }, [userData, files])


  return (
    <div className="flex flex-col items-center gap-10 px-10 2xl:px-[80px]">
      <div
        ref={fieldsRef}
        className="rounded-full   bg-gradient-to-br from-[#1d2838] to-[#1d283880] p-1 px-2 relative h-[50px] flex justify-between"
      >
        {tabs?.map((item, idx) => {
          return (
            <div className="relative" key={`tab${idx}`}>
              <div
                className={` ${tabText === item ? "flex" : "hidden"
                  }  absolute text-white h-full `}
              >
                <span
                  className={` rounded-full h-full w-[10rem] cursor-pointer  flex flex-col justify-center text-center bg-gradient-to-r from-[#3183ff] to-[#0c4cac] z-[10] transition duration-300`}
                  onClick={() => { }}
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
            <IndividualTab
              userData={userData}
              setUserData={setUserData}
              setErrors={setErrors}
              files={files}
              setFiles={setFiles}
              fileErrorMsg={fileErrorMsg}
              setFileErrorMsg={setFileErrorMsg}
              errors={errors}
              headshots={headshots}
              tabContentRef={tabContentRef}
              isLoading={isLoading}
              handlePayment={handlePayment}
            />
          )}
          {tabText === "Teams" && <Teams setUserData={setUserData} userData={userData}
            handlePayment={handlePayment}
            isLoading={isLoading}
          />}
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
                tabContentRef={tabContentRef}
                isLoading={isLoading}
                handlePayment={handlePayment}
              />
            </div>
          )}
          {tabText === "Prompts" && (
            <Prompt
              userData={userData}
              setUserData={setUserData}
              files={files}
              setFiles={setFiles}
              fileErrorMsg={fileErrorMsg}
              setFileErrorMsg={setFileErrorMsg}
              setErrors={setErrors}
              errors={errors}
              tabContentRef={tabContentRef}
              isLoading={isLoading}
              handlePayment={handlePayment}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tab;
