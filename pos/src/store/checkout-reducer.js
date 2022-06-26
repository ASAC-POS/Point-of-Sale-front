import { createSlice } from '@reduxjs/toolkit';
import superagent from 'superagent';
import cookie from 'react-cookies';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItemToCheckout: (state, action) => {
      state.items.push(action.payload);
      state.total =
        state.total + action.payload.price * action.payload.quantity;
    },
  },
});
export default checkoutSlice.reducer;
export const { addItemToCheckout } = checkoutSlice.actions;
