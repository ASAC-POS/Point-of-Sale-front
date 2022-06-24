
import Card from 'react-bootstrap/Card';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-modal';


import { connect } from 'react-redux';
import ReceiptsForm from '../Receipts/ReceiptForm';

function Pos(props) {
  
  return (
    <>
     
      <Card style={{ width: '18rem', height:'250px'}}>
        
  <Card.Body>
    <Card.Title>jeans</Card.Title>
    <Card.Text>
      nice jeans to wear 
    </Card.Text>
    <Card.Text>
     price
    </Card.Text>
    
    <Button variant="primary">Add </Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', height:'250px'}}>
  <Card.Body>
    <Card.Title>jeans</Card.Title>
    <Card.Text>
      nice jeans to wear 
    </Card.Text>
    <Card.Text>
     price
    </Card.Text>
    
    <Button variant="primary">Add </Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', height:'250px'}}>
  <Card.Body>
    <Card.Title>jacket</Card.Title>
    <Card.Text>
      nice jacket to wear 
    </Card.Text>
    <Card.Text>
   price
    </Card.Text>
    <Button variant="primary">add</Button>
  </Card.Body>
</Card>
 
 <ReceiptsForm/> 
      
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.store.products,
});



export default connect(mapStateToProps)(Pos);

