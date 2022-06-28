import Navbars from './Navbar';
import './header.scss';
// import logo from '../../assets/Bayya3-removebg-preview.png';
import WhiteLogo from '../../assets/logo-white.png';

function Header() {
  let location = window.location.pathname;

  return (
    <header className={`header ${location === '/' ? '' : 'colored'}`}>
      <div className='lef-header'>
        <img
          src={WhiteLogo}
          className='App-logo'
          alt='logo'
          style={{ paddingLeft: '5px', width: '90px', height: '85px' }}
        />
        <h1
          style={{
            fontWeight: 'bold',
            fontSize: '90px',
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
