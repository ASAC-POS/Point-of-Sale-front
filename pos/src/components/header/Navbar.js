import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsFromAPI } from '../../store/products.js';
import { When } from 'react-if';
import { loginContext } from '../../context/context';
import { useContext } from 'react';
import Popup from '../popup/Popup';
import './navbar.scss';

function Navbars(props) {
  const { loggedIn } = useContext(loginContext);

  return (
    <nav className='nav-bar'>
      <Link className='nav-bar-button' to='/'>
        Home
      </Link>

      <When condition={!loggedIn}>
        <Link className='nav-bar-button signin-nav' to='/signin'>
          signin
        </Link>
      </When>
      <When condition={loggedIn}>
        <Popup />
      </When>
    </nav>
  );
}
const mapStateToProps = (state) => ({
  products: state.productss,
});

const mapDispatchToProps = { getProductsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
