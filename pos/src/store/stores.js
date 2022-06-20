import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
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

export const getStoreFromAPI = () => async (dispatch, state) => {
  const response = await superagent.get(`${api}/storeEmps`);
  dispatch(getStore(response.body));
};
