import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';

const chosenProducts = (state: RootState) => state.cart.chosenProducts;

export const cartCounter = createSelector(
  chosenProducts,
  (chosenProducts) => chosenProducts.length,
);
export const cart = createSelector(
  chosenProducts,
  (chosenProducts) => chosenProducts,
);
