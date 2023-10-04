import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

const initialState = {
  isOpen: false,
};

export const userAccountModalSlice = createSlice({
  name: 'userAccountModal',
  initialState,
  reducers: {
    openUserAccountModal: (state) => {
      state.isOpen = true;
    },
    closeUserAccountModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openUserAccountModal, closeUserAccountModal } = userAccountModalSlice.actions;
export const userAccountModalInfo = (state: RootState) => state.userAccountModal.isOpen;
export const userAccountModalReducer = userAccountModalSlice.reducer;
