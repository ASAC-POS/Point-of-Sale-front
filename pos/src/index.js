import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginProvider from './context/context';
import SocketProvider from './context/socket';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SocketProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </SocketProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
