import './SideBar/sidebar.css';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../../context/auth';
import { getPopupNotificationsFromAPI } from '../../store/popups';
import { useContext, useEffect } from 'react';
import { SocketContext } from '../../context/socket';
import WhiteLogo from '../../assets/Bayya3-removebg-preview.png';
import { FcNext } from 'react-icons/fc';
import { BiExit } from 'react-icons/bi';
import { loginContext } from '../../context/context';
import cookie from 'react-cookies';
function Profile(props) {
  const { socket } = useContext(SocketContext);
  const { logout } = useContext(loginContext);
  const navigate = useNavigate();
  const { store } = props;

  useEffect(() => {
    socket.emit('reload-notifications');
  }, [socket]);

  return (
    <div className='sidebar'>
      <div
        onClick={() => {
          navigate(
            `/${encodeURIComponent(store?.storename)}/${
              cookie.load('userData')?.id
            }`
          );
        }}
        className='logo'
      >
        <img id='logo-img' src={WhiteLogo} alt='logo'></img>
        <h4 id='h44'> Bayya3</h4>
      </div>
      <div className='services'>
        <Auth capability='add'>
          <div
            id='box1'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/products`);
            }}
          >
            <FcNext id='icon' />
            <div id='p1'> Products</div>
          </div>
        </Auth>
        {/* this for Employees*/}
        <Auth capability='delete'>
          <div
            id='box2'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/employees`);
            }}
          >
            <FcNext id='icon' />
            <div id='p2'> Employees</div>
          </div>
          {/* this for Receipts*/}

          <div
            id='box3'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/receipts`);
            }}
          >
            <FcNext id='icon' />
            <div id='p3'> Receipts</div>
          </div>
        </Auth>
        {/* this for POS*/}
        <Auth capability='sell'>
          <div
            id='box4'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/pos`);
            }}
          >
            <FcNext id='icon' />
            <div id='p4'> POS</div>
          </div>
        </Auth>
      </div>
      <div id='signout'>
        <div id='box6'>
          <div
            id='textt'
            onClick={() => {
              logout();
              // window.location.reload(false);
            }}
          >
            <BiExit id='icon' />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  store: state.store.store,
  popup: state.popup,
});
const mapDispatchToProps = { getPopupNotificationsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
