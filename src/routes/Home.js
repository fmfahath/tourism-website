import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";

function Home(){
    return(
        <React.Fragment>
            <Navbar/>
            <Hero 
                cName = "hero"
                heroImg = "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                title = "YourJourny, Your Storey"
                text = "Choose Your Favourite dstination"
            />
        </React.Fragment>
    )
}

export default Home;