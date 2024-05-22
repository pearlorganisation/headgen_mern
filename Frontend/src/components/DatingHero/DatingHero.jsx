import React from 'react'

const DatingHero = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col justify-center gap-6 w-1/2'>
            <div className='text-[55px] 2xl:text-[72px] text-[#F1F1F1]'>
            <span className='font-semibold bg-gradient-to-r from-[#e73e71] to-[#af1040]  inline-block text-transparent bg-clip-text'>Double</span> your matches with our AI dating photos
            </div>
            <div className='text-[14px] 2xl:text-[16px] text-[#F1F1F1]'>
            Use our AI headshot generator built by AI researchers to improve your dating profile in just minutes. Look your best to attract the best.
            </div>
            <div>
            <Link to="/dating/upload" className="hover:squeezyBtn bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57] hover:to-[#861436] text-[#F1F1F1] rounded-lg w-1/2 h-[58px] hover:shadow-[0_0_0_2px_#babcbf80] transition duration-500 px-2">
              Get your photos for $29
            </Link>
            </div>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-end'>
        <img src="https://lh3.googleusercontent.com/d/11mgX3mlp1kIqIc9ehghQ8DRzD1GVBwvv=s800?authuser=0" className='h-full' alt="" />
      </div>
    </div>
  )
}

export default DatingHero
