import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';

const loading = (state: RootState) => state.order.loading;
const products = (state: RootState) => state.order.products;

export const orderLoader = createSelector(loading, (loading) => loading);
export const orderProducts = createSelector(products, (products) => products);
