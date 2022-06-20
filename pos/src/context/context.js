import { createContext, useState, useEffect } from 'react';
import cookie from 'react-cookies';
import superagent from 'superagent';
import jwt_decode from 'jwt-decode';
import base64 from 'base-64';

const API = 'https://debuggers-pos.herokuapp.com';

export const loginContext = createContext();

export default function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const register = async (userInfo) => {
    const response = await (
      await superagent.post(`${API}/register`)
    ).send(userInfo);
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
    validateMyUser(response.body);
  };

  const validateMyUser = (data) => {
    if (data) {
      const validUser = jwt_decode.decode(data.token);
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
    <loginContext.Provider value={state}>{children}</loginContext.Provider>
  );
}
