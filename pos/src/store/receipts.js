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
      state.receipts = action.payload;
    },
  },
});

export default receiptsSlice.reducer;

export const { getReceipts } = receiptsSlice.actions;

export const getReceiptsFromAPI = (token) => async (dispatch, state) => {
  const response = await superagent
    .get(`${api}/storeReceipts`)
    .query({ cookie: cookie.load('storeID') })
    .set('Authorization', `Bearer ${token}`);
  console.log(response.body);
  dispatch(getReceipts(response.body));
};
