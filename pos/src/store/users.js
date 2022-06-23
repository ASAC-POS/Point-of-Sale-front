import { createSlice } from '@reduxjs/toolkit';
import cookie from 'react-cookies';
import superagent from 'superagent';
// const api = 'https://debuggers-pos.herokuapp.com';
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
    clearUsers: (state, action) => {
      state.users = [];
    },
  },
});
export default usersSlice.reducer;
export const { getUsers, clearUsers } = usersSlice.actions;

export const getUsersFromAPI = (token) => async (dispatch, state) => {
  const response = await superagent
    .get(`${api}/users`)
    .query({ cookie: parseInt(cookie.load('storeID')) })
    .set('Authorization', `Bearer ${token}`);
  console.log(response.body);
  dispatch(getUsers(response.body));
};
export const addUser = (user) => async (dispatch, state) => {
  console.log('adduser');
  try {
    const response = await superagent
      .post(`${api}/user`)
      .send(user)
      .query({ cookie: parseInt(cookie.load('storeID')) })
      .set('Authorization', `Bearer ${cookie.load('userData')?.token}`);
    console.log(response.body);
    const newUsers = await superagent
      .get(`${api}/users`)
      .query({ cookie: parseInt(cookie.load('storeID')) })
      .set('Authorization', `Bearer ${cookie.load('userData')?.token}`);
    dispatch(getUsers(newUsers.body));
  } catch (err) {
    console.log(err);
  }
};

export const editUser = (newUser, id) => async (dispatch, state) => {
  try {
    console.log('edit user');
    const response = await superagent
      .put(`${api}/user/${id}`)
      .send(newUser)
      .query({ cookie: parseInt(cookie.load('storeID')) })
      .set('Authorization', `Bearer ${cookie.load('userData')?.token}`);
    console.log(response.body);
    const newUsers = await superagent
      .get(`${api}/users`)
      .query({ cookie: parseInt(cookie.load('storeID')) })
      .set('Authorization', `Bearer ${cookie.load('userData')?.token}`);
    dispatch(getUsers(newUsers.body));
  } catch (err) {
    console.log(err);
  }
};
