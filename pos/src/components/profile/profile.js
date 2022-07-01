import './SideBar/sidebar.css';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../../context/auth';
import { getPopupNotificationsFromAPI } from '../../store/popups';
import { useContext, useEffect } from 'react';
import { SocketContext } from '../../context/socket';
import WhiteLogo from '../../assets/Bayya3-removebg-preview.png';
import { BiExit } from 'react-icons/bi';
import { loginContext } from '../../context/context';
import { When } from 'react-if';
import { FaCashRegister } from 'react-icons/fa';
import { IoReceiptOutline } from 'react-icons/io5';

import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import { IoPeople } from 'react-icons/io5';

function Profile(props) {
  const { socket } = useContext(SocketContext);
  const { logout, loggedIn } = useContext(loginContext);
  const navigate = useNavigate();
  const { store } = props;

  useEffect(() => {
    socket.emit('reload-notifications');
  }, [socket]);

  return (
    <div className='sidebar'>
      <div
        // onClick={() => {
        //   navigate(
        //     `/${encodeURIComponent(store?.storename)}/${
        //       cookie.load('userData')?.id
        //     }`
        //   );
        // }}
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
            <MdOutlineProductionQuantityLimits id='icon' color='#FAC213' />
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
            <IoPeople id='icon' color='#FAC213' />
            <div id='p2'> Employees</div>
          </div>
          {/* this for Receipts*/}

          <div
            id='box3'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/receipts`);
            }}
          >
            <IoReceiptOutline id='icon' color='#FAC213' />
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
            <FaCashRegister id='icon' color='#FAC213' />
            <div id='p4'> POS</div>
          </div>
        </Auth>
      </div>
      <When condition={loggedIn}></When>
      <div id='signout'>
        <div id='box6'>
          <div
            id='textt'
            onClick={() => {
              logout();
              // window.location.reload(false);
            }}
          >
            <BiExit
              id='icon'
              style={{
                color: 'red',
                position: 'absolute',
                right: '1rem',
                bottom: '2rem',
              }}
            />
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
