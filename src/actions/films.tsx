import { ActionTypes } from "./types";
import films from "./axiosConfig";
import { Dispatch } from "redux";

export interface Film {
    id: Number;
    title: String;
    image: String;
}
export interface FetchFilmsResponse {
    films: Film[];
}
// export interface FetchFilmsAction {
//     type: ActionTypes.FETCH_FILMS;
//     payload: Film[];
// }
//Above is used if we use local database
export interface FetchFilmsAction {
    type: ActionTypes.FETCH_FILMS;
    payload: FetchFilmsResponse;
    //FetchFIlmsResponse acts like an object {films:Film[]}
}

export const fetchFilms = () => async (dispatch: Dispatch) => {
    // const response = await films.get<Films[]>("/films");
    //response.data returns  [{…}, {…}, {…}, {…}, {…}, {…}, {…}] if database
    //is served locally

    //if based on online database:
    const response = await films.get<{ films: Film[] }>("/films");
    //response.data returns  //  {films: Array(7)}
    //        films: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
    //        __proto__: Object if database

    //Default is .get<any>; we need to be more specific. Will prevent payload from having invalid values
    dispatch<FetchFilmsAction>({
        //Generic is an extra step to ensure that everything has the right values
        type: ActionTypes.FETCH_FILMS,
        payload: response.data,
    });
};
