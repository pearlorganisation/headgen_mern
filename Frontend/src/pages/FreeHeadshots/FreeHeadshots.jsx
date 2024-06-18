import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import HeadshotsSlider from './HeadshotsSlider';
import DatingHero from '../../components/Dating/DatingHero/DatingHero';
import { Link } from 'react-router-dom';

const FreeHeadshots = () => {
    const [isAnimated, setIsAnimated] = useState(false);


    const logoData = [
        {
            name: "walmart logo",
            imgPath:
                "https://drive.google.com/thumbnail?id=1up3Y8G7BYQt4vFDeXYicUUbrnMDNz0QK&sz=s600",
        },
        {
            name: "microsoft logo",
            imgPath:
                "https://drive.google.com/thumbnail?id=10vAAtNBCVa35oLUmY6NZKDwrq2kl8w6V&sz=s600",
        },
        {
            name: "google logo",
            imgPath:
                "https://drive.google.com/thumbnail?id=1T5_P_dHHDNxPdlN_oCp8lxcxAM7BXYEp&sz=s600",
        },
        {
            name: "airbnb logo",
            imgPath:
                "https://drive.google.com/thumbnail?id=1m45hPUM6sDgtDdC1hG89FKgd7MAmAwsi&sz=s600",
        },
        {
            name: "amazon logo",
            imgPath:
                "https://drive.google.com/thumbnail?id=1bupr8brSqprqrt5xDygIUbcTkxkc-uX0&sz=s600",
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
        <div className=' space-y-4 text-white py-36 md:px-10  xl:px-[160px] 2xl:px-[250px]'>
            <div className='grid md:grid-cols-2 gap-12 md:gap-0 place-items-center space-y-4 '>
                <div className=' space-y-6'>
                    <p className='text-4xl md:text-4xl lg:text-5xl  2xl:text-7xl text-center md:text-left font-semibold'>FREE AI HEADSHOT
                        GENERATOR</p>
                    <div className='space-y-2'>
                        {
                            [`No Expensive Photoshoot`, `Upload Selfie`, `Get free AI Headshots `].map(item => {
                                return <div className='flex text-lg justify-start items-center gap-2'><FaCheck size={22} className='bg-[#204DC7] rounded-full p-1' />{item}</div>
                            })
                        }
                    </div>
                    <Link to="/freeheadshotupload" className='w-1/2 px-2 h-[40px] md:h-[58px] hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500'>Upload Photos</Link>
                </div>
                <div className=' w-full grid place-items-end  '>
                    <div className='grid grid-cols-2  w-fit gap-4'>
                        {
                            [
                                { path: "https://drive.google.com/thumbnail?id=1RLSZGeOJRclpVCS7eg5uJPBDAIxvQxy5&sz=s250" },
                                { path: "https://drive.google.com/thumbnail?id=13g3gmT-4jZwvjCaVELNXzftxrLF_ZLiF&sz=s250" },
                                { path: "https://drive.google.com/thumbnail?id=1c0UurxRLv1yM92t-iiGG-26MsQaPyGKe&sz=s250" },
                                { path: "https://drive.google.com/thumbnail?id=1GmKauZa5soyNyqoXEZ5ukREj7cfpZgCa&sz=s250" },
                            ].map(item => {
                                return <img className='rounded-lg' src={item.path} alt="" />
                            })
                        }
                    </div>
                </div>
                {/* trusted by */}

                <div className="flex col-span-2 flex-col md:flex-row justify-center gap-6 ">
                    <div
                        className={`flex flex-col justify-center text-center font-bold text-[20px] bg-gradient-to-r from-[#02AFDC] to-[#2563EB] text-transparent bg-clip-text ${isAnimated ? "animatedReveal" : "invisible"
                            }`}
                    >
                        Trusted By
                    </div>
                    <div
                        className={`flex flex-row ${isAnimated ? "animatedReveal" : "invisible"
                            }`}
                    >
                        {logoData?.map((item, idx) => (
                            <div
                                key={`logo${idx}`}
                                className="w-[150px] flex flex-col justify-center"
                            >
                                <img
                                    src={item?.imgPath}
                                    alt={item?.name}
                                    className="w-auto h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>



            </div>



            {/* coupon code */}

            <div class="flex w-full items-center justify-between rounded-lg border-2 border-blue-600 bg-black py-8 px-12 font-bold text-white">
                <span class="mr-4 text-3xl 2xl:text-4xl">COUPON: HDGEN10 FOR 10% OFF</span>
                <Link to="/freeheadshotupload" className='w-1/3 px-2 h-[40px] md:h-[58px] hover:squeezyBtn flex flex-col justify-center items-center bg-[#224cc2] shadow-md hover:bg-[#1d2838] text-[#F1F1F1] rounded-lg  hover:shadow-[0_0_0_2px_#224cc2] transition duration-500'>Get Headshots</Link>
            </div>

            {/* Free AI Headshots */}

            <div className="flex items-center  text-white p-6 rounded-lg shadow-lg">
                <img src="https://drive.google.com/thumbnail?id=1sSZgnSOQBeWxqDVg0ClcFwKYDiSBXL-R&sz=s300" alt="Headshot" class=" rounded-lg  mr-6" />
                <div>
                    <h1 className="text-5xl font-bold mb-2">Free AI Headshots</h1>
                    <p className="text-xl">Try our free AI headshot generator!<br />
                        Upload a selfie, and we'll email you a low-quality Free AI headshot!<br />
                        For high-quality AI headshots, use our corporate and dating AI headshot generator.</p>
                </div>
            </div>

            {/* Headshots slider */}
            <HeadshotsSlider />

            {/* dating hero section */}
            <div className="flex justify-center py-20 ">
                <DatingHero />
            </div>

        </div>
    )
}

export default FreeHeadshots