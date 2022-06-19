import { ButtonGroup, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <nav className='nav-bar'>
      <ButtonGroup className='nav-bar-buttons'>
        <Button variant='outline-light'>
          <Link to='/'>Home</Link>
        </Button>
        <Button variant='outline-light'>
          <Link to='/about'>About</Link>
        </Button>
        <Button variant='outline-light'>
          <Link to='/signin'>signin</Link>
        </Button>
      </ButtonGroup>
    </nav>
  );
}

export default Navbars;
