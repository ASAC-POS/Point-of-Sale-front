import Card from 'react-bootstrap/Card';
import React from 'react';
import Button from 'react-bootstrap/Button';
import InfoScreen from './InfoScreen';

import { connect } from 'react-redux';
import ReceiptsForm from '../Receipts/ReceiptForm';
import { useEffect, useState } from 'react';
import { addItemToCheckout } from '../../store/checkout-reducer';
import { incrementProduct, deductProduct } from '../../store/products';
function Pos(props) {
  const { products, addItemToCheckout, checkout, deductProduct } = props;
  const [quantity, setQuantity] = useState(1);
  const [er, setEr] = useState(null);
  useEffect(() => {
    console.log(products);
    console.log(checkout);
  }, [products, checkout]);
  return (
    <div>
      <div class='hpd hpd-basic'>
        <h4 class='hpd-title'>Point Of Sale</h4>
        <p class='hpd-desc'>Don't forget to smile 😁</p>
      </div>
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
              <Card
                key={product.id}
                style={{ width: '18rem', height: '250px' }}
              >
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price}$</Card.Text>
                  <input
                    type='number'
                    min={1}
                    placeholder='quantity'
                    onChange={(e) => {
                      setQuantity(parseInt(e.target.value));
                    }}
                  />
                  {er && product.quantity === 0 && <p>{er}</p>}
                  <Button
                    onClick={() => {
                      if (quantity > product.quantity) {
                        setEr('out of stock');
                      } else {
                        // setEr(null);
                        addItemToCheckout({
                          name: product.productName,
                          quantity: quantity,
                          productID: product.id,
                          price: product.price,
                        });
                        deductProduct({ id: product.id, quantity: quantity });
                      }
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  checkout: state.checkout,
});
const mapDispatchToProps = { addItemToCheckout, deductProduct };
export default connect(mapStateToProps, mapDispatchToProps)(Pos);
