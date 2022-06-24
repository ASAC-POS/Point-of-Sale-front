import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { addUser } from '../../store/users';
import { connect } from 'react-redux';
function EmployeeForm(props) {
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
    setShow(false);
  };
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
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                name='username'
                onChange={handleChange}
                type='text'
                placeholder='username'
                required
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Employee password</Form.Label>
              <Form.Control
                name='password'
                onChange={handleChange}
                type='password'
                placeholder='password'
                required
              />
            </Form.Group>
            {/* <Form.Group controlId='formBasicPassword'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control   type='password' placeholder='confirm password' />
            </Form.Group> */}
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Employee role</Form.Label>
              <Form.Select
                name='role'
                aria-label='Default select example'
                onChange={handleChange}
              >
                <option disabled selected value>
                  select role
                </option>
                <option value='cashier'>cashier</option>
                <option value='inventory'>inventory</option>
                <option value='admin'>admin</option>
              </Form.Select>
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
const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = { addUser };
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
