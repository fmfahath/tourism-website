import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/14.jpg" //creating variable for the hero image
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs";

function About(){
    return(
        <React.Fragment>
            <Navbar/>
            <Hero 
                cName = "hero-mid"
                heroImg = {AboutImg}
                title = "About Us"
                text = ""
                url="/"
                buttonClass=""
                buttonText=""
            />
            <AboutUs/>
            <Footer/>
        </React.Fragment>
    )
}

export default About;