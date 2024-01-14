import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Sidenavlayoutslice from './Sidenavlayoutslice';
import AuthSlice from './AuthSlice';
import UserSlice from './UserSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'user'], 
};
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['userData' ,"selectedUser"], 
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
