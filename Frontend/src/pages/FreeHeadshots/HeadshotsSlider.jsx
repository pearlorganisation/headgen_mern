import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeadshotsSlider = () => {
    const headshots = [
        {
            name: "Corporate Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=15m130osnWyGu65RwKQ17HWpfIuKAMra6&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1cNF1y4bnCERR4mFDYI60POS3w-a4rXy9&sz=s590'
        },
        {
            name: "Doctor Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=1gXGt0a95L5qIZGzTaHaIUcrd2ppL32lv&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1UJpOzDSR_A5w6hA4D6zjfrnKMExF9vbC&sz=s590'
        },
        {
            name: "Lawyer Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=16p1K3X3OQMCpqW4nl8ylAOlTVsCjjPPS&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1bncFGpxo0FTHu8tUHgLiB3D_jmIMJE0Y&sz=s590'
        },
        {
            name: "Sales Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=13SRDkSNJKlIj9qWD5sGKPQSGAyXSNJJW&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1-2l3yZmBK085Zbirg_D8OiHjVD3-r7HM&sz=s590'
        },
        {
            name: "Students Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=1A4yCODABo4qCZn7cRPlEdTUuSy5w-gLl&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1PRgcUxiH3r2NMbqDePx2eF9V7NVHX7nY&sz=s590'
        },
        {
            name: "Teacher Headshots",
            headshotInfo: {
                imgPath: "https://drive.google.com/thumbnail?id=1cGdkBJVVXcCwxo3CnErPumzgdwccwvLo&sz=s800",
            },
            imgPreview: 'https://drive.google.com/thumbnail?id=1lvE4qi0vK9gqHeEZJ6JFn96D92NEPfOM&sz=s590'
        },
    ];
    return (
        <div className=' max-w-7xl mx-auto'>

            {
                headshots?.map(item => {
                    return <div className='h-[30rem] flex justify-between gap-8 '>
                        <div className=' grid place-items-center  w-full '>
                            <img src={`${item?.headshotInfo?.imgPath}`} className='w-full h-[25rem] rounded-lg' alt="" />
                        </div>
                        <div className=' grid place-items-center'>
                            <img className='rounded-lg' src={item?.imgPreview} alt="" />
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default HeadshotsSlider