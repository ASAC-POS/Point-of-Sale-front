import './profile.scss';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Auth from '../../context/auth';
import { Card } from 'react-bootstrap';
import { getPopupNotificationsFromAPI } from '../../store/popups';
import { useContext, useEffect } from 'react';
import { SocketContext } from '../../context/socket';

import io from 'socket.io-client';
import Popup from '../popup/Popup';

function Profile(props) {
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  const { store, getPopupNotificationsFromAPI } = props;

  useEffect(() => {
    socket.emit('reload-notifications');
  }, []);

  return (
    <>
      <Card id='details'>
        <Card.Title
          style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: '20px' }}
        >
          USER INFORMATION
        </Card.Title>
        <Card.Text style={{ marginLeft: '20px' }}>
          Store Name: {props.store?.storename}
        </Card.Text>
        <Card.Text style={{ marginLeft: '20px' }}>
          User Name: {cookie.load('userData')?.username}
        </Card.Text>
        <Card.Text style={{ marginLeft: '20px' }}>
          User Role: {cookie.load('userData')?.role}
        </Card.Text>
      </Card>

      <div className='profile'>
        <Popup />
        <Auth capability='add'>
          <div
            className='card1'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/products`);
            }}
          >
            <div className='card-image1'></div>
            <div className='card-text1'>
              <br></br>
              <h2>PRODUCTS</h2>
            </div>
          </div>
        </Auth>
        <Auth capability='sell'>
          <div
            className='card1'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/pos`);
            }}
          >
            <div className='card-image1'></div>
            <div className='card-text1'>
              <br></br>
              <h2>POS</h2>
            </div>
          </div>
        </Auth>
        <Auth capability='delete'>
          <div
            className='card1'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/employees`);
            }}
          >
            <div className='card-image1 card2'></div>
            <div className='card-text1'>
              <br></br>
              <h2>EMPLOYEES</h2>
            </div>
          </div>
          <div
            className='card1'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/receipts`);
            }}
          >
            <div className='card-image1 card3'></div>
            <div className='card-text1'>
              <br></br>
              <h2>RECEIPTS</h2>
            </div>
          </div>
        </Auth>
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
