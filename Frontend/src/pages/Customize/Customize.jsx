import React, { useState } from 'react'

const Customize = () => {
    const temp = [
        {
            section: 'Formal',
            icon: '',
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
            icon: '',
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


    return (
        <div className="flex flex-col justify-center items-center gap-10 px-10 pt-40 2xl:px-[80px]">
            <div className="shadow-[0_0_0_1px_#babcbf80] grid place-items-center rounded-xl px-20 2xl:px-24 py-12 w-full 2xl:w-[1200px] h-[700px] bg-gradient-to-br from-[#1d2838] to-[#1d283880]">
                <div className="text-[#121212] text-3xl h-fit space-y-3 bg-[#f1f1f1] p-10 rounded-2xl">
                    <div className='text-center bg-gradient-to-r from-[#02AFDC] to-[#2563EB]  text-transparent bg-clip-text'>Customize</div>
                    <div className='w-full grid grid-cols-2'>
                        {
                            temp?.map(item => {
                                return <button onClick={() => {
                                    setSubSectionData(item?.subSection)
                                }} className='hover:bg-white/10 px-6 py-3'>
                                    {item?.section}
                                </button>
                            })
                        }
                    </div>
                    <section className='flex justify-around items-center flex-wrap p-2 text-lg'>
                        {
                            subSectionData?.map(item => {
                                return <button
                                    onClick={() => {
                                        setSubSectionImages(item?.images)
                                    }}
                                    className='px-6 py-2 hover:bg-white/10'>{item?.title}</button>
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
            </div>
        </div>
    )
}

export default Customize
