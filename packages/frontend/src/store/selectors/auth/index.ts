import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';

const loading = (state: RootState) => state.auth.loading;
const id = (state: RootState) => state.auth.id;
const name = (state: RootState) => state.auth.name;
const email = (state: RootState) => state.auth.email;

export const userLoader = createSelector(loading, (loading) => loading);
export const userId = createSelector(id, (id) => id);
export const userName = createSelector(name, (name) => name);
export const userEmail = createSelector(email, (email) => email);

export const cartUserData = createSelector([name, email], (name, email) => ({
  name,
  email,
}));
