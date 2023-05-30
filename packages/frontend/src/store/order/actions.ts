import { createAsyncThunk } from '@reduxjs/toolkit';
import type { HttpError } from 'helpers';
import type { IOrderRequest } from 'common/interfaces';
import { sendOrder } from 'services';
import { ORDER_TYPES } from './action-types';

export const submitOrder = createAsyncThunk(
  ORDER_TYPES.SEND_ORDER,
  (data: IOrderRequest, { rejectWithValue }) =>
    sendOrder(data)
      .then((response) => response)
      .catch((error: HttpError) => rejectWithValue(error.message)),
);
