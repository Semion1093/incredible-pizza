import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { authModalReducer } from '../pages/HomePage/components/AuthModal/authModalSlice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import { authModalReducer } from '../pages/HomePage/components/AuthModal/authModalSlice';
import { authReducer } from './authSlice';
import { cartPageReducer } from '../pages/HomePage/components/ProductCard/productCartSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './currentUserSlice';
import { pizzaSettingsReducer } from '../pages/HomePage/components/PizzaSettings/pizzaSettingsSlice';
import { signInReducer } from '../pages/HomePage/components/AuthModal/SignInSignUp/signInSlice';
import { signUpReducer } from '../pages/HomePage/components/AuthModal/SignInSignUp/signUpSlice';
import { userAccountModalReducer } from '../components/UserAccountModal/userAccountModalSlice';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  cartPage: cartPageReducer,
  authModal: authModalReducer,
  signInModal: signInReducer,
  signUpModal: signUpReducer,
  userAccountModal: userAccountModalReducer,
  pizzaSettingsModal: pizzaSettingsReducer,
  authUser: authReducer,
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
