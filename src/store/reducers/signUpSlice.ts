import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  isOpen: false,
};

export const signUpModalSlice = createSlice({
  name: 'signUpModal',
  initialState,
  reducers: {
    openSignUp: (state) => {
      state.isOpen = true;
    },
    closeSignUp: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSignUp, closeSignUp } = signUpModalSlice.actions;
export const signUpModalInfo = (state: RootState) => state.signUpModal.isOpen;
export const signUpReducer = signUpModalSlice.reducer;
