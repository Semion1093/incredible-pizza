import { CustomPizza } from '../PizzaSettings/pizzaSettingsSlice';
import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Product } from '../../../../models/Product';
import { RootState } from '../../../../store/store';

export type ProductInCart = Product & { count: number; isDeleted: boolean };

interface CartPage {
  items: ProductInCart[];
}

const initialState: CartPage = {
  items: [],
};

function increaseQuantity(cartItems: ProductInCart[], itemId: string) {
  const updatedCart = cartItems.map((item) => {
    if (item._id === itemId) {
      item.count += 1;
    }
    return item;
  });
  return updatedCart;
}

function decreaseQuantity(cartItems: ProductInCart[], itemId: string) {
  const updatedCart: ProductInCart[] = cartItems.map((item) => {
    if (item._id === itemId) {
      item.count -= 1;
      if (item.count <= 0) {
        item.isDeleted = true;
      }
    }
    return item;
  });
  return updatedCart;
}

const cartPageSlice = createSlice({
  name: 'cartPage',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInCart>) => {
      //debugger;
      if (isNaN(action.payload.count)) action.payload.count = 1;
      if (state.items.find((item) => item._id === action.payload._id)) increaseQuantity(state.items, action.payload._id);
      else state.items.push(action.payload);
    },
    changeCountOfProductInCart: (state, action: PayloadAction<{ id: string; addOrDelete: boolean }>) => {
      const item = state.items.find((item) => item._id === action.payload.id);

      if (item) {
        state.items = action.payload.addOrDelete
          ? increaseQuantity(state.items, action.payload.id)
          : decreaseQuantity(state.items, action.payload.id);
      }
    },
    cleanCartBuffer: (state) => {
      state.items = state.items.filter((item) => item.isDeleted !== true);
    },
  },
});

export const { addToCart, changeCountOfProductInCart, cleanCartBuffer } = cartPageSlice.actions;

export const selectCartItems = (state: RootState) => state.cartPage.items;
export const selectCartItemsSum = (state: RootState) =>
  state.cartPage.items.reduce((acc, current) => {
    return acc + current.price * current.count;
  }, 0);

export const cartPageReducer = cartPageSlice.reducer;
