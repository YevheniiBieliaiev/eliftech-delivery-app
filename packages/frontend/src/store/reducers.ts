import type { PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, AUTH_TYPES } from './auth';
import { shopReducer } from './shop';

const combinedReducers = combineReducers({
  auth: authReducer,
  shop: shopReducer,
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
