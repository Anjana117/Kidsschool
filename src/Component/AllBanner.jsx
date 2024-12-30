import React from 'react'
import {Row,Col, Container } from 'react-bootstrap'

function AllBanner({props}) {
  return (
    <section className='Allbanner  section-start '>
      <div className='overlay p-100'>
      <Container>
      <Row>
        <Col>
        <h1 className='fw-bold '>{props.title}</h1>
        <h4><i>{props.subtitle}</i></h4>
        </Col>
      </Row>
    </Container>
      </div>
    </section>
  )
}

export default AllBanner