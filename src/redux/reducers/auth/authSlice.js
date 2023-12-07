import { createSlice } from '@reduxjs/toolkit';
import { login, logout, me, register } from './operations';


const initialState = {
  isLoggedIn: false,
  user: null,
  email: null,
  token: null,
  isLoding: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(me.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.data.name;
      });
  },
});
export default authSlice.reducer;
