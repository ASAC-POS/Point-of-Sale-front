import { ButtonGroup, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsFromAPI } from '../../store/products.js';
function Navbars(props) {
  return (
    <nav className='nav-bar' >
      <ButtonGroup className='nav-bar-buttons'>
        <Button variant='outline-light' style={{backgroundColor:'white',margin:"10px" }}>
          <Link to='/'>Home</Link>
        </Button>
        <Button variant='outline-light'style={{backgroundColor:'white',margin:"10px"}}>
          <Link to='/about'>About</Link>
        </Button>
        <Button variant='outline-light'style={{backgroundColor:'white',margin:"10px"}}>
          <Link to='/signin'>signin</Link>
        </Button>
      </ButtonGroup>
    </nav>
  );
}
const mapStateToProps = (state) => ({
  products: state.productss,
});

const mapDispatchToProps = { getProductsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Navbars);
