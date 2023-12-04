import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = '"https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
