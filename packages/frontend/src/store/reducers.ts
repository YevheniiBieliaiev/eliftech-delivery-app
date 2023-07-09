import type { PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, AUTH_TYPES } from './auth';
import { shopReducer } from './shop';
import { cartReducer } from './cart';
import { orderReducer } from './order';
import { toastReducer } from './toast';
import { geoReducer } from './geo-position';

const combinedReducers = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  cart: cartReducer,
  order: orderReducer,
  toast: toastReducer,
  geo: geoReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;

export const rootReducer = (
  state: RootState,
  action: PayloadAction<string>,
) => {
  if (action.payload === AUTH_TYPES.SIGNOUT) {
    state = {} as RootState;
  }

  return combinedReducers(state, action);
};
