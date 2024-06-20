import React from 'react'
import OurProject from '../Components/OurProject'

const Portfolio = () => {
    return (
        <div className='mb-9'>
            <div className='my-bg-contact md:h-56 sm:h-56 lg:h-56 flex items-center flex-col justify-center h-40 text-center text-white relative font-sans '>
                <h1 className='text-5xl z-20 font-sans font-bold'>Portfolio</h1>
                <div className="absolute inset-0 bg-[#1A2C79] opacity-80"></div>
            </div>
            <OurProject />
        </div>
    )
}

export default Portfolio