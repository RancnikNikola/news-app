import { FAVORITE_ACTION_TYPES } from "./favorite.types";

const FAVORITE_INITIAL_STATE = {
    favorites: []
}

export const favoritesReducer = (state = FAVORITE_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case FAVORITE_ACTION_TYPES.SET_FAVORITES:
            return {...state, favorites: payload}
        default:
            return state
    }
}