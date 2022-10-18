import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { auth: '' },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload.auth;
      return state;
    },
    logout: (state) => {
      state.auth = '';
      localStorage.removeItem('user');
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
