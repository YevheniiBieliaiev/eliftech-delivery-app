import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IShopResponse } from 'common/interfaces';
import { getProducts } from './actions';

interface ShopState {
  shopProducts: IShopResponse[];
  loading: boolean;
  shopName: string;
}

const initialState: ShopState = {
  shopProducts: [],
  loading: false,
  shopName: 'all',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    shopNameFilter(state, action: PayloadAction<{ shopName: string }>) {
      state.shopName = action.payload.shopName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.shopProducts = [...action.payload];
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const shopReducer = shopSlice.reducer;

export const { shopNameFilter } = shopSlice.actions;
