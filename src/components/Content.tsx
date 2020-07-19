import React from "react";
import pixarCareer from "../img/pixar_career.jpeg";
import onward from "../img/onward.jpg";
import soul from "../img/soul.jpg";
const Content: React.FC<{}> = () => {
    return (
        <div>
            <div className="contentContainer">
                <h2 className="quote">
                    "Our stories often ask, what if?<br></br>
                    What if toys came to life? <br></br>
                    What if our emotions could talk? <br></br>
                    What if a magical spell allowed you to spend
                    <br></br>a day with someone you loved and lost?<br></br>
                    <br></br>
                    What if the story of our future<br></br>
                    was one of liberty and justice for all?"
                </h2>
                <div className="featuredContentContainer">
                    <div className="featuredContent">
                        <img src={pixarCareer} alt="careers at pixar" />
                        <h2 className="">Careers At Pixar</h2>
                    </div>
                    <div className="featuredContent">
                        <img src={soul} alt="soul" />
                        <h2 className="">Soul</h2>
                    </div>
                    <div className="featuredContent">
                        <img src={onward} alt="Onward" />
                        <h2 className="">Onward Trailers</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Content;
