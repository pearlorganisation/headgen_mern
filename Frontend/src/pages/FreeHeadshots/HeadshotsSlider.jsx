import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HeadshotsSlider = () => {
    const headshots = [
        {
            name: "Corporate Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=15m130osnWyGu65RwKQ17HWpfIuKAMra6&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1cNF1y4bnCERR4mFDYI60POS3w-a4rXy9&sz=s300'
        },
        {
            name: "Doctor Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=1gXGt0a95L5qIZGzTaHaIUcrd2ppL32lv&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1UJpOzDSR_A5w6hA4D6zjfrnKMExF9vbC&sz=s300'
        },
        {
            name: "Lawyer Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=16p1K3X3OQMCpqW4nl8ylAOlTVsCjjPPS&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1bncFGpxo0FTHu8tUHgLiB3D_jmIMJE0Y&sz=s300'
        },
        {
            name: "Sales Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=13SRDkSNJKlIj9qWD5sGKPQSGAyXSNJJW&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1-2l3yZmBK085Zbirg_D8OiHjVD3-r7HM&sz=s300'
        },
        {
            name: "Students Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=1A4yCODABo4qCZn7cRPlEdTUuSy5w-gLl&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1PRgcUxiH3r2NMbqDePx2eF9V7NVHX7nY&sz=s300'
        },
        {
            name: "Teacher Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=1cGdkBJVVXcCwxo3CnErPumzgdwccwvLo&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1lvE4qi0vK9gqHeEZJ6JFn96D92NEPfOM&sz=s300'
        },
    ];
    return (
        <div className=''>

            <>
                <Swiper
                    spaceBetween={0}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        headshots?.map(item => {
                            return <SwiperSlide className='!w-full'>
                                <div className='flex justify-center gap-2'>

                                    <img src={`${item?.headshotInfo?.imgPath}`} className='w-full md:w-[60%] rounded-lg' alt="" />

                                    <div className='hidden md:flex flex-col justify-center'>
                                        <span className='w-full text-center text-2xl'>What you'll get</span>
                                    <img className='rounded-lg w-[300px] h-[300px] ' src={item?.imgPreview} alt="" />
                                    </div>

                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </>

        </div>
    )
}

export default HeadshotsSlider