import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

function Event() {
    return (
        <div className='Event'>
            <Container>
                <h2 className=' text-purple text-center mt-5'> Don't Miss Our Event</h2>
                <p className='text-center w-50  mx-auto'  >
                Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.
                </p>
                <Row>
                    <Col>
                    <div className='Event-items'>
                        <div className='Event-item-wide'>
                        <div className='Event-image'>
                            <img src={'./image/event_01.jpg'} width="100%" height="100%"/>
                            <div className='date bg-yellow'>
                                <span className='f-26'>24</span>
                                <p className='text-white'>March</p>
                            </div>
                        </div>
                        <div className='event-content ps-4'>
                            <h3 className='text-yellow pt-4'>Imagination Classes</h3>
                            <FontAwesomeIcon icon={faClock} className='text-red'></FontAwesomeIcon>
                            <span className='text-muted ps-2'>08:00 am - 10:00 am</span>
                            <div>
                                <FontAwesomeIcon className='text-yellow' icon={faHome}></FontAwesomeIcon>
                                <span className='text-muted ps-2'>218 New Newyork Road Newyork</span>
                            </div>
                            <p className='pt-3 '>Dratcaly novate fuly rarched and plications awesome theme education athat plications creative theme education</p>
                            <div>
                                <input className='button bg-yellow' type='button' value="Join Now"></input>
                            </div>
                        </div>
                        </div>
                        <div className='Event-item'>
                        <div className='Event-image'>
                            <img src={'./image/event_01.jpg'} width="100%" height="100%"/>
                            <div className='date bg-orange'>
                                <span className='f-26'>24</span>
                                <p className='text-white'>March</p>
                            </div>
                        </div>
                        <div className='event-content ps-4'>
                            <h3 className='text-orange pt-4'>Imagination Classes</h3>
                            <FontAwesomeIcon icon={faClock} className='text-red'></FontAwesomeIcon>
                            <span className='text-muted ps-2'>08:00 am - 10:00 am</span>
                            <div>
                                <FontAwesomeIcon className='text-yellow' icon={faHome}></FontAwesomeIcon>
                                <span className='text-muted ps-2'>218 New Newyork Road Newyork</span>
                            </div>
                            <p className='pt-3 '>Dratcaly novate fuly rarched and plications awesome theme education athat plications creative theme education</p>
                            <div>
                                <input className='button bg-orange' type='button' value="Join Now"></input>
                            </div>
                        </div>
                        </div>
                        <div className='Event-item-wide right'>
                        <div className='Event-image  '>
                            <img src={'./image/event_01.jpg'} width="100%" height="100%" />
                            <div className='date bg-red'>
                                <span className='f-26'>24</span>
                                <p className='text-white'>March</p>
                            </div> 
                        </div>
                        <div className='event-content ps-4'>
                            <h3 className='text-red pt-4'>Imagination Classes</h3>
                            <FontAwesomeIcon icon={faClock} className='text-red'></FontAwesomeIcon>
                            <span className='text-muted ps-2'>08:00 am - 10:00 am</span>
                            <div>
                                <FontAwesomeIcon className='text-yellow' icon={faHome}></FontAwesomeIcon>
                                <span className='text-muted ps-2'>218 New Newyork Road Newyork</span>
                            </div>
                            <p className='pt-3 '>Dratcaly novate fuly rarched and plications awesome theme education athat plications creative theme education</p>
                            <div>
                                <input className='button bg-red' type='button' value="Join Now"></input>
                            </div>
                        </div>
                        </div>

                    </div>
                    </Col>
                   
                    
                </Row>
            </Container>
        </div>
    )
}

export default Event