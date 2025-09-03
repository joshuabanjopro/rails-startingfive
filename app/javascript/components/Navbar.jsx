import React from "react";
import BasketballLogo from "../assets/basketball_logo_straight_white.png"

const Navbar = () => {
    return (
        <nav className="react-navbar">
            <h3>Starting</h3>
            <img src={BasketballLogo}/>
            <h3>Five</h3>
        </nav>
    )
};

export default Navbar;