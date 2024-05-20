import React, { useEffect, useRef, useState } from 'react'
import AppSvgs from '../../components/AppSvgs/AppSvgs'
import OrderDetails from '../OrderDetails/OrderDetails'
import PriceCards from '../PriceCards/PriceCards'
import CustomizeTabs from './CustomizeTabs'
import { IoManSharp, IoWoman } from "react-icons/io5";
import UserDetails from '../UserDetails/UserDetails'
import ImageSection from '../ImageSection/ImageSection'

const Customize = ({ userData, setUserData, setErrors, errors, fileErrorMsg, setFileErrorMsg, files, setFiles }) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    // const tabContentRef = useRef(null);


    const customizePriceCardData = [
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

    const customizeData = [
        {
            idx: 0,
            ele: (
                <>
                    <CustomizeTabs
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
                    <ImageSection userData={userData} setUserData={setUserData} files={files} setFiles={setFiles} fileErrorMsg={fileErrorMsg} setFileErrorMsg={setFileErrorMsg} />
                </>
            ),
        },

        {
            idx: 3,
            ele: (
                <>
                    <div>
                        <PriceCards
                            data={customizePriceCardData}
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
                        <OrderDetails
                            userData={userData}
                            files={files}
                        />
                    </div>
                </>
            ),
        },
    ];

    let customizeMaxIndex = 5 - 1;

    const customizeUpdateIndex = (val) => {
        let newIndex = Math.max(currentIndex + val, 0);

        if (newIndex > 1 && val > 0) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(userData?.email) && userData?.email?.length > 0) {
                setErrors({});
                if (customizeMaxIndex === currentIndex && val > 0) {
                    return;
                }
                setCurrentIndex(newIndex);
            } else {
                setErrors({ email: "Incorrect/Missing email" });
                return;
            }
        } else {
            if (customizeMaxIndex === currentIndex && val > 0) {
                return;
            }
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrentIndex(newIndex);
        }
    };






    return (
        <>
            <div
                className="flex flex-col justify-between h-full gap-8"
            // ref={tabContentRef}
            >
                {customizeData &&
                    customizeData?.map((item, idx) => {
                        if (item?.idx === currentIndex) {
                            return (
                                <div
                                    className="h-[90%] w-full"
                                    key={`customizeData${idx}`}
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
                            onClick={() => customizeUpdateIndex(-1)}
                        >
                            Back
                        </button>
                    )}
                    <button
                        className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                        onClick={() => {
                            customizeUpdateIndex(1);
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