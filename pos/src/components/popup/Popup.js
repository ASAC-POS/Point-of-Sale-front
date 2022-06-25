import React from 'react';
import { connect } from 'react-redux';
import './popup.scss';
import { GrNotification } from 'react-icons/gr';
import { useState } from 'react';

function Popup(props) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <>
      <GrNotification
        style={{ position: 'absolute', right: '30', top: '10rem' }}
        size={35}
        onClick={() => console.log('Clicked')}
      />
      <div className='popup-box'>{props.message}</div>
    </>
  );
}

const mapStateToProps = (state) => ({
  message: state.popup.message,
});

export default connect(mapStateToProps)(Popup);
