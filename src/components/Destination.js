import "./destination-styles.css"
import DestinationData from "./DestinationData"
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opprtunity to see a lot, within a time frame</p>

            <DestinationData
                className="first-des"
                heading="Taal Volcano, batangas"
                text="Taal, located in the Philippines, is part of a caldera system in southern Luzon Island. Recorded eruptions 
                date back to 3,580 BCE. The caldera is 15 x 20 km and contains Lake Taal, which has a depth of 160 m, and 
                an island that also contains a lake within the Main Crater. Eruptive activity during 1-9 July 2021 was 
                
                characterized by phreatomagmatic explosions, gas-and-steam emissions, including sulfur dioxide emissions, 
                and seismicity (BGVN 46:10). This report describes activity during October 2021-March 2022 using reports 
                from the Philippine Institute of Volcanology and Seismology (PHIVOLCS) and satellite data"
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Taal Volcano, batangas"
                text="Taal, located in the Philippines, is part of a caldera system in southern Luzon Island. Recorded eruptions 
                date back to 3,580 BCE. The caldera is 15 x 20 km and contains Lake Taal, which has a depth of 160 m, and 
                an island that also contains a lake within the Main Crater. Eruptive activity during 1-9 July 2021 was 
                
                characterized by phreatomagmatic explosions, gas-and-steam emissions, including sulfur dioxide emissions, 
                and seismicity (BGVN 46:10). This report describes activity during October 2021-March 2022 using reports 
                from the Philippine Institute of Volcanology and Seismology (PHIVOLCS) and satellite data"
                img1={Mountain3}
                img2={Mountain4}
            />
        </div>
    )
}

export default Destination;