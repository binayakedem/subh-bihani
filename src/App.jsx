import SupportNav from "./Components/SupportNav"
import Footer from "./Components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Aboutus from "./Pages/Aboutus"
import Portfolio from "./Pages/Portfolio"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import MainNav from "./Components/MainNav"
import ServiceDetail from "./Pages/ServiceDetail"
import React, { useState, useEffect } from 'react';
import { MdOutlineArrowUpward } from "react-icons/md";
import Testimonials from "./Components/Testimonials"
import Clients from "./Components/Clients"
function App() {
  const [showButton, setShowButton] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Function to handle button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
        setScrolling(true);
      } else {
        setShowButton(false);
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>


      <BrowserRouter>
        <SupportNav />
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Services />} />
          <Route path="/service-detail" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
        <Footer />
        <button
          onClick={scrollToTop}
          className={`fixed right-4 bottom-4 p-4 rounded-full bg-[#162171] text-white transition-all duration-300 ${scrolling ? 'translate-y-0' : '-translate-y-full'} ${showButton ? 'opacity-100' : 'opacity-0'}`}
        >
          <MdOutlineArrowUpward />
        </button>
      </BrowserRouter>


    </>
  )
}

export default App
