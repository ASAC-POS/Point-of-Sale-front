import { createContext, useState, useEffect, useContext } from 'react';
import cookie from 'react-cookies';
import superagent from 'superagent';
import jwt from 'jwt-decode';
import base64 from 'base-64';
import { connect } from 'react-redux';
import { SocketContext } from './socket.js';
// import { getProductsFromAPI } from '../store/products';
// import { getStoreFromAPI } from '../store/stores';
// import { getReceiptsFromAPI } from '../store/receipts';
// import { getUsersFromAPI } from '../store/users';
import { useNavigate } from 'react-router-dom';

import { getProductsFromAPI, clearProducts } from '../store/products';
import { getStoreFromAPI, clearStore } from '../store/stores';
import { getReceiptsFromAPI, clearReceipts } from '../store/receipts';
import { getUsersFromAPI, clearUsers } from '../store/users';
import { getPopupNotificationsFromAPI } from '../store/popups';
// const API = 'https://debuggers-pos.herokuapp.com';
const API = 'https://debuggers-pos.herokuapp.com';

export const loginContext = createContext();

function LoginProvider(props) {
  const { socket } = useContext(SocketContext);
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
    const response = await superagent.post(`${API}/register`).send(userInfo);
  };

  const navigate = useNavigate();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLoginstate = (isLogged, userData) => {
    setLoggedIn(isLogged);
    setUser(userData);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser({});
    socket.emit('sign-out', cookie.load('userData'));
    clearData();
  };
  const clearData = () => {
    clearUsers();
    clearStore();
    clearProducts();
    clearReceipts();
    cookie.remove('userData');
    cookie.remove('storeID');
    navigate('/');
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
  getPopupNotificationsFromAPI,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginProvider);
