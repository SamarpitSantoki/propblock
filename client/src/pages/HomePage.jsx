import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

function HomePage() {
  return (
    <Container fluid className='p-0 m-0'>
        <Row sm={2} noGutters style={{height:'100vh'}}>
            <Col sm={6} className='bg-puredark text-white h-100 d-flex justify-items-center align-items-center'  >
                <img width={"100%"} src="/PropBlockLogo.png" alt="" />
            </Col>
            <Col sm={6} className='bg-puregrey h-100 d-flex  align-items-center m-0'>
                <div className='w-100 text-center text-lg'>
                    
                    <h1 className='w-100'>Get your Properties on Blockchain</h1>
                    <Button outline="primary"  >Learn More.</Button>
                    </div>
                </Col>
        </Row>
    </Container>
  )
}

export default HomePage