import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Schoolgallery() {
    return (
        <div className='Schoolgallery'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h2 className='text-purple f-36 fw-bold'>Our School Gallery</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <p>
                            Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul >
                            <li className='lst'>
                                <li><i className='text-yellow'>Show all</i></li>
                                <li><i className='text-red'>Class</i></li>
                                <li><i className='text-orange'>Event</i></li>
                                <li><i className='text-purple'>Playing</i></li>
                                <li><i className='text-lightblue'>Art</i></li>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row  >
                    <Col lg={4} sm={6}>
                        <img src={'./image/gallery_01.jpg'} width="100%" className='my-3'></img>
                    </Col >
                    <Col lg={4} sm={6}>
                        <img src={'./image/gallery_02.jpg'} width="100%" className='my-3' ></img>
                    </Col>
                    <Col lg={4} sm={6}>
                        <img src={'./image/gallery_03.jpg'} width="100%" className='my-3' ></img>
                    </Col>
                    <Col lg={4} sm={6}>
                        <img src={'./image/gallery_04.jpg'} width="100%" className='my-3'></img>
                    </Col>
                    <Col lg={4} sm={6}>
                        <img src={'./image/gallery_05.jpg'} width="100%" className='my-3'></img>
                    </Col >
                    <Col lg={4} sm={6}>
                        <img src={'./image/gallery_06.jpg'} width="100%" className='my-3' ></img>
                    </Col>
                </Row>
               <Row className='my-5'>
                                   <Col className='text-center'>
                                       <div >
                                           <Link to="/">
                                               <input className="button " type='button' value="View More Gallery"></input>
                                           </Link>
               
                                       </div>
                                   </Col>
                               </Row>

            </Container>
        </div>
    )
}

export default Schoolgallery