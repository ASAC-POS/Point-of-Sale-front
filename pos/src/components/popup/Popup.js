import React from 'react';
import { connect } from 'react-redux';
import './popup.scss';
import { GrNotification, GrClose } from 'react-icons/gr';
import { useState } from 'react';

function Popup(props) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <>
      <GrNotification
        className={`${showNotifications ? 'hidden' : ''}`}
        style={{
          position: 'absolute',
          right: '30',
          top: '20rem',
        }}
        size={35}
        onClick={() => setShowNotifications(!showNotifications)}
      />
      <div className={`popup-box ${showNotifications ? 'slide' : ''}`}>
        <GrClose
          className='close-notification-box'
          size={15}
          onClick={() => setShowNotifications(!showNotifications)}
        />
        {props.message}
      </div>
    </>
  );
}

// {`popup-box ${!showNotifications ? 'hidden' : ''}`}

const mapStateToProps = (state) => ({
  message: state.popup.message,
});

export default connect(mapStateToProps)(Popup);
