import React from 'react';
import { connect } from 'react-redux';
import './popup.scss';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { BsFillBellFill } from "react-icons/bs";

function Popup(props) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <>
      <BsFillBellFill
        // className={`${showNotifications ? 'hidden' : ''}`}
        style={{ fill: '#fff',paddingTop:"7px" }}
        size={29}
        onClick={() => setShowNotifications(!showNotifications)}
      />
      {/*  */}
      <div
        className={`popup-box ${
          showNotifications ? 'slide-open' : 'slide-close'
        } `}
      >
        {/* <FaTimes
          className='close-notification-box'
          size={20}
          onClick={() => setShowNotifications(!showNotifications)}
        /> */}
        {props.message}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  message: state.popup.message,
});

export default connect(mapStateToProps)(Popup);
