import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { PiCurrencyDollarBold } from "react-icons/pi";
import './styles.css'
import Select from 'react-select'

const Test = () => {
    const priceData = [
        {
            discount: 'Small Business',
            price: '35',
            totalPrice: '35',
            users: 0
        },
        {
            discount: '10% OFF',
            price: '32',
            totalPrice: '32',
            users: 0,
        },
        {
            discount: '15% OFF',
            price: '30',
            totalPrice: '30',
            users: 0,
        },
        {
            discount: '25% OFF',
            price: '26',
            totalPrice: '26',
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
    const [form, setForm] = useState(false)
    const handleData = (e) => {
        const val = parseInt(e.target.value, 10);
        console.log(typeof val)
        if (val < 10) {
            setData(prev => {
                const temp = priceData[0]

                return {
                    ...temp,
                    totalPrice: val * temp.price
                }
            })
        } else if (val < 21) {
            setData(prev => {
                const temp = priceData[1]

                return {
                    ...temp,
                    totalPrice: val * temp.price
                }
            })
        } else if (val < 41) {
            setData(prev => {
                const temp = priceData[2]

                return {
                    ...temp,
                    totalPrice: val * temp.price
                }
            })
        } else if (val < 51) {
            setData(prev => {
                const temp = priceData[3]

                return {
                    ...temp,
                    totalPrice: val * temp.price
                }
            })
        }
        else if (val <= 61) {
            setData(prev => {
                const temp = priceData[4]

                return {
                    ...temp,
                    totalPrice: val * temp.price
                }
            })
        }

        console.log(val)
        setData(prev => {
            return { ...prev, users: val }
        })
    }

    //<---------------form ---------------------->//
    const teamSize = [
        { value: '1-10', label: '1-10' },
        { value: '11-50', label: '11-50' },
        { value: '51-250', label: '51-250' },
        { value: '251-500', label: '251-500' },
        { value: '500+', label: '500+' }
    ]
    const yourRoles = [
        { value: 'Customer Support', label: 'Customer Support' },
        { value: 'Designer', label: 'Designer' },
        { value: 'Developer', label: 'Developer' },
        { value: 'Executive', label: 'Executive' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Hr', label: 'Hr' }
    ]
    const useCase = [
        { value: 'Branded Headshot', label: 'Branded Headshot' },
        { value: 'Bulk Purchase', label: 'Bulk Purchase' },
        { value: 'Company Websites', label: 'Company Websites' },
        { value: 'Confrence And Events', label: 'Confrence And Events' },
        { value: 'Corporate Badges', label: 'Corporate Badges' },
        { value: 'Corporate Gift Or Benefit', label: 'Corporate Gift Or Benefit' }
    ]
    return (
        <div className='!text-base flex justify-center items-center '>

            {
                form ? <div className='shadow-[0_0_0_1px#f1f1f1 rounded-2xl text-white p-6 max-w-3xl w-full'>
                    <div class="flex flex-col gap-2 pb-2">
                        <div class="bg-gradient-to-r from-[#02AFDC] to-[#2563EB] inline-block text-transparent bg-clip-text text-4xl font-bold tracking-tight">Get in touch</div>

                    </div>
                    <form className='space-y-3'>
                        <div className="w-full">
                            <div className="mb-2 ">Team or Company Name</div>
                            <input className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined" placeholder="Acme Inc." type="text" name="companyName" />
                        </div>
                        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3'>
                            <div className="w-full text-black">
                                <div className="mb-2 text-white">Team Size</div>
                                <Select options={teamSize}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            padding: '0.08rem 0',


                                        }),
                                    }}
                                />
                            </div>
                            <div className="w-full text-black">
                                <div className="mb-2 text-white">Your Role</div>
                                <Select options={yourRoles}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            padding: '0.08rem 0',


                                        }),
                                    }}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3'>
                            <div className="w-full">
                                <div className="mb-2 ">First Name</div>
                                <input className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined" placeholder="Acme Inc." type="text" name="companyName" />
                            </div>
                            <div className="w-full">
                                <div className="mb-2 ">Last Name</div>
                                <input className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined" placeholder="Acme Inc." type="text" name="companyName" />
                            </div>
                        </div>
                        <div className="w-full text-black">
                            <div className="mb-2 text-white">Use Case</div>
                            <Select options={useCase}
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        padding: '0.08rem 0',


                                    }),
                                }}
                            />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 ">Contact Email</div>
                            <input className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined" placeholder="Acme Inc." type="text" name="companyName" />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 ">Website (Optional)</div>
                            <input className="w-full !text-black rounded-md border border-solid px-4 py-2 text-base leading-[140%]  outline-none  focus:outline-none focus:ring-[2px] focus:ring-blue-600 focus:hover:border-blue-500 active:outline undefined" placeholder="Acme Inc." type="text" name="companyName" />
                        </div>
                        <div>
                            <button type='button' className='py-3 bg-gradient-to-r mt-2 active:scale-[0.98] transition-all from-[#02AFDC] to-[#2563EB] w-full rounded-lg'>Submit</button>
                        </div>


                    </form>

                </div> : <div className='max-w-5xl min-h-[30rem]  w-full grid md:grid-cols-2 gap-3 shadow-[0_0_0_1px#f1f1f1 rounded-2xl text-white'>
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

                                    <div className='flex justify-start items-end -translate-x-3'>
                                        <div className='text-blue-500 text-7xl font-bold flex justify-start'> <PiCurrencyDollarBold className=' ' />{data?.price} </div> <span className='pb-3 pl-1'>/ Team Members</span>
                                    </div>
                                    <div>
                                        <div className='flex justify-start gap-1 items-center font-bold'>Total Price: <span className='flex justify-start gap-1 items-center'><PiCurrencyDollarBold className='' />{data?.totalPrice} </span>
                                            <span className='flex justify-start items-center line-through text-gray-500'>${data?.totalPrice}</span>   </div>
                                    </div>
                                </>
                            }

                            <div className='space-y-6'>

                                <label for="default-range" class="  text-lg font-medium ">USERS <span>{data?.users}</span></label>
                                <input onChange={handleData} id="default-range" value={data?.users} min={1} max={61} type="range" class="PB-range-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                            </div>

                        </div>
                        <button onClick={() => { setForm(true) }} className='font-medium bg-gradient-to-r from-[#02AFDC] to-[#2563EB] py-3 rounded-lg' type="button">Get Started</button>
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
            }
        </div>
    )
}

export default Test