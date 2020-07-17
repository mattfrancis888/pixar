import { combineReducers } from "redux";
import showOverlayReducer from "./showOverlayReducer";
import filmsReducer from "./filmsReducer";
import { Films } from "../actions";
export interface StoreState {
    headerOverlay: boolean;
    films: Films[];
}
export default combineReducers<StoreState>({
    headerOverlay: showOverlayReducer,
    films: filmsReducer,
});
