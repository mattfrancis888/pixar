import { ActionTypes, Films, FetchFilmsAction } from "../actions";
export default (state: Films[] = [], action: FetchFilmsAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_FILMS:
            return action.payload;
        default:
            return state;
    }
};
