import React,{useState,useEffect} from 'react'
import { FaStar } from "react-icons/fa6";
import logo from '../assets/1.png'
import Slider from "react-slick";
import axios from 'axios';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetchTestimonials();
    }, []); // Trigger fetchTestimonials whenever currentPage changes

    const fetchTestimonials = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/testimonial`);
            setTestimonials(response.data);
          
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        }
    };
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true,
                }
            },
        ]
    };

   

    return (
        <>
            <div className='my-bg-contact md:h-56 sm:h-56 lg:h-56 flex items-center flex-col justify-center h-40 text-center text-white relative font-sans '>
                <h1 className='text-5xl z-20 font-sans font-bold'>Testimonials</h1>
                <div className="absolute inset-0 bg-[#1A2C79] opacity-80"></div>
            </div>
            <div className='w-[100vw] flex flex-row  justify-center  h-auto  font-sans mt-11'>
                <div className='w-[75vw] '>
                    <div className='text-center'>
                        <h1 className='text-[#00A0E8] font-bold font-sans mt-8'>Testimonials</h1>
                        <h1 className='text-[#162171] font-sans font-bold text-3xl mt-2 mb-4'>What Clients Say About Us</h1>
                        <h1 className="heading w-32 rounded-md h-1 mb-10 "></h1>
                    </div>
                    {/* card items */}
                    <Slider {...settings}>
                        {
                            testimonials.map((testimonial, index) => (
                                <div key={index} className='flex flex-col w-80 h-76 '>
                                    <div className='bg-[#162171] flex flex-col text-gray-300 p-4 h-60 rounded-lg'>
                                        <p>{testimonial.message}</p>
                                        <div className='flex flex-row my-4'>
                                            {/* <FaStar color='yellow' />
                                            <FaStar color='yellow' />
                                            <FaStar color='yellow' />
                                            <FaStar color='yellow' />
                                            <FaStar color='yellow' />
                                            <span >{testimonial.star}</span> */}
                                             {[...Array(5)].map((_, i) => (
                        <FaStar key={i} color={i < testimonial.star ? 'yellow' : 'gray'} />
                    ))}
                                            
                                        </div>
                                        
                                    </div>
                                    <div className='flex flex-row items-center my-4'>
                                        <img className='h-20 w-auto border-x-2 border-y-2 border-[#162171] rounded-full' src={logo} alt="" />
                                        <p className='font-sans font-semibold text-[#162171] ml-3 text-lg'>{testimonial.name}</p>

                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonials