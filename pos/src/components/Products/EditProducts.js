import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../../store/products';
import Auth from '../../context/auth';
function EmployeeForm(props) {
  const [newItem, setNewItem] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.id);
    props.editProduct(newItem, props.id);
    handleClose();
  };

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
          <Form onSubmit={handleSubmit}>
            <Auth capability='edit'>
              <Form.Group>
                <Form.Label>ProductName</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='ProductName'
                  name='productName'
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Price'
                  name='price'
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Description'
                  name='description'
                  onChange={onChange}
                />
              </Form.Group>
            </Auth>
            <Auth capability='update'>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Quantity'
                  name='quantity'
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>minQuantity</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='minQuantity'
                  name='minQuantity'
                  onChange={onChange}
                />
              </Form.Group>
            </Auth>
            <Auth capability='edit'>
              <Form.Group>
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Image URL'
                  name='imgURL'
                  onChange={onChange}
                />
              </Form.Group>
            </Auth>
            <Button variant='primary' type='submit' style={{ padding: '10px' }}>
              Edit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.store.products,
});

const mapDispatchToProps = { editProduct };

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
