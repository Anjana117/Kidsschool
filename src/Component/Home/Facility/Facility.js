import { faChalkboardTeacher, faEarth, faFileCircleExclamation, faLineChart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Facility() {
    return (
        <div className='Facility'>
            <Container>
                <Row>
                    <Col lg={3} sm={12} className='text-center'>
                        <div className='Facility-item'>
                            <div>
                            <FontAwesomeIcon icon={faFileCircleExclamation} className='rotateprop bg-red fs-5'> </FontAwesomeIcon></div>
                               
                            <h4 className='text-red fw-bold'>Active Learning </h4>
                            <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                        </div>
                    </Col>
                    <Col lg={3} sm={12} className='text-center'>
                        <div className='Facility-item'>
                            <div >
                                <FontAwesomeIcon icon={faChalkboardTeacher} className='rotateprop bg-yellow fs-5'> </FontAwesomeIcon>
                            </div>
                            <h4 className='text-yellow fw-bold'>Active Learning </h4>
                            <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                        </div>
                    </Col>
                    <Col lg={3} sm={12} className='text-center'>
                        <div className='Facility-item'>
                            <div >
                                <FontAwesomeIcon icon={faEarth} className='rotateprop  bg-orange  fs-5'> </FontAwesomeIcon>
                            </div>
                            <h4 className='text-orange fw-bold'>Strategi Location</h4>
                            <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                        </div>
                    </Col>
                    <Col lg={3} sm={12} className='text-center'>
                        <div className='Facility-item'>
                            <div >
                                <FontAwesomeIcon icon={faLineChart} className='rotateprop  bg-purple fs-5'> </FontAwesomeIcon>
                            </div>
                            <h4 className='text-purple fw-bold'>Full Day Programs</h4>
                            <p>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Facility