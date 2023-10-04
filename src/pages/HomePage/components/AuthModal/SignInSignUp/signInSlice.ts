import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../../store/store';

const initialState = {
  isOpen: false,
};

export const signInModalSlice = createSlice({
  name: 'signInModal',
  initialState,
  reducers: {
    openSignIn: (state) => {
      state.isOpen = true;
    },
    closeSignIn: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSignIn, closeSignIn } = signInModalSlice.actions;
export const signInModalInfo = (state: RootState) => state.signInModal.isOpen;
export const signInReducer = signInModalSlice.reducer;
