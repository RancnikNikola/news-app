import { createAction } from '../../utils/reducer/reducer.utils';
import { BOOKMARK_ACTION_TYPES } from './bookmark.types'

export const setBookmark = (bookmarks) => createAction(BOOKMARK_ACTION_TYPES.SET_BOOKMARK, bookmarks);