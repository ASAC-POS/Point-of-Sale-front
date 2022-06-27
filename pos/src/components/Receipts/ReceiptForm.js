import { Modal, Button, Form } from 'react-bootstrap';
import './ReceiptsForm.scss'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addNewReceipts } from '../../store/receipts';
import { addItemToCheckout } from '../../store/checkout-reducer';

function ReceiptsForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { products, addItemToCheckout, checkout } = props;
  const [discount, setDiscount] = useState(0);

  const totalAfterDiscount=()=>{
   let result = props.checkout.total*(1-(discount/100))
   console.log(result)
   return result
  }

  useEffect(() => {
    console.log(products);
    console.log(checkout);
  }, [products, checkout]);

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
        </Modal.Header>
        <Modal.Body>
        <div className="checkoutForm">
          <Form onSubmit={(e) => handleSubmit(e)} >
          <strong> PAYMENT METHOD</strong>
          <br></br>
          <Form.Group style={{display:'flex', marginLeft: '5px'}}> 
            
              <Form.Check style={{ marginLeft: '20px'}}
                type='radio'
                placeholder='Price'
                name='price'
                onChange={onChange}
              />
              <Form.Label style={{ marginLeft: '10px'}} >CASH</Form.Label>
              <Form.Check style={{ marginLeft: '20px'}}
                type='radio'
                placeholder='Price'
                name='price'
                onChange={onChange}/>
              <Form.Label style={{ marginLeft: '10px'}} >VISA</Form.Label>
              </Form.Group>
              <br></br>
            <Form.Group style={{display:'flex', marginLeft: '2px'}}>
              <Form.Label >Price:</Form.Label>
              <Form.Control style={{ marginLeft: '10px'}}
                type='number'
                placeholder='Price'
                name='price'
                onChange={onChange}
              />
              </Form.Group>
              <br></br>
              <Form.Group style={{display:'flex', marginLeft: '2px'}}>
              <Form.Label>Discount </Form.Label>
              <Form.Control  style={{ marginLeft: '10px'}}
                type='number'
                placeholder='Discount'
                name='discount'
                onChange={(e) => {
                  setDiscount(e.target.value);
                }}
              />
                </Form.Group>
               <br></br>
            <Form.Group>
              <strong > Total : {props.checkout.total} </strong>
            </Form.Group>
            <br></br>
           
          
            <Form.Group>
              <strong>Total After Discount : {totalAfterDiscount()}</strong>
            </Form.Group>
            <br></br>
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
  products: state.products.products,
  checkout: state.checkout,
});

const mapDispatchToProps = { addNewReceipts,addItemToCheckout };

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptsForm);
