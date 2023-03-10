import { Component } from "react";
import "./DestinationData-styles.css"


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img id="img1" alt="image-1" src={this.props.img1}></img>
                    <img id="img2" alt="imae-2" src={this.props.img2}></img>
                </div>
            </div>
        )
    }
}

export default DestinationData;