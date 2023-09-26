import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Product } from '../../models/Product';
import { RootState } from '../store';

interface CartPage {
  items: Product[];
  minPrice: number;
  maxPrice: number;
}

const initialState: CartPage = {
  items: [],
  minPrice: 0,
  maxPrice: 100000,
};

const cartPageSlice = createSlice({
  name: 'cartPage',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    changeCount: (state, action: PayloadAction<{ id: number; isMore: boolean }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
    },
  },
});

export const { addToCart } = cartPageSlice.actions;

export const selectCartItems = (state: RootState) => state.cartPage.items;
export const selectCartItemsSum = (state: RootState) =>
  state.cartPage.items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

export const cartPageReducer = cartPageSlice.reducer;
