import { createAction } from '../../utils/reducer/reducer.utils';
import { SEARCH_ARTICLES_ACTION_TYPES } from './search-articles.types'

export const setSearchArticles = (searchArticles) => createAction(SEARCH_ARTICLES_ACTION_TYPES.SET_SEARCH_ARTICLES, searchArticles);