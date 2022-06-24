import Hero from './Hero';
import Register from './Register';
import { loginContext } from '../../context/context';
import { useContext, useEffect } from 'react';
import cookie from 'react-cookies';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

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
    if (loggedIn && store) {
      navigate(`${store?.storename}/${cookie.load('userData')?.id}`);
    }
  }, [loggedIn, navigate, store]);
  return (
    <div>
      <Hero />
      <Register />
    </div>
  );
}
const mapStateToProps = (state) => ({
  store: state.store.store,
});
export default connect(mapStateToProps)(Main);
