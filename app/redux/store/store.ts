import { configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

import storage from 'redux-persist/lib/storage';

import scheduleReducer from "../slices/scheduleSlice";
import newEntryPortalReducer from "../slices/portalSlice";
import newEntryReducer from "../slices/newEntrySlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["schedule"],
  expireIn: 24 * 60 * 60 * 1000,
};

export const rootReducer = combineReducers({
    schedule: scheduleReducer,
    newEntryPortal: newEntryPortalReducer,
    newEntry: newEntryReducer,
  });  

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore: MakeStore<Store<RootState>> = (context: Context) => {
    const store = configureStore({
      reducer: persistedReducer,
    });
    persistStore(store);
    return store;
};  

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });