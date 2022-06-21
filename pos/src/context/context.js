import { createContext, useState, useEffect } from 'react';
import cookie from 'react-cookies';
import superagent from 'superagent';
import jwt from 'jwt-decode';
import base64 from 'base-64';
import { connect } from 'react-redux';
import { getProductsFromAPI } from '../store/products';

const API = 'http://localhost:3010';

export const loginContext = createContext();

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [storID, setStorID] = useState('');
  const { getProductsFromAPI } = props;
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
    const response = await superagent
      .post(`${API}/signin`)
      .set(
        'authorization',
        `Basic ${base64.encode(`${username}:${password}`)}`
      );
    console.log(response.body.user);
    console.log(response.body.storeID);
    setStorID(response.body.storeID);
    validateMyUser(response.body.user);
    getProductsFromAPI(response.body.user.token);
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
    cookie.remove('userData');
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
const mapDispatchToProps = { getProductsFromAPI };
export default connect(mapStateToProps, mapDispatchToProps)(LoginProvider);
