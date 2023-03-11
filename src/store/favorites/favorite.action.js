import { createAction } from '../../utils/reducer/reducer.utils';
import { FAVORITE_ACTION_TYPES } from './favorite.types'

export const setFavorites = (favorites) => createAction(FAVORITE_ACTION_TYPES.SET_FAVORITES, favorites);