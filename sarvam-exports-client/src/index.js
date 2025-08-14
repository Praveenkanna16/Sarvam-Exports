// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // <-- Import Provider
import { store } from './store'; // <-- Import store
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* <-- Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);