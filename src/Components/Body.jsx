import React from 'react'
import '../CSS/all.css'
const Body = () => {
    return (
        <div className='w-[100vw] flex flex-row justify-center items-center  my-bg h-[100vh]'>
            <div className='w-[75vw] flex flex-row items-center'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 '>
                    <div className='flex flex-col items-center '>
                        <div>
                            <h1 className='text-[#00A0E8] font-bold font-sans my-1'>Subha Bihani Digital Media Pvt. Ltd</h1>
                            <h1 className='text-[#182372] font-bold font-sans text-4xl mt-3 mb-1'>Empower Your Business </h1>
                            <h1 className='text-[#182372] font-bold font-sans text-4xl mb-3'>Traffic at The Top</h1>
                            <p className='text-[#7c7c7b] font-sans '>Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.</p>
                            <button className='bg-[#00A0E8] text-white my-4 py-2 px-5 rounded cursor-pointer border border-solid border-[#00A0E8] hover:bg-transparent hover:text-[#00A0E8] '>
                                Get Start Now
                            </button>
                        </div>

                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Body