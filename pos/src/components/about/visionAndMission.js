import React from 'react'
import { Container, Row } from 'react-bootstrap';
import './visionAndMission.scss'

export default function index() {
  return (
    <>
      <Container>
        <h1>Our vision</h1>
        <p> To be the best cloud-based point of sale solution for
          business with different sizes.</p>
      </Container>
      <Container>
        <h1> Our mission</h1>
        <p> To make the process of running a retail business
          effortless, smooth and effective. helping business owners with
          managing their stores and financial operations.
        </p>
      </Container>
    </>
  )
}