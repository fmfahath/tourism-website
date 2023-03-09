import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer"
import ContactImg from "../assets/2.jpg"
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
        <React.Fragment>
            <Navbar/> 
            <Hero 
                cName = "hero-mid"
                heroImg = {ContactImg}
                title = "Contact Us"
                text = ""
                url="/"
                buttonClass=""
                buttonText=""
            />
            <ContactForm/>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact;