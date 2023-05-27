import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../reducers';

const products = (state: RootState) => state.shop.shopProducts;
const loading = (state: RootState) => state.shop.loading;

export const shopProducts = createSelector(products, (products) => products);
export const loader = createSelector(loading, (loading) => loading);
