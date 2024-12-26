import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'

function Partners() {
    return (
        <div className='Partners  section-start' >
            <Container>
                <Row>
                    <Col lg={6} className='mx-auto'>
                        <h2 className='f-36 fw-bold'>
                            Our Partners Logo
                        </h2>
                        <p className='text-white'>
                            Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    
                    <div className='box pe-3'>
                    <img src={'./image/partner_01.jpg'} className='img-fluid' />
                    </div>
                    <div className='box pe-3'>
                    <img src={'./image/partner_02.jpg'}  className='img-fluid' />
                    </div>
                    <div className='box pe-3'>
                    <img src={'./image/partner_03.jpg'}  className='img-fluid' />
                    </div>
                    <div className='box pe-3'>
                    <img src={'./image/partner_04.jpg'}  className='img-fluid' />
                    </div>
                    <div className='box pe-3'>
                    <img src={'./image/partner_05.jpg'}   className='img-fluid'/>
                    </div>
                        
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Partners