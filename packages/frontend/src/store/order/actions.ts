import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HttpError } from 'helpers';
import type { IOrderRequest, IOrderIdentifier } from 'common/interfaces';
import { sendOrder, getOrders } from 'services';
import { addToast } from 'store/toast';
import { ORDER_TYPES } from './action-types';

export const submitOrder = createAsyncThunk(
  ORDER_TYPES.SEND_ORDER,
  (data: IOrderRequest, { rejectWithValue, dispatch }) =>
    sendOrder(data)
      .then((response) => {
        dispatch(
          addToast({ level: 'success', description: 'Order is accepted' }),
        );

        return response;
      })
      .catch((error: HttpError) => {
        dispatch(
          addToast({
            level: 'error',
            description: error.message,
          }),
        );

        return rejectWithValue(error.message);
      }),
);

export const userOrders = createAsyncThunk(
  ORDER_TYPES.GET_ORDERS,
  (data: IOrderIdentifier, { rejectWithValue, dispatch }) =>
    getOrders(data)
      .then((response) => {
        if (!response.length) {
          dispatch(
            addToast({
              level: 'error',
              description: 'No orders with the specified identifier',
            }),
          );
        }

        return response;
      })
      .catch((error: HttpError) => {
        dispatch(addToast({ level: 'error', description: error.message }));

        return rejectWithValue(error.message);
      }),
);
