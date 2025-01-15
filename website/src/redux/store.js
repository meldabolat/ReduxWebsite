import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Default export ile doğru import

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
