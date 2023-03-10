import React from "react";
import './Hero-styles.css'

function Hero(props) {
    return (
        <React.Fragment>
            <div className={props.cName}>
                <img className="hero-img" alt='hero-img' src={props.heroImg}/>
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.buttonClass}>{props.buttonText}</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero;