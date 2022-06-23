import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../store/users';
function EditForm(props) {
  const [show, setShow] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  const { editUser, id } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(newUserData, id);
    setShow(false);
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
          <Form onSubmit={handleSubmit}>
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
            <Form.Group controlId='formBasicRole'>
              <Form.Label>Employee role</Form.Label>
              <Form.Control
                onChange={handleChange}
                name='role'
                type='text'
                placeholder='role'
              />
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

const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = { editUser };
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
