import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'
function Newsletter() {
    return (
        <div className='Newsletter section-top bg-purple text-white'>
            <Container>
                <Row className='my-5'>
                    <Col lg={5} sm={12}>
                        <h2>Join Our Newsletter</h2>
                    </Col>
                    <Col lg={7} sm={12}  >
                    <input  className='search ' type="text" placeholder="Enter Your e-mail here"/>
                    <input className='btn text-purple' type="button" value="Subscribe Now"/>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Newsletter