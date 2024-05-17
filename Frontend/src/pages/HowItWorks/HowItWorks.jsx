import React, { useEffect, useState } from "react";


const HowItWorks = () => {
  const imgData1 = [
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1zltDX4qtRqhuof60XWaTdOwQXSCQhETw=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1HMLeKlSPY97lR-viypYIXazQF8uKjra5=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1SC-xFjJKwj9IUmnK8rYdoJnVAcg5-wQH=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1zltDX4qtRqhuof60XWaTdOwQXSCQhETw=s800?authuser=0",
    },
    {
      name: "",
      path: "https://lh3.googleusercontent.com/d/1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf=s800?authuser=0",
    }
  ];



  return (
    <div className="w-full py-20 bg-[#161616] ">
      <div className="text-center pt-12">

        <div
          className={`text-6xl bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold `}
        >
          Get Team Headshot
        </div>
      </div>
      {/* turn your selfie info card */}
      <div className="container mx-auto bg-white mt-28 py-10 rounded-xl shadow-[0_0_5px_2px#f1f1f1] flex ">
        <div className="grid grid-cols-6 gap-3 px-8">
          <div className="col-span-2 text-black text-6xl font-sans font-bold">AI Generated Team Gallery</div>
          {
            imgData1.map(item => {
              return <div className="text-black border rounded overflow-hidden">
                <img src={item?.path} alt="" />
                <div className="flex flex-col px-2 py-1">
                  <span className="font-medium">John Doe</span>
                  <span className="font-normal">Software Developer</span>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
