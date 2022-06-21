import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';
const api = 'https://debuggers-pos.herokuapp.com';

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    store: [],
  },
  reducers: {
    getStore: (state, action) => {
      state.store = action.payload;
    },
  },
});

export default storeSlice.reducer;

export const { getStore } = storeSlice.actions;

export const getStoreFromAPI = (token) => async (dispatch, state) => {
  const response = await superagent
    .get(`${api}/storeEmps`)
    .query({ cookie: cookie.load('storeID') })
    .set('Authorization', `Bearer ${token}`);
  console.log(response.body);
  dispatch(getStore(response.body));
};
