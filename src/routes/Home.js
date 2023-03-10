import React from "react";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import HeroImage from "../assets/16.jpg"
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <React.Fragment>
            <Navbar/>
            <Hero 
                cName = "hero"
                heroImg = {HeroImage}
                title = "Your Journy, Your Story"
                text = "Choose Your Favourite Detination"
                url="/"
                buttonClass="show"
                buttonText="Travel Plan"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;