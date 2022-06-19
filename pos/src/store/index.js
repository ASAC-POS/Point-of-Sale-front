import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './products';

let reducers = combineReducers({
  productss: ProductsSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
