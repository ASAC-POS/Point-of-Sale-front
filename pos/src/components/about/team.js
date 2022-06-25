import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import jala from '../../assets/img/jala.jpg';
import leen from '../../assets/img/leen.jpg';
import manal from '../../assets/img/manal.jpg';
import mohammad from '../../assets/img/mohammad.jpg';
import neeven from '../../assets/img/neeven.jpg';
import './team.scss'


export default function index() {
  return (
    <Container>
      <h1>Our lovely team</h1>

      <Row xs={1} md={6} className="align-items-start gap-5 flex-row">
        <Col className="card gap-2">
          <Image className="card-img-top imgg" src={jala} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Jalal Hasan</h5>
            <p className="card-text">Software Developer</p>
          </div>
        </Col>

        <Col className="card gap-2">
          <Image className="card-img-top imgg" src={leen} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Leen Ahmad</h5>
            <p className="card-text">Software Developer</p>
          </div>
        </Col>

        <Col className="card  gap-2">
          <Image className="card-img-top imgg" src={manal} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Manal Al-bahar</h5>
            <p className="card-text">Software Developer</p>
          </div>
        </Col>

        <Col className="card gap-2">
          <Image className="card-img-top imgg" src={mohammad} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Mohammad Salameh</h5>
            <p className="card-text">Software Developer</p>
          </div>
        </Col>

        <Col className="card gap-2 ">
          <Image className="card-img-top imgg" src={neeven} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">Neveen Aburomman</h3>
            <p className="card-text">Software Developer</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}