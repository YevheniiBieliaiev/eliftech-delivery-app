import { createSlice } from '@reduxjs/toolkit';
import type { IShopResponse } from '../../common/interfaces';
import { getProducts } from './actions';

interface ShopState {
  shopProducts: IShopResponse[];
  loading: boolean;
}

const initialState: ShopState = {
  shopProducts: [],
  loading: false,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
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
