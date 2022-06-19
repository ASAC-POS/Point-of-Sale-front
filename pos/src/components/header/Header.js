import Navbars from './Navbar';
import './header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='lef-header'>
        <div className='logo'></div>
        <h1>Bayya3</h1>
      </div>
      <Navbars />
    </header>
  );
}

export default Header;
