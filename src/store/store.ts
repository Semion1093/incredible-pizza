import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { cartPageReducer } from '../pages/HomePage/components/Cart/cartSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './currentUserSlice';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  cartPage: cartPageReducer,
});

const persistConfig = {
  key: 'products',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
