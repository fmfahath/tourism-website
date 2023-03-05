import React from "react";
import './Hero-styles.css'

function Hero(props){
    return(
        <React.Fragment>
            <div className={props.cName}>
                <img alt='hero-img' src={props.heroImg}></img>
                <div className="hero-text"></div>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href="/">Travel Plan</a>
            </div>
        </React.Fragment>
    )
}

export default Hero;