import React, { useEffect, useState } from "react";
import BeforeAfterSlider from "../../components/BeforeAfterSlider/BeforeAfterSlider";
import InfinitySlider from "../../components/InfinitySlider/InfinitySlider";
import FaqAccordian from "../../components/FaqAccordian/FaqAccordian";
import Carousel from "../../components/Carousel/Carousel";
import BlogCards from "../../components/BlogCards/BlogCards";
import DatingHero from "../../components/Dating/DatingHero/DatingHero";
import { FaLinkedin } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoDocumentTextOutline, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import InfinityTextSlider from "../../components/InfinitySlider/InfinityTextSlider";
import { IoIosStar } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AsSeenOn from "../../components/AsSeenOn/AsSeenOn";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const imgData1 = [
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1SC-xFjJKwj9IUmnK8rYdoJnVAcg5-wQH&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1IOdDiEkZd6_mDZcTHbwlxHTn_UvD3b8u&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1GUyv6jlwuNGrbaT6Yrd-GLY8pIF-keXf&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=15HVg-zhaBCYOB0Oc2Oo--UrS6AlYZuiL&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1HMLeKlSPY97lR-viypYIXazQF8uKjra5&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1AdTy58hl9yEcyjXuvp1F-UAPI8vrNQqh&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1IOdDiEkZd6_mDZcTHbwlxHTn_UvD3b8u&sz=s600",
    },
    {
      name: "",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
    },
  ];

  const imgData2 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021855/headgen/Home/Slideshow/top%20line/kajqgzz1tplnrbw2i1x6.webp",
    },

    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021855/headgen/Home/Slideshow/top%20line/fywiulkockfh5o04cpgk.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021855/headgen/Home/Slideshow/top%20line/n6nex9zoacko8ya07hbf.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/fzoqqrrvyydpyfvslpsx.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/g5rrtqqnjfjvqfjdrucm.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/snqcx5gvbg2bp1jrwxju.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021853/headgen/Home/Slideshow/top%20line/fis4kgi3ior0ytuqnm67.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021855/headgen/Home/Slideshow/top%20line/kajqgzz1tplnrbw2i1x6.webp",
    },

    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021855/headgen/Home/Slideshow/top%20line/fywiulkockfh5o04cpgk.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021855/headgen/Home/Slideshow/top%20line/n6nex9zoacko8ya07hbf.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/fzoqqrrvyydpyfvslpsx.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/g5rrtqqnjfjvqfjdrucm.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/snqcx5gvbg2bp1jrwxju.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021853/headgen/Home/Slideshow/top%20line/fis4kgi3ior0ytuqnm67.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021855/headgen/Home/Slideshow/top%20line/n6nex9zoacko8ya07hbf.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021854/headgen/Home/Slideshow/top%20line/fzoqqrrvyydpyfvslpsx.webp",
    },
  ];

  const imgData3 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021885/headgen/Home/Slideshow/bottom%20line/tpirpoyitgrl4vfv68hl.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/bc3scfh9dumbjsdfadzt.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/tww7sdgdqvmuek36vd1w.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/w5wyqi4uo7gwbwnsatn1.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/iehygz7sggohrm5rm96n.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/sbg4pzoyg7b4g3hblp4x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021883/headgen/Home/Slideshow/bottom%20line/rfguoodg3tliid18hl8d.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021885/headgen/Home/Slideshow/bottom%20line/tpirpoyitgrl4vfv68hl.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/bc3scfh9dumbjsdfadzt.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/tww7sdgdqvmuek36vd1w.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/w5wyqi4uo7gwbwnsatn1.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/iehygz7sggohrm5rm96n.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/sbg4pzoyg7b4g3hblp4x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021883/headgen/Home/Slideshow/bottom%20line/rfguoodg3tliid18hl8d.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/tww7sdgdqvmuek36vd1w.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021884/headgen/Home/Slideshow/bottom%20line/w5wyqi4uo7gwbwnsatn1.webp",
    },
  ];

  const moneyBackPics = [
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022097/headgen/Home/Money%20back%20gurantee/mh4pbzrezfbb0c6h2fki.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022096/headgen/Home/Money%20back%20gurantee/pakwoghifmonib07cipj.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022096/headgen/Home/Money%20back%20gurantee/ivcwzdxztugzg5fshux0.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022095/headgen/Home/Money%20back%20gurantee/zanf4vzveklxcbugmrmn.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022095/headgen/Home/Money%20back%20gurantee/rb9auh0w4d9j7xnjnvqo.webp",
    },
    {
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022097/headgen/Home/Money%20back%20gurantee/uvmpoflavstne9sorqu2.webp",
    },
  ];

  const reviewData1 = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/vwbntgy7jljdhbtrkp7c.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/ywyfovbxccxsvgc3agjw.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022021/headgen/Home/Our%20clients%20love%20the%20results/b91fnysczhfba8levtv1.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022021/headgen/Home/Our%20clients%20love%20the%20results/sqfclgos56luoi1ovxfc.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022021/headgen/Home/Our%20clients%20love%20the%20results/jb2hxeaie6hb4g57yjbd.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022020/headgen/Home/Our%20clients%20love%20the%20results/zwdiqyh7ksawl9ax4esc.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022020/headgen/Home/Our%20clients%20love%20the%20results/jfak2rpzwygegm0rjah4.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022020/headgen/Home/Our%20clients%20love%20the%20results/wvguod1hcf57rti8m4ks.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022019/headgen/Home/Our%20clients%20love%20the%20results/jyjefhfjfv4vdjwf3vrj.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022019/headgen/Home/Our%20clients%20love%20the%20results/xuff5bngwkzvsdpstc0p.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022019/headgen/Home/Our%20clients%20love%20the%20results/uozy5ccz1nqsj1gpbsf6.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022018/headgen/Home/Our%20clients%20love%20the%20results/mi6wb89csg7mnkscix09.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022018/headgen/Home/Our%20clients%20love%20the%20results/jicl9xctg1ziwgbnxpqv.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022018/headgen/Home/Our%20clients%20love%20the%20results/wkrbcto2sdsyptrcwnhu.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/vwbntgy7jljdhbtrkp7c.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022022/headgen/Home/Our%20clients%20love%20the%20results/ywyfovbxccxsvgc3agjw.webp",
    },
  ];

  const cardData = [
    {
      title: "Upload a selfie",
      content:
        "Start your professional AI image generation experience by uploading your selfie.",
      imgPath:
        "https://drive.google.com/thumbnail?id=1Z2eHvjtVo6jYo9EGwSPYILub23hsMxBY&sz=s600",
    },
    {
      title: "Make Payment",
      content:
        "Make your payment to unlock the power of AI and transform your image into stunning professional images.",
      imgPath:
        "https://drive.google.com/thumbnail?id=1pndNiBuEgvuDl_RVGFTpw_W6vCCWvCn1&sz=s600",
    },
    {
      title: "Get Professional Images",
      content:
        "Get professional images all delivered to you within a swift window of time.",
      imgPath:
        "https://drive.google.com/thumbnail?id=17smkegUhG8QWeR3v8xMhLqx8gGPG8l1a&sz=s600",
    },
  ];

  const carouselData = [
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022036/headgen/Home/Premium%20Professional%20headshots%20generator/g7fykguwuqjjxprepn0x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022035/headgen/Home/Premium%20Professional%20headshots%20generator/cnmto5awa2jiqbxtvw2x.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022035/headgen/Home/Premium%20Professional%20headshots%20generator/xsly9xjgpfktdh8iqumf.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/vsrc9d7otttfvjwecr9v.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/fmevs4u03kmavhsbgvp6.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/fubziz4smd7vus5jvfju.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022034/headgen/Home/Premium%20Professional%20headshots%20generator/wbkcqoubmcby8vtm1p4g.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022033/headgen/Home/Premium%20Professional%20headshots%20generator/wgkmix0qjzhch1a1if22.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022033/headgen/Home/Premium%20Professional%20headshots%20generator/h1lzh4bbavbbn4ku8ui8.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022032/headgen/Home/Premium%20Professional%20headshots%20generator/rqjm2uom2pfpocnisj8y.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022032/headgen/Home/Premium%20Professional%20headshots%20generator/syycc7szgushtu0ya2zk.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022032/headgen/Home/Premium%20Professional%20headshots%20generator/ddxaqslt8tqfj14jrnpl.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022031/headgen/Home/Premium%20Professional%20headshots%20generator/n6nsrl9jjadmjh4esfx7.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022031/headgen/Home/Premium%20Professional%20headshots%20generator/rszo33twyvwjqiinifxu.webp",
    },
    {
      name: "",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022031/headgen/Home/Premium%20Professional%20headshots%20generator/hicuaotiab66d7tdqksg.webp",
    },
  ];

  const useCaseData = [
    {
      title: "Linkedin Photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1SC-xFjJKwj9IUmnK8rYdoJnVAcg5-wQH&sz=s600",
      svg: (
        <>
          <FaLinkedin size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Resume",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1qYhll_Ny7A4pJhoPPvW6743tYJiE7yWP&sz=s600",
      svg: (
        <>
          <IoDocumentTextOutline size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Team photo",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021927/headgen/Home/use%20cases/tdpnwk5o2ursaeocr453.webp",
      svg: (
        <>
          <MdGroups size={22} className="text-blue-500" />
        </>
      ),
    },
    {
      title: "Portfolio Website",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1oIOd5rDDBUX19HTiz5eDLokW57w1X0nF&sz=s600",
      svg: (
        <>
          <LazyLoadImage
            src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021927/headgen/Home/use%20cases/tyyoog6ul8umehqzkb3m.webp"
            className="w-[22px] h-[22px]"
          />
        </>
      ),
    },
    {
      title: "Job Portal",
      content:
        "Get an authentic, professionally generated AI headshot that appears professionally shot.",
      path: "https://drive.google.com/thumbnail?id=1zltDX4qtRqhuof60XWaTdOwQXSCQhETw&sz=s600",
      svg: (
        <>
          <LazyLoadImage src="/Indeed_logo.png" className="h-[16px]" />
        </>
      ),
    },
  ];

  const blogData = [
    {
      title: "",
      content: "10 Tips to Generate the Best AI Headshots",
      imgPath: "/aiBlog/1.png",
      btnLink: "/",
    },
    {
      title: "",
      content: "Can you use Professional Headshots on LinkedIn?",
      imgPath: "/aiBlog/2.png",
      btnLink: "/",
    },
    {
      title: "",
      content: "Do’s & Don’ts for the best results for AI Image Generation",
      imgPath: "/aiBlog/3.png",
      btnLink: "/",
    },
  ];

  const privacyFirstData = [
    {
      title: "Advanced Encryption",
      content:
        "Your data deserves the best protection. We encrypt all sensitive user data",
      imgPath: "/privacyFirst/encryption.webp",
    },
    {
      title: "Secured Data",
      content: "HeadGen.ai will never sell your data to any third party.",
      imgPath: "/privacyFirst/secure.webp",
    },
    {
      title: "You’re in Control",
      content: "We will never use your photos  to train our AI model .",
      imgPath: "/privacyFirst/control.webp",
    },
    {
      title: "Live Support",
      content: "E-mail us anytime. We respond Monday-Saturday.",
      imgPath: "/privacyFirst/support.webp",
    },
  ];

  useEffect(() => {
    // Set a small delay before applying the animation class
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    // Clear the timeout on component unmount to prevent memory leaksq
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full py-20  flex flex-col bg-[#161616] gap-10">
      {/* hero */}

      <div className="flex justify-center px-10 md:px-16 2xl:px-[200px]">
        <div
          className={`w-full md:w-1/2 flex flex-col items-center gap-0 pt-5 md:pt-10 text-center`}
        >
          <div className="flex flex-col leading-none mb-4 space-y-0">
            <div
              className={`text-xl lg:text-3xl font-bold bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text ${
                isAnimated ? "animatedReveal" : "invisible"
              }`}
            >
              AI HEADSHOT GENERATOR
            </div>
            <div
              className={`text-white oswald text-[6rem] lg:text-[9rem] font-bold pb-4 ${
                isAnimated ? "animatedReveal" : "invisible"
              }`}
            >
              AI TOOL
            </div>
            <div
              className={` text-[20px] lg:text-[28px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text ${
                isAnimated ? "animatedReveal" : "invisible"
              }`}
            >
              FOR PROFESSIONAL HEADSHOTS
            </div>
          </div>
          <div
            className={`flex flex-col gap-6 mb-3 md:mb-0 text-center justify-center items-center md:items-start ${
              isAnimated ? "animatedReveal" : "invisible"
            }`}
          >
            <Link
              to="/upload/Corporate%20Headshots"
              className={`w-full px-2 h-[40px] md:h-[58px] hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 ${
                isAnimated ? "animatedReveal" : "invisible"
              }`}
            >
              Get your photos for $29
            </Link>

            <div className="flex flex-col md:flex-row gap-1 justify-between">
              <div className="flex flex-col justify-center">
                <LazyLoadImage
                  src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721022126/headgen/Home/eqiraehtzcsqsugxkcsp.webp"
                  width={"120px"}
                />
              </div>

              <div className=" flex flex-col leading-tight">
                <span className="flex gap-1 justify-start items-center md:items-start">
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                  <IoIosStar className="text-yellow-400" size={21} />
                </span>

                <span className="text-[#f1f1f1] text-[13px] ">
                  Rated 4.9 Stars in over
                </span>
                <span className="text-[#f1f1f1] text-[13px] ">
                  30,000+ AI Headshots
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={`max-w-[834px] w-full flex flex-col gap-4 items-end pt-10`}
        >
          <LazyLoadImage
            src={`https://drive.google.com/thumbnail?id=1UA7FyAGDxxNyOmQI2aEocXL8V1a70uJ-&sz=s600`}
            className="h-full w-full"
          />
        </div> */}
      </div>

      {/* infinity slider */}
      <div className="w-full overflow-hidden px-10 md:px-16 2xl:px-[200px]">
        <InfinitySlider imgData1={imgData1} />
      </div>

      {/* featured by */}

      {/* 
      <div className="flex flex-col items-center gap-6">
        <div
          className={`flex flex-row gap-6  ${
            isAnimated ? "animatedReveal" : "invisible"
          }`}
        >
          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              Featured in
            </div>
            <div className=" flex flex-col justify-center">
              <AppSvgs name="forbes" width={100} height={100} />
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <AppSvgs name="productHunt" width={40} height={40} />
            </div>
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <span className="text-[10px]">Featured on</span>
              <span className="text-[24px] font-semibold leading-none">
                Product Hunt
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1] font-semibold text-[36px]">
              <div className="flex gap-2">
                <span>300K+</span>
                <span>Users</span>
              </div>
            </div>
          </div>




          <div className="flex gap-2">
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
            <IoStarSharp size={34} className="text-green-500"/>

            </div>
            <div className=" flex flex-col justify-center text-[#f1f1f1]">
              <span className="text-[10px]">Trustpilot</span>
              <span className="text-[20px] font-semibold leading-none">
                Rated 4.7/5 (4129)
              </span>
            </div>
          </div>

        </div>
      </div> */}

      {/* trusted by */}

      <AsSeenOn isAnimated={isAnimated} />

      {/* how it works */}

      <div className="flex justify-center px-10 md:px-16 2xl:px-[200px] py-14">
        <div className="grid gap-8 md:gap-0 md:grid-cols-2  md:justify-between w-full">
          <div className=" flex flex-col w-full gap-4 justify-center items-center  ">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 w-fit">
              <div className="text-[#F1F1F1] text-3xl md:text-[60px] 2xl:text-[72px] font-medium  grid place-items-center">
                How it
              </div>
              <div className="text-3xl md:text-[60px] leading-[3rem] 2xl:text-[72px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                works
              </div>
              <Link
                to="/upload/Corporate%20Headshots"
                className="hover:squeezyBtn col-span-2 md:col-auto flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full py-2 md:py-4  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500 px-2 text-[14px]"
              >
                Get your photos for $29
              </Link>
            </div>
          </div>
          <div className=" flex flex-col w-full gap-6 items-center">
            <div className="w-full flex justify-center">
              <iframe
                src="https://res.cloudinary.com/dj2fvzfmm/video/upload/v1721022181/headgen/How%20it%20works%20video/ej1ci1htv6momh1v0vov.mp4"
                width="100%"
                height="100%"
                className="rounded-2xl h-[200px] sm:w-[500px] sm:h-[300px] md:h-[300px] md:w-[640px] 2xl:h-[400px] 2xl:w-[700px]"
              ></iframe>
            </div>

            <div className="text-[#F1F1F1] text-[10px]">
              Upload a selfie and get Professional Images for your LinkedIn
              Profile, Resume, TV Commercial etc
            </div>
          </div>
        </div>
      </div>

      {/* use flow card section */}

      <div className="px-10 md:px-16 2xl:px-[200px] pb-20">
        <div className="flex flex-wrap flex-col pt-8 md:pt-0 gap-[8rem] md:gap-2 md:flex-row justify-center items-center md:items-start md:justify-between px-2 ">
          {cardData &&
            cardData?.map((item, idx) => (
              <div className="relative w-full max-w-[320px] h-[300px] md:w-[32%] rounded-t-2xl bg-white pt-6 flex flex-col gap-8 2xl:gap-4 justify-between hover:shadow-[0_0_0_6px_#3A36F3] hover:-translate-y-7 hover:scale-[1.02] cursor-default transition duration-300">
                <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] absolute -top-14 md:-top-20 right-2">
                  <LazyLoadImage
                    src={item?.imgPath}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 px-6 h-[200px]">
                  <div className="text-2xl  md:text-5xl lg:text-7xl text-[#0055D4] font-medium">
                    {`0${idx + 1}`}
                  </div>
                  <div className="flex flex-col gap-8">
                    <div className="text-[#0C062C] text-2xl font-medium">
                      {item?.title}
                    </div>
                  </div>
                </div>
                <div className="w-full h-[150px] bg-[#0055D4] text-white px-4 pb-2 flex justify-center items-center">
                  {item?.content}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="px-10 md:px-16 2xl:px-[200px] pb-20">
        <InfinityTextSlider />
      </div>
      {/* swipe section */}

      <div className="px-10 md:px-16 2xl:px-[200px] grid   lg:grid-cols-[auto_20rem] xl:grid-cols-[30rem_auto]  2xl:grid-cols-[auto_25rem] gap-[8rem] cursor-default">
        <div className="w-[50% w-full 2xl:w-[55% bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] rounded-2xl shadow-[0_0_0_1px_#ffffff] py-10 relative transition duration-500">
          <div className="flex flex-col justify-between gap-8 md:gap-20 items-center h-full">
            <div className="flex flex-col  items-center text-[20px] sm:text-[26px] xl:text-[32px] 2xl:text-[40px] font-extrabold md:font-semibold text-[#F1F1F1]">
              <div>The Most Realistic</div>
              <div>AI Image Generator</div>
            </div>

            {/* for mobile screen */}
            <div className="text-white block md:hidden">
              <div className="text-[24px] font-bold text-center">
                Professional Photoshoot
              </div>
              <div className="flex flex-col justify-center items-center gap-2 text-[18px]">
                <div>Upto $2500</div>
                <div>Multiple Days</div>
                <div>Tedious Process</div>
              </div>
            </div>
            <div className="text-[#f1f1f1] text-[40px] md:text-[55px] lg:text-[70px] xl:text-[80px] italic">
              VS
            </div>
            <div className="text-white block md:hidden">
              <div className="text-[24px] font-bold text-center">
                HeadGen AI
              </div>
              <div className="flex flex-col justify-center items-center gap-2 text-[18px]">
                <div>$29</div>
                <div>Within 2 hours</div>
                <div>Very easy process</div>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-2 text-[#f1f1f1] text-[22px]">
              <div>Why waste hours on expensive Photoshoots?</div>
              <div>Boost your careed with amazing AI Generated</div>
              <div>Images that are quick, easy, cheap & convenient!</div>
            </div>
          </div>

          {/* above md: screens */}
          <div className="w-[200px] hidden  h-[200px] lg:w-[220px] lg:h-[170px] 2xl:w-[270px] 2xl:h-[220px] md:flex flex-col justify-evenly items-center bg-gradient-to-br from-[#053499] to-[#2563EB] p-4 absolute top-1/2 -translate-y-1/2 -left-8 lg:-left-14 rounded-xl shadow-[0_0_0_1px_#ffffff] hover:scale-[1.001] hover:shadow-[0_0_0_2px_#ffffff] transition duration-600 text-[#ffffff]">
            <div className="text-[18px] 2xl:text-[24px] font-bold text-center">
              Professional Photoshoot
            </div>
            <div className="flex flex-col gap-1 md:gap-2 text-[18px]">
              <div>Upto $2500</div>
              <div>Multiple Days</div>
              <div>Tedious Process</div>
            </div>
          </div>

          {/* above md: screens */}
          <div className="w-[200px] h-[200px] 2xl:w-[270px] 2xl:h-[220px] hidden md:flex flex-col justify-evenly items-center bg-gradient-to-br from-[#053499] to-[#2563EB]  p-4 absolute top-1/2 -translate-y-1/2 lg:-right-14 -right-8 rounded-xl shadow-[0_0_0_1px_#ffffff] hover:scale-[1.001] hover:shadow-[0_0_0_2px_#ffffff] transition duration-600 text-[#ffffff] ">
            <div className="text-[18px] 2xl:text-[24px] font-bold text-center">
              HeadGen AI
            </div>
            <div className="flex flex-col gap-1 md:gap-2 text-[18px]">
              <div>$29</div>
              <div>Within 2 hours</div>
              <div>Very easy process</div>
            </div>
          </div>
        </div>
        <div className="w-[40% w-full 2xl:w-[35% flex flex-col gap-10 ">
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] h-2/3">
            <div className="absolute w-[130px] h-[130px] md:w-[200px] md:h-[200px] -top-10 -translate-y-10 right-2 shadow-[0_0_0_1px_#ffffff] rounded-2xl">
              <BeforeAfterSlider
                img1={"/beforeAfter/before.jpg"}
                img2={"/beforeAfter/after.jpg"}
              />
            </div>

            <div className="flex flex-col h-full justify-evenly gap-4 text-[#f1f1f1] ">
              <div className="flex flex-col gap-0 ">
                <div className="text-[30px] md:*:text-[44px] font-bold">
                  Swipe
                </div>
                <div className="text-[15px] md:text-[28px] font-bold w-[200px] leading-tight">
                  to see the results
                </div>
              </div>
              <div className="text-[20px]">
                Simply upload a selfie and get High Quality Professional AI
                Generated Images
              </div>
            </div>
          </div>
          <div className="w-full !glassMorphism !bg-gradient-to-br !from-[#10151dde] to-[#121720de] py-10 rounded-2xl relative px-8 shadow-[0_0_0_1px_#ffffff] min-h-1/3">
            <div className="flex flex-col justify-evenly gap-4 text-[#f1f1f1]">
              <div className="flex flex-col gap-0">
                <div className="text-[28px] font-bold w-full flex justify-between">
                  <div>Boost your Career</div>
                  <FaLinkedin size={48} className="text-blue-500" />
                </div>
                {/* <div className="text-[28px] font-bold w-[200px] leading-tight">
                  to see the results
                </div> */}
              </div>
              <div className="text-[20px]">
                Make a lasting first impression <br /> with amazing Professional
                Headshots.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gradientBackground px-10 md:px-16 2xl:px-[200px]">
        <div className="flex flex-col items-center gap-6 pt-14">
          <div className="text-white text-2xl text-center md:text-[45px] font-semibold lg:font-normal lg:text-[64px]">
            High Quality Images
          </div>
          <div className="w-full max-w-[90%] flex flex-col gap-6 items-center">
            <div className="text-center text-white text-[16px]">
              We take our Quality very seriously Our Engineers ensure that
              almost all the images generated can be used in a profesional
              setting
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2 items-center">
              <Link
                to="/upload/Corporate%20Headshots"
                className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full py-2 px-4  md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
              >
                Get your photos for $29
              </Link>
              <span className="flex flex-col text-center text-[19px] text-[#f1f1f1]">
                <span>
                  Payment handled by{" "}
                  <strong className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text ">
                    Stripe
                  </strong>
                </span>
                <span className="text-[14px]">
                  We do not store your payment details
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="py-8 md:py-16">
          <InfinitySlider imgData1={imgData2} imgData2={imgData3} />
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div className="text-[#F1F1F1] space-x-2  text-xl text-center md:text-4xl 2xl:text-[72px]  font-medium">
            <span>Use Cases of</span>
            <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  inline-block text-transparent bg-clip-text font-bold md:py-10">
              AI Headshots
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center w-full gap-4 md:gap-2">
            {useCaseData?.map((item) => (
              <div className="w-auto max-w-[230px] 2xl:w-[200px] bg-white shadow-[0_0_0_1px_#2563EB] rounded-xl hover:-translate-y-4 cursor-default transition duration-300">
                <div className="w-full h-2/3">
                  <LazyLoadImage
                    src={item?.path}
                    className="w-full h-full rounded-t-xl"
                  />
                </div>
                <div className="flex flex-col justify-center px-2 py-4">
                  <div className="text-medium text-sm font-bold flex justify-between">
                    <span>{item?.title}</span>
                    <span>{item?.svg}</span>
                  </div>
                  <div className="text-xs">{item?.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* turn your selfie info card */}
        <div className="w-full grid md:grid-cols-2 gap-4 bg-gradient-to-r from-[#131270] via-[#161497] to-[#1f1db3] mt-28 py-5 lg:py-10 rounded-xl shadow-[0_0_1px_1px#f1f1f1] ">
          <div className="flex w-full flex-col  items-center md:items-start justify-evenly gap-2 md:gap-4 px-10">
            <div className="text-xl md:text-[22px] lg:text-[32px] xl:text-[48px] 2xl:text-4xl text-[#F1F1F1]">
              Turn your selfie into
            </div>
            <div className=" text-center w-full md:text-left text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl  bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
              Professional Headshots
            </div>
            <div className="text-xl md:text-3xl text-center md:text-left text-[#F1F1F1]">
              AI Headshots
            </div>
            <div>
              <Link
                to="/upload/Corporate%20Headshots"
                className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full px-6 py-2 md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
              >
                Get your photos for $29
              </Link>
            </div>
          </div>
          <div className="w-full ">
            <LazyLoadImage
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1721021956/headgen/Home/Turn%20your%20selfie%20into%20professional%20headshots/nrg3dczzklbafdfbc2lp.webp"
              className="w-full h-full"
              height={250}
              width={430}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* dating hero section */}
        <div className="flex justify-center py-20 ">
          <DatingHero />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-10 md:px-16 2xl:px-[200px]">
        <div className="w-full relative">
          <div className="flex flex-col items-center md:items-start justify-center gap-2 md:gap-6 top-0">
            <div className=" text-[#F1F1F1] md:grid space-x-3 md:space-x-0  w-full text-center md:text-left text-xl sm:text-2xl md:text-4xl xl:text-6xl font-medium">
              <span>Frequently</span>

              <span>Asked</span>

              <span>Questions</span>
            </div>
            <div className="text-[#F1F1F1] text-[14px]">
              E-mail is at support@headgen.ai we are available round the clock.
            </div>
          </div>
        </div>
        <div className="w-full">
          <FaqAccordian />
        </div>
      </div>

      <div className="flex space-y-4 flex-col px-10 md:px-16 2xl:px-[200px]">
        <div className="text-center text-xl sm:text-2xl md:text-4xl xl:text-6xl  text-[#F1F1F1]">
          <span className=" bg-gradient-to-r md:leading-[5rem] from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Our Clients love
          </span>{" "}
          Our Results
        </div>
        <InfinitySlider
          imgData1={reviewData1}
          imgData2={reviewData1}
          height={"400px"}
        />
      </div>

      <div className="flex flex-col gap-5 md:gap-10">
        <div className="text-center text-lg sm:text-xl md:text-3xl xl:text-5xl text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Privacy First
          </span>{" "}
          to Protect Your Data
        </div>
        <div className="flex flex-wrap justify-center gap-4  px-10 md:px-16 2xl:px-[200px] ">
          {privacyFirstData &&
            privacyFirstData?.map((item) => (
              <div className=" w-[70%] md:w-[33%] xl:w-[22%] rounded-2xl p-4 py-6 bg-transparent hover:!bg-gradient-to-b hover:!from-[#02AFDC] hover:!to-[#2563EB] flex flex-col justify-between items-center text-[#F1F1F1] shadow-[0_0_2px_1px_#02AFDC] hover:shadow-[0_0_5px_1px_#2563EB] hover:scale-[0.98] cursor-default transition duration-500">
                <div className="w-1/3">
                  <LazyLoadImage src={item?.imgPath} className="w-full" />
                </div>
                <div className="2xl:text-lg">{item?.title}</div>
                <div className="text-xs 2xl:text-base text-center">
                  {item?.content}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="text-center text-2xl md:text-4xl xl:text-6xl text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            Premium Professional
          </span>{" "}
          Image Generator
        </div>
        <div className="text-center text-[#f1f1f1] text-[15px]">
          Swipe to see more images
        </div>
        <Carousel carouselData={carouselData} />
        <div className="text-center text-[#f1f1f1] text-[12px]">
          AI Generated Images using HeadGen
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-10 md:px-16 2xl:px-[200px] py-10">
        <div className="w-full flex flex-col items-center gap-1">
          <div className="flex w-2/3  gap-1">
            <div className="w-2/3 max-w-[300px]">
              <LazyLoadImage
                src={`${moneyBackPics[0].path}`}
                className="h-full !max-h-[300px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={300}
                width={300}
              />
            </div>
            <div className="w-1/3 max-w-[150px] flex flex-col gap-1">
              <LazyLoadImage
                src={`${moneyBackPics[1].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={150}
                width={150}
              />
              <LazyLoadImage
                src={`${moneyBackPics[2].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={150}
                width={150}
              />
            </div>
          </div>
          <div className="flex w-2/3   gap-1">
            <div className="w-1/3 max-w-[150px] flex flex-col gap-1">
              <LazyLoadImage
                src={`${moneyBackPics[3].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={150}
                width={150}
              />
              <LazyLoadImage
                src={`${moneyBackPics[4].path}`}
                className="h-1/2 !max-h-[150px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={150}
                width={150}
              />
            </div>
            <div className="w-2/3 max-w-[300px]">
              <LazyLoadImage
                src={`${moneyBackPics[5].path}`}
                className="h-full !max-h-[300px] rounded-xl hover:scale-[1.04] transition duration-400"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 top-0">
            <div className="text-center space-x-3 md:space-x-0 md:grid text-[#F1F1F1] text-[32px] md:text-[42px] lg:text-[52px] 2xl:text-[60px] font-medium">
              <span className="bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
                Money-Back
              </span>

              <span>Guarantee</span>
            </div>
            <div className="text-[#F1F1F1] text-[14px]">
              Try Headgen.ai with confidence. Our results are Mind blowing.
            </div>
            <Link
              to="/upload/Corporate%20Headshots"
              className="hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg w-full md:w-2/3 py-2  md:py-4 hover:shadow-[0_0_0_2px_#224cc2] transition duration-500"
            >
              Get your photos for $29
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24 px-10 md:px-16 2xl:px-[200px]">
        <div className="text-center text-2xl md:text-4xl xl:text-6xl text-[#F1F1F1]">
          <span className=" bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold">
            HeadGen
          </span>{" "}
          AI Blog
        </div>
        <div>
          <BlogCards data={blogData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
