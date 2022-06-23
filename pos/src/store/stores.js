import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';
// const api = 'https://debuggers-pos.herokuapp.com';
const api = 'http://localhost:3002';

const storeSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
    getStore: (state, action) => {
      state.store = action.payload;
    },
    clearStore: (state, action) => {
      state.store = {};
    },
  },
});

export default storeSlice.reducer;

export const { getStore, clearStore } = storeSlice.actions;

export const getStoreFromAPI = (token) => async (dispatch, state) => {
  const storeID = cookie.load('storeID');
  const response = await superagent
    .get(`${api}/store/${storeID}`)
    .query({ cookie: parseInt(cookie.load('storeID')) })
    .set('Authorization', `Bearer ${token}`);
  console.log(response.body);
  dispatch(getStore(response.body));
};
