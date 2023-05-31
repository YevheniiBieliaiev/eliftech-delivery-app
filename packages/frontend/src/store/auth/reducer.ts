import { createSlice } from '@reduxjs/toolkit';
import type { IUserResponse } from 'common/interfaces';
import { userRegister, userLogin } from './actions';

interface AuthState extends IUserResponse {
  loading: boolean;
}

const initialState: AuthState = {
  id: '',
  name: '',
  email: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      const { name, id, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.loading = false;
    });
    builder.addCase(userRegister.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      const { id, name, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.loading = false;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
