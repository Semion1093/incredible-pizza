import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  isOpen: false,
};

export const signInOrSignUpModalSlice = createSlice({
  name: 'signInOrSignUpModal',
  initialState,
  reducers: {
    openAuthModal: (state) => {
      state.isOpen = true;
    },
    closeAuthModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = signInOrSignUpModalSlice.actions;
export const signInOrSignUpModalInfo = (state: RootState) => state.signInOrSignUpModal.isOpen;
export const signInOrSignUpReducer = signInOrSignUpModalSlice.reducer;
