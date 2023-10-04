import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { UserRegistered } from '../models/UserRegistered';

interface tryRegisteredUser {
  userRegisteredData?: UserRegistered;
}

const initialState: tryRegisteredUser = {
  userRegisteredData: undefined,
};

export const tryUserSlice = createSlice({
  name: 'tryUser',
  initialState,
  reducers: {
    loadTryOfUser: (state, action: PayloadAction<UserRegistered>) => {
      state.userRegisteredData = {
        email: action.payload.email,
        code: action.payload.code,
      };
    },
  },
});

export const { loadTryOfUser } = tryUserSlice.actions;
export const selectTryOfUser = (state: RootState) => state.tryUser.userRegisteredData;
export const tryOfUserReducer = tryUserSlice.reducer;
