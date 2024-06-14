import React, { useState, useEffect } from "react";
import AppSvgs from "../../components/AppSvgs/AppSvgs";
import { Link } from "react-router-dom";
import DatingHero from "../../components/Dating/DatingHero/DatingHero";
import BlogCards from "../../components/BlogCards/BlogCards";
import InfinitySlider from "../../components/InfinitySlider/InfinitySlider";

const Dating = () => {


  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }, []);

  const datingCardData = [
    {
      title: "Upload your images",
      content: "Upload just 1-4 images of yourself. Selfies work great",
      imgPath: "https://drive.google.com/thumbnail?id=1p-TpTUH-PIyphAgtNItuTOj78DDvXXu-&sz=s600",
    },
    {
      title: "Make payment",
      content:
        "Payment handled by stripe, we do not store your payment details.",
      imgPath: "https://drive.google.com/thumbnail?id=1mF7CmpcpFRAr7wOK6G45nMY9cVh0hhf_&sz=s600",
    },
    {
      title: "Get Amazing Dating Images",
      content:
        "Improve your dating game and stand out with Headgen AI",
      imgPath: "https://drive.google.com/thumbnail?id=1ClY9REKOEwtCav1DsHVL7hC0CKigiydC&sz=s600",
    },
  ];



  const imgData1 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1S5bBKkp1GzLny1qdZALDneLU_R8K9cpi&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=13MDKldbcfp2RoCD69JT3Mla6tpESwtZ3&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1BK36kyvW0Y7Qi31JNisi9sBILEt9h253&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1JryqvbPr6uei55RLn8XwYkhBloHXWQLx&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1VqauRyzxQkTqSgcPc-HRKuVbpYdGxnXp&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Xnoz9toClEftcNtI3ry6b70VYc3zGjnj&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qXHce4s_ceLgKA2-h53CbmQNA8DRkEK1&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Dqp3Xq_waIijv7u_0gZL3LyZHPM0ypdI&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1mYNjhBxqyoVmDuWmNsSxYMcQ5hywrnNy&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Y7WVp606_tCnO6XTrhMfmgyUdkf3GC9Q&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1r9yz5mD_3wmv2rrGxRoMyW3BclwUy-TG&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1Umqezt_nkshnPbJeg9oWU1F4zaOXuppc&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1D2APOwg12vupNKT6pePs3CauxDfwbMsy&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=148oLVfyQ_WuBOErIy1n4I870P7IUNF5R&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1CRmngISsdvYsf7U8SCgP-mMuKjZAnaGH&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1erHyNACW-Wal1hP4NNehB78BheOODW5b&sz=s600",
    },
    // {
    //   name: "",
    //   path: "https://drive.google.com/thumbnail?id=1jGcipyokjvGCqEtExRTnOfYvs_LYLMKB&sz=s600",
    // },
    // {
    //   name: "",
    //   path: "https://drive.google.com/thumbnail?id=1VdMX_SEiU6LmlO9Z_nkOWodKkgfjIj_X&sz=s600",
    // },
    // {
    //   name: "",
    //   path: "https://drive.google.com/thumbnail?id=1_gZ53nxozoj73SWK7_W60NEM_brI4Kpr&sz=s600",
    // },
  ];


  return (
    <div className="w-full py-20 flex flex-col bg-[#161616] gap-10 px-[200px] gradientBgRed">
      <div>
        <DatingHero />
      </div>
      <InfinitySlider imgData1={imgData1} />
      {/* <div className="w-full overflow-hidden px-10  xl:px-[160px] 2xl:px-[250px]">
      </div> */}



      <div className="flex  justify-center gap-6">
        <div
          className={`flex flex-col justify-center text-center font-bold text-[20px] bg-gradient-to-r from-[#ffffff] to-[#ffffff] text-transparent bg-clip-text`}
        >
          As seen on
        </div>
        <img src="https://drive.google.com/thumbnail?id=1YtuCvKh52uCx9LgvllSvapHl-p0Xzmmf&sz=s600" alt="" />
      </div>


      <div className="py-20">
        <BlogCards data={datingCardData} datingPage={true} />
      </div>

      <div className="flex justify-between cursor-default">
        <div className="relative w-[50%] 2xl:w-[55%] bg-gradient-to-br from-[#c4325eab] to-[#e60045c2] rounded-2xl shadow-[0_0_0_1px_#ffffff] pt-10 px-6 transition duration-500">
          <div className="absolute bg-white shadow-[0_0_0_1px_#ffffff] w-2/5 flex justify-center gap-2 top-0 right-0 p-2 rounded-[0_1rem_0_1rem] text-[20px] 2xl:text-[24px]">

            <span>It's a</span>{" "}
            <span className="font-bold italic">Match!</span>

          </div>
          <div className="flex flex-col gap-10  h-full">
            <div className="grid grid-cols-3 w-full h-1/2">


              <div className="h-[380px] w-full -translate-y-28 ">
                <img src="https://drive.google.com/thumbnail?id=1ewv1EGjapKk2Yh8pEoojQYGfGUTWL_vV&sz=s400" className="w-auto h-full" />
              </div>
              <div className="flex flex-col text-2xl lg:text-5xl 2xl:text-6xl leading-tight items-start py-10 font-semibold text-[#F1F1F1] col-span-2">
                  <div>Higher</div>
                  <div>Quality</div>
                     <div>Conversations</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[#f1f1f1] text-2xl">
              Not only will you get more matches, our AI dating photos will also
              increase the quality of your matches.
            </div>

          </div>
        </div>
        <div className="w-[40%] 2xl:w-[35%] flex flex-col gap-10 ">
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-2/3">
            <div className="absolute w-[220px] h-[200px] -top-8 -translate-y-10 -right-5">
              <img src="https://drive.google.com/thumbnail?id=188DHZNSMzN20Xbr_3mPIlpvDoqJBAIQr&sz=s600" className="h-full w-full" />
            </div>

            <div className="flex flex-col h-full justify-evenly gap-4 text-[#f1f1f1] ">
              <div className="flex flex-col gap-0 ">
                <div className="text-[44px] font-bold">10X</div>
                <div className="text-[28px] font-bold w-[200px] leading-tight">
                  Your match game
                </div>
              </div>
              <div className="text-[20px] ">
                Whether you’re looking for AI Tinder photos or AI Hinge photos,
                we’ve got you covered.
              </div>
            </div>
          </div>
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff]">
            <div className="flex flex-col justify-evenly gap-4 text-[#f1f1f1]">
              <div className="flex flex-col gap-0">
                <div className="text-[28px]  font-bold w-full flex justify-between">
                  <div className="bg-gradient-to-r from-[#ff437b] to-[#ff1158]  inline-block text-transparent bg-clip-text">
                    Find the one.
                  </div>
                  <AppSvgs name="heartPhone" height={44} width={44} />
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px]">
                Looking for a loving partner? Our AI dating photos are
                guaranteed to help increase your odds of helping you find a
                long-term partner or find a hookup.
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Dating;
