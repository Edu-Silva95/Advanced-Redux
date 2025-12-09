import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice.jsx';
import uiReducer from './ui-slice.jsx';

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
