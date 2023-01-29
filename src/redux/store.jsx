import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productsSlice';

export default configureStore({
  reducer: {
    products: productSlice,
  },
});
