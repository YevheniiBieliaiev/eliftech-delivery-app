import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NavigateFunction } from 'react-router-dom';
import type { ISignIn, ISignUp } from 'common/interfaces';
import { ClientRoutes } from 'common/enums';
import type { HttpError } from 'helpers';
import { signIn, signUp } from 'services';
import { addToast } from 'store/toast';
import { AUTH_TYPES } from './action-types';

export const userRegister = createAsyncThunk(
  AUTH_TYPES.SIGNUP,
  (
    { data, navigate }: { data: ISignUp; navigate: NavigateFunction },
    { rejectWithValue, dispatch },
  ) =>
    signUp(data)
      .then((response) => {
        navigate(ClientRoutes.HOME);

        return response;
      })
      .catch((error: HttpError) => {
        dispatch(addToast({ level: 'error', description: error.message }));

        return rejectWithValue(error.message);
      }),
);

export const userLogin = createAsyncThunk(
  AUTH_TYPES.SIGNIN,
  (
    { data, navigate }: { data: ISignIn; navigate: NavigateFunction },
    { rejectWithValue, dispatch },
  ) =>
    signIn(data)
      .then((response) => {
        navigate(ClientRoutes.HOME);

        return response;
      })
      .catch((error: HttpError) => {
        dispatch(addToast({ level: 'error', description: error.message }));

        return rejectWithValue(error.message);
      }),
);
