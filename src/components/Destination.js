import "./destination-styles.css"
import DestinationData from "./DestinationData"


const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opprtunity to see a lot, within a time frame</p>

            <DestinationData/> 

        </div>
    )
}

export default Destination;