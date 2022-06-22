import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addNewProduct } from '../../store/products';

function ProductsForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [item, setItem] = useState({});

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewProduct(item);
    handleClose();
  };

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Add Product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
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
                type='text'
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
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type='text'
                placeholder='Quantity'
                name='quantity'
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>minQuantity</Form.Label>
              <Form.Control
                type='text'
                placeholder='minQuantity'
                name='minQuantity'
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type='text'
                placeholder='Image URL'
                name='imgURL'
                onChange={onChange}
              />
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
  products: state.store.products,
});

const mapDispatchToProps = { addNewProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductsForm);
