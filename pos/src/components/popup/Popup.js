import React from 'react';
import { connect } from 'react-redux';
import './popup.scss';
import { FaConciergeBell, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Popup(props) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <>
      <FaConciergeBell
        // className={`${showNotifications ? 'hidden' : ''}`}
        style={{ fill: '#fff' }}
        size={35}
        onClick={() => setShowNotifications(!showNotifications)}
      />
      {/*  */}
      <div
        className={`popup-box ${
          showNotifications ? 'slide-open' : 'slide-close'
        } `}
      >
        <FaTimes
          className='close-notification-box'
          size={20}
          onClick={() => setShowNotifications(!showNotifications)}
        />
        {props.message}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  message: state.popup.message,
});

export default connect(mapStateToProps)(Popup);
