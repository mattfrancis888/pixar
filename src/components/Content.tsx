import React from "react";
import pixarCareer from "../img/pixar_career.jpeg";
import onward from "../img/onward.jpg";
import soul from "../img/soul.jpg";
import { useHistory } from "react-router";
const Content: React.FC<{}> = () => {
    const history = useHistory();
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
                        <img
                            onClick={() => {
                                history.push("/careers");
                            }}
                            src={pixarCareer}
                            alt="careers at pixar"
                        />
                        <h2
                            onClick={() => {
                                history.push("/careers");
                            }}
                        >
                            Careers At Pixar
                        </h2>
                    </div>
                    <div className="featuredContent">
                        <img
                            src={soul}
                            alt="soul"
                            onClick={() => {
                                history.push("/soul-preview");
                            }}
                        />
                        <h2
                            onClick={() => {
                                history.push("/soul-preview");
                            }}
                        >
                            Soul
                        </h2>
                    </div>
                    <div className="featuredContent">
                        <img
                            src={onward}
                            alt="Onward"
                            onClick={() => {
                                history.push("/onward-preview");
                            }}
                        />
                        <h2
                            className=""
                            onClick={() => {
                                history.push("/onward-preview");
                            }}
                        >
                            Onward Trailers
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Content;
