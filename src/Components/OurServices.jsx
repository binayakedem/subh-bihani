import React from 'react'
import '../CSS/all.css'
import blogger from '../assets/blogger.png'
import content from '../assets/content.png'
import digital from '../assets/digital.png'
import email from '../assets/email.png'
import seo from '../assets/seo.png'
import social from '../assets/social.png'
const OurServices = () => {
    return (
        <div className='w-[100vw] flex flex-row justify-center  h-auto my-bg-service font-sans'>
            <div className='w-[75vw] '>
                <div className='text-center '>
                    <h1 className='text-[#00A0E8] font-bold font-sans mt-8'>Our Services</h1>
                    <h1 className='text-[#162171] font-sans font-bold text-3xl mt-2 mb-4'>What Can We Do For You</h1>
                    <h1 className="heading w-32 rounded-md h-1 mb-10 "></h1>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    <div className=' flex flex-row px-8 py-4 hover:bg-white cursor-pointer hover:shadow-md hover:shadow-gray-800 transition ease-in-out duration-300 '>
                        <div><img className='bg-[#FB9AC8] p-4  rounded-2xl shadow-lg h-16 w-28' src={social} alt="social" /></div>
                        <div className='ml-4'>
                            <h1 className='text-[#162171] font-semibold text-xl'>Social Media Marketing</h1>
                            <p className='text-[#3A505F]'>Social media marketing is the promotion of a product</p>
                        </div>

                    </div>
                    <div className='flex flex-row px-8 py-4 hover:bg-white cursor-pointer hover:shadow-md hover:shadow-gray-800 transition ease-in-out duration-300'>
                        <div><img className='bg-[#E94794] p-4  rounded-2xl shadow-lg h-16 w-32' src={blogger} alt="social" /></div>
                        <div className='ml-4'>
                            <h1 className='text-[#162171] font-semibold text-xl'>Influencer Marketing</h1>
                            <p className='text-[#3A505F]'>Influencer Marketing is about choosing the right influencer for</p>
                        </div>

                    </div>
                    <div className='flex flex-row px-8 py-4 hover:bg-white cursor-pointer hover:shadow-md hover:shadow-gray-800 transition ease-in-out duration-300'>
                        <div><img className='bg-[#BAC5FD] p-4  rounded-2xl shadow-lg h-16 w-24' src={content} alt="social" /></div>
                        <div className='ml-4'>
                            <h1 className='text-[#162171] font-semibold text-xl'>Content Marketing</h1>
                            <p className='text-[#3A505F]'>In the digital world content is considered as a</p>
                        </div>

                    </div>
                    <div className='flex flex-row px-8 py-4 hover:bg-white cursor-pointer hover:shadow-md hover:shadow-gray-800 transition ease-in-out duration-300'>
                        <div><img className='bg-[#FF9322] p-4  rounded-2xl shadow-lg h-16 w-24' src={seo} alt="social" /></div>
                        <div className='ml-4'>
                            <h1 className='text-[#162171] font-semibold text-xl'>SEO</h1>
                            <p className='text-[#3A505F]'>SEO is the art of using various tools, techniques,</p>
                        </div>

                    </div>
                    <div className='flex flex-row px-8 py-4 hover:bg-white cursor-pointer hover:shadow-md hover:shadow-gray-800 transition ease-in-out duration-300'>
                        <div><img className='bg-[#73B4FE] p-4  rounded-2xl shadow-lg h-16 w-28' src={email} alt="social" /></div>
                        <div className='ml-4'>
                            <h1 className='text-[#162171] font-semibold text-xl'>Email Marketing</h1>
                            <p className='text-[#3A505F]'>Email marketing is a very effective strategy to increase</p>
                        </div>

                    </div>
                    <div className='flex flex-row px-8 py-4 hover:bg-white cursor-pointer hover:shadow-md hover:shadow-gray-800 transition ease-in-out duration-300'>
                        <div><img className='bg-[#7778FA] p-4  rounded-2xl shadow-lg h-16 w-24' src={social} alt="social" /></div>
                        <div className='ml-4'>
                            <h1 className='text-[#162171] font-semibold text-xl'>
                                Digital Marketing</h1>
                            <p className='text-[#3A505F]'>In this field of digital marketing, we manage</p>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center items-center my-10'>
                    <hr className='w-[75vw] p-[2px] bg-[#162171] border absolute' />

                    <button className=' bg-white relative  px-[30px] py-[12px] border-dark-900 border-solid border-width-[3px]   text-[#00A0E8] rounded hover:bg-blue-600 hover:text-white'> Learn More</button>

                </div>

            </div>
        </div>

    )
}

export default OurServices