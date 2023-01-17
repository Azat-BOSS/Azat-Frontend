import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { modalSlice } from './Services/modalReducer.js';
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import App from './App.jsx';

const rootReducer = combineReducers({
    modalSlice: modalSlice.reducer
})
const store = configureStore({
  reducer: rootReducer
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

