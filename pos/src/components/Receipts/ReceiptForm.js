import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addNewReceipts } from '../../store/receipts';
import { clearCheckOut } from '../../store/checkout-reducer';
import cookie from 'react-cookies';
import './receiptForm.css';

function ReceiptsForm(props) {
  const [show, setShow] = useState(false);
  const [method, setMethod] = useState('Cash');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { checkout, addNewReceipts, clearCheckOut } = props;

  const [settings, setSettings] = useState({});

  const onChange = (e) => {
    console.log(settings);
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewReceipts({
      product: checkout.items,
      userID: cookie.load('userData').id,
      storeID: cookie.load('storeID'),
      PaymentMethod: settings?.PaymentMethod || 'Cash',
      total: parseInt(checkout.total),
      discount: parseInt(settings.discount || 0),
    });
    clearCheckOut();
    handleClose();
  };

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        checkout
      </Button>
      <Modal show={show} onHide={handleClose} className='page'>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='checkoutForm'>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group style={{ display: 'flex' }}>
                <Form.Check
                  type='radio'
                  name='PaymentMethod'
                  value='Visa'
                  onChange={onChange}
                />
                <Form.Label>Visa</Form.Label>

                <Form.Check
                  style={{ marginLeft: '80PX' }}
                  type='radio'
                  name='PaymentMethod'
                  value='Cash'
                  onChange={onChange}
                />
                <Form.Label>Cash</Form.Label>
                {settings.PaymentMethod === 'Cash' && (
                  <Form.Group>
                    <Form.Label>paid</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='#customer paid'
                      name='paid'
                      min={
                        (checkout.total *
                          (100 - parseInt(settings.discount || 0))) /
                        100
                      }
                      onChange={onChange}
                    />
                  </Form.Group> 
                )}
              </Form.Group>

              <p>Total: {checkout.total}$</p>
              <Form.Group>
                <Form.Label>Discount</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Discount'
                  name='discount'
                  max={100}
                  min={0}
                  onChange={onChange}
                />
              </Form.Group>
              {settings.discount && (
                <p>
                  after discount:{' '}
                  {(checkout.total * (100 - parseInt(settings.discount || 0))) /
                    100}
                  $
                </p>
              )}
              {settings.paid && settings.PaymentMethod === 'Cash' && (
                <p>
                  change:{' '}
                  {settings.paid -
                    (checkout.total *
                      (100 - parseInt(settings.discount || 0))) /
                      100}
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
