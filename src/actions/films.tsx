import { ActionTypes } from "./types";
import films from "./axiosConfig";
import { Dispatch } from "redux";

export interface Films {
    title: String;
}
export interface FetchFilmsAction {
    type: ActionTypes.FETCH_FILMS;
    payload: Films[];
}

export const fetchFilms = () => async (dispatch: Dispatch) => {
    const response = await films.get<Films[]>("/films");
    //Default is .get<any>; we need to be more specific. Will prevent payload from having invalid values
    dispatch<FetchFilmsAction>({
        //Generic is an extra step to ensure that everything has the right values
        type: ActionTypes.FETCH_FILMS,
        payload: response.data,
    });
};
