import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {productsApi} from './redux/slice/apiSlice'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productsApi}>
    <App />
    </ApiProvider>
    </Provider>
  </React.StrictMode>
);

