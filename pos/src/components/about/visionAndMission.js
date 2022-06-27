import React from 'react'
import { Container, Row ,Image, Col } from 'react-bootstrap';
import './visionAndMission.scss'
import missionIma from '../../assets/mission.jpg'
import visionIma from '../../assets/vision.jpg'

export default function index() {
  return (
    <>
      <Container>
        <h1>Our vision</h1>
        <Row xs={1} md={6} className="align-items-start gap-5 flex-row">
        <Col md={6} className="vision-image flex-row"  >
            <Image src={visionIma} alt="" />
          </Col>
          <Col md={6} className="vision-des flex-row"  xs lg="5">
        <p> To be the best cloud-based point of sale solution for
          business with different sizes.</p>
          </Col>
          </Row>
      </Container>
      <Container>
        <h1> Our mission</h1>
        <Row xs={1} md={6} className="align-items-start gap-5 flex-row">
        <Col md={6} className='mission-des flex-row'  xs lg="5">
        <p> To make the process of running a retail business
          effortless, smooth and effective. helping business owners with
          managing their stores and financial operations.</p>
          </Col>
        
        <Col md={6} className="mission-image flex-row"  >
            <Image src={missionIma} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  )
}