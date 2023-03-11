import { ARTICLE_ACTION_TYPES } from "./article.types";

const ARTICLES_INITIAL_STATE = {
    articles: [],
}

export const articlesReducer = (state = ARTICLES_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case ARTICLE_ACTION_TYPES.SET_ARTICLES:
            return {...state, articles: payload}
        default:
            return state
    }
}