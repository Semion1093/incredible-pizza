import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../../store/store';

const initialState = {
  isOpen: false,
};

export const codeEnterSlice = createSlice({
  name: 'codeEnter',
  initialState,
  reducers: {
    openCodeEnter: (state) => {
      state.isOpen = true;
    },
    closeCodeEnter: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openCodeEnter, closeCodeEnter } = codeEnterSlice.actions;
export const codeEnterlInfo = (state: RootState) => state.codeEnter.isOpen;
export const codeEnterReducer = codeEnterSlice.reducer;
