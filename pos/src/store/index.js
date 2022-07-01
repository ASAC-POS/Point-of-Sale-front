import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './products';
import storeSlice from './stores';
import usersSlice from './users';
import popupSlice from './popups';
import receiptsSlice from './receipts';
import checkoutSlice from './checkout-reducer';

let reducers = combineReducers({
  products: ProductsSlice,
  store: storeSlice,
  users: usersSlice,
  popup: popupSlice,
  receipts:receiptsSlice,
  checkout: checkoutSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
