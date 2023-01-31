import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slice/productsSlice';
import cartSlice from './slice/cartSlice';
import toastSlice from './slice/toastSlice';


export const store =  configureStore({
  reducer: {
    productsData: productSlice,
    cartData: cartSlice,
    toastData:toastSlice
  },
});
