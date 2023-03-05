import React from "react";
import './Hero-styles.css'

function Hero(){
    return(
        <React.Fragment>
            <div className='hero'>
                <img alt='hero-img' src="https://images.unsplash.com/photo-1464188776886-149f86bd1027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
            </div>
        </React.Fragment>
    )
}

export default Hero;