import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";

function Home(){
    return(
        <React.Fragment>
            <Navbar/>
            <Hero/>
        </React.Fragment>
    )
}

export default Home;