import React from "react";
import { FEATURE_FILMS, ABOUT } from "../constants";
import close from "../img/close.png";
import { connect } from "react-redux";
import { showHeaderOverlay } from "../actions";
import { StoreState } from "../reducers";
interface OverlayProps {
    headerOverlay: boolean;
    showHeaderOverlay(shouldShowHeaderOverlay: boolean): void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
    const renderOverlay = (): JSX.Element => {
        return (
            <div className="overlayContainer">
                <div className="overlayTextsContainer">
                    <h1>{FEATURE_FILMS}</h1>
                    <h1>{ABOUT}</h1>
                </div>
                <img
                    className="closeIcon"
                    onClick={() => {
                        props.showHeaderOverlay(false);
                    }}
                    src={close}
                    alt="close"
                />
            </div>
        );
    };
    return <div>{props.headerOverlay ? renderOverlay() : null}</div>;
};
const mapStateToProps = (state: StoreState) => {
    return {
        headerOverlay: state.headerOverlay,
    };
};
export default connect(mapStateToProps, { showHeaderOverlay })(Overlay);
