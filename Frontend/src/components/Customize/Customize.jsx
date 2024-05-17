import React, { useEffect, useRef, useState } from 'react'
import AppSvgs from '../../components/AppSvgs/AppSvgs'
import OrderDetails from '../OrderDetails/OrderDetails'
import PriceCards from '../PriceCards/PriceCards'
import CustomizeTabs from './CustomizeTabs'
import { useStateManager } from 'react-select'
import IndividualForm from '../IndividualForm/IndividualForm'

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
    const [userData, setUserData] = useState({ email: "" });
    const [errors, setErrors] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const tabContentRef = useRef(null);
    const fieldsRef = useRef();

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

    const indivdualData = [
        {
            idx: 0,
            ele: (
                <>
                    <IndividualForm
                        userData={userData}
                        setUserData={setUserData}
                        errors={errors}
                    />
                </>
            ),
        },

        {
            idx: 1,
            ele: (
                <>
                    <CustomizeTabs />
                </>
            ),
        },

        {
            idx: 2,
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
            idx: 3,
            ele: (
                <>
                    <div>
                        Order Details
                        {/* <OrderDetails
                            userData={userData}
                            files={files}
                        /> */}
                    </div>
                </>
            ),
        },
    ];

    let maxIndex = 4 - 1;

    const updateIndex = (val) => {
        let newIndex = Math.max(currentIndex + val, 0);

        if (newIndex > 0 && val > 0) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(userData?.email) && userData?.email?.length > 0) {
                setErrors({});
                if (maxIndex === currentIndex && val > 0) {
                    return;
                }
                setCurrentIndex(newIndex);
            } else {
                setErrors({ email: "Incorrect/Missing email" });
                return;
            }
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
            localStorage.clear()
        }
    }, [])


    return (
        <>



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
                    <button
                        className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                        onClick={() => {
                            updateIndex(1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>

        </>


    )
}

export default Customize