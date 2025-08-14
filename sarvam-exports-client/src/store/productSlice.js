// src/store/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    removeProduct(state, action) {
      state.products = state.products.filter(p => p._id !== action.payload);
    },
    setProductsLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, removeProduct, setProductsLoading } = productSlice.actions;
export default productSlice.reducer;