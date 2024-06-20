import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const OurProject = () => {
    const [activeButton, setActiveButton] = useState('Digital Marketing');
    const [portfolioList, setPortfolioList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetchPortfolio();
    }, [activeButton]);

    const fetchPortfolio = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/profiles');
            setPortfolioList(response.data);

            // Extract unique category names
            const categories = response.data.map(portfolio => portfolio.category);
            const uniqueCategories = Array.from(new Set(categories));
            setCategoryList(uniqueCategories);
        } catch (error) {
            console.error('Error fetching portfolio:', error);
        }
    };

    const handleButtonClick = (category) => {
        setActiveButton(category);
    };

    return (
        <div className='bg-white z-50 w-[100vw] flex flex-row justify-center h-auto font-sans'>
            <div className='w-[75vw]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[#00A0E8] font-bold font-sans mt-8'>Previous Project</h1>
                    <h1 className='text-[#162171] font-sans font-bold text-3xl mt-2 mb-4'>Our Portfolio</h1>
                    <h1 className="heading w-32 rounded-md h-1 mb-4 "></h1>
                </div>
                <div className='flex flex-wrap justify-center items-center mb-4'>
                    {categoryList.map((category, index) => (
                        <span key={index} onClick={() => handleButtonClick(category)} className={`my-1 mx-4 font-semibold text-[#162171] cursor-pointer hover:text-[#00A0E8] ${activeButton === category ? 'mb-1 border-b-2 border-[#00A0E8] text-[#00A0E8]' : ''}`}>{category}</span>
                    ))}
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                    {portfolioList.map((portfolio, index) => (
                        (portfolio.category === activeButton) &&
                        <div key={index} className="flex flex-wrap justify-center cursor-pointer">
                            <div className="rounded overflow-hidden shadow-lg relative">
                                <img
                                    className="w-full h-full object-cover"
                                    src={`http://localhost:5000/uploads/${portfolio.image}`}
                                    alt="Card"
                                    />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#3d1771] bg-opacity-70 text-white text-center ease-linear">
                                <a href={portfolio.link} target='_blank'>
                                    <div>
                                        <h2 className="text-lg font-bold mb-2">{portfolio.service}</h2>
                                        <p className="text-sm">{portfolio.service}</p>
                                    </div>
                                    </a>
                                  
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProject;
