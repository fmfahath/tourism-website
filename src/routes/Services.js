import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer"
import ServicesImg from "../assets/3.jpg"

function Services(){
    return(
        <React.Fragment>
             <Navbar/> 
            <Hero 
                cName = "hero-mid"
                heroImg = {ServicesImg}
                title = "Our Services"
                text = ""
                url="/"
                buttonClass=""
                buttonText=""
            />
            <Footer />
        </React.Fragment>
    )
}

export default Services;