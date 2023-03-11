import { BOOKMARK_ACTION_TYPES } from "./bookmark.types";

const BOOKMARK_INITIAL_STATE = {
    bookmarks: []
}

export const bookmarkReducer = (state = BOOKMARK_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case BOOKMARK_ACTION_TYPES.SET_BOOKMARK:
            return {...state, bookmarks: payload}
        default:
            return state
    }
}