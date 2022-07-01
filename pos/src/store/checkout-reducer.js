import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    // items: JSON.parse(localStorage.getItem('checkout'))?.items || [],
    // total: JSON.parse(localStorage.getItem('checkout'))?.total || 0,
    items: [],
    total: 0,
  },
  reducers: {
    addItemToCheckout: (state, action) => {
      console.log(action.payload);
      let newItem = state.items.find(
        (item) => item.productID === action.payload.productID
      );
      console.log(newItem?.quantity);
      if (newItem) {
        newItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total =
        state.total + action.payload.price * action.payload.quantity;
      // localStorage.setItem('checkout', JSON.stringify(state));
    },
    removeFromCheckOut: (state, action) => {
      let newItem = state.items.find(
        (item) => item.productID === action.payload
      );
      state.items = state.items.filter(
        (item) => item.productID !== action.payload
      );
      state.total -= newItem.price * newItem.quantity;
      // localStorage.setItem('checkout', JSON.stringify(state));
    },
    detuctQuantity: (state, action) => {
      let newItem = state.items.find(
        (item) => item.productID === action.payload
      );
      newItem.quantity--;
      state.total -= newItem.price;
      if (newItem.quantity === 0) {
        state.items = state.items.filter((item) => item !== newItem);
      }
      // localStorage.setItem('checkout', JSON.stringify(state));
    },
    clearCheckOut: (state, action) => {
      state.items = [];
      state.total = 0;
      // localStorage.clear('checkout');
    },
  },
});
export default checkoutSlice.reducer;
export const {
  addItemToCheckout,
  detuctQuantity,
  removeFromCheckOut,
  clearCheckOut,
} = checkoutSlice.actions;
