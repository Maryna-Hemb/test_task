import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://expa.fly.dev';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      console.log(res.data.token);
      return res.data;
    } catch (error) {
      return alert('Bad request. Try another email or password');
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/refresh', credentials);
      setAuthHeader(res.data.token);
      console.log(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
