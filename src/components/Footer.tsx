import React from "react";
import disney from "../img/disney_logo.jpg";
const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <img className="disneyLogo" src={disney} alt="disney lgoo" />

            <h3 className="companyFoundedText">© 1986-2020 disney / pixar</h3>
        </footer>
    );
};
export default Footer;
