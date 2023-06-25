import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import type { IAddToast, IToast } from 'common/interfaces';
import { ToastDuration } from 'common/enums';
import { TOAST_TYPES } from './action-types';
import { deleteToast } from './reducer';

export const addToast = createAsyncThunk(
  TOAST_TYPES.ADD_TOAST,
  ({ level, description }: IAddToast, { dispatch }) => {
    const id = nanoid();

    setTimeout(() => {
      dispatch(deleteToast({ toastId: id }));
    }, ToastDuration[level]);

    return <IToast>{
      id,
      level,
      description,
    };
  },
);
