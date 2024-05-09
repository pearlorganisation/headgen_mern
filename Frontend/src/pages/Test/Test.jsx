import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { PiCurrencyDollarBold } from "react-icons/pi";
import './styles.css'

const Test = () => {
    const priceData = [
        {
            discount: 'Small Business',
            price: '35',
            users: 0
        },
        {
            discount: '10% OFF',
            price: '32',
            users: 0,
        },
        {
            discount: '15% OFF',
            price: '30',
            users: 0,
        },
        {
            discount: '25% OFF',
            price: '32',
            users: 0,
        },
        {
            discount: 'Enterprise',
            title: 'Contact Sales',
            desc: 'Looking for a custom plan for your team? We’ll create the appropriate package for your team',
        }
    ]

    const includes = [
        `Dedicated account manager`,
        `Custom Branded Headshots (Coming Soon)`,
        `View, favorite, and download team member headshots`,
        `Variety of outfits, backgrounds, and styles`,
        `High-resolution`,
        `Easy to use admin dashboard`,
        `30 minute turnaround time`,
        `Priority Support`
    ]

    const [data, setData] = useState(priceData[0])
    const handleData = (e) => {
        const val = parseInt(e.target.value, 10);
        console.log(typeof val)
        if (val < 10) {
            setData(priceData[0])
        } else if (val < 21) {
            setData(priceData[1])
        } else if (val < 41) {
            setData(priceData[2])
        } else if (val < 51) {
            setData(priceData[3])
        }
        else if (val <= 61) {
            setData(priceData[4])
        }

        console.log(val)
        setData(prev => {
            return { ...prev, users: val }
        })
    }
    return (
        <div className='min-h-screen pt-32 flex justify-center items-center '>

            <div className='max-w-5xl min-h-[30rem]  w-full grid md:grid-cols-2 gap-3 shadow-[0_0_0_1px#f1f1f1] rounded-2xl text-white'>
                <div className='flex flex-col justify-between p-6'>
                    <div className='space-y-6'>


                        <div className='bg-slate-50/10 w-fit px-4 py-2 rounded-md'>
                            <span className='bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text font-bold text-lg'>{data?.discount}</span>
                        </div>
                        {!data?.price ?
                            <>
                                <div className='text-blue-500 text-5xl font-bold flex justify-start '>Contact Sales</div>
                                <p>Looking for a custom plan for your team? We’ll create the appropriate package for your team</p>
                            </>
                            : <>

                                <div className='flex justify-start items-end'>
                                    <div className='text-blue-500 text-7xl font-bold flex justify-start'> <PiCurrencyDollarBold className=' -translate-x-3' />{data?.price} </div> <span className='pb-3 pl-1'>/ Team Members</span>
                                </div>
                                <div>
                                    <div className='flex justify-start gap-1 items-center font-bold'>Total Price: <span className='flex justify-start gap-1 items-center'><PiCurrencyDollarBold className='' />35 </span>
                                        <span className='flex justify-start items-center line-through text-gray-500'>$35</span>   </div>
                                </div>
                            </>
                        }

                        <div className='space-y-6'>

                            <label for="default-range" class="  text-lg font-medium ">USERS <span>{data?.users}</span></label>
                            <input onChange={handleData} id="default-range" value={data?.users} min={1} max={61} type="range" class="PB-range-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                        </div>

                    </div>
                    <button className='font-medium bg-gradient-to-r from-[#02AFDC] to-[#2563EB] py-3 rounded-lg' type="button">Get Started</button>
                </div>
                <div className='p-6'>
                    <div className='font-medium'>INCLUDES:</div>
                    <div className='list-inside'>
                        {
                            includes?.map(item => {
                                return <div className='flex justify-start items-center gap-3  py-4 '><FaCircleCheck className='text-blue-500' /> {item}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test