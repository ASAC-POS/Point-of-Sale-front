import Card from 'react-bootstrap/Card';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';
import InfoScreen from './InfoScreen';

import { connect } from 'react-redux';
import ReceiptsForm from '../Receipts/ReceiptForm';
import { addNewReceiots } from '../../store/products';
import { useEffect, useState } from 'react';
import { addItemToCheckout } from '../../store/checkout-reducer';
function Pos(props) {
  const { products, addItemToCheckout, checkout } = props;
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    console.log(products);
    console.log(checkout);
  }, [products, checkout]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100vw',
        height: '100%',
      }}
    >
      <div style={{ width: '50%' }}>
        {products.map((product) => {
          return (
            <Card key={product.id} style={{ width: '18rem', height: '250px' }}>
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <input
                  type='number'
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    addItemToCheckout({
                      name: product.productName,
                      quantity: quantity,
                      productID: product.id,
                      price: product.price,
                    });
                  }}
                  variant='primary'
                >
                  Add{' '}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <InfoScreen />

      <ReceiptsForm />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  checkout: state.checkout,
});
const mapDispatchToProps = { addItemToCheckout };
export default connect(mapStateToProps, mapDispatchToProps)(Pos);
