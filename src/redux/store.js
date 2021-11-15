// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(rootReducer, composeWithDevTools());

// import { rootReducer } from './contacts/reducers';
/*з ToolKit */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items, filter } from './contacts/reducers';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
const persistConfig = {
    key: 'savedContacts',
    version: 1,
    storage,
    blackList: ['filter'],
};

const rootReducer = combineReducers({ items, filter });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(logger),
});

export const persistor = persistStore(store);
