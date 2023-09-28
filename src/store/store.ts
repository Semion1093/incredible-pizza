import { cartPageReducer } from './reducers/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './reducers/currentUserSlice';
import { authModalReducer } from './reducers/authModalSlice';
import { signInReducer } from './reducers/signInSlice';
import { signUpReducer } from './reducers/signUpSlice';
import { userAccountModalReducer } from './reducers/userAccountModalSlice';
import { pizzaSettingsReducer } from './reducers/pizzaSettingsSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
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
