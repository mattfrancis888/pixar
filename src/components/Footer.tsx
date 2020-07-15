import React from "react";
import { Link } from "react-router-dom";
import disney from "../img/disney_logo.jpg";
const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <img className="disneyLogo" src={disney} alt="disney logo" />
            <div className="socialsIconContainer">
                <Link to="https://www.youtube.com/pixar">
                    <svg className="youtubeSvgIcon" viewBox="0 0 64 64">
                        <use xlinkHref="#youtube-unauth-icon">
                            <svg id="youtube-unauth-icon" viewBox="0 0 64 64">
                                <path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"></path>
                            </svg>
                        </use>
                    </svg>
                </Link>
            </div>
            <h3 className="companyFoundedText">© 1986-2020 disney / pixar</h3>
        </footer>
    );
};
export default Footer;
