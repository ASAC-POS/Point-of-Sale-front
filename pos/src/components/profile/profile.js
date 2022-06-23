import './profile.scss';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Auth from '../../context/auth';
import { getPopupNotificationsFromAPI } from '../../store/popups';
import io from 'socket.io-client';
import {useEffect,useState} from 'react'
function Profile(props) {
  const navigate = useNavigate();
  const { store,getPopupNotificationsFromAPI } = props;
  const host = 'http://localhost:3002/';
  const [socket, setSocket] = useState(io.connect(host));

  useEffect(() => {
    const newSocket = io.connect(host);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  socket?.on('sending-notifications',()=>{
    getPopupNotificationsFromAPI()
  })
  socket?.emit('reload-notifications')

  return (
    <>
      <div id='details'>
        <p> StoreName : {props.store?.storename}</p>
        <p> user : {cookie.load('userData')?.username}</p>
        <p> role: {cookie.load('userData')?.role} </p>
      </div>
      <div className='profile'>
        <Auth capability='add'>
          <div
            className='card'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/products`);
            }}
          >
            <div className='card-image'></div>
            <div className='card-text'>
              <br></br>
              <h2>PRODUCTS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                temporibus omnis illum maxime quod deserunt eligendi dolor
              </p>
            </div>
          </div>
        </Auth>
        <Auth capability='sell'>
          <div
            className='card'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/pos`);
            }}
          >
            <div className='card-image'></div>
            <div className='card-text'>
              <br></br>
              <h2>POS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                temporibus omnis illum maxime quod deserunt eligendi dolor
              </p>
            </div>
          </div>
        </Auth>
        <Auth capability='delete'>
          <div
            className='card'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/employees`);
            }}
          >
            <div className='card-image card2'></div>
            <div className='card-text'>
              <br></br>
              <h2>EMPLOYEES</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                temporibus omnis illum maxime quod deserunt eligendi dolor
              </p>
            </div>
          </div>
          <div
            className='card'
            onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/receipts`);
            }}
          >
            <div className='card-image card3'></div>
            <div className='card-text'>
              <br></br>
              <h2>RECEIPTS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                temporibus omnis illum maxime quod deserunt eligendi dolor
              </p>
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
const mapDispatchToProps={getPopupNotificationsFromAPI}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
