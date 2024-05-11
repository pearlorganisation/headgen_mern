import React, { useState } from 'react'
import AppSvgs from '../../components/AppSvgs/AppSvgs'

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


    return (
        <div className="text-[#121212] text-3xl h-fit space-y-8 bg-[#f1f1f1] p-10 rounded-2xl">
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
    )
}

export default Customize