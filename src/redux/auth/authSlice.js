import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  username: '',
  displayName: '',
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  //THE EXTRAREDUCERS "builder callback" NOTATION
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.displayName = action.payload.displayName;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.username = '';
        state.displayName = '';
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.displayName = action.payload.displayName;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
