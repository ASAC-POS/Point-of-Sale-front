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
  useEffect(() => {
    if (loggedIn) {
      navigate(`${store?.storename}/${cookie.load('userData').id}`);
    }
  }, [loggedIn, navigate, store?.storename]);
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
