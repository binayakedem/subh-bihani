import React,{useState,useEffect} from 'react';
import '../CSS/all.css'
import Slider from "react-slick";
import axios from 'axios';
const Clients = () => {
    const [clientList, setclientList] = useState([]);
    useEffect(() => {
        fetchClient();
    }, []);

    const fetchClient = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/clients');
            setclientList(response.data);
        } catch (error) {
            console.error('Error fetching client:', error);
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
        ]
    };
    return (
        <>
            <div className='my-bg-contact md:h-56 sm:h-56 lg:h-56 flex items-center flex-col justify-center h-40 text-center text-white relative font-sans '>
                <h1 className='text-5xl z-20 font-sans font-bold'>Our Clients</h1>
                <div className="absolute inset-0 bg-[#1A2C79] opacity-80"></div>
            </div>
            <div className='w-[100vw] flex flex-row justify-center  h-auto my-bg-client font-sans '>
                <div className='w-[75vw] '>
                    <div className='text-center'>
                        <h1 className='text-[#00A0E8] font-bold font-sans mt-8'>Our Clients</h1>
                        <h1 className='text-[#162171] font-sans font-bold text-3xl mt-2 mb-4'>Our Valuable Clients</h1>
                        <h1 className="heading w-32 rounded-md h-1 mb-10 "></h1>
                    </div>
                    <div>
                        <div className='bg-white mb-20 rounded shadow-md shadow-gray-400 p-9'>

                            <Slider {...settings}>
                            {clientList.map((client, index) => (
                                        <div key={index} className='flex flex-row'>
                                            <img className='h-10 w-auto' src={`http://localhost:5000/uploads/${client.image}`}  alt="logo" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients