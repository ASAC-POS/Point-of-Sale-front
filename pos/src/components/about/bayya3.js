import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import recImg from '../../assets/hh.png';
import './bayya3.scss';

export default function index() {
  return (
    <Container className='holder'>
      <h1>About Bayya3</h1>
      <Row xs={1} md={6} className='align-items-start gap-5 flex-row'>
        <Col md={6} className='about-image flex-row'>
          <Image src={recImg} alt='' />
        </Col>
        <Col md={6} className='about flex-row' xs lg='5'>
          <p>
            Bayya3 is a point of sale, cloud-based solution, created to handle
            all of the store's financial operations and inventory tracking in an
            easy and intuitive way.
            <br></br>
            <br></br>
            with bayya3, you can easily check your store inventory, recipts, and
            sales at anytime from any device. built with security in mind, which
            makes bayya3 the optimal safe solution for running a business.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
