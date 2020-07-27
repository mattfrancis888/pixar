import { ActionTypes, Film, FetchFilmsAction } from "../actions";
export default (state: Film[] = [], action: FetchFilmsAction) => {
    switch (action.type) {
        // case ActionTypes.FETCH_FILMS:
        //     return action.payload;
        //Above is used if we use local database
        case ActionTypes.FETCH_FILMS:
            return action.payload.films;
        default:
            return state;
    }
};
