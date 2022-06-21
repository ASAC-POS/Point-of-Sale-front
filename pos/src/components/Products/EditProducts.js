import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function EmployeeForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Edit Product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group >
              <Form.Label>ProductName</Form.Label>
              <Form.Control type='text' placeholder='ProductName' />
            </Form.Group>
            <Form.Group >
              <Form.Label>Price</Form.Label>
              <Form.Control type='text' placeholder='Price' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control type='text' placeholder='Quantity' />
            </Form.Group>
            <Form.Group>
              <Form.Label>minQuantity</Form.Label>
              <Form.Control type='text' placeholder='minQuantity' />
            </Form.Group>
            <Button variant='primary' type='submit' style={{padding: '10px'}}>
              Edit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default EmployeeForm;
