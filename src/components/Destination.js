import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"


const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opprtunity to see a lot, within a time frame</p>

            <div className="first-des">
                <div className="des-text">
                    <h2>Taal Volcano, batangas</h2>
                    <p>Taal, located in the Philippines, is part of a caldera system in southern Luzon Island. Recorded eruptions 
                        date back to 3,580 BCE. The caldera is 15 x 20 km and contains Lake Taal, which has a depth of 160 m, and 
                        an island that also contains a lake within the Main Crater. Eruptive activity during 1-9 July 2021 was 
                        
                        characterized by phreatomagmatic explosions, gas-and-steam emissions, including sulfur dioxide emissions, 
                        and seismicity (BGVN 46:10). This report describes activity during October 2021-March 2022 using reports 
                        from the Philippine Institute of Volcanology and Seismology (PHIVOLCS) and satellite data. Prior to a 
                        notable eruption on 26 March, PHIVOLCS described “phreatomagmatic bursts” on 15 and 22 November 2021, 
                        29-30 January, 2 and 10 February, and 25 March 2022; similar events occurred during 27-28 March.
                    </p>
                </div>
                <div className="image">
                    <img alt="image-1" src={Mountain1}></img>
                    <img alt="imae-2" src={Mountain2}></img>
                </div>
            </div>
        </div>
    )
}

export default Destination;