import "./login.scss"
import { Form, Button } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import { loginContext } from '../../context/context.js';
import { useNavigate } from 'react-router-dom';
import { getProductsFromAPI } from '../../store/products';
import { connect } from 'react-redux';

function Login(props) {
  const { login, loggedIn } = useContext(loginContext);
  const { products, getProductsFromAPI } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(products);
  }, [products]);

  const navigate = useNavigate();

  const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);

  return (
    <div id="loginform">
    <FormHeader title="Login" />
      <Form 
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
          if (loggedIn) {
            navigate('/store/id');
          }
          // getProductsFromAPI();
        }}
      >
        <Form.Group className="row" controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="row" controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <div id="button" class="row">
        <Button  className='button'type='submit'>Log in</Button>
        </div>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = { getProductsFromAPI };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
