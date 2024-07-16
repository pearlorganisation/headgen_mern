import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BlogDetails = () => {
    const {state} = useLocation()

    useEffect(() => {
      console.log(state)
    }, [state])
    

    return (
        <div className='container mx-auto min-h-screen py-28'>
            <div className=' flex flex-col items-center max-w-4xl  mx-auto text-white space-y-4'>
                <img className='rounded-md ' src={state?.item?.banner} alt="" />
                <h1 className='text-3xl max-w-2xl '>{state?.item?.title}</h1>
                <div dangerouslySetInnerHTML={{__html: state?.item?.content}}></div>
            </div>
        </div>
    )
}

export default BlogDetails
