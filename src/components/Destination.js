import "./destination-styles.css"
import DestinationData from "./DestinationData"
import Image1 from "../assets/1.jpg"
import Image2 from "../assets/2.jpg"
import Image3 from "../assets/3.jpg"
import Image4 from "../assets/13.jpg"


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opprtunity to see a lot, within a time frame</p>

            <DestinationData
                className="first-des"
                heading="Burj-Khalifa"
                text="Taal, located in the Philippines, is part of a caldera system in southern Luzon Island. Recorded eruptions 
                date back to 3,580 BCE. The caldera is 15 x 20 km and contains Lake Taal, which has a depth of 160 m, and 
                an island that also contains a lake within the Main Crater. Eruptive activity during 1-9 July 2021 was 
                
                characterized by phreatomagmatic explosions, gas-and-steam emissions, including sulfur dioxide emissions, 
                and seismicity (BGVN 46:10). This report describes activity during October 2021-March 2022 using reports 
                from the Philippine Institute of Volcanology and Seismology (PHIVOLCS) and satellite data"
                img1={Image1}
                img2={Image2}
            />

            <DestinationData
                className="first-des-reverse"
                heading="Burj-Al-Arab"
                text="Eiffel Tower, French Tour Eiffel, Parisian landmark that is also a technological masterpiece in 
                building-construction history. When the French government was organizing the International Exposition 
                of 1889 to celebrate the centenary of the French Revolution, a competition was held for designs for a 
                suitable monument. 
                
                More than 100 plans were submitted, and the Centennial Committee accepted that of 
                the noted bridge engineer Gustave Eiffel. Eiffel’s concept of a 300-metre (984-foot) tower built almost 
                entirely of open-lattice wrought iron aroused amazement, skepticism, and no little opposition on aesthetic 
                grounds. When completed, the tower served as the entrance gateway to the exposition"
                img1={Image3}
                img2={Image4}
            />
        </div>
    )
}

export default Destination;