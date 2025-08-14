// src/store/inquirySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inquiries: [],
  loading: false,
};

const inquirySlice = createSlice({
  name: 'inquiries',
  initialState,
  reducers: {
    setInquiries(state, action) {
      state.inquiries = action.payload;
    },
    setInquiriesLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setInquiries, setInquiriesLoading } = inquirySlice.actions;
export default inquirySlice.reducer;