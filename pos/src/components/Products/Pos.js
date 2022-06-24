import Card from 'react-bootstrap/Card';
import React from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-modal';
import InfoScreen from './InfoScreen';

import { connect } from 'react-redux';

function Pos(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
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
        <Card style={{ width: '18rem', height: '250px' }}>
          <Card.Body>
            <Card.Title>jeans</Card.Title>
            <Card.Text>nice jeans to wear</Card.Text>
            <Card.Text>price</Card.Text>

            <Button variant='primary'>Add </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '250px' }}>
          <Card.Body>
            <Card.Title>jeans</Card.Title>
            <Card.Text>nice jeans to wear</Card.Text>
            <Card.Text>price</Card.Text>

            <Button variant='primary'>Add </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', height: '250px' }}>
          <Card.Body>
            <Card.Title>jacket</Card.Title>
            <Card.Text>nice jacket to wear</Card.Text>
            <Card.Text>price</Card.Text>
            <Button variant='primary'>add</Button>
          </Card.Body>
        </Card>
        <Button onClick={setModalIsOpenToTrue} size='small' color='primary'>
          {' '}
          checkout{' '}
        </Button>
        <Modal isOpen={modalIsOpen} ariaHideApp={false}>
          <button onClick={setModalIsOpenToFalse}> close </button>
          <CheckoutForm />
        </Modal>
      </div>
      <InfoScreen />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.store.products,
});

export default connect(mapStateToProps)(Pos);
