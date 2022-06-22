import { createContext, useState, useEffect } from 'react';
import cookie from 'react-cookies';
import superagent from 'superagent';
import jwt from 'jwt-decode';
import base64 from 'base-64';
import { connect } from 'react-redux';
import { getProductsFromAPI, clearProducts } from '../store/products';
import { getStoreFromAPI, clearStore } from '../store/stores';
import { getReceiptsFromAPI, clearReceipts } from '../store/receipts';
import { getUsersFromAPI, clearUsers } from '../store/users';
const API = 'https://debuggers-pos.herokuapp.com';

export const loginContext = createContext();

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const {
    getProductsFromAPI,
    getStoreFromAPI,
    getReceiptsFromAPI,
    getUsersFromAPI,
    clearUsers,
    clearStore,
    clearProducts,
    clearReceipts,
  } = props;
  const register = async (userInfo) => {
    console.log('1111111111', userInfo);
    const response = await superagent.post(`${API}/register`).send(userInfo);
    console.log(response.body.user);
  };

  const signup = async (username, password, role) => {
    const response = await superagent
      .post(`${API}/user`)
      .send({ username, password, role });
  };

  const login = async (username, password) => {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set(
          'authorization',
          `Basic ${base64.encode(`${username}:${password}`)}`
        );
      console.log(response.body.user);
      console.log(response.body.storeID);
      cookie.save('storeID', response.body.storeID);
      validateMyUser(response.body.user);
      getData();
    } catch (er) {
      setError(er);
    }
  };

  const validateMyUser = (data) => {
    if (data) {
      const validUser = jwt(data.token);
      if (validUser) {
        setLoginstate(true, data);
        cookie.save('userData', data);
      } else {
        setLoginstate(false, {});
      }
    } else {
      setLoginstate(false, {});
    }
  };
  const getData = () => {
    const data = cookie.load('userData');
    if (data) {
      getStoreFromAPI(data.token);
      getReceiptsFromAPI(data.token);
      getProductsFromAPI(data.token);
      getUsersFromAPI(data.token);
    }
  };

  useEffect(() => {
    const myUserInfo = cookie.load('userData');
    validateMyUser(myUserInfo);
  }, []);

  const setLoginstate = (isLogged, userData) => {
    setLoggedIn(isLogged);
    setUser(userData);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser({});
    clearData();
  };
  const clearData = () => {
    clearUsers();
    clearStore();
    clearProducts();
    clearReceipts();
    cookie.remove('userData');
    cookie.remove('storeID');
  };

  const canDo = (capability) => {
    return user?.actions?.includes(capability);
  };

  const state = {
    user,
    loggedIn,
    register,
    login,
    signup,
    logout,
    canDo,
    getData,
    error,
  };

  return (
    <loginContext.Provider value={state}>
      {props.children}
    </loginContext.Provider>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    loggedIn: state.loggedIn,
  };
};
const mapDispatchToProps = {
  getProductsFromAPI,
  getStoreFromAPI,
  getReceiptsFromAPI,
  getUsersFromAPI,
  clearUsers,
  clearReceipts,
  clearStore,
  clearProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginProvider);
