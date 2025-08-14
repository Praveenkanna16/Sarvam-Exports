// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import inquiryReducer from './inquirySlice';
import productReducer from './productSlice'; // <-- Import new reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    inquiries: inquiryReducer,
    products: productReducer, // <-- Add new reducer
  },
});