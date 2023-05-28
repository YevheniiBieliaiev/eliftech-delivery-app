import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';

const products = (state: RootState) => state.shop.shopProducts;
const loading = (state: RootState) => state.shop.loading;
const shop = (state: RootState) => state.shop.shopName;

export const shopProducts = createSelector(products, (products) => products);
export const shopLoader = createSelector(loading, (loading) => loading);
export const shopName = createSelector(shop, (shop) => shop);
