import React, { useEffect, useState } from 'react'
import PromptTab from './PromptTab';
import UserDetails from '../UserDetails/UserDetails';
import ImageSection from '../ImageSection/ImageSection';
import PriceCards from '../PriceCards/PriceCards';
import OrderDetails from '../OrderDetails/OrderDetails';

const Prompt = ({ userData, setUserData, setErrors, errors, fileErrorMsg, setFileErrorMsg, files, setFiles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const tabContentRef = useRef(null);


    const promptPriceCardData = [
        {
            title: "STARTER PACK",
            originalPrice: "$250",
            price: "$200",
            features: ["Basic Quality", "2 Hour Turn Around Time"],
            packName: "Starter Pack",
            tag: "",
        },


    ];

    const promptData = [
        {
            idx: 0,
            ele: (
                <>
                    <PromptTab
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
                            data={promptPriceCardData}
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

    let promptMaxIndex = 5 - 1;

    const promptUpdateIndex = (val) => {
        let newIndex = Math.max(currentIndex + val, 0);

        if (newIndex > 1 && val > 0) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(userData?.email) && userData?.email?.length > 0) {
                setErrors({});
                if (promptMaxIndex === currentIndex && val > 0) {
                    return;
                }
                setCurrentIndex(newIndex);
            } else {
                setErrors({ email: "Incorrect/Missing email" });
                return;
            }
        } else {
            if (promptMaxIndex === currentIndex && val > 0) {
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
    return (
        <>
            <div
                className="flex flex-col justify-between h-full gap-8"
            // ref={tabContentRef}
            >
                {promptData &&
                    promptData?.map((item, idx) => {
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
                            onClick={() => promptUpdateIndex(-1)}
                        >
                            Back
                        </button>
                    )}
                    <button
                        className={`hover:squeezyBtn px-8 py-3 bg-[#1f58ad] hover:bg-[#1f58ad94] hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#f1f1f1] text-[18px] font-medium transition duration-[0.4s]`}
                        onClick={() => {
                            promptUpdateIndex(1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>

        </>
    )
}

export default Prompt