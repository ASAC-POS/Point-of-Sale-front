import { Form, Button } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import { loginContext } from '../../context/context.js';
function RegisterForm(props) {
  const [userInfo, setUserInfo] = useState({});
  const { register } = useContext(loginContext);
  function onChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    register(userInfo);
    props.setShow(false);
  }
  useEffect(() => {}, [userInfo]);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Store Name</Form.Label>
          <Form.Control
            type='text'
            name='storename'
            onChange={onChange}
            placeholder='Store Name'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            onChange={onChange}
            placeholder='Enter email'
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='mb-3'>Location</Form.Label>
          <Form.Control
            type='text'
            name='location'
            placeholder='Store Location'
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='mb-3'>Business Type</Form.Label>
          <Form.Control
            type='text'
            name='businessType'
            placeholder='Business Type'
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='mb-3'>Admin name</Form.Label>
          <Form.Control
            type='text'
            name='username'
            placeholder='Admin name'
            onChange={onChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' />
        </Form.Group>
        <Button type='submit'>Register</Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
