import Navbars from './Navbar';
import './header.scss';
import logo from '../../assets/Bayya3-removebg-preview.png';

function Header() {
  return (
    <header className='header'>
      <div className='lef-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
          style={{ paddingLeft: '5px', width: '90px', height: '85px' }}
        />
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: '70px',
            alignItems: 'flex-start',
            fontFamily: 'Lobster',
          }}
        >
          Bayya3
        </h1>
      </div>
      <Navbars />
    </header>
  );
}

export default Header;
