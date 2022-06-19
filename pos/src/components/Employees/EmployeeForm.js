import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function EmployeeForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Add Employee
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>UserName</Form.Label>
              <Form.Control type='text' placeholder='username' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Employee password</Form.Label>
              <Form.Control type='password' placeholder='password' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type='password' placeholder='confirm password' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Employee role</Form.Label>
              <Form.Control type='text' placeholder='role' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default EmployeeForm;
