import Navbars from './Navbar';
import './header.scss';
// import logo from '../../assets/Bayya3-removebg-preview.png';
import WhiteLogo from '../../assets/Bayya3-removebg-preview.png';

function Header() {
  let location = window.location.pathname;

  return (
    <header className={`header ${location === '/' ? '' : 'colored'}`}>
      <div className='lef-header'>
        
       
      </div>
      <Navbars />
    </header>
  );
}

export default Header;
