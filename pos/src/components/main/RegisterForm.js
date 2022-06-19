import { Form, Button } from 'react-bootstrap';

function RegisterForm() {
  return (
    <div>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Store Name</Form.Label>
          <Form.Control type='text' placeholder='Store Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='mb-3'>Location</Form.Label>
          <Form.Control type='text' placeholder='Store Location' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='mb-3'>Business Type</Form.Label>
          <Form.Control type='text' placeholder='Business Type' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='mb-3'>Admin name</Form.Label>
          <Form.Control type='text' placeholder='Admin name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
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
