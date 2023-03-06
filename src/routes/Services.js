import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
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
        </React.Fragment>
    )
}

export default Services;