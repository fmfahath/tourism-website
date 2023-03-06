import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import AboutImg from "../assets/night.jpg" //creating variable for the hero image

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
        </React.Fragment>
    )
}

export default About;