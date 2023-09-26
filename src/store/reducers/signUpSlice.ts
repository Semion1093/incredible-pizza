import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  isOpen: false,
};

export const signUpModalSlice = createSlice({
  name: 'signUpModal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = signUpModalSlice.actions;
export const signUpModalInfo = (state: RootState) => state.signUpModal.isOpen;
export const signUpReducer = signUpModalSlice.reducer;
