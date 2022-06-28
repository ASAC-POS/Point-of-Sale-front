import { ButtonGroup, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsFromAPI } from '../../store/products.js';
import { When } from 'react-if';
import { loginContext } from '../../context/context';
import { useContext } from 'react';
import Popup from '../popup/Popup';
import './navbar.scss';

function Navbars(props) {
  const { loggedIn, logout } = useContext(loginContext);

  return (
    <nav className='nav-bar'>
      {/* <ButtonGroup style={{ display: 'flex', alignItems: 'center' }}> */}
      <Link className='nav-bar-button' to='/'>
        Home
      </Link>

      {/* <Link className='nav-bar-button' to='/about'>
        About
      </Link> */}

      <When condition={!loggedIn}>
        <Link className='nav-bar-button' to='/signin'>
          signin
        </Link>
      </When>
      <When condition={loggedIn}>
        <Popup />
        <Button
          className='nav-bar-button logout-btn'
          variant='danger'
          style={{ margin: '10px' }}
          onClick={() => {
            logout();
            // window.location.reload(false);
          }}
        >
          <Link className='nav-bar-button' to='/signin'>
            sign out
          </Link>
        </Button>
      </When>
      {/* </ButtonGroup> */}
    </nav>
  );
}
const mapStateToProps = (state) => ({
  products: state.productss,
});

const mapDispatchToProps = { getProductsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
