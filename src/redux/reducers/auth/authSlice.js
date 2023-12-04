import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
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
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      console.log(action);
    });
  },
});
export default authSlice.reducer;
