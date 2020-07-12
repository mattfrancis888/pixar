import React from "react";
import logo from "../img/logo.png";
import hamburger from "../img/hamburger.png";
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="pixar-logo" />
            <img className="hamburgerIcon" src={hamburger} alt="pixar-logo" />
            <div className="headerTextsWrapper">
                <h1>Feature Files</h1>
                <h1>About</h1>
            </div>
        </nav>
    );
};
export default Header;
