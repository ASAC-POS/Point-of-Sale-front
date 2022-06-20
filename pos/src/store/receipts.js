import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
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

export const getReceiptsFromAPI = () => async (dispatch, state) => {
  const response = await superagent.get(`${api}/receipts`);
  dispatch(getReceipts(response.body));
};
