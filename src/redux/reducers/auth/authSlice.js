import { createSlice } from '@reduxjs/toolkit';
import { login, logout, me, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    email: null,
    token: null,
    isLoding: false,
  },

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;

        console.log(action.payload);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
      })
      .addCase(me.fulfilled, (state, action) => {
        state.isLoggedIn = true;
      });
  },
});
export default authSlice.reducer;
