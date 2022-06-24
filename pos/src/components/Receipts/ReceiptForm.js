import { Modal, Button, Form } from 'react-bootstrap';
import './ReceiptsForm.scss'
import { useState } from 'react';
import { connect } from 'react-redux';
import { addNewReceipts } from '../../store/receipts';

function ReceiptsForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [item, setItem] = useState({});

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewReceipts(item);
    handleClose();
  };

  return (
    <div >
    <Button variant='primary' onClick={handleShow}>
        Add Receipt
      </Button>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="checkoutForm">
          <Form onSubmit={(e) => handleSubmit(e)} >
            <Form.Group>
              <Form.Label>Product</Form.Label>
              <Form.Control
                type='text'
                placeholder='product'
                name='product'
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
              <Form.Label>Visa</Form.Label>
              <Form.Check
                type='radio'
                placeholder='Visa'
                name='PaymentMethod'
                onChange={onChange}
              />
              </Form.Group>

              <Form.Group>
              <Form.Label>Cash</Form.Label>
              <Form.Check
                type='radio'
                placeholder='Cash'
                name='PaymentMethod'
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Total</Form.Label>
              <Form.Control
                type='text'
                placeholder='Total'
                name='total'
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type='text'
                placeholder='Discount'
                name='discount'
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Total After Discount</Form.Label>
              <Form.Control
                type='text'
                placeholder='Total After Discount'
                name='totalAfterDiscount'
                onChange={onChange}
              />
            </Form.Group>
            
            <Button variant='primary' type='submit'>
              Checkout
            </Button>
          </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
    receipts: state.store.receipts,
});

const mapDispatchToProps = { addNewReceipts };

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsForm);
