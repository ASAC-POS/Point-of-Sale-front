import { Form, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { loginContext } from '../../context/context.js';
import './registerForm.scss';
function RegisterForm(props) {
  const [userInfo, setUserInfo] = useState({});
  const { register, setError } = useContext(loginContext);
  function onChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setError('');
  }
  function handleSubmit(e) {
    e.preventDefault();
    register(userInfo);
    props.setShow(false);
  }
  return (
    <div>
      <Form className='register-form' onSubmit={handleSubmit}>
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
            placeholder='Admin_username'
            onChange={onChange}
            required
          />
          <Form.Text className='text-muted'>
            use '_' instead of spaces
          </Form.Text>
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
          <Form.Text className='text-muted'>
            minimun length 6 characters, atleast one(uppercase/lowrcase letter,
            number, symbols(!@#$%^*-=+?))
          </Form.Text>
        </Form.Group>
        <Button type='submit'>Register</Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
