import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

function HomePage() {
  return (
    <Container fluid>
      <Row style={{ height: "100vh" }}>
        <Col className="bg-primary">
          <Row className="p-10">
            <img width={"50%"} src="N.svg" alt="propblockLogo" />
          </Row>
        </Col>
        <Col className="bg-secondary"></Col>
      </Row>
    </Container>
  );
}

export default HomePage