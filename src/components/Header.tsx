import React from "react";
import logo from "../img/logo.png";
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="pixar-logo" />
            <div className="headerTextsWrapper">
                <h1>Feature Files</h1>
                <h1>About</h1>
            </div>
        </nav>
    );
};
export default Header;
