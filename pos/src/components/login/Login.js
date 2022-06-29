import './login.scss';
import { Form, Button } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import { loginContext } from '../../context/context.js';
import { getProductsFromAPI } from '../../store/products';
import { connect } from 'react-redux';


import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from 'react-icons/ti';

import illustration from '../../assets/undraw_writer_q06d.svg';

function Login(props) {
  const { store } = props;
  const { login, loggedIn, error } = useContext(loginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const FormHeader = (props) => <h2 id='headerTitle'>{props.title}</h2>;
  useEffect(() => {
    if (loggedIn && store?.storename) {
      navigate(`/`);
    }
  }, [loggedIn, navigate, store]);
  return (
    <div id='loginform'>
      <div className='left-section'>
        <div className='wrapper'>
          <FormHeader title='Welcome to Bayya3' style={{textAlign: 'center'}} />
          <Form
            className='sign-in-form'
            onSubmit={(e) => {
              e.preventDefault();
              console.log('clicked');
              login(username, password);
              if (error.status === 403) {
                setErrorMsg('invalid login');
              }
            }}
          >
            <p
              style={{
                textAlign: 'center',
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              {errorMsg}
            </p>
            <Form.Group className='row' controlId='formBasicEmail'>
              {/* <Form.Label>Username</Form.Label> */}
              <Form.Control
                type='text'
                placeholder='Username'
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className='row' controlId='formBasicPassword'>
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className='input'
                required
              />
            </Form.Group>
            
            <div id='button' className='row'>
              <Button className='button' type='submit'>
                Sign in
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div className='right-section'></div>
      <img src={illustration} alt='image' className='illustration' />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  store: state.store.store,
});

const mapDispatchToProps = { getProductsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
