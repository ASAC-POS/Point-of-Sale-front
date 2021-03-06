import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';

const api = 'https://debuggers-pos.herokuapp.com';

const receiptsSlice = createSlice({
  name: 'receipts',
  initialState: {
    receipts: [],
  },
  reducers: {
    getReceipts: (state, action) => {
      state.receipts = action.payload[0].receipts;
    },
    addReceipts: (state, action) => {
      state.receipts.push(action.payload);
    },
    editReceipt: (state, action) => {
      state.receipts.push(action.payload);
    },
    clearReceipts: (state, action) => {
      state.receipts = [];
    },
  },
});

export default receiptsSlice.reducer;

export const { getReceipts, addReceipts, editReceipt, clearReceipts } =
  receiptsSlice.actions;

export const getReceiptsFromAPI = (token) => async (dispatch, state) => {
  try {
    const response = await superagent
      .get(`${api}/storeReceipts`)
      .query({ cookie: cookie.load('storeID') })
      .set('Authorization', `Bearer ${token}`);
    dispatch(getReceipts(response.body));
  } catch (err) {
    console.log(err);
  }
};

export const addNewReceipts = (item) => async (dispatch, state) => {
  await superagent
    .post(`${api}/receipt`)
    .send(item)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query({ cookie: parseInt(cookie.load('storeID')) });
  dispatch(addReceipts(item));
};

export const updateReceipts =
  (updatedItem, itemId) => async (dispatch, state) => {
    await superagent
      .put(`${api}/receipt/${itemId}`)
      .send(updatedItem)
      .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
      .query({ cookie: parseInt(cookie.load('storeID')) });
    dispatch(editReceipt(updatedItem));
  };
