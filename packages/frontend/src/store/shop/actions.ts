import { createAsyncThunk } from '@reduxjs/toolkit';
import { shopProducts } from 'services';
import type { HttpError } from 'helpers';
import { SHOP_TYPES } from './action-types';

export const getProducts = createAsyncThunk(
  SHOP_TYPES.GET_SHOP_PRODUCTS,
  (_data, { rejectWithValue }) =>
    shopProducts()
      .then((response) => response)
      .catch((error: HttpError) => rejectWithValue(error.message)),
);
