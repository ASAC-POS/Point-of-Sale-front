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

function Profile(props) {
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  const { store } = props;

  useEffect(() => {
    socket.emit('reload-notifications');
  }, [socket]);

  return (
    <>
      {/*
      <Card id='details'>
        {/* <Card.Title
          style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: '20px' }}
        >
          USER INFORMATION
        </Card.Title> 
        <Card.Text>Store Name: {props.store?.storename}</Card.Text>
        <Card.Text>User Name: {cookie.load('userData')?.username}</Card.Text>
        <Card.Text>User Role: {cookie.load('userData')?.role}</Card.Text>
      </Card>
  */}
      <div className='sidebar'>
        <div className='logo'>
          <img id='logo-img' src={WhiteLogo} alt='logo'></img>
          <h4 id='h44'> Bayya3</h4>
        </div>
        <div className='services'>
          {/* this for products*/}

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
            <BiExit id='icon' />
            <div id='textt'> Logout</div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  store: state.store.store,
  popup: state.popup,
});
const mapDispatchToProps = { getPopupNotificationsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
