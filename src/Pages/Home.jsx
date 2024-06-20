import React from 'react'
import Body from "../Components/Body"
import MainNav from "../Components/MainNav"
import OurProject from "../Components/OurProject"
import OurServices from "../Components/OurServices"
import Testimonials from "../Components/Testimonials"
import About from '../Components/About'
import Clients from '../Components/Clients'
const Home = () => {
    return (
        <>
            <div >
                <Body />
                <OurServices />
                <About />
                <OurProject />
                {/* <Testimonials /> */}
                {/* <Clients /> */}
            </div>

        </>
    )
}

export default Home