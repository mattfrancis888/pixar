import React from "react";
import logo from "../img/logo.png";
import hamburger from "../img/hamburger.png";
import { FEATURE_FILMS, ABOUT } from "../constants";
import Overlay from "./Overlay";
import { connect } from "react-redux";
import { showHeaderOverlay } from "../actions";
import { StoreState } from "../reducers";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
export interface HeaderProps {
    //Props from redux
    headerOverlay: boolean;
    showHeaderOverlay(shouldShowHeaderOverlay: boolean): void;
}
const Header: React.FC<HeaderProps> = (props) => {
    //const history = useHistory();
    return (
        <nav>
            <Link to="/">
                <img
                    className="logo"
                    src={logo}
                    alt="pixar-logo"
                    // onClick={() => {
                    //     history.push("/");
                    // }}
                />
            </Link>
            <img
                className="hamburgerIcon"
                src={hamburger}
                alt="pixar-logo"
                onClick={() => {
                    props.showHeaderOverlay(true);
                }}
            />

            <div className="headerTextsWrapper">
                <Link to="/featured-films">
                    <h1
                    // onClick={() => {
                    //     history.push("/featured-films");
                    // }}
                    >
                        {FEATURE_FILMS}
                    </h1>
                </Link>

                <Link to="/about">
                    <h1>{ABOUT}</h1>
                </Link>
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
