import { Component } from "react";
import "../components/navbar-styles.css"

class Navbar extends Component{
    render(){
        return(
           <nav className="navbar-items">
            <h1 className="navbar-logo">Trippy</h1>
            <ul>
                <li><a href="/"><i class="fa-solid fa-house"></i>Home</a></li>
            </ul>
           </nav>
        )
    }
}

export default Navbar;