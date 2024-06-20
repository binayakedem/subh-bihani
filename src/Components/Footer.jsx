import React from 'react'
import '../CSS/all.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
const Footer = () => {
    return (
        <div>
            <div className='w-[100vw] flex flex-row justify-center  h-auto gradient-bg   text-white font-sans'>
                <div className='w-[75vw]  p-8'>
                    <div className='flex flex-wrap lg:flex-wrap-col md:flex-wrap sm:flex-wrap justify-between lg:gap-10'>
                        <div className='flex flex-col w-80'>
                            <h1 className='font-semibold text-lg mb-3'>Subha Bihani Digital Media Pvt. Ltd</h1>
                            <p className='text-sm '>Subha Bihani Digital Media PVT. LTD is a results-driven digital marketing agency in Nepal focused on connecting brands to people. We are a one-stop solution provider for all your Digital Marketing requirements.</p>
                            <div className='flex flex-row my-4'>
                                <span className='mx-2'><FaFacebookF /></span>
                                <span className='mx-2'><FaTwitter /></span>
                                <span className='mx-2'><FaLinkedinIn /></span>
                                <span className='mx-2'><FaInstagram /></span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-lg mb-3'>Quick Links</h1>
                            <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
                                <li className='cursor-pointer'>About</li>
                                <li className='cursor-pointer'>Our Services</li>
                                <li className='cursor-pointer'>Portfolio</li>
                                <li className='cursor-pointer'>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg mb-3'>Legal</h1>
                            <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
                                <li className='cursor-pointer'>Legal Information</li>
                                <li className='cursor-pointer'>Privacy Policy</li>
                                <li className='cursor-pointer'>Report</li>
                                <li className='cursor-pointer'>Terms of Service</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg mb-3'>GET IN TOUCH</h1>
                            <ul className='flex flex-col gap-2 text-sm'>
                                <li className='flex flex-row'> <span><FaLocationDot /></span><span className='ml-2'>Mid-baneshwor, Kathmadnu</span></li>
                                <li className='flex flex-row'> <span><MdEmail /></span><span className='ml-2'>info@subhabihani.com.np</span></li>
                                <li className='flex flex-row'><span><FaPhoneAlt /></span><span className='ml-2'>01-4435890</span></li>
                                <div className='bg-[#00a0e8] rounded-full md:h-10 h-8 lg:h-10 lg:w-60'>
                                    <input type="text" className='rounded-full md:h-10 h-8 lg:h-10 rounded-r-none mr-4' placeholder='Enter Your Email' /><button><IoIosSend color='white' size={20} /></button>
                                </div>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer