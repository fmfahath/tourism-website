import { Component } from "react";
import "./navbar-styles.css"
import { menuItems } from "./menu-items";






class Navbar extends Component {

    state = {
        clicked: false,
    };

    //nav bar menu icon / close icon function
    handleClick = () => { 
        this.setState({clicked : !this.state.clicked});
    }

    render() {
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo"><a href="/">Trippy</a></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.clsName} href={item.url}><i className={item.icon}></i>{item.title}</a>
                                {/* <link className={item.clsName} to={item.url}><i className={item.icon}></i>{item.title}</link>  */}
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