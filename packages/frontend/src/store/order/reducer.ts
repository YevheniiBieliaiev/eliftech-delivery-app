import { createSlice } from '@reduxjs/toolkit';
import type { CardShopProps } from 'common/interfaces';
import { submitOrder } from './actions';

interface OrderState {
  products: CardShopProps[];
  loading: boolean;
}

const initialState: OrderState = {
  products: [],
  loading: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(submitOrder.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(submitOrder.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const orderReducer = orderSlice.reducer;
