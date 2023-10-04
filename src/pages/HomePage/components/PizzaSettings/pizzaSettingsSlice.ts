import { Options } from '../../../../components/SwitchSelector/SwitchSelector';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../../models/Product';
import { RootState } from '../../../../store/store';
import { Topping } from './ToppingIcon';

interface PizzaState {
  customPizza: CustomPizza;
}

export type CustomPizza = Product & ChoosingOptions;

export interface PizzaOptions {
  isOpen: boolean;
  size: Options[];
  dough: Options[];
  toppings: Topping[];
}

export interface ChoosingOptions {
  size?: ChoosingSize;
  dough?: ChoosingDough;
  toppings?: ChoosingTopping[];
}

export interface ChoosingSize {
  label: symbol;
  value: number;
  rate: number;
  weight: number;
}

export interface ChoosingDough {
  type: string;
  label: string;
  rate: number;
}

export interface ChoosingTopping {
  _id: number;
  name: string;
  price: number;
}

const initialState: { isActive: boolean; customPizza?: CustomPizza } = { isActive: false };

export const pizzaSettingsSlice = createSlice({
  name: 'pizzaSettingsModal',
  initialState,
  reducers: {
    openPizzaSettings: (state, action: PayloadAction<Product>) => {
      //debugger;
      state.customPizza = action.payload;
      state.isActive = true;
    },
    closePizzaSettings: (state) => {
      state.isActive = false;
    },
  },
});

export const { openPizzaSettings, closePizzaSettings } = pizzaSettingsSlice.actions;

export const pizzaCustomSettings = (state: RootState) => state.pizzaSettingsModal;
export const pizzaSettingsModalInfo = (state: RootState) => state.pizzaSettingsModal.isActive;
export const pizzaSettingsReducer = pizzaSettingsSlice.reducer;
