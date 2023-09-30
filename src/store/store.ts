import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { authModalReducer } from './reducers/authModalSlice';
import { authReducer } from './reducers/authSlice';
import { cartPageReducer } from '../pages/HomePage/components/Cart/cartSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './currentUserSlice';
import { pizzaSettingsReducer } from './reducers/pizzaSettingsSlice';
import { signInReducer } from './reducers/signInSlice';
import { signUpReducer } from './reducers/signUpSlice';
import { userAccountModalReducer } from './reducers/userAccountModalSlice';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  authUser: authReducer,
  cartPage: cartPageReducer,
  authModal: authModalReducer,
  signInModal: signInReducer,
  signUpModal: signUpReducer,
  userAccountModal: userAccountModalReducer,
  pizzaSettingsModal: pizzaSettingsReducer,
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
