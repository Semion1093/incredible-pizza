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

function increaseQuantity(cartItems: ProductInCart[], itemId: string) {
  const updatedCart = cartItems.map((item) => {
    if (item._id === itemId) {
      // Увеличиваем количество товара
      item.count += 1;
    }
    return item;
  });
  return updatedCart;
}

function decreaseQuantity(cartItems: ProductInCart[], itemId: string) {
  const updatedCart: ProductInCart[] = cartItems.map((item) => {
    if (item._id === itemId) {
      // Уменьшаем количество товара
      item.count -= 1;
      // Если количество стало меньше или равно нулю, устанавливаем флаг для удаления
      if (item.count <= 0) {
        item.isDeleted = true;
      }
    }
    return item;
  });

  // Фильтруем, чтобы удалить товары, для которых флаг shouldRemove установлен в true
  const filteredCart: ProductInCart[] = updatedCart.filter((item) => !item.isDeleted);

  return filteredCart;
}

const saveAllProductsInStorage = (item: ProductInCart[]) => {
  localStorage.setItem('persist:products', JSON.stringify(item));
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
      let updatedCart;

      if (item) {
        item.count = item.count ?? initialState.initialCount;
        updatedCart = action.payload.addOrDelete
          ? increaseQuantity(state.items, action.payload.id)
          : decreaseQuantity(state.items, action.payload.id);
        item.count = action.payload.addOrDelete ? item.count + 1 : item.count > 1 ? item.count - 1 : item.count;
        if (updatedCart !== null) {
          saveAllProductsInStorage(updatedCart);
        }
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
