import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Product } from '../../../../models/Product';
import { RootState } from '../../../../store/store';

export type ProductInCart = Product & { count: number; isDeleted: boolean };

interface CartPage {
  items: ProductInCart[];
  minPrice: number;
  maxPrice: number;
}

const initialState: CartPage = {
  items: [],
  minPrice: 0,
  maxPrice: 100000,
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
    clearCart: (state) => {
      state.items = [];
    },
    changeCount: (state, action: PayloadAction<{ id: string; isMore: boolean }>) => {
      const item = state.items.find((item) => item._id === action.payload.id);
    },
    changeCountProductInCart: (state, action: PayloadAction<{ id: string; addOrDelete: boolean }>) => {
      const prod = state.items.find((item) => item._id === action.payload.id);

      if (prod) {
        prod.count = action.payload.addOrDelete ? prod.count + 1 : prod.count > 1 ? prod.count - 1 : prod.count;
      }
    },
  },
});

export const { addToCart, changeCountProductInCart } = cartPageSlice.actions;

export const selectCartItems = (state: RootState) => state.cartPage.items;
export const selectCartItemsSum = (state: RootState) =>
  state.cartPage.items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

export const cartPageReducer = cartPageSlice.reducer;
