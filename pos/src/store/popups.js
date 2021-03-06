import { createSlice } from '@reduxjs/toolkit';

import superagent from 'superagent';
import cookie from 'react-cookies';

// const api = 'https://debuggers-pos.herokuapp.com';
const api = 'https://debuggers-pos.herokuapp.com';

const PopupSlice = createSlice({
  name: 'popup',
  initialState: {
    message: '',
    signedIn: [],
  },
  reducers: {
    getNotifications: (state, action) => {
      state.message = action.payload?.popup;
      state.signedIn = action.payload?.signinUsers;
    },
    clearPopUps: (state, action) => {
      state.message = null;
    },
  },
});

export default PopupSlice.reducer;
export const { getNotifications, clearPopUps } = PopupSlice.actions;

// api

export const getPopupNotificationsFromAPI = () => async (dispatch, state) => {
  const response = await superagent
    .get(`${api}/popup`)
    .set('Authorization', `Bearer ${cookie.load('userData')?.token}`)
    .query('cookie', cookie.load('storeID'));
  dispatch(getNotifications(response.body));
};
