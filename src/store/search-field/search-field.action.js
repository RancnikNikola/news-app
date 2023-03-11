import { createAction } from '../../utils/reducer/reducer.utils';
import { SEARCH_FIELD_ACTION_TYPES } from './search-field.types'

export const setSearchField = (searchField) => createAction(SEARCH_FIELD_ACTION_TYPES.SET_SEARCH_FIELD, searchField);