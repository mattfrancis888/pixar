import React from "react";
import jobsBuilding from "../img/jobsBuilding_hero.jpg";

const Careers: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <div className="heroParallaxContainer">
                <img
                    className="heroParallaxImage"
                    src={jobsBuilding}
                    alt="steve jobs building"
                />
                <h1 className="heroParallaxTitle">CAREERS AT PIXAR</h1>
            </div>
            <div className="careersContainer">
                <h2>A COLLABORATION BETWEEN ART & TECHNOLOGY</h2>
                <p>
                    At Pixar, our goal is to make great films with great people.
                    &nbsp;We are proud of our tradition of creative and
                    technical excellence and are always looking for talented
                    people to enrich our work and our community. We believe it’s
                    important for our studio to reflect the diversity of the
                    society we live in and the worldwide audiences for whom we
                    make our films. &nbsp;Come see what we have to offer!
                </p>
                <a
                    target={"_blank"}
                    href="https://pixar.wd5.myworkdayjobs.com/Pixar_External_Career_Site"
                >
                    <button className="careerListingButton">
                        VISIT CAREER LISTINGS
                    </button>
                </a>
            </div>
        </React.Fragment>
    );
};

export default Careers;
