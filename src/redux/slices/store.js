import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Sidenavlayoutslice from './Sidenavlayoutslice';
import AuthSlice from './AuthSlice';
import UserSlice from './UserSlice';

// Configuration for auth slice persistence
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'user'], // Add the properties you want to persist from the auth slice
};

// Configuration for user slice persistence
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['userData' ,"selectedUser"], // Add the properties you want to persist from the user slice
};

// Combine the reducers with persistence
const rootReducer = combineReducers({
  sideNavLayout: Sidenavlayoutslice,
  auth: persistReducer(authPersistConfig, AuthSlice),
  user: persistReducer(userPersistConfig, UserSlice),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
