import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from '../store/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares))

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['articles']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);