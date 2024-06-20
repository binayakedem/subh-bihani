import React from 'react'
import '../CSS/all.css'
import bg from '../assets/bg.svg'
const About = () => {
    return (
        <div className='w-[100vw] flex flex-row justify-center items-center h-auto'>
            <div className='w-[75vw] flex flex-row '>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <div className='text-sans'>
                        <h1 className='text-[#02A1E8] font-semibold text-center py-4'>About Us</h1>
                        <h1 className='text-[#162171] font-bold text-3xl '>SUBHA BIHANI DIGITAL MEDIA PVT. LTD</h1>
                        <h1 className="heading w-32 rounded-md h-1 my-4 "></h1>
                        <p>Subha Bihani Digital Media PVT. LTD is a results-driven digital marketing agency in Nepal focused on connecting brands to people. We are a one-stop solution provider for all your Digital Marketing requirements. We offer an integrated digital marketing solution combining digital strategy to implementation.</p>
                        <p className='my-5'>Our expertise comprises specializing in an innovative marketing solution involving creative Search Engine Optimization (SEO), Social Media campaign, Email marketing, Content marketing, influencer marketing</p>
                    </div>
                    <div className=''> <img className='w-full h-96' src={bg} alt="bg" /></div>
                </div>

            </div>

        </div>
    )
}

export default About