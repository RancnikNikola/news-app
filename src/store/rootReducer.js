import { combineReducers } from "redux";
import { articlesReducer } from "./articles/article.reducer";
import { searchFieldReducer } from "./search-field/search-field.reducer";
import { favoritesReducer } from './favorites/favorite.reducer'
import { bookmarkReducer } from "./bookmark/bookmark.reducer";
import { hamburgerReducer } from "./hamburger/hamburger.reducer";
import { searchArticlesReducer } from "./search-articles/search-articles.reducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    searchField: searchFieldReducer,
    favorites: favoritesReducer,
    bookmarks: bookmarkReducer,
    isHamburgerOpen: hamburgerReducer,
    searchArticles: searchArticlesReducer
});