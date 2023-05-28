import { configureStore, type Reducer } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer as Reducer,
});

export type AppDispatch = typeof store.dispatch;
