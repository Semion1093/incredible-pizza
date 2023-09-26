import { cartPageReducer } from './reducers/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer } from './reducers/currentUserSlice';
import { signInOrSignUpReducer } from './reducers/signInOrSignUpSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    cartPage: cartPageReducer,
    signInOrSignUpModal: signInOrSignUpReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
