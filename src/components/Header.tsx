import React from "react";
import logo from "../img/logo.png";
import hamburger from "../img/hamburger.png";
import { FEATURE_FILMS, ABOUT } from "../constants";
import Overlay from "./Overlay";
import { connect } from "react-redux";
import { showHeaderOverlay } from "../actions";
import { StoreState } from "../reducers";

export interface HeaderProps {
    headerOverlay: boolean;
    showHeaderOverlay(shouldShowHeaderOverlay: boolean): void;
}
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <nav>
            <img className="logo" src={logo} alt="pixar-logo" />
            <img
                className="hamburgerIcon"
                src={hamburger}
                alt="pixar-logo"
                onClick={() => {
                    props.showHeaderOverlay(true);
                }}
            />

            <div className="headerTextsWrapper">
                <h1>{FEATURE_FILMS}</h1>
                <h1>{ABOUT}</h1>
            </div>
            <Overlay />
            {/* {props.headerOverlay ? <Overlay /> : null} */}
        </nav>
    );
};

const mapStateToProps = (state: StoreState) => {
    return {
        headerOverlay: state.headerOverlay,
    };
};
export default connect(mapStateToProps, { showHeaderOverlay })(Header);
