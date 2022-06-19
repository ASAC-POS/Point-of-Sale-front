import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
const api = 'https://debuggers-pos.herokuapp.com';

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

export const getProductsFromAPI = () => async (dispatch, state) => {
  const respons = await superagent.get(`${api}/products`);
  console.log(respons.body);
  dispatch(getProducts(respons.body));
};

export const addNewProduct = (item) => async (dispatch, state) => {
  await superagent.post(`${api}/products`, item);
  dispatch(addProducts(item));
};
