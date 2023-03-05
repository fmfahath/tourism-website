import { Component } from "react";
import "./navbar-styles.css"
import { menuItems } from "./menu-items";






class Navbar extends Component {
    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo">Trippy</h1>
                <div className="menu-icon">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-times"></i>
                </div>
                <ul className="nav-menu">
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.clsName} href={item.url}><i className={item.icon}></i>{item.title}</a>
                            </li>
                        )
                    })}
                    <button className="signUp-btn">Sign Up</button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;