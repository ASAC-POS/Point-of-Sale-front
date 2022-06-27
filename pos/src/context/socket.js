import { createContext, useState, useEffect } from 'react';
import { getPopupNotificationsFromAPI } from '../store/popups';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
export const SocketContext = createContext();

function SocketProvider(props) {
  const host = 'https://debuggers-pos.herokuapp.com';
  const { getPopupNotificationsFromAPI } = props;
  const [socket, setSocket] = useState(io.connect(host));

  useEffect(() => {
    const newSocket = io.connect(host);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);
  socket?.on('sending-notifications', () => {
    getPopupNotificationsFromAPI();
  });
  const state = {
    socket,
  };

  return (
    <SocketContext.Provider value={state}>
      {props.children}
    </SocketContext.Provider>
  );
}
const mapStateToProps = (state) => ({
  store: state.store.store,
});

const mapDispatchToProps = { getPopupNotificationsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(SocketProvider);
