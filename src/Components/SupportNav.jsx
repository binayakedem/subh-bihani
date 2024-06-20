import React from 'react'
import { MdHeadset } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const SupportNav = () => {
    return (
        <div className='bg-[#162171] flex flex-row items-center justify-center text-white w-[100vw] font-sans text-sm font-normal pt-[1px] pb-[0.5px]'>
            <div className=' flex flex-row justify-between  items-center w-[74vw] py-[10px]'>
                <div className='md:hidden hidden lg:flex lg:flex-row '>
                    <p className='flex flex-row font-sans '><MdHeadset color='white' className='mt-1 mr-1' size={16} /><span>24x7 Technical Support</span></p>
                    <p className='flex flex-row font-sans ml-4'><FaPhone color='white' className="flex flex-row items-center justify-center mt-1 mr-1" size={13} /><span> 01-4435890</span></p>

                </div>
                <div className='flex flex-row  lg:flex lg:flex-row'>
                    <span className='mx-2'><FaFacebookF /></span>
                    <span className='mx-2'><FaTwitter /></span>
                    <span className='mx-2'><FaLinkedinIn /></span>
                    <span className='mx-2'><FaInstagram /></span>
                </div>
            </div>

        </div>
    )
}

export default SupportNav
