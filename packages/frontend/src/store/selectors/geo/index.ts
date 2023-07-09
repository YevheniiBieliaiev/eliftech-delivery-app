import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';

const position = (state: RootState) => state.geo.position;
const loading = (state: RootState) => state.geo.loading;

export const geoPosition = createSelector(position, (position) => position);
export const geoLoading = createSelector(loading, (loading) => loading);
