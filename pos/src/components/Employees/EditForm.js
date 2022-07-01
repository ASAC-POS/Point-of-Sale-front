import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../store/users';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import './editForm.scss';
function EditForm(props) {
  const [show, setShow] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  const { editUser, id, employee } = props;
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
  return (
    <div>
      <i variant='primary' onClick={handleShow}>
        <BsFillPersonLinesFill  color='#F77E21'/>
      </i>
      <Modal show={show} onHide={handleClose} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className='edit-form'>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                defaultValue={employee.username}
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
              <Form.Select
                defaultValue={employee.role}
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
            <Button
              variant='primary'
              type='submit'
              style={{ alignSelf: 'flex-end' }}
            >
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
