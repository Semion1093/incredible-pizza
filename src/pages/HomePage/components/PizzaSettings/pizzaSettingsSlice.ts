import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../../store/store';

const initialState = {
  isOpen: false,
};

export const pizzaSettingslSlice = createSlice({
  name: 'pizzaSettingsModal',
  initialState,
  reducers: {
    openPizzaSettings: (state) => {
      state.isOpen = true;
    },
    closePizzaSettings: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPizzaSettings, closePizzaSettings } = pizzaSettingslSlice.actions;
export const pizzaSettingsModalInfo = (state: RootState) => state.pizzaSettingsModal.isOpen;
export const pizzaSettingsReducer = pizzaSettingslSlice.reducer;
