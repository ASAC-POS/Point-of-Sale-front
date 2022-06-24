import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import InfoScreen from "./InfoScreen";

import { connect } from "react-redux";
import ReceiptsForm from "../Receipts/ReceiptForm";
import { addNewReceiots } from '../../store/products';

function Pos(props) {
 
  
  return (
   
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100vw",
        height: "100%",
      }}
    >
      <div style={{ width: "50%" }}>
        <Card style={{ width: "18rem", height: "250px" }}>
          <Card.Body>
            <Card.Title>jeans</Card.Title>
            <Card.Text>nice jeans to wear</Card.Text>
            <Card.Text>price</Card.Text>

            <Button variant="primary">Add </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "250px" }}>
          <Card.Body>
            <Card.Title>jeans</Card.Title>
            <Card.Text>nice jeans to wear</Card.Text>
            <Card.Text>price</Card.Text>

            <Button variant="primary">Add </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "250px" }}>
          <Card.Body>
            <Card.Title>jacket</Card.Title>
            <Card.Text>nice jacket to wear</Card.Text>
            <Card.Text>price</Card.Text>
            <Button variant="primary">add</Button>
          </Card.Body>
        </Card>
      </div>
      <InfoScreen />

      <ReceiptsForm />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.store.products,
});

export default connect(mapStateToProps)(Pos);
