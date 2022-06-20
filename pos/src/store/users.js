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
console.log(cookie.load('userData'));
export default usersSlice.reducer;
export const { getUsers } = usersSlice.actions;

export const getUsersFromAPI = () => async (dispatch, state) => {
  const response = await superagent.get(`${api}/users`);
  dispatch(getUsers(response.body));
};
