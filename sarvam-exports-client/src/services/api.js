// src/services/api.js
import axios from 'axios';
import { store } from '../store'; // Import the Redux store

const API_URL = 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_URL,
});

// This is the new part: an interceptor that adds the token to every request
api.interceptors.request.use((config) => {
  const token = store.getState().auth.token; // Get token from Redux state
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;