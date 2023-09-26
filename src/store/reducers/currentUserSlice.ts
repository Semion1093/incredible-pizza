import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../models/User';

interface CurrentUser {
  userData?: User;
}

const initialState: CurrentUser = {
  userData: undefined,
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    loadUser: (state, action: PayloadAction<User>) => {
      state.userData = { id: action.payload.id, email: action.payload.email, fullName: action.payload.fullName };
    },
    logOut: (state) => {
      state.userData = undefined;
    },
  },
});

export const { loadUser, logOut } = currentUserSlice.actions;
export const selectCurrentUser = (state: RootState) => state.currentUser.userData;
export const currentUserReducer = currentUserSlice.reducer;
