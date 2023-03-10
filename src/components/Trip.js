import "./Trip-styles.css"
import TripData from "./TripData";
import Image1 from "../assets/8.jpg"
import Image2 from "../assets/9.jpg"
import Image3 from "../assets/11.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destnations using Google places</p>

            <div className="tripcard">
                <TripData
                    image={Image1}
                    heading="The Ring - Future of The Museum"
                    text="Measured from east to west, the Indonesian archipelago covers a distance similar to 
                    New York to Los Angeles, and with over 17,000 islands, Indonesia is a whole world waiting to be explored.
                    Planning a trip to Indonesia is enough to make any globetrotter green with envy, but it can also be a little daunting."
                />
                <TripData
                    image={Image2}
                    heading="Desert Safary"
                    text="Measured from east to west, the Indonesian archipelago covers a distance similar to 
                    New York to Los Angeles, and with over 17,000 islands, Indonesia is a whole world waiting to be explored.
                    Planning a trip to Indonesia is enough to make any globetrotter green with envy, but it can also be a little daunting."
                />
                <TripData
                    image={Image3}
                    heading="Burj-Al-Arab"
                    text="Measured from east to west, the Indonesian archipelago covers a distance similar to 
                    New York to Los Angeles, and with over 17,000 islands, Indonesia is a whole world waiting to be explored.
                    Planning a trip to Indonesia is enough to make any globetrotter green with envy, but it can also be a little daunting."
                />
            </div>
        </div>
    )
}

export default Trip;