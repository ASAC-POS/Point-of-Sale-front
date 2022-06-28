import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';

// const api = 'https://debuggers-pos.herokuapp.com';
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
      state.products.push(action.payload);
    },
    deleteProducts: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    clearProducts: (state, action) => {
      state.products = [];
    },
    deductProduct: (state, action) => {
      let curProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      curProduct.quantity -= action.payload.quantity;
    },
    incrementProduct: (state, action) => {
      let curProduct = state.products.find(
        (product) => product.id === action.payload.productID
      );
      curProduct.quantity++;
    },
    returnAll: (state, action) => {
      let curProduct = state.products.find(
        (product) => product.id === action.payload.productID
      );
      curProduct.quantity += action.payload.quantity;
    },
  },
});

export default ProductsSlice.reducer;
export const {
  getProducts,
  addProducts,
  clearProducts,
  editProducts,
  deleteProducts,
  deductProduct,
  incrementProduct,
  returnAll,
} = ProductsSlice.actions;

export const getProductsFromAPI = (token) => async (dispatch, state) => {
  try {
    const respons = await superagent
      .get(`${api}/products`)
      .query({ cookie: parseInt(cookie.load('storeID')) })
      .set('Authorization', `Bearer ${token}`);
    dispatch(getProducts(respons.body));
  } catch (err) {}
};

// Add new product
export const addNewProduct = (item) => async (dispatch, state) => {
  const response = await superagent
    .post(`${api}/product`)
    .send(item)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query({ cookie: parseInt(cookie.load('storeID')) });
  dispatch(addProducts(response.body));
};

// Update product
export const editProduct = (updatedItem, itemId) => async (dispatch, state) => {
  console.log(updatedItem);
  console.log(itemId);
  await superagent
    .put(`${api}/product/${itemId}`)
    .send(updatedItem)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query({ cookie: parseInt(cookie.load('storeID')) });

  const respons = await superagent
    .get(`${api}/products`)
    .query({ cookie: parseInt(cookie.load('storeID')) })
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`);
  dispatch(getProducts(respons.body));
};

// Delete a product
export const deleteProduct = (itemId) => async (dispatch, state) => {
  await superagent
    .delete(`${api}/product/${itemId}`)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query({ cookie: parseInt(cookie.load('storeID')) });
  getProductsFromAPI(cookie.load('userData')?.token);
  dispatch(deleteProducts(itemId));
};
