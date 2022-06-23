import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';

const api = 'https://debuggers-pos.herokuapp.com';
// const api = 'http://localhost:3010';

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
      state.products.push(action.payload);
    },
    editProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((item) => item != action.payload);
    },
    clearProducts: (state, action) => {
      state.products = [];
    },
  },
});

export default ProductsSlice.reducer;
export const { getProducts, addProducts, clearProducts } =
  ProductsSlice.actions;

export const getProductsFromAPI = (token) => async (dispatch, state) => {
  console.log(token);
  try {
    const respons = await superagent
      .get(`${api}/products`)
      .query({ cookie: parseInt(cookie.load('storeID')) })
      .set('Authorization', `Bearer ${token}`);
    console.log(respons.body);
    dispatch(getProducts(respons.body));
  } catch (err) {
    console.log(err);
  }
};

// Add new product
export const addNewProduct = (item) => async (dispatch, state) => {
  console.log(item);
  await superagent
    .post(`${api}/product`)
    .send(item)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query({ cookie: parseInt(cookie.load('storeID')) });
  dispatch(addProducts(item));
};

// Update product
export const editProduct = (updatedItem, itemId) => async (dispatch, state) => {
  console.log(updatedItem, itemId);

  await superagent
    .put(`${api}/product/${itemId}`)
    .send(updatedItem)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query({ cookie: parseInt(cookie.load('storeID')) });
  dispatch(editProduct(updatedItem));
};

// Delete a product
export const deleteProduct = (itemId) => async (dispatch, state) => {
  console.log(111111111111, itemId);
  await superagent
    .delete(`${api}/product/${itemId}`)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query({ cookie: parseInt(cookie.load('storeID')) });
  dispatch(deleteProduct(itemId));
};
