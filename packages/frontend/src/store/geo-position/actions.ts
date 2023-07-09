import { createAsyncThunk } from '@reduxjs/toolkit';
import { geoPosition } from 'services';
import { GEO_TYPES } from './actions-type';

export const startGeoPosition = createAsyncThunk(
  GEO_TYPES.SET_START_POSITION,
  (_date, { rejectWithValue }) =>
    geoPosition()
      .then((position) => position)
      .catch((position) => rejectWithValue(position)),
);
