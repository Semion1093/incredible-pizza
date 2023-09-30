import { cartPageReducer } from '../pages/HomePage/components/ProductCard/productCartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { userAccountModalReducer } from '../components/UserAccountModal/userAccountModalSlice';
import { pizzaSettingsReducer } from '../pages/HomePage/components/PizzaSettings/pizzaSettingsSlice';
import { authReducer } from './authSlice';
import { currentUserReducer } from './currentUserSlice';
import { authModalReducer } from '../pages/HomePage/components/AuthModal/authModalSlice';
import { signInReducer } from '../pages/HomePage/components/AuthModal/SignInSignUp/signInSlice';
import { signUpReducer } from '../pages/HomePage/components/AuthModal/SignInSignUp/signUpSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    authUser: authReducer,
    cartPage: cartPageReducer,
    authModal: authModalReducer,
    signInModal: signInReducer,
    signUpModal: signUpReducer,
    userAccountModal: userAccountModalReducer,
    pizzaSettingsModal: pizzaSettingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
