import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  isOpen: false,
};

export const signInOrSignUpModalSlice = createSlice({
  name: 'signInOrSignUpModal',
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

export const { open, close } = signInOrSignUpModalSlice.actions;
export const signInOrSignUpModalInfo = (state: RootState) => state.signInOrSignUpModal.isOpen;
export const signInOrSignUpReducer = signInOrSignUpModalSlice.reducer;
