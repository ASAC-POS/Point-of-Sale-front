import './App.scss';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Login from './components/login/Login';
import About from './components/about/About';
import Employees from './components/Employees/Employees';
import Receipts from './components/Receipts/Receipts';
import Profile from './components/profile/profile';
import Products from './components/Products/ProductManage';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Auth from './context/auth';
import { When } from 'react-if';
import Pos from './components/Products/Pos';
import { useContext, useEffect } from 'react';
import { loginContext } from './context/context';
import UserInfo from './components/profile/UserInfo/userInfo';
function App(props) {
  const { getData, loggedIn } = useContext(loginContext);
  const { store } = props;
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='app'>
      <When condition={loggedIn}>
        <Profile />
        {/* <UserInfo/> */}
      </When>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Main />
            </>
          }
        />
        <Route path='/signin' element={<Login />} />
        <Route path='/about' element={<About />} />

        <Route
          path={`/${encodeURIComponent(store?.storename)}/employees`}
          element={
            <Auth capability='delete'>
              <Employees />
            </Auth>
          }
        />
        <Route
          path={`/${encodeURIComponent(store?.storename)}/receipts`}
          element={
            <Auth capability='delete'>
              <Receipts />
            </Auth>
          }
        />
        <Route
          path={`/${encodeURIComponent(store?.storename)}/products`}
          element={
            <Auth capability='add'>
              <Products />
            </Auth>
          }
        />
        <Route
          path={`/${encodeURIComponent(store?.storename)}/pos`}
          element={
            <Auth capability='sell'>
              <Pos />
            </Auth>
          }
        />
        {/* <Route
          path={`/${encodeURIComponent(store?.storename)}/${
            cookie.load('userData')?.id
          }`}
          element={<Profile />}
        /> */}
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    store: state.store.store,
  };
};
export default connect(mapStateToProps)(App);
