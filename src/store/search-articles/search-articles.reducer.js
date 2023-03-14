import { SEARCH_ARTICLES_ACTION_TYPES } from "./search-articles.types";

const SEARCH_ARTICLES_INITIAL_STATE = {
    searchArticles: ''
}

export const searchArticlesReducer = (state = SEARCH_ARTICLES_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SEARCH_ARTICLES_ACTION_TYPES.SET_SEARCH_ARTICLES:
            return {...state, searchArticles: payload}
        default:
            return state
    }
}