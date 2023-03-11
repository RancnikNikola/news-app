import { SEARCH_FIELD_ACTION_TYPES } from "./search-field.types";

const SEARCH_FIELD_INITIAL_STATE = {
    searchField: ''
}

export const searchFieldReducer = (state = SEARCH_FIELD_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SEARCH_FIELD_ACTION_TYPES.SET_SEARCH_FIELD:
            return {...state, searchField: payload}
        default:
            return state
    }
}