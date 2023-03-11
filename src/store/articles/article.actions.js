import { createAction } from '../../utils/reducer/reducer.utils';
import { ARTICLE_ACTION_TYPES } from './article.types';

export const setArticles = (articles) => createAction(ARTICLE_ACTION_TYPES.SET_ARTICLES, articles);