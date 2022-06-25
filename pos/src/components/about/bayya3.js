import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './bayya3.scss'


export default function index() {
  return (
    <Container className='holder'>
      <h2>WHO WE ARE</h2>
      <Row  md={4} className="align-items-start gap-5 flex-row">
        <Col className='col-md-auto'>
          <p>
            Bayya3 is a point of sale, cloud-based solution, created to
            handle all of the store's financial operations and inventory
            tracking in an easy and intuitive way.
            <br></br>
            <br></br>
            with bayya3, you can
            easily check your store inventory, recipts, and sales at anytime
            from any device. built with security in mind, which makes bayya3
            the optimal safe solution for running a business.
          </p>
        </Col>
      </Row>
    </Container>
  )
}