// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('adminToken') || null,
  isAuthenticated: !!localStorage.getItem('adminToken'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdminCredentials(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('adminToken', action.payload.token);
    },
    adminLogout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('adminToken');
    },
  },
});

export const { setAdminCredentials, adminLogout } = authSlice.actions;
export default authSlice.reducer;