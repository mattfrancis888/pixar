import { SHOW_HEADER_OVERLAY } from "../actions/types";
import { HeaderOverlayAction } from "../actions";
export default (state: boolean = false, action: HeaderOverlayAction) => {
    switch (action.type) {
        case SHOW_HEADER_OVERLAY:
            return action.payload;
        default:
            return state;
    }
};
