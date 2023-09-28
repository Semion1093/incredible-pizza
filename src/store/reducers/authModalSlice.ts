import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  isOpen: false,
};

export const authModalSlice = createSlice({
  name: 'authModal',
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

export const { openAuthModal, closeAuthModal } = authModalSlice.actions;
export const authModalInfo = (state: RootState) => state.authModal.isOpen;
export const authModalReducer = authModalSlice.reducer;
