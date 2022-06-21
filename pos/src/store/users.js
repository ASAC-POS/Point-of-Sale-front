import { createSlice } from '@reduxjs/toolkit';
import cookie from 'react-cookies';
import superagent from 'superagent';
const api = 'https://debuggers-pos.herokuapp.com';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
export default usersSlice.reducer;
export const { getUsers } = usersSlice.actions;

export const getUsersFromAPI = (token) => async (dispatch, state) => {
  const response = await superagent
    .get(`${api}/users`)
    .query({ cookie: parseInt(cookie.load('storeID')) })
    .set('Authorization', `Bearer ${token}`);
  console.log(response.body);
  dispatch(getUsers(response.body));
};
