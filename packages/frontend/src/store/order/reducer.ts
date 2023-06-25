import { createSlice } from '@reduxjs/toolkit';
import type { CardShopProps, IOrdesResponse } from 'common/interfaces';
import { submitOrder, userOrders } from './actions';

interface OrderState {
  products: CardShopProps[];
  orders: IOrdesResponse[];
  loading: boolean;
}

const initialState: OrderState = {
  products: [],
  orders: [],
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

    builder.addCase(userOrders.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(userOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });

    builder.addCase(userOrders.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const orderReducer = orderSlice.reducer;
