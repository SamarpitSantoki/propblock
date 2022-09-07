import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Nav from '../components/Layout/Nav';

function HomePage() {
  return (
    <Container fluid>
      <Nav />
      <Row style={{ height: "100vh" }}>
        <Col className="bg-puredark d-flex justify-content-center" >
            <img style={{width:'85%'}} src="NTBB_1.svg" alt="propblockLogo" />
        </Col>
        <Col className="bg-puregrey d-flex justify-content-center align-items-center px-5 ">
          <p className='text-center pt-12'>
          <h2>Take your Properties on Chain</h2>
          <h6>PropBlock is an onchain solution to all Your needs of secure and a fast way to trade and register your properties.</h6>
          </p>

        </Col>
      </Row>
    </Container>
  );
}

export default HomePage