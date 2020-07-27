import { combineReducers } from "redux";
import showOverlayReducer from "./showOverlayReducer";
import filmsReducer from "./filmsReducer";
import { Film } from "../actions";
export interface StoreState {
    headerOverlay: boolean;
    films: Film[];
}
export default combineReducers<StoreState>({
    headerOverlay: showOverlayReducer,
    films: filmsReducer,
});
