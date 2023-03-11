import { combineReducers } from "redux";
import { articlesReducer } from "./articles/article.reducer";
// import { categoriesReducer } from "./categories/category.reducer";
// import { searchFieldReducer } from "./search-field/search-field.reducer";
import { favoritesReducer } from './favorites/favorite.reducer'
import { bookmarkReducer } from "./bookmark/bookmark.reducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    // categories: categoriesReducer,
    // searchField: searchFieldReducer,
    favorites: favoritesReducer,
    bookmarks: bookmarkReducer,
});