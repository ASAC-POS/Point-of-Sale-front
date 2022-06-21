import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './products';
import storeSlice from './stores';
import usersSlice from './users';
let reducers = combineReducers({
  products: ProductsSlice,
  store: storeSlice,
  users: usersSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
