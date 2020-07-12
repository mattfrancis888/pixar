import { SHOW_HEADER_OVERLAY } from "./types";
export interface HeaderOverlayAction {
    type: String;
    payload: boolean;
}

export const showHeaderOverlay = (
    shouldShowHeaderOverlay: boolean
): HeaderOverlayAction => {
    return {
        type: SHOW_HEADER_OVERLAY,
        payload: shouldShowHeaderOverlay,
    };
};
