import { Form, Button } from 'react-bootstrap';
import './profile.scss'

function profile() {
  return (
    <>
    <Form className='form'>
        <Form.Group >
          <Form.Label>Employee Name</Form.Label>
          <Form.Control type='text' placeholder='Employee Name' />
        </Form.Group>

        <Form.Group >
          <Form.Label>Role</Form.Label>
          <Form.Control type='text' placeholder='Role' />
        </Form.Group>
        <Form.Group >
          <Form.Label>User ID</Form.Label>
          <Form.Control type='text' placeholder='User ID' />
        </Form.Group>
          <br></br>
        <Button type='submit'> Enter </Button>
      </Form>
    <div className='profile'>
<div class="card">
  <div class="card-image"></div>
  <div className="card-text">
    <br></br>
    <h2>PRODUCTS</h2>
    <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
</div>
<div class="card">
  <div class="card-image card2"></div>
  <div className="card-text">
    <br></br>
    <h2>EMPLOYEES</h2>
    <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
</div>
<div class="card">
  <div class="card-image card3"></div>
  <div className="card-text">
    <br></br>
    <h2>RECEIPTS</h2>
    <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
  </div>
</div>
</div>
</>
  )
}

export default profile