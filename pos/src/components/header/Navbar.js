import { ButtonGroup, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsFromAPI } from '../../store/products.js';
import { When } from 'react-if';
import { loginContext } from '../../context/context';
import { useContext } from 'react';

function Navbars(props) {
  const { loggedIn, logout } = useContext(loginContext);

  return (
    <nav className='nav-bar'>
      <ButtonGroup className='nav-bar-buttons'>
        <Button
          variant='outline-light'
          style={{ backgroundColor: 'white', margin: '10px' }}
        >
          <Link to='/'>Home</Link>
        </Button>
        <Button
          variant='outline-light'
          style={{ backgroundColor: 'white', margin: '10px' }}
        >
          <Link to='/about'>About</Link>
        </Button>

        <When condition={!loggedIn}>
          <Button
            variant='outline-light'
            style={{ backgroundColor: 'white', margin: '10px' }}
          >
            <Link to='/signin'>signin</Link>
          </Button>
        </When>
        <When condition={loggedIn}>
          <Button
            variant='danger'
            style={{ margin: '10px' }}
            onClick={() => logout()}
          >
            <Link to='/signin'>sign out</Link>
          </Button>
        </When>
      </ButtonGroup>
    </nav>
  );
}
const mapStateToProps = (state) => ({
  products: state.productss,
});

const mapDispatchToProps = { getProductsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
