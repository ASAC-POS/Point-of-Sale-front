import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './products';
import storeSlice from './stores';
import usersSlice from './users';
import popupSlice from './popups';
import receiptsSlice from './receipts';

let reducers = combineReducers({
  products: ProductsSlice,
  store: storeSlice,
  users: usersSlice,
  popup: popupSlice,
  receipts:receiptsSlice
});

const store = configureStore({
  reducer: reducers,
});

export default store;
