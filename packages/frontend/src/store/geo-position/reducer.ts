import { createSlice } from '@reduxjs/toolkit';
import { startGeoPosition } from './actions';

interface GeoState {
  position: google.maps.MapOptions;
  loading: boolean;
}

const initialState: GeoState = {
  position: {},
  loading: false,
};

const geoSlice = createSlice({
  name: 'geo-position',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startGeoPosition.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(startGeoPosition.fulfilled, (state, action) => {
      state.position = action.payload;
      state.loading = false;
    });
    builder.addCase(startGeoPosition.rejected, (state, action) => {
      state.position = action.payload as google.maps.MapOptions;
      state.loading = false;
    });
  },
});

export const geoReducer = geoSlice.reducer;
