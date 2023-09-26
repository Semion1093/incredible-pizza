import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  isOpen: false,
};

export const signInModalSlice = createSlice({
  name: 'signInModal',
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

export const { open, close } = signInModalSlice.actions;
export const signInModalInfo = (state: RootState) => state.signInModal.isOpen;
export const signInReducer = signInModalSlice.reducer;
