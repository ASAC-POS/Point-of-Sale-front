import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './products';
import storeSlice from './stores';
import usersSlice from './users';
import popupSlice from './popups';
let reducers = combineReducers({
  products: ProductsSlice,
  store: storeSlice,
  users: usersSlice,
  popup: popupSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
