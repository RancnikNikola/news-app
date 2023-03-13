import { HAMBURGER_ACTION_TYPES } from "./hamburger.types";

const HAMBURGER_INITIAL_STATE = {
    isHamburgerOpen: false
}

export const hamburgerReducer = (state = HAMBURGER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case HAMBURGER_ACTION_TYPES.SET_HAMBURGER:
            return {state: HAMBURGER_INITIAL_STATE, isHamburgerOpen: payload}
        default:
            return state
    }
}