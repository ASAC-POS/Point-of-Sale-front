import { Navbar, Nav, Container } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <nav className='nav-bar'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Nav className='me-auto'>
            <Link to='/'>
              <Nav.Link>Home</Nav.Link>
            </Link>

            <Link to='/'>
              <Nav.Link>About us</Nav.Link>
            </Link>

            <Link to='/signin'>
              <Nav.Link>Sign in</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Navbars;
