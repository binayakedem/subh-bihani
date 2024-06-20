import React, { useRef ,useState} from 'react';
import { TfiMobile } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { toast } from 'react-hot-toast';
const Contact = () => {
    const position = [27.69152, 85.342049];
    const targetDivRef = useRef(null);

    const scrollToDiv = () => {
        targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messege, setmessege] = useState('');

    const handleSubmit = () => {
        const formData = {
            name: name,
            email: email,
            messege: messege
        };

        fetch('http://localhost:5000/api/messeges', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setEmail('')
            setName('')
            setmessege('')
            toast.success('Request successful!');

            // Optionally, you can handle success response here, like showing a success messege.
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
            // Optionally, you can handle error here, like showing an error messege.
        });
    };

    return (
        <>
            <div className='my-bg-contact md:h-56 sm:h-56 lg:h-56 flex items-center flex-col justify-center h-40 text-center text-white relative font-sans '>
                <h1 className='text-5xl z-20 font-sans font-bold'>Contact Us</h1>
                <div className="absolute inset-0 bg-[#1A2C79] opacity-80"></div>
            </div>
            <div className='w-[100vw] flex flex-row justify-center  h-auto  font-sans sm:mt-5 lg:mt-20'>
                <div className='w-[75vw] '>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-6">
                        <div className='flex flex-col justify-center items-center border border-dark-50 gap-2  py-16 rounded-lg shadow-md hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer'>
                            <div><TfiMobile color='#00a0e8' size={25} /></div>
                            <div>
                                <h1 className='font-bold text-xl'>Call Us</h1>
                                <p className='text-gray-700'>01-4435890</p>
                            </div>

                        </div>
                        <div className='flex flex-col justify-center items-center border border-dark-50 gap-2  py-16 rounded-lg shadow-md hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer'>
                            <div><CiLocationOn color='#00a0e8' size={25} /></div>
                            <div>
                                <h1 className='font-bold text-xl text-center'>Visit Us</h1>
                                <p className='text-gray-700'>Mid-Baneshwor, Nepal</p>
                            </div>

                        </div>
                        <div className='flex flex-col justify-center items-center border border-dark-50 gap-2  py-16 rounded-lg shadow-md hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer'>
                            <div>< TfiEmail color='#00a0e8' size={25} /></div>
                            <div>
                                <h1 className='font-bold text-xl text-center'>Mail Us</h1>
                                <p className='text-gray-700'>info@subhabihani.com.np</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-10 mt-32'>
                        <div className='p-8 bg-gray-100 flex flex-col gap-5 rounded-sm'>
                            <h1 className='text-[#162171] font-semibold text-2xl'>Any Query?</h1>
                            <input type="text" className='rounded p-3' placeholder='Enter name'   value={name}
                onChange={(e) => setName(e.target.value)}/>
                            <input type="text" className='rounded p-3' placeholder='Enter Email' value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                            <input type="textarea" className='rounded p-3 h-32' placeholder='messege' value={messege}
                onChange={(e) => setmessege(e.target.value)}/>
                            <div className='flex justify-start items-center mb-8'><button className='bg-[#00a0e8] border-[#00a0e8] py-3 px-5 font-sans font-semibold text-white rounded mt-3 hover:bg-transparent hover:text-[#00a0e8] hover:border-[#00a0e8] hover:border-[1px] '  onClick={handleSubmit}>Send messege</button></div>

                        </div>
                        <div className='flex flex-col justify-start items-start px-20'>

                            <h1 className='text-[#162171] font-bold text-4xl'>Looking for a excellent Business idea?</h1>
                            <p className='text-[16px] my-5 text-gray-700'>Seamlessly deliver pandemic e-services and next-generation initiatives.
                            </p>
                            <div className='my-5'>
                                <button className='flex flex-row border-[#00A0E8] border-[1px] rounded px-8 text-[#00A0E8] font-semibold text-sm py-2 justify-between items-center hover:text-white  hover:bg-[#00A0E8] hover:border-b-[1.5px] hover:border-r-[1.5px] hover:border-black' onClick={scrollToDiv}><span >Get Direction</span> <span className='ml-2'><IoIosArrowRoundForward size={30} /></span></button>
                            </div>
                            <hr className='border h-[1px] w-full mb-3' />
                            <h1 className='text-[#162171] text-xl font-semibold'>Our Office</h1>
                            <div className='my-5 text-gray-700'>
                                <p>Mid-Baneshwor</p>
                                <p>Kathmandu, Nepal</p>
                            </div>
                            <div className='text-gray-700'>
                                <p>Phone: 01-4435890</p>
                                <p>Email: info@subhabihani.com.np</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div ref={targetDivRef} className='overflow-hidden my-10'>

                {/* map start from here */}
                <MapContainer center={position} zoom={13} className='h-60 w-[100vw]'>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br />.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}

export default Contact