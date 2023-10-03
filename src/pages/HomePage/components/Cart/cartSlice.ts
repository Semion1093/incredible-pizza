import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Product } from '../../../../models/Product';
import { RootState } from '../../../../store/store';

export type ProductInCart = Product & { count: number; isDeleted: boolean };

interface CartPage {
  items: ProductInCart[];
  minPrice: number;
  maxPrice: number;
  initialCount: number;
}

const initialState: CartPage = {
  items: [],
  minPrice: 0,
  maxPrice: 100000,
  initialCount: 1,
};

const saveAllProductsInStorage = (item: ProductInCart[]) => {
  localStorage.setItem('products', JSON.stringify(item));
};

const cartPageSlice = createSlice({
  name: 'cartPage',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
    },
    changeCountProductInCart: (state, action: PayloadAction<{ id: string; addOrDelete: boolean }>) => {
      const item = state.items.find((item) => item._id === action.payload.id);

      if (item) {
        item.count = item.count ?? initialState.initialCount;
        item.count = action.payload.addOrDelete ? item.count + 1 : item.count > 1 ? item.count - 1 : item.count;
      }
    },
    changeProductPrice: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((item) => item._id === action.payload.id);

      if (item) {
        item.price += item.price;
      }
    },
  },
});

export const { addToCart, changeCountProductInCart, changeProductPrice } = cartPageSlice.actions;

export const selectCartItems = (state: RootState) => state.cartPage.items;
export const selectCartItemsSum = (state: RootState) =>
  state.cartPage.items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

export const cartPageReducer = cartPageSlice.reducer;
