import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './products';

let reducers = combineReducers({
  products: ProductsSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
