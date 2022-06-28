import Hero from './Hero';
import Register from './Register';
import { loginContext } from '../../context/context';
import { useContext, useEffect } from 'react';
import cookie from 'react-cookies';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import About from '../about/About';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './main.scss';
function Main(props) {
  const { loggedIn } = useContext(loginContext);
  const navigate = useNavigate();
  const { store } = props;
  const { getData } = useContext(loginContext);

  useEffect(() => {
    if (loggedIn) {
      getData();
    }
  }, [getData, loggedIn]);
  useEffect(() => {
    if (loggedIn && store?.storename) {
      navigate(`${store?.storename}/${cookie.load('userData')?.id}`);
    }
  }, [loggedIn, navigate, store]);
  return (
    <div className='main'>
      <div className='main-hero'>
        <Header />
        <Hero />
        <Register />
      </div>
      <About />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  store: state.store.store,
});
export default connect(mapStateToProps)(Main);
