import { createSlice } from '@reduxjs/toolkit';

import superagent from 'superagent';
import cookie from 'react-cookies';

// const api = 'https://debuggers-pos.herokuapp.com';
const api = 'http://localhost:3002';

const PopupSlice = createSlice({
  name: 'popup',
  initialState: {
    message: '',
  },
  reducers: {
    getNotifications: (state, action) => {
      state.message = action.payload;
    },
  },
});

export default PopupSlice.reducer;
export const { getNotifications } = PopupSlice.actions;

// api

export const getPopupNotificationsFromAPI = () => async (dispatch, state) => {
  const response = await superagent
    .get(`${api}/popup`)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query('cookie', cookie.load('storeID'));
  console.log(response.text);
  dispatch(getNotifications(response.text));
};
