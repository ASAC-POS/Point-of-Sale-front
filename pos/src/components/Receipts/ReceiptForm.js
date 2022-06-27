import { Modal, Button, Form } from 'react-bootstrap';
import './ReceiptsForm.scss';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addNewReceipts } from '../../store/receipts';
import { clearCheckOut } from '../../store/checkout-reducer';
import cookie from 'react-cookies';

function ReceiptsForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { checkout, addNewReceipts, clearCheckOut } = props;

  const [settings, setSettings] = useState({});

  const onChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewReceipts({
      product: checkout.items,
      userID: cookie.load('userData').id,
      storeID: cookie.load('storeID'),
      PaymentMethod: settings?.method || 'cash',
      total: parseInt(checkout.total),
      discount: parseInt(settings.discount),
    });
    clearCheckOut();
    handleClose();
  };

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        checkout
      </Button>
      <Modal show={show} onHide={handleClose} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='checkoutForm'>
            <Form onSubmit={(e) => handleSubmit(e)}>
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

              <p>Total: {checkout.total}$</p>
              <Form.Group>
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Discount'
                  name='discount'
                  max={100}
                  onChange={onChange}
                />
              </Form.Group>
              {settings.discount && (
                <p>
                  after discount:{' '}
                  {(checkout.total * (100 - parseInt(settings.discount))) / 100}
                  $
                </p>
              )}
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
  checkout: state.checkout,
});

const mapDispatchToProps = { addNewReceipts, addNewReceipts, clearCheckOut };

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsForm);
