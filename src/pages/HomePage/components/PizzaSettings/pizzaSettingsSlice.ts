import { Options } from '../../../../components/SwitchSelector/SwitchSelector';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../../models/Product';
import { RootState } from '../../../../store/store';
import { Topping } from './ToppingIcon';

interface PizzaState {
  customPizza: CustomPizza;
}

export type CustomPizza = Product & PizzaOptions;

export interface PizzaOptions {
  isOpen: boolean;
  size: Options[];
  dough: Options[];
  toppings: Topping[];
}

export interface ChoosingOptions {
  size: ChoosingSize;
  dough: ChoosingDough;
  toppings: ChoosingTopping[];
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

const initialState: CustomPizza = {
  isOpen: false,
  size: [
    { value: '22', label: '22 см', rate: 1 },
    { value: '28', label: '28 см', rate: 1.6 },
    { value: '34', label: '34 см', rate: 2.1 },
  ],
  dough: [
    { value: 'traditional', label: 'Традиционное', rate: 1.05 },
    { value: 'thin', label: 'Тонкое', rate: 1 },
  ],
  toppings: [Topping.Bacon, Topping.Cheddar, Topping.Champignons, Topping.Jalapeno],
  _id: '',
  title: 'Easy Peasy Chicken',
  price: 500,
  img: 'https://194.87.210.5:5000/incredible-pizza/products/pizza/06.webp',
  description: '',
};

export const pizzaSettingsSlice = createSlice({
  name: 'pizzaSettingsModal',
  initialState,
  reducers: {
    openPizzaSettings: (state, action: PayloadAction<Product>) => {
      state.isOpen = true;
      state._id = action.payload._id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.labelText = action.payload.labelText;
      state.img = action.payload.img;
      state.price = action.payload.price;
    },
    closePizzaSettings: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPizzaSettings, closePizzaSettings } = pizzaSettingsSlice.actions;
export const pizzaCustomSettings = (state: RootState) => state.pizzaSettingsModal as CustomPizza;
export const pizzaSettingsModalInfo = (state: RootState) => state.pizzaSettingsModal.isOpen;
export const pizzaSettingsReducer = pizzaSettingsSlice.reducer;
