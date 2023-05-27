import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../reducers';

const loading = (state: RootState) => state.auth.loading;
const id = (state: RootState) => state.auth.id;
const login = (state: RootState) => state.auth.login;
const email = (state: RootState) => state.auth.email;

export const loader = createSelector(loading, (loading) => loading);
export const userId = createSelector(id, (id) => id);
export const userLogin = createSelector(login, (login) => login);
export const userEmail = createSelector(email, (email) => email);
