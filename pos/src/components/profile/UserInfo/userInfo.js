import './userInfo.css';
import { HiUserCircle } from 'react-icons/hi';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import Popup from '../../../components/popup/Popup';
function UserInfo(props) {
  return (
    <>
      <div className='Info'>
        <div id='leftside'>
          <HiUserCircle id='profileIcon' />
          <div className='username'>
            <div id='theName'> {cookie.load('userData')?.username} </div>
            <div id='theRole'> {cookie.load('userData')?.role}</div>
          </div>
        </div>
      </div>
      <div id='bell'>
        <Popup />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  store: state.store.store,
});
export default connect(mapStateToProps)(UserInfo);
