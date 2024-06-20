import React, { useState } from 'react'
import service from '../assets/social-media-mark.png'
import { TfiMobile, TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaPlus, FaMinus, FaBook } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { FaImages } from "react-icons/fa";
const ServiceDetail = () => {
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    return (
        <div>
            <div className='my-bg-contact md:h-56 sm:h-56 lg:h-56 flex items-center flex-col justify-center h-40 text-center text-white relative font-sans '>
                <h1 className='text-5xl z-20 font-sans font-bold'>Services</h1>
                <div className="absolute inset-0 bg-[#1A2C79] opacity-80"></div>
            </div>
            <div className='w-[100vw] flex flex-row justify-center  h-auto  font-sans pt-9 pb-8 '>
                <div className='w-[75vw] '>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 gap-6 font-sans'>
                        <div className='lg:col-span-3'>
                            <img src={service} alt="servicebg" />
                            <h1 className='text-[#162171] font-bold text-xl mb-4'>Social Media Marketing</h1>
                            <p className='text-gray-600 leading-loose text-normal'>Social Media Marketing has been a buzzword in the corporate world. It resonates almost at every nook and corner. Except for some innovative marketers, entrepreneurs are oblivious about how to use Social Media professionally and consistently and achieve the desired results they require.

                                Undeniably, there is a huge potentiality for Social Media Marketing to increase sales since there is an obvious direct correlation between digital media and real trisection. Even researches have proven the efficacy of Social Media Marketing for business. According to Hubspot, 92% of marketers in 2014 claimed that social media marketing was important for their business, with 80% indicating their efforts increased traffic to their websites. And according to Social Media Examiner, 97% of marketers are currently participating in social media—but 85% of participants aren't sure what social media tools are the best to use.</p>
                            <div >
                                <h1 className='text-[#162171] font-bold text-xl my-4'>How Can Social Media Transform Your Business?</h1>
                                <div className='flex flex-col justify-start border '>
                                    <div className="bg-white">
                                        <div className="flex items-center justify-between px-6 cursor-pointer font-semibold text-[#707070] text-lg" onClick={() => setExpanded(!expanded)}>
                                            <div className='py-4'>
                                                <h2 className="text-lg font-semibold text-[#707070] flex flex-row justify-center items-center"><CgNotes /><span className='ml-4'>SOCIAL MEDIA PROVIDES YOU VALUABLE CUSTOMER INSIGHTS.</span></h2>
                                            </div>
                                            <div className='ml-4'>
                                                {expanded ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                            </div>
                                        </div>
                                        <hr className='w-full my-1' />
                                        <div className={`transition-max-height ease-in-out duration-500 ${expanded ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                                            <p className="text-[#707070] text-md px-6 py-2">It gives a wealth of information about your customers—who they are, what they like, and how they feel about your brand. An active engagement and social listening, you can gather relevant customer data and use that information to make smarter business strategies and decisions. You can gather information across all your social networks in real time—allowing you to gauge customer sentiment, find the conversations happening around your brand, and run real-time reports.</p>
                                            <hr className='w-full my-1' />
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="flex items-center justify-between px-6 cursor-pointer font-semibold text-[#707070] text-lg" onClick={() => setExpanded2(!expanded2)}>
                                            <div className='py-4'>
                                                <h2 className="text-lg font-semibold text-[#707070] flex flex-row justify-center items-center"><CgNotes /><span className='ml-4'>SOCIAL MEDIA MARKETING INCREASES BRAND AWARENESS AND LOYALTY.</span></h2>
                                            </div>
                                            <div className='ml-4'>
                                                {expanded2 ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                            </div>
                                        </div>
                                        <hr className='w-full my-1' />

                                        <div className={`transition-max-height ease-in-out duration-500 ${expanded2 ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                                            <p className="text-[#707070] text-md px-6 py-2">When you have a presence on social media, you make it easier for your customers to find and connect with you. By bridging this connection with your customers on Social Media, you 're more likely to increase customer retention and brand loyalty and attain potential clients through business referrals.</p>
                                            <hr className='w-full my-1' />
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="flex items-center justify-between px-6 cursor-pointer font-semibold text-[#707070] text-lg" onClick={() => setExpanded3(!expanded3)}>
                                            <div className='py-4'>
                                                <h2 className="text-lg font-semibold text-[#707070] flex flex-row justify-center items-center"><CgNotes /><span className='ml-4'>TARGETED ADS CAN BE RUN WITH REAL-TIME RESULTS.</span></h2>
                                            </div>
                                            <div className='ml-4'>
                                                {expanded3 ? <FaMinus size={14} /> : <FaPlus size={14} />}
                                            </div>
                                        </div>
                                        <hr className='w-full my-1' />
                                        <div className={`transition-max-height ease-in-out duration-1000 ${expanded3 ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                                            <p className="text-[#707070] text-md px-6 py-2">Social ads are an inexpensive way to promote your business and distribute content. They also offer powerful targeting options so that you can reach the right audience. For example, when a Facebook Ad is run, you can target users based on location, demographics, interests, behaviors, and connections. You can track and measure the performance of your social media ads in real time.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-1'>
                            <h1 className='text-[#162171] font-bold text-xl mb-4'>All Services</h1>
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>Social Media Marketing</p>
                            <hr className='border my-2' />
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>Influencer Marketing</p>
                            <hr className='border my-2' />
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>Content Marketing</p>
                            <hr className='border my-2' />
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>SEO Marketing</p>
                            <hr className='border my-2' />
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>Email Marketing</p>
                            <hr className='border my-2' />
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>Digital Marketing</p>
                            <hr className='border-[0.5px] my-2' />
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>Branding and Positioning</p>
                            <hr className='border-[0.5px] my-2' />
                            <p className='text-[#788487] leading-loose text-normal my-2 cursor-pointer hover:text-red-600'>Domain register and Web hosting</p>
                            <hr className='border-[0.5px] my-2' />
                            <h1 className='text-[#162171] font-bold text-xl lg:mt-12 sm:mt-auto'>Need Help?</h1>
                            <p className='text-[#788487] text-normal my-3'>We are available in 24/7 hours for dedicated support</p>
                            <p className='text-[#788487] text-normal flex flex-row justify-start items-center'><CiLocationOn className='mr-1' /><span>Mid-baneshwor, Kathmadnu</span></p>
                            <hr className='border-[0.5px] my-2' />
                            <p className='text-[#788487] text-normal flex flex-row justify-start items-center'><TfiMobile className='mr-1' /><span> 01-4435890</span></p>
                            <hr className='border-[0.5px] my-2' />
                            <p className='text-[#788487] text-normal flex flex-row justify-start items-center'><TfiEmail className='mr-1' /><span> info@subhabihani.com.npm</span></p>
                            <hr className='border-[0.5px] my-2' />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ServiceDetail