import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RegisterForm from './RegisterForm';
import './register.scss';

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='register-modal'>
      <Button className='register-btn' variant='primary' onClick={handleShow}>
        Register store
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Register your store</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm setShow={setShow} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Register;
