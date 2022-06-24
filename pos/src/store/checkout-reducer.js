import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {},
});

export default checkoutSlice.reducer;
