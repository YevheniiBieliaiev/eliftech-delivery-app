import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';

const toasts = (state: RootState) => state.toast.toastList;

export const toastStack = createSelector(toasts, (toasts) => toasts);
