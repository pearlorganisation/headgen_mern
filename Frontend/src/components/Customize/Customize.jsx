import React, { useState } from 'react'
import AppSvgs from '../../components/AppSvgs/AppSvgs'
import OrderDetails from '../OrderDetails/OrderDetails'
import PriceCards from '../PriceCards/PriceCards'
import CustomizeTabs from './CustomizeTabs'
import { IoManSharp, IoWoman } from "react-icons/io5";

const Customize = () => {
    const temp = [
        {
            section: 'Formal',
            icon: (
                <>
                    <AppSvgs name="formal" />
                </>
            ),
            subSection: [
                {
                    title: 'Outdoor Park',
                    images: [
                        { name: "", path: "/slider1/1.jpg" },
                        { name: "", path: "/slider1/2.jpg" },
                        { name: "", path: "/slider1/3.jpg" },
                        { name: "", path: "/slider1/4.jpg" },
                    ]
                },
                {
                    title: 'Indoor Office',
                    images: [
                        { name: "", path: "/slider1/5.jpg" },
                        { name: "", path: "/slider1/6.jpg" },
                        { name: "", path: "/slider1/7.jpg" },
                        { name: "", path: "/slider1/8.jpg" },
                    ]
                },
                {
                    title: 'Studio Grey',
                    images: [
                        { name: "", path: "/slider1/4.jpg" },
                        { name: "", path: "/slider1/3.jpg" },
                        { name: "", path: "/slider1/7.jpg" },
                        { name: "", path: "/slider1/8.jpg" },
                    ]
                },
                {
                    title: 'Studio White',
                    images: [
                        { name: "", path: "/slider1/3.jpg" },
                        { name: "", path: "/slider1/6.jpg" },
                        { name: "", path: "/slider1/2.jpg" },
                        { name: "", path: "/slider1/1.jpg" },
                    ]
                },
                {
                    title: 'Black & White',
                    images: [
                        { name: "", path: "/slider1/2.jpg" },
                        { name: "", path: "/slider1/5.jpg" },
                        { name: "", path: "/slider1/7.jpg" },
                        { name: "", path: "/slider1/4.jpg" },
                    ]
                }
            ]
        },
        {
            section: 'Casual',
            icon: (
                <>
                    <AppSvgs name="casual" />
                </>
            ),
            subSection: [
                {
                    title: 'Indoor Park',
                    images: [
                        { name: "", path: "/slider1/1.jpg" },
                        { name: "", path: "/slider1/2.jpg" },
                        { name: "", path: "/slider1/3.jpg" },
                        { name: "", path: "/slider1/4.jpg" },
                    ]
                },
                {
                    title: 'Outdoor Office',
                    images: [
                        { name: "", path: "/slider1/5.jpg" },
                        { name: "", path: "/slider1/6.jpg" },
                        { name: "", path: "/slider1/7.jpg" },
                        { name: "", path: "/slider1/8.jpg" },
                    ]
                },
                {
                    title: 'Studio White',
                    images: [
                        { name: "", path: "/slider1/4.jpg" },
                        { name: "", path: "/slider1/3.jpg" },
                        { name: "", path: "/slider1/7.jpg" },
                        { name: "", path: "/slider1/8.jpg" },
                    ]
                },
                {
                    title: 'Studio Grey',
                    images: [
                        { name: "", path: "/slider1/3.jpg" },
                        { name: "", path: "/slider1/6.jpg" },
                        { name: "", path: "/slider1/2.jpg" },
                        { name: "", path: "/slider1/1.jpg" },
                    ]
                },
                {
                    title: 'Black & White',
                    images: [
                        { name: "", path: "/slider1/2.jpg" },
                        { name: "", path: "/slider1/5.jpg" },
                        { name: "", path: "/slider1/7.jpg" },
                        { name: "", path: "/slider1/4.jpg" },
                    ]
                }
            ]
        }
    ]

    const [subSectionData, setSubSectionData] = useState(temp[0]?.subSection || [])
    const [subSectionImages, setSubSectionImages] = useState(temp[0]?.subSection[0]?.images || [])
    const [currentIndex, setCurrentIndex] = useState(1)
    const totalPage = 5;

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

    ];

    const [userData, setUserData] = useState({})
    const [email, setEmail] = useState(userData?.email);
    const [gender, setGender] = useState(userData?.gender);
    const genderSelections = [
        {
            name: "Male",
            svg: (
                <>
                    <IoManSharp size={22} />
                </>
            ),
        },
        {
            name: "Female",
            svg: (
                <>
                    <IoWoman size={22} />
                </>
            ),
        },
    ];




    return (
        <>
            {
                currentIndex === 1 && <div className="text-[#121212] text-3xl h-fit space-y-8 bg-[#f1f1f1] p-10 rounded-2xl">
                    <div className='w-full flex justify-center flex-wrap gap-3'>
                        {
                            temp?.map(item => {
                                return <div className=' w-1/4'>
                                    <input

                                        name='sectionName'
                                        className="peer hidden" type="radio" value={item?.section} id={`${item?.section}`} />
                                    <label onClick={() => {
                                        setSubSectionData(item?.subSection)
                                    }}
                                        className='px-6 py-2  flex justify-center items-center gap-2 hover:shadow-[0_3px#0000FF] hover:text-blue-700 font-medium cursor-pointer border-4 border-transparent peer-checked:shadow-[0_3px#0000FF] ring-indigo-500/80 transition duration-300' htmlFor={item?.section}>
                                        <span>
                                            {item?.icon}
                                        </span>
                                        {item?.section} </label>
                                    {/* <button onClick={() => {
                                       setSubSectionData(item?.subSection)
                                   }} className='flex flex-col w-full justify-center items-center  hover:shadow-[0_3px#0000FF] hover:text-blue-700 px-6 py-3  cursor-pointer border-4 border-transparent peer-checked:border-white peer-checked:ring-4 ring-indigo-500/80 transition-all'>
                                       <span>
                                           {item?.icon}
                                       </span>
                                       <span>
                                           {item?.section}
                                       </span>
                                   </button> */}
                                </div>

                                {/* <div className="relative ">
                                   <input

                                       name='subSectionTitle'
                                       className="peer hidden" type="radio" value={item?.title} id={`${item?.title}`} />
                                   <label onClick={() => {
                                       setSubSectionImages(item?.images)
                                   }}
                                       className='px-6 py-2 hover:shadow-[0_3px#0000FF] hover:text-blue-700 font-medium cursor-pointer border-4 border-transparent peer-checked:shadow-[0_3px#0000FF] ring-indigo-500/80 transition duration-300' htmlFor={item?.title}>{item?.title} </label>


                               </div> */}


                            })
                        }
                    </div>
                    <section className='flex justify-around items-center flex-wrap p-2 text-lg gap-3'>
                        {
                            subSectionData?.map(item => {

                                return <div className="relative ">
                                    <input

                                        name='subSectionTitle'
                                        className="peer hidden" type="radio" value={item?.title} id={`${item?.title}`} />
                                    <label onClick={() => {
                                        setSubSectionImages(item?.images)
                                    }}
                                        className='px-6 py-2 hover:shadow-[0_3px#0000FF] hover:text-blue-700 font-medium cursor-pointer border-4 border-transparent peer-checked:shadow-[0_3px#0000FF] ring-indigo-500/80 transition duration-300' htmlFor={item?.title}>{item?.title} </label>


                                </div>


                            })
                        }
                    </section>
                    <section className='flex justify-around gap-4 items-center flex-wrap'>
                        {
                            subSectionImages?.map(item => {
                                return <img src={item?.path} className='w-[200px] h-[200px] cursor-pointer hover:shadow-[0_0_0_1px#ffffff] rounded-xl transition duration-300' />
                            })
                        }
                    </section>
                    {/* <div><img src="/slider1/1.jpg" className='w-[200px] h-[200px] hover:shadow-[0_0_0_1px#ffffff] rounded-xl transition duration-300' /></div> */}
                </div>
            }


            {
                currentIndex === 2 && <div className="flex w-full">
                    <div className="flex flex-col items-center gap-4 w-1/2 relative">
                        <label htmlFor="email" className="text-center text-2xl text-white ">
                            Enter your Email:
                        </label>

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            placeholder="Enter your email"
                            className="w-2/3 text-center bg-[#f1f1f1]  text-[#131313] text-[18px] px-2 rounded-lg  shadow-[0_0_0_1px_#5d5b68] focus:shadow-[0_0_0_1px_#1d2838]"
                        />

                        <div className="text-[#ff1717] text-[16px] leading-3">
                            {/* {errors?.email && errors?.email} */}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-1/2">
                        <label htmlFor="gender" className="text-center text-2xl text-white">
                            What's your gender?
                        </label>
                        <div className="flex gap-2 justify-center">
                            {genderSelections &&
                                genderSelections?.map((item, idx) => (
                                    <div
                                        onClick={() => {
                                            setGender(item?.name);
                                        }}
                                        key={`gender${idx}`}
                                        className={`bg-[#f1f1f1]  text-[#131313] ${userData?.gender === item?.name
                                            ? "!bg-[#355cc9] text-[#f1f1f1]"
                                            : "bg-[#f1f1f1]"
                                            } hover:bg-[#355cc9] hover:text-[#f1f1f1] rounded-lg w-1/3 transition duration-500 text-[18px] font-semibold cursor-pointer flex justify-center gap-2`}
                                    >
                                        <span className="flex flex-col justify-center">
                                            {item?.svg}
                                        </span>
                                        <span>{item?.name}</span>
                                    </div>
                                ))}
                        </div>
                        <div className="text-[#ff1717] text-[16px] leading-3">
                            {/* {errors?.gender && errors?.gender} */}
                        </div>
                    </div>
                </div>
            }

            {
                currentIndex == 3 && <div>Image Upload</div>
            }

            {
                currentIndex == 4 && <PriceCards
                    data={priceCardData}
                    userData={{}}
                    setUserData={() => { }}
                />
            }
            {
                currentIndex == 5 && <div>Order Details</div>
            }
            <div className="flex justify-center gap-2 pt-4">

                <button
                    className={`hover:squeezyBtn px-8 py-3 bg-[#b41f58] hover:bg-[#b41f58a8] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => {
                        setCurrentIndex(prev => {
                            return prev > 1 ? prev - 1 : prev
                        })
                    }}
                >
                    Back
                </button>

                <button
                    className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                    onClick={() => {
                        setCurrentIndex(prev => {
                            return prev < totalPage ? prev + 1 : prev
                        })
                    }}
                >
                    Next
                </button>
            </div>
        </>


    )
}

export default Customize