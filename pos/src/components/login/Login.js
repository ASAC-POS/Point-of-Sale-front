import { Form, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { loginContext } from '../../context/context.js';
function Login() {
  const { login } = useContext(loginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
        }}
      >
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button type='submit'>Log in</Button>
      </Form>
    </div>
  );
}

export default Login;
