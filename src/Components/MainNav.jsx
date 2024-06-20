import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
const MainNav = () => {
    const [show, setShow] = useState(true)
    const location = useLocation();
    console.log(show)
    return (
        <div className=' sticky top-0 bg-[#FFFFFF] flex flex-row items-center justify-center text-[#162171]  w-[100vw] font-sans shadow-md shadow-gray-600 pt-[20px] pb-[19px] z-50'>
            <div className=' lg:w-[74vw] md:w-[74vw] lg:py-[4.5px] w-[100vw] '>
                <div className='lg:flex lg:flex-row lg:justify-between lg:items-center px-4'>

                    <div className=' flex flex-row justify-between md:flex-row md:justify-between items-center'>
                        <p className='font-sans  text-lg font-semibold hover:text-[#37B5ED] cursor-pointer '>Subha Bihani Digital Media Pvt. Ltd</p>
                        <IoMdMenu className='lg:hidden' onClick={() => setShow(!show)} />
                    </div>

                    {
                        show ?
                            <div className={` flex flex-col lg:flex-row  md:flex-col md:justify-start md:items-start`}>
                                <span className={`md:py-1 py-[10px] px-[12px] font-sans  text-normal font-bold hover:text-[#37B5ED] cursor-pointer ${location.pathname === '/' ? 'text-[#00a0e8]' : ''}`}><Link to="/">Home</Link></span>
                                <span className={`md:py-1 py-[10px] px-[12px] font-sans  text-normal font-bold hover:text-[#37B5ED] cursor-pointer ${location.pathname === '/about' ? 'text-[#00a0e8]' : ''}`}><Link to="/about">About Us</Link></span>
                                <span className={`md:py-1 py-[10px] px-[12px] font-sans  text-normal font-bold hover:text-[#37B5ED] cursor-pointer ${location.pathname === '/testimonials' ? 'text-[#00a0e8]' : ''}`}><Link to="/testimonials">Testimonials</Link></span>
                                <span className={`md:py-1 py-[10px] px-[12px] font-sans  text-normal font-bold hover:text-[#37B5ED] cursor-pointer ${location.pathname === '/clients' ? 'text-[#00a0e8]' : ''}`}><Link to="/clients">Clients</Link></span>
                                <span className={`md:py-1 py-[10px] px-[12px] font-sans  text-normal font-bold hover:text-[#37B5ED] cursor-pointer ${location.pathname === '/portfolio' ? 'text-[#00a0e8]' : ''}`}><Link to="/portfolio">Portfolio</Link></span>
                                <span className={`md:py-1 py-[10px] px-[12px] font-sans  text-normal font-bold hover:text-[#37B5ED] cursor-pointer ${location.pathname === '/service' ? 'text-[#00a0e8]' : ''}`}><Link to="/service">Services</Link></span>
                                <span className={`md:py-1 py-[10px] px-[12px] font-sans  text-normal font-bold hover:text-[#37B5ED] cursor-pointer ${location.pathname === '/contact' ? 'text-[#00a0e8]' : ''}`}><Link to="/contact">Contact Us</Link></span>
                            </div> : ""
                    }


                </div>
            </div>

        </div>
    )
}

export default MainNav