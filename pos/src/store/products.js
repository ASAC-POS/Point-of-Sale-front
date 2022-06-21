import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';
const api = 'http://localhost:3002';

const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addProducts: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default ProductsSlice.reducer;
export const { getProducts, addProducts } = ProductsSlice.actions;

export const getProductsFromAPI = (token) => async (dispatch, state) => {
  console.log(token);
  try {
    const respons = await superagent
      .get(`${api}/products`)
      .query({ cookie: cookie.load('storeID') })
      .set('Authorization', `Bearer ${token}`);
    console.log(respons.body);
    dispatch(getProducts(respons.body));
  } catch (err) {
    console.log(err);
  }
};

export const addNewProduct = (item) => async (dispatch, state) => {
  await superagent.post(`${api}/products`, item);
  dispatch(addProducts(item));
};
