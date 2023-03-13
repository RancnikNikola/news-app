import { createAction } from '../../utils/reducer/reducer.utils';
import { HAMBURGER_ACTION_TYPES } from './hamburger.types'

export const setIsHamburgerOpen = (isHamburgerOpen) => createAction(HAMBURGER_ACTION_TYPES.SET_HAMBURGER, isHamburgerOpen);