import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import './visionAndMission.scss';
import missionIma from '../../assets/mm.png';
import visionIma from '../../assets/vv.png';

export default function index() {
  return (
    <>
      <Container >
        <h2>Our vision</h2>
        <Row  xs={1} md={6} className='align-items-start gap-5 flex-row vision-container'>
          <Col md={6} className='vision-image flex-row'>
            <Image src={visionIma} alt='' />
          </Col>
          <Col md={6} className='vision-des flex-row' xs lg='5' style={{width:'100%'}}>
            <p style={{width:'100%'}}>
              To be the best cloud-based point of sale solution for business
              with different sizes.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2> Our mission</h2>
        <Row xs={1} md={6} className='align-items-start gap-5 flex-row vision-container'>
          <Col md={6} className='mission-des flex-row' style={{width:'100%'}}>
            <p style={{width:'100%'}}>
              {' '}
              To make the process of running a retail business effortless,
              smooth and effective. helping business owners with managing their
              stores and financial operations.
            </p>
          </Col>

          <Col md={6} className='mission-image flex-row ' xs lg='5'>
            <Image src={missionIma} alt='' />
          </Col>
        </Row>
      </Container>
    </>
  );
}
