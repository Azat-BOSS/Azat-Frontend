import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import modalSlice from './services/modalReducer.js';
import App from './App.jsx';

const rootReducer = combineReducers({
    modalSlice: modalSlice
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

