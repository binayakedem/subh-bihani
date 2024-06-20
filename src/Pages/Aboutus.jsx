import React from 'react'
import About from '../Components/About'

const Aboutus = () => {
    return (
        <div>
            <div className='my-bg-contact md:h-56 h-40 lg:h-56 flex items-center flex-col justify-center  text-center text-white relative font-sans '>
                <h1 className='text-5xl z-20 font-sans font-bold'>About</h1>
                <div className="absolute inset-0 bg-[#1A2C79] opacity-80"></div>
            </div>
            <About />
{/*             
            <div className='w-[100vw] flex flex-row justify-center  h-auto my-bg-service font-sans'>
                <div className='w-[75vw] '>
                    <div className='text-center '>
                        <h1 className='text-[#00A0E8] font-bold font-sans mt-8'>Our Services</h1>
                        <h1 className='text-[#162171] font-sans font-bold text-3xl mt-2 mb-4'>What Can We Do For You</h1>
                        <h1 className="heading w-32 rounded-md h-1 mb-10 "></h1>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Aboutus