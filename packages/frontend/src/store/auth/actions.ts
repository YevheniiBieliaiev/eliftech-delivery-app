import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ISignIn, ISignUp } from '../../common/interfaces';
import type { HttpError } from '../../helpers';
import { signIn, signUp } from '../../services';
import { AUTH_TYPES } from './action-types';

export const userRegister = createAsyncThunk(
  AUTH_TYPES.SIGNUP,
  (data: ISignUp, { rejectWithValue }) =>
    signUp(data)
      .then((response) => response)
      .catch((error: HttpError) => rejectWithValue(error.message)),
);

export const userLogin = createAsyncThunk(
  AUTH_TYPES.SIGNIN,
  (data: ISignIn, { rejectWithValue }) =>
    signIn(data)
      .then((response) => response)
      .catch((error: HttpError) => rejectWithValue(error.message)),
);
