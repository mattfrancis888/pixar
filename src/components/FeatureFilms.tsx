import React from "react";
import logo from "../img/logo.png";
import hamburger from "../img/hamburger.png";
import { FEATURE_FILMS, ABOUT } from "../constants";
import Overlay from "./Overlay";
import { connect } from "react-redux";
import { showHeaderOverlay } from "../actions";
import { StoreState } from "../reducers";
import onwardsHero from "../img/onwards_hero.jpg";
import toystory from "../img/toystory.jpg";
const FeatureFilms: React.FC<{}> = () => {
    return (
        <div>
            <div className="heroContainer">
                <img
                    className="heroImage"
                    src={onwardsHero}
                    alt="onwards scene"
                />
                <h1>Featured Films</h1>
            </div>

            <div className="filmsContainer">
                <div className="film">
                    <img src={toystory} alt="film" />
                    <h2>Film Name</h2>
                </div>
                <div className="film">
                    <img src={toystory} alt="film" />
                    <h2>Film Name</h2>
                </div>
                <div className="film">
                    <img src={toystory} alt="film" />
                    <h2>Film Name 3</h2>
                </div>
            </div>
        </div>
    );
};

export default FeatureFilms;
