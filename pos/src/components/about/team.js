import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import jala from '../../assets/img/jala.jpg';
import leen from '../../assets/img/leen.jpg';
import manal from '../../assets/img/manal.jpg';
import mohammad from '../../assets/img/mohammad.jpg';
import neeven from '../../assets/img/neeven.jpg';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

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
            <div className="card-social-icon d-flex gap-3 justify-content-center">
              <a href=""><i className="fa-brands fa-facebook-f"><BsFacebook /></i></a>
              <a href="https://github.com/JalalHasan-22"><i className="fa-brands fa-github"><BsGithub /></i></a>
              <a href=""><i className="fa-brands fa-linkedin-in"><BsLinkedin /></i></a>
            </div>
          </div>
        </Col>

        <Col className="card gap-2">
          <Image className="card-img-top imgg" src={leen} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Leen Ahmad</h5>
            <p className="card-text">Software Developer</p>
            <div className="card-social-icon d-flex gap-3 justify-content-center">
              <a href=""><i className="fa-brands fa-facebook-f"><BsFacebook /></i></a>
              <a href="https://github.com/leenahmad"><i className="fa-brands fa-github"><BsGithub /></i></a>
              <a href=""><i className="fa-brands fa-linkedin-in"><BsLinkedin /></i></a>
            </div>
          </div>
        </Col>

        <Col className="card  gap-2">
          <Image className="card-img-top imgg" src={manal} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Manal Al-bahar</h5>
            <p className="card-text">Software Developer</p>
            <div className="card-social-icon d-flex gap-3 justify-content-center">
              <a href="https://www.facebook.com/manalalbahar91"><i className="fa-brands fa-facebook-f"><BsFacebook /></i></a>
              <a href="https://github.com/ManalKhAlbahar"><i className="fa-brands fa-github"><BsGithub /></i></a>
              <a href=""><i className="fa-brands fa-linkedin-in"><BsLinkedin /></i></a>
            </div>
          </div>
        </Col>

        <Col className="card gap-2">
          <Image className="card-img-top imgg" src={mohammad} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Mohammad Salameh</h5>
            <p className="card-text">Software Developer</p>
            <div className="card-social-icon d-flex gap-3 justify-content-center">
              <a href="https://web.facebook.com/mhsalameh1?_rdc=1&_rdr"><i className="fa-brands fa-facebook-f"><BsFacebook /></i></a>
              <a href="https://github.com/Mhsalameh"><i className="fa-brands fa-github"><BsGithub /></i></a>
              <a href="https://www.linkedin.com/in/mhsalameh"><i className="fa-brands fa-linkedin-in"><BsLinkedin /></i></a>
            </div>
          </div>
        </Col>

        <Col className="card gap-2 ">
          <Image className="card-img-top imgg" src={neeven} alt="Card image cap" />
          <div className="card-body">
            <h3 className="card-title">Neveen Aburomman</h3>
            <p className="card-text">Software Developer</p>
            <div className="card-social-icon d-flex gap-3 justify-content-center">
              <a href="https://www.facebook.com/profile.php?id=100010016567120 "><i className="fa-brands fa-facebook-f"><BsFacebook /></i></a>
              <a href="https://github.com/neveenaburomman"><i className="fa-brands fa-github"><BsGithub /></i></a>
              <a href="www.linkedin.com/in/neveenaburomman-9a23851aa"><i className="fa-brands fa-linkedin-in"><BsLinkedin /></i></a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}