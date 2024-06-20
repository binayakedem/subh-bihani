import React ,{useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import '../CSS/all.css'
import blogger from '../assets/blogger.png'
import content from '../assets/content.png'
import digital from '../assets/digital.png'
import email from '../assets/email.png'
import seo from '../assets/seo.png'
import social from '../assets/social.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from 'axios'
const Services = () => {
    const [serviceList, setserviceList] = useState([]);
    useEffect(() => {
        fetchService();
    }, []);

    const fetchService = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/service');
            setserviceList(response.data);
        } catch (error) {
            console.error('Error fetching Services:', error);
        }
    };
    return (
        <>
            <div className='my-bg-contact md:h-56 sm:h-56 lg:h-56 flex items-center flex-col justify-center h-40 text-center text-white relative font-sans '>
                <h1 className='text-5xl z-20 font-sans font-bold'>Services</h1>
                <div className="absolute inset-0 bg-[#1A2C79] opacity-80"></div>
            </div>
            <div className='w-[100vw] flex flex-row justify-center  h-auto  font-sans pt-9 pb-8 my-bg-service'>
                <div className='w-[75vw] '>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
                        {
                            serviceList.map((service,index) => (
                                <div key={index} className='cursor-pointer flex flex-col justify-center items-center rounded-md py-10 px-4 bg-white text-center gap-4 m-4 hover:shadow-2xl duration-200 ease-in-out border hover:border-dashed hover:border-blue-500'>
                                    <img src={`http://localhost:5000/uploads/${service.image}`} className={` p-4 rounded-lg bg-pink-300 `} alt="logo" />
                                    <h1 className='font-semibold text-xl text-[#162171]'>{service.title}</h1>
                                    <p className='text-gray-800'>{service.content}</p>
                                    <div className='mt-4 text-sm font-semibold text-[#162171]'>
                                        <Link to='/service-detail' className='flex flex-row justify-center items-center '><span className='hover:px-2'>Read More </span><span><IoIosArrowRoundForward size={25} /></span></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services