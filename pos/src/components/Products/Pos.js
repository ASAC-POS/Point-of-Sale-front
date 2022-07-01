import Card from 'react-bootstrap/Card';
import React from 'react';
import InfoScreen from './InfoScreen';

import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { addItemToCheckout } from '../../store/checkout-reducer';
import { deductProduct } from '../../store/products';
import './pos.scss';
import UserInfo from '../profile/UserInfo/userInfo';

function Pos(props) {
  const { products, addItemToCheckout, checkout, deductProduct } = props;
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {}, [products, checkout]);
  return (
    <div className='pos-page'>
      <UserInfo />
      <div class='hpd hpd-basic'>
        <h4 class='hpd-title'>Point Of Sale</h4>
        <p class='hpd-desc'>Don't forget to smile 😁</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          height: 'auto',

          paddingTop: '2rem',
        }}
      >
        <div className='cards-container' style={{ width: '65%' }}>
          {products.map((product) => {
            return (
              <Card
                className='product pos-product'
                onClick={() => {
                  if (quantity > product.quantity) {
                  } else {
                    addItemToCheckout({
                      name: product.productName,
                      quantity: quantity,
                      productID: product.id,
                      price: product.price,
                    });
                    deductProduct({ id: product.id, quantity: quantity });
                  }
                }}
              >
                <Card.Img src={product.imgURL} />

                <Card.Body className='details'>
                  <div className='top-part'>
                    <Card.Title className='card-title'>
                      {product.productName}
                    </Card.Title>
                    <Card.Text>{product.price}$</Card.Text>
                  </div>

                  <div className='card-description'>
                    <Card.Text>Quantity: {product.quantity}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <div
          style={{
            width: '35%',
            height: '100%',
          }}
        >
          <InfoScreen setQuantity={setQuantity} />
        </div>
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
