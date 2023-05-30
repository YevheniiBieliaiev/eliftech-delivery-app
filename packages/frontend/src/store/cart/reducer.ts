import { createSlice } from '@reduxjs/toolkit';
import type { CardShopProps } from 'common/interfaces';
import { storage } from 'helpers';

interface CartState {
  chosenProducts: CardShopProps[];
}

const initialState: CartState = {
  chosenProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getLocalCart(state) {
      const data = storage.get('cart') as CardShopProps[];
      state.chosenProducts = data;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { getLocalCart } = cartSlice.actions;
