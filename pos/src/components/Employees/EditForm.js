import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function EditForm(props) {
  const [show, setShow] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  const { addUser } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUserData);
  };
  useEffect(() => {
    console.log(newUserData);
  }, [newUserData]);
  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                onChange={handleChange}
                name='username'
                type='text'
                placeholder='username'
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Employee password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name='password'
                type='password'
                placeholder='password'
              />
            </Form.Group>
            {/* <Form.Group controlId='formBasicPassword'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control onChange={handleChange} type='password' placeholder='confirm password' />
            </Form.Group> */}
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Employee role</Form.Label>
              <Form.Control name='role' type='text' placeholder='role' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Edit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EditForm;
